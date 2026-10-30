import Image from "next/image";
import Link from "next/link";
import { brand, nav } from "@/data/content";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] pt-16 pb-10">
      <div className="page-shell">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex" aria-label={brand.name}>
              <BrandLogo height={112} />
            </Link>
            <p className="mt-4 max-w-[34ch] text-[var(--soft)]">
              Personal branding and LinkedIn strategy for founders, executives and experts.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] text-[var(--ink)]">
              {brand.places.map((p) => (
                <li key={p.city} className="inline-flex items-center gap-2">
                  <Image
                    src={p.flag}
                    alt={`${p.country} flag`}
                    width={32}
                    height={24}
                    unoptimized
                    className="h-5 w-7 shrink-0 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(245,243,238,0.18)]"
                  />
                  <span>{p.city}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-block text-[var(--soft)] underline decoration-transparent transition hover:text-[var(--ink)] hover:decoration-current"
            >
              {brand.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:justify-items-end">
            <div>
              <p className="eyebrow mb-3">Navigate</p>
              <ul className="space-y-2 text-[0.95rem] text-[var(--soft)]">
                <li>
                  <Link href="/" className="hover:text-[var(--ink)]">
                    Home
                  </Link>
                </li>
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-[var(--ink)]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Work</p>
              <ul className="space-y-2 text-[0.95rem] text-[var(--soft)]">
                <li>
                  <Link href="/services" className="hover:text-[var(--ink)]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#book" className="hover:text-[var(--ink)]">
                    Intro call
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Presence</p>
              <ul className="space-y-2 text-[0.95rem] text-[var(--soft)]">
                <li>
                  <a href={brand.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-[0.85rem] text-[var(--soft)] sm:flex-row sm:justify-between">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Executive Forge. Founded by Suhana Siddika.</p>
          <p>
            Organic growth only. Zero bots. · Motion patterns inspired by{" "}
            <a
              href="https://skiper-ui.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-transparent hover:decoration-current"
            >
              Skiper UI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
