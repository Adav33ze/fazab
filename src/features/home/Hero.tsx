import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import home from "@/data/home.json";

export function Hero() {
  return (
    <Section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {home.heroImage && (
        <div className="absolute inset-0">
          <Image
            src={home.heroImage}
            alt={home.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/65" />
        </div>
      )}

      <Container
        size="lg"
        className="relative flex min-h-[85vh] flex-col justify-between"
      >
        <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
          {home.eyebrow}
        </p>

        <div className="flex max-w-4xl flex-col gap-block">
          <h1
            id="hero-heading"
            className="font-display text-display-2 font-medium text-foreground lg:text-display-1"
          >
            {home.heading}
          </h1>

          <p className="max-w-xl font-body text-body-lg text-foreground-muted">
            {home.introduction}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex h-13 items-center justify-center bg-accent px-8 font-heading text-body-lg font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:shadow-focus"
            >
              View projects
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-13 items-center justify-center border border-accent px-8 font-heading text-body-lg font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:shadow-focus"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <Link
          href="/projects"
          className="self-end font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted transition-colors duration-200 hover:text-accent"
        >
          ↓ View work
        </Link>
      </Container>
    </Section>
  );
}