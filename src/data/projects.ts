/**
 * Selected Work — the project index shown on the homepage.
 *
 * fazab.md documents FAZAB's real capabilities and industries served
 * (Residential, Commercial, Corporate, Hospitality, Institutional,
 * Government, Infrastructure) but contains no actual project list. The
 * entries below are invented for this brief — specific Nigerian
 * locations and plausible project types across those real industries —
 * standing in for actual case studies. Replace with real commissions as
 * they're available; keep the shape so SelectedWork.tsx doesn't change.
 *
 * `year` is real chronological data, not a decorative 01/02/03 index —
 * it's what orders and labels the list in SelectedWork.tsx.
 */
export interface Project {
  readonly name: string;
  readonly location: string;
  readonly discipline: string;
  readonly year: number;
}

export const PROJECTS: readonly Project[] = [
  {
    name: "Gwarinpa Residences",
    location: "Abuja",
    discipline: "Architecture & Design",
    year: 2024,
  },
  {
    name: "Trade Fair Complex Redevelopment",
    location: "Lagos",
    discipline: "Construction & Infrastructure",
    year: 2023,
  },
  {
    name: "Enugu State Civic Centre",
    location: "Enugu",
    discipline: "Project Delivery",
    year: 2022,
  },
  {
    name: "Kaduna Ring Road Upgrade",
    location: "Kaduna",
    discipline: "Construction & Infrastructure",
    year: 2021,
  },
  {
    name: "Lakowe Hospitality Suites",
    location: "Lakowe, Lagos",
    discipline: "Architecture & Design",
    year: 2020,
  },
  {
    name: "Regional Corporate Headquarters",
    location: "Abuja",
    discipline: "Project Delivery",
    year: 2019,
  },
] as const;
