import projects from "./projects.json";

export interface Project {
  readonly name: string;
  readonly location: string;
  readonly discipline: string;
  readonly year: number;
}

export const PROJECTS: readonly Project[] = projects;