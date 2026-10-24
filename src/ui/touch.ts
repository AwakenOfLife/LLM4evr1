// Сенсорное управление: зона руля слева, педали справа.
// Скрывается при подключении геймпада/клавиатуры и возвращается по касанию.

import type { Input } from "../utils/input";

interface TouchButton {
  el: HTMLElement;
  pressed: boolean;
  pointerId: number | null;
}

export class TouchControls {
  root: HTMLElement;
  private input: Input;
  private steerZone: HTMLElement;
  private knob: HTMLElement;
  private ring: HTMLElement;
  private buttons: TouchButton[] = [];
  private visible = true;

  private steerPointer: number | null = null;
  private steerStartX = 0;
  private steerStartY = 0;
  private steerOriginX = 0;
  private steerOriginY = 0;

  /** Кнопка сцепки/прицепа. */
  private hitchBtn: TouchButton | null = null;

  onMenu: (() => void) | null = null;

  constructor(root: HTMLElement, input: Input) {
    this.root = root;
    this.input = input;
    root.innerHTML = "";

    // Зона руления.
    this.steerZone = document.createElement("div");
    this.steerZone.className = "steer-zone";
    this.ring = document.createElement("div");
    this.ring.className = "steer-ring hidden";
    this.knob = document.createElement("div");
    this.knob.className = "steer-knob hidden";
    this.steerZone.appendChild(this.ring);
    this.steerZone.appendChild(this.knob);
    root.appendChild(this.steerZone);

    this.bindSteerZone();

    // Педали.
    this.addButton("gas", "ГАЗ", "gas");
    this.addButton("brake", "ТОРМОЗ", "brake");
    this.addButton("hand", "РУЧНИК", "hand");
    const nitro = this.addButton("nitro", "НИТРО", "nitro");
    nitro.el.classList.add("hidden");
    this.hitchBtn = this.addButton("hitch", "ПРИЦЕП", "hitch");
    this.hitchBtn.el.classList.add("hidden");
    this.hitchBtn.el.onclick = () => this.onHitch?.();

    // Кнопка меню.
    const menu = document.createElement("div");
    menu.className = "tbtn menu";
    menu.textContent = "☰";
    menu.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.onMenu?.();
    });
    root.appendChild(menu);

    this.layout();
  }

  onHitch: (() => void) | null = null;

  private addButton(cls: string, label: string, axis: "gas" | "brake" | "hand" | "nitro" | "hitch"): TouchButton {
    const el = document.createElement("div");
    el.className = `tbtn ${cls}`;
    el.textContent = label;
    this.root.appendChild(el);

    const btn: TouchButton = { el, pressed: false, pointerId: null };

    const down = (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      el.setPointerCapture?.(e.pointerId);
      btn.pointerId = e.pointerId;
      btn.pressed = true;
      el.classList.add("active");
      if (axis !== "hitch") this.input.touch[axis] = 1;
    };
    const up = (e: PointerEvent) => {
      if (btn.pointerId !== null && e.pointerId !== btn.pointerId) return;
      btn.pointerId = null;
      btn.pressed = false;
      el.classList.remove("active");
      if (axis !== "hitch") this.input.touch[axis] = 0;
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("pointerleave", up);
    // Дополнительно: касание вне кнопки не должно «залипать».
    el.addEventListener("contextmenu", (e) => e.preventDefault());

    this.buttons.push(btn);
    return btn;
  }

  private bindSteerZone() {
    const z = this.steerZone;

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      if (this.steerPointer !== null) return;
      this.steerPointer = e.pointerId;
      z.setPointerCapture?.(e.pointerId);
      const rect = z.getBoundingClientRect();
      this.steerStartX = e.clientX;
      this.steerStartY = e.clientY;
      this.steerOriginX = e.clientX;
      this.steerOriginY = e.clientY;
      this.knob.style.left = `${e.clientX - rect.left}px`;
      this.knob.style.top = `${e.clientY - rect.top}px`;
      this.ring.style.left = `${e.clientX - rect.left}px`;
      this.ring.style.top = `${e.clientY - rect.top}px`;
      this.knob.classList.remove("hidden");
      this.ring.classList.remove("hidden");
    };

    const onMove = (e: PointerEvent) => {
      if (this.steerPointer !== e.pointerId) return;
      e.preventDefault();
      const dx = e.clientX - this.steerStartX;
      const limit = 78;
      const ratio = Math.max(-1, Math.min(1, dx / limit));
      this.input.touch.steer = ratio;
      const rect = z.getBoundingClientRect();
      this.knob.style.left = `${this.steerOriginX - rect.left + ratio * limit}px`;
      this.knob.style.top = `${this.steerOriginY - rect.top}px`;
    };

    const onUp = (e: PointerEvent) => {
      if (this.steerPointer !== e.pointerId) return;
      this.steerPointer = null;
      this.input.touch.steer = 0;
      this.knob.classList.add("hidden");
      this.ring.classList.add("hidden");
    };

    z.addEventListener("pointerdown", onDown);
    z.addEventListener("pointermove", onMove);
    z.addEventListener("pointerup", onUp);
    z.addEventListener("pointercancel", onUp);
    z.addEventListener("pointerleave", onUp);
  }

  /** Показать нитро (если куплено). */
  setNitroAvailable(on: boolean) {
    const b = this.buttons.find((x) => x.el.classList.contains("nitro"));
    b?.el.classList.toggle("hidden", !on);
  }

  setHitchVisible(on: boolean, label = "ПРИЦЕП") {
    if (!this.hitchBtn) return;
    this.hitchBtn.el.classList.toggle("hidden", !on);
    this.hitchBtn.el.textContent = label;
  }

  setVisible(v: boolean) {
    if (this.visible === v) return;
    this.visible = v;
    this.root.classList.toggle("hidden", !v);
    if (!v) {
      // Сброс зажатых состояний.
      this.input.touch.steer = 0;
      this.input.touch.gas = 0;
      this.input.touch.brake = 0;
      this.input.touch.hand = 0;
      this.input.touch.nitro = 0;
      for (const b of this.buttons) {
        b.pressed = false;
        b.el.classList.remove("active");
      }
    }
  }

  get isVisible() {
    return this.visible;
  }

  private layout() {
    // Позиции заданы в CSS, здесь только начальное состояние.
  }

  destroy() {
    this.root.innerHTML = "";
    this.root.classList.add("hidden");
  }
}
