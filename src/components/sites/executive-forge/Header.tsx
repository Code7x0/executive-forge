"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand, nav } from "@/data/content";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300",
        scrolled || open ? "glass-nav" : "bg-transparent",
      )}
    >
      <div className="page-shell flex h-[4.75rem] items-center justify-between gap-4 md:h-[5.25rem]">
        <Link href="/" className="flex shrink-0 items-center" aria-label={brand.name}>
          <BrandLogo height={56} priority />
        </Link>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[13px] text-[var(--soft)] transition hover:bg-white/[0.08] hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="#book" className="btn btn-primary hidden sm:inline-flex">
            Book a call
          </Link>
          <button
            type="button"
            className="btn btn-ghost md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-[var(--page-pad)] py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-2xl"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#book" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
              Book a call
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
