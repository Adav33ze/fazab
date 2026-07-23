import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ContactMenu } from "@/features/shared/ContactMenu";
import { Reveal } from "@/animations/Reveal";
import { RevealImage } from "@/animations/RevealImage";
import home from "@/data/home.json";

export function Hero() {
  return (
    <Section
      aria-labelledby="hero-heading"
      className="relative -mt-[4.5rem] overflow-hidden"
    >
      {home.heroImage && (
        <>
          <RevealImage
            src={home.heroImage}
            alt={home.heroImageAlt}
            fill
            priority
            sizes="100vw"
            containerClassName="absolute inset-0"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/65" />
        </>
      )}

      <Container
        size="lg"
        className="relative flex min-h-[85vh] flex-col justify-between"
      >
        <Reveal>
          <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
            {home.eyebrow}
          </p>
        </Reveal>

        <div className="flex max-w-4xl flex-col gap-block">
          <Reveal delay={0.1}>
            <h1
              id="hero-heading"
              className="font-display text-display-2 font-medium text-foreground lg:text-display-1"
            >
              {home.heading}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl font-body text-body-lg text-foreground-muted">
              {home.introduction}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">View projects</Link>
              </Button>

              <ContactMenu variant="outline-accent" size="lg" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="self-end">
          <Link
            href="/projects"
            className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted transition-colors duration-fast ease-standard hover:text-accent"
          >
            ↓ View work
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}