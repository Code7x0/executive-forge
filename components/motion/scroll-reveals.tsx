"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { motion } from "@/lib/motion/tokens";

/**
 * Declarative scroll reveals via data attributes on page content.
 *
 * data-reveal="up" | "fade" | "image" | "scale"
 * data-reveal-stagger on a parent → animates direct children
 * data-reveal-process on an ol/ul → staggered process progression
 *
 * Runs after hydration (useEffect) so GSAP never fights React's first paint.
 */
export function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) {
      document.documentElement.classList.add("reduced-motion");
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal], [data-reveal-stagger] > *, [data-reveal-process] > *",
        )
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.clipPath = "none";
        });
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const ctx = gsap.context(() => {
      const singles = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      singles.forEach((el) => {
        // Skip items owned by a stagger parent
        if (el.parentElement?.hasAttribute("data-reveal-stagger")) return;
        // Hero owns its own entrance
        if (el.closest("[data-motion-hero]")) return;

        const kind = el.dataset.reveal ?? "up";
        const delay = Number(el.dataset.revealDelay ?? 0);

        if (kind === "image") {
          gsap.set(el, { clipPath: "inset(12% 0 12% 0)", opacity: 0.001 });
          gsap.to(el, {
            clipPath: "inset(0% 0 0% 0)",
            opacity: 1,
            duration: motion.duration.image,
            ease: motion.ease,
            delay,
            scrollTrigger: {
              trigger: el,
              start: motion.scroll.start,
              toggleActions: "play none none none",
            },
          });
          return;
        }

        if (kind === "scale") {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              duration: motion.duration.enter,
              ease: motion.ease,
              delay,
              scrollTrigger: {
                trigger: el,
                start: motion.scroll.start,
                toggleActions: "play none none none",
              },
            },
          );
          return;
        }

        if (kind === "fade") {
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: motion.duration.enter,
              ease: motion.easeSoft,
              delay,
              scrollTrigger: {
                trigger: el,
                start: motion.scroll.start,
                toggleActions: "play none none none",
              },
            },
          );
          return;
        }

        // default: up
        gsap.fromTo(
          el,
          { opacity: 0, y: motion.distance.text },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.enter,
            ease: motion.ease,
            delay,
            scrollTrigger: {
              trigger: el,
              start: motion.scroll.start,
              toggleActions: "play none none none",
            },
          },
        );
      });

      const staggers = gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]");
      staggers.forEach((parent) => {
        if (parent.closest("[data-motion-hero]")) return;
        const kids = Array.from(parent.children) as HTMLElement[];
        if (!kids.length) return;

        gsap.set(kids, { opacity: 0, y: motion.distance.micro + 8 });
        gsap.to(kids, {
          opacity: 1,
          y: 0,
          duration: motion.duration.enter,
          ease: motion.ease,
          stagger: motion.stagger.base,
          scrollTrigger: {
            trigger: parent,
            start: motion.scroll.start,
            toggleActions: "play none none none",
          },
        });
      });

      // Process progression: subtle left accent grow — no pin
      const processItems = gsap.utils.toArray<HTMLElement>(
        "[data-reveal-process] > li",
      );
      if (processItems.length) {
        gsap.set(processItems, { opacity: 0, y: 20 });
        gsap.to(processItems, {
          opacity: 1,
          y: 0,
          duration: motion.duration.enter,
          ease: motion.ease,
          stagger: motion.stagger.loose,
          scrollTrigger: {
            trigger: processItems[0]?.parentElement ?? undefined,
            start: motion.scroll.start,
            toggleActions: "play none none none",
          },
        });
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
