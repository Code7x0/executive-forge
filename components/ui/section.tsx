import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

type Tone = "cream" | "ink" | "transparent";
type Pad = "default" | "compact" | "none";
type Width = "default" | "narrow" | "prose" | "full";

const toneClass: Record<Tone, string> = {
  cream: "surface-cream",
  ink: "surface-ink",
  transparent: "",
};

const padClass: Record<Pad, string> = {
  default: "py-[var(--section-y)]",
  compact: "py-[var(--section-y-sm)]",
  none: "py-0",
};

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  tone?: Tone;
  pad?: Pad;
  width?: Width;
  as?: ElementType;
  contain?: boolean;
};

export function Section({
  children,
  id,
  className,
  containerClassName,
  tone = "cream",
  pad = "default",
  width = "default",
  as: Tag = "section",
  contain = true,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(toneClass[tone], padClass[pad], className)}>
      {contain ? (
        <Container width={width} className={containerClassName}>
          {children}
        </Container>
      ) : (
        children
      )}
    </Tag>
  );
}
