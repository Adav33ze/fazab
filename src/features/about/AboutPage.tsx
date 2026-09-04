import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const PRINCIPLES = [
  ["Integrated", "The disciplines meet before decisions become expensive."],
  ["Practical", "Design ambition is tested against real use, delivery and long-term value."],
  ["Disciplined", "Clear coordination, quality control and accountability shape the work."],
  ["Enduring", "The aim is work that remains useful, durable and considered over time."],
] as const;

export function AboutPage() {
  return (
    <>
      <header className="drawing-field drawing-field-live border-b border-foreground pt-20">
        <Container size="lg" className="grid min-h-[78svh] gap-12 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
          <h1 className="display-balance font-display text-[clamp(4.4rem,9vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.025em] lg:col-span-8">
            Built to carry responsibility.
          </h1>
          <div className="border-t border-foreground pt-5 lg:col-span-3 lg:col-start-10">
            <p className="text-lg leading-7">FAZAB International Limited</p>
            <p className="mt-4 text-sm leading-6 text-foreground-muted">Established in 1998 · Headquartered in Abuja, Nigeria</p>
          </div>
        </Container>
      </header>

      <section className="border-b border-foreground bg-surface py-20 sm:py-28">
        <Container size="lg" className="grid gap-12 lg:grid-cols-12">
          <p className="technical-label text-accent lg:col-span-3">The practice</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="display-balance font-display text-5xl font-medium uppercase leading-[0.94] sm:text-6xl">
              Design, engineering and delivery belong at the same table.
            </h2>
            <p className="measure mt-10 text-lg leading-8 text-foreground-muted">
              For more than two decades, FAZAB has delivered architecture, construction, project management, property management and facility management solutions across residential, commercial, institutional, hospitality and public-sector work. Its built-environment professionals also provide complete technical project support through surveying, engineering and site intelligence. The value is the ability to coordinate that breadth from project definition through ongoing operation.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-foreground py-20 sm:py-28" aria-labelledby="principles-heading">
        <Container size="lg">
          <div className="grid gap-8 border-b border-foreground pb-8 lg:grid-cols-12">
            <h2 id="principles-heading" className="font-display text-5xl font-medium uppercase leading-none lg:col-span-5">How the work is held</h2>
            <p className="max-w-sm text-sm leading-6 text-foreground-muted lg:col-span-4 lg:col-start-9">A calm process is not passive. It is the result of decisions made clearly, documented carefully and carried through.</p>
          </div>
          <dl className="grid sm:grid-cols-2">
            {PRINCIPLES.map(([term, description]) => (
              <div key={term} className="group border-b border-border py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
                <dt className="font-display text-3xl font-medium uppercase transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-accent">{term}</dt>
                <dd className="mt-4 max-w-md text-sm leading-6 text-foreground-muted">{description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-accent py-20 text-accent-foreground">
        <Container size="lg" className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="display-balance font-display text-5xl font-medium uppercase leading-[0.92] sm:text-6xl lg:col-span-7">The next project starts with a clear conversation.</h2>
          <Link href="/contact" className="inline-flex min-h-14 items-center justify-between border border-accent-foreground px-5 font-semibold transition-colors hover:bg-accent-foreground hover:text-accent lg:col-span-3 lg:col-start-10">
            Speak with FAZAB <ArrowRight aria-hidden="true" size={19} />
          </Link>
        </Container>
      </section>
    </>
  );
}
