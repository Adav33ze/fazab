import type { Metadata } from "next";
import { ProjectsPage } from "@/features/projects/ProjectsPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/projects",
  title: "Architecture & Construction Project Register | FAZAB",
  description:
    "Review the verified project register for FAZAB International Limited across architecture, construction and project delivery.",
});

export default function Projects() {
  return <ProjectsPage />;
}
