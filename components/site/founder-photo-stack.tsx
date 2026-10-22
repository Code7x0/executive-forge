"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { cn } from "@/lib/cn";

export type FounderPhoto = {
  src: string;
  alt: string;
};

type FounderPhotoStackProps = {
  photos: readonly [FounderPhoto, FounderPhoto, FounderPhoto];
  className?: string;
};

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function easeOutCubic(t: number) {
  const u = 1 - Math.min(1, Math.max(0, t));
  return 1 - u * u * u;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

type Pose = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  z: number;
  opacity: number;
};

/**
 * Only photo 1 is visible at start.
 * Scroll stage 1: photo 2 flies in and lands on top.
 * Scroll stage 2: photo 3 flies in and lands on top.
 */
function poseAt(cardIndex: number, progress: number): Pose {
  const p = Math.min(1, Math.max(0, progress));

  /* Stage gates */
  const enter2 = easeOutCubic(smoothstep(0.02, 0.48, p));
  const enter3 = easeOutCubic(smoothstep(0.52, 0.96, p));
  const settleUnder = easeOutCubic(smoothstep(0.58, 1, p));

  if (cardIndex === 0) {
    /* Base photo — stays; eases slightly back as others land */
    return {
      x: lerp(0, -26, settleUnder),
      y: lerp(0, 20, settleUnder),
      rotate: lerp(-3, -5.5, settleUnder),
      scale: lerp(1, 0.93, settleUnder),
      z: 1,
      opacity: 1,
    };
  }

  if (cardIndex === 1) {
    /* Starts off-frame below/right; lands on top of #1, then yields under #3 */
    return {
      x: lerp(110, lerp(8, -14, settleUnder), enter2),
      y: lerp(160, lerp(-6, 14, settleUnder), enter2),
      rotate: lerp(14, lerp(3.5, 4.5, settleUnder), enter2),
      scale: lerp(0.88, lerp(1, 0.95, settleUnder), enter2),
      z: 2,
      opacity: enter2,
    };
  }

  /* Card 2 — hidden until second stage, then lands on the stack */
  return {
    x: lerp(-90, 4, enter3),
    y: lerp(180, -4, enter3),
    rotate: lerp(-16, -2, enter3),
    scale: lerp(0.86, 1, enter3),
    z: 3,
    opacity: enter3,
  };
}

/**
 * Scroll-scrubbed photo drop: one visible → second lands on top → third lands on top.
 */
export function FounderPhotoStack({ photos, className }: FounderPhotoStackProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    registerGsap();
    const stage = stageRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!stage || cards.length !== 3) return;

    const track = stage.closest<HTMLElement>("[data-founder-stack-track]");
    if (!track) return;

    const applyStatic = (progress: number) => {
      cards.forEach((card, i) => {
        const pose = poseAt(i, progress);
        gsap.set(card, {
          x: pose.x,
          y: pose.y,
          rotate: pose.rotate,
          scale: pose.scale,
          opacity: pose.opacity,
          zIndex: pose.z,
          force3D: true,
          visibility: pose.opacity < 0.02 ? "hidden" : "visible",
        });
      });
    };

    if (prefersReducedMotion()) {
      track.classList.add("founder-stack-track--static");
      track.style.height = "auto";
      applyStatic(1);
      return;
    }

    track.classList.remove("founder-stack-track--static");
    track.style.height = "";
    applyStatic(0);

    let last = -1;
    const applyProgress = (progress: number) => {
      const p = Math.min(1, Math.max(0, progress));
      if (Math.abs(p - last) < 0.0008) return;
      last = p;
      track.dataset.stackProgress = p.toFixed(3);
      applyStatic(p);
    };

    const readProgress = () => {
      const total = track.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = Math.min(
        Math.max(-track.getBoundingClientRect().top, 0),
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
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
      id: "founder-photo-stack",
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
      gsap.set(cards, {
        clearProps: "transform,zIndex,opacity,visibility",
      });
    };
  }, [photos]);

  return (
    <div
      ref={stageRef}
      className={cn(
        "founder-photo-stack relative mx-auto aspect-[3/4] w-full max-w-md min-h-80 max-h-[min(68svh,34rem)] overflow-visible lg:max-w-none lg:max-h-[min(72svh,38rem)]",
        className,
      )}
      aria-label="Photographs of Suhana Siddika"
    >
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="founder-photo-card absolute inset-[6%_10%] overflow-hidden border border-cream/20 bg-[#1a1816] shadow-[0_18px_40px_rgba(0,0,0,0.35)] will-change-transform"
          data-stack-index={i}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 36vw, 85vw"
            quality={i === 0 ? 80 : 74}
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
