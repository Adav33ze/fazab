import projects from "./projects.json";

export interface Project {
  readonly name: string;
  readonly slug: string;
  readonly location: string;
  readonly discipline: string;
  readonly year: number;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly gallery: readonly string[];
}

export const PROJECTS: readonly Project[] = projects;

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}