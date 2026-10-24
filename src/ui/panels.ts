// Полноэкранные панели: задания, автосалон, гараж с апгрейдами, прицепы, настройки.

import { formatMoney } from "../utils/math";
import { VEHICLES, getVehicle, CLASS_LABEL, SERVICE_LABEL, type VehicleDef } from "../vehicles/catalog";
import { UPGRADES, emptyUpgrades, nextUpgradeCost, type UpgradeKey, type UpgradeLevels } from "../vehicles/upgrades";
import { TRAILERS, TRAILER_BY_ID, type TrailerDef } from "../vehicles/trailers";
import type { SaveData, OwnedVehicle } from "../game/save";
import type { Mission } from "../game/missions";
import { vehicleFitsMission, payout } from "../game/missions";

export interface PanelCallbacks {
  onAcceptMission: (m: Mission) => void;
  onBuyVehicle: (v: VehicleDef, color: number) => void;
  onSelectVehicle: (id: string) => void;
  onBuyUpgrade: (vehicleId: string, key: UpgradeKey) => void;
  onPaintVehicle: (vehicleId: string, color: number) => void;
  onBuyTrailer: (t: TrailerDef) => void;
  onToggleTrailer: (id: string) => void;
  onClose: () => void;
  onReset: () => void;
  onSettingChange: (key: keyof SaveData["settings"], value: unknown) => void;
}

type Tab = "missions" | "dealer" | "garage" | "trailers" | "settings";

export class Panels {
  private overlay: HTMLElement;
  private cb: PanelCallbacks;
  private current: Tab | null = null;
  private save: SaveData;
  private offers: Mission[] = [];
  private dealerFilter: string = "all";
  private activeVehicleId: string;

  constructor(overlay: HTMLElement, save: SaveData, cb: PanelCallbacks) {
    this.overlay = overlay;
    this.save = save;
    this.cb = cb;
    this.activeVehicleId = save.activeVehicleId;
    overlay.addEventListener("pointerdown", (e) => {
      if (e.target === overlay) this.close();
    });
  }

  get isOpen() {
    return this.current !== null;
  }

  updateSave(save: SaveData) {
    this.save = save;
    if (this.current) this.render();
  }

  setOffers(offers: Mission[]) {
    this.offers = offers;
    if (this.current === "missions") this.render();
  }

  open(tab: Tab, offers?: Mission[]) {
    if (offers) this.offers = offers;
    this.current = tab;
    this.overlay.classList.remove("hidden");
    this.render();
  }

  close() {
    if (!this.current) return;
    this.current = null;
    this.overlay.classList.add("hidden");
    this.overlay.innerHTML = "";
    this.cb.onClose();
  }

  toggleTab(tab: Tab) {
    if (this.current === tab) this.close();
    else this.open(tab);
  }

  private render() {
    const tab = this.current;
    if (!tab) return;
    this.overlay.innerHTML = "";

    const panel = document.createElement("div");
    panel.className = "panel";
    this.overlay.appendChild(panel);

    // Заголовок.
    const head = document.createElement("div");
    head.className = "panel-head";
    const titles: Record<Tab, string> = {
      missions: "Задания",
      dealer: "Автосалон",
      garage: "Гараж и улучшения",
      trailers: "Прицепы",
      settings: "Настройки"
    };
    head.innerHTML = `<h2>${titles[tab]}</h2><span class="money">${formatMoney(this.save.money)}</span>`;
    const closeBtn = document.createElement("button");
    closeBtn.className = "btn ghost";
    closeBtn.textContent = "Закрыть";
    closeBtn.onclick = () => this.close();
    head.appendChild(closeBtn);
    panel.appendChild(head);

    // Вкладки.
    const tabs = document.createElement("div");
    tabs.className = "panel-tabs";
    const tabDefs: [Tab, string][] = [
      ["missions", "Задания"],
      ["dealer", "Автосалон"],
      ["garage", "Гараж"],
      ["trailers", "Прицепы"],
      ["settings", "Настройки"]
    ];
    for (const [key, label] of tabDefs) {
      const b = document.createElement("div");
      b.className = `tab ${this.current === key ? "active" : ""}`;
      b.textContent = label;
      b.onclick = () => {
        this.current = key;
        this.render();
      };
      tabs.appendChild(b);
    }
    panel.appendChild(tabs);

    const body = document.createElement("div");
    body.className = "panel-body";
    panel.appendChild(body);

    switch (tab) {
      case "missions":
        this.renderMissions(body);
        break;
      case "dealer":
        this.renderDealer(body);
        break;
      case "garage":
        this.renderGarage(body);
        break;
      case "trailers":
        this.renderTrailers(body);
        break;
      case "settings":
        this.renderSettings(body);
        break;
    }
  }

