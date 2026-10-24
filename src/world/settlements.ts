// Поселения: детерминированное размещение городов и деревень по макро-ячейкам.

import { Rng, hashInt, fbm2 } from "../utils/math";
import {
  MACRO_SIZE,
  TOWN_CITY_RADIUS_MAX,
  TOWN_CITY_RADIUS_MIN,
  TOWN_VILLAGE_RADIUS_MAX,
  TOWN_VILLAGE_RADIUS_MIN,
  WORLD_SEED
} from "./config";

export type SettlementKind = "city" | "village" | "hamlet";

export interface Settlement {
  id: string;
  kind: SettlementKind;
  name: string;
  x: number;
  z: number;
  radius: number;
  /** Плоская высота площадки. */
  baseY: number;
  gx: number;
  gz: number;
  streetsX: number[];
  streetsZ: number[];
  blockSize: number;
}

const CITY_NAMES = [
  "Кленовск", "Березов", "Сосновск", "Ольхов", "Заречье", "Приисковый",
  "Верхнеград", "Нижнеград", "Каменск", "Липовск", "Дубравск", "Камышин"
];
const VILLAGE_NAMES = [
  "Малиновка", "Петухово", "Грибное", "Тихая", "Кузнецово", "Зайцево",
  "Бобровка", "Ключи", "Луговое", "Рыбхоз", "Сосенки", "Овсянники",
  "Медведево", "Пеньки", "Хворостино", "Крутой Яр"
];
const HAMLET_NAMES = ["Хутор", "Лесничество", "Ферма", "Пасека", "Сторожка"];

const cache = new Map<string, Settlement | null>();

export function townBaseY(gx: number, gz: number): number {
  const n = fbm2(gx * 0.31 + 11.7, gz * 0.31 - 4.2, WORLD_SEED ^ 0x51ab, 3);
  return (n - 0.5) * 44;
}

export function getSettlement(gx: number, gz: number): Settlement | null {
  const key = `${gx},${gz}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  const r = new Rng(hashInt(gx, gz, WORLD_SEED ^ 0x9f13));
  const roll = r.next();
  const isSpawn = gx === 0 && gz === 0;

  let kind: SettlementKind | null = null;
  if (isSpawn) kind = "city";
  else if (roll < 0.11) kind = "city";
  else if (roll < 0.38) kind = "village";
  else if (roll < 0.5) kind = "hamlet";

  let result: Settlement | null = null;
  if (kind) {
    const cx = gx * MACRO_SIZE + MACRO_SIZE * 0.5 + (isSpawn ? 0 : r.range(-0.26, 0.26) * MACRO_SIZE);
    const cz = gz * MACRO_SIZE + MACRO_SIZE * 0.5 + (isSpawn ? 0 : r.range(-0.26, 0.26) * MACRO_SIZE);

    let radius: number;
    let blockSize: number;
    if (kind === "city") {
      radius = r.range(TOWN_CITY_RADIUS_MIN, TOWN_CITY_RADIUS_MAX);
      blockSize = r.range(66, 88);
    } else if (kind === "village") {
      radius = r.range(TOWN_VILLAGE_RADIUS_MIN, TOWN_VILLAGE_RADIUS_MAX);
      blockSize = r.range(36, 50);
    } else {
      radius = r.range(26, 42);
      blockSize = 28;
    }

    const names = kind === "city" ? CITY_NAMES : kind === "village" ? VILLAGE_NAMES : HAMLET_NAMES;
    const name = names[hashInt(gx, gz, 0x7c31) % names.length];

    const lanes = kind === "city" ? r.int(3, 4) : kind === "village" ? r.int(1, 2) : 1;
    const streetsX: number[] = [];
    const streetsZ: number[] = [];
    for (let i = -lanes; i <= lanes; i++) streetsX.push(cx + i * blockSize);
    for (let i = -lanes; i <= lanes; i++) streetsZ.push(cz + i * blockSize);

    result = {
      id: key,
      kind,
      name,
      x: cx,
      z: cz,
      radius,
      baseY: townBaseY(gx, gz),
      gx,
      gz,
      streetsX,
      streetsZ,
      blockSize
    };
  }

  cache.set(key, result);
  return result;
}

/** Поселение, накрывающее точку (с допуском на окраины). */
export function townCovering(x: number, z: number, margin = 30): Settlement | null {
  const gx = Math.floor(x / MACRO_SIZE);
  const gz = Math.floor(z / MACRO_SIZE);
  for (let dz = -1; dz <= 1; dz++) {
    for (let dx = -1; dx <= 1; dx++) {
      const t = getSettlement(gx + dx, gz + dz);
      if (!t) continue;
      if (Math.hypot(x - t.x, z - t.z) <= t.radius + margin) return t;
    }
  }
  return null;
}

/** Поселение рядом с точкой — для подписи в HUD. */
export function townAt(x: number, z: number): Settlement | null {
  return townCovering(x, z, 20);
}

/** Перебор поселений в квадрате макро-ячеек. */
export function nearbySettlements(x: number, z: number, cells = 1): Settlement[] {
  const gx = Math.floor(x / MACRO_SIZE);
  const gz = Math.floor(z / MACRO_SIZE);
  const out: Settlement[] = [];
  for (let dz = -cells; dz <= cells; dz++) {
    for (let dx = -cells; dx <= cells; dx++) {
      const t = getSettlement(gx + dx, gz + dz);
      if (t) out.push(t);
    }
  }
  return out;
}
