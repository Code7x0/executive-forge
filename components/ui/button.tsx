import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "on-ink";
type Size = "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-accent-hover hover:scale-[var(--hover-scale)]",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  ghost:
    "bg-transparent text-ink underline-offset-4 hover:underline decoration-from-font",
  "on-ink":
    "bg-accent text-ink hover:bg-accent-hover hover:scale-[var(--hover-scale)]",
};

const sizeClass: Record<Size, string> = {
  /* Heist SHOP NOW ≈ 9.6px 20.8px padding, 20px type, 2px radius */
  md: "px-[1.3rem] py-[0.6rem] text-[length:var(--text-cta)] leading-none",
  lg: "px-6 py-3 text-[length:calc(var(--text-cta)+0.05rem)] leading-none",
};

const baseClass = cn(
  "inline-flex items-center justify-center gap-2",
  "min-h-11 touch-manipulation",
  "font-[family-name:var(--font-cta-family)] font-bold uppercase tracking-[0.01em]",
  "rounded-[var(--radius-cta)]",
  "transition-[transform,background-color,color,border-color] duration-[var(--duration-fast)] ease-[var(--ease-out)]",
  "active:scale-[0.98]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
  "disabled:pointer-events-none disabled:opacity-40",
);

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(baseClass, variantClass[variant], sizeClass[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
