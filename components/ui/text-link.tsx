import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "cream" | "accent";
  arrow?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

const toneClass = {
  ink: "text-ink decoration-ink/40 hover:decoration-ink",
  cream: "text-cream decoration-cream/40 hover:decoration-cream",
  accent: "text-accent decoration-accent/40 hover:decoration-accent",
} as const;

export function TextLink({
  href,
  children,
  className,
  tone = "ink",
  arrow = false,
  ...props
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "type-body inline-flex items-center gap-1 underline-offset-[0.2em]",
        "underline transition-[text-decoration-color,color,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        "hover:translate-x-[1px]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
        toneClass[tone],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {arrow ? <span aria-hidden="true">→</span> : null}
    </Link>
  );
}
