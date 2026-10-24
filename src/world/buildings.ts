// Генерация зданий на кварталах города. Детерминированно для каждого чанка.

import { Rng, hashInt, clamp } from "../utils/math";
import type { Settlement } from "./settlements";

export type BuildingKind =
  | "house"
  | "apartment"
  | "shop"
  | "warehouse"
  | "shed"
  | "barn"
  | "station_police"
  | "station_fire"
  | "station_medical"
  | "station_taxi"
  | "station_courier"
  | "station_fuel"
  | "station_golf"
  | "cafe"
  | "garage";

export interface Building {
  x: number;
  z: number;
  /** Габариты по осям X и Z (ширина/глубина). */
  w: number;
  d: number;
  h: number;
  rot: number;
  kind: BuildingKind;
  /** Цвет стен и крыши (hex). */
  wall: number;
  roof: number;
  /** Тип крыши: 0 плоская, 1 двускатная, 2 шатровая. */
  roofType: 0 | 1 | 2;
  /** Точка входа/парковки перед зданием. */
  doorX: number;
  doorZ: number;
}

export interface ParkSpot {
  x: number;
  z: number;
  rot: number;
  kind: BuildingKind;
}

const HOUSE_WALLS = [0xd9cbb5, 0xc9b7a0, 0xe3d8c4, 0xb9c4c9, 0xd6c0a8, 0xcfd6cd];
const HOUSE_ROOFS = [0x8a4b3a, 0x6f4436, 0x994f3f, 0x5b6d7a, 0x7a5347];
const APT_WALLS = [0xb4bbc2, 0xc8cdd2, 0xa8b2b8, 0xd0c6b8, 0x9fa9b0];
const SHOP_WALLS = [0xe8e0d0, 0xdccfc0, 0xe5d5c4];

/** Сдвигает точку вдоль направления. */
function along(x: number, z: number, rot: number, dist: number): [number, number] {
  return [x + Math.cos(rot) * dist, z + Math.sin(rot) * dist];
}

