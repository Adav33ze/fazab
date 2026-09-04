import type { Metadata } from "next";
import { ServicesPage } from "@/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore FAZAB's integrated architecture, construction, project delivery, surveying and technical services.",
};

export default function Services() {
  return <ServicesPage />;
}
