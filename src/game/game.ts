// Игра: сцена, камера, мир, игрок, системы. Точка сборки.

import * as THREE from "three";
import { Input } from "../utils/input";
import { ChunkManager } from "../world/chunks";
import { RoadIndex, gatherRoads } from "../world/roads";
import { heightAt } from "../world/terrain";
import { townAt, nearbySettlements } from "../world/settlements";
import { CHUNK_SIZE, FOG_FAR, FOG_NEAR, LOAD_RADIUS, COLORS } from "../world/config";
import { buildVehicleModel, buildTrailerModel, type VehicleModel } from "../vehicles/visuals";
import { getVehicle, type VehicleDef } from "../vehicles/catalog";
import { effectiveStats, baseAccel, nextUpgradeCost, type UpgradeKey } from "../vehicles/upgrades";
import { createVehicleState, stepVehicle, resolveCollisions, type VehicleState } from "../vehicles/physics";
import { TRAILER_BY_ID, updateTrailer, type TrailerState, type TrailerDef } from "../vehicles/trailers";
import { loadSave, writeSave, defaultSave, type SaveData } from "./save";
import {
  refillOffers, updateMissionState, payout, vehicleFitsMission,
  levelFromXp, type Mission
} from "./missions";
import { Rng, clamp, lerp, dist2, formatMoney, TAU, angleDiff } from "../utils/math";
import { Hud } from "../ui/hud";
import { Minimap } from "../ui/minimap";
import { TouchControls } from "../ui/touch";
import { Panels } from "../ui/panels";
import { AudioEngine } from "../ui/audio";

export interface GameOptions {
  canvas: HTMLCanvasElement;
  uiRoot: HTMLElement;
  touchRoot: HTMLElement;
  onProgress: (pct: number, text: string) => void;
}

