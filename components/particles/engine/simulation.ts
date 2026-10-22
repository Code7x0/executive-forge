import type { PointerState } from "@/components/particles/engine/pointer";

/**
 * CPU particle offsets with spring return + damped inertia.
 * Mutates `offsets` and `velocities` in place — no allocations.
 */
export function stepSimulation(
  base: Float32Array,
  offsets: Float32Array,
  velocities: Float32Array,
  count: number,
  pointer: PointerState,
  dt: number,
  reducedMotion: boolean,
  forceScale = 1,
) {
  const safeDt = Math.min(dt, 0.033);
  const radius = 0.9;
  const radiusSq = radius * radius;
  const push =
    pointer.strength * (reducedMotion ? 0.15 : 0.55) * forceScale;
  const px = pointer.world.x;
  const py = pointer.world.y;
  const pz = pointer.world.z;

  const spring = 6.5;
  const damp = 0.86;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const bx = base[i3]!;
    const by = base[i3 + 1]!;
    const bz = base[i3 + 2]!;

    let ox = offsets[i3]!;
    let oy = offsets[i3 + 1]!;
    let oz = offsets[i3 + 2]!;

    let vx = velocities[i3]!;
    let vy = velocities[i3 + 1]!;
    let vz = velocities[i3 + 2]!;

    if (push > 0.001) {
      const cx = bx + ox;
      const cy = by + oy;
      const cz = bz + oz;
      const dx = cx - px;
      const dy = cy - py;
      const dz = cz - pz;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < radiusSq && d2 > 1e-6) {
        const d = Math.sqrt(d2);
        const fall = 1 - d / radius;
        const f = fall * fall * push;
        const inv = f / d;
        // Radial push + mild swirl (cross with up)
        const sx = dy * 0.35;
        const sy = -dx * 0.35;
        vx += dx * inv + sx * inv * 0.5;
        vy += dy * inv + sy * inv * 0.5;
        vz += dz * inv;
      }
    }

    // Spring toward rest offset 0
    vx += -ox * spring * safeDt;
    vy += -oy * spring * safeDt;
    vz += -oz * spring * safeDt;

    vx *= damp;
    vy *= damp;
    vz *= damp;

    ox += vx * safeDt;
    oy += vy * safeDt;
    oz += vz * safeDt;

    // Soft clamp runaway
    const mag2 = ox * ox + oy * oy + oz * oz;
    if (mag2 > 0.85) {
      const s = 0.92 / Math.sqrt(mag2);
      ox *= s;
      oy *= s;
      oz *= s;
      vx *= 0.5;
      vy *= 0.5;
      vz *= 0.5;
    }

    offsets[i3] = ox;
    offsets[i3 + 1] = oy;
    offsets[i3 + 2] = oz;
    velocities[i3] = vx;
    velocities[i3 + 1] = vy;
    velocities[i3 + 2] = vz;
  }
}

/** Write aBase + offset into the render position buffer. */
export function composePositions(
  base: Float32Array,
  offsets: Float32Array,
  out: Float32Array,
  count: number,
) {
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    out[i3] = base[i3]! + offsets[i3]!;
    out[i3 + 1] = base[i3 + 1]! + offsets[i3 + 1]!;
    out[i3 + 2] = base[i3 + 2]! + offsets[i3 + 2]!;
  }
}
