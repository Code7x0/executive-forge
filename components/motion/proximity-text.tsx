"use client";

/**
 * Skiper “Hover members”–inspired proximity dodge.
 * GSAP-only (no Anime.js). Transform-only; resets on leave; disabled for
 * coarse pointers and prefers-reduced-motion.
 */

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { cn } from "@/lib/cn";

type ProximityTextProps = {
  text: string;
  className?: string;
  ariaLabel?: string;
  /** Max displace in px */
  strength?: number;
  /** Influence radius in px */
  radius?: number;
};

function isCoarsePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export function ProximityText({
  text,
  className,
  ariaLabel,
  strength = 14,
  radius = 90,
}: ProximityTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion() || isCoarsePointer()) return;

    const letters = lettersRef.current.filter(Boolean);
    if (!letters.length) return;

    gsap.set(letters, { x: 0, y: 0, force3D: true });

    let raf = 0;
    let px = 0;
    let py = 0;
    let inside = false;

    const tick = () => {
      raf = 0;
      if (!inside) return;
      for (const el of letters) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = cx - px;
        const dy = cy - py;
        const dist = Math.hypot(dx, dy);
        if (dist < radius && dist > 0.01) {
          const t = 1 - dist / radius;
          const force = t * t * strength;
          const nx = dx / dist;
          const ny = dy / dist;
          gsap.to(el, {
            x: nx * force,
            y: ny * force,
            duration: 0.18,
            ease: "power3.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.28,
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      inside = true;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      inside = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      gsap.to(letters, {
        x: 0,
        y: 0,
        duration: 0.32,
        ease: "power3.out",
        overwrite: true,
        stagger: 0.008,
      });
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("pointercancel", onLeave);

    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("pointercancel", onLeave);
      if (raf) cancelAnimationFrame(raf);
      gsap.killTweensOf(letters);
      gsap.set(letters, { clearProps: "transform" });
    };
  }, [radius, strength, text]);

  const chars = Array.from(text);

  return (
    <span
      ref={rootRef}
      className={cn("inline-block max-w-full", className)}
      aria-label={ariaLabel ?? text}
    >
      <span aria-hidden className="inline">
        {chars.map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            ref={(el) => {
              if (i === 0) lettersRef.current = [];
              if (el) lettersRef.current[i] = el;
            }}
            className="inline-block will-change-transform"
            style={{
              whiteSpace: ch === " " ? "pre" : undefined,
              /* Keep dodge on transform only — never reflow */
              verticalAlign: "baseline",
            }}
          >
            {ch === " " ? "\u00a0" : ch}
          </span>
        ))}
      </span>
    </span>
  );
}
