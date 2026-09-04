import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const CAPABILITIES = [
  ["Architecture & Design", "Thoughtful spaces, coordinated drawings, and enduring value."],
  ["Construction & Infrastructure", "Quality workmanship, safe execution, and durable outcomes."],
  ["Project Delivery", "Clear planning, coordination, quality assurance, and cost control."],
  ["Engineering & Surveying", "Complete technical project support, site intelligence, and specialist coordination."],
  ["Property & Facility Management", "Ongoing management, maintenance coordination, and care after handover."],
] as const;

export function Disciplines() {
  return (
    <section className="border-b border-foreground bg-surface py-20 sm:py-28" aria-labelledby="capabilities-heading">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <h2 id="capabilities-heading" className="display-balance font-display text-5xl font-medium uppercase leading-[0.92] sm:text-6xl lg:col-span-4">
            Expertise that moves together.
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-foreground">
              {CAPABILITIES.map(([name, description], index) => (
                <li key={name} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1fr] sm:gap-6">
                  <span className="technical-label text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-medium uppercase leading-none">{name}</h3>
                  <p className="text-sm leading-6 text-foreground-muted">{description}</p>
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-8 inline-flex items-center gap-10 border-b border-foreground pb-3 font-semibold hover:text-accent">
              Explore every capability <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
