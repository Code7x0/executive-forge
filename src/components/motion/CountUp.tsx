"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  value: string;
  className?: string;
};

/** Animates numeric parts of strings like "30k+", "5", "Top 5". */
export function CountUp({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const obj = { n: 0 };

    const tween = gsap.to(obj, {
      n: target,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        const rounded = Number.isInteger(target) ? Math.round(obj.n) : obj.n.toFixed(1);
        setDisplay(`${rounded}${suffix}`);
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
