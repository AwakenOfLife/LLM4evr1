// Аркадная физика автомобиля. Намеренно простая и предсказуемая:
// масса, мощность, сцепление, тормоза, нитро, прицеп.

import { clamp, lerp, angleDiff } from "../utils/math";
import { heightAt, normalAt } from "../world/terrain";
import type { EffectiveStats } from "./upgrades";
import type { CollisionBox } from "../world/chunks";

export interface DriveInput {
  steer: number; // -1..1
  throttle: number; // 0..1
  brake: number; // 0..1
  handbrake: boolean;
  nitro: boolean;
}

export interface VehicleState {
  x: number;
  z: number;
  y: number;
  /** Курс в радианах, 0 = +X. */
  heading: number;
  /** Скорость вдоль корпуса, м/с (может быть отрицательной). */
  speed: number;
  /** Поперечный снос (для дрифта), м/с. */
  slide: number;
  /** Текущее рулевое (сглажено), -1..1. */
  steerSmooth: number;
  /** Запас нитро 0..1. */
  nitro: number;
  nitroActive: boolean;
  /** Угол крена и тангажа для визуала. */
  roll: number;
  pitch: number;
  /** Обороты для звука 0..1. */
  rpm: number;
  /** Пробег, м. */
  odometer: number;
  /** Наезд на препятствие в этом кадре. */
  bump: number;
}

export function createVehicleState(x: number, z: number, heading = 0): VehicleState {
  return {
    x, z, y: heightAt(x, z), heading, speed: 0, slide: 0,
    steerSmooth: 0, nitro: 1, nitroActive: false,
    roll: 0, pitch: 0, rpm: 0, odometer: 0, bump: 0
  };
}

const GRAVITY = 9.81;

/**
 * Шаг симуляции.
 * roadOffset — расстояние до кромки дороги (<0 = асфальт).
 */
export function stepVehicle(
  st: VehicleState,
  stats: EffectiveStats,
  input: DriveInput,
  dt: number,
  roadOffset: number
): void {
  const onRoad = roadOffset <= 0.35;
  const gripSurface = onRoad ? 1 : clamp(stats.offroad, 0.4, 1.45);

  // Топливо/нитро.
  if (input.nitro && st.nitro > 0.02 && stats.nitroCharge > 0) {
    st.nitroActive = true;
    st.nitro = clamp(st.nitro - dt / stats.nitroCharge, 0, 1);
  } else {
    st.nitroActive = false;
    // Медленное восстановление.
    st.nitro = clamp(st.nitro + dt / (stats.nitroCharge * 3.2 + 6), 0, 1);
  }

  // Рулевое сглаживание: быстрее возврат к нулю.
  const steerTarget = clamp(input.steer, -1, 1);
  const steerRate = Math.abs(steerTarget) < 0.01 ? 7.0 : 4.2;
  st.steerSmooth = lerp(st.steerSmooth, steerTarget, clamp(steerRate * dt, 0, 1));

  // Мощность двигателя: кривая спадает к максимуму.
  const powerKw = (stats.power * 735.5) / 1000;
  const speedAbs = Math.abs(st.speed);
  const speedRatio = clamp(speedAbs / Math.max(1, stats.topSpeed), 0, 1.2);
  const torqueCurve = clamp(1.25 - speedRatio * 1.05, 0.12, 1.25);

  // Тяга.
  let accel = 0;
  const throttle = clamp(input.throttle, 0, 1);
  const driveForce = (powerKw * 1000) / Math.max(300, speedAbs + 2.5);
  const maxForce = (stats.power * 735.5) / Math.max(1, stats.mass) * 1.6;

  if (throttle > 0.01) {
    let f = Math.min(driveForce, maxForce) * throttle * torqueCurve;
    const nitroMul = st.nitroActive ? stats.nitroPower : 1;
    f *= nitroMul * gripSurface;
    // Ограничение по максимальной скорости.
    const cap = stats.topSpeed * (st.nitroActive ? 1.22 : 1) * (onRoad ? 1 : 0.62 * gripSurface);
    if (speedAbs < cap || st.speed < 0) {
      accel += f / 1.0;
    }
  }

  // Тормоза и реверс.
  if (input.brake > 0.01) {
    if (st.speed > 0.6) {
      const brakeF = stats.brakes * 9.6 * input.brake;
      accel -= brakeF;
    } else {
      // Реверс.
      const reverseMax = 9;
      if (st.speed > -reverseMax) {
        accel -= (stats.power * 735.5 / Math.max(1, stats.mass)) * 0.32 * input.brake * gripSurface;
      }
    }
  }

  // Ручник.
  if (input.handbrake) {
    if (st.speed > 0.4) accel -= stats.brakes * 6.2;
    else if (st.speed < -0.4) accel += stats.brakes * 6.2;
    else st.speed = 0;
  }

  // Сопротивление: качение + воздух.
  const dragCoef = (onRoad ? 0.0016 : 0.0098) + (st.nitroActive ? 0.0009 : 0.0022);
  const rollRes = onRoad ? 0.42 : 2.4;
  const drag = dragCoef * st.speed * Math.abs(st.speed) + Math.sign(st.speed) * rollRes * (speedAbs > 0.2 ? 1 : 0);
  accel -= drag / 1.0;

  // Склон: добавляем проекцию гравитации.
  const aheadX = st.x + Math.cos(st.heading) * 1.6;
  const aheadZ = st.z + Math.sin(st.heading) * 1.6;
  const slope = (heightAt(aheadX, aheadZ) - heightAt(st.x, st.z)) / 1.6;
  accel -= slope * GRAVITY * 0.55;

  // Бездорожье и вес прицепа.
  if (!onRoad) accel *= 0.78;

  st.speed += accel * dt;

  // Ограничение заднего хода и максимума.
  const capMax = stats.topSpeed * (st.nitroActive ? 1.22 : 1) * (onRoad ? 1.06 : 0.66 * gripSurface);
  if (st.speed > capMax) st.speed = lerp(st.speed, capMax, clamp(6 * dt, 0, 1));
  if (st.speed < -10) st.speed = -10;
  if (Math.abs(st.speed) < 0.05 && throttle < 0.01 && input.brake < 0.01) st.speed = 0;

  // Поворот: скорость рыскания.
  const wheelBase = 2.6;
  const steerAngle = stats.steerAngle * st.steerSmooth;
  const gripFactor = clamp(stats.grip * gripSurface * (onRoad ? 1 : 0.86), 0.35, 1.7);
  const speedForTurn = clamp(Math.abs(st.speed), 0, 30);
  // На очень малой скорости руль почти не поворачивает машину — как в жизни.
  const yawRate =
    (st.speed / wheelBase) * Math.tan(steerAngle) * clamp(gripFactor, 0.5, 1.4) *
    clamp(speedForTurn / 3.2, 0, 1);
  const driftMul = input.handbrake ? 1.45 : 1;
  st.heading += yawRate * driftMul * dt;

  // Боковой снос при резком руле и ручнике.
  const latAccel = yawRate * st.speed;
  st.slide = lerp(st.slide, -latAccel * (input.handbrake ? 0.055 : 0.016), clamp(5 * dt, 0, 1));

  // Перемещение.
  const dirX = Math.cos(st.heading);
  const dirZ = Math.sin(st.heading);
  const latX = -dirZ;
  const latZ = dirX;
  const nx = st.x + dirX * st.speed * dt + latX * st.slide * dt;
  const nz = st.z + dirZ * st.speed * dt + latZ * st.slide * dt;

  st.x = nx;
  st.z = nz;

  // Высота по рельефу + подвеска.
  const groundY = heightAt(st.x, st.z);
  st.y = lerp(st.y, groundY, clamp(14 * dt, 0, 1));

  // Крен и тангаж — для визуала.
  const n = normalAt(st.x, st.z);
  const targetRoll = -st.steerSmooth * clamp(Math.abs(st.speed) / 40, 0, 1) * 0.10;
  st.roll = lerp(st.roll, targetRoll, clamp(6 * dt, 0, 1));
  st.pitch = lerp(st.pitch, -(st.speed > 0 ? accel * 0.004 : 0), clamp(5 * dt, 0, 1));

  // Обороты для звука.
  const targetRpm = clamp(speedRatio * 0.85 + (throttle > 0.05 ? 0.28 : 0) + (st.nitroActive ? 0.2 : 0), 0, 1);
  st.rpm = lerp(st.rpm, targetRpm, clamp(8 * dt, 0, 1));

  st.odometer += Math.abs(st.speed) * dt;
  st.bump = Math.max(0, st.bump - dt * 3);
}

