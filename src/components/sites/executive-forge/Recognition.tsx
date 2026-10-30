"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { recognition } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";

export function Recognition() {
  const marquee = [...recognition.list, ...recognition.list];

  return (
    <section className="py-[var(--section-y)]">
      <div className="page-shell">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow">{recognition.label}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)]">{recognition.title}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:gap-x-12 md:grid-cols-4 md:gap-x-10">
          {recognition.partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 50} className="w-full">
              <motion.div
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="mx-auto flex h-16 w-full max-w-[11rem] items-center justify-center md:h-[4.5rem] md:max-w-[12.5rem]"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={200}
                  height={72}
                  unoptimized
                  className={
                    /* Dark navy / blue badge marks stay native; mono PNGs invert to ivory */
                    p.name === "Khaleej Times" || p.name === "Emirates NBD"
                      ? "partner-logo-mono h-full w-full bg-transparent object-contain"
                      : "h-full w-full bg-transparent object-contain opacity-95"
                  }
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex w-max gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {marquee.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--elevated)] px-3.5 py-1.5 text-[0.85rem] text-[var(--soft)]"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {recognition.badges.map((src, i) => (
            <Reveal key={src} delay={i * 50}>
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", bounce: 0, duration: 0.45 },
                }}
                className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] shadow-[var(--shadow-product)] ring-1 ring-[var(--line)]"
              >
                <Image
                  src={src}
                  alt="Recognition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
