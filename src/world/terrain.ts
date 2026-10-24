// Функция высоты мира. Детерминированная и непрерывная — это и даёт
// бесшовность при стриминге чанков: шва между чанками не существует вовсе.

import { fbm2, smoothstep, clamp, lerp, distToSegmentT } from "../utils/math";
import { MACRO_SIZE, WORLD_SEED } from "./config";
import { townCovering, type Settlement } from "./settlements";
import { getMacroRoads } from "./roads";

/** Сырой рельеф без поселений и дорог. */
export function rawHeight(x: number, z: number): number {
  const big = fbm2(x * 0.0016, z * 0.0016, WORLD_SEED, 4, 2.07, 0.52);
  const det = fbm2(x * 0.0065, z * 0.0065, WORLD_SEED ^ 0x5f5f, 3, 2.11, 0.5);
  const ridge = Math.abs(fbm2(x * 0.0042, z * 0.0042, WORLD_SEED ^ 0xa1b2, 3, 2.0, 0.55) - 0.5);
  const dist = Math.hypot(x, z);
  const mtn = smoothstep((dist - 2600) / 3200) * 72 * (1 - clamp(ridge * 2.2, 0, 1));
  return (big - 0.5) * 92 + (det - 0.5) * 10 + mtn;
}


/**
 * Итоговая высота. Гарантирует непрерывность: площадки городов
 * плавно врастают в рельеф, дорога вырезает коридор.
 */
export function heightAt(x: number, z: number): number {
  let h = rawHeight(x, z);

  // 1. Площадка поселения.
  const town = townCovering(x, z, 70);
  if (town) {
    const d = Math.hypot(x - town.x, z - town.z);
    const inner = town.radius + 14;
    const outer = inner + 58;
    const k = d <= inner ? 1 : d >= outer ? 0 : smoothstep(1 - (d - inner) / (outer - inner));
    h = lerp(h, town.baseY, k * 0.96);
  }

  // 2. Дорожный коридор. Дешёвый отсев по bbox сегмента — иначе каждая
  // точка рельефа перебирает сотни сегментов и генерация чанка встаёт.
  const gx = Math.floor(x / MACRO_SIZE);
  const gz = Math.floor(z / MACRO_SIZE);
  let bestD = Infinity;
  let bestW = 0;
  let bestY = 0;
  for (let dz = -1; dz <= 1; dz++) {
    for (let dx = -1; dx <= 1; dx++) {
      const roads = getMacroRoads(gx + dx, gz + dz);
      for (let i = 0; i < roads.length; i++) {
        const s = roads[i];
        const minX = s.ax < s.bx ? s.ax : s.bx;
        const maxX = s.ax < s.bx ? s.bx : s.ax;
        const minZ = s.az < s.bz ? s.az : s.bz;
        const maxZ = s.az < s.bz ? s.bz : s.az;
        const ox = x < minX ? minX - x : x > maxX ? x - maxX : 0;
        const oz = z < minZ ? minZ - z : z > maxZ ? z - maxZ : 0;
        if (ox > 36 || oz > 36 || ox * ox + oz * oz > 36 * 36) continue;

        const [d, t] = distToSegmentT(x, z, s.ax, s.az, s.bx, s.bz);
        if (d < bestD) {
          bestD = d;
          bestW = s.width;
          // Высота полотна интерполируется вдоль сегмента — без ступенек на стыках.
          bestY = lerp(s.ay, s.by, t);
        }
      }
    }
  }
  if (bestD < 34) {
    const halfW = bestW * 0.5;
    if (bestD <= halfW) {
      // Ровно полотно: шоссе должно совпадать с геометрией дороги.
      h = bestY;
    } else {
      const k = smoothstep(1 - (bestD - halfW) / 22);
      h = lerp(h, bestY, k * 0.5);
    }
  }

  return h;
}

export function normalAt(x: number, z: number, eps = 1.5): [number, number, number] {
  const hL = heightAt(x - eps, z);
  const hR = heightAt(x + eps, z);
  const hD = heightAt(x, z - eps);
  const hU = heightAt(x, z + eps);
  const nx = hL - hR;
  const nz = hD - hU;
  const ny = 2 * eps;
  const len = Math.hypot(nx, ny, nz) || 1;
  return [nx / len, ny / len, nz / len];
}

export function slopeAt(x: number, z: number): number {
  return clamp(1 - normalAt(x, z)[1], 0, 1);
}