/** Разрешение коллизий с габаритами зданий (OBB против точки с радиусом). */
export function resolveCollisions(
  st: VehicleState,
  boxes: CollisionBox[],
  halfLength: number,
  halfWidth: number
): void {
  const rad = Math.max(halfWidth, 0.6);
  for (const b of boxes) {
    // Проверка по габаритам с запасом.
    const dx = st.x - b.x;
    const dz = st.z - b.z;
    const reach = Math.hypot(b.hw, b.hd) + rad + halfLength + 1;
    if (Math.abs(dx) > reach || Math.abs(dz) > reach) continue;

    // Перевод в локальные координаты здания.
    const c = Math.cos(-b.rot);
    const s = Math.sin(-b.rot);
    const lx = dx * c - dz * s;
    const lz = dx * s + dz * c;

    const ex = b.hw + rad;
    const ez = b.hd + rad;
    if (Math.abs(lx) > ex || Math.abs(lz) > ez) continue;

    // Выталкиваем по меньшей оси проникновения.
    const penX = ex - Math.abs(lx);
    const penZ = ez - Math.abs(lz);

    let pushX = 0;
    let pushZ = 0;
    if (penX < penZ) {
      pushX = Math.sign(lx || 1) * penX;
    } else {
      pushZ = Math.sign(lz || 1) * penZ;
    }

    // Обратно в мировые координаты.
    const cw = Math.cos(b.rot);
    const sw = Math.sin(b.rot);
    const wx = pushX * cw - pushZ * sw;
    const wz = pushX * sw + pushZ * cw;

    st.x += wx;
    st.z += wz;

    // Гасим скорость по направлению удара.
    const impact = Math.abs(st.speed);
    if (impact > 1.5) {
      const hitX = wx;
      const hitZ = wz;
      const hlen = Math.hypot(hitX, hitZ) || 1;
      const dirX = Math.cos(st.heading);
      const dirZ = Math.sin(st.heading);
      const dot = (dirX * hitX + dirZ * hitZ) / hlen;
      st.speed *= clamp(1 - Math.abs(dot) * 0.72, 0.12, 1);
      st.bump = clamp(impact / 22, 0.15, 1);
    }
  }
}
