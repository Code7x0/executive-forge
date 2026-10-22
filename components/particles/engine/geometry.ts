import { Vector3 } from "three";

/**
 * Organic hollow-loop ribbon: braided strands around a flattened torus,
 * with a clear central void and dissolving lateral edges.
 */

const _t = new Vector3();
const _n = new Vector3();
const _b = new Vector3();

function hash(i: number, salt = 0) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Flattened torus centreline (hollow loop). */
function torusPoint(u: number, R: number, out: Vector3) {
  // Slight oval + vertical squash → horizontal sculpture read
  const rx = R * (1 + 0.08 * Math.cos(2 * u));
  out.x = rx * Math.cos(u);
  out.y = rx * Math.sin(u) * 0.38;
  out.z = 0;
  return out;
}

function frameAt(u: number, R: number) {
  const eps = 0.0025;
  const a = new Vector3();
  const b = new Vector3();
  torusPoint(u, R, a);
  torusPoint(u + eps, R, b);
  _t.copy(b).sub(a).normalize();
  const up = Math.abs(_t.y) > 0.92 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0);
  _n.copy(up).cross(_t).normalize();
  _b.copy(_t).cross(_n).normalize();
  return { origin: a, tangent: _t.clone(), normal: _n.clone(), binormal: _b.clone() };
}

export type RibbonBuffers = {
  positions: Float32Array;
  seeds: Float32Array;
  sizes: Float32Array;
  tones: Float32Array;
  count: number;
};

export function buildRibbonParticles(opts: {
  strandCount: number;
  strandSamples: number;
  beadCount: number;
  hazeCount: number;
}): RibbonBuffers {
  const { strandCount, strandSamples, beadCount, hazeCount } = opts;
  const count = strandCount * strandSamples + beadCount + hazeCount;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  const sizes = new Float32Array(count);
  const tones = new Float32Array(count);

  let i = 0;
  const R = 1.65;
  const tube = 0.48;

  for (let s = 0; s < strandCount; s++) {
    const strandPhase = (s / strandCount) * Math.PI * 2;
    const braidSpeed = 2.15 + (s % 4) * 0.17;
    const radiusScale = 0.72 + hash(s, 1) * 0.5;
    for (let k = 0; k < strandSamples; k++) {
      const u = (k / strandSamples) * Math.PI * 2;
      const { origin, normal, binormal, tangent } = frameAt(u, R);

      // Two families of intertwine create the twisted ribbon volume
      const twist = u * braidSpeed + strandPhase;
      const tubeR =
        tube *
        (0.55 + 0.2 * Math.sin(u * 3 + strandPhase) + 0.12 * (s % 5) * 0.08);
      const rad = tubeR * radiusScale;

      const ox =
        Math.cos(twist) * rad * normal.x + Math.sin(twist) * rad * binormal.x;
      const oy =
        Math.cos(twist) * rad * normal.y + Math.sin(twist) * rad * binormal.y;
      const oz =
        Math.cos(twist) * rad * normal.z +
        Math.sin(twist) * rad * binormal.z +
        Math.sin(twist * 0.5) * 0.08;

      // Lateral dissolve: push some samples outward near left/right extremities
      const side = Math.abs(Math.cos(u));
      const dissolve = side > 0.82 ? (side - 0.82) * 1.4 : 0;

      const j = (hash(s * 1000 + k, 2) - 0.5) * 0.02;
      positions[i * 3] =
        origin.x + ox + j * normal.x + dissolve * tangent.x * 0.35;
      positions[i * 3 + 1] = origin.y + oy + j * normal.y;
      positions[i * 3 + 2] =
        origin.z + oz + j * binormal.z + dissolve * (hash(k, 3) - 0.5) * 0.5;
      seeds[i] = hash(s * 997 + k, 4);
      sizes[i] = 0.85 + hash(s + k, 5) * 1.15;
      tones[i] = hash(s * 13 + k, 6);
      i++;
    }
  }

  for (let b = 0; b < beadCount; b++) {
    const u = hash(b, 7) * Math.PI * 2;
    const { origin, normal, binormal } = frameAt(u, R);
    const twist = u * 2.3 + hash(b, 8) * Math.PI * 2;
    const rad = tube * (0.35 + hash(b, 9) * 0.55);
    positions[i * 3] =
      origin.x + Math.cos(twist) * rad * normal.x + Math.sin(twist) * rad * binormal.x;
    positions[i * 3 + 1] =
      origin.y +
      Math.cos(twist) * rad * normal.y +
      Math.sin(twist) * rad * binormal.y;
    positions[i * 3 + 2] =
      origin.z +
      Math.cos(twist) * rad * normal.z +
      Math.sin(twist) * rad * binormal.z;
    seeds[i] = hash(b, 10);
    sizes[i] = 1.7 + hash(b, 11) * 3.4;
    tones[i] = 0.4 + hash(b, 12) * 0.55;
    i++;
  }

  for (let h = 0; h < hazeCount; h++) {
    const u = hash(h, 13) * Math.PI * 2;
    const { origin, normal, binormal, tangent } = frameAt(u, R);
    const spread = 0.35 + hash(h, 14) * 1.05;
    const ang = hash(h, 15) * Math.PI * 2;
    // Bias haze toward extremities for soft dispersed edge
    const edge = Math.pow(Math.abs(Math.cos(u)), 1.5);
    const amp = spread * (0.45 + edge * 0.9);
    positions[i * 3] =
      origin.x +
      (Math.cos(ang) * normal.x + Math.sin(ang) * binormal.x) * amp +
      tangent.x * (hash(h, 16) - 0.5) * 0.35;
    positions[i * 3 + 1] =
      origin.y +
      (Math.cos(ang) * normal.y + Math.sin(ang) * binormal.y) * amp * 0.65;
    positions[i * 3 + 2] =
      origin.z +
      (Math.cos(ang) * normal.z + Math.sin(ang) * binormal.z) * amp;
    seeds[i] = hash(h, 17);
    sizes[i] = 0.4 + hash(h, 18) * 0.95;
    tones[i] = hash(h, 19) * 0.5;
    i++;
  }

  return { positions, seeds, sizes, tones, count };
}
