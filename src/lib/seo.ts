import type { Metadata } from "next";

export const SITE_URL = "https://www.fazab.com.ng";
export const DEFAULT_TITLE = "Architecture & Construction in Abuja | FAZAB";
export const DEFAULT_DESCRIPTION = "Architecture, engineering, surveying, construction and property management in Abuja, Nigeria. FAZAB coordinates projects from concept through ongoing asset care.";

export function canonicalUrl(path = "/") {
  const pathname = `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${pathname}`;
}

export function pageMetadata({ title, description, path, image }: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = canonicalUrl(path);
  const images = [{ url: new URL(image || "/social-preview.jpg", SITE_URL).href, alt: "FAZAB architecture and construction in Nigeria", ...(!image && { width: 1200, height: 630 }) }];
  return {
    title: { absolute: title }, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "FAZAB International Limited", type: "website", locale: "en_NG", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export function projectBreadcrumb(name: string, slug: string) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl() },
      { "@type": "ListItem", position: 2, name: "Projects", item: canonicalUrl("/projects") },
      { "@type": "ListItem", position: 3, name, item: canonicalUrl(`/projects/${slug}`) },
    ],
  };
}
