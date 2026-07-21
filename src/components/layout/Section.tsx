import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionBackground = "default" | "secondary" | "surface";

/** Background color per variant, using the layered surface tokens from colors.css. */
const BACKGROUND_CLASSES: Record<SectionBackground, string> = {
  default: "bg-background",
  secondary: "bg-background-secondary",
  surface: "bg-surface",
};

type SectionProps<T extends ElementType> = {
  /**
   * Element/component to render as. Defaults to `section`. Added so
   * landmark elements that need this same background/rhythm treatment -
   * e.g. Footer.tsx rendering a footer tag - don't have to duplicate the
   * background-class logic (mirrors Container.tsx's `as` pattern).
   */
  as?: T;
  /** Background depth, using the layered surface tokens. Defaults to `default`. */
  background?: SectionBackground;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Semantic landmark with consistent vertical rhythm (DESIGN.md:
 * "editorial rhythm") between major page sections. Renders as a
 * `section` tag by default; pass `as="footer"` etc. when a different
 * landmark role is correct.
 *
 * Server Component - no client JS required.
 *
 * Accessibility note: an `aria-label` or `aria-labelledby` (pointing at
 * this section's heading) is recommended whenever a section is a
 * meaningful navigation landmark, so assistive tech can announce it
 * distinctly. Not enforced by the type here - use judgment per usage.
 *
 * @example
 * <Section background="surface" aria-labelledby="services-heading">
 *   <h2 id="services-heading">Services</h2>
 * </Section>
 * <Section as="footer" background="secondary">...</Section>
 */
export function Section<T extends ElementType = "section">({
  as,
  background = "default",
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn(
        "py-section-mobile lg:py-section-desktop",
        BACKGROUND_CLASSES[background],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
