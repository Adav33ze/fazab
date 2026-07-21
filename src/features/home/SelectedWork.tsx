import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PROJECTS } from "@/data/projects";

/**
 * Selected Work — the homepage's signature element.
 *
 * A typographic ledger (name / location / year) rather than a photo card
 * grid. Deliberate: it reads as an architectural drawing register, keeps
 * the page fast (no imagery to load), and doesn't force placeholder
 * photography where FAZAB has no real project photos yet. Swap in
 * `next/image` per row once real photography exists — the data shape in
 * `src/data/projects.ts` already anticipates that.
 *
 * `year` orders the list and is displayed as the row's label — a real,
 * informative number, not a decorative 01/02/03 index.
 *
 * Server Component — hover state below is pure CSS, no client JS.
 */
export function SelectedWork() {
  return (
    <Section aria-labelledby="selected-work-heading">
      <Container size="lg">
        <div className="flex items-baseline justify-between gap-block mb-block">
          <h2
            id="selected-work-heading"
            className="font-heading text-h2 font-medium text-foreground"
          >
            Selected Work
          </h2>
          <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
            {PROJECTS[PROJECTS.length - 1].year}–{PROJECTS[0].year}
          </p>
        </div>

        <ol className="border-t border-border">
          {PROJECTS.map((project) => (
            <li key={project.name} className="group border-b border-border">
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="font-display text-h3 text-foreground transition-colors duration-200 group-hover:text-accent">
                  {project.name}
                </span>
                <span className="font-body text-body-sm text-foreground-muted sm:flex-1 sm:px-6">
                  {project.discipline}
                </span>
                <span className="font-body text-body-sm text-foreground-muted">
                  {project.location}
                </span>
                <span className="font-mono text-caption text-foreground-muted sm:w-12 sm:text-right">
                  {project.year}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
