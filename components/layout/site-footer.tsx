import Link from "next/link";
import { FooterNewsletter } from "@/components/layout/footer-newsletter";
import { booking } from "@/content/site";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#founder", label: "About Suhana" },
  { href: booking.introHref, label: "Book an intro call" },
] as const;

/**
 * Heist-style full-bleed footer: oversized wordmark, red field,
 * nav row, cream newsletter panel, narrow legal strip.
 * No invented social/legal URLs — only real site destinations.
 */
export function SiteFooter() {
  return (
    <footer className="overflow-x-clip">
      <div className="bg-[#f13720] px-[var(--gutter)] pb-12 pt-6 md:pb-16 md:pt-8">
        <p className="footer-wordmark select-text" aria-label="Executive Forge">
          <span className="block">Executive</span>
          <span className="block">Forge</span>
        </p>

        <nav
          aria-label="Footer"
          className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-3 border-t border-[#11100f]/15 pt-3 md:mt-4 md:gap-x-2 md:pt-4"
        >
          {footerNav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="footer-nav-link transition-opacity duration-[var(--duration-fast)] hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#11100f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 md:mt-14">
          <FooterNewsletter />
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#11100f] px-[var(--gutter)] py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] sm:flex-row sm:items-center sm:justify-between">
        <p className="footer-legal">© 2026 Executive Forge</p>
        <p className="footer-legal">Organic growth only</p>
      </div>
    </footer>
  );
}
