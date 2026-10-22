import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Width = "default" | "narrow" | "prose" | "full";

const widthClass: Record<Width, string> = {
  default: "max-w-[var(--container-max)]",
  narrow: "max-w-[var(--container-narrow)]",
  prose: "max-w-[var(--container-prose)]",
  full: "max-w-none",
};

type ContainerProps = {
  children: ReactNode;
  className?: string;
  width?: Width;
  as?: ElementType;
};

export function Container({
  children,
  className,
  width = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-[var(--gutter)]",
        widthClass[width],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
