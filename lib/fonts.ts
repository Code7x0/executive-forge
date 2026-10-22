import {
  Archivo_Black,
  Archivo_Narrow,
  DM_Sans,
  IBM_Plex_Mono,
  Instrument_Serif,
} from "next/font/google";

/**
 * Heist reference fonts (verified, not licensed for reuse here):
 * - Feature Display Condensed (Commercial Type) — display
 * - Forma DJR Micro / Mono (Typekit) — body / labels
 * - Aro Narrow — CTA
 *
 * Substitutes below are OFL / Google Fonts, chosen for visual proximity.
 * See docs/FONTS.md.
 */

export const fontDisplay = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display-family",
  display: "swap",
});

export const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-family",
  display: "swap",
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-label-family",
  display: "swap",
});

export const fontCta = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cta-family",
  display: "swap",
});

/** Heavy condensed sans for Heist-style footer wordmark (OFL). */
export const fontWordmark = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-wordmark-family",
  display: "swap",
});

export const fontVariables = [
  fontDisplay.variable,
  fontBody.variable,
  fontMono.variable,
  fontCta.variable,
  fontWordmark.variable,
].join(" ");