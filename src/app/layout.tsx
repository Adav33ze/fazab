
import type { Metadata } from "next";
import { Barlow_Condensed, Hanken_Grotesk } from "next/font/google";

import { Footer } from "@/features/shared/Footer";
import { Navbar } from "@/features/shared/Navbar";
import { LifecycleRail } from "@/features/shared/LifecycleRail";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";

import {
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "@/lib/seo";

import contact from "@/data/contact.json";
import "./globals.css";

// Fonts
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

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },

  title: {
    default: DEFAULT_TITLE,
    template: "%s · FAZAB",
  },

  description: DEFAULT_DESCRIPTION,

  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

// Organization structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FAZAB International Limited",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/fazab-logo.svg`,
      email: contact.email,
      telephone: contact.phone,
      foundingDate: "1998",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressCountry: "NG",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "FAZAB International Limited",
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        {/* Structured Data */}
        <StructuredData data={structuredData} />

        {/* Main Navigation */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Project Lifecycle Rail */}
        <LifecycleRail />

        <Analytics />
      </body>
    </html>
  );
}
