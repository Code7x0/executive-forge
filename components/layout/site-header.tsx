"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { booking } from "@/content/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#founder", label: "About Suhana" },
] as const;

/** Heist SHOP NOW–style brand chip */
const brandChipClass = cn(
  "inline-flex shrink-0 items-center justify-center",
  "border-2 border-black bg-accent px-[1.15rem] py-[0.55rem]",
  "font-[family-name:var(--font-wordmark-family)] text-[length:var(--text-cta)] font-black uppercase leading-none tracking-[-0.02em] text-ink",
  "rounded-[var(--radius-cta)]",
  "transition-[transform,background-color] duration-[var(--duration-fast)] ease-[var(--ease-out)]",
  "hover:bg-accent-hover hover:scale-[var(--hover-scale)] active:scale-[0.98]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
);

/**
 * Top Book a call strip + brand chip.
 * Over home hero: transparent / ivory links.
 * After scroll: cream bar with all links visible.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  const panelId = useId();
  const isHome = pathname === "/";
  const scrolled = !isHome || homeScrolled;
  const overHero = isHome && !scrolled;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!isHome) return;

    const threshold = () =>
      Math.min(120, Math.round(window.innerHeight * 0.12));

    const read = () => {
      setHomeScrolled(window.scrollY > threshold());
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read, { passive: true });
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [isHome]);

  return (
    <header
      className={cn(
        "z-50 pt-[env(safe-area-inset-top,0px)] transition-[background-color,border-color,color] duration-[var(--duration-med)] ease-[var(--ease-out)]",
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0",
        overHero ? "bg-transparent" : "border-b border-ink bg-cream",
      )}
      data-nav-scrolled={scrolled ? "true" : "false"}
    >
      <Link
        href={booking.introHref}
        className={cn(
          "flex h-[var(--header-banner-h)] w-full items-center justify-center",
          "border-b border-ink bg-accent px-[var(--gutter)]",
          "font-[family-name:var(--font-cta-family)] text-[1.05rem] font-black uppercase leading-none tracking-[0.02em] text-ink",
          "transition-colors duration-[var(--duration-fast)] hover:bg-accent-hover",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-focus",
        )}
        onClick={() => setOpen(false)}
      >
        Book a call →
      </Link>

      <div className="mx-auto flex h-[var(--header-nav-h)] w-full max-w-[100vw] items-center justify-between gap-4 px-[var(--gutter)]">
        <Link
          href="/"
          className={brandChipClass}
          onClick={() => setOpen(false)}
        >
          Executive Forge
        </Link>

        <div className="flex items-center gap-5 lg:gap-7">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 lg:flex lg:gap-7"
          >
            {nav.map((item) => (
              <NavLink
                key={item.href + item.label}
                item={item}
                pathname={pathname}
                tone={overHero ? "ivory" : "ink"}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </nav>

          <button
            type="button"
            className={cn(
              "type-label inline-flex min-h-11 min-w-11 items-center justify-center touch-manipulation lg:hidden",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
              overHero ? "text-[color:var(--hero-ivory)]" : "text-ink",
            )}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-ink bg-cream lg:hidden"
      >
        <div className="flex flex-col gap-1 px-[var(--gutter)] py-4">
          {nav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="type-label flex min-h-11 items-center py-3 text-ink touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={booking.introHref}
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Book a call →
          </Button>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  item,
  pathname,
  tone,
  onNavigate,
}: {
  item: (typeof nav)[number];
  pathname: string;
  tone: "ivory" | "ink";
  onNavigate: () => void;
}) {
  const active =
    item.href === "/"
      ? pathname === "/"
      : item.href.startsWith("/#")
        ? false
        : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "motion-nav-link type-label uppercase tracking-[0.06em]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
        tone === "ivory"
          ? cn(
              "text-[color:var(--hero-ivory)]/85 hover:text-[color:var(--hero-ivory)]",
              active && "text-[color:var(--hero-ivory)] is-active",
            )
          : cn("text-ink/85 hover:text-ink", active && "text-ink is-active"),
      )}
    >
      {item.label}
    </Link>
  );
}
