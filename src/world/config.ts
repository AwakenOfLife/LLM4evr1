// Константы мира. Мир бесконечный и полностью детерминированный:
// всё, что не сохранено в сейве, восстанавливается из сида и координат.

export const WORLD_SEED = 20241024;

/** Размер чанка в метрах. */
export const CHUNK_SIZE = 220;
/** Сегментов сетки рельефа на чанк (квадрат). */
export const CHUNK_SEGMENTS = 22;

/** Радиус подгрузки чанков (в чанках). 3 => 7x7 = 49 чанков. */
export const LOAD_RADIUS = 3;
/** Радиус, за которым чанки выгружаются (обычно == LOAD_RADIUS). */
export const UNLOAD_RADIUS = LOAD_RADIUS + 1;

/** Макро-ячейка: в каждой может стоять город или деревня. */
export const MACRO_SIZE = 1600;

/** Дальность тумана. */
export const FOG_NEAR = CHUNK_SIZE * (LOAD_RADIUS - 1.35);
export const FOG_FAR = CHUNK_SIZE * (LOAD_RADIUS - 0.12);

export const ROAD_WIDTH_HIGHWAY = 9;
export const ROAD_WIDTH_STREET = 7.5;
export const ROAD_SHOULDER = 9;

export const TOWN_CITY_RADIUS_MIN = 200;
export const TOWN_CITY_RADIUS_MAX = 330;
export const TOWN_VILLAGE_RADIUS_MIN = 70;
export const TOWN_VILLAGE_RADIUS_MAX = 130;

export const WORLD_BOTTOM = -400;

/** Цвета мира. */
export const COLORS = {
  grassA: 0x4d7a3a,
  grassB: 0x628c42,
  grassDry: 0x8a9a4e,
  dirt: 0x7a6446,
  rock: 0x6b6b6b,
  sand: 0xa89b72,
  road: 0x3a3d42,
  roadLine: 0xf0f0f0,
  sidewalk: 0x8b8b8b,
  sky: 0x8fc4e8
};
