import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/animations/Reveal";

/**
 * Closing CTA — the page's final beat.
 *
 * A direct, one-line call to action rather than repeating the brand
 * promise already used in Hero.tsx (fazab.md's "Communication Style"
 * explicitly lists repetition as something to avoid). Email address is
 * a placeholder — fazab.md documents the company's identity but not a
 * real contact address; swap for the real one before shipping.
 *
 * Server Component — a plain mailto link needs no client JS; Reveal (a
 * Client Component) handles the scroll-in animation.
 */
export function ClosingCta() {
  return (
    <Section aria-labelledby="closing-heading">
      <Container size="lg" className="flex flex-col gap-section-mobile lg:gap-16">
        <Reveal>
          <h2
            id="closing-heading"
            className="font-display text-display-2 font-medium leading-snug text-foreground max-w-3xl"
          >
            Speak with us about your next project.
          </h2>
        </Reveal>

        {/* Placeholder contact — replace with FAZAB's real address */}
        <Reveal delay={0.1}>
          <a
            href="mailto:info@fazabinternational.com"
            className="font-heading text-h3 text-accent underline decoration-transparent underline-offset-4 transition-colors duration-fast ease-standard hover:decoration-current w-fit"
          >
            info@fazabinternational.com
          </a>
        </Reveal>

        <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
          © {new Date().getFullYear()} FAZAB International Limited — Abuja, Nigeria
        </p>
      </Container>
    </Section>
  );
}