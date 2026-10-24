// Сборка низкополигональных моделей транспорта из примитивов.
// Одна функция на кузов; возвращает Group с колёсами, которые можно крутить.

import * as THREE from "three";
import type { VehicleDef, BodySpec } from "./catalog";
import type { UpgradeLevels } from "./upgrades";

export interface VehicleModel {
  root: THREE.Group;
  /** Кузов относительно земли. */
  wheels: THREE.Object3D[];
  wheelRadius: number;
  /** Материал кузова — меняется при покраске. */
  bodyMat: THREE.MeshStandardMaterial | THREE.MeshLambertMaterial;
  /** Фары (для ночи). */
  lights: THREE.Object3D[];
  /** Мигалки для служб. */
  beacons: THREE.Mesh[];
  /** Дополнительные элементы (спойлер, баллон). */
  extras: THREE.Object3D[];
}

const BOX = new THREE.BoxGeometry(1, 1, 1);
const CYL = new THREE.CylinderGeometry(1, 1, 1, 12);
const CONE = new THREE.ConeGeometry(1, 1, 10);

function mat(color: number, opts: { metal?: number; rough?: number; emissive?: number } = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: opts.metal ?? 0.35,
    roughness: opts.rough ?? 0.55,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissive ? 1 : 0
  });
}

function box(
  parent: THREE.Object3D,
  w: number, h: number, d: number,
  x: number, y: number, z: number,
  m: THREE.Material
): THREE.Mesh {
  const mesh = new THREE.Mesh(BOX, m);
  mesh.scale.set(w, h, d);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function wheel(
  parent: THREE.Object3D,
  x: number, y: number, z: number,
  radius: number, width: number,
  tireMat: THREE.Material
): THREE.Object3D {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);
  const t = new THREE.Mesh(CYL, tireMat);
  t.rotation.z = Math.PI / 2;
  t.scale.set(radius, width, radius);
  pivot.add(t);
  // Диск.
  const rim = new THREE.Mesh(CYL, mat(0xb9bec4, { metal: 0.8, rough: 0.35 }));
  rim.rotation.z = Math.PI / 2;
  rim.scale.set(radius * 0.58, width * 1.02, radius * 0.58);
  pivot.add(rim);
  parent.add(pivot);
  return pivot;
}

