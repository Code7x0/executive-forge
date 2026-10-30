"use client";

import { motion } from "framer-motion";
import { strategyCall } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function StrategyCall() {
  return (
    <section className="bg-[var(--cream)] pb-[var(--section-y)]">
      <div className="page-shell">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", bounce: 0, duration: 0.55 }}
            className="relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-[1.15rem] border border-[var(--line)] bg-[var(--elevated)] px-7 py-10 text-[var(--ink)] shadow-[var(--shadow-soft)] sm:px-10 md:min-h-[320px] md:px-12 md:py-14"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 80% at 92% 8%, rgba(245,243,238,0.06), transparent 55%), var(--grad-panel)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]"
            />
            <h2 className="relative display max-w-[18ch] text-[clamp(1.85rem,3.5vw,2.65rem)] text-[var(--ink)]">
              {strategyCall.title}
            </h2>
            <p className="relative mt-4 max-w-[52ch] text-[1.05rem] leading-[1.55] text-[var(--soft)]">
              {strategyCall.text}
            </p>
            <div className="relative mt-8">
              <MagneticButton href={strategyCall.cta.href} className="btn btn-primary">
                {strategyCall.cta.label}
              </MagneticButton>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
