// Каталог транспорта. Все характеристики — в СИ (м, с, кг).

export type VehicleClass =
  | "car"
  | "van"
  | "truck"
  | "special"
  | "service"
  | "golf";

export type ServiceKind = "taxi" | "police" | "ambulance" | "fire" | "courier" | "none";

export interface BodySpec {
  /** Длина, ширина, высота кузова. */
  length: number;
  width: number;
  height: number;
  /** Колёсная база. */
  wheelbase: number;
  wheelRadius: number;
  /** Число осей-визуальных колёс (2 или 3). */
  axles: 2 | 3;
  /** Тип кузова для визуализации. */
  shape:
    | "sedan"
    | "hatch"
    | "suv"
    | "pickup"
    | "van"
    | "box"
    | "tanker"
    | "flatbed"
    | "bus"
    | "loader"
    | "roller"
    | "grader"
    | "combine"
    | "golf";
  /** Кабина спереди (для грузовиков). */
  cab: boolean;
}

export interface VehicleDef {
  id: string;
  name: string;
  brand: string;
  cls: VehicleClass;
  service: ServiceKind;
  price: number;
  /** Требуемый уровень игрока (0 = доступен сразу). */
  unlockLevel: number;
  /** Масса, кг. */
  mass: number;
  /** Мощность, л.с. */
  power: number;
  /** Максимальная скорость, км/ч. */
  topSpeed: number;
  /** Тормозное усилие (условные единицы). */
  brakes: number;
  /** Сцепление/управляемость 0..1.4. */
  grip: number;
  /** Максимальный угол поворота колёс, рад. */
  steerAngle: number;
  /** Проходимость: 1 = асфальт, >1 лучше на бездорожье. */
  offroad: number;
  /** Расход/запас нитро зависит от наличия апгрейда. */
  baseNitro: number;
  body: BodySpec;
  colors: number[];
  descr: string;
  /** Может буксировать прицеп. */
  towCapable: boolean;
  /** Максимальная масса прицепа, кг. */
  towMax: number;
  /** Грузоподъёмность для миссий доставки, кг. */
  cargo: number;
  /** Классы заданий, доступные машине. */
  missionKinds: string[];
}

const S = (p: Partial<BodySpec> & Pick<BodySpec, "length" | "width" | "height" | "wheelbase" | "wheelRadius" | "axles" | "shape" | "cab">): BodySpec => p;

