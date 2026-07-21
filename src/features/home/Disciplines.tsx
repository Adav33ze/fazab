import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface Discipline {
  readonly name: string;
  readonly description: string;
}

/**
 * FAZAB's four real service pillars, per fazab.md → "Core Capabilities".
 * Names and descriptions are used close to verbatim — fazab.md's
 * "Service Communication" rule explicitly asks for broad capability
 * framing (outcomes) rather than an exhaustive task list, and these
 * descriptions already do that job, so there's no reason to rephrase.
 *
 * Kept out of a data file (unlike projects.ts) since this list is fixed
 * by the practice's actual scope, not editorial content that changes.
 */
const DISCIPLINES: readonly Discipline[] = [
  {
    name: "Architecture & Design",
    description:
      "Creating thoughtful architectural and spatial solutions that balance functionality, aesthetics and long-term value.",
  },
  {
    name: "Construction & Infrastructure",
    description:
      "Delivering residential, commercial and institutional projects with technical excellence, quality workmanship and safe execution.",
  },
  {
    name: "Project Delivery",
    description:
      "Managing projects from planning through completion with strong coordination, quality assurance and cost control.",
  },
  {
    name: "Surveying & Technical Services",
    description:
      "Providing specialist technical expertise that supports informed decision-making throughout the project lifecycle.",
  },
];

/**
 * Core Capabilities — the services section.
 *
 * A four-column typographic list with hairline top-rules, not four
 * bordered feature cards. Each pillar is a heading-weight name, not an
 * icon-topped box — hierarchy from type/space, per DESIGN.md → "UI".
 *
 * Server Component — hover accent below is pure CSS.
 */
export function Disciplines() {
  return (
    <Section background="secondary" aria-labelledby="disciplines-heading">
      <Container size="lg">
        <h2
          id="disciplines-heading"
          className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted mb-block"
        >
          Core Capabilities
        </h2>

        <ul className="grid grid-cols-1 gap-block sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {DISCIPLINES.map((discipline) => (
            <li key={discipline.name} className="group border-t border-border pt-6">
              <p className="font-heading text-h3 font-medium text-foreground transition-colors duration-200 group-hover:text-accent">
                {discipline.name}
              </p>
              <p className="font-body text-body-sm text-foreground-muted mt-3">
                {discipline.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
