import type { Metadata } from "next";
import { Barlow_Condensed, Hanken_Grotesk } from "next/font/google";
import { Footer } from "@/features/shared/Footer";
import { Navbar } from "@/features/shared/Navbar";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display-loaded",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fazabinternational.com"),
  title: {
    default: "FAZAB International Limited",
    template: "%s · FAZAB",
  },
  description:
    "FAZAB is a multidisciplinary design and construction practice in Abuja, Nigeria, integrating architecture, construction, technical services and project delivery.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