  // ---------- Задания ----------
  private renderMissions(body: HTMLElement) {
    const active = this.save.activeMission;
    const vehicle = getVehicle(this.save.activeVehicleId);

    if (active && (active.state === "accepted" || active.state === "in_progress")) {
      const wrap = document.createElement("div");
      wrap.innerHTML = `<div class="section-title">Текущее задание</div>`;
      const card = document.createElement("div");
      card.className = "card active-card";
      card.innerHTML = `
        <div class="ttl">${active.title}<span class="tag">${active.state === "accepted" ? "забрать" : "доставить"}</span></div>
        <div class="descr">${active.desc}</div>
        <div class="kv"><span>Заказчик</span><b>${active.client}</b></div>
        <div class="kv"><span>Оплата</span><b style="color:var(--money)">${formatMoney(payout(active))}</b></div>
      `;
      wrap.appendChild(card);
      body.appendChild(wrap);
    }

    const list = this.offers.filter((o) => o.state === "offer");
    const head = document.createElement("div");
    head.className = "section-title";
    head.textContent = `Доступные заказы (${list.length}) — ваш транспорт: ${vehicle.name}`;
    body.appendChild(head);

    if (list.length === 0) {
      const p = document.createElement("div");
      p.className = "descr";
      p.style.color = "var(--dim)";
      p.style.fontSize = "13px";
      p.textContent = "Пока поблизости нет заказов. Покатайтесь по городу — новые появятся.";
      body.appendChild(p);
      return;
    }

    const cards = document.createElement("div");
    cards.className = "cards";
    for (const m of list) {
      const fits = vehicleFitsMission(vehicle, m);
      const card = document.createElement("div");
      card.className = "card";
      const km = Math.round(Math.hypot(m.toX - m.fromX, m.toZ - m.fromZ) / 100) / 10;
      card.innerHTML = `
        <div class="ttl">${m.title}<span class="tag">${m.townName}</span></div>
        <div class="descr">${m.desc}</div>
        <div class="stats">
          <div>Дистанция: <b>${km} км</b></div>
          <div>Время: <b>${Math.round(m.timeLimit / 60)} мин</b></div>
          <div>Нужен: <b>${kindLabel(m.kind)}</b></div>
          <div>Клиент: <b>${m.client}</b></div>
        </div>
        <div class="foot">
          <span class="price">${formatMoney(m.reward)}</span>
          <button class="btn primary" ${!fits || !!active ? "disabled" : ""}>${fits ? "Взять" : "Не подходит"}</button>
        </div>
      `;
      const btn = card.querySelector("button")!;
      btn.onclick = () => {
        if (!fits || this.save.activeMission) return;
        this.cb.onAcceptMission(m);
      };
      cards.appendChild(card);
    }
    body.appendChild(cards);
  }

