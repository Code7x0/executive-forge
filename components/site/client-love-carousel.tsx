"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { clientLove, writtenTestimonials } from "@/content/site";
import type { Testimonial } from "@/content/types";
import { cn } from "@/lib/cn";

const EXCERPT_LEN = 148;
const SPEED_PX_PER_SEC = 58;
const DRAG_THRESHOLD = 8;
const STEP_RATIO = 0.7;

function excerpt(quote: string, max = EXCERPT_LEN) {
  if (quote.length <= max) return quote;
  const slice = quote.slice(0, max);
  const at = slice.lastIndexOf(" ");
  return `${(at > 90 ? slice.slice(0, at) : slice).trimEnd()}…`;
}

function cardWidthClass(index: number) {
  const pattern = [
    "w-[min(78vw,22rem)] md:w-[24rem] lg:w-[26rem]",
    "w-[min(82vw,24rem)] md:w-[27rem] lg:w-[30rem]",
    "w-[min(76vw,21rem)] md:w-[23rem] lg:w-[25rem]",
    "w-[min(84vw,25rem)] md:w-[28rem] lg:w-[31rem]",
  ];
  return pattern[index % pattern.length];
}

/**
 * Heist-inspired horizontal testimonial marquee.
 * Transform-only GSAP loop; pause on hover/focus/modal/offscreen/reduced-motion.
 */
