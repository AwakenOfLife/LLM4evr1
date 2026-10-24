// HUD: деньги, скорость, задание, нитро, подсказки.

import { formatMoney, formatTime } from "../utils/math";
import type { Mission } from "../game/missions";
import { missionProgress } from "../game/missions";

export class Hud {
  private root: HTMLElement;
  private moneyEl: HTMLElement;
  private speedEl: HTMLElement;
  private gearEl: HTMLElement;
  private vehEl: HTMLElement;
  private nitroWrap: HTMLElement;
  private nitroFill: HTMLElement;
  private missionCard: HTMLElement;
  private toastWrap: HTMLElement;
  private hintEl: HTMLElement;

  private lastMissionHtml = "";
  private lastMoney = -1;
  private lastSpeed = -1;
  private lastGear = "";

  constructor(root: HTMLElement) {
    this.root = root;
    root.innerHTML = "";

    this.moneyEl = document.createElement("div");
    this.moneyEl.className = "hud-money";
    root.appendChild(this.moneyEl);

    this.speedEl = document.createElement("div");
    this.speedEl.className = "hud-speed";
    this.speedEl.innerHTML = `<b>0</b><span>км/ч</span><div class="gear">N</div>`;
    root.appendChild(this.speedEl);
    this.gearEl = this.speedEl.querySelector(".gear")! as HTMLElement;

    this.vehEl = document.createElement("div");
    this.vehEl.className = "hud-veh";
    root.appendChild(this.vehEl);

    this.nitroWrap = document.createElement("div");
    this.nitroWrap.className = "nitro-wrap hidden";
    this.nitroFill = document.createElement("i");
    this.nitroWrap.appendChild(this.nitroFill);
    root.appendChild(this.nitroWrap);

    this.missionCard = document.createElement("div");
    this.missionCard.className = "mission-card hidden";
    root.appendChild(this.missionCard);

    this.toastWrap = document.createElement("div");
    this.toastWrap.className = "toast-wrap";
    root.appendChild(this.toastWrap);

    this.hintEl = document.createElement("div");
    this.hintEl.className = "hint hidden";
    root.appendChild(this.hintEl);
  }

  setMoney(v: number, sub?: string) {
    if (v === this.lastMoney && sub === undefined) return;
    this.lastMoney = v;
    this.moneyEl.innerHTML = `${formatMoney(v)}${sub ? `<span class="sub">${sub}</span>` : ""}`;
  }

  setSpeed(mps: number, reverse: boolean, driving: boolean) {
    const kmh = Math.round(Math.abs(mps) * 3.6);
    if (kmh !== this.lastSpeed) {
      this.lastSpeed = kmh;
      (this.speedEl.querySelector("b") as HTMLElement).textContent = String(kmh);
    }
    const gear = !driving ? "P" : reverse ? "R" : mps < 0.5 ? "N" : "D";
    if (gear !== this.lastGear) {
      this.lastGear = gear;
      this.gearEl.textContent = gear;
    }
  }

  setVehicle(name: string, meta: string) {
    const html = `<div class="name">${name}</div><div class="meta">${meta}</div>`;
    if (this.vehEl.innerHTML !== html) this.vehEl.innerHTML = html;
  }

  setNitro(visible: boolean, level: number, active: boolean) {
    this.nitroWrap.classList.toggle("hidden", !visible);
    if (visible) {
      this.nitroFill.style.width = `${Math.round(level * 100)}%`;
      this.nitroWrap.classList.toggle("on", active);
    }
  }

  setMission(m: Mission | null, px: number, pz: number, hint?: string) {
    if (!m) {
      if (this.lastMissionHtml !== "") {
        this.lastMissionHtml = "";
        this.missionCard.classList.add("hidden");
        this.missionCard.innerHTML = "";
      }
      return;
    }
    const prog = missionProgress(m, px, pz);
    const distStr = prog.distToTarget > 1000
      ? `${(prog.distToTarget / 1000).toFixed(1)} км`
      : `${Math.round(prog.distToTarget)} м`;
    const stateLabel = m.state === "accepted" ? "ЗАБРАТЬ" : "ДОСТАВИТЬ";
    const timeStr = m.timeLimit > 0 ? formatTime(m.timeLeft) : "";
    const pct = Math.max(0, Math.min(100, (m.timeLeft / Math.max(1, m.timeLimit)) * 100));

    const html = `
      <div class="row1">
        <span class="kind">${stateLabel}</span>
        <span class="title">${escapeHtml(m.title)}</span>
      </div>
      <div class="desc">${escapeHtml(hint ?? m.desc)}</div>
      <div class="foot">
        <span class="dist">${distStr} · ${escapeHtml(prog.targetLabel)}</span>
        <span class="rew">${formatMoney(m.reward)}</span>
        ${timeStr ? `<span class="timer">${timeStr}</span>` : ""}
      </div>
      <div class="bar"><i style="width:${pct}%"></i></div>
    `;
    if (html !== this.lastMissionHtml) {
      this.lastMissionHtml = html;
      this.missionCard.classList.remove("hidden");
      this.missionCard.innerHTML = html;
    }
  }

  toast(text: string, kind: "good" | "bad" | "info" = "info", ms = 2600) {
    const el = document.createElement("div");
    el.className = `toast ${kind === "info" ? "" : kind}`;
    el.textContent = text;
    this.toastWrap.appendChild(el);
    setTimeout(() => {
      el.style.transition = "opacity 0.35s, transform 0.35s";
      el.style.opacity = "0";
      el.style.transform = "translateY(-6px)";
      setTimeout(() => el.remove(), 380);
    }, ms);
    // Не копим бесконечно.
    while (this.toastWrap.children.length > 4) this.toastWrap.firstChild?.remove();
  }

  setHint(text: string | null) {
    if (!text) {
      this.hintEl.classList.add("hidden");
      return;
    }
    if (this.hintEl.textContent !== text) this.hintEl.textContent = text;
    this.hintEl.classList.remove("hidden");
  }

  destroy() {
    this.root.innerHTML = "";
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
