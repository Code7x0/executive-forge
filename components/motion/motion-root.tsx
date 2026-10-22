"use client";

import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { ScrollReveals } from "@/components/motion/scroll-reveals";

/** Site-wide motion orchestration. One Lenis instance; one reveal pass per route. */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <ScrollReveals />
      {children}
    </>
  );
}
