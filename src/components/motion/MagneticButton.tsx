"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({ href, children, className, strength = 0.32 }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.35, ease: "power3.out", overwrite: "auto" });
  };

  const onDown = () => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(el, { scale: 0.97, duration: 0.1, ease: "power2.out", overwrite: "auto" });
  };

  const onUp = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { scale: 1, duration: 0.35, ease: "power3.out", overwrite: "auto" });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.55,
      ease: "elastic.out(1, 0.55)",
      overwrite: "auto",
    });
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={cn(className)}
      onMouseMove={onMove}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseLeave={onLeave}
    >
      {children}
    </Link>
  );
}
