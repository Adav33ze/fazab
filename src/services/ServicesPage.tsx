import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface Service {
  readonly number: string;
  readonly name: string;
  readonly description: string;
  readonly scope: readonly string[];
}

const SERVICES: readonly Service[] = [
  {
    number: "01",
    name: "Architecture & Design",
    description:
      "Thoughtful architectural and spatial solutions that balance function, beauty and long-term value.",
    scope: ["Architecture", "Interior Design", "Planning & Documentation"],
  },
  {
    number: "02",
    name: "Construction & Infrastructure",
    description:
      "Residential, commercial and institutional projects delivered with technical excellence, quality workmanship and safe execution.",
    scope: ["Building Construction", "Civil Works", "Infrastructure"],
  },
  {
    number: "03",
    name: "Project Delivery",
    description:
      "Disciplined delivery from planning through completion, with clear coordination, quality assurance and cost control.",
    scope: [
      "Project Planning",
      "Construction Management",
      "Project Supervision",
    ],
  },
  {
    number: "04",
    name: "Surveying & Technical Services",
    description:
      "Specialist technical expertise that supports informed decisions throughout the project lifecycle.",
    scope: ["Surveying", "Topographical Investigations", "Technical Advisory"],
  },
];

export function ServicesPage() {
  return (
    <>
      <Section aria-labelledby="services-heading">
        <Container
          size="lg"
          className="flex min-h-[70vh] flex-col justify-between gap-section-mobile lg:gap-section-desktop"
        >
          <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
            What we do
          </p>

          <div className="max-w-5xl">
            <h1
              id="services-heading"
              className="font-display text-display-2 font-medium text-foreground lg:text-display-1"
            >
              Integrated expertise from concept to completion.
            </h1>
          </div>

          <p className="max-w-xl font-body text-body-lg text-foreground-muted">
            We bring design, construction and project delivery together to
            create practical, enduring solutions with one trusted partner.
          </p>
        </Container>
      </Section>

      <Section background="secondary" aria-labelledby="capabilities-heading">
        <Container size="lg">
          <div className="mb-block grid grid-cols-1 gap-6 border-b border-border pb-6 lg:grid-cols-12 lg:items-end">
            <h2
              id="capabilities-heading"
              className="font-heading text-h2 font-medium text-foreground lg:col-span-8"
            >
              Core capabilities
            </h2>
            <p className="font-body text-body-sm text-foreground-muted lg:col-span-4">
              Four connected disciplines. One clear standard of delivery.
            </p>
          </div>

          <ol className="border-t border-border">
            {SERVICES.map((service) => (
              <li
                key={service.number}
                className="group grid grid-cols-1 gap-6 border-b border-border py-8 lg:grid-cols-12 lg:gap-x-8 lg:py-12"
              >
                <p className="font-mono text-caption text-accent lg:col-span-1">
                  {service.number}
                </p>

                <div className="lg:col-span-5">
                  <h3 className="font-display text-h2 font-medium text-foreground transition-colors duration-200 group-hover:text-accent">
                    {service.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-6 lg:col-span-6">
                  <p className="font-body text-body text-foreground-muted">
                    {service.description}
                  </p>
                  <ul
                    className="flex flex-wrap gap-x-4 gap-y-2"
                    aria-label={`${service.name} scope`}
                  >
                    {service.scope.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-caption uppercase tracking-[0.12em] text-foreground-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  );
}