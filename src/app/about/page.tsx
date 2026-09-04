import type { Metadata } from "next";
import { AboutPage } from "@/features/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet FAZAB International Limited, an integrated architecture, construction, project delivery and technical practice established in Abuja in 1998.",
};

export default function Page() {
  return <AboutPage />;
}
