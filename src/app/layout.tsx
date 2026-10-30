import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Executive Forge — Executive Personal Branding & Thought Leadership",
    template: "%s · Executive Forge",
  },
  description:
    "I help founders, executives and experts turn what they know into a LinkedIn presence that gets them noticed by the right people and creates real business opportunities.",
  applicationName: "Executive Forge",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  openGraph: {
    title: "Executive Forge — Executive Personal Branding & Thought Leadership",
    description:
      "I help founders, executives and experts turn what they know into a LinkedIn presence that gets them noticed by the right people and creates real business opportunities.",
    siteName: "Executive Forge",
    images: [
      {
        url: "/assets/brand/og-logo.png",
        width: 1200,
        height: 1200,
        alt: "Executive Forge",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Executive Forge",
    description:
      "Personal branding and LinkedIn strategy for founders, executives and experts.",
    images: ["/assets/brand/og-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
