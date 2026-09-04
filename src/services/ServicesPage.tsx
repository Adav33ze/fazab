import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const SERVICES = [
  { name: "Architecture & Design", phase: "Define", copy: "Thoughtful architectural and spatial solutions that balance function, aesthetics and long-term value.", scope: "Architecture · Interior design · Planning · Documentation" },
  { name: "Surveying & Technical Services", phase: "Verify", copy: "Specialist technical expertise that supports informed decisions throughout the project lifecycle.", scope: "Surveying · Topographical investigation · Engineering support · Advisory" },
  { name: "Construction & Infrastructure", phase: "Build", copy: "Residential, commercial and institutional projects delivered with technical excellence, quality workmanship and safe execution.", scope: "Building construction · Civil works · Infrastructure · Renovation" },
  { name: "Project Delivery", phase: "Coordinate", copy: "Planning through completion with strong coordination, quality assurance and cost control.", scope: "Planning · Construction management · Procurement · Supervision" },
] as const;

export function ServicesPage() {
  return (
    <>
      <header className="drawing-field border-b border-foreground pt-20">
        <Container size="lg" className="grid min-h-[78svh] gap-12 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
          <h1 className="display-balance font-display text-[clamp(4.4rem,9vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.025em] lg:col-span-8">One project. One coordinated practice.</h1>
          <p className="max-w-sm border-t border-foreground pt-5 text-lg leading-7 lg:col-span-3 lg:col-start-10">Integrated expertise from concept through completion.</p>
        </Container>
      </header>

      <section className="border-b border-foreground bg-surface py-20 sm:py-28" aria-labelledby="services-list-heading">
        <Container size="lg">
          <div className="grid gap-8 border-b border-foreground pb-7 lg:grid-cols-12">
            <h2 id="services-list-heading" className="font-display text-5xl font-medium uppercase leading-none lg:col-span-5">The delivery register</h2>
            <p className="max-w-md text-sm leading-6 text-foreground-muted lg:col-span-4 lg:col-start-9">Each discipline has a distinct role. Their value compounds when decisions, documents and delivery remain connected.</p>
          </div>
          <ol>
            {SERVICES.map((service, index) => (
              <li key={service.name} className="grid gap-5 border-b border-border py-9 lg:grid-cols-12 lg:gap-8">
                <div className="flex gap-6 lg:col-span-2">
                  <span className="technical-label text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="technical-label">{service.phase}</span>
                </div>
                <h3 className="font-display text-4xl font-medium uppercase leading-[0.95] lg:col-span-4">{service.name}</h3>
                <p className="max-w-md text-base leading-7 text-foreground-muted lg:col-span-3">{service.copy}</p>
                <p className="text-sm leading-6 text-foreground-muted lg:col-span-3">{service.scope}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-foreground py-20 text-background">
        <Container size="lg" className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="display-balance font-display text-5xl font-medium uppercase leading-[0.92] sm:text-6xl lg:col-span-7">Bring the challenge. We will assemble the right disciplines.</h2>
          <Link href="/contact" className="inline-flex min-h-14 items-center justify-between border border-background px-5 font-semibold transition-colors hover:bg-background hover:text-foreground lg:col-span-3 lg:col-start-10">Discuss your requirements <ArrowRight aria-hidden="true" size={19} /></Link>
        </Container>
      </section>
    </>
  );
}
