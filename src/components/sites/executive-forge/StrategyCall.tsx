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
            className="site-card relative flex min-h-[280px] flex-col justify-center overflow-hidden px-7 py-10 sm:px-10 md:min-h-[320px] md:px-12 md:py-14"
          >
            <h2 className="relative display max-w-[18ch] text-[clamp(1.85rem,3.5vw,2.65rem)]">
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
