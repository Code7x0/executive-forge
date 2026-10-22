"use client";

import Link from "next/link";
import { ParticleSculpture } from "@/components/particles/ParticleSculpture";

export function ParticleDemo() {
  return (
    <div className="relative min-h-[calc(100svh-3.25rem)] w-full overflow-hidden bg-[#141210]">
      <div className="pointer-events-none absolute inset-x-0 top-8 z-10 mx-auto max-w-3xl px-5 text-center">
        <p className="type-label text-cream/45">
          Standalone · Forma silhouette only
        </p>
        <h1 className="type-h3 mt-3 text-cream">Particle sculpture lab</h1>
        <p className="type-body mt-3 text-cream/55">
          Move the pointer across the canvas. Expect local fluid displacement —
          not whole-object spin alone. Reduced-motion and non-WebGL use a static
          fallback.
        </p>
      </div>

      <div className="absolute inset-0 z-0">
        <ParticleSculpture className="h-full w-full" interactive />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center pb-8">
        <Link
          href="/"
          className="pointer-events-auto type-label border border-cream/25 px-4 py-2 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
        >
          Back to site (link above canvas)
        </Link>
      </div>
    </div>
  );
}
