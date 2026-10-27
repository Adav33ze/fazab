import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["/", "/services", "/projects", "/about", "/contact"].map(path => ({ url: canonicalUrl(path) })),
    ...PROJECTS.map(project => ({ url: canonicalUrl(`/projects/${project.slug}`) })),
  ];
}
