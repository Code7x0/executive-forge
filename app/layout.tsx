import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ddd6c7",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001",
  ),
  title: {
    default: "Executive Forge",
    template: "%s · Executive Forge",
  },
  description:
    "Personal branding for founders, executives, and experts — Executive Forge by Suhana Siddika.",
  openGraph: {
    title: "Executive Forge",
    description:
      "Personal branding for founders, executives, and experts — by Suhana Siddika.",
    type: "website",
    locale: "en_US",
    siteName: "Executive Forge",
    images: [
      {
        url: "/assets/Founder/WhatsApp Image 2026-10-01 at 14.55.48 (9).jpeg",
        width: 1200,
        height: 630,
        alt: "Suhana Siddika, Founder of Executive Forge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Forge",
    description:
      "Personal branding for founders, executives, and experts — by Suhana Siddika.",
    images: [
      "/assets/Founder/WhatsApp Image 2026-10-01 at 14.55.48 (9).jpeg",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
