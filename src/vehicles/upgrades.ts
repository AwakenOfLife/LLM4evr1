// Улучшения транспорта: характеристики, цены и расчёт итоговых статов.

import type { VehicleDef } from "./catalog";

export interface UpgradeSpec {
  key: UpgradeKey;
  name: string;
  descr: string;
  /** Цены по уровням (0 — не куплено). */
  costs: number[];
  max: number;
  /** Визуальный эффект. */
  visual?: string;
}

export type UpgradeKey = "engine" | "brakes" | "nitro" | "weight" | "handling" | "hitch";

export const UPGRADES: UpgradeSpec[] = [
  {
    key: "engine", name: "Двигатель", max: 3,
    descr: "Мощнее мотор — быстрее разгон и выше максимальная скорость.",
    costs: [1400, 3600, 8200],
    visual: "Выхлопная система"
  },
  {
    key: "brakes", name: "Тормоза", max: 3,
    descr: "Усиленные диски и колодки: короче тормозной путь, особенно с прицепом.",
    costs: [900, 2400, 5400],
    visual: "Красные суппорты"
  },
  {
    key: "nitro", name: "Закись азота", max: 3,
    descr: "Баллон N₂O: кратковременный рывок мощности. Кнопка N или отдельная педаль.",
    costs: [1800, 4200, 9200],
    visual: "Баллон в багажнике"
  },
  {
    key: "weight", name: "Облегчение", max: 3,
    descr: "Карбон и алюминий вместо стали: лучше разгон и торможение.",
    costs: [1200, 3200, 7400],
    visual: "Карбоновые накладки"
  },
  {
    key: "handling", name: "Управляемость", max: 3,
    descr: "Ужесточённая подвеска и рулевое: выше предел сцепления в поворотах.",
    costs: [1100, 2900, 6900],
    visual: "Спойлер"
  },
  {
    key: "hitch", name: "Фаркоп", max: 1,
    descr: "Тягово-сцепное устройство. Без него прицеп не подсоединить.",
    costs: [2600],
    visual: "Фаркоп и розетка"
  }
];

export const UPGRADE_BY_KEY = new Map(UPGRADES.map((u) => [u.key, u]));

export type UpgradeLevels = Record<UpgradeKey, number>;

export function emptyUpgrades(): UpgradeLevels {
  return { engine: 0, brakes: 0, nitro: 0, weight: 0, handling: 0, hitch: 0 };
}

export interface EffectiveStats {
  power: number;
  mass: number;
  topSpeed: number; // м/с
  brakes: number;
  grip: number;
  steerAngle: number;
  nitroCharge: number;
  nitroPower: number;
  hitch: boolean;
  towMax: number;
  cargo: number;
  offroad: number;
}

/** Итоговые характеристики с учётом улучшений и массы прицепа. */
export function effectiveStats(def: VehicleDef, u: UpgradeLevels, trailerMass = 0): EffectiveStats {
  const powerMul = 1 + 0.11 * u.engine;
  const massMul = 1 - 0.055 * u.weight;
  const speedMul = 1 + 0.055 * u.engine - 0.02 * u.weight;
  const brakeMul = 1 + 0.17 * u.brakes;
  const gripMul = 1 + 0.075 * u.handling;

  const mass = def.mass * massMul + trailerMass;
  const trailerPenalty = trailerMass > 0 ? 1 - Math.min(0.3, trailerMass / Math.max(3000, def.mass) * 0.28) : 1;

  return {
    power: def.power * powerMul,
    mass,
    topSpeed: (def.topSpeed / 3.6) * speedMul * trailerPenalty,
    brakes: def.brakes * brakeMul,
    grip: def.grip * gripMul,
    steerAngle: def.steerAngle,
    nitroCharge: u.nitro > 0 ? 2.0 + u.nitro * 1.1 : 0,
    nitroPower: u.nitro > 0 ? 1.28 + u.nitro * 0.12 : 1,
    hitch: u.hitch > 0,
    towMax: def.towMax,
    cargo: def.cargo,
    offroad: def.offroad
  };
}

/** Разгон на низкой скорости, м/с². */
export function baseAccel(power: number, mass: number): number {
  return (power / mass) * 46;
}

/** Текущая цена следующего уровня (или null, если максимум). */
export function nextUpgradeCost(key: UpgradeKey, level: number): number | null {
  const spec = UPGRADE_BY_KEY.get(key)!;
  if (level >= spec.max) return null;
  return spec.costs[level] ?? null;
}