interface TrailerRuntime {
  def: TrailerDef;
  state: TrailerState;
  model: THREE.Group;
}

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private sun: THREE.DirectionalLight;
  private hemi: THREE.HemisphereLight;

  private chunks: ChunkManager;
  private roadIndex = new RoadIndex();
  private input = new Input();
  private hud: Hud;
  private minimap: Minimap;
  private touch: TouchControls;
  private panels: Panels;
  private audio = new AudioEngine();

  private save: SaveData;
  private vehicleDef: VehicleDef;
  private vehicleModel: VehicleModel;
  private vstate: VehicleState;
  private trailer: TrailerRuntime | null = null;

  private offers: Mission[] = [];
  private rng = new Rng(Date.now() & 0xffffff);

  private lastTime = 0;
  private acc = 0;
  private running = false;
  private paused = false;
  private raf = 0;

  /** Камера. */
  private camPos = new THREE.Vector3(0, 8, -12);
  private camLook = new THREE.Vector3();
  private camOrbit = 0;
  private camDistBase = 11;

  private payloadRing: THREE.Mesh | null = null;
  private missionMarker: THREE.Group | null = null;
  private offerMarkers: THREE.Group[] = [];
  private beaconSpin = 0;
  private dayTime = 0.32; // 0..1 сутки

  private lastSaveAt = 0;
  private lastRoadRefresh = 0;
  private lastMinimapAt = 0;
  private collisionsCache = new Map<number, unknown>();

  constructor(opts: GameOptions) {
    const { canvas, uiRoot, touchRoot } = opts;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: window.devicePixelRatio < 2,
      powerPreference: "high-performance",
      alpha: false
    });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(COLORS.sky);
    this.scene.fog = new THREE.Fog(COLORS.sky, FOG_NEAR, FOG_FAR);

    this.camera = new THREE.PerspectiveCamera(62, 1, 0.6, 1400);

    this.hemi = new THREE.HemisphereLight(0xcfe6ff, 0x4a5b3c, 0.85);
    this.scene.add(this.hemi);

    this.sun = new THREE.DirectionalLight(0xfff3dd, 1.5);
    this.sun.position.set(120, 190, 80);
    this.scene.add(this.sun);

    this.chunks = new ChunkManager(this.scene);

    this.save = loadSave();
    this.vehicleDef = getVehicle(this.save.activeVehicleId);
    if (!this.ownedRecordIn(this.save, this.vehicleDef.id)) {
      this.save.owned.push({ id: this.vehicleDef.id, upgrades: { engine: 0, brakes: 0, nitro: 0, weight: 0, handling: 0, hitch: 0 }, color: this.vehicleDef.colors[0] });
    }
    const owned = this.save.owned.find((o) => o.id === this.vehicleDef.id)!;
    this.vehicleModel = buildVehicleModel(this.vehicleDef, owned.color, owned.upgrades);
    this.scene.add(this.vehicleModel.root);

    this.vstate = createVehicleState(this.save.position.x, this.save.position.z, this.save.position.heading);

    this.hud = new Hud(uiRoot);
    this.minimap = new Minimap(uiRoot);
    this.touch = new TouchControls(touchRoot, this.input);
    this.audio = new AudioEngine();

    this.panels = new Panels(this.createPanelsOverlay(), this.save, {
      onAcceptMission: (m) => this.acceptMission(m),
      onBuyVehicle: (v, color) => this.buyVehicle(v, color),
      onSelectVehicle: (id) => this.selectVehicle(id),
      onBuyUpgrade: (vid, key) => this.buyUpgrade(vid, key),
      onPaintVehicle: (vid, color) => this.paintVehicle(vid, color),
      onBuyTrailer: (t) => this.buyTrailer(t),
      onToggleTrailer: (id) => this.toggleTrailer(id),
      onClose: () => {
        this.paused = false;
        this.audio.click();
      },
      onReset: () => {
        localStorage.clear();
        location.reload();
      },
      onSettingChange: (k, v) => this.changeSetting(k, v)
    });

    this.wireInput();
    this.syncTouchVisibility(true);
    this.resize();
    window.addEventListener("resize", this.resize);

    // Восстанавливаем прицеп из сейва.
    if (this.save.activeTrailerId) {
      const rec = this.save.trailers.find((t) => t.id === this.save.activeTrailerId && t.attached);
      if (rec) this.attachTrailer(TRAILER_BY_ID.get(rec.id)!);
    }
    this.refreshTrailerButton();
    this.updateHudVehicle();
    this.applyQuality();

    // Отладочный доступ (используется автотестами и консолью).
    (window as unknown as { __game?: Game }).__game = this;
  }

  /** Снимок состояния для тестов и диагностики. */
  debugState() {
    return {
      x: this.vstate.x,
      z: this.vstate.z,
      y: this.vstate.y,
      speed: this.vstate.speed,
      heading: this.vstate.heading,
      chunks: this.chunks.loadedCount,
      money: this.save.money,
      vehicle: this.vehicleDef.id,
      trailer: this.trailer?.def.id ?? null,
      town: townAt(this.vstate.x, this.vstate.z)?.name ?? null,
      offers: this.offers.length,
      mission: this.save.activeMission?.title ?? null,
      missionState: this.save.activeMission?.state ?? null,
      mode: this.input.mode
    };
  }

  private createPanelsOverlay(): HTMLElement {
    const el = document.createElement("div");
    el.className = "screen hidden";
    el.style.zIndex = "30";
    document.getElementById("app")!.appendChild(el);
    return el;
  }

  private wireInput() {
    this.input.onModeChange = () => this.syncTouchVisibility();
    this.input.onPause = () => this.togglePause();
    this.input.onInteract = () => this.interact();

    this.touch.onMenu = () => this.openPanel("missions");
    this.touch.onHitch = () => this.quickHitch();

    // Горячие клавиши панелей.
    window.addEventListener("keydown", (e) => {
      if (this.panels.isOpen) return;
      const k = e.key.toLowerCase();
      if (k === "j" || k === "з") this.openPanel("missions");
      if (k === "g" || k === "п") this.openPanel("garage");
      if (k === "t" || k === "е") this.openPanel("dealer");
      if (k === "h" || k === "р") this.audio.horn();
    });
  }

  /** Синхронизация видимости сенсорных кнопок с режимом ввода. */
  private syncTouchVisibility(force = false) {
    if (!this.save.settings.showTouchControls) {
      this.touch.setVisible(false);
      return;
    }
    const shouldShow = this.input.mode === "touch";
    if (force || this.touch.isVisible !== shouldShow) this.touch.setVisible(shouldShow);
  }

  openPanel(tab: "missions" | "dealer" | "garage" | "trailers" | "settings") {
    this.panels.setOffers(this.offers);
    this.panels.open(tab);
    this.paused = true;
    this.audio.click();
    this.input.touch.gas = 0;
    this.input.touch.brake = 0;
    this.input.touch.steer = 0;
  }

  togglePause() {
    if (this.panels.isOpen) {
      this.panels.close();
      return;
    }
    this.openPanel("settings");
  }

  private applyQuality() {
    const q = this.save.settings.quality;
    const dprCap = q === "low" ? 1 : q === "medium" ? 1.5 : 2;
    this.renderer.setPixelRatio(Math.min(dprCap, window.devicePixelRatio || 1));
    this.camDistBase = q === "low" ? 9 : 11;
    this.resize();
  }

  private changeSetting(key: keyof SaveData["settings"], value: unknown) {
    (this.save.settings as Record<string, unknown>)[key] = value;
    if (key === "quality") this.applyQuality();
    if (key === "sound") {
      this.audio.enabled = !!value;
      if (!value) this.audio.suspend();
    }
    if (key === "showTouchControls") this.syncTouchVisibility(true);
    this.persist();
  }

  private resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
  };

  /** Загрузка стартовых чанков. */
  async preload(onProgress: (pct: number, text: string) => void) {
    onProgress(4, "Готовим мир…");
    await frame();
    const p = this.vstate;
    const total = (LOAD_RADIUS * 2 + 1) ** 2;
    let done = 0;
    // Строим концентрическими кругами.
    for (let r = 0; r <= LOAD_RADIUS; r++) {
      const gx = Math.floor(p.x / CHUNK_SIZE);
      const gz = Math.floor(p.z / CHUNK_SIZE);
      const ring: [number, number][] = [];
      for (let dz = -r; dz <= r; dz++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
          ring.push([gx + dx, gz + dz]);
        }
      }
      this.chunks.preload(p.x, p.z, 0); // инициализация
      // Строим по одному.
      for (const [cx, cz] of ring) {
        (this.chunks as unknown as { buildChunk: (cx: number, cz: number) => void }).buildChunk(cx, cz);
        done++;
        if (done % 3 === 0) {
          onProgress(Math.min(96, 6 + (done / total) * 88), `Прогрузка территорий… ${done}/${total}`);
          await frame();
        }
      }
    }
    onProgress(97, "Расставляем транспорт…");
    await frame();
    this.refreshRoadIndex(true);
    this.refillMissionOffers();
    onProgress(100, "Поехали!");
    await frame(120);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    const loop = (t: number) => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(loop);
      const dt = Math.min(0.1, (t - this.lastTime) / 1000);
      this.lastTime = t;
      this.update(dt, t);
      this.render();
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.persist();
  }

  private refreshRoadIndex(force = false) {
    const now = performance.now();
    if (!force && now - this.lastRoadRefresh < 900) return;
    this.lastRoadRefresh = now;
    this.roadIndex.setSegments(gatherRoads(this.vstate.x, this.vstate.z, 1));
  }

  private refillMissionOffers() {
    refillOffers(this.offers, {
      x: this.vstate.x,
      z: this.vstate.z,
      playerLevel: levelFromXp(this.save.xp),
      vehicle: this.vehicleDef,
      rng: this.rng,
      now: Date.now()
    }, 5);
    this.panels.setOffers(this.offers);
    this.rebuildOfferMarkers();
  }

  // ---------- Экономика ----------
  private ownedRecord(id: string) {
    return this.save.owned.find((o) => o.id === id);
  }

  private ownedRecordIn(save: SaveData, id: string) {
    return save.owned.find((o) => o.id === id);
  }

  private buyVehicle(v: VehicleDef, color: number) {
    if (this.save.money < v.price) {
      this.hud.toast("Не хватает денег", "bad");
      return;
    }
    if (this.ownedRecord(v.id)) return;
    this.save.money -= v.price;
    this.save.owned.push({ id: v.id, upgrades: { engine: 0, brakes: 0, nitro: 0, weight: 0, handling: 0, hitch: 0 }, color });
    this.save.activeVehicleId = v.id;
    this.hud.toast(`Куплено: ${v.brand} ${v.name}`, "good");
    this.audio.cash();
    this.spawnVehicle(v.id);
    this.panels.updateSave(this.save);
    this.persist();
  }

  private selectVehicle(id: string) {
    if (!this.ownedRecord(id)) return;
    this.save.activeVehicleId = id;
    this.spawnVehicle(id);
    this.panels.updateSave(this.save);
    this.persist();
    this.panels.close();
    this.hud.toast("Транспорт выбран", "good");
  }

  private spawnVehicle(id: string) {
    const def = getVehicle(id);
    const rec = this.ownedRecord(id)!;
    // Сохраняем позицию.
    const { x, z, heading } = { x: this.vstate.x, z: this.vstate.z, heading: this.vstate.heading };

    this.scene.remove(this.vehicleModel.root);
    this.vehicleModel.root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh && m.geometry && m.geometry.userData.dispose) m.geometry.dispose();
    });

    this.vehicleDef = def;
    this.vehicleModel = buildVehicleModel(def, rec.color, rec.upgrades);
    this.scene.add(this.vehicleModel.root);
    this.vstate = createVehicleState(x, z, heading);
    this.vstate.y = heightAt(x, z);

    // Прицеп мог стать несовместимым.
    if (this.trailer) {
      const stats = this.trailerStats();
      if (stats && stats.def.mass + stats.def.capacity > def.towMax) {
        this.detachTrailer();
      }
    }
    this.refreshTrailerButton();
    this.touch.setNitroAvailable(rec.upgrades.nitro > 0);
    this.updateHudVehicle();
  }

  private buyUpgrade(vehicleId: string, key: UpgradeKey) {
    const rec = this.ownedRecord(vehicleId);
    if (!rec) return;
    const level = rec.upgrades[key];
    const cost = nextUpgradeCost(key, level);
    if (cost === null) return;
    if (this.save.money < cost) {
      this.hud.toast("Не хватает денег", "bad");
      return;
    }
    this.save.money -= cost;
    rec.upgrades[key] = level + 1;
    this.audio.cash();
    this.hud.toast("Улучшение установлено", "good");

    if (vehicleId === this.vehicleDef.id) {
      this.scene.remove(this.vehicleModel.root);
      this.vehicleModel = buildVehicleModel(this.vehicleDef, rec.color, rec.upgrades);
      this.scene.add(this.vehicleModel.root);
      this.touch.setNitroAvailable(rec.upgrades.nitro > 0);
      this.refreshTrailerButton();
    }
    this.panels.updateSave(this.save);
    this.persist();
  }

  private paintVehicle(vehicleId: string, color: number) {
    const rec = this.ownedRecord(vehicleId);
    if (!rec) return;
    rec.color = color;
    if (vehicleId === this.vehicleDef.id) {
      this.vehicleModel.bodyMat.color.setHex(color);
      this.vehicleModel.bodyMat.needsUpdate = true;
    }
    this.audio.click();
    this.panels.updateSave(this.save);
    this.persist();
  }

  private buyTrailer(t: TrailerDef) {
    if (this.save.money < t.price) {
      this.hud.toast("Не хватает денег", "bad");
      return;
    }
    this.save.money -= t.price;
    this.save.trailers.push({ id: t.id, attached: true });
    this.save.activeTrailerId = t.id;
    this.audio.cash();
    this.hud.toast(`Куплен ${t.name}`, "good");
    this.attachTrailer(t);
    this.panels.updateSave(this.save);
    this.persist();
  }

  private toggleTrailer(id: string) {
    const rec = this.save.trailers.find((t) => t.id === id);
    if (!rec) return;
    if (rec.attached) {
      this.detachTrailer();
    } else {
      const def = TRAILER_BY_ID.get(id);
      if (!def) return;
      const ownDef = getVehicle(this.save.activeVehicleId);
      if (def.mass + def.capacity > ownDef.towMax) {
        this.hud.toast("Слишком тяжёлый прицеп для этой машины", "bad");
        return;
      }
      rec.attached = true;
      this.save.activeTrailerId = id;
      this.attachTrailer(def);
    }
    this.panels.updateSave(this.save);
    this.persist();
  }

  private quickHitch() {
    // Быстрая сцепка/отсцепка ближайшего купленного прицепа.
    const list = this.save.trailers;
    if (list.length === 0) {
      this.hud.toast("Прицепов нет — купите в гараже", "bad");
      return;
    }
    if (this.trailer) {
      this.detachTrailer();
      this.hud.toast("Прицеп отцеплен");
    } else {
      const rec = list[0];
      const def = TRAILER_BY_ID.get(rec.id);
      if (def) {
        rec.attached = true;
        this.save.activeTrailerId = rec.id;
        this.attachTrailer(def);
        this.hud.toast(`Прицеплен ${def.name}`, "good");
      }
    }
    this.refreshTrailerButton();
    this.persist();
  }

  private trailerStats(): { def: TrailerDef } | null {
    return this.trailer ? { def: this.trailer.def } : null;
  }

  private attachTrailer(def: TrailerDef) {
    this.detachTrailer();
    const model = buildTrailerModel(def.kind, def.color);
    this.scene.add(model);
    const root = this.vehicleModel.root;
    const hitchX = this.vstate.x - Math.cos(this.vstate.heading) * (this.vehicleDef.body.length * 0.5 + 0.2);
    const hitchZ = this.vstate.z - Math.sin(this.vstate.heading) * (this.vehicleDef.body.length * 0.5 + 0.2);
    this.trailer = {
      def,
      state: { x: hitchX - Math.cos(this.vstate.heading) * def.length * 0.5, z: hitchZ - Math.sin(this.vstate.heading) * def.length * 0.5, heading: this.vstate.heading, load: 0 },
      model
    };
    void root;
    this.refreshTrailerButton();
  }

  private detachTrailer() {
    if (!this.trailer) return;
    this.scene.remove(this.trailer.model);
    this.trailer = null;
    for (const rec of this.save.trailers) rec.attached = false;
    this.save.activeTrailerId = null;
    this.refreshTrailerButton();
  }

  private refreshTrailerButton() {
    const hasTrailer = !!this.trailer;
    const canHitch = (this.ownedRecord(this.save.activeVehicleId)?.upgrades.hitch ?? 0) > 0;
    const anyOwned = this.save.trailers.length > 0;
    if (!canHitch || !anyOwned) {
      this.touch.setHitchVisible(false);
      return;
    }
    this.touch.setHitchVisible(this.input.mode === "touch", hasTrailer ? "ОТЦЕП" : "ПРИЦЕП");
  }

  // ---------- Задания ----------
  private acceptMission(m: Mission) {
    if (this.save.activeMission) return;
    if (!vehicleFitsMission(this.vehicleDef, m)) {
      this.hud.toast("Этот транспорт не подходит", "bad");
      return;
    }
    m.state = "accepted";
    m.timeLeft = m.timeLimit;
    this.save.activeMission = m;
    this.offers = this.offers.filter((o) => o.id !== m.id);
    this.panels.setOffers(this.offers);
    this.rebuildOfferMarkers();
    this.panels.close();
    this.hud.toast(`Задание взято: ${m.title}`, "good");
    this.audio.click();
    this.persist();
  }

  private interact() {
    // E/крестовина: взять ближайший заказ.
    if (this.save.activeMission) return;
    let best: Mission | null = null;
    let bestD = Infinity;
    for (const o of this.offers) {
      if (o.state !== "offer") continue;
      const d = dist2(this.vstate.x, this.vstate.z, o.fromX, o.fromZ);
      if (d < bestD) {
        bestD = d;
        best = o;
      }
    }
    if (best && bestD < 60) this.acceptMission(best);
    else this.openPanel("missions");
  }

  // ---------- Цикл ----------
  private update(dt: number, tMs: number) {
    this.input.update();

    if (this.input.mode === "touch") this.syncTouchVisibility();

    if (this.panels.isOpen) {
      this.audio.setEngine(0, false);
      return;
    }

    // Стриминг чанков.
    const budget = this.save.settings.quality === "low" ? 1 : this.save.settings.quality === "medium" ? 2 : 3;
    this.chunks.update(this.vstate.x, this.vstate.z, budget);
    this.refreshRoadIndex();

    // Физика.
    const rec = this.ownedRecord(this.vehicleDef.id)!;
    const trailerMass = this.trailer ? this.trailer.def.mass + this.trailer.state.load : 0;
    const stats = effectiveStats(this.vehicleDef, rec.upgrades, trailerMass);
    const roadOffset = this.roadIndex.offset(this.vstate.x, this.vstate.z);

    const driving = !this.panels.isOpen;
    stepVehicle(this.vstate, stats, {
      steer: this.input.steer,
      throttle: driving ? this.input.throttle : 0,
      brake: driving ? this.input.brake : 0,
      handbrake: this.input.handbrake,
      nitro: this.input.nitro
    }, dt, roadOffset);

    // Коллизии.
    const boxes = this.chunks.collisionsNear(this.vstate.x, this.vstate.z, 26);
    const prevBump = this.vstate.bump;
    resolveCollisions(this.vstate, boxes, this.vehicleDef.body.length * 0.5, this.vehicleDef.body.width * 0.5);
    if (this.vstate.bump > 0.35 && prevBump < 0.3) {
      this.audio.bump(this.vstate.bump);
      this.hud.toast("Осторожнее!", "bad", 1200);
    }

    // Прицеп.
    if (this.trailer) {
      const hitchBack = this.vehicleDef.body.length * 0.5 + 0.15;
      const hx = this.vstate.x - Math.cos(this.vstate.heading) * hitchBack;
      const hz = this.vstate.z - Math.sin(this.vstate.heading) * hitchBack;
      updateTrailer(this.trailer.state, this.trailer.def, hx, hz, this.vstate.heading, dt, this.vstate.speed);
      this.trailer.model.position.set(this.trailer.state.x, heightAt(this.trailer.state.x, this.trailer.state.z), this.trailer.state.z);
      this.trailer.model.rotation.y = -this.trailer.state.heading;
    }

    // Визуал машины.
    this.syncVehicleTransform(dt);

    // Миссии.
    this.updateMissions(dt, tMs);

    // Камера.
    this.updateCamera(dt);

    // Свет / время суток.
    this.dayTime = (this.dayTime + dt / 420) % 1;
    this.updateSky();

    // HUD.
    this.hud.setSpeed(this.vstate.speed, this.vstate.speed < -0.3, true);
    this.hud.setNitro(stats.nitroCharge > 0, this.vstate.nitro, this.vstate.nitroActive);
    this.hud.setMoney(this.save.money);
    this.audio.setEngine(this.vstate.rpm, true);
    this.audio.enabled = this.save.settings.sound;

    // Миникарта (5 раз в секунду).
    if (tMs - this.lastMinimapAt > 200) {
      this.lastMinimapAt = tMs;
      this.minimap.update({
        x: this.vstate.x,
        z: this.vstate.z,
        heading: this.vstate.heading,
        mission: this.save.activeMission,
        offers: this.offers
      });
    }

    // Подсказка о взаимодействии.
    this.updateHint();

    // Автосейв.
    if (tMs - this.lastSaveAt > 12000) {
      this.lastSaveAt = tMs;
      this.syncPositionToSave();
      this.persist();
    }

    // Мигалки и значки.
    this.beaconSpin += dt * 6;
    for (const b of this.vehicleModel.beacons) {
      b.visible = Math.sin(this.beaconSpin) > -0.2;
    }
    if (this.missionMarker) this.missionMarker.rotation.y += dt * 0.8;
    for (const m of this.offerMarkers) m.rotation.y += dt * 1.2;
  }

  private syncVehicleTransform(dt: number) {
    const m = this.vehicleModel.root;
    m.position.set(this.vstate.x, this.vstate.y, this.vstate.z);
    m.rotation.set(this.vstate.pitch, -this.vstate.heading, this.vstate.roll, "YXZ");

    // Вращение колёс.
    const spin = this.vstate.speed * dt / Math.max(0.2, this.vehicleModel.wheelRadius);
    for (const w of this.vehicleModel.wheels) {
      w.rotation.z -= spin;
    }
    // Передние колёса поворачиваются.
    const frontCount = Math.min(2, this.vehicleModel.wheels.length);
    for (let i = 0; i < frontCount; i++) {
      this.vehicleModel.wheels[i].rotation.y = -this.vstate.steerSmooth * 0.42;
    }

    // Баллон нитро светится при использовании.
    for (const e of this.vehicleModel.extras) {
      if (e.userData.isNitro) e.visible = this.vstate.nitroActive;
    }
  }

  private updateMissions(dt: number, tMs: number) {
    // Обновление предложений раз в ~20 секунд.
    if (tMs % 1000 < 20 && this.offers.length < 3) {
      this.refillMissionOffers();
    }

    const m = this.save.activeMission;
    if (!m) {
      this.hud.setMission(null, 0, 0);
      this.clearMarkers();
      return;
    }

    updateMissionState(m, this.vstate.x, this.vstate.z, dt, (ev) => {
      if (ev === "pickup") {
        this.hud.toast("Груз принят — в путь!", "good");
        this.audio.click();
      } else if (ev === "done") {
        this.completeMission();
      } else if (ev === "fail") {
        this.failMission();
      }
    });

    if (m.state === "accepted" || m.state === "in_progress") {
      this.hud.setMission(m, this.vstate.x, this.vstate.z);
      this.updateMarkers(m);
    } else {
      this.hud.setMission(null, 0, 0);
      this.clearMarkers();
    }
  }

  private completeMission() {
    const m = this.save.activeMission;
    if (!m) return;
    const money = payout(m);
    this.save.money += money;
    this.save.stats.missionsDone++;
    this.save.stats.earned += money;
    const xpGain = Math.round(m.reward * 0.16);
    this.save.xp += xpGain;
    m.state = "done";
    this.save.activeMission = null;
    this.audio.success();
    this.audio.cash();
    this.hud.toast(`Задание выполнено: +${formatMoney(money)}`, "good", 3200);
    this.hud.toast(`+${xpGain} опыта`, "good", 2400);
    this.clearMarkers();
    this.refillMissionOffers();
    this.persist();
  }

  private failMission() {
    const m = this.save.activeMission;
    if (!m) return;
    m.state = "failed";
    this.save.activeMission = null;
    this.audio.fail();
    this.hud.toast("Время вышло — заказ потерян", "bad", 3000);
    this.clearMarkers();
    this.refillMissionOffers();
    this.persist();
  }

  private updateMarkers(m: Mission) {
    const target = m.state === "accepted" ? [m.fromX, m.fromZ] : [m.toX, m.toZ];
    if (!this.missionMarker) {
      this.missionMarker = this.makeMarker(m.state === "accepted" ? 0x7ee787 : 0xff6b6b);
      this.scene.add(this.missionMarker);
    }
    const y = heightAt(target[0], target[1]);
    this.missionMarker.position.set(target[0], y + 2.2 + Math.sin(performance.now() / 400) * 0.25, target[1]);
    const color = m.state === "accepted" ? 0x7ee787 : 0xff6b6b;
    const mat = (this.missionMarker.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial;
    mat.color.setHex(color);
    mat.emissive.setHex(color);
  }

  private clearMarkers() {
    if (this.missionMarker) {
      this.scene.remove(this.missionMarker);
      this.missionMarker = null;
    }
  }

  private rebuildOfferMarkers() {
    for (const m of this.offerMarkers) this.scene.remove(m);
    this.offerMarkers = [];
    for (const o of this.offers) {
      if (o.state !== "offer") continue;
      const marker = this.makeMarker(0xffc247, 0.7);
      const y = heightAt(o.fromX, o.fromZ);
      marker.position.set(o.fromX, y + 2.0, o.fromZ);
      this.scene.add(marker);
      this.offerMarkers.push(marker);
    }
  }

  private makeMarker(color: number, scale = 1): THREE.Group {
    const g = new THREE.Group();
    const geo = new THREE.OctahedronGeometry(0.9 * scale, 0);
    const mat = new THREE.MeshStandardMaterial({
      color, emissive: color, emissiveIntensity: 0.9, roughness: 0.4, metalness: 0.1
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.material.userData = { beacon: true };
    g.add(mesh);
    // Столб света.
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5 * scale, 0.5 * scale, 14, 8, 1, true),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.14, side: THREE.DoubleSide, depthWrite: false })
    );
    pillar.position.y = 5;
    g.add(pillar);
    return g;
  }

  private updateHint() {
    const m = this.save.activeMission;
    if (m) {
      this.hud.setHint(null);
      return;
    }
    let nearOffer: Mission | null = null;
    for (const o of this.offers) {
      if (o.state !== "offer") continue;
      if (dist2(this.vstate.x, this.vstate.z, o.fromX, o.fromZ) < 40) {
        nearOffer = o;
        break;
      }
    }
    if (nearOffer) {
      this.hud.setHint(`E — взять заказ «${nearOffer.title}»`);
    } else {
      const t = townAt(this.vstate.x, this.vstate.z);
      if (t) this.hud.setHint(`Вы в ${t.name} · J — задания`);
      else this.hud.setHint(null);
    }
  }

  private updateCamera(dt: number) {
    const speedFactor = clamp(Math.abs(this.vstate.speed) / 40, 0, 1);
    const dist = this.camDistBase + speedFactor * 3.4 + (this.vehicleDef.body.length > 6 ? 4.5 : 0);
    const height = 4.4 + speedFactor * 1.1 + (this.vehicleDef.body.height > 2.4 ? 1.6 : 0);

    // Ручной поворот камеры правым стиком.
    if (Math.abs(this.input.lookX) > 0.05) this.camOrbit += this.input.lookX * dt * 2.2;
    else this.camOrbit = lerp(this.camOrbit, 0, clamp(1.6 * dt, 0, 1));

    const heading = this.vstate.heading + Math.PI + this.camOrbit;
    const targetX = this.vstate.x + Math.cos(heading) * dist;
    const targetZ = this.vstate.z + Math.sin(heading) * dist;
    const targetY = this.vstate.y + height;

    const k = clamp(6.5 * dt, 0, 1);
    this.camPos.x = lerp(this.camPos.x, targetX, k);
    this.camPos.y = lerp(this.camPos.y, targetY, clamp(4.5 * dt, 0, 1));
    this.camPos.z = lerp(this.camPos.z, targetZ, k);

    // Не проваливаемся под землю.
    const ground = heightAt(this.camPos.x, this.camPos.z) + 1.6;
    if (this.camPos.y < ground) this.camPos.y = ground;

    this.camera.position.copy(this.camPos);

    const lookX = this.vstate.x + Math.cos(this.vstate.heading) * (6 + speedFactor * 6);
    const lookZ = this.vstate.z + Math.sin(this.vstate.heading) * (6 + speedFactor * 6);
    this.camLook.set(lookX, this.vstate.y + 1.5, lookZ);
    this.camera.lookAt(this.camLook);

    // FOV от скорости.
    const targetFov = 62 + speedFactor * 8 + (this.vstate.nitroActive ? 6 : 0);
    this.camera.fov = lerp(this.camera.fov, targetFov, clamp(3 * dt, 0, 1));
    this.camera.updateProjectionMatrix();
  }

  private updateSky() {
    const t = this.dayTime;
    // 0 = ночь, 0.25 = утро, 0.5 = полдень, 0.75 = вечер.
    const day = Math.max(0, Math.sin(t * TAU - Math.PI / 2) * 0.5 + 0.5);
    const nightColor = new THREE.Color(0x0a1220);
    const dayColor = new THREE.Color(COLORS.sky);
    const color = nightColor.clone().lerp(dayColor, smooth(day));
    this.scene.background = color;
    (this.scene.fog as THREE.Fog).color.copy(color);

    this.sun.intensity = lerp(0.06, 1.55, day);
    this.sun.position.set(
      Math.cos(t * TAU) * 220,
      Math.max(20, Math.sin(t * TAU) * 260),
      Math.sin(t * TAU * 0.7) * 160
    );
    this.hemi.intensity = lerp(0.22, 0.92, day);
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
  }

  private updateHudVehicle() {
    const rec = this.ownedRecord(this.vehicleDef.id);
    const tw = this.trailer ? ` · прицеп ${this.trailer.def.mass} кг` : "";
    this.hud.setVehicle(`${this.vehicleDef.brand} ${this.vehicleDef.name}`,
      `${this.vehicleDef.power} л.с. · ${this.vehicleDef.cargo} кг${tw}`);
    if (!rec) return;
  }

  private syncPositionToSave() {
    this.save.position = { x: this.vstate.x, z: this.vstate.z, heading: this.vstate.heading };
    // Пробег считаем по одометру (в метрах).
    this.save.stats.kmDriven = Math.max(this.save.stats.kmDriven, this.vstate.odometer / 1000);
  }

  private persist() {
    this.syncPositionToSave();
    this.save.activeVehicleId = this.vehicleDef.id;
    if (this.trailer) this.save.activeTrailerId = this.trailer.def.id;
    writeSave(this.save);
  }

  /** Смена транспорта снаружи (для отладки/меню). */
  get state(): SaveData {
    return this.save;
  }
}

function frame(ms = 0): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

function smooth(x: number): number {
  const t = clamp(x, 0, 1);
  return t * t * (3 - 2 * t);
}
