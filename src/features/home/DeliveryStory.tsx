"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    name: "Architecture & Design",
    short: "Concept",
    copy: "Ideas become clear spatial decisions, coordinated drawings and a practical path forward.",
    detail: "Architecture · Interior design · Planning · Documentation",
  },
  {
    name: "Engineering & Surveying",
    short: "Project support",
    copy: "Built-environment professionals provide coordinated engineering, surveying and specialist support from site investigation through delivery.",
    detail: "Engineering support · Surveying · Site investigation · Technical coordination · Specialist advisory",
  },
  {
    name: "Construction & Infrastructure",
    short: "Execution",
    copy: "Design intent moves into disciplined site work, coordinated trades and durable delivery.",
    detail: "Building construction · Civil works · Infrastructure",
  },
  {
    name: "Project Delivery",
    short: "Handover",
    copy: "Planning, procurement, supervision and quality control keep the work accountable through completion.",
    detail: "Planning · Construction management · Procurement · Supervision",
  },
  {
    name: "Property & Facility Management",
    short: "Post-handover",
    copy: "After construction, we help owners operate, maintain and manage properties so performance and value continue beyond handover.",
    detail: "Property management · Real-estate management · Facility management · Maintenance coordination",
  },
] as const;

const OFFSETS = [
  "translate-x-4 sm:translate-x-12",
  "translate-x-3 sm:translate-x-8",
  "translate-x-2 sm:translate-x-6",
  "translate-x-1 sm:translate-x-4",
  "translate-x-0",
] as const;
const PROGRESS_WIDTHS = ["w-[20%]", "w-[40%]", "w-[60%]", "w-[80%]", "w-full"] as const;

export function DeliveryStory() {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers = stageRefs.current.map((element, index) => {
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveStage(index),
        { rootMargin: "-38% 0px -48% 0px", threshold: 0 },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <section className="border-b border-foreground bg-foreground text-background" aria-labelledby="delivery-heading">
      <Container size="lg" className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-0">
        <div className="lg:col-span-6">
          <div className="top-20 flex min-h-[calc(100svh-5rem)] flex-col justify-between py-12 lg:sticky lg:py-16">
            <h2 id="delivery-heading" className="display-balance max-w-xl font-display text-[clamp(3.4rem,6vw,5.7rem)] font-medium uppercase leading-[0.9] tracking-[-0.02em]">
              Five layers.<br />One delivery line.
            </h2>

            <div className="relative mt-14 border-y border-background/25 py-8" aria-hidden="true">
              <div className="absolute left-[22%] top-0 h-full w-px bg-background/30" />
              {STAGES.map((stage, index) => (
                <div
                  key={stage.name}
                  className={cn(
                    "delivery-layer relative mb-3 flex h-14 items-center border transition-[transform,background-color,border-color,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] last:mb-0",
                    index <= activeStage
                      ? index === STAGES.length - 1 && activeStage === STAGES.length - 1
                        ? "translate-x-0 border-signal bg-signal text-foreground opacity-100"
                        : "translate-x-0 border-accent bg-accent text-accent-foreground opacity-100"
                      : cn(OFFSETS[index], "border-background/25 bg-background/[0.03] opacity-50"),
                  )}
                >
                  <span className="technical-label w-[22%] px-4">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-semibold">{stage.short}</span>
                </div>
              ))}
              <div className={cn("delivery-progress absolute bottom-0 left-0 h-1 bg-signal transition-[width] duration-700", PROGRESS_WIDTHS[activeStage])} />
            </div>
          </div>
        </div>

        <div className="border-background/20 lg:col-span-5 lg:col-start-8 lg:border-l">
          {STAGES.map((stage, index) => (
            <article
              key={stage.name}
              ref={(node) => { stageRefs.current[index] = node; }}
              className="flex min-h-[62vh] flex-col justify-center border-t border-background/20 py-14 first:border-t-0 lg:min-h-[78vh] lg:px-10"
            >
              <p className="technical-label text-background/70">{String(index + 1).padStart(2, "0")} / {stage.short}</p>
              <h3 className="mt-6 font-display text-4xl font-medium uppercase leading-none sm:text-5xl">{stage.name}</h3>
              <p className="mt-7 max-w-md text-lg leading-7 text-background/80">{stage.copy}</p>
              <p className="mt-12 border-t border-background/20 pt-4 text-sm leading-6 text-background/70">{stage.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
