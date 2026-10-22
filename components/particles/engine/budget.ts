export type ParticleBudget = {
  strandCount: number;
  strandSamples: number;
  beadCount: number;
  hazeCount: number;
  total: number;
  dprCap: number;
};

/**
 * Rendering cost budgets by viewport.
 * Mobile is intentionally lean — shape stays readable, frames stay stable.
 */
export function resolveBudget(
  width: number,
  reducedMotion: boolean,
): ParticleBudget {
  const mobile = width < 768;
  const tablet = width < 1024;

  if (reducedMotion) {
    return {
      strandCount: mobile ? 6 : 10,
      strandSamples: mobile ? 80 : 120,
      beadCount: mobile ? 80 : 160,
      hazeCount: mobile ? 100 : 200,
      total: 0,
      dprCap: 1,
    };
  }

  if (mobile) {
    return {
      strandCount: 8,
      strandSamples: 140,
      beadCount: 220,
      hazeCount: 280,
      total: 0,
      dprCap: 1,
    };
  }

  if (tablet) {
    return {
      strandCount: 12,
      strandSamples: 200,
      beadCount: 480,
      hazeCount: 640,
      total: 0,
      dprCap: 1.25,
    };
  }

  return {
    strandCount: 18,
    strandSamples: 280,
    beadCount: 900,
    hazeCount: 1200,
    total: 0,
    dprCap: 1.5,
  };
}

export function finalizeBudget(b: ParticleBudget): ParticleBudget {
  const total = b.strandCount * b.strandSamples + b.beadCount + b.hazeCount;
  return { ...b, total };
}
