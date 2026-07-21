import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * Position — a short statement of who FAZAB is.
 *
 * Previously a long single-paragraph manifesto; cut down to two short
 * sentences per fazab.md's "Communication Style" ("never write long
 * paragraphs," "avoid long introductions") and "Content Philosophy"
 * ("simplify, prioritise, curate — don't reproduce the company profile").
 * Content is a close paraphrase of fazab.md's own "About FAZAB" section,
 * not invented copy.
 *
 * The asymmetric label/paragraph split is a layout decision, unchanged —
 * that remains governed by DESIGN.md, which fazab.md defers to.
 *
 * Server Component — static copy, no interactivity.
 */
export function Position() {
  return (
    <Section background="secondary" aria-labelledby="position-heading">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-block lg:grid-cols-12 lg:gap-x-8">
          <h2
            id="position-heading"
            className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted lg:col-span-3"
          >
            Position
          </h2>

          <p className="font-display text-h2 lg:text-h1 font-medium leading-snug text-foreground lg:col-span-9 lg:col-start-4">
            FAZAB has delivered architecture, construction and project
            management solutions since 1998, combining technical
            expertise with disciplined execution. We give clients a
            single, trusted partner from concept through completion.
          </p>
        </div>
      </Container>
    </Section>
  );
}
