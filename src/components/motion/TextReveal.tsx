"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type Props = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "p";
};

export function TextReveal({ lines, className, as: Tag = "h1" }: Props) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const spans = root.querySelectorAll<HTMLElement>("[data-line]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(spans, { yPercent: 0 });
      return;
    }

    gsap.set(spans, { yPercent: 110 });
    gsap.to(spans, {
      yPercent: 0,
      duration: 1.05,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.12,
    });
  }, [lines]);

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden pb-[0.08em] mb-[-0.08em]">
          <span data-line className="block">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