export function ClientLoveCarousel() {
  const rootRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const setWidthRef = useRef(0);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    origin: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);

  const [open, setOpen] = useState<{
    item: Testimonial;
    index: number;
  } | null>(null);
  const [paused, setPaused] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const labelId = useId();

  const items = writtenTestimonials;

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const syncPause = useCallback(() => {
    const tween = tweenRef.current;
    if (!tween || prefersReducedMotion() || isMobile()) {
      tween?.pause();
      return;
    }
    const rect = rootRef.current?.getBoundingClientRect();
    const inView = !rect
      ? true
      : rect.bottom > 64 && rect.top < window.innerHeight - 48;
    const run =
      !paused &&
      !open &&
      !document.hidden &&
      inView &&
      !dragRef.current?.active;
    if (run) tween.play();
    else tween.pause();
  }, [open, paused]);

  const measureAndLoop = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    tweenRef.current?.kill();
    tweenRef.current = null;

    const firstSet = track.querySelector<HTMLElement>("[data-marquee-set='0']");
    const setWidth = firstSet?.offsetWidth ?? 0;
    setWidthRef.current = setWidth;
    if (setWidth <= 0) return;

    if (prefersReducedMotion() || isMobile()) {
      /* Static / drag-only on reduced-motion and mobile */
      const currentX = Number(gsap.getProperty(track, "x")) || 0;
      const wrapped = ((currentX % -setWidth) + -setWidth) % -setWidth;
      gsap.set(track, { x: wrapped });
      return;
    }

    const currentX = Number(gsap.getProperty(track, "x")) || 0;
    const wrapped = ((currentX % -setWidth) + -setWidth) % -setWidth;
    gsap.set(track, { x: wrapped });

    const duration = setWidth / SPEED_PX_PER_SEC;
    const tween = gsap.fromTo(
      track,
      { x: wrapped },
      {
        x: wrapped - setWidth,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (v) => {
            const n = parseFloat(v);
            const w = setWidthRef.current || setWidth;
            return `${((n % -w) + -w) % -w}px`;
          },
        },
      },
    );
    tweenRef.current = tween;
    syncPause();
  }, [syncPause]);

  useGSAP(
    () => {
      registerGsap();
      measureAndLoop();
      const onResize = () => measureAndLoop();
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        tweenRef.current?.kill();
        tweenRef.current = null;
      };
    },
    { scope: rootRef, dependencies: [items.length] },
  );

  useEffect(() => {
    syncPause();
  }, [syncPause]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(() => syncPause(), {
      threshold: [0, 0.1, 0.25],
    });
    io.observe(root);
    const onVis = () => syncPause();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [syncPause]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    const w = setWidthRef.current;
    const viewport = viewportRef.current;
    if (!track || w <= 0) return;
    tweenRef.current?.pause();
    const delta = (viewport?.clientWidth ?? 320) * STEP_RATIO * dir;
    const from = Number(gsap.getProperty(track, "x")) || 0;
    gsap.to(track, {
      x: from + delta,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        const x = Number(gsap.getProperty(track, "x")) || 0;
        const wrapped = ((x % -w) + -w) % -w;
        gsap.set(track, { x: wrapped });
        measureAndLoop();
      },
    });
  };

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    /* Don't capture yet — let clicks reach the card button */
    dragRef.current = {
      active: false,
      startX: e.clientX,
      origin: Number(gsap.getProperty(track, "x")) || 0,
      moved: false,
    };
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const drag = dragRef.current;
    const track = trackRef.current;
    const w = setWidthRef.current;
    if (!drag || !track || w <= 0) return;
    const dx = e.clientX - drag.startX;

    if (!drag.active) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      drag.active = true;
      drag.moved = true;
      tweenRef.current?.pause();
      track.setPointerCapture(e.pointerId);
    }

    const next = drag.origin + dx;
    gsap.set(track, { x: ((next % -w) + -w) % -w });
  };

  const endDrag = (e: ReactPointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    if (drag.moved) {
      suppressClickRef.current = true;
      trackRef.current?.releasePointerCapture(e.pointerId);
      measureAndLoop();
    }
    dragRef.current = null;
  };

  const openQuote = (
    item: Testimonial,
    index: number,
    el: HTMLElement | null,
  ) => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    triggerRef.current = el;
    setOpen({ item, index });
  };

  return (
    <section
      ref={rootRef}
      id="testimonials"
      className="client-love-carousel overflow-x-clip"
      aria-labelledby={labelId}
    >
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] pt-[var(--section-y)]">
        <header data-reveal="up" className="max-w-[36rem]">
          <p id={labelId} className="type-label text-cream/55">
            {clientLove.storiesEyebrow}
          </p>
          <h2 className="type-h2 mt-3 text-cream [text-wrap:balance]">
            {clientLove.storiesHeadline}
          </h2>
          <p className="type-lede mt-3 text-cream/80 [text-wrap:pretty]">
            {clientLove.storiesSupport}
          </p>
        </header>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="type-label text-cream/50">Drag to explore</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="client-love-nav-btn"
              aria-label="Previous testimonials"
              onClick={() => step(1)}
            >
              ←
            </button>
            <button
              type="button"
              className="client-love-nav-btn"
              aria-label="Next testimonials"
              onClick={() => step(-1)}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="client-love-viewport relative mt-6 overflow-hidden pb-[var(--section-y)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setPaused(false);
          }
        }}
      >
        <div
          ref={trackRef}
          className="client-love-track flex w-max cursor-grab touch-pan-y will-change-transform active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {[0, 1].map((setIndex) => {
            const clone = setIndex === 1;
            return (
              <div
                key={setIndex}
                data-marquee-set={setIndex}
                className="flex shrink-0 gap-4 pl-[var(--gutter)] pr-4 md:gap-5 md:pr-5 lg:gap-6 lg:pr-6"
                aria-hidden={clone || undefined}
                inert={clone || undefined}
              >
                {items.map((item, index) => {
                  const preview = excerpt(item.quote);
                  const n = String(index + 1).padStart(2, "0");
                  return (
                    <article
                      key={`${setIndex}-${item.name}`}
                      className={cn(
                        "client-love-card shrink-0 border-2 border-black bg-cream",
                        cardWidthClass(index),
                      )}
                    >
                      <button
                        type="button"
                        tabIndex={clone ? -1 : 0}
                        className="client-love-card-btn flex w-full flex-col p-5 text-left md:p-7"
                        onClick={(e) => {
                          if (clone) return;
                          openQuote(item, index, e.currentTarget);
                        }}
                        onKeyDown={(
                          e: ReactKeyboardEvent<HTMLButtonElement>,
                        ) => {
                          if (clone) return;
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openQuote(item, index, e.currentTarget);
                          }
                        }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span
                            className="font-[family-name:var(--font-display-family)] text-4xl leading-none text-accent"
                            aria-hidden="true"
                          >
                            “
                          </span>
                          <span className="type-label text-ink-soft">{n}</span>
                        </div>
                        <blockquote className="client-love-quote mt-3 text-ink">
                          {preview}
                        </blockquote>
                        <footer className="mt-5 border-t border-black/15 pt-4">
                          <p className="type-label text-ink">{item.name}</p>
                          {item.title ? (
                            <p className="type-body mt-1 text-sm text-ink-soft">
                              {item.title}
                            </p>
                          ) : null}
                          <p className="type-label mt-3 text-accent">
                            Read more →
                          </p>
                        </footer>
                      </button>
                    </article>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div
          className="client-love-edge client-love-edge--left pointer-events-none absolute inset-y-0 left-0 w-6 md:w-12"
          aria-hidden="true"
        />
        <div
          className="client-love-edge client-love-edge--right pointer-events-none absolute inset-y-0 right-0 w-6 md:w-12"
          aria-hidden="true"
        />
      </div>

      {open ? (
        <div
          className="client-love-modal fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/55"
            aria-label="Close testimonial"
            onClick={() => setOpen(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[min(85svh,40rem)] w-full max-w-2xl overflow-y-auto border-2 border-black bg-cream p-6 md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="type-label text-ink-soft">
                {String(open.index + 1).padStart(2, "0")}
              </p>
              <button
                ref={closeBtnRef}
                type="button"
                className="client-love-nav-btn"
                aria-label="Close"
                onClick={() => setOpen(null)}
              >
                ✕
              </button>
            </div>
            <blockquote
              id={titleId}
              className="mt-4 font-[family-name:var(--font-display-family)] text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.25] tracking-[-0.02em] text-ink"
            >
              “{open.item.quote}”
            </blockquote>
            <footer className="mt-8 border-t-2 border-black pt-5">
              <p className="type-label text-ink">{open.item.name}</p>
              {open.item.title ? (
                <p className="type-body mt-1 text-ink-soft">{open.item.title}</p>
              ) : null}
            </footer>
          </div>
        </div>
      ) : null}
    </section>
  );
}
