"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AliveCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
  glass?: boolean;
};

export function AliveCard({
  as = "div",
  glass = false,
  className,
  children,
}: AliveCardProps) {
  const Comp = as === "article" ? motion.article : motion.div;

  return (
    <Comp
      whileHover={{
        y: -8,
        scale: 1.015,
        transition: { type: "spring", bounce: 0, duration: 0.45 },
      }}
      whileTap={{
        scale: 0.985,
        transition: { type: "spring", bounce: 0, duration: 0.2 },
      }}
      className={cn(glass ? "glass-card" : "alive-card", className)}
    >
      <span aria-hidden className="alive-card-sheen" />
      {children}
    </Comp>
  );
}
