import type { Metadata } from "next";
import { ServicesPage } from "@/services/ServicesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Architecture, Engineering & Construction Services | FAZAB",
  description:
    "Explore FAZAB's integrated architecture, engineering, surveying, construction, project delivery, property management and facility management services.",
});

export default function Services() {
  return <ServicesPage />;
}
