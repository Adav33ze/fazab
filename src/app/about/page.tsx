import type { Metadata } from "next";
import { AboutPage } from "@/features/about/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Our Architecture & Construction Practice | FAZAB",
  description:
    "Meet FAZAB International Limited, an integrated architecture, construction, project delivery and technical practice established in Abuja in 1998.",
});

export default function Page() {
  return <AboutPage />;
}
