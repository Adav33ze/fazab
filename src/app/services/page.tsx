import type { Metadata } from "next";
import { ServicesPage } from "@/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore FAZAB's integrated architecture, engineering, surveying, construction, project delivery, property management and facility management services.",
};

export default function Services() {
  return <ServicesPage />;
}
