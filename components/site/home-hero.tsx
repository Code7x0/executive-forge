"use client";

import { useEffect, useRef } from "react";
import { HeroAtmosphere } from "@/components/site/hero-atmosphere";
import { ProximityText } from "@/components/motion/proximity-text";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/site";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function easeOutQuint(t: number) {
  const x = 1 - Math.min(1, Math.max(0, t));
  return 1 - x * x * x * x * x;
}

/**
 * One blue hero stage. Scroll swaps layers only:
 * EXECUTIVE FORGE → headline / lede / CTAs. Background stays electric blue.
 */
export function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    const stage = stageRef.current;
    const wordmark = wordmarkRef.current;
    const copy = copyRef.current;
    if (!root || !stage || !wordmark || !copy) return;

    const pieces = Array.from(
      copy.querySelectorAll<HTMLElement>("[data-hero-animate]"),
    );

    if (prefersReducedMotion()) {
      root.classList.add("hero-scroll--static");
      root.dataset.heroMode = "reduced";
      gsap.set(wordmark, { opacity: 0, visibility: "hidden" });
      gsap.set(pieces, { opacity: 1, y: 0, scale: 1, filter: "none" });
      copy.style.pointerEvents = "auto";
      return;
    }

    root.classList.remove("hero-scroll--static");
    root.dataset.heroMode = "cinematic";

    gsap.set(wordmark, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      force3D: true,
      visibility: "visible",
      transformOrigin: "50% 50%",
    });
    gsap.set(pieces, {
      opacity: 0,
      y: 72,
      scale: 0.96,
      filter: "blur(12px)",
      force3D: true,
      transformOrigin: "0% 50%",
    });
    copy.style.pointerEvents = "none";
    wordmark.style.pointerEvents = "auto";

    let last = -1;

    const applyProgress = (progress: number) => {
      const p = Math.min(1, Math.max(0, progress));
      if (Math.abs(p - last) < 0.0006) return;
      last = p;
      root.dataset.heroProgress = p.toFixed(3);

      /* Wordmark lifts out — blue stage stays */
      const markT = easeOutQuint(smoothstep(0, 0.55, p));
      gsap.set(wordmark, {
        y: -Math.round(window.innerHeight * 0.32 * markT),
        opacity: 1 - markT,
        scale: 1 + 0.08 * markT,
        filter: `blur(${(14 * markT).toFixed(2)}px)`,
      });

      /* Message enters on the same blue */
      const copyGate = easeOutQuint(smoothstep(0.18, 0.92, p));
      pieces.forEach((el, i) => {
        const local = smoothstep(0, 1, copyGate - i * 0.1);
        const eased = easeOutQuint(local);
        gsap.set(el, {
          opacity: eased,
          y: 72 * (1 - eased),
          scale: 0.96 + 0.04 * eased,
          filter: `blur(${(12 * (1 - eased)).toFixed(2)}px)`,
        });
      });

      copy.style.pointerEvents = copyGate > 0.55 ? "auto" : "none";
      wordmark.style.pointerEvents = markT > 0.65 ? "none" : "auto";
    };

    const readProgress = () => {
      const total = root.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = Math.min(
        Math.max(-root.getBoundingClientRect().top, 0),
        total,
      );
      return scrolled / total;
    };

    let raf = 0;
    let alive = true;
    const loop = () => {
      if (!alive) return;
      applyProgress(readProgress());
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const st = ScrollTrigger.create({
      trigger: root,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
      id: "hero-reveal",
      onUpdate: () => applyProgress(readProgress()),
      onRefresh: () => {
        last = -1;
        applyProgress(readProgress());
      },
    });

    const onResize = () => {
      last = -1;
      ScrollTrigger.refresh();
      applyProgress(readProgress());
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      st.kill();
      gsap.set([wordmark, ...pieces], {
        clearProps: "transform,opacity,visibility,filter",
      });
    };
  }, []);

  return (
    <section
      ref={rootRef}
      data-motion-hero
      className="hero-scroll relative w-full"
      aria-label="Introduction"
    >
      <div ref={stageRef} className="hero-scroll-stage hero-blue relative w-full">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <HeroAtmosphere />
        </div>

        <div
          ref={wordmarkRef}
          className="hero-scroll-mark absolute inset-0 z-[2] flex items-center justify-center overflow-visible px-[var(--gutter)] pt-[var(--header-h)] will-change-transform"
        >
          <p
            className="hero-heist-mark w-full max-w-full select-text text-center"
            aria-label="Executive Forge"
          >
            <ProximityText
              text="EXECUTIVE"
              className="hero-heist-line"
              strength={16}
              radius={100}
            />
            <ProximityText
              text="FORGE"
              className="hero-heist-line"
              strength={16}
              radius={100}
            />
          </p>
        </div>

        <div
          ref={copyRef}
          className="hero-scroll-copy absolute inset-0 z-[3] flex w-full flex-col justify-center px-[var(--gutter)] pb-16 pt-[calc(var(--header-h)+1.5rem)] md:pb-20"
        >
          <div className="hero-scroll-copy-inner">
            <h1
              data-hero-animate
              className="hero-headline w-full max-w-[28ch] text-[color:var(--hero-ivory)] [text-wrap:balance] md:max-w-[24ch] lg:max-w-[22ch]"
            >
              {hero.headline}
            </h1>
            <p
              data-hero-animate
              className="hero-lede mt-7 w-full max-w-[62ch] text-[color:var(--hero-ivory)]/92 md:mt-9 md:max-w-[68ch]"
            >
              {hero.subheadline}
            </p>
            <div
              data-hero-animate
              className="mt-12 flex flex-wrap items-center gap-4 md:mt-14 md:gap-5"
            >
              <Button
                href={hero.primary.href}
                size="lg"
                className="hero-cta motion-snappy-cta"
              >
                {hero.primary.label}
              </Button>
              <Button
                href={hero.secondary.href}
                size="lg"
                className="hero-cta hero-cta--ink motion-snappy-cta"
              >
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
