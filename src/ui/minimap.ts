// Миникарта: рисует дороги, поселения, миссии и игрока.

import { getMacroRoads, type RoadSegment } from "../world/roads";
import { getSettlement, nearbySettlements } from "../world/settlements";
import { MACRO_SIZE } from "../world/config";
import type { Mission } from "../game/missions";

export interface MinimapInput {
  x: number;
  z: number;
  heading: number;
  mission: Mission | null;
  offers: Mission[];
}

export class Minimap {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private scale = 0.16; // px на метр при 168px
  private size = 168;
  private dpr = Math.min(2, window.devicePixelRatio || 1);

  constructor(container: HTMLElement) {
    const wrap = document.createElement("div");
    wrap.className = "minimap";
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.size * this.dpr;
    this.canvas.height = this.size * this.dpr;
    wrap.appendChild(this.canvas);
    container.appendChild(wrap);
    const c = this.canvas.getContext("2d");
    if (!c) throw new Error("2D context недоступен");
    this.ctx = c;
    this.ctx.scale(this.dpr, this.dpr);
  }

  update(data: MinimapInput) {
    const ctx = this.ctx;
    const S = this.size;
    const cx = S / 2;
    const cy = S / 2;
    const scale = this.scale;

    ctx.clearRect(0, 0, S, S);

    // Фон — трава.
    ctx.fillStyle = "#3d5c31";
    ctx.fillRect(0, 0, S, S);

    const toScreen = (wx: number, wz: number): [number, number] => [
      cx + (wx - data.x) * scale,
      cy + (wz - data.z) * scale
    ];

    // Пятна поселений.
    const towns = nearbySettlements(data.x, data.z, 2);
    for (const t of towns) {
      const [px, py] = toScreen(t.x, t.z);
      const r = Math.max(3, t.radius * scale);
      ctx.fillStyle = t.kind === "city" ? "#6a6a68" : "#7d7461";
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Дороги.
    const gx = Math.floor(data.x / MACRO_SIZE);
    const gz = Math.floor(data.z / MACRO_SIZE);
    ctx.lineCap = "round";
    for (let dz = -2; dz <= 2; dz++) {
      for (let dx = -2; dx <= 2; dx++) {
        for (const s of getMacroRoads(gx + dx, gz + dz)) {
          const [ax, ay] = toScreen(s.ax, s.az);
          const [bx, by] = toScreen(s.bx, s.bz);
          // Отсечение грубое — за пределами экрана не рисуем.
          if ((ax < -20 && bx < -20) || (ax > S + 20 && bx > S + 20)) continue;
          if ((ay < -20 && by < -20) || (ay > S + 20 && by > S + 20)) continue;
          ctx.strokeStyle = s.kind === "highway" ? "#d9d3c4" : "#a9a49a";
          ctx.lineWidth = s.kind === "highway" ? 2.6 : 1.4;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    }

    // Предложения заданий.
    for (const o of data.offers) {
      if (o.state !== "offer") continue;
      const [px, py] = toScreen(o.fromX, o.fromZ);
      if (px < -8 || px > S + 8 || py < -8 || py > S + 8) continue;
      ctx.fillStyle = "#ffc247";
      ctx.beginPath();
      ctx.arc(px, py, 3.4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Активное задание.
    const m = data.mission;
    if (m && (m.state === "accepted" || m.state === "in_progress")) {
      const target = m.state === "accepted" ? [m.fromX, m.fromZ] : [m.toX, m.toZ];
      const [px, py] = toScreen(target[0], target[1]);
      const clampedX = Math.max(8, Math.min(S - 8, px));
      const clampedY = Math.max(8, Math.min(S - 8, py));
      ctx.fillStyle = m.state === "accepted" ? "#7ee787" : "#ff6b6b";
      ctx.beginPath();
      ctx.arc(clampedX, clampedY, 4.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();
      // Линия от игрока к цели.
      if (px !== clampedX || py !== clampedY) {
        ctx.strokeStyle = "rgba(255,255,255,0.25)";
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(clampedX, clampedY);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Игрок — треугольник по курсу.
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(data.heading + Math.PI / 2);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, -6.5);
    ctx.lineTo(4.4, 5);
    ctx.lineTo(0, 2.6);
    ctx.lineTo(-4.4, 5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Рамка севера.
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.font = "bold 9px -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("С", cx, 11);
  }
}
