"use client";

import { closing } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { motion } from "framer-motion";

export function CtaBand() {
  return (
    <section id="book" className="py-[var(--section-y)]">
      <div className="page-shell">
        <Reveal>
          <motion.div
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            initial={{ scale: 0.985, opacity: 0.85, y: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", bounce: 0, duration: 0.75 }}
            className="relative overflow-hidden rounded-[1.6rem] px-7 py-14 text-center text-white shadow-[0_24px_64px_rgba(29,30,34,0.28)] md:px-12 md:py-16"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 90% 0%, rgba(225,29,46,0.38), transparent 55%), linear-gradient(165deg, #2a2b31 0%, #1d1e22 45%, #111214 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_28%)]"
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(225,29,46,0.5),transparent_70%)] blur-xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="relative text-[0.8rem] font-medium tracking-[0.12em] uppercase text-white/55">
              Next step
            </p>
            <h2 className="display relative mx-auto mt-4 max-w-[14ch] text-[clamp(2.1rem,4.5vw,3.4rem)] !text-white">
              {closing.title}
            </h2>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <MagneticButton
                href={closing.primary.href}
                className="btn bg-[#f5f3ee] text-[#0b0d10] shadow-[0_10px_28px_rgba(0,0,0,0.35)] hover:bg-white"
              >
                {closing.primary.label}
              </MagneticButton>
              <MagneticButton
                href={closing.secondary.href}
                className="btn border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/16"
              >
                {closing.secondary.label}
              </MagneticButton>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
