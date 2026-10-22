"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { cn } from "@/lib/cn";

type CaseStudyStackProps = {
  children: ReactNode;
  /** Remount key when the visible study list changes (filters). */
  sequenceKey: string;
  className?: string;
};

function headerOffsetPx(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-h")
    .trim();
  if (!raw) return 0;
  const probe = document.createElement("div");
  probe.style.cssText = `position:absolute;visibility:hidden;pointer-events:none;height:${raw}`;
  document.body.appendChild(probe);
  const h = probe.offsetHeight;
  probe.remove();
  return h;
}

/** Unwrap leftover .pin-spacer nodes from a prior killed trigger. */
function unwrapOrphanPinSpacers(root: HTMLElement) {
  root.querySelectorAll(".pin-spacer").forEach((spacer) => {
    const parent = spacer.parentNode;
    if (!parent) return;
    while (spacer.firstChild) {
      parent.insertBefore(spacer.firstChild, spacer);
    }
    spacer.remove();
  });
}

/**
 * Prefer transform pins with Lenis / touch — fixed pins fight smooth scroll
 * and mobile browser chrome resize.
 */
function resolvePinType(): "fixed" | "transform" {
  const touch =
    window.matchMedia("(hover: none), (pointer: coarse)").matches ||
    "ontouchstart" in window;
  const hasLenis = Boolean(
    (window as unknown as { __lenis?: unknown }).__lenis,
  );
  return touch || hasLenis ? "transform" : "fixed";
}

/**
 * Two-phase case stack (all viewports; skipped only for reduced-motion):
 *
 * Phase A — Natural document scroll through the full editorial section
 *           (content-driven height; nothing sticky/fixed while reading).
 * Phase B — After the section bottom reaches the viewport bottom, pin and
 *           let the next full-size section scroll over (pinSpacing: false).
 *           Opacity is scrubbed only in this transition zone.
 */
export function CaseStudyStack({
  children,
  sequenceKey,
  className,
}: CaseStudyStackProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root) return;

    let triggers: ScrollTrigger[] = [];
    let refreshTimer = 0;

    const teardown = () => {
      triggers.forEach((t) => t.kill(true));
      triggers = [];
      unwrapOrphanPinSpacers(root);
      root.querySelectorAll<HTMLElement>("[data-case-panel]").forEach((panel) => {
        gsap.set(panel, { clearProps: "opacity,zIndex,transform" });
      });
    };

    const setup = () => {
      teardown();
      if (prefersReducedMotion()) return;

      const panels = gsap.utils.toArray<HTMLElement>(
        "[data-case-panel]",
        root,
      );
      if (panels.length < 2) return;

      const pinType = resolvePinType();

      panels.forEach((panel, i) => {
        gsap.set(panel, { zIndex: i + 1 });
        if (i === panels.length - 1) return;

        const next = panels[i + 1];

        const st = ScrollTrigger.create({
          trigger: panel,
          /**
           * Phase A complete when this panel's bottom meets the viewport
           * bottom — the full editorial height has been scrolled through.
           */
          start: "bottom bottom",
          endTrigger: next,
          end: () => `top ${headerOffsetPx()}px`,
          pin: true,
          pinSpacing: false,
          pinType,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.set(panel, { opacity: 1 - p * 0.55 });
            gsap.set(next, { opacity: 0.65 + p * 0.35 });
          },
          onLeave: () => {
            gsap.set(panel, { clearProps: "opacity" });
            gsap.set(next, { clearProps: "opacity" });
          },
          onLeaveBack: () => {
            gsap.set(panel, { clearProps: "opacity" });
            gsap.set(next, { clearProps: "opacity" });
          },
          onRefresh: (self) => {
            // Keep panels readable if a refresh lands mid-transition
            if (self.progress === 0 || self.progress === 1) {
              gsap.set(panel, { clearProps: "opacity" });
              gsap.set(next, { clearProps: "opacity" });
            }
          },
        });
        triggers.push(st);
      });

      ScrollTrigger.refresh();
    };

    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => {
        if (triggers.length) ScrollTrigger.refresh();
      }, 120);
    };

    setup();

    root.querySelectorAll("img").forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", scheduleRefresh, { once: true });
      }
    });
    void document.fonts?.ready.then(scheduleRefresh);

    const onResize = () => {
      // Rebuild so pinType / header offset track orientation & breakpoint
      setup();
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    const onHash = () => {
      window.setTimeout(() => ScrollTrigger.refresh(), 400);
    };
    window.addEventListener("hashchange", onHash);

    // Lenis may mount after this effect — refresh once it appears
    const lenisProbe = window.setInterval(() => {
      if ((window as unknown as { __lenis?: unknown }).__lenis) {
        window.clearInterval(lenisProbe);
        scheduleRefresh();
      }
    }, 200);
    window.setTimeout(() => window.clearInterval(lenisProbe), 4000);

    return () => {
      window.clearTimeout(refreshTimer);
      window.clearInterval(lenisProbe);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.removeEventListener("hashchange", onHash);
      teardown();
    };
  }, [sequenceKey]);

  return (
    <div
      ref={rootRef}
      data-case-stack
      className={cn("case-stack", className)}
    >
      {children}
    </div>
  );
}
