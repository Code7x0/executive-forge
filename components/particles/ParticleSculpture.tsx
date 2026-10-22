"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  createParticleScene,
  type ParticleSceneOptions,
} from "@/components/particles/engine/createScene";
import { ParticleFallback } from "@/components/particles/ParticleFallback";
import { cn } from "@/lib/cn";

type ParticleSculptureProps = {
  className?: string;
  /**
   * When true, pointer listeners attach to `pointerRoot`.
   * Canvas itself never captures clicks (pointer-events: none).
   */
  interactive?: boolean;
  /**
   * Where to listen for pointer.
   * `section` / `parent` keep the canvas non-blocking so CTAs stay clickable.
   */
  pointerRoot?: "host" | "parent" | "section";
  sceneOptions?: ParticleSceneOptions;
};

function canUseWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(
      c.getContext("webgl2") ||
      c.getContext("webgl") ||
      c.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

const subscribeNoop = () => () => {};

export function ParticleSculpture({
  className,
  interactive = true,
  pointerRoot = "host",
  sceneOptions,
}: ParticleSculptureProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasWebGL = useSyncExternalStore(subscribeNoop, canUseWebGL, () => true);
  const [initFailed, setInitFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host || !hasWebGL || reducedMotion) return;

    let handle: ReturnType<typeof createParticleScene> | null = null;
    try {
      handle = createParticleScene(canvas, sceneOptions);
    } catch {
      const t = window.setTimeout(() => setInitFailed(true), 0);
      return () => window.clearTimeout(t);
    }

    const onResize = () => {
      handle?.resize();
      const w = host.clientWidth;
      // Softer pointer on small screens
      handle?.setPointerForce(w < 768 ? 0.45 : w < 1024 ? 0.75 : 1);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(host);

    const io = new IntersectionObserver(
      ([entry]) => handle?.setVisible(!!entry?.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(host);

    const listenTarget =
      pointerRoot === "section"
        ? host.closest("section")
        : pointerRoot === "parent"
          ? host.parentElement
          : host;

    const onPointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      handle?.setPointerFromEvent(e);
    };
    const onPointerLeave = () => handle?.clearPointer();
    const onPointerUp = () => handle?.clearPointer();

    host.style.pointerEvents = "none";

    if (interactive && listenTarget) {
      listenTarget.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });
      listenTarget.addEventListener("pointerdown", onPointerMove, {
        passive: true,
      });
      listenTarget.addEventListener("pointerleave", onPointerLeave);
      listenTarget.addEventListener("pointercancel", onPointerLeave);
      listenTarget.addEventListener("pointerup", onPointerUp);
    }

    onResize();

    return () => {
      ro.disconnect();
      io.disconnect();
      if (listenTarget) {
        listenTarget.removeEventListener("pointermove", onPointerMove);
        listenTarget.removeEventListener("pointerdown", onPointerMove);
        listenTarget.removeEventListener("pointerleave", onPointerLeave);
        listenTarget.removeEventListener("pointercancel", onPointerLeave);
        listenTarget.removeEventListener("pointerup", onPointerUp);
      }
      handle?.dispose();
    };
  }, [interactive, hasWebGL, pointerRoot, sceneOptions, reducedMotion]);

  const showFallback = !hasWebGL || initFailed || reducedMotion;

  return (
    <div
      ref={hostRef}
      className={cn("relative h-full w-full", className)}
      aria-hidden="true"
    >
      {showFallback ? (
        <ParticleFallback />
      ) : (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );
}
