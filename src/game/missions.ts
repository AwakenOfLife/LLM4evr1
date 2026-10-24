// Задания: генерация, состояние, оплата. Каждый тип привязан к классу транспорта.

import { Rng, hashInt, dist2, clamp } from "../utils/math";
import type { VehicleDef } from "../vehicles/catalog";
import { nearbySettlements, townCovering, type Settlement } from "../world/settlements";
import { MACRO_SIZE } from "../world/config";

export type MissionKind =
  | "delivery_light"
  | "delivery_cargo"
  | "offroad_delivery"
  | "courier_shift"
  | "parcel_run"
  | "taxi_ride"
  | "taxi_shift"
  | "taxi_night"
  | "taxi_ride_lite"
  | "passenger_route"
  | "police_call"
  | "police_patrol"
  | "pursuit"
  | "medical_call"
  | "medical_transfer"
  | "fire_call"
  | "fire_forest"
  | "loader_work"
  | "yard_cleanup"
  | "road_work"
  | "dirt_road_repair"
  | "harvest"
  | "golf_tour"
  | "construction_delivery"
  | "timber_run"
  | "long_haul";

export type MissionState = "offer" | "accepted" | "arrived_pickup" | "in_progress" | "done" | "failed";

export interface Mission {
  id: string;
  kind: MissionKind;
  title: string;
  desc: string;
  state: MissionState;
  /** Точка А (погрузка/пассажир). */
  fromX: number;
  fromZ: number;
  /** Точка Б (выгрузка/назначение). */
  toX: number;
  toZ: number;
  /** Награда, ₽. */
  reward: number;
  /** Ограничение по времени, с (0 = нет). */
  timeLimit: number;
  /** Оставшееся время. */
  timeLeft: number;
  /** Требуемый тип транспорта, если важен. */
  requires: Partial<Record<"service" | "vehicleId" | "missionKind" | "cargo" | "tow", string | number>>;
  /** Минимальная грузоподъёмность. */
  minCargo: number;
  /** Класс транспорта для подсказки. */
  hintVehicle: string;
  /** Имя заказчика/NPC. */
  client: string;
  /** Пройдено ли расстояние до точки А. */
  pickupDone: boolean;
  /** Порядковый номер в смене. */
  shiftIndex?: number;
  shiftTotal?: number;
  /** Название поселения, где задание берётся. */
  townName: string;
  expiresAt: number;
}

const CLIENTS = [
  "Дмитрий", "Анна", "Сергей", "Ольга", "Павел", "Марина", "Игорь", "Елена",
  "Виктор", "Наталья", "Артём", "Света", "Роман", "Татьяна", "Никита", "Люба"
];

