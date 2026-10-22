import type { ReactNode } from "react";
import { FilmGrain } from "@/components/effects/film-grain";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionRoot } from "@/components/motion/motion-root";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionRoot>
      <FilmGrain />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </MotionRoot>
  );
}
