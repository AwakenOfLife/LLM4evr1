// Ввод: клавиатура, геймпад и сенсор. Режим ввода определяет видимость сенсорных кнопок.

import { clamp } from "./math";

export type InputMode = "touch" | "keyboard" | "gamepad";

export interface TouchState {
  steer: number;
  gas: number;
  brake: number;
  hand: number;
  nitro: number;
}

const DEADZONE = 0.16;

function applyDeadzone(v: number, dz = DEADZONE): number {
  if (Math.abs(v) < dz) return 0;
  const s = Math.sign(v);
  return s * ((Math.abs(v) - dz) / (1 - dz));
}

export class Input {
  mode: InputMode;
  onModeChange: ((m: InputMode) => void) | null = null;
  /** Запрос паузы/меню (Esc, Start). */
  onPause: (() => void) | null = null;
  /** Запрос взаимодействия (E, A/крестовина). */
  onInteract: (() => void) | null = null;

  readonly touch: TouchState = { steer: 0, gas: 0, brake: 0, hand: 0, nitro: 0 };

  private keys = new Set<string>();
  private look = { x: 0, y: 0 };
  private gpIndex: number | null = null;
  private gpPrev: boolean[] = [];
  private hasCoarsePointer: boolean;
  private lastInteract = 0;

  constructor() {
    this.hasCoarsePointer =
      typeof window !== "undefined" &&
      (navigator.maxTouchPoints > 0 || window.matchMedia?.("(pointer: coarse)").matches === true);
    this.mode = this.hasCoarsePointer ? "touch" : "keyboard";

    window.addEventListener("keydown", this.onKeyDown, { passive: false });
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("blur", () => this.keys.clear());
    window.addEventListener("gamepadconnected", (e) => {
      this.gpIndex = (e as GamepadEvent).gamepad.index;
    });
    window.addEventListener("gamepaddisconnected", (e) => {
      if (this.gpIndex === (e as GamepadEvent).gamepad.index) this.gpIndex = null;
    });
    window.addEventListener(
      "pointerdown",
      (e) => {
        if (e.pointerType === "touch" || e.pointerType === "pen") this.setMode("touch");
      },
      { passive: true }
    );
  }

  setMode(m: InputMode) {
    if (this.mode === m) return;
    this.mode = m;
    this.onModeChange?.(m);
  }

  private onKeyDown = (e: KeyboardEvent) => {
    const k = e.key;
    const driving = [
      "w", "a", "s", "d", "W", "A", "S", "D",
      "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
      " ", "n", "N", "e", "E", "Shift", "c", "C", "r", "R"
    ];
    if (driving.includes(k)) {
      this.setMode("keyboard");
      if (k === " " || k.startsWith("Arrow")) e.preventDefault();
    }
    if (k === "Escape" || k === "p" || k === "P") {
      this.onPause?.();
      return;
    }
    if (k === "e" || k === "E") {
      const now = performance.now();
      if (now - this.lastInteract > 300) {
        this.lastInteract = now;
        this.onInteract?.();
      }
    }
    this.keys.add(k.length === 1 ? k.toLowerCase() : k);
  };

  private onKeyUp = (e: KeyboardEvent) => {
    const k = e.key;
    this.keys.delete(k.length === 1 ? k.toLowerCase() : k);
  };

  private key(...names: string[]): boolean {
    return names.some((n) => this.keys.has(n));
  }

  /** Опрос геймпада; вызывать раз в кадр. */
  private pollGamepad() {
    if (typeof navigator === "undefined" || !navigator.getGamepads) return;
    const pads = navigator.getGamepads();
    let pad: Gamepad | null = null;
    for (const p of pads) {
      if (!p) continue;
      if (this.gpIndex === null) this.gpIndex = p.index;
      if (p.index === this.gpIndex) {
        pad = p;
        break;
      }
    }
    if (!pad) return;

    const btn = (i: number) => pad!.buttons[i]?.value ?? 0;
    const pressed = (i: number) => !!pad!.buttons[i]?.pressed;

    // A / крестовина-вниз — взаимодействие
    if (pressed(0) && !this.gpPrev[0]) {
      const now = performance.now();
      if (now - this.lastInteract > 300) {
        this.lastInteract = now;
        this.onInteract?.();
      }
    }
    if (pressed(9) && !this.gpPrev[9]) this.onPause?.();

    for (let i = 0; i < 17; i++) this.gpPrev[i] = pressed(i);

    const ax = pad.axes[0] ?? 0;
    const ay = pad.axes[1] ?? 0;
    const rx = pad.axes[2] ?? 0;
    const ry = pad.axes[3] ?? 0;
    const rt = Math.max(btn(7), btn(6) > 0.02 ? 0 : 0, applyDeadzone(btn(7)));
    const lt = btn(6);
    const anyInput =
      Math.abs(ax) > DEADZONE || Math.abs(ay) > DEADZONE || rt > 0.08 || lt > 0.08 ||
      pressed(0) || pressed(14) || pressed(15) || pressed(12) || pressed(13);
    if (anyInput) this.setMode("gamepad");

    this.gpSteer = applyDeadzone(ax);
    this.gpThrottle = clamp(Math.max(rt, applyDeadzone(-ay)), 0, 1);
    this.gpBrake = clamp(lt, 0, 1);
    this.gpHand = pressed(2) || pressed(1) ? 1 : 0;
    this.gpNitro = pressed(3) ? 1 : 0;
    this.gpLookX = applyDeadzone(rx);
    this.gpLookY = applyDeadzone(ry);
  }

  private gpSteer = 0;
  private gpThrottle = 0;
  private gpBrake = 0;
  private gpHand = 0;
  private gpNitro = 0;
  private gpLookX = 0;
  private gpLookY = 0;

  update() {
    this.pollGamepad();

    let kbSteer = 0;
    if (this.key("a", "ArrowLeft")) kbSteer -= 1;
    if (this.key("d", "ArrowRight")) kbSteer += 1;
    const kbGas = this.key("w", "ArrowUp") ? 1 : 0;
    const kbBrake = this.key("s", "ArrowDown") ? 1 : 0;

    this.steer = clamp(this.touch.steer + kbSteer + this.gpSteer, -1, 1);
    this.throttle = clamp(Math.max(this.touch.gas, kbGas, this.gpThrottle), 0, 1);
    this.brake = clamp(Math.max(this.touch.brake, kbBrake, this.gpBrake), 0, 1);
    this.handbrake = Math.max(this.touch.hand, this.key(" ") ? 1 : 0, this.gpHand) > 0.5;
    this.nitro = Math.max(this.touch.nitro, this.key("n") ? 1 : 0, this.gpNitro) > 0.5;

    this.look.x = clamp(this.gpLookX, -1, 1);
    this.look.y = clamp(this.gpLookY, -1, 1);
  }

  get lookX() {
    return this.look.x;
  }
  get lookY() {
    return this.look.y;
  }

  // Поля, заполняемые в update()
  steer = 0;
  throttle = 0;
  brake = 0;
  handbrake = false;
  nitro = false;
}
