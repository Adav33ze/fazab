import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PROJECTS } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section aria-labelledby="selected-work-heading">
      <Container size="lg">
        <div className="mb-block flex items-baseline justify-between gap-block">
          <h2
            id="selected-work-heading"
            className="font-heading text-h2 font-medium text-foreground"
          >
            Selected Work
          </h2>

          {PROJECTS.length > 0 && (
            <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
              {PROJECTS[PROJECTS.length - 1].year}–{PROJECTS[0].year}
            </p>
          )}
        </div>

        <ol className="border-t border-border">
          {PROJECTS.map((project) => (
            <li key={project.slug} className="border-b border-border">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col gap-1 py-6 transition-colors duration-200 hover:bg-accent-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
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
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}