  // ---------- Автосалон ----------
  private renderDealer(body: HTMLElement) {
    const filters: [string, string][] = [
      ["all", "Все"],
      ["car", "Легковые"],
      ["van", "Фургоны"],
      ["truck", "Грузовые"],
      ["special", "Спецтехника"],
      ["service", "Службы"],
      ["golf", "Гольф-кары"]
    ];
    const row = document.createElement("div");
    row.className = "row";
    row.style.marginBottom = "12px";
    for (const [key, label] of filters) {
      const b = document.createElement("div");
      b.className = `tab ${this.dealerFilter === key ? "active" : ""}`;
      b.textContent = label;
      b.onclick = () => {
        this.dealerFilter = key;
        this.render();
      };
      row.appendChild(b);
    }
    body.appendChild(row);

    const cards = document.createElement("div");
    cards.className = "cards";
    const level = this.level();

    for (const v of VEHICLES) {
      if (this.dealerFilter !== "all" && v.cls !== this.dealerFilter) continue;
      const owned = this.save.owned.find((o) => o.id === v.id);
      const locked = level < v.unlockLevel;
      const affordable = this.save.money >= v.price;

      const card = document.createElement("div");
      card.className = `card ${owned ? "owned" : ""}`;
      card.innerHTML = `
        <div class="ttl">${v.brand} ${v.name}<span class="tag">${CLASS_LABEL[v.cls]}</span></div>
        <div class="descr">${v.descr}</div>
        <div class="stats">
          <div>Мощность: <b>${v.power} л.с.</b></div>
          <div>Макс: <b>${v.topSpeed} км/ч</b></div>
          <div>Масса: <b>${v.mass} кг</b></div>
          <div>Кузов: <b>${v.cargo > 0 ? v.cargo + " кг" : "—"}</b></div>
        </div>
        <div class="foot">
          <span class="price">${owned ? "В гараже" : locked ? `с ${v.unlockLevel} ур.` : formatMoney(v.price)}</span>
          <button class="btn primary" ${
            owned || locked || !affordable ? "disabled" : ""
          }>${owned ? "Куплено" : locked ? "Закрыто" : "Купить"}</button>
        </div>
      `;
      const btn = card.querySelector("button")!;
      btn.onclick = () => {
        if (owned || locked || !affordable) return;
        this.cb.onBuyVehicle(v, v.colors[0]);
      };
      cards.appendChild(card);
    }
    body.appendChild(cards);
  }

  // ---------- Гараж ----------
  private renderGarage(body: HTMLElement) {
    const owned = this.save.owned;
    const listRow = document.createElement("div");
    listRow.className = "row";
    listRow.style.marginBottom = "14px";
    for (const o of owned) {
      const def = getVehicle(o.id);
      const b = document.createElement("div");
      b.className = `tab ${o.id === this.activeVehicleId ? "active" : ""}`;
      b.textContent = def.name;
      b.onclick = () => {
        this.activeVehicleId = o.id;
        this.render();
      };
      listRow.appendChild(b);
    }
    body.appendChild(listRow);

    const cur = owned.find((o) => o.id === this.activeVehicleId) ?? owned[0];
    if (!cur) return;
    const def = getVehicle(cur.id);

    // Карточка машины.
    const info = document.createElement("div");
    info.className = "card";
    info.innerHTML = `
      <div class="ttl">${def.brand} ${def.name}<span class="tag">${CLASS_LABEL[def.cls]}</span></div>
      <div class="descr">${def.descr}</div>
      <div class="stats">
        <div>Мощность: <b>${def.power} л.с.</b></div>
        <div>Масса: <b>${def.mass} кг</b></div>
        <div>Максимум: <b>${def.topSpeed} км/ч</b></div>
        <div>Груз: <b>${def.cargo} кг</b></div>
        <div>Прицеп до: <b>${def.towMax} кг</b></div>
        <div>Служба: <b>${SERVICE_LABEL[def.service] || "—"}</b></div>
      </div>
    `;
    const useBtn = document.createElement("button");
    useBtn.className = `btn ${cur.id === this.save.activeVehicleId ? "" : "primary"}`;
    useBtn.textContent = cur.id === this.save.activeVehicleId ? "Сейчас в использовании" : "Сесть за руль";
    useBtn.disabled = cur.id === this.save.activeVehicleId;
    useBtn.onclick = () => this.cb.onSelectVehicle(cur.id);
    info.querySelector(".foot")?.appendChild(useBtn);
    const foot = document.createElement("div");
    foot.className = "foot";
    foot.appendChild(useBtn);
    info.appendChild(foot);
    body.appendChild(info);

    // Окрас.
    const paintTitle = document.createElement("div");
    paintTitle.className = "section-title";
    paintTitle.textContent = "Окрас кузова";
    body.appendChild(paintTitle);
    const sw = document.createElement("div");
    sw.className = "swatches";
    for (const c of def.colors) {
      const s = document.createElement("div");
      s.className = `swatch ${c === cur.color ? "on" : ""}`;
      s.style.background = `#${c.toString(16).padStart(6, "0")}`;
      s.onclick = () => this.cb.onPaintVehicle(cur.id, c);
      sw.appendChild(s);
    }
    body.appendChild(sw);

    // Улучшения.
    const upTitle = document.createElement("div");
    upTitle.className = "section-title";
    upTitle.textContent = "Улучшения";
    body.appendChild(upTitle);

    for (const u of UPGRADES) {
      const lvl = cur.upgrades[u.key];
      const cost = nextUpgradeCost(u.key, lvl);
      const row = document.createElement("div");
      row.className = "upg-row";

      const pips = document.createElement("div");
      pips.className = "pips";
      for (let i = 0; i < u.max; i++) {
        const p = document.createElement("i");
        if (i < lvl) p.className = "on";
        pips.appendChild(p);
      }

      const lbl = document.createElement("div");
      lbl.className = "lbl";
      lbl.innerHTML = `<b>${u.name}</b> <span class="lvl">${lvl}/${u.max}</span><div style="color:var(--dim);font-size:11px;margin-top:2px">${u.descr}</div>`;

      const btn = document.createElement("button");
      btn.className = "btn primary";
      if (cost === null) {
        btn.textContent = "Максимум";
        btn.disabled = true;
      } else {
        btn.textContent = formatMoney(cost);
        btn.disabled = this.save.money < cost;
        btn.onclick = () => this.cb.onBuyUpgrade(cur.id, u.key);
      }

      row.appendChild(lbl);
      row.appendChild(pips);
      row.appendChild(btn);
      body.appendChild(row);
    }
  }

