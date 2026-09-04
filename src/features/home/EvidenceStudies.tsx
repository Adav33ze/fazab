import Image from "next/image";
import { Container } from "@/components/layout/Container";

const STUDIES = [
  {
    src: "/media/images/studies/coordination-study.png",
    alt: "Layered translucent architectural drawings aligned with blue registration marks",
    label: "Coordination study",
    note: "Drawing layers aligned before work moves to site.",
    className: "lg:col-span-5 lg:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/media/images/home/fazab-hero-abuja-1.png",
    alt: "A construction site beneath tower cranes at dusk",
    label: "Site study",
    note: "Decisions made visible at construction scale.",
    className: "lg:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/media/images/studies/material-study.png",
    alt: "Precise junction of concrete, blackened steel and warm timber",
    label: "Material study",
    note: "Quality held at the junction, not added at the end.",
    className: "lg:col-span-5 lg:col-start-8",
    aspect: "aspect-[5/4]",
  },
] as const;

export function EvidenceStudies() {
  return (
    <section className="border-b border-foreground bg-background py-20 sm:py-28 lg:py-36" aria-labelledby="quality-heading">
      <Container size="lg">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 id="quality-heading" className="display-balance font-display text-[clamp(3.8rem,7vw,6rem)] font-medium uppercase leading-[0.88] tracking-[-0.025em] lg:col-span-8">
            Quality lives in the joins.
          </h2>
          <p className="max-w-sm text-base leading-7 text-foreground-muted lg:col-span-3 lg:col-start-10">
            Between an idea and a drawing. A drawing and a site. One material and the next. FAZAB’s integrated model is designed to hold those connections.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-12 lg:items-start">
          {STUDIES.map((study) => (
            <figure key={study.label} className={study.className}>
              <div className={`registration-frame group relative overflow-hidden border border-foreground bg-foreground ${study.aspect}`}>
                <Image
                  src={study.src}
                  alt={study.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                />
              </div>
              <figcaption className="mt-4 flex items-start justify-between gap-6 border-t border-border pt-3">
                <span className="technical-label text-accent">{study.label}</span>
                <span className="max-w-xs text-right text-sm leading-5 text-foreground-muted">{study.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-xs leading-5 text-foreground-muted">Architectural and material studies are illustrative visualizations, not published FAZAB project documentation.</p>
      </Container>
    </section>
  );
}
