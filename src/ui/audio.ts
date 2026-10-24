// Минимальный синтезатор звука: двигатель, сигнал, денежные «дзынь», удары.

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private engineSub: OscillatorNode | null = null;
  private subGain: GainNode | null = null;
  private started = false;
  enabled = true;

  /** Инициализация по первому жесту пользователя (требование Safari). */
  init() {
    if (this.started) return;
    try {
      const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new Ctor();
      this.started = true;
      this.buildEngine();
    } catch {
      this.ctx = null;
    }
  }

  private buildEngine() {
    const ctx = this.ctx;
    if (!ctx) return;
    const gain = ctx.createGain();
    gain.gain.value = 0;
    const filt = ctx.createBiquadFilter();
    filt.type = "lowpass";
    filt.frequency.value = 760;
    filt.Q.value = 3.2;

    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.value = 60;

    const sub = ctx.createOscillator();
    sub.type = "square";
    sub.frequency.value = 30;
    const subG = ctx.createGain();
    subG.gain.value = 0.34;

    osc.connect(filt);
    sub.connect(subG);
    subG.connect(filt);
    filt.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    sub.start();

    this.engineOsc = osc;
    this.engineSub = sub;
    this.engineGain = gain;
    this.subGain = subG;
    this.engineFilter = filt;
  }

  private engineFilter: BiquadFilterNode | null = null;

  /** rpm 0..1, throttle 0..1 */
  setEngine(rpm: number, running: boolean) {
    if (!this.ctx || !this.engineOsc || !this.engineGain) return;
    const t = this.ctx.currentTime;
    const target = running && this.enabled ? 0.055 + rpm * 0.075 : 0;
    this.engineGain.gain.setTargetAtTime(target, t, 0.08);
    const freq = 44 + rpm * 132;
    this.engineOsc.frequency.setTargetAtTime(freq, t, 0.05);
    this.engineSub?.frequency.setTargetAtTime(freq * 0.5, t, 0.05);
    this.engineFilter?.frequency.setTargetAtTime(520 + rpm * 1500, t, 0.08);
  }

  private blip(freq: number, dur: number, type: OscillatorType = "sine", vol = 0.14, slideTo?: number) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, ctx.currentTime + dur);
    g.gain.value = vol;
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur + 0.02);
  }

  cash() {
    this.blip(880, 0.09, "triangle", 0.13);
    setTimeout(() => this.blip(1320, 0.14, "triangle", 0.11), 70);
  }

  success() {
    [523, 659, 784].forEach((f, i) => setTimeout(() => this.blip(f, 0.2, "sine", 0.12), i * 95));
  }

  fail() {
    this.blip(320, 0.24, "sawtooth", 0.1, 130);
  }

  bump(strength: number) {
    this.blip(70 + strength * 40, 0.16, "square", Math.min(0.2, 0.05 + strength * 0.15), 40);
  }

  click() {
    this.blip(660, 0.04, "square", 0.06);
  }

  horn() {
    this.blip(392, 0.3, "sawtooth", 0.08);
    setTimeout(() => this.blip(494, 0.26, "sawtooth", 0.07), 30);
  }

  suspend() {
    this.setEngine(0, false);
  }
}
