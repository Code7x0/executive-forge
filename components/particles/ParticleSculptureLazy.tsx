"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import { ParticleFallback } from "@/components/particles/ParticleFallback";

type Props = ComponentProps<
  typeof import("@/components/particles/ParticleSculpture").ParticleSculpture
>;

/**
 * Code-splits Three.js + particle engine out of the initial route bundle.
 * SSR disabled — WebGL is client-only; fallback paints immediately.
 */
export const ParticleSculptureLazy = dynamic(
  () =>
    import("@/components/particles/ParticleSculpture").then(
      (m) => m.ParticleSculpture,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-full w-full" aria-hidden>
        <ParticleFallback />
      </div>
    ),
  },
);

export type { Props as ParticleSculptureLazyProps };