export const VEHICLES: VehicleDef[] = [
  // ---------- Легковые ----------
  {
    id: "lad_compact",
    name: "Компакт",
    brand: "Лада",
    cls: "car",
    service: "none",
    price: 0,
    unlockLevel: 0,
    mass: 1050,
    power: 75,
    topSpeed: 150,
    brakes: 0.9,
    grip: 1.0,
    steerAngle: 0.62,
    offroad: 0.72,
    baseNitro: 0,
    body: S({ length: 4.05, width: 1.72, height: 1.45, wheelbase: 2.5, wheelRadius: 0.31, axles: 2, shape: "hatch", cab: false }),
    colors: [0x2f6fb5, 0xc0392b, 0xecf0f1, 0x27ae60, 0x34495e],
    descr: "Первая машина. Неприхотлива, дёшева в ремонте и позволяет работать курьером.",
    towCapable: false,
    towMax: 0,
    cargo: 120,
    missionKinds: ["delivery_light", "courier_shift", "taxi_ride_lite"]
  },
  {
    id: "sedan_premium",
    name: "Комфорт",
    brand: "Волга",
    cls: "car",
    service: "none",
    price: 14500,
    unlockLevel: 1,
    mass: 1420,
    power: 150,
    topSpeed: 205,
    brakes: 1.15,
    grip: 1.12,
    steerAngle: 0.58,
    offroad: 0.55,
    baseNitro: 0,
    body: S({ length: 4.72, width: 1.84, height: 1.46, wheelbase: 2.82, wheelRadius: 0.33, axles: 2, shape: "sedan", cab: false }),
    colors: [0x1b2733, 0x8e9095, 0xb03a2e, 0x2b4c7e, 0xe8e8e8],
    descr: "Динамичный седан: хорош и в такси, и в роли личного автомобиля.",
    towCapable: false,
    towMax: 0,
    cargo: 160,
    missionKinds: ["delivery_light", "taxi_ride", "taxi_shift", "courier_shift"]
  },
  {
    id: "suv_forest",
    name: "Таёжник",
    brand: "Урал",
    cls: "car",
    service: "none",
    price: 26800,
    unlockLevel: 3,
    mass: 1980,
    power: 210,
    topSpeed: 185,
    brakes: 1.1,
    grip: 1.04,
    steerAngle: 0.55,
    offroad: 1.35,
    baseNitro: 0,
    body: S({ length: 4.86, width: 1.96, height: 1.82, wheelbase: 2.9, wheelRadius: 0.39, axles: 2, shape: "suv", cab: false }),
    colors: [0x3d4d3a, 0x2c3e50, 0x7f6a4f, 0x933f2f, 0xd8d8d0],
    descr: "Полный привод и клиренс: проедет по полю к самой дальней деревне.",
    towCapable: true,
    towMax: 2200,
    cargo: 300,
    missionKinds: ["delivery_light", "delivery_cargo", "offroad_delivery", "courier_shift"]
  },

  // ---------- Фургоны ----------
  {
    id: "van_courier",
    name: "Курьер",
    brand: "ГАЗ",
    cls: "van",
    service: "courier",
    price: 19400,
    unlockLevel: 2,
    mass: 2150,
    power: 120,
    topSpeed: 145,
    brakes: 1.0,
    grip: 0.94,
    steerAngle: 0.6,
    offroad: 0.8,
    baseNitro: 0,
    body: S({ length: 5.3, width: 2.0, height: 2.3, wheelbase: 3.1, wheelRadius: 0.34, axles: 2, shape: "van", cab: false }),
    colors: [0xf0c419, 0xe8e8e8, 0x2f6fb5],
    descr: "Рабочая лошадка курьера: вместительный кузов и расклейка по бортам.",
    towCapable: true,
    towMax: 1800,
    cargo: 1200,
    missionKinds: ["courier_shift", "delivery_light", "delivery_cargo", "parcel_run"]
  },
  {
    id: "van_minibus",
    name: "Микроавтобус",
    brand: "ГАЗ",
    cls: "van",
    service: "none",
    price: 23200,
    unlockLevel: 4,
    mass: 2600,
    power: 140,
    topSpeed: 135,
    brakes: 1.05,
    grip: 0.9,
    steerAngle: 0.58,
    offroad: 0.78,
    baseNitro: 0,
    body: S({ length: 5.7, width: 2.05, height: 2.45, wheelbase: 3.3, wheelRadius: 0.35, axles: 2, shape: "bus", cab: false }),
    colors: [0xe8e8e8, 0xf0c419, 0x3f7d5a],
    descr: "Восемь мест: пассажирские рейсы и школьные подвозки.",
    towCapable: true,
    towMax: 2100,
    cargo: 800,
    missionKinds: ["passenger_route", "taxi_ride", "delivery_light"]
  },

  // ---------- Грузовые ----------
  {
    id: "truck_flatbed",
    name: "Бортовой",
    brand: "ЗИЛ",
    cls: "truck",
    service: "none",
    price: 34500,
    unlockLevel: 5,
    mass: 5400,
    power: 185,
    topSpeed: 110,
    brakes: 1.2,
    grip: 0.82,
    steerAngle: 0.55,
    offroad: 0.85,
    baseNitro: 0,
    body: S({ length: 6.9, width: 2.35, height: 2.9, wheelbase: 3.9, wheelRadius: 0.44, axles: 2, shape: "flatbed", cab: true }),
    colors: [0x4f6b52, 0x2f6fb5, 0x7a6a4e],
    descr: "Открытая платформа под доски, мебель и стройматериалы.",
    towCapable: true,
    towMax: 4500,
    cargo: 5000,
    missionKinds: ["delivery_cargo", "construction_delivery", "timber_run"]
  },
  {
    id: "truck_box",
    name: "Фургон-тяжёлый",
    brand: "МАЗ",
    cls: "truck",
    service: "none",
    price: 48900,
    unlockLevel: 7,
    mass: 8200,
    power: 280,
    topSpeed: 105,
    brakes: 1.35,
    grip: 0.8,
    steerAngle: 0.52,
    offroad: 0.8,
    baseNitro: 0,
    body: S({ length: 8.6, width: 2.5, height: 3.4, wheelbase: 4.7, wheelRadius: 0.5, axles: 3, shape: "box", cab: true }),
    colors: [0xe8e8e8, 0xd94f37, 0x2c3e50],
    descr: "Закрытый кузов на 12 тонн: межгородские рейсы и холодная логистика.",
    towCapable: true,
    towMax: 8000,
    cargo: 12000,
    missionKinds: ["delivery_cargo", "long_haul", "construction_delivery"]
  },

  // ---------- Службы ----------
  {
    id: "taxi_classic",
    name: "Такси",
    brand: "Таксопарк",
    cls: "service",
    service: "taxi",
    price: 21600,
    unlockLevel: 2,
    mass: 1480,
    power: 140,
    topSpeed: 190,
    brakes: 1.12,
    grip: 1.08,
    steerAngle: 0.6,
    offroad: 0.6,
    baseNitro: 0,
    body: S({ length: 4.62, width: 1.82, height: 1.5, wheelbase: 2.78, wheelRadius: 0.32, axles: 2, shape: "sedan", cab: false }),
    colors: [0xf2c14e, 0xf6d55c],
    descr: "Лицензия такси. Пассажиры ждут — счётчик включается при посадке.",
    towCapable: false,
    towMax: 0,
    cargo: 150,
    missionKinds: ["taxi_ride", "taxi_shift", "taxi_night"]
  },
  {
    id: "police_patrol",
    name: "Патруль",
    brand: "Полиция",
    cls: "service",
    service: "police",
    price: 38200,
    unlockLevel: 6,
    mass: 1720,
    power: 240,
    topSpeed: 215,
    brakes: 1.25,
    grip: 1.18,
    steerAngle: 0.6,
    offroad: 0.7,
    baseNitro: 1,
    body: S({ length: 4.9, width: 1.9, height: 1.52, wheelbase: 2.9, wheelRadius: 0.34, axles: 2, shape: "sedan", cab: false }),
    colors: [0xf0f3f6, 0x1f3a93],
    descr: "Спецсигналы и рация: выезды на происшествия и погони.",
    towCapable: false,
    towMax: 0,
    cargo: 120,
    missionKinds: ["police_call", "police_patrol", "pursuit"]
  },
  {
    id: "ambulance_van",
    name: "Скорая",
    brand: "Медслужба",
    cls: "service",
    service: "ambulance",
    price: 42500,
    unlockLevel: 8,
    mass: 3100,
    power: 190,
    topSpeed: 155,
    brakes: 1.3,
    grip: 0.95,
    steerAngle: 0.56,
    offroad: 0.85,
    baseNitro: 1,
    body: S({ length: 5.9, width: 2.1, height: 2.65, wheelbase: 3.4, wheelRadius: 0.37, axles: 2, shape: "bus", cab: false }),
    colors: [0xf5f7f8, 0xd93b3b],
    descr: "Реанимация на колёсах. Счёт идёт на секунды.",
    towCapable: false,
    towMax: 0,
    cargo: 500,
    missionKinds: ["medical_call", "medical_transfer"]
  },
  {
    id: "fire_truck",
    name: "Пожарная",
    brand: "Пожарная охрана",
    cls: "service",
    service: "fire",
    price: 61000,
    unlockLevel: 10,
    mass: 11500,
    power: 330,
    topSpeed: 105,
    brakes: 1.45,
    grip: 0.78,
    steerAngle: 0.5,
    offroad: 0.7,
    baseNitro: 0,
    body: S({ length: 9.4, width: 2.55, height: 3.6, wheelbase: 5.0, wheelRadius: 0.52, axles: 3, shape: "box", cab: true }),
    colors: [0xd93b3b, 0xf0f3f6],
    descr: "Цистерна и лестница. Тушение пожаров, в том числе за городом.",
    towCapable: false,
    towMax: 0,
    cargo: 3000,
    missionKinds: ["fire_call", "fire_forest"]
  },

  // ---------- Спецтехника ----------
  {
    id: "loader_small",
    name: "Погрузчик",
    brand: "Амкодор",
    cls: "special",
    service: "none",
    price: 29800,
    unlockLevel: 5,
    mass: 3900,
    power: 90,
    topSpeed: 32,
    brakes: 1.1,
    grip: 0.9,
    steerAngle: 0.7,
    offroad: 1.2,
    baseNitro: 0,
    body: S({ length: 4.2, width: 1.9, height: 2.7, wheelbase: 2.3, wheelRadius: 0.52, axles: 2, shape: "loader", cab: true }),
    colors: [0xf0c419, 0xff8c1a],
    descr: "Ковш и вилы: погрузка на складе, расчистка снега, уборка стройплощадки.",
    towCapable: false,
    towMax: 0,
    cargo: 1500,
    missionKinds: ["loader_work", "yard_cleanup"]
  },
  {
    id: "roller_road",
    name: "Каток",
    brand: "Дормаш",
    cls: "special",
    service: "none",
    price: 33400,
    unlockLevel: 6,
    mass: 6100,
    power: 80,
    topSpeed: 22,
    brakes: 1.0,
    grip: 0.85,
    steerAngle: 0.6,
    offroad: 0.9,
    baseNitro: 0,
    body: S({ length: 5.0, width: 2.0, height: 2.9, wheelbase: 2.6, wheelRadius: 0.55, axles: 2, shape: "roller", cab: true }),
    colors: [0xf0c419, 0xd9d9d9],
    descr: "Уплотнение асфальта. Работа по участкам дорожного ремонта.",
    towCapable: false,
    towMax: 0,
    cargo: 0,
    missionKinds: ["road_work"]
  },
  {
    id: "grader_road",
    name: "Грейдер",
    brand: "Дормаш",
    cls: "special",
    service: "none",
    price: 41600,
    unlockLevel: 8,
    mass: 8400,
    power: 110,
    topSpeed: 28,
    brakes: 1.0,
    grip: 0.85,
    steerAngle: 0.58,
    offroad: 1.05,
    baseNitro: 0,
    body: S({ length: 7.4, width: 2.4, height: 3.1, wheelbase: 4.4, wheelRadius: 0.56, axles: 3, shape: "grader", cab: true }),
    colors: [0xf0c419, 0xe8b53c],
    descr: "Планировка грунтовок: восстановление дорог после дождей.",
    towCapable: false,
    towMax: 0,
    cargo: 0,
    missionKinds: ["road_work", "dirt_road_repair"]
  },
  {
    id: "combine_harvest",
    name: "Комбайн",
    brand: "Ростсельмаш",
    cls: "special",
    service: "none",
    price: 58000,
    unlockLevel: 9,
    mass: 12400,
    power: 340,
    topSpeed: 26,
    brakes: 1.0,
    grip: 0.82,
    steerAngle: 0.5,
    offroad: 1.15,
    baseNitro: 0,
    body: S({ length: 9.6, width: 2.9, height: 3.9, wheelbase: 4.2, wheelRadius: 0.72, axles: 2, shape: "combine", cab: true }),
    colors: [0xcf3a2e, 0xe5b33c],
    descr: "Жатва с полей совхоза. Урожай — на склад в деревне.",
    towCapable: false,
    towMax: 0,
    cargo: 4000,
    missionKinds: ["harvest"]
  },
  {
    id: "golf_cart",
    name: "Гольф-кар",
    brand: "Клуб «Заря»",
    cls: "golf",
    service: "none",
    price: 7300,
    unlockLevel: 1,
    mass: 480,
    power: 14,
    topSpeed: 42,
    brakes: 0.7,
    grip: 0.9,
    steerAngle: 0.85,
    offroad: 0.95,
    baseNitro: 0,
    body: S({ length: 2.6, width: 1.25, height: 1.8, wheelbase: 1.65, wheelRadius: 0.26, axles: 2, shape: "golf", cab: false }),
    colors: [0xf5f7f8, 0x6fbf73, 0xf0c419],
    descr: "Тихий и медленный, но гостям поля важно доехать с комфортом.",
    towCapable: false,
    towMax: 0,
    cargo: 80,
    missionKinds: ["golf_tour"]
  }
];

export const VEHICLE_BY_ID = new Map(VEHICLES.map((v) => [v.id, v]));

export function getVehicle(id: string): VehicleDef {
  const v = VEHICLE_BY_ID.get(id);
  if (!v) throw new Error(`Неизвестный транспорт: ${id}`);
  return v;
}

export const CLASS_LABEL: Record<VehicleClass, string> = {
  car: "Легковой",
  van: "Фургон",
  truck: "Грузовой",
  special: "Спецтехника",
  service: "Служба",
  golf: "Гольф-кар"
};

export const SERVICE_LABEL: Record<ServiceKind, string> = {
  taxi: "Такси",
  police: "Полиция",
  ambulance: "Скорая",
  fire: "Пожарные",
  courier: "Курьер",
  none: ""
};