export function buildVehicleModel(def: VehicleDef, color: number, upgrades: UpgradeLevels): VehicleModel {
  const g = new THREE.Group();
  const b = def.body;
  const bodyMat = mat(color, { metal: 0.42, rough: 0.44 });
  const darkMat = mat(0x22262b, { metal: 0.2, rough: 0.8 });
  const glassMat = mat(0x86b4d6, { metal: 0.1, rough: 0.12 });
  const tireMat = mat(0x1a1c1f, { metal: 0.0, rough: 0.95 });
  const chromeMat = mat(0xc9ced4, { metal: 0.95, rough: 0.2 });
  const lights: THREE.Object3D[] = [];
  const beacons: THREE.Mesh[] = [];
  const extras: THREE.Object3D[] = [];
  const wheels: THREE.Object3D[] = [];

  const L = b.length;
  const W = b.width;
  const H = b.height;
  const wr = b.wheelRadius;
  const halfL = L / 2;

  // Позиция пола кузова над осью колеса.
  const bodyY = wr * 0.82;

  const headlightMat = mat(0xfff3cf, { emissive: 0xfff0c0, rough: 0.2 });
  const tailMat = mat(0xd0342c, { emissive: 0x8a1410, rough: 0.3 });

  const addLights = (zx: number, front: boolean) => {
    const m = front ? headlightMat : tailMat;
    for (const sx of [-1, 1]) {
      const hl = box(g, 0.30, 0.16, 0.10, sx * (W / 2 - 0.24), bodyY + H * 0.42, zx, m);
      lights.push(hl);
    }
  };

  switch (b.shape) {
    case "hatch":
    case "sedan":
    case "suv": {
      const lowH = H * 0.52;
      const isSuv = b.shape === "suv";
      // Нижняя часть.
      box(g, L * 0.98, lowH, W, 0, bodyY + lowH / 2, 0, bodyMat);
      // Кабина.
      const cabLen = b.shape === "sedan" ? L * 0.52 : L * 0.58;
      const cabOff = b.shape === "sedan" ? -L * 0.03 : -L * 0.06;
      box(g, cabLen, H - lowH + 0.02, W * 0.9, cabOff, bodyY + lowH + (H - lowH) / 2, 0, bodyMat);
      // Стекло лобовое/заднее.
      box(g, cabLen * 0.96, (H - lowH) * 0.62, W * 0.92, cabOff, bodyY + lowH + (H - lowH) * 0.52, 0, glassMat);
      // Бамперы.
      box(g, 0.22, 0.26, W * 1.02, halfL - 0.02, bodyY + 0.24, 0, darkMat);
      box(g, 0.22, 0.26, W * 1.02, -halfL + 0.02, bodyY + 0.24, 0, darkMat);
      addLights(halfL - 0.03, true);
      addLights(-halfL + 0.05, false);
      if (isSuv) {
        // Рейлинги на крыше.
        for (const sz of [-0.42, 0.42]) {
          box(g, cabLen * 0.9, 0.06, 0.07, cabOff, bodyY + H + 0.03, sz * W, darkMat);
        }
      }
      break;
    }
    case "van":
    case "bus": {
      const lowH = H * 0.94;
      box(g, L * 0.98, lowH, W, 0, bodyY + lowH / 2, 0, bodyMat);
      // Лобовое стекло.
      box(g, 0.08, H * 0.4, W * 0.86, halfL - 0.2, bodyY + H * 0.62, 0, glassMat);
      // Боковые стёкла.
      for (let i = 0; i < 3; i++) {
        box(g, L * 0.16, H * 0.26, 0.06, halfL * 0.45 - i * L * 0.22, bodyY + H * 0.64, W / 2 + 0.005, glassMat);
        box(g, L * 0.16, H * 0.26, 0.06, halfL * 0.45 - i * L * 0.22, bodyY + H * 0.64, -W / 2 - 0.005, glassMat);
      }
      box(g, 0.22, 0.3, W * 1.02, halfL - 0.02, bodyY + 0.3, 0, darkMat);
      box(g, 0.22, 0.3, W * 1.02, -halfL + 0.02, bodyY + 0.3, 0, darkMat);
      addLights(halfL - 0.03, true);
      addLights(-halfL + 0.05, false);
      break;
    }
    case "pickup":
    case "flatbed": {
      const cabLen = L * 0.32;
      const cabH = H * 0.72;
      // Кабина.
      box(g, cabLen, cabH, W, halfL - cabLen / 2, bodyY + cabH / 2, 0, bodyMat);
      box(g, cabLen * 0.9, cabH * 0.5, W * 0.94, halfL - cabLen / 2, bodyY + cabH * 0.6, 0, glassMat);
      // Платформа.
      const bedLen = L - cabLen - 0.2;
      box(g, bedLen, 0.16, W, -halfL + bedLen / 2, bodyY + 0.42, 0, darkMat);
      // Борта.
      for (const sz of [-1, 1]) {
        box(g, bedLen, 0.55, 0.08, -halfL + bedLen / 2, bodyY + 0.72, sz * W * 0.48, bodyMat);
      }
      box(g, 0.08, 0.55, W, -halfL + 0.04, bodyY + 0.72, 0, bodyMat);
      addLights(halfL - 0.03, true);
      addLights(-halfL + 0.05, false);
      break;
    }
    case "box": {
      const cabLen = L * 0.26;
      const cabH = H * 0.62;
      box(g, cabLen, cabH, W, halfL - cabLen / 2, bodyY + cabH / 2, 0, bodyMat);
      box(g, cabLen * 0.92, cabH * 0.46, W * 0.94, halfL - cabLen / 2, bodyY + cabH * 0.66, 0, glassMat);
      // Кузов-контейнер.
      const boxLen = L - cabLen - 0.4;
      const boxH = H * 0.92;
      box(g, boxLen, boxH, W, -halfL + boxLen / 2, bodyY + boxH / 2 + 0.35, 0, bodyMat);
      // Рёбра жёсткости.
      for (let i = 0; i < 5; i++) {
        box(g, 0.1, boxH * 0.94, W * 1.02, -halfL + 0.6 + i * (boxLen / 5), bodyY + boxH / 2 + 0.35, 0, darkMat);
      }
      addLights(halfL - 0.03, true);
      addLights(-halfL + 0.6, false);
      break;
    }
    case "tanker": {
      const cabLen = L * 0.26;
      box(g, cabLen, H * 0.6, W, halfL - cabLen / 2, bodyY + H * 0.3, 0, bodyMat);
      const tank = new THREE.Mesh(CYL, chromeMat);
      tank.rotation.z = Math.PI / 2;
      tank.scale.set(W * 0.48, L * 0.66, W * 0.48);
      tank.position.set(-halfL * 0.16, bodyY + W * 0.55, 0);
      g.add(tank);
      addLights(halfL - 0.03, true);
      break;
    }
    case "loader": {
      // Рама.
      box(g, L * 0.5, H * 0.26, W * 0.8, 0.2, bodyY + H * 0.13, 0, bodyMat);
      // Кабина.
      box(g, L * 0.3, H * 0.42, W * 0.62, -0.35, bodyY + H * 0.45, 0, bodyMat);
      box(g, L * 0.27, H * 0.3, W * 0.58, -0.35, bodyY + H * 0.47, 0, glassMat);
      // Стрела.
      const arm = box(g, L * 0.44, 0.22, 0.22, 0.55, bodyY + H * 0.22, 0, darkMat);
      arm.rotation.z = -0.22;
      // Ковш.
      box(g, 0.9, 0.7, W * 0.92, halfL * 0.85, bodyY - 0.1, 0, mat(0x8f8f8f, { metal: 0.7, rough: 0.5 }));
      break;
    }
    case "roller": {
      box(g, L * 0.6, H * 0.3, W * 0.86, -0.2, bodyY + H * 0.15, 0, bodyMat);
      box(g, L * 0.32, H * 0.5, W * 0.72, -L * 0.18, bodyY + H * 0.5, 0, bodyMat);
      box(g, L * 0.28, H * 0.34, W * 0.66, -L * 0.18, bodyY + H * 0.52, 0, glassMat);
      // Вал впереди.
      const drum = new THREE.Mesh(CYL, mat(0x9a9a9a, { metal: 0.6, rough: 0.6 }));
      drum.rotation.z = Math.PI / 2;
      drum.scale.set(0.62, W * 0.9, 0.62);
      drum.position.set(halfL * 0.82, 0.62, 0);
      g.add(drum);
      break;
    }
    case "grader": {
      box(g, L * 0.55, H * 0.26, W * 0.72, 0.1, bodyY + H * 0.13, 0, bodyMat);
      box(g, L * 0.24, H * 0.46, W * 0.62, -L * 0.2, bodyY + H * 0.42, 0, bodyMat);
      box(g, L * 0.2, H * 0.3, W * 0.56, -L * 0.2, bodyY + H * 0.45, 0, glassMat);
      // Нож.
      const blade = box(g, 0.5, 0.5, W * 1.5, L * 0.2, 0.32, 0, mat(0xb0b0b0, { metal: 0.8, rough: 0.4 }));
      blade.rotation.y = 0.35;
      break;
    }
    case "combine": {
      // Корпус.
      box(g, L * 0.62, H * 0.44, W * 0.66, -L * 0.1, bodyY + H * 0.34, 0, bodyMat);
      // Кабина.
      box(g, L * 0.2, H * 0.3, W * 0.44, L * 0.18, bodyY + H * 0.62, 0, bodyMat);
      box(g, L * 0.17, H * 0.22, W * 0.4, L * 0.18, bodyY + H * 0.64, 0, glassMat);
      // Жатка.
      box(g, 1.6, 0.5, W * 1.05, halfL - 0.6, bodyY + 0.2, 0, mat(0xd9c04a, { metal: 0.6, rough: 0.5 }));
      // Выгрузной шнек.
      const auger = box(g, L * 0.5, 0.2, 0.2, -L * 0.2, bodyY + H * 0.5, W * 0.4, chromeMat);
      auger.rotation.y = 0.5;
      break;
    }
    case "golf": {
      box(g, L * 0.96, 0.26, W * 0.96, 0, bodyY + 0.1, 0, bodyMat);
      box(g, L * 0.5, 0.36, W * 0.9, -L * 0.1, bodyY + 0.4, 0, bodyMat);
      // Стойки и навес.
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          box(g, 0.06, H * 0.62, 0.06, sx * L * 0.36, bodyY + H * 0.42, sz * W * 0.44, darkMat);
        }
      }
      box(g, L * 0.78, 0.07, W * 1.04, 0, bodyY + H * 0.78, 0, mat(0xf2f2f2, { rough: 0.8 }));
      // Сиденье.
      box(g, L * 0.2, 0.3, W * 0.8, -L * 0.05, bodyY + 0.5, 0, darkMat);
      break;
    }
  }

  // Колёса.
  const axleY = wr;
  const frontZ = b.wheelbase / 2;
  const rearZ = -b.wheelbase / 2;
  const trackHalf = W / 2 - wr * 0.36;
  const positions: [number, number][] = [
    [halfL - b.wheelbase * 0.12, frontZ],
    [halfL - b.wheelbase * 0.12, rearZ]
  ];
  // Правильнее ставить по X (длина), колёса слева/справа по Z.
  const axleXf = b.wheelbase / 2;
  const axleXr = -b.wheelbase / 2;

  for (const sx of [-1, 1]) {
    wheels.push(wheel(g, axleXf, axleY, sx * trackHalf, wr, 0.34 * wr + 0.12, tireMat));
    wheels.push(wheel(g, axleXr, axleY, sx * trackHalf, wr, 0.34 * wr + 0.12, tireMat));
  }
  if (b.axles === 3) {
    const midX = axleXr - (b.wheelbase * 0.28);
    for (const sx of [-1, 1]) {
      wheels.push(wheel(g, midX, axleY, sx * trackHalf, wr, 0.34 * wr + 0.12, tireMat));
    }
  }

  // Спецтехника: маленькие колёса спереди для комбайна/погрузчика уже учтены.

  // Мигалки для служб.
  if (def.service === "police" || def.service === "ambulance" || def.service === "fire" || def.service === "taxi") {
    const colorsByService: Record<string, number[]> = {
      police: [0x2244ff, 0xff2222],
      ambulance: [0xff2222, 0xffffff],
      fire: [0xff2222, 0xff8800],
      taxi: [0xffcc33]
    };
    const cols = colorsByService[def.service] ?? [0xffaa00];
    const roofY = bodyY + H + 0.1;
    cols.forEach((c, i) => {
      const beacon = new THREE.Mesh(BOX, new THREE.MeshStandardMaterial({
        color: c, emissive: c, emissiveIntensity: 1.6, roughness: 0.4
      }));
      beacon.scale.set(0.34, 0.14, 0.24);
      beacon.position.set(-0.2 + i * 0.42, roofY, 0);
      g.add(beacon);
      beacons.push(beacon);
    });
  }

  // Улучшения: визуальные элементы.
  if (upgrades.handling > 0 && (b.shape === "sedan" || b.shape === "hatch" || b.shape === "suv")) {
    const spoiler = box(g, 0.18, 0.06, W * 0.86, -halfL * 0.86, bodyY + H + 0.1, 0, darkMat);
    for (const sz of [-1, 1]) {
      box(g, 0.08, 0.16, 0.08, -halfL * 0.86, bodyY + H + 0.02, sz * W * 0.36, darkMat);
    }
    extras.push(spoiler);
  }
  if (upgrades.nitro > 0) {
    const bottle = new THREE.Mesh(CYL, mat(0x3b6ea5, { metal: 0.8, rough: 0.3 }));
    bottle.rotation.z = Math.PI / 2;
    bottle.scale.set(0.16, 0.5, 0.16);
    bottle.position.set(-halfL * 0.55, bodyY + 0.35, 0);
    bottle.visible = false; // Включается при визуальном осмотре/использовании.
    g.add(bottle);
    extras.push(bottle);
  }
  if (upgrades.hitch > 0) {
    const hitch = box(g, 0.35, 0.12, 0.12, -halfL - 0.16, bodyY * 0.72, 0, chromeMat);
    extras.push(hitch);
  }
  if (upgrades.brakes > 0) {
    // Красные суппорты — небольшие акценты.
    for (const w of wheels.slice(0, 4)) {
      const caliper = box(w as THREE.Object3D, 0.12, 0.22, 0.08, 0.18, 0, 0.14,
        mat(0xc0392b, { metal: 0.6, rough: 0.4 }));
      extras.push(caliper);
    }
  }
  if (upgrades.weight > 0) {
    // Карбоновая полоса на капоте.
    if (b.shape === "sedan" || b.shape === "hatch" || b.shape === "suv") {
      const strip = box(g, L * 0.3, 0.02, W * 0.24, halfL * 0.4, bodyY + H * 0.52 + 0.01, 0,
        mat(0x1b1d20, { metal: 0.5, rough: 0.35 }));
      extras.push(strip);
    }
  }

  // Тень-подложка (дешёвая, без shadow map).
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(L * 1.12, W * 1.42),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.24, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  g.add(shadow);

  return { root: g, wheels, wheelRadius: wr, bodyMat, lights, beacons, extras };
}

