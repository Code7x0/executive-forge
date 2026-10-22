"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { motion } from "@/lib/motion/tokens";
import { cn } from "@/lib/cn";

export type DwyWeek = {
  title: string;
  intro: string;
  items: readonly string[];
};

type DwyJourneyProps = {
  weeks: readonly DwyWeek[];
  className?: string;
};

/**
 * Done-With-You journey — staircase cards + alternating hand-drawn connectors.
 * Composition first; gradient/hover support it. GSAP owns entrance only.
 */
export function DwyJourney({ weeks, className }: DwyJourneyProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const svg = svgRef.current;
    if (!track || !svg) return;

    const layoutArrows = () => {
      const tr = track.getBoundingClientRect();
      const w = Math.max(Math.round(tr.width), 1);
      const h = Math.max(Math.round(tr.height), 1);
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.setAttribute("width", String(w));
      svg.setAttribute("height", String(h));

      const mobile = window.matchMedia("(max-width: 1023px)").matches;

      weeks.slice(0, -1).forEach((_, i) => {
        const path = pathRefs.current[i];
        const a = cardRefs.current[i];
        const b = cardRefs.current[i + 1];
        if (!path || !a || !b) return;

        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();

        let x1: number;
        let y1: number;
        let x2: number;
        let y2: number;
        let c1x: number;
        let c1y: number;
        let c2x: number;
        let c2y: number;

        if (mobile) {
          x1 = ra.left + ra.width * 0.5 - tr.left;
          y1 = ra.bottom - tr.top + 8;
          x2 = rb.left + rb.width * 0.5 - tr.left;
          y2 = rb.top - tr.top - 8;
          const midY = (y1 + y2) / 2;
          c1x = x1 + 28 + (i % 2 === 0 ? 10 : -6);
          c1y = midY - 4;
          c2x = x2 - 28 + (i % 2 === 0 ? -8 : 12);
          c2y = midY + 4;
        } else {
          const gap = Math.max(rb.left - ra.right, 24);
          const midX = (ra.right + rb.left) / 2 - tr.left;
          // Keep endpoints in the gap — never inside either card
          const pad = 10;
          const archOver = i % 2 === 0;

          if (archOver) {
            x1 = ra.right - tr.left + pad;
            y1 = ra.top - tr.top - 4;
            x2 = rb.left - tr.left - pad;
            y2 = rb.top - tr.top - 4;
            const lift = Math.max(64, gap * 0.9 + 36);
            c1x = midX - gap * 0.12;
            c1y = Math.min(y1, y2) - lift;
            c2x = midX + gap * 0.14;
            c2y = Math.min(y1, y2) - lift * 0.75;
          } else {
            x1 = ra.right - tr.left + pad;
            y1 = ra.bottom - tr.top + 4;
            x2 = rb.left - tr.left - pad;
            y2 = rb.bottom - tr.top + 4;
            const drop = Math.max(64, gap * 0.9 + 36);
            c1x = midX - gap * 0.1;
            c1y = Math.max(y1, y2) + drop * 0.72;
            c2x = midX + gap * 0.14;
            c2y = Math.max(y1, y2) + drop;
          }
        }

        path.setAttribute(
          "d",
          `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`,
        );

        const len = path.getTotalLength();
        path.style.strokeDasharray = String(len);
        if (path.dataset.drawn === "1") {
          path.style.strokeDashoffset = "0";
        } else if (!path.dataset.animating) {
          path.style.strokeDashoffset = String(len);
        }
      });
    };

    layoutArrows();
    const ro = new ResizeObserver(() => layoutArrows());
    ro.observe(track);
    const mq = window.matchMedia("(max-width: 1023px)");
    mq.addEventListener("change", layoutArrows);
    window.addEventListener("resize", layoutArrows);
    requestAnimationFrame(() => layoutArrows());

    registerGsap();
    let st: ScrollTrigger | undefined;
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];

      const revealStatic = () => {
        gsap.set(cards, { opacity: 1, y: 0, clearProps: "transform" });
        paths.forEach((p) => {
          p.style.strokeDashoffset = "0";
          p.dataset.drawn = "1";
        });
        rootRef.current?.setAttribute("data-dwy-ready", "1");
      };

      if (prefersReducedMotion()) {
        revealStatic();
        return;
      }

      gsap.set(cards, { opacity: 0, y: motion.distance.text });
      layoutArrows();
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          rootRef.current?.setAttribute("data-dwy-ready", "1");
          paths.forEach((p) => {
            p.dataset.drawn = "1";
            delete p.dataset.animating;
          });
        },
      });

      tl.to(cards, {
        opacity: 1,
        y: 0,
        duration: motion.duration.enter,
        ease: motion.ease,
        stagger: motion.stagger.loose,
      }).to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 0.95,
          ease: motion.easeSoft,
          stagger: 0.16,
          onStart() {
            paths.forEach((p) => {
              p.dataset.animating = "1";
            });
          },
        },
        "-=0.55",
      );

      st = ScrollTrigger.create({
        trigger: rootRef.current,
        start: motion.scroll.start,
        once: true,
        onEnter: () => {
          layoutArrows();
          tl.play();
        },
      });

      // Hash / Lenis / late layout: if already in view, play immediately
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        layoutArrows();
        const el = rootRef.current;
        if (!el || tl.progress() > 0) return;
        const rect = el.getBoundingClientRect();
        const inView =
          rect.top < window.innerHeight * 0.92 && rect.bottom > 80;
        if (inView || (st && st.isActive)) {
          tl.play();
        }
      });

      // Hard fallback — never leave cards invisible
      window.setTimeout(() => {
        if (rootRef.current?.getAttribute("data-dwy-ready") === "1") return;
        if (tl.progress() === 0) revealStatic();
      }, 1800);
    }, rootRef);

    return () => {
      ro.disconnect();
      mq.removeEventListener("change", layoutArrows);
      window.removeEventListener("resize", layoutArrows);
      st?.kill();
      ctx.revert();
    };
  }, [weeks]);

  return (
    <div
      ref={rootRef}
      className={cn("dwy-journey", className)}
      data-dwy-journey
    >
      <div ref={trackRef} className="dwy-journey__track">
        <svg ref={svgRef} className="dwy-journey__arrows" aria-hidden>
          <defs>
            <marker
              id="dwy-arrowhead"
              markerWidth="7"
              markerHeight="7"
              refX="6.2"
              refY="3.5"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path
                d="M0.5,0.5 L6.5,3.5 L0.5,6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dwy-journey__arrowhead"
              />
            </marker>
          </defs>
          {weeks.slice(0, -1).map((_, i) => (
            <path
              key={`arrow-${i}`}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              className={cn(
                "dwy-journey__path",
                i % 2 === 0
                  ? "dwy-journey__path--over"
                  : "dwy-journey__path--under",
                active !== null &&
                  (active === i || active === i + 1) &&
                  "dwy-journey__path--lit",
              )}
              fill="none"
              markerEnd="url(#dwy-arrowhead)"
            />
          ))}
        </svg>

        <ol className="dwy-journey__grid">
          {weeks.map((week, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <li
                key={week.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={cn(
                  "dwy-journey__card",
                  `dwy-journey__card--${i + 1}`,
                  active === i && "dwy-journey__card--active",
                )}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <article className="dwy-journey__surface">
                  <span className="dwy-journey__step" aria-hidden>
                    {n}
                  </span>
                  <div className="dwy-journey__body">
                    <h3 className="dwy-journey__title">{week.title}</h3>
                    {week.intro ? (
                      <p className="dwy-journey__intro">{week.intro}</p>
                    ) : null}
                    <ul className="dwy-journey__items">
                      {week.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
