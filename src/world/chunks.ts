// Менеджер чанков: бесшовный стриминг мира.
// Чанк содержит рельеф, дороги, здания и растительность.
// Всё генерируется детерминированно, поэтому повторная загрузка даёт тот же результат.

import * as THREE from "three";
import { CHUNK_SIZE, CHUNK_SEGMENTS, LOAD_RADIUS, UNLOAD_RADIUS, COLORS } from "./config";
import { heightAt, slopeAt } from "./terrain";
import { getSettlement, townCovering, nearbySettlements } from "./settlements";
import { getMacroRoads } from "./roads";
import { buildingsForSettlement, type Building } from "./buildings";
import { Rng, hashInt, clamp, fbm2, TAU } from "../utils/math";
import { MACRO_SIZE, WORLD_SEED } from "./config";

const v3 = THREE.Vector3;

export interface ChunkData {
  cx: number;
  cz: number;
  key: string;
  group: THREE.Group;
  buildings: CollisionBox[];
  /** Кэш по зданиям поселения, чтобы не пересчитывать. */
  loadedAt: number;
}

export interface CollisionBox {
  x: number;
  z: number;
  hw: number;
  hd: number;
  rot: number;
  h: number;
  kind: string;
}

/** Простые материалы, разделяемые всеми чанками. */
class SharedMaterials {
  terrain = new THREE.MeshLambertMaterial({ vertexColors: true });
  road = new THREE.MeshLambertMaterial({ color: COLORS.road });
  sidewalk = new THREE.MeshLambertMaterial({ color: COLORS.sidewalk });
  wallCache = new Map<number, THREE.MeshLambertMaterial>();
  roofCache = new Map<number, THREE.MeshLambertMaterial>();
  window = new THREE.MeshLambertMaterial({ color: 0x2a3440 });
  trunk = new THREE.MeshLambertMaterial({ color: 0x5a4632 });
  leafA = new THREE.MeshLambertMaterial({ color: 0x3f6b34 });
  leafB = new THREE.MeshLambertMaterial({ color: 0x4f7a3a });
  leafC = new THREE.MeshLambertMaterial({ color: 0x6b8544 });

  wall(c: number) {
    let m = this.wallCache.get(c);
    if (!m) {
      m = new THREE.MeshLambertMaterial({ color: c });
      this.wallCache.set(c, m);
    }
    return m;
  }
  roof(c: number) {
    let m = this.roofCache.get(c);
    if (!m) {
      m = new THREE.MeshLambertMaterial({ color: c });
      this.roofCache.set(c, m);
    }
    return m;
  }
}

/** Общие геометрии (переиспользуются тысячами объектов). */
class SharedGeometry {
  box = new THREE.BoxGeometry(1, 1, 1);
  cylinder = new THREE.CylinderGeometry(1, 1, 1, 8);
  cone = new THREE.ConeGeometry(1, 1, 7);
  plane = new THREE.PlaneGeometry(1, 1);
}