  // ---------- Прицепы ----------
  private renderTrailers(body: HTMLElement) {
    const v = getVehicle(this.save.activeVehicleId);
    const hasHitch = (this.save.owned.find((o) => o.id === v.id)?.upgrades.hitch ?? 0) > 0;

    const note = document.createElement("div");
    note.className = "descr";
    note.style.marginBottom = "12px";
    note.style.color = hasHitch ? "var(--money)" : "var(--dim)";
    note.textContent = hasHitch
      ? `Фаркоп установлен. Максимальная масса прицепа для ${v.name}: ${v.towMax} кг.`
      : "Для буксировки нужен фаркоп — купите его в разделе «Гараж».";
    body.appendChild(note);

    const cards = document.createElement("div");
    cards.className = "cards";

    for (const t of TRAILERS) {
      const ownedRec = this.save.trailers.find((x) => x.id === t.id);
      const tooHeavy = t.mass + t.capacity > v.towMax;
      const needsTruck = t.needsTruck && v.cls !== "truck" && v.cls !== "special";
      const affordable = this.save.money >= t.price;

      const card = document.createElement("div");
      card.className = `card ${ownedRec ? "owned" : ""}`;
      card.innerHTML = `
        <div class="ttl">${t.name}<span class="tag">${t.kind === "caravan" ? "жилой" : "груз"}</span></div>
        <div class="descr">${t.descr}</div>
        <div class="stats">
          <div>Своя масса: <b>${t.mass} кг</b></div>
          <div>Груз: <b>${t.capacity} кг</b></div>
          <div>Длина: <b>${t.length} м</b></div>
          <div>Оси: <b>${t.wheels}</b></div>
        </div>
        <div class="foot">
          <span class="price">${ownedRec ? "Куплен" : formatMoney(t.price)}</span>
          <button class="btn ${ownedRec?.attached ? "" : "primary"}" ${
            !ownedRec && (!affordable || !hasHitch || tooHeavy || needsTruck) ? "disabled" : ""
          }>${ownedRec ? (ownedRec.attached ? "Отцепить" : "Прицепить") : !hasHitch ? "Нужен фаркоп" : tooHeavy ? "Тяжело" : needsTruck ? "Нужен грузовик" : "Купить"}</button>
        </div>
      `;
      const btn = card.querySelector("button")!;
      btn.onclick = () => {
        if (ownedRec) {
          this.cb.onToggleTrailer(t.id);
        } else {
          if (!affordable || !hasHitch || tooHeavy || needsTruck) return;
          this.cb.onBuyTrailer(t);
        }
      };
      cards.appendChild(card);
    }
    body.appendChild(cards);
  }

