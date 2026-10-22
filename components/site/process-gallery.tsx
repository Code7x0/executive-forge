"use client";

import { useEffect, useRef } from "react";
import { processHeadline, processSteps } from "@/content/site";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { motion } from "@/lib/motion/tokens";
import { cn } from "@/lib/cn";

type ProcessGalleryProps = {
  className?: string;
};

/**
 * Our Process — editorial cream panels on a cinematic amber field.
 * Per-card ScrollTrigger with reversible enter/leave (both scroll directions).
 * Lenis sync is owned globally by SmoothScroll → ScrollTrigger.update().
 */
export function ProcessGallery({ className }: ProcessGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    registerGsap();

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      const headline = headlineRef.current;

      if (prefersReducedMotion()) {
        gsap.set([headline, ...cards].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "transform",
        });
        return;
      }

      if (headline) {
        gsap.fromTo(
          headline,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.enter,
            ease: motion.ease,
            scrollTrigger: {
              trigger: headline,
              start: "top 90%",
              end: "bottom 8%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }

      cards.forEach((card, i) => {
        // Slight start stagger so cards don't all flip at once in a band
        const startPct = 88 - Math.min(i * 1.25, 7);

        gsap.fromTo(
          card,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            ease: motion.ease,
            scrollTrigger: {
              trigger: card,
              start: `top ${startPct}%`,
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn("process-gallery", className)}
      data-process-gallery
    >
      <header className="process-gallery__intro max-lg:max-w-full sm:max-lg:max-w-[40rem]">
        <p className="process-gallery__label">Our process</p>
        <h2 ref={headlineRef} className="process-gallery__headline">
          {processHeadline}
        </h2>
      </header>

      <ol
        className={cn(
          "process-gallery__grid",
          "max-sm:mx-auto max-sm:max-w-[28rem] max-sm:gap-[1.1rem]",
          "sm:max-lg:grid sm:max-lg:grid-cols-2 sm:max-lg:gap-x-5 sm:max-lg:gap-y-[1.15rem]",
        )}
      >
        {processSteps.map((step, i) => {
          const n = String(i + 1).padStart(2, "0");
          const staggered = i % 2 === 1;
          return (
            <li
              key={step.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={cn(
                "process-gallery__card",
                `process-gallery__card--${i + 1}`,
                staggered && "sm:max-lg:mt-7",
              )}
            >
              <article
                className={cn(
                  "process-gallery__surface",
                  "max-sm:min-h-0 sm:max-lg:min-h-[13.5rem]",
                )}
                tabIndex={0}
              >
                <span className="process-gallery__step" aria-hidden>
                  {n}
                </span>
                <h3 className="process-gallery__title">{step.title}</h3>
                <p className="process-gallery__body">{step.body}</p>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