/** Прицеп. */
export function buildTrailerModel(kind: string, color: number): THREE.Group {
  const g = new THREE.Group();
  const dark = mat(0x2a2d31, { rough: 0.8 });
  const body = mat(color, { metal: 0.3, rough: 0.6 });
  const tire = mat(0x1a1c1f, { rough: 0.95 });

  const addWheels = (xs: number) => {
    for (const sx of [-1, 1]) {
      for (const sz of xs === 1 ? [0] : [-0.7, 0.7]) {
        const p = new THREE.Group();
        p.position.set(sz, 0.34, sx * 0.78);
        const t = new THREE.Mesh(CYL, tire);
        t.rotation.z = Math.PI / 2;
        t.scale.set(0.34, 0.22, 0.34);
        p.add(t);
        g.add(p);
      }
    }
  };

  switch (kind) {
    case "caravan": {
      box(g, 5.2, 2.2, 2.05, -0.2, 1.45, 0, body);
      box(g, 0.06, 0.7, 1.6, 2.5, 1.6, 0, mat(0x86b4d6, { rough: 0.2 }));
      // Окна.
      for (const sz of [-1, 1]) {
        box(g, 2.6, 0.7, 0.05, -0.4, 1.7, sz * 1.03, mat(0x86b4d6, { rough: 0.15 }));
      }
      // Дышло.
      box(g, 1.1, 0.1, 0.1, 2.9, 0.55, 0, dark);
      addWheels(2);
      break;
    }
    case "tanker": {
      const tank = new THREE.Mesh(CYL, mat(0xd6d8da, { metal: 0.8, rough: 0.3 }));
      tank.rotation.z = Math.PI / 2;
      tank.scale.set(1.0, 4.6, 1.0);
      tank.position.set(-0.4, 1.25, 0);
      g.add(tank);
      box(g, 5.0, 0.2, 1.9, -0.4, 0.62, 0, dark);
      box(g, 1.2, 0.1, 0.1, 2.6, 0.55, 0, dark);
      addWheels(2);
      break;
    }
    case "livestock": {
      box(g, 5.0, 2.0, 2.0, -0.4, 1.4, 0, mat(0xb8b0a2, { rough: 0.75 }));
      for (let i = 0; i < 8; i++) {
        box(g, 0.07, 1.9, 2.04, -2.6 + i * 0.62, 1.4, 0, dark);
      }
      box(g, 1.1, 0.1, 0.1, 2.5, 0.55, 0, dark);
      addWheels(2);
      break;
    }
    case "flatbed": {
      box(g, 4.6, 0.18, 1.95, -0.4, 0.68, 0, body);
      for (const sz of [-1, 1]) {
        box(g, 4.6, 0.16, 0.08, -0.4, 0.82, sz * 0.96, dark);
      }
      box(g, 1.1, 0.1, 0.1, 2.4, 0.55, 0, dark);
      addWheels(2);
      break;
    }
    default: {
      // Грузовой с тентом.
      box(g, 3.1, 0.5, 1.5, -0.4, 0.62, 0, body);
      box(g, 3.1, 0.9, 1.5, -0.4, 1.3, 0, mat(0xdcdcdc, { rough: 0.9 }));
      box(g, 1.0, 0.1, 0.1, 1.9, 0.55, 0, dark);
      addWheels(1);
      break;
    }
  }

  return g;
}