/** Здания для поселения (вызывается по чанку и фильтруется по границам чанка). */
export function buildingsForSettlement(t: Settlement): Building[] {
  const rng = new Rng(hashInt(t.gx, t.gz, 0x2b91));
  const out: Building[] = [];

  const xs = t.streetsX;
  const zs = t.streetsZ;
  const halfBlock = t.blockSize * 0.5;

  // Особые здания (по одному на город) — ставим первыми, чтобы гарантировать место.
  const specials: BuildingKind[] =
    t.kind === "city"
      ? ["station_police", "station_fire", "station_medical", "station_taxi", "station_courier", "station_fuel", "station_golf"]
      : t.kind === "village"
        ? ["station_fuel", "station_courier"]
        : ["station_courier"];

  const usedBlocks = new Set<string>();

  for (const kind of specials) {
    // Ищем свободный блок ближе к центру.
    let placed = false;
    for (let attempt = 0; attempt < 40 && !placed; attempt++) {
      const i = rng.int(0, xs.length - 2);
      const j = rng.int(0, zs.length - 2);
      const key = `${i},${j}`;
      if (usedBlocks.has(key)) continue;
      // Не ставим в самом центре — там площадь с парковкой.
      const bx = (xs[i] + xs[i + 1]) / 2;
      const bz = (zs[j] + zs[j + 1]) / 2;
      if (Math.hypot(bx - t.x, bz - t.z) < t.blockSize * 0.8) continue;
      usedBlocks.add(key);
      placed = true;

      const nearX = xs[i + 1] - bx < bx - xs[i] ? 1 : -1;
      const nearZ = zs[j + 1] - bz < bz - zs[j] ? 1 : -1;
      const rot = rng.chance(0.5) ? 0 : Math.PI;
      const w = kind === "station_fire" ? 20 : kind === "station_police" ? 16 : 14;
      const d = 13;
      const h = kind === "station_fuel" ? 5 : 7;
      const px = bx + nearX * 1.5;
      const pz = bz + nearZ * 1.5;
      const [dx, dz] = along(px, pz, rot, 0);
      out.push({
        x: px, z: pz, w, d, h, rot, kind,
        wall: 0xe6e2da, roof: 0x9aa3ab, roofType: 0,
        doorX: dx, doorZ: dz
      });
    }
  }

  // Жилая/коммерческая застройка по кварталам.
  for (let i = 0; i < xs.length - 1; i++) {
    for (let j = 0; j < zs.length - 1; j++) {
      const key = `${i},${j}`;
      const cx = (xs[i] + xs[i + 1]) / 2;
      const cz = (zs[j] + zs[j + 1]) / 2;
      if (Math.hypot(cx - t.x, cz - t.z) > t.radius * 1.02) continue;

      const blockW = xs[i + 1] - xs[i] - 14;
      const blockD = zs[j + 1] - zs[j] - 14;
      if (blockW < 10 || blockD < 10) continue;

      // Площадь в центре города: пусто (парковка/сквер).
      if (Math.hypot(cx - t.x, cz - t.z) < t.blockSize * 0.55) continue;

      if (usedBlocks.has(key)) {
        // Уже занято особым зданием, добавляем мелкие по краям.
        if (rng.chance(0.5)) continue;
      }

      const cols = Math.max(1, Math.floor(blockW / 20));
      const rows = Math.max(1, Math.floor(blockD / 20));
      for (let ci = 0; ci < cols; ci++) {
        for (let cj = 0; cj < rows; cj++) {
          const slotW = blockW / cols;
          const slotD = blockD / rows;
          const jx = rng.range(-0.16, 0.16) * slotW;
          const jz = rng.range(-0.16, 0.16) * slotD;
          const bx = xs[i] + 7 + slotW * (ci + 0.5) + jx;
          const bz = zs[j] + 7 + slotD * (cj + 0.5) + jz;

          if (rng.chance(t.kind === "city" ? 0.2 : t.kind === "village" ? 0.34 : 0.5)) continue;
          if (usedBlocks.has(key) && rng.chance(0.6)) continue;

          const isCity = t.kind === "city";
          const kindRoll = rng.next();
          let kind: BuildingKind;
          if (isCity) kind = kindRoll < 0.42 ? "apartment" : kindRoll < 0.78 ? "house" : kindRoll < 0.9 ? "shop" : "warehouse";
          else if (t.kind === "village") kind = kindRoll < 0.66 ? "house" : kindRoll < 0.82 ? "barn" : kindRoll < 0.93 ? "shed" : "shop";
          else kind = kindRoll < 0.5 ? "house" : kindRoll < 0.78 ? "shed" : "barn";

          const w = clamp(slotW * rng.range(0.4, 0.72), 5, 24);
          const d = clamp(slotD * rng.range(0.4, 0.72), 5, 20);
          let h: number;
          let wall: number;
          let roof: number;
          let roofType: 0 | 1 | 2 = 1;

          switch (kind) {
            case "apartment":
              h = rng.range(12, 26);
              wall = rng.pick(APT_WALLS);
              roof = 0x5a6068;
              roofType = 0;
              break;
            case "shop":
              h = rng.range(4.5, 6.5);
              wall = rng.pick(SHOP_WALLS);
              roof = rng.pick(HOUSE_ROOFS);
              roofType = 0;
              break;
            case "warehouse":
              h = rng.range(7, 10);
              wall = 0x9aa4ac;
              roof = 0x707a82;
              roofType = 1;
              break;
            case "barn":
              h = rng.range(5, 8);
              wall = 0xa8593f;
              roof = 0x6d3a2c;
              roofType = 1;
              break;
            case "shed":
              h = rng.range(2.6, 3.6);
              wall = 0x8b7a63;
              roof = 0x5e5245;
              roofType = 1;
              break;
            default:
              h = rng.range(3.6, 6.2) * (rng.chance(0.15) ? 2 : 1);
              wall = rng.pick(HOUSE_WALLS);
              roof = rng.pick(HOUSE_ROOFS);
              roofType = rng.chance(0.75) ? 1 : 2;
          }

          // Разворот к ближайшей улице.
          const rot = xToStreetRotation(bx, bz, xs[i], xs[i + 1], zs[j], zs[j + 1]);

          out.push({
            x: bx, z: bz, w, d, h, rot, kind, wall, roof, roofType,
            doorX: bx, doorZ: bz
          });
        }
      }
    }
  }

  return out;
}

function xToStreetRotation(bx: number, bz: number, x0: number, x1: number, z0: number, z1: number): number {
  const dl = bx - x0;
  const dr = x1 - bx;
  const du = bz - z0;
  const dd = z1 - bz;
  const m = Math.min(dl, dr, du, dd);
  if (m === dl) return Math.PI;
  if (m === dr) return 0;
  if (m === du) return -Math.PI / 2;
  return Math.PI / 2;
}

/** Точки парковки/точек задания у служебных зданий. */
export function serviceSpots(t: Settlement, b: Building): ParkSpot[] {
  const spots: ParkSpot[] = [];
  const n = 3;
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * 4.2;
    spots.push({
      x: b.x + Math.cos(b.rot + Math.PI / 2) * off + Math.cos(b.rot) * (b.d * 0.5 + 6),
      z: b.z + Math.sin(b.rot + Math.PI / 2) * off + Math.sin(b.rot) * (b.d * 0.5 + 6),
      rot: b.rot,
      kind: b.kind
    });
  }
  return spots;
}
