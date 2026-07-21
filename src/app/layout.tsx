import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

/**
 * Font loading.
 *
 * `variable` names below must match exactly what typography.css expects
 * (see that file's comments) — this is the one place those tokens get
 * populated with real font files instead of their system-font fallbacks.
 *
 * Body face is Instrument Sans, not Inter — the brief explicitly rules
 * out Inter/Roboto/system fonts, so this replaces the scaffold's default
 * without touching the `--font-body-loaded` variable name that
 * typography.css and every component built on top of it already expect.
 */

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display-loaded",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-heading-loaded",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAZAB",
  description:
    "FAZAB — an international multidisciplinary design practice specializing in architecture, interior design, construction, and visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${geist.variable} ${instrumentSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
