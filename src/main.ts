// Точка входа: загрузочный экран, инициализация игры.

import { Game } from "./game/game";

async function boot() {
  const canvas = document.getElementById("game") as HTMLCanvasElement | null;
  const uiRoot = document.getElementById("ui");
  const touchRoot = document.getElementById("touch-controls");
  const loading = document.getElementById("loading");
  const fill = document.getElementById("loading-fill") as HTMLElement | null;
  const text = document.getElementById("loading-text") as HTMLElement | null;

  if (!canvas || !uiRoot || !touchRoot) {
    throw new Error("Не найдены элементы интерфейса");
  }

  // Запрет масштабирования жестами (iOS).
  document.addEventListener("gesturestart", (e) => e.preventDefault());
  document.addEventListener("dblclick", (e) => e.preventDefault(), { passive: false });

  let game: Game;
  try {
    game = new Game({ canvas, uiRoot, touchRoot, onProgress: () => {} });
  } catch (err) {
    if (text) text.textContent = `Ошибка запуска: ${(err as Error).message}`;
    console.error(err);
    return;
  }

  const setProgress = (pct: number, label: string) => {
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = label;
  };

  await game.preload(setProgress);

  loading?.classList.add("hidden");
  game.start();

  // Пауза при уходе со вкладки.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) game.stop();
    else game.start();
  });
}

boot().catch((e) => {
  console.error(e);
  const text = document.getElementById("loading-text");
  if (text) text.textContent = `Не удалось загрузить игру: ${(e as Error).message}`;
});
