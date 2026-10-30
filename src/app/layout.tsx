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