const NAMES: Record<MissionKind, { title: string; desc: (a: string, b: string) => string }> = {
  delivery_light: {
    title: "Доставка посылки",
    desc: (a, b) => `Забрать посылку в ${a} и привезти в ${b}.`
  },
  delivery_cargo: {
    title: "Грузовой рейс",
    desc: (a, b) => `Перевезти груз из ${a} в ${b}. Нужен кузов повместительнее.`
  },
  offroad_delivery: {
    title: "Доставка в глушь",
    desc: (a, b) => `Забросить продукты в ${b}: дорога грунтовая, нужен внедорожник.`
  },
  courier_shift: {
    title: "Смена курьера",
    desc: (a, b) => `Серия посылок: ${a} → ${b}. Чем быстрее, тем больше чаевых.`
  },
  parcel_run: {
    title: "Развоз по адресам",
    desc: (a, b) => `Собрать посылки в ${a} и развезти в ${b}.`
  },
  taxi_ride: {
    title: "Пассажир ждёт",
    desc: (a, b) => `Подобрать пассажира в ${a} и отвезти в ${b}. Счётчик идёт.`
  },
  taxi_shift: {
    title: "Смена в такси",
    desc: (a, b) => `Три заказа подряд, старт в ${a}, финиш в ${b}.`
  },
  taxi_night: {
    title: "Ночной заказ",
    desc: (a, b) => `Срочный ночной рейс ${a} → ${b}. Платят с надбавкой.`
  },
  taxi_ride_lite: {
    title: "Подвезти соседа",
    desc: (a, b) => `Частный извоз ${a} → ${b}. Денег немного, зато без лицензии.`
  },
  passenger_route: {
    title: "Пассажирский рейс",
    desc: (a, b) => `Провезти группу из ${a} в ${b}.`
  },
  police_call: {
    title: "Вызов патруля",
    desc: (a, b) => `Прибыть на вызов в ${b} и разобраться на месте.`
  },
  police_patrol: {
    title: "Патрулирование",
    desc: (a, b) => `Объехать район ${a} и отметить контрольные точки.`
  },
  pursuit: {
    title: "Погоня",
    desc: (a, b) => `Нарушитель уходит в сторону ${b}. Догнать и остановить.`
  },
  medical_call: {
    title: "Экстренный вызов",
    desc: (a, b) => `Пациенту плохо в ${b}. Счёт на секунды.`
  },
  medical_transfer: {
    title: "Перевозка пациента",
    desc: (a, b) => `Перевезти пациента из ${a} в больницу ${b}.`
  },
  fire_call: {
    title: "Пожар",
    desc: (a, b) => `Возгорание в ${b}. Нужно прибыть и потушить.`
  },
  fire_forest: {
    title: "Лесной пожар",
    desc: (a, b) => `Загорелось в лесу у ${b}. Проедет не всякая машина.`
  },
  loader_work: {
    title: "Погрузка на складе",
    desc: (a, b) => `Погрузить поддоны в ${a} и отвезти на склад ${b}.`
  },
  yard_cleanup: {
    title: "Расчистка площадки",
    desc: (a, b) => `Убрать снег и мусор на площадке в ${b}.`
  },
  road_work: {
    title: "Ремонт дороги",
    desc: (a, b) => `Обработать участок трассы у ${b}. Двигаться по маршруту.`
  },
  dirt_road_repair: {
    title: "Планировка грунтовки",
    desc: (a, b) => `Выровнять дорогу к ${b} после дождей.`
  },
  harvest: {
    title: "Уборка урожая",
    desc: (a, b) => `Собрать поле у ${a} и сдать зерно в ${b}.`
  },
  golf_tour: {
    title: "Тур по полю",
    desc: (a, b) => `Провезти гостей клуба из ${a} к ${b}.`
  },
  construction_delivery: {
    title: "Стройматериалы",
    desc: (a, b) => `Доставить материалы на стройку в ${b}.`
  },
  timber_run: {
    title: "Лесоперевозка",
    desc: (a, b) => `Вывезти брёвна из ${a} на пилораму ${b}.`
  },
  long_haul: {
    title: "Межгород",
    desc: (a, b) => `Долгий рейс ${a} → ${b}. Платят по километражу.`
  }
};

/** Базовая награда и коэффициент за километр по типу задания. */
const ECONOMY: Record<MissionKind, { base: number; perKm: number; timePerKm: number }> = {
  delivery_light: { base: 140, perKm: 46, timePerKm: 90 },
  delivery_cargo: { base: 260, perKm: 68, timePerKm: 105 },
  offroad_delivery: { base: 220, perKm: 78, timePerKm: 130 },
  courier_shift: { base: 300, perKm: 58, timePerKm: 95 },
  parcel_run: { base: 240, perKm: 52, timePerKm: 100 },
  taxi_ride: { base: 180, perKm: 72, timePerKm: 82 },
  taxi_shift: { base: 380, perKm: 76, timePerKm: 85 },
  taxi_night: { base: 260, perKm: 96, timePerKm: 78 },
  taxi_ride_lite: { base: 70, perKm: 26, timePerKm: 120 },
  passenger_route: { base: 320, perKm: 62, timePerKm: 100 },
  police_call: { base: 320, perKm: 88, timePerKm: 70 },
  police_patrol: { base: 260, perKm: 54, timePerKm: 150 },
  pursuit: { base: 480, perKm: 110, timePerKm: 60 },
  medical_call: { base: 420, perKm: 104, timePerKm: 55 },
  medical_transfer: { base: 340, perKm: 74, timePerKm: 80 },
  fire_call: { base: 520, perKm: 96, timePerKm: 62 },
  fire_forest: { base: 640, perKm: 108, timePerKm: 78 },
  loader_work: { base: 300, perKm: 84, timePerKm: 160 },
  yard_cleanup: { base: 240, perKm: 70, timePerKm: 170 },
  road_work: { base: 460, perKm: 92, timePerKm: 200 },
  dirt_road_repair: { base: 380, perKm: 86, timePerKm: 190 },
  harvest: { base: 540, perKm: 98, timePerKm: 180 },
  golf_tour: { base: 90, perKm: 34, timePerKm: 200 },
  construction_delivery: { base: 330, perKm: 78, timePerKm: 110 },
  timber_run: { base: 380, perKm: 88, timePerKm: 120 },
  long_haul: { base: 720, perKm: 74, timePerKm: 95 }
};

