import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * Homepage hero — the page's thesis statement.
 *
 * Copy sourced from fazab.md: the eyebrow is the real company identity
 * (Abuja, Nigeria — not an invented "international" locations list), the
 * headline is FAZAB's actual brand promise, and the subhead is close to
 * verbatim to fazab.md's own positioning statement. Kept to one sentence
 * per fazab.md's "Communication Style" (concise, no long introductions).
 *
 * Visual system (type scale, spacing, colors) is unchanged — that
 * remains governed by DESIGN.md, which fazab.md explicitly defers to.
 *
 * Server Component — zero client JS for the heaviest visual moment on
 * the page.
 */
export function Hero() {
  return (
    <Section aria-labelledby="hero-heading">
      <Container size="lg" className="flex min-h-[85vh] flex-col justify-between">
        <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
          FAZAB International Limited — Abuja, Nigeria
        </p>

        <div className="flex flex-col gap-block max-w-4xl">
          <h1
            id="hero-heading"
            className="font-display text-display-2 lg:text-display-1 font-medium text-foreground"
          >
            Constructing Possibilities. Redefining Excellence.
          </h1>

          <p className="font-body text-body-lg text-foreground-muted max-w-xl">
            A multidisciplinary design and construction practice,
            headquartered in Abuja — delivering integrated solutions from
            concept to completion.
          </p>
        </div>

        <p
          aria-hidden="true"
          className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted self-end"
        >
          ↓ Our Work
        </p>
      </Container>
    </Section>
  );
}
