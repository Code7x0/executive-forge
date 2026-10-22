"use client";

import { useRef } from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { motion } from "@/lib/motion/tokens";
import { recognition, recognitionItems } from "@/content/site";
import { cn } from "@/lib/cn";

/** Same treatment as nav brand chip — Archivo Black, red fill, black border */
const recognitionChipClass = cn(
  "inline-flex shrink-0 items-center justify-center",
  "border-2 border-black bg-accent px-[1.15rem] py-[0.55rem]",
  "font-[family-name:var(--font-wordmark-family)] text-[length:var(--text-cta)] font-black uppercase leading-none tracking-[-0.02em] text-ink",
  "rounded-[var(--radius-cta)]",
);

/**
 * Editorial awards wall — numbered serif rows,
 * GSAP stagger on enter. Hover/focus shifts the row and reveals an arrow.
 */
export function RecognitionWall() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      if (!root) return;

      const rows = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-recog-row]"),
      );
      const rules = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-recog-rule]"),
      );

      if (prefersReducedMotion()) {
        gsap.set([...rows, ...rules], { clearProps: "all" });
        gsap.set(rows, { opacity: 1, x: 0, y: 0 });
        gsap.set(rules, { scaleX: 1, transformOrigin: "left center" });
        return;
      }

      gsap.set(rows, { opacity: 0, y: motion.distance.micro });
      gsap.set(rules, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: motion.scroll.start,
          toggleActions: "play none none none",
        },
      });

      tl.to(rows, {
        opacity: 1,
        y: 0,
        duration: motion.duration.enter,
        ease: motion.ease,
        stagger: motion.stagger.tight,
      }).to(
        rules,
        {
          scaleX: 1,
          duration: motion.duration.micro,
          ease: motion.easeSoft,
          stagger: motion.stagger.tight,
        },
        0.05,
      );
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="recognition-wall mt-14 md:mt-16 lg:mt-20">
      <h2 data-reveal="up" className={recognitionChipClass}>
        {recognition.eyebrow}
      </h2>

      <ul className="recognition-wall-list mt-8 md:mt-10" role="list">
        {recognitionItems.map((item, index) => {
          const n = String(index + 1).padStart(2, "0");

          return (
            <li key={item.title} className="recognition-wall-item">
              <div
                data-recog-row
                tabIndex={0}
                className={cn(
                  "recognition-wall-row group",
                  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus",
                )}
              >
                <span className="recognition-wall-num type-label text-ink-soft">
                  {n}
                </span>

                <span className="recognition-wall-title min-w-0">
                  {item.title}
                </span>

                <span
                  className="recognition-wall-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
              <div
                data-recog-rule
                className="recognition-wall-rule"
                aria-hidden="true"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
