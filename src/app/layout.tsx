import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

/**
 * Font loading.
 *
 * `variable` names below must match exactly what typography.css expects
 * (see that file's comments) — this is the one place those tokens get
 * populated with real font files instead of their system-font fallbacks.
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

const inter = Inter({
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
      className={`${cormorantGaramond.variable} ${geist.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}