/** Какие задания доступны машине. */
export function missionsForVehicle(v: VehicleDef): MissionKind[] {
  return v.missionKinds as MissionKind[];
}

/** Совместимость: подходит ли машина под задание. */
export function vehicleFitsMission(v: VehicleDef, m: Mission): boolean {
  if (m.kind === "long_haul" && v.cargo < 6000) return false;
  if (m.kind === "delivery_cargo" && v.cargo < 500) return false;
  if (m.kind === "construction_delivery" && v.cargo < 1500) return false;
  if (m.kind === "timber_run" && v.cargo < 2000) return false;
  if (v.missionKinds.includes(m.kind)) return true;
  // Частный извоз доступен любому легковому.
  if (m.kind === "taxi_ride_lite" && v.cls === "car") return true;
  if (m.kind === "delivery_light" && v.cargo >= 100) return true;
  return false;
}

export interface MissionGenContext {
  x: number;
  z: number;
  playerLevel: number;
  vehicle: VehicleDef;
  rng: Rng;
  /** Уже существующие задания (чтобы не дублировать точки). */
  existing: Mission[];
  now: number;
}

let missionSeq = 0;

/** Генерирует одно задание рядом с игроком. */
export function generateMission(ctx: MissionGenContext): Mission | null {
  const kinds = missionsForVehicle(ctx.vehicle);
  const kind = ctx.rng.pick(kinds);
  const eco = ECONOMY[kind];

  // Выбираем поселения.
  const towns = nearbySettlements(ctx.x, ctx.z, 2);
  if (towns.length < 1) return null;

  const pickPoint = (town: Settlement): [number, number] => {
    // Точка на улице или у здания.
    const r = ctx.rng;
    if (town.streetsX.length > 1 && r.chance(0.6)) {
      const useX = r.chance(0.5);
      const sx = useX ? r.pick(town.streetsX) : r.pick(town.streetsZ);
      const other = useX ? r.range(town.streetsZ[0], town.streetsZ[town.streetsZ.length - 1])
        : r.range(town.streetsX[0], town.streetsX[town.streetsX.length - 1]);
      return useX ? [sx, other] : [other, sx];
    }
    const ang = r.range(0, Math.PI * 2);
    const rad = r.range(town.radius * 0.2, town.radius * 0.85);
    return [town.x + Math.cos(ang) * rad, town.z + Math.sin(ang) * rad];
  };

  let fromTown: Settlement;
  let toTown: Settlement;

  if (kinds === undefined || towns.length >= 2) {
    fromTown = ctx.rng.pick(towns);
    // Старая точка — обычно другой город, иногда тот же.
    const others = towns.filter((t) => t.id !== fromTown.id);
    toTown = others.length && ctx.rng.chance(0.72) ? ctx.rng.pick(others) : fromTown;
  } else {
    fromTown = towns[0];
    toTown = towns[0];
  }

  const [fx, fz] = pickPoint(fromTown);
  const [tx, tz] = pickPoint(toTown);
  const km = Math.max(0.25, dist2(fx, fz, tx, tz) / 1000);

  const client = ctx.rng.pick(CLIENTS);
  const reward = Math.round((eco.base + eco.perKm * km) * (0.85 + ctx.rng.next() * 0.4));
  const timeLimit = Math.round((eco.timePerKm * km + 25) * (0.95 + ctx.rng.next() * 0.45));

  const text = NAMES[kind];
  const id = `m${++missionSeq}_${hashInt(Math.round(fx), Math.round(fz), Math.round(ctx.now))}`;

  const mission: Mission = {
    id,
    kind,
    title: text.title,
    desc: text.desc(fromTown.name, toTown.name),
    state: "offer",
    fromX: fx,
    fromZ: fz,
    toX: tx,
    toZ: tz,
    reward,
    timeLimit,
    timeLeft: timeLimit,
    requires: {},
    minCargo: 0,
    hintVehicle: ctx.vehicle.name,
    client,
    pickupDone: false,
    townName: fromTown.name,
    expiresAt: ctx.now + 1000 * 60 * (3 + ctx.rng.next() * 4)
  };

  return mission;
}

