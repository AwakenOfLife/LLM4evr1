// Сохранение прогресса в localStorage.

import { emptyUpgrades, type UpgradeLevels } from "../vehicles/upgrades";
import type { Mission } from "./missions";

export interface OwnedVehicle {
  id: string;
  upgrades: UpgradeLevels;
  color: number;
}

export interface SaveData {
  version: number;
  money: number;
  xp: number;
  owned: OwnedVehicle[];
  activeVehicleId: string;
  trailers: { id: string; attached: boolean }[];
  activeTrailerId: string | null;
  position: { x: number; z: number; heading: number };
  stats: {
    missionsDone: number;
    kmDriven: number;
    earned: number;
    shiftStreak: number;
  };
  settings: {
    quality: "low" | "medium" | "high";
    sound: boolean;
    showTouchControls: boolean;
  };
  activeMission: Mission | null;
  lastSave: number;
}

const KEY = "goroda-i-derevni.save.v1";

export function defaultSave(): SaveData {
  return {
    version: 1,
    money: 2500,
    xp: 0,
    owned: [{ id: "lad_compact", upgrades: emptyUpgrades(), color: 0x2f6fb5 }],
    activeVehicleId: "lad_compact",
    trailers: [],
    activeTrailerId: null,
    position: { x: 0, z: 18, heading: 0 },
    stats: { missionsDone: 0, kmDriven: 0, earned: 0, shiftStreak: 0 },
    settings: { quality: "high", sound: true, showTouchControls: true },
    activeMission: null,
    lastSave: Date.now()
  };
}

export function loadSave(): SaveData {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultSave();
    const parsed = JSON.parse(raw) as Partial<SaveData>;
    const base = defaultSave();
    const merged: SaveData = {
      ...base,
      ...parsed,
      stats: { ...base.stats, ...(parsed.stats ?? {}) },
      settings: { ...base.settings, ...(parsed.settings ?? {}) },
      position: { ...base.position, ...(parsed.position ?? {}) }
    };
    // Валидация парка.
    merged.owned = (merged.owned ?? []).filter((o) => o && o.id).map((o) => ({
      id: o.id,
      color: typeof o.color === "number" ? o.color : 0x2f6fb5,
      upgrades: { ...emptyUpgrades(), ...(o.upgrades ?? {}) }
    }));
    if (merged.owned.length === 0) merged.owned = base.owned;
    if (!merged.owned.some((o) => o.id === merged.activeVehicleId)) {
      merged.activeVehicleId = merged.owned[0].id;
    }
    merged.trailers = merged.trailers ?? [];
    if (merged.activeMission && merged.activeMission.state === "done") merged.activeMission = null;
    return merged;
  } catch {
    return defaultSave();
  }
}

export function writeSave(data: SaveData): boolean {
  try {
    data.lastSave = Date.now();
    localStorage.setItem(KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export function resetSave(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
