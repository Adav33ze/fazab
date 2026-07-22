import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/animations/Reveal";

export function Position() {
  return (
    <Section background="secondary" aria-labelledby="position-heading">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-block lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-3">
            <h2
              id="position-heading"
              className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted"
            >
              Position
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-9 lg:col-start-4">
            <p className="font-display text-h2 lg:text-h1 font-medium leading-snug text-foreground">
              FAZAB has delivered architecture, construction and project
              management solutions since 1998, combining technical
              expertise with disciplined execution. We give clients a
              single, trusted partner from concept through completion.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}