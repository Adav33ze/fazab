import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const WORKSTREAMS = [
  ["Property management", "Coordinated care of completed real estate."],
  ["Facility management", "Ongoing oversight of spaces and day-to-day operations."],
  ["Maintenance coordination", "Planned and responsive after-construction support."],
  ["Asset care", "Decisions focused on performance and long-term value."],
] as const;

export function LivingBlueprint() {
  return (
    <section className="living-blueprint border-b border-foreground bg-accent py-20 text-accent-foreground sm:py-28 lg:py-36" aria-labelledby="living-blueprint-heading">
      <Container size="lg">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div className="lg:col-span-5">
            <h2 id="living-blueprint-heading" className="display-balance font-display text-[clamp(4rem,7.5vw,6rem)] font-medium uppercase leading-[0.87] tracking-[-0.025em]">
              The building keeps working. So do we.
            </h2>
            <p className="mt-9 max-w-md text-lg leading-8 text-accent-foreground/85">
              Handover changes the work; it does not end responsibility. FAZAB can remain with the asset—coordinating property operations, facilities, maintenance and the care required to keep it performing.
            </p>
            <Link href="/contact" className="mt-10 inline-flex min-h-14 items-center gap-10 border border-accent-foreground bg-accent-foreground px-5 font-semibold text-accent transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background">
              Discuss an existing property <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>

          <figure className="lg:col-span-7 lg:col-start-6" aria-labelledby="living-blueprint-caption">
            <div className="operation-field relative aspect-[4/5] overflow-hidden border border-accent-foreground/70 sm:aspect-square">
              <div className="absolute inset-x-5 top-5 z-20 flex justify-between border-b border-accent-foreground/50 pb-3">
                <span className="technical-label">Post-handover plan</span>
                <span className="technical-label">Asset in operation</span>
              </div>

              <svg aria-hidden="true" viewBox="0 0 800 800" className="absolute inset-0 size-full" fill="none">
                <path className="blueprint-path" pathLength="1" d="M90 120H710V680H90V120Z" />
                <path className="blueprint-path blueprint-path-delay-1" pathLength="1" d="M90 270H315V120M485 120V270H710M90 530H315V680M485 680V530H710" />
                <path className="blueprint-path blueprint-path-delay-2" pathLength="1" d="M315 270H485V530H315V270ZM200 270V420H315M600 270V420H485M200 530V420H90M600 530V420H710" />
                <path className="blueprint-path blueprint-path-delay-3" pathLength="1" d="M142 170H265V220H142V170ZM535 170H658V220H535V170ZM142 580H265V630H142V580ZM535 580H658V630H535V580Z" />
                <circle className="operation-dot" cx="315" cy="270" r="8" />
                <circle className="operation-dot operation-dot-delay-1" cx="485" cy="270" r="8" />
                <circle className="operation-dot operation-dot-delay-2" cx="315" cy="530" r="8" />
                <circle className="operation-dot operation-dot-delay-3" cx="485" cy="530" r="8" />
              </svg>

              <span aria-hidden="true" className="operation-scan absolute inset-x-0 top-0 z-10 h-px bg-signal" />

              <div className="operation-core absolute left-1/2 top-1/2 z-20 flex aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col justify-between bg-signal p-4 text-foreground sm:p-6">
                <span className="technical-label">Beyond handover</span>
                <span className="font-display text-3xl font-medium uppercase leading-[0.9] sm:text-5xl">In operation</span>
              </div>

              <span className="operation-node operation-node-1 absolute left-[6%] top-[19%] z-20">Property</span>
              <span className="operation-node operation-node-2 absolute right-[6%] top-[31%] z-20">Facilities</span>
              <span className="operation-node operation-node-3 absolute bottom-[25%] left-[6%] z-20">Maintenance</span>
              <span className="operation-node operation-node-4 absolute bottom-[16%] right-[6%] z-20">Asset care</span>

              <div className="absolute inset-x-5 bottom-5 z-20 flex items-end justify-between border-t border-accent-foreground/50 pt-3">
                <span className="technical-label">Occupy · Operate · Maintain</span>
                <span className="size-3 bg-signal" aria-hidden="true" />
              </div>
            </div>
            <figcaption id="living-blueprint-caption" className="mt-4 flex justify-between gap-6 border-t border-accent-foreground/50 pt-3 text-sm leading-5">
              <span className="technical-label">Living blueprint</span>
              <span className="max-w-sm text-right text-accent-foreground/85">The delivery line continues into the life of the property.</span>
            </figcaption>
          </figure>
        </div>

        <ul className="mt-16 grid border-t border-accent-foreground/60 sm:grid-cols-2 lg:grid-cols-4">
          {WORKSTREAMS.map(([name, description]) => (
            <li key={name} className="border-b border-accent-foreground/35 py-6 sm:px-6 sm:first:pl-0 sm:even:border-l lg:border-l lg:first:border-l-0 lg:first:pl-0">
              <span className="mb-6 block size-2 bg-signal" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium uppercase leading-none">{name}</h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-accent-foreground/85">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
