// Дороги: кэшируемая сетка с заранее посчитанными высотами концов.

import { Rng, hashInt, fbm2, distToSegment } from "../utils/math";
import { MACRO_SIZE, ROAD_WIDTH_HIGHWAY, ROAD_WIDTH_STREET, WORLD_SEED } from "./config";
import { getSettlement, type Settlement } from "./settlements";

export interface RoadSegment {
  ax: number;
  az: number;
  bx: number;
  bz: number;
  width: number;
  kind: "highway" | "street";
  /** Высоты полотна на концах (мировые Y). */
  ay: number;
  by: number;
  ownerId?: string;
}

/** Сырой рельеф без дорожной сети — базовая функция для высот дорог. */
function terrainBase(x: number, z: number): number {
  const big = fbm2(x * 0.0016, z * 0.0016, WORLD_SEED, 4, 2.07, 0.52);
  const det = fbm2(x * 0.0065, z * 0.0065, WORLD_SEED ^ 0x5f5f, 3, 2.11, 0.5);
  return (big - 0.5) * 96 + (det - 0.5) * 11;
}

/**
 * Высота полотна: если точка внутри поселения — его площадка,
 * иначе сглаженный рельеф. Никогда не даёт ступенек между чанками.
 */
function surfaceY(x: number, z: number, town: Settlement | null): number {
  if (town) return town.baseY;
  return terrainBase(x, z);
}

/** Находит поселение, накрывающее точку. */
function townAtPoint(x: number, z: number): Settlement | null {
  const gx = Math.floor(x / MACRO_SIZE);
  const gz = Math.floor(z / MACRO_SIZE);
  for (let dz = -1; dz <= 1; dz++) {
    for (let dx = -1; dx <= 1; dx++) {
      const t = getSettlement(gx + dx, gz + dz);
      if (!t) continue;
      if (Math.hypot(x - t.x, z - t.z) <= t.radius + 30) return t;
    }
  }
  return null;
}

const roadCache = new Map<string, RoadSegment[]>();

function seg(
  ax: number, az: number, bx: number, bz: number,
  width: number, kind: "highway" | "street", owner?: Settlement
): RoadSegment {
  const ta = owner ?? townAtPoint(ax, az);
  const tb = owner ?? townAtPoint(bx, bz);
  return {
    ax, az, bx, bz, width, kind,
    ay: surfaceY(ax, az, ta),
    by: surfaceY(bx, bz, tb),
    ownerId: owner?.id
  };
}

/** Дороги макро-ячейки: хайвеи к восточному/южному соседу + улицы города. */
export function getMacroRoads(gx: number, gz: number): RoadSegment[] {
  const key = `${gx},${gz}`;
  const hit = roadCache.get(key);
  if (hit) return hit;

  const out: RoadSegment[] = [];
  const cx = gx * MACRO_SIZE + MACRO_SIZE * 0.5;
  const cz = gz * MACRO_SIZE + MACRO_SIZE * 0.5;
  const r = new Rng(hashInt(gx, gz, 0x3311));

  // Изломы магистралей, чтобы дороги выглядели живыми.
  const bowE = r.range(-80, 80);
  const bowS = r.range(-80, 80);
  const mxE = cx + MACRO_SIZE * 0.5;
  const mzE = cz + bowE;
  const mxS = cx + bowS;
  const mzS = cz + MACRO_SIZE * 0.5;

  out.push(seg(cx, cz, mxE, mzE, ROAD_WIDTH_HIGHWAY, "highway"));
  out.push(seg(mxE, mzE, cx + MACRO_SIZE, cz, ROAD_WIDTH_HIGHWAY, "highway"));
  out.push(seg(cx, cz, mxS, mzS, ROAD_WIDTH_HIGHWAY, "highway"));
  out.push(seg(mxS, mzS, cx, cz + MACRO_SIZE, ROAD_WIDTH_HIGHWAY, "highway"));
  // Сегменты, приходящие с запада и севера (нужны для стыков).
  out.push(seg(cx - MACRO_SIZE, cz, cx, cz, ROAD_WIDTH_HIGHWAY, "highway"));
  out.push(seg(cx, cz - MACRO_SIZE, cx, cz, ROAD_WIDTH_HIGHWAY, "highway"));

  const town = getSettlement(gx, gz);
  if (town) {
    const x0 = town.streetsX[0];
    const x1 = town.streetsX[town.streetsX.length - 1];
    const z0 = town.streetsZ[0];
    const z1 = town.streetsZ[town.streetsZ.length - 1];
    for (const x of town.streetsX) out.push(seg(x, z0 - 8, x, z1 + 8, ROAD_WIDTH_STREET, "street", town));
    for (const z of town.streetsZ) out.push(seg(x0 - 8, z, x1 + 8, z, ROAD_WIDTH_STREET, "street", town));
    const d = Math.hypot(town.x - cx, town.z - cz);
    if (d > 60) out.push(seg(town.x, town.z, cx, cz, ROAD_WIDTH_STREET, "street", town));
  }

  roadCache.set(key, out);
  return out;
}

/** Все дороги в квадрате вокруг точки (для физики и миникарты). */
export function gatherRoads(x: number, z: number, extra = 1): RoadSegment[] {
  const gx = Math.floor(x / MACRO_SIZE);
  const gz = Math.floor(z / MACRO_SIZE);
  const out: RoadSegment[] = [];
  for (let dz = -extra; dz <= extra; dz++) {
    for (let dx = -extra; dx <= extra; dx++) out.push(...getMacroRoads(gx + dx, gz + dz));
  }
  return out;
}

/**
 * Индекс дорог для быстрых запросов «на асфальте ли я».
 * Кэширует результат по ячейкам 25 м.
 */
export class RoadIndex {
  private cs = 25;
  private cache = new Map<string, number>();
  private segs: RoadSegment[] = [];

  setSegments(segs: RoadSegment[]) {
    this.segs = segs;
    this.cache.clear();
  }

  /** Расстояние до кромки дороги: < 0 значит «на асфальте». */
  offset(x: number, z: number): number {
    const key = `${Math.floor(x / this.cs)},${Math.floor(z / this.cs)}`;
    const hit = this.cache.get(key);
    if (hit !== undefined) return hit;
    let best = Infinity;
    for (const s of this.segs) {
      const d = distToSegment(x, z, s.ax, s.az, s.bx, s.bz) - s.width * 0.5;
      if (d < best) best = d;
      if (best < -2) break;
    }
    if (this.cache.size > 6000) this.cache.clear();
    this.cache.set(key, best);
    return best;
  }

  isOnRoad(x: number, z: number): boolean {
    return this.offset(x, z) <= 0.5;
  }

  /** Расстояние до осевой линии ближайшей дороги. */
  distanceToCenter(x: number, z: number): number {
    let best = Infinity;
    for (const s of this.segs) {
      const d = distToSegment(x, z, s.ax, s.az, s.bx, s.bz);
      if (d < best) best = d;
    }
    return best;
  }
}
