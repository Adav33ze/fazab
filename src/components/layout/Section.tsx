import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionBackground = "default" | "secondary" | "surface";

/** Background color per variant, using the layered surface tokens from colors.css. */
const BACKGROUND_CLASSES: Record<SectionBackground, string> = {
  default: "bg-background",
  secondary: "bg-background-secondary",
  surface: "bg-surface",
};

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  /** Background depth, using the layered surface tokens. Defaults to `default`. */
  background?: SectionBackground;
  children: ReactNode;
}

/**
 * Semantic `<section>` landmark with consistent vertical rhythm
 * (DESIGN.md: "editorial rhythm") between major page sections.
 *
 * Server Component — no client JS required.
 *
 * Accessibility note: an `aria-label` or `aria-labelledby` (pointing at
 * this section's heading) is recommended whenever a section is a
 * meaningful navigation landmark, so assistive tech can announce it
 * distinctly. Not enforced by the type here, since not every section
 * (e.g. a purely decorative spacer) needs one — use judgment per usage.
 *
 * @example
 * <Section background="surface" aria-labelledby="services-heading">
 *   <h2 id="services-heading">Services</h2>
 * </Section>
 */
export function Section({
  background = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-section-mobile lg:py-section-desktop",
        BACKGROUND_CLASSES[background],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