  // ---------- Настройки ----------
  private renderSettings(body: HTMLElement) {
    const s = this.save.settings;

    const quality = document.createElement("div");
    quality.className = "upg-row";
    quality.innerHTML = `<div class="lbl"><b>Качество графики</b><div style="color:var(--dim);font-size:11px">Радиус прогрузки мира и детализация.</div></div>`;
    const qRow = document.createElement("div");
    qRow.className = "row";
    for (const q of ["low", "medium", "high"] as const) {
      const b = document.createElement("button");
      b.className = `btn ${s.quality === q ? "primary" : ""}`;
      b.textContent = q === "low" ? "Низкое" : q === "medium" ? "Среднее" : "Высокое";
      b.onclick = () => {
        this.cb.onSettingChange("quality", q);
        this.render();
      };
      qRow.appendChild(b);
    }
    quality.appendChild(qRow);
    body.appendChild(quality);

    const sound = document.createElement("div");
    sound.className = "upg-row";
    sound.innerHTML = `<div class="lbl"><b>Звук</b></div>`;
    const sBtn = document.createElement("button");
    sBtn.className = `btn ${s.sound ? "primary" : ""}`;
    sBtn.textContent = s.sound ? "Вкл" : "Выкл";
    sBtn.onclick = () => {
      this.cb.onSettingChange("sound", !s.sound);
      this.render();
    };
    sound.appendChild(sBtn);
    body.appendChild(sound);

    const touch = document.createElement("div");
    touch.className = "upg-row";
    touch.innerHTML = `<div class="lbl"><b>Сенсорные кнопки</b><div style="color:var(--dim);font-size:11px">Скрывать при подключении геймпада или клавиатуры.</div></div>`;
    const tBtn = document.createElement("button");
    tBtn.className = `btn ${s.showTouchControls ? "primary" : ""}`;
    tBtn.textContent = s.showTouchControls ? "Вкл" : "Выкл";
    tBtn.onclick = () => {
      this.cb.onSettingChange("showTouchControls", !s.showTouchControls);
      this.render();
    };
    touch.appendChild(tBtn);
    body.appendChild(touch);

    const stats = document.createElement("div");
    stats.className = "card";
    stats.style.marginTop = "14px";
    stats.innerHTML = `
      <div class="ttl">Статистика</div>
      <div class="kv"><span>Выполнено заданий</span><b>${this.save.stats.missionsDone}</b></div>
      <div class="kv"><span>Пробег</span><b>${Math.round(this.save.stats.kmDriven)} км</b></div>
      <div class="kv"><span>Заработано</span><b style="color:var(--money)">${formatMoney(this.save.stats.earned)}</b></div>
      <div class="kv"><span>Уровень</span><b>${this.level()}</b></div>
      <div class="kv"><span>Опыт</span><b>${Math.round(this.save.xp)}</b></div>
    `;
    body.appendChild(stats);

    const reset = document.createElement("div");
    reset.className = "row";
    reset.style.marginTop = "16px";
    const rBtn = document.createElement("button");
    rBtn.className = "btn danger";
    rBtn.textContent = "Сбросить прогресс";
    rBtn.onclick = () => {
      if (confirm("Удалить сохранение и начать заново?")) this.cb.onReset();
    };
    reset.appendChild(rBtn);
    body.appendChild(reset);
  }

  private level(): number {
    let lvl = 1;
    let need = 600;
    let acc = 0;
    let xp = this.save.xp;
    while (xp >= acc + need && lvl < 60) {
      acc += need;
      lvl++;
      need = Math.round(need * 1.22);
    }
    return lvl;
  }
}

function kindLabel(kind: string): string {
  const map: Record<string, string> = {
    delivery_light: "любой",
    delivery_cargo: "фургон/грузовик",
    offroad_delivery: "внедорожник",
    courier_shift: "курьер",
    parcel_run: "фургон",
    taxi_ride: "такси",
    taxi_shift: "такси",
    taxi_night: "такси",
    taxi_ride_lite: "легковой",
    passenger_route: "микроавтобус",
    police_call: "полиция",
    police_patrol: "полиция",
    pursuit: "полиция",
    medical_call: "скорая",
    medical_transfer: "скорая",
    fire_call: "пожарная",
    fire_forest: "пожарная",
    loader_work: "погрузчик",
    yard_cleanup: "погрузчик",
    road_work: "каток",
    dirt_road_repair: "грейдер",
    harvest: "комбайн",
    golf_tour: "гольф-кар",
    construction_delivery: "грузовик",
    timber_run: "грузовик",
    long_haul: "тяжёлый грузовик"
  };
  return map[kind] ?? "любой";
}
