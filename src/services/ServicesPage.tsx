import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const SERVICES = [
  { name: "Architecture & Design", phase: "Define", copy: "Thoughtful architectural and spatial solutions that balance function, aesthetics and long-term value.", scope: "Architecture · Interior design · Planning · Documentation" },
  { name: "Surveying, Engineering & Site Intelligence", phase: "Support", copy: "Built-environment professionals providing complete technical project support throughout the project lifecycle.", scope: "Engineering support · Surveying · Site investigation · Technical coordination · Specialist advisory" },
  { name: "Construction & Infrastructure", phase: "Build", copy: "Residential, commercial and institutional projects delivered with technical excellence, quality workmanship and safe execution.", scope: "Building construction · Civil works · Infrastructure · Renovation" },
  { name: "Project Delivery", phase: "Coordinate", copy: "Planning through completion with strong coordination, quality assurance and cost control.", scope: "Planning · Construction management · Procurement · Supervision" },
  { name: "Property & Facility Management", phase: "Sustain", copy: "Post-handover management that helps owners operate, maintain and protect the long-term value of completed properties.", scope: "Property management · Real-estate management · Facility management · Maintenance coordination" },
] as const;

export function ServicesPage() {
  return (
    <>
      <header className="drawing-field drawing-field-live border-b border-foreground pt-20">
        <Container size="lg" className="grid min-h-[78svh] gap-12 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
          <h1 className="display-balance font-display text-[clamp(4.4rem,9vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.025em] lg:col-span-8">One project. One coordinated practice.</h1>
          <p className="max-w-sm border-t border-foreground pt-5 text-lg leading-7 lg:col-span-3 lg:col-start-10">Integrated expertise from concept through occupation and ongoing operations.</p>
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
              <li key={service.name} className="group relative grid gap-5 overflow-hidden border-b border-border py-9 transition-colors duration-300 hover:bg-background lg:grid-cols-12 lg:gap-8">
                <div className="flex gap-6 lg:col-span-2">
                  <span className="technical-label text-accent transition-colors group-hover:text-signal">{String(index + 1).padStart(2, "0")}</span>
                  <span className="technical-label">{service.phase}</span>
                </div>
                <h3 className="font-display text-4xl font-medium uppercase leading-[0.95] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-accent lg:col-span-4">{service.name}</h3>
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
