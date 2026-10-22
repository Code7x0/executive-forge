"use client";

import type { MouseEvent } from "react";
import { caseStudies } from "@/content/site";
import { cn } from "@/lib/cn";
import { registerGsap, ScrollTrigger } from "@/lib/motion/gsap";

type CaseTocProps = {
  className?: string;
};

function scrollToCase(slug: string) {
  const el = document.getElementById(slug);
  if (!el) return;
  registerGsap();
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement | number, o?: object) => void } }).__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -8, immediate: false });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  history.replaceState(null, "", `#${slug}`);
  window.setTimeout(() => ScrollTrigger.refresh(), 450);
}

/**
 * Anchor index for the nine stories — keeps deep links and keyboard access.
 */
export function CaseToc({ className }: CaseTocProps) {
  const onJump = (event: MouseEvent<HTMLAnchorElement>, slug: string) => {
    event.preventDefault();
    scrollToCase(slug);
  };

  return (
    <nav
      aria-label="Case studies"
      className={cn(
        "border-2 border-black bg-cream px-4 py-5 md:px-6 md:py-6",
        className,
      )}
    >
      <p className="type-label text-muted">Jump to a story</p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => {
          const n = String(index + 1).padStart(2, "0");
          return (
            <li key={study.slug}>
              <a
                href={`#${study.slug}`}
                onClick={(e) => onJump(e, study.slug)}
                className={cn(
                  "group flex items-baseline gap-3 border-t border-line pt-3",
                  "transition-colors duration-[var(--duration-fast)]",
                  "hover:text-accent focus-visible:outline focus-visible:outline-2",
                  "focus-visible:outline-offset-3 focus-visible:outline-focus",
                )}
              >
                <span className="type-label shrink-0 text-muted group-hover:text-accent">
                  {n}
                </span>
                <span className="type-body text-sm leading-snug text-ink [text-wrap:pretty]">
                  {study.client}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