/** Заполняет список предложений. */
export function refillOffers(
  offers: Mission[],
  ctx: Omit<MissionGenContext, "existing">,
  want = 4
): void {
  const now = ctx.now;
  // Убираем просроченные.
  for (let i = offers.length - 1; i >= 0; i--) {
    if (offers[i].expiresAt < now) offers.splice(i, 1);
  }
  let guard = 0;
  while (offers.length < want && guard++ < 24) {
    const m = generateMission({ ...ctx, existing: offers });
    if (!m) break;
    // Отсев слишком близких дублей.
    const dup = offers.some((o) => dist2(o.fromX, o.fromZ, m.fromX, m.fromZ) < 60 && o.kind === m.kind);
    if (dup) continue;
    offers.push(m);
  }
}

export interface MissionProgress {
  /** Расстояние до текущей цели, м. */
  distToTarget: number;
  /** Подпись текущей цели. */
  targetLabel: string;
}

export function missionProgress(m: Mission, x: number, z: number): MissionProgress {
  if (m.state === "accepted" || m.state === "offer") {
    const d = dist2(x, z, m.fromX, m.fromZ);
    return { distToTarget: d, targetLabel: "Точка погрузки" };
  }
  const d = dist2(x, z, m.toX, m.toZ);
  return { distToTarget: d, targetLabel: "Точка выгрузки" };
}

export const MISSION_RADIUS = 16;
export const PICKUP_RADIUS = 18;

/** Проверка и продвижение состояния задания. */
export function updateMissionState(m: Mission, x: number, z: number, dt: number, onEvent: (e: "pickup" | "done" | "fail") => void): void {
  if (m.state === "accepted") {
    m.timeLeft -= dt;
    if (m.timeLeft <= 0) {
      m.state = "failed";
      onEvent("fail");
      return;
    }
    if (dist2(x, z, m.fromX, m.fromZ) < PICKUP_RADIUS) {
      m.state = "in_progress";
      m.pickupDone = true;
      // Продлеваем время на вторую половину пути.
      m.timeLeft += m.timeLimit * 0.8;
      onEvent("pickup");
    }
  } else if (m.state === "in_progress") {
    m.timeLeft -= dt;
    if (m.timeLeft <= 0) {
      m.state = "failed";
      onEvent("fail");
      return;
    }
    if (dist2(x, z, m.toX, m.toZ) < MISSION_RADIUS) {
      m.state = "done";
      onEvent("done");
    }
  }
}

/** Итоговая выплата с учётом остатка времени (бонус за скорость). */
export function payout(m: Mission): number {
  const speedBonus = m.timeLimit > 0 ? clamp(m.timeLeft / Math.max(1, m.timeLimit), 0, 1) * 0.35 : 0;
  return Math.round(m.reward * (1 + speedBonus));
}

export function levelFromXp(xp: number): number {
  // Уровни: 1200 xp на уровень с ростом.
  let lvl = 1;
  let need = 600;
  let acc = 0;
  while (xp >= acc + need && lvl < 60) {
    acc += need;
    lvl++;
    need = Math.round(need * 1.22);
  }
  return lvl;
}

export function xpForLevel(level: number): number {
  let acc = 0;
  let need = 600;
  for (let i = 1; i < level; i++) {
    acc += need;
    need = Math.round(need * 1.22);
  }
  return acc;
}
