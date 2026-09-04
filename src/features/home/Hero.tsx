import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const PHASES = ["Architecture", "Technical", "Construction", "Handover"] as const;

export function Hero() {
  return (
    <section className="drawing-field relative min-h-[100svh] overflow-hidden border-b border-foreground pt-20">
      <Container size="lg" className="relative grid min-h-[calc(100svh-5rem)] grid-cols-1 gap-10 py-8 lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:py-10">
        <div className="hero-enter relative z-20 flex flex-col justify-center lg:col-span-8 lg:pr-8">
          <p className="max-w-md text-sm leading-6 text-foreground-muted">
            FAZAB International Limited brings design, technical expertise, construction and delivery under one disciplined standard of care.
          </p>
          <h1 className="display-balance mt-8 font-display text-[clamp(4.1rem,9vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.025em]">
            From first line<br />to final handover.
          </h1>
          <div className="relative mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span aria-hidden="true" className="absolute right-full top-7 h-px w-[100vw] bg-accent" />
            <Link
              href="/contact"
              className="relative inline-flex min-h-14 items-center gap-8 bg-signal px-6 text-sm font-semibold text-foreground transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
            >
              Discuss a project <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/projects" className="inline-flex min-h-12 items-center gap-3 text-sm font-semibold underline decoration-foreground/30 hover:decoration-foreground">
              Review selected work <ArrowDownRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>

        <figure className="registration-frame hero-enter relative min-h-[29rem] overflow-hidden border border-foreground bg-foreground lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:min-h-0 [animation-delay:120ms]">
          <Image
            src="/media/images/studies/structure-study.png"
            alt="Architectural structure in board-formed concrete under construction"
            fill
            priority
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 top-0 flex justify-between border-b border-white/50 bg-foreground/75 p-4 text-white">
            <span className="technical-label">FAZAB / Structure study</span>
            <span className="technical-label">Visual study</span>
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/50 bg-foreground/80 p-4 text-sm leading-5 text-white">
            Structure, alignment and material discipline.
          </figcaption>
        </figure>

        <div className="relative z-10 border-t border-foreground pt-5 lg:col-span-8">
          <div className="absolute -top-px left-0 h-px w-1/4 bg-accent" />
          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4">
            {PHASES.map((phase, index) => (
              <div key={phase} className="flex items-center gap-3">
                <span className={index === 0 ? "size-2 bg-accent" : "size-2 border border-foreground"} />
                <span className="technical-label">{phase}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[31%] hidden lg:block">
        <div className="ml-[7%] h-12 w-[58%] border border-accent/50 bg-accent/5" />
        <div className="ml-[13%] -mt-5 h-12 w-[54%] border border-foreground/25 bg-background/35" />
        <div className="ml-[18%] -mt-5 h-12 w-[50%] border border-signal/55 bg-signal/5" />
        <div className="ml-[23%] -mt-5 h-12 w-[46%] border border-foreground/35 bg-surface/35" />
      </div>
    </section>
  );
}
