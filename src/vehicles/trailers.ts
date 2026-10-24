// Прицепы: виды, характеристики, покупка и сцепка.

export type TrailerKind = "cargo" | "tanker" | "livestock" | "caravan" | "flatbed";

export interface TrailerDef {
  id: string;
  name: string;
  kind: TrailerKind;
  price: number;
  /** Собственная масса, кг. */
  mass: number;
  /** Грузоподъёмность, кг. */
  capacity: number;
  /** Длина и ширина, м. */
  length: number;
  width: number;
  height: number;
  /** Длина дышла от передней точки до оси, м. */
  hitching: number;
  wheels: 1 | 2;
  descr: string;
  color: number;
  /** Требует ли грузовой транспорт (иначе только лёгкий). */
  needsTruck: boolean;
}

export const TRAILERS: TrailerDef[] = [
  {
    id: "tr_cargo",
    name: "Грузовой прицеп",
    kind: "cargo",
    price: 6400,
    mass: 380,
    capacity: 750,
    length: 3.1,
    width: 1.5,
    height: 0.55,
    hitching: 1.5,
    wheels: 1,
    descr: "Бортовая платформа с тентом. Дрова, мебель, стройматериалы.",
    color: 0x8d8f92,
    needsTruck: false
  },
  {
    id: "tr_flatbed_big",
    name: "Прицеп-платформа",
    kind: "flatbed",
    price: 11800,
    mass: 720,
    capacity: 2400,
    length: 4.6,
    width: 2.0,
    height: 0.6,
    hitching: 2.0,
    wheels: 2,
    descr: "Двухосная платформа под технику и поддоны. Нужен фаркоп и тягач.",
    color: 0x6f7276,
    needsTruck: true
  },
  {
    id: "tr_tanker",
    name: "Цистерна",
    kind: "tanker",
    price: 18900,
    mass: 1150,
    capacity: 3000,
    length: 5.0,
    width: 2.1,
    height: 1.75,
    hitching: 2.2,
    wheels: 2,
    descr: "Пищевая цистерна: вода и молоко на фермы и в город.",
    color: 0xd6d8da,
    needsTruck: true
  },
  {
    id: "tr_livestock",
    name: "Скотовоз",
    kind: "livestock",
    price: 21400,
    mass: 1350,
    capacity: 1800,
    length: 5.2,
    width: 2.15,
    height: 2.3,
    hitching: 2.2,
    wheels: 2,
    descr: "Решётчатый кузов с вентиляцией для перевозки скота.",
    color: 0xb8b0a2,
    needsTruck: true
  },
  {
    id: "tr_caravan",
    name: "Дом на колёсах",
    kind: "caravan",
    price: 26500,
    mass: 980,
    capacity: 250,
    length: 5.4,
    width: 2.2,
    height: 2.55,
    hitching: 2.0,
    wheels: 2,
    descr: "Жилое пространство: можно переночевать в поле и брать заказы на перевозку дачников.",
    color: 0xe8e2d2,
    needsTruck: false
  }
];

export const TRAILER_BY_ID = new Map(TRAILERS.map((t) => [t.id, t]));

export interface OwnedTrailer {
  id: string;
  /** Прицеплен ли сейчас (сцепка хранится в сейве). */
  attached: boolean;
}

export interface TrailerState {
  x: number;
  z: number;
  /** Курс прицепа, рад. */
  heading: number;
  /** Масса груза, кг. */
  load: number;
}

/** Физика прицепа: дышло прикреплено к фаркопу тягача. */
export function updateTrailer(
  tr: TrailerState,
  def: TrailerDef,
  hitchX: number,
  hitchZ: number,
  hitchHeading: number,
  dt: number,
  speed: number
) {
  const half = def.length * 0.5;

  // Задняя точка прицепа (гарантированно «прошлое» положение).
  const rearX = tr.x - Math.cos(tr.heading) * half;
  const rearZ = tr.z - Math.sin(tr.heading) * half;

  // Желаемый курс: от задней точки к дышлу (фаркопу).
  const dx = hitchX - rearX;
  const dz = hitchZ - rearZ;
  const dist = Math.hypot(dx, dz);
  let desired = tr.heading;

  if (dist > 0.4) {
    desired = Math.atan2(dz, dx);

    // Ограничение угла складывания (фаркоп не даёт сложиться полностью).
    let diff = ((desired - tr.heading + Math.PI) % (Math.PI * 2)) - Math.PI;
    const maxArticulation = 1.15;
    if (diff > maxArticulation) diff = maxArticulation;
    if (diff < -maxArticulation) diff = -maxArticulation;

    // Скорость подворота зависит от скорости движения: стоящий прицеп не крутится.
    const rate = 6.5 * Math.min(1, Math.abs(speed) * 0.16 + 0.18);
    const step = diff * Math.min(1, rate * dt);
    tr.heading += step;

    // Держим дышло на фаркопе: центр прицепа пересчитываем через полдлины.
    tr.x = hitchX - Math.cos(tr.heading) * half;
    tr.z = hitchZ - Math.sin(tr.heading) * half;
  } else {
    tr.x = hitchX - Math.cos(tr.heading) * half;
    tr.z = hitchZ - Math.sin(tr.heading) * half;
  }

  // Лёгкая инерция рыскания на скорости — прицеп «идёт» за тягачом.
  const drift = ((hitchHeading - tr.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  tr.heading += drift * Math.min(0.35, Math.abs(speed) * 0.004) * dt * 60 * 0.06;
  tr.x = hitchX - Math.cos(tr.heading) * half;
  tr.z = hitchZ - Math.sin(tr.heading) * half;
}