export class ChunkManager {
  private scene: THREE.Scene;
  private chunks = new Map<string, ChunkData>();
  mat = new SharedMaterials();
  geo = new SharedGeometry();
  /** Кэш зданий по поселению. */
  private townBuildings = new Map<string, Building[]>();
  private queue: { cx: number; cz: number; dist: number }[] = [];
  private buildingBuf: CollisionBox[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  private key(cx: number, cz: number) {
    return `${cx},${cz}`;
  }

  /** Список коллизий в радиусе (для физики транспорта). */
  collisionsNear(x: number, z: number, radius: number): CollisionBox[] {
    const r = Math.ceil(radius / CHUNK_SIZE) + 1;
    const gx = Math.floor(x / CHUNK_SIZE);
    const gz = Math.floor(z / CHUNK_SIZE);
    const out: CollisionBox[] = [];
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const c = this.chunks.get(this.key(gx + dx, gz + dz));
        if (!c) continue;
        for (const b of c.buildings) {
          if (Math.abs(b.x - x) < radius + b.hw + b.hd && Math.abs(b.z - z) < radius + b.hw + b.hd) out.push(b);
        }
      }
    }
    return out;
  }

  /** Все здания загруженных чанков, для карты и поиска точек заданий. */
  buildingsNear(x: number, z: number, radius: number): CollisionBox[] {
    return this.collisionsNear(x, z, radius);
  }

  get loadedCount() {
    return this.chunks.size;
  }

  /**
   * Обновление стриминга. Возвращает число загруженных чанков за кадр.
   * budget ограничивает работу, чтобы не морозить кадр на слабых устройствах.
   */
  update(px: number, pz: number, budget = 2): number {
    const gx = Math.floor(px / CHUNK_SIZE);
    const gz = Math.floor(pz / CHUNK_SIZE);

    // Ставим в очередь недостающие чанки, ближние первыми.
    this.queue.length = 0;
    for (let dz = -LOAD_RADIUS; dz <= LOAD_RADIUS; dz++) {
      for (let dx = -LOAD_RADIUS; dx <= LOAD_RADIUS; dx++) {
        const cx = gx + dx;
        const cz = gz + dz;
        if (this.chunks.has(this.key(cx, cz))) continue;
        const d = dx * dx + dz * dz;
        this.queue.push({ cx, cz, dist: d });
      }
    }
    this.queue.sort((a, b) => a.dist - b.dist);

    let created = 0;
    for (const q of this.queue) {
      if (created >= budget) break;
      this.buildChunk(q.cx, q.cz);
      created++;
    }

    // Выгрузка дальних.
    for (const [k, c] of this.chunks) {
      const dx = c.cx - gx;
      const dz = c.cz - gz;
      if (Math.abs(dx) > UNLOAD_RADIUS || Math.abs(dz) > UNLOAD_RADIUS) {
        this.disposeChunk(c);
        this.chunks.delete(k);
      }
    }
    return created;
  }

  /** Синхронная загрузка области (стартовый экран). */
  preload(px: number, pz: number, radius = 2, onProgress?: (done: number, total: number) => void) {
    const gx = Math.floor(px / CHUNK_SIZE);
    const gz = Math.floor(pz / CHUNK_SIZE);
    const list: { cx: number; cz: number; d: number }[] = [];
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        list.push({ cx: gx + dx, cz: gz + dz, d: dx * dx + dz * dz });
      }
    }
    list.sort((a, b) => a.d - b.d);
    let done = 0;
    for (const l of list) {
      this.buildChunk(l.cx, l.cz);
      done++;
      onProgress?.(done, list.length);
    }
  }

  private disposeChunk(c: ChunkData) {
    this.scene.remove(c.group);
    c.group.traverse((o) => {
      const m = o as THREE.Mesh;
      // Геометрии чанков уникальны — освобождаем.
      if (m.isMesh && m.userData.customGeo) m.geometry.dispose();
    });
  }

  private townBuildingsFor(townId: string, t: ReturnType<typeof getSettlement>): Building[] {
    const hit = this.townBuildings.get(townId);
    if (hit) return hit;
    const b = t ? buildingsForSettlement(t) : [];
    this.townBuildings.set(townId, b);
    return b;
  }

  private buildChunk(cx: number, cz: number) {
    const key = this.key(cx, cz);
    if (this.chunks.has(key)) return;

    const group = new THREE.Group();
    group.position.set(0, 0, 0);
    const boxes: CollisionBox[] = [];

    this.buildTerrain(cx, cz, group);
    this.buildRoads(cx, cz, group);
    this.buildBuildingsAndTrees(cx, cz, group, boxes);

    this.scene.add(group);
    this.chunks.set(key, { cx, cz, key, group, buildings: boxes, loadedAt: performance.now() });
  }

  // ---------- Рельеф ----------
  private buildTerrain(cx: number, cz: number, group: THREE.Group) {
    const seg = CHUNK_SEGMENTS;
    const step = CHUNK_SIZE / seg;
    const ox = cx * CHUNK_SIZE;
    const oz = cz * CHUNK_SIZE;

    const positions = new Float32Array((seg + 1) * (seg + 1) * 3);
    const colors = new Float32Array((seg + 1) * (seg + 1) * 3);
    const indices: number[] = [];

    const cGrassA = new THREE.Color(COLORS.grassA);
    const cGrassB = new THREE.Color(COLORS.grassB);
    const cDry = new THREE.Color(COLORS.grassDry);
    const cDirt = new THREE.Color(COLORS.dirt);
    const cRock = new THREE.Color(COLORS.rock);

    let vi = 0;
    for (let iz = 0; iz <= seg; iz++) {
      for (let ix = 0; ix <= seg; ix++) {
        const x = ox + ix * step;
        const z = oz + iz * step;
        const y = heightAt(x, z);
        positions[vi * 3] = x;
        positions[vi * 3 + 1] = y;
        positions[vi * 3 + 2] = z;

        const slope = slopeAt(x, z);
        const n = fbm2(x * 0.02, z * 0.02, 4211, 2);
        const c = cGrassA.clone().lerp(cGrassB, n);
        if (n > 0.62) c.lerp(cDry, (n - 0.62) * 1.6);
        c.lerp(cDirt, clamp(slope * 1.9, 0, 0.85));
        if (slope > 0.6) c.lerp(cRock, (slope - 0.6) * 1.6);
        colors[vi * 3] = c.r;
        colors[vi * 3 + 1] = c.g;
        colors[vi * 3 + 2] = c.b;
        vi++;
      }
    }

    const row = seg + 1;
    for (let iz = 0; iz < seg; iz++) {
      for (let ix = 0; ix < seg; ix++) {
        const a = iz * row + ix;
        const b = a + 1;
        const c = a + row;
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    geo.computeBoundingSphere();

    const mesh = new THREE.Mesh(geo, this.mat.terrain);
    mesh.userData.customGeo = true;
    mesh.receiveShadow = false;
    mesh.matrixAutoUpdate = false;
    group.add(mesh);
  }

  // ---------- Дороги ----------
  private buildRoads(cx: number, cz: number, group: THREE.Group) {
    const minX = cx * CHUNK_SIZE - 30;
    const maxX = (cx + 1) * CHUNK_SIZE + 30;
    const minZ = cz * CHUNK_SIZE - 30;
    const maxZ = (cz + 1) * CHUNK_SIZE + 30;

    const gx = Math.floor((cx * CHUNK_SIZE + CHUNK_SIZE / 2) / MACRO_SIZE);
    const gz = Math.floor((cz * CHUNK_SIZE + CHUNK_SIZE / 2) / MACRO_SIZE);

    const verts: number[] = [];
    const norms: number[] = [];

    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        for (const s of getMacroRoads(gx + dx, gz + dz)) {
          // Грубая отбраковка по bbox чанка.
          if (Math.max(s.ax, s.bx) < minX || Math.min(s.ax, s.bx) > maxX) continue;
          if (Math.max(s.az, s.bz) < minZ || Math.min(s.az, s.bz) > maxZ) continue;

          const dxs = s.bx - s.ax;
          const dzs = s.bz - s.az;
          const len = Math.hypot(dxs, dzs);
          if (len < 0.01) continue;
          const nx = -dzs / len;
          const nz = dxs / len;
          const hw = s.width * 0.5;
          // Поднимаем над рельефом, чтобы не мерцало.
          const lift = 0.16;

          const ax = s.ax + nx * hw;
          const az = s.az + nz * hw;
          const bx = s.ax - nx * hw;
          const bz = s.az - nz * hw;
          const cxp = s.bx + nx * hw;
          const czp = s.bz + nz * hw;
          const dxp = s.bx - nx * hw;
          const dzp = s.bz - nz * hw;

          const y1 = s.ay + lift;
          const y2 = s.by + lift;

          verts.push(ax, y1, az, bx, y1, bz, cxp, y2, czp);
          verts.push(bx, y1, bz, dxp, y2, dzp, cxp, y2, czp);
          for (let i = 0; i < 6; i++) norms.push(0, 1, 0);
        }
      }
    }

    if (verts.length === 0) return;

    // Разметка: узкая полоса по центру дорог (только шоссе).
    const lineVerts: number[] = [];
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        for (const s of getMacroRoads(gx + dx, gz + dz)) {
          if (s.kind !== "highway") continue;
          if (Math.max(s.ax, s.bx) < minX || Math.min(s.ax, s.bx) > maxX) continue;
          if (Math.max(s.az, s.bz) < minZ || Math.min(s.az, s.bz) > maxZ) continue;

          const dxs = s.bx - s.ax;
          const dzs = s.bz - s.az;
          const len = Math.hypot(dxs, dzs);
          if (len < 4) continue;
          const nx = -dzs / len;
          const nz = dxs / len;
          const hw = 0.14;
          const lift = 0.26;
          const dashLen = 4.5;
          const gap = 5.5;
          const ux = dxs / len;
          const uz = dzs / len;
          for (let p = 0; p < len; p += dashLen + gap) {
            const p2 = Math.min(len, p + dashLen);
            const x1 = s.ax + ux * p;
            const z1 = s.az + uz * p;
            const x2 = s.ax + ux * p2;
            const z2 = s.az + uz * p2;
            const yA = s.ay + lift;
            const yB = s.by + lift;
            const y1 = yA + (yB - yA) * (p / len);
            const y2 = yA + (yB - yA) * (p2 / len);
            lineVerts.push(
              x1 + nx * hw, y1, z1 + nz * hw,
              x1 - nx * hw, y1, z1 - nz * hw,
              x2 + nx * hw, y2, z2 + nz * hw
            );
            lineVerts.push(
              x1 - nx * hw, y1, z1 - nz * hw,
              x2 - nx * hw, y2, z2 - nz * hw,
              x2 + nx * hw, y2, z2 + nz * hw
            );
          }
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(norms, 3));
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, this.mat.road);
    mesh.userData.customGeo = true;
    mesh.matrixAutoUpdate = false;
    group.add(mesh);

    if (lineVerts.length) {
      const lgeo = new THREE.BufferGeometry();
      lgeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
      lgeo.computeVertexNormals();
      lgeo.computeBoundingSphere();
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xd8d8d0 });
      const lmesh = new THREE.Mesh(lgeo, lineMat);
      lmesh.userData.customGeo = true;
      lmesh.matrixAutoUpdate = false;
      group.add(lmesh);
    }
  }

  // ---------- Здания и деревья ----------
  private buildBuildingsAndTrees(cx: number, cz: number, group: THREE.Group, boxes: CollisionBox[]) {
    const minX = cx * CHUNK_SIZE;
    const maxX = (cx + 1) * CHUNK_SIZE;
    const minZ = cz * CHUNK_SIZE;
    const maxZ = (cz + 1) * CHUNK_SIZE;

    // Здания: собираем со всех поселений рядом.
    const gx = Math.floor((minX + CHUNK_SIZE / 2) / MACRO_SIZE);
    const gz = Math.floor((minZ + CHUNK_SIZE / 2) / MACRO_SIZE);
    const seen = new Set<string>();

    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        const t = getSettlement(gx + dx, gz + dz);
        if (!t || seen.has(t.id)) continue;
        seen.add(t.id);

        // Быстрый отсев поселений, не пересекающихся с чанком.
        if (t.x + t.radius + 60 < minX || t.x - t.radius - 60 > maxX) continue;
        if (t.z + t.radius + 60 < minZ || t.z - t.radius - 60 > maxZ) continue;

        const list = this.townBuildingsFor(t.id, t);
        for (const b of list) {
          const bw = b.w * 0.5;
          const bd = b.d * 0.5;
          const reach = Math.max(bw, bd) + 4;
          if (b.x + reach < minX || b.x - reach > maxX) continue;
          if (b.z + reach < minZ || b.z - reach > maxZ) continue;

          this.addBuilding(group, b, boxes);
        }

        // Тротуар-площадка у служебных зданий — визуальная метка.
      }
    }

    // Растительность.
    this.addTrees(cx, cz, group, minX, maxX, minZ, maxZ);
  }

  private addBuilding(group: THREE.Group, b: Building, boxes: CollisionBox[]) {
    const y = heightAt(b.x, b.z);
    const bottom = y - 0.4;

    const wallMat = this.mat.wall(b.wall);
    const roofMat = this.mat.roof(b.roof);

    const body = new THREE.Mesh(this.geo.box, wallMat);
    body.scale.set(b.w, b.h, b.d);
    body.position.set(b.x, bottom + b.h / 2, b.z);
    body.rotation.y = -b.rot;
    body.matrixAutoUpdate = false;
    body.updateMatrix();
    group.add(body);

    // Крыша.
    if (b.roofType === 0) {
      const cap = new THREE.Mesh(this.geo.box, roofMat);
      cap.scale.set(b.w + 0.7, 0.45, b.d + 0.7);
      cap.position.set(b.x, bottom + b.h + 0.22, b.z);
      cap.rotation.y = -b.rot;
      cap.matrixAutoUpdate = false;
      cap.updateMatrix();
      group.add(cap);
    } else if (b.roofType === 1) {
      // Двускатная: призма из двух наклонных плоскостей.
      const rh = Math.min(b.w, b.d) * 0.34 + 0.8;
      const halfW = b.w / 2 + 0.5;
      const slopeLen = Math.hypot(halfW, rh);
      const angle = Math.atan2(rh, halfW);
      for (const sgn of [-1, 1]) {
        const plane = new THREE.Mesh(this.geo.box, roofMat);
        plane.scale.set(slopeLen, 0.35, b.d + 1.0);
        const ox = (sgn * halfW) / 2;
        plane.position.set(
          b.x + Math.cos(-b.rot) * ox,
          bottom + b.h + rh / 2,
          b.z + Math.sin(-b.rot) * ox
        );
        plane.rotation.set(0, -b.rot, sgn * angle, "YXZ");
        plane.matrixAutoUpdate = false;
        plane.updateMatrix();
        group.add(plane);
      }
    } else {
      // Шатёр.
      const rh = Math.min(b.w, b.d) * 0.5;
      const cone = new THREE.Mesh(this.geo.cone, roofMat);
      cone.scale.set(b.w * 0.78, rh, b.d * 0.78);
      cone.position.set(b.x, bottom + b.h + rh / 2, b.z);
      cone.rotation.y = -b.rot;
      cone.matrixAutoUpdate = false;
      cone.updateMatrix();
      group.add(cone);
    }

    // Окна: тонкие полосы на фасаде (дёшево — один инстанс на здание).
    if (b.h > 4) {
      const rows = Math.max(1, Math.floor(b.h / 3.4));
      for (let r = 0; r < rows; r++) {
        const win = new THREE.Mesh(this.geo.box, this.mat.window);
        const y0 = bottom + 1.6 + r * 3.2;
        if (y0 > bottom + b.h - 1) break;
        win.scale.set(b.w * 0.82, 1.25, 0.12);
        win.position.set(
          b.x + Math.sin(b.rot) * (b.d / 2 + 0.04),
          y0,
          b.z + Math.cos(b.rot) * (b.d / 2 + 0.04)
        );
        win.rotation.y = -b.rot;
        win.matrixAutoUpdate = false;
        win.updateMatrix();
        group.add(win);
      }
    }

    boxes.push({
      x: b.x, z: b.z,
      hw: b.w / 2, hd: b.d / 2,
      rot: b.rot, h: b.h, kind: b.kind
    });
  }

  private addTrees(cx: number, cz: number, group: THREE.Group, minX: number, maxX: number, minZ: number, maxZ: number) {
    const rng = new Rng(hashInt(cx, cz, 0x77aa));
    const step = 13;
    const trunks: THREE.Matrix4[] = [];
    const leavesA: THREE.Matrix4[] = [];
    const leavesB: THREE.Matrix4[] = [];

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const scl = new THREE.Vector3();
    const pos = new THREE.Vector3();

    for (let z = minZ; z < maxZ; z += step) {
      for (let x = minX; x < maxX; x += step) {
        const jx = x + rng.range(-5, 5);
        const jz = z + rng.range(-5, 5);
        // Плотность леса по шуму.
        const density = fbm2(jx * 0.0035, jz * 0.0035, WORLD_SEED ^ 0x1234, 3);
        const p = density > 0.56 ? 0.82 : density > 0.48 ? 0.34 : 0.055;
        if (!rng.chance(p)) continue;

        // Не сажаем в городах и на дорогах.
        if (townCovering(jx, jz, 6)) continue;
        const slope = slopeAt(jx, jz);
        if (slope > 0.62) continue;

        const y = heightAt(jx, jz);
        const hgt = rng.range(5, 11);
        const bend = rng.range(0.85, 1.15);

        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng.range(0, TAU));

        // Ствол
        pos.set(jx, y + hgt * 0.28, jz);
        scl.set(0.42 * bend, hgt * 0.6, 0.42 * bend);
        m.compose(pos, q, scl);
        trunks.push(m.clone());

        // Крона
        const leafH = hgt * 0.58;
        pos.set(jx, y + hgt * 0.62, jz);
        scl.set(hgt * 0.34 * bend, leafH * 0.5, hgt * 0.34 * bend);
        m.compose(pos, q, scl);
        const bucket = rng.next();
        if (bucket < 0.5) leavesA.push(m.clone());
        else if (bucket < 0.82) leavesB.push(m.clone());
        else leavesA.push(m.clone());
      }
    }

    const addInstanced = (geo: THREE.BufferGeometry, mat: THREE.Material, list: THREE.Matrix4[], isLeaf: boolean) => {
      if (list.length === 0) return;
      const inst = new THREE.InstancedMesh(geo, mat, list.length);
      for (let i = 0; i < list.length; i++) inst.setMatrixAt(i, list[i]);
      inst.instanceMatrix.needsUpdate = true;
      inst.frustumCulled = true;
      inst.userData.customGeo = false;
      inst.matrixAutoUpdate = false;
      group.add(inst);
    };

    const trunkGeo = new THREE.CylinderGeometry(0.5, 0.62, 1, 5);
    addInstanced(trunkGeo, this.mat.trunk, trunks, false);

    const leafGeo = new THREE.ConeGeometry(0.5, 1, 6);
    addInstanced(leafGeo, this.mat.leafA, leavesA, true);
    addInstanced(leafGeo, this.mat.leafB, leavesB, true);
  }
}
