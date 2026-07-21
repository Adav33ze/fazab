import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const PRINCIPLES = [
  {
    label: "Established",
    value: "1998",
  },
  {
    label: "Headquartered",
    value: "Abuja, Nigeria",
  },
  {
    label: "Approach",
    value: "Integrated delivery",
  },
] as const;

export function AboutPage() {
  return (
    <>
      <Section aria-labelledby="about-heading">
        <Container
          size="lg"
          className="flex min-h-[70vh] flex-col justify-between gap-section-mobile lg:gap-section-desktop"
        >
          <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
            About FAZAB
          </p>

          <div className="max-w-5xl">
            <h1
              id="about-heading"
              className="font-display text-display-2 font-medium text-foreground lg:text-display-1"
            >
              Built on experience. Designed for what lasts.
            </h1>
          </div>

          <p className="max-w-xl font-body text-body-lg text-foreground-muted">
            FAZAB is a multidisciplinary design and construction practice
            delivering integrated solutions from concept through completion.
          </p>
        </Container>
      </Section>

      <Section background="secondary" aria-labelledby="practice-heading">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-block lg:grid-cols-12 lg:gap-x-8">
            <h2
              id="practice-heading"
              className="font-mono text-caption uppercase tracking-[0.2em] text-accent lg:col-span-3"
            >
              The practice
            </h2>

            <div className="flex flex-col gap-8 lg:col-span-8 lg:col-start-5">
              <p className="font-display text-h2 font-medium leading-snug text-foreground lg:text-h1">
                We bring architecture, construction and project delivery
                together under one disciplined standard of care.
              </p>

              <p className="max-w-2xl font-body text-body text-foreground-muted">
                Since 1998, FAZAB has combined technical expertise, practical
                experience and careful execution to deliver functional,
                durable and thoughtfully designed projects across Nigeria.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="principles-heading">
        <Container size="lg">
          <h2
            id="principles-heading"
            className="mb-block font-mono text-caption uppercase tracking-[0.2em] text-accent"
          >
            At a glance
          </h2>

          <dl className="grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.label}
                className="flex min-h-40 flex-col justify-between border-b border-border py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <dt className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
                  {principle.label}
                </dt>
                <dd className="font-display text-h2 font-medium text-foreground">
                  {principle.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section background="secondary" aria-labelledby="mission-heading">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-block lg:grid-cols-2 lg:gap-x-16">
            <div className="border-t border-border pt-6">
              <h2
                id="mission-heading"
                className="font-mono text-caption uppercase tracking-[0.2em] text-accent"
              >
                Mission
              </h2>
              <p className="mt-6 font-display text-h3 font-medium leading-snug text-foreground">
                To create lasting value through technical excellence,
                integrity and disciplined execution.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
                Vision
              </h2>
              <p className="mt-6 font-display text-h3 font-medium leading-snug text-foreground">
                To be one of Africa&apos;s most respected multidisciplinary
                design and construction practices.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}