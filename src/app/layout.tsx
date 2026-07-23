import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Inter } from "next/font/google";
import { Navbar } from "@/features/shared/Navbar";
import { Footer } from "@/features/shared/Footer";
import { LenisProvider } from "@/animations/LenisProvider";
import "./globals.css";

/**
 * Font loading.
 *
 * `variable` names below must match exactly what typography.css expects
 * (see that file's comments) — this is the one place those tokens get
 * populated with real font files instead of their system-font fallbacks.
 *
 * Cormorant Garamond carries display/heading roles (hero titles,
 * section headings, quotes, luxury branding); Inter carries body text,
 * navigation, buttons and UI elements — the classic pairing of one
 * editorial serif for statement moments and one clean grotesk for the
 * interface. Geist Mono remains for captions/labels/numerals.
 */

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    "FAZAB International Limited — a multidisciplinary design and construction practice headquartered in Abuja, Nigeria, delivering architecture, construction and project management from concept to completion.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body>
        <LenisProvider>
          <Navbar />
          <main className="pt-[4.5rem]">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}