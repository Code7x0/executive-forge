"use client";

import { hero } from "@/data/content";
import { TextReveal } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { motion } from "framer-motion";

const headlineLines = [
  "You've built the expertise.",
  "Let's make sure the right people actually see it!",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-10 md:pb-14 md:pt-16">
      <div aria-hidden className="atmosphere" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(225,29,46,0.16),transparent_70%)] blur-2xl"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(29,30,34,0.1),transparent_70%)] blur-2xl"
        animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="page-shell relative max-w-[820px] text-center">
        <TextReveal
          lines={headlineLines}
          className="display text-[clamp(2.4rem,5.5vw,3.55rem)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-6 max-w-[54ch] text-[1.05rem] leading-[1.65] text-[var(--soft)]"
        >
          {hero.standfirst}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.65, delay: 0.72 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </MagneticButton>
          <MagneticButton href={hero.secondaryCta.href} className="btn btn-ghost">
            {hero.secondaryCta.label}
            <span aria-hidden>→</span>
          </MagneticButton>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-5 text-[0.85rem] text-[var(--soft)]"
        >
          ★★★★★ · {hero.proof}
        </motion.p>
      </div>
    </section>
  );
}
