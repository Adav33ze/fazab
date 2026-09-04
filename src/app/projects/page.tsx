import type { Metadata } from "next";
import { ProjectsPage } from "@/features/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Review the verified project register for FAZAB International Limited across architecture, construction and project delivery.",
};

export default function Projects() {
  return <ProjectsPage />;
}
