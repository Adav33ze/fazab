import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Exported (not just used internally) so components that need button
 * styling but can't render an actual `<Button>` — e.g. ContactMenu's
 * dropdown trigger, which needs its own onClick/aria-expanded wiring —
 * can still share this single source of truth instead of duplicating
 * the classes, per CLAUDE.md's "never duplicate components".
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-body font-medium uppercase tracking-wide",
    "rounded-md",
    "transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-standard",
    "focus-visible:outline-none focus-visible:shadow-focus",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        /**
         * Main CTA. Gets the full "activated" treatment on hover — a
         * slight lift plus the warm bronze glow from shadows.css's
         * `--shadow-lg` — so the site's highest-priority actions read
         * as tactile, not flat. Presses back down on click rather than
         * lifting further, for a grounded, confident feel (no bounce,
         * per DESIGN.md's Motion section).
         */
        primary:
          "bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
        /**
         * Same tactile lift as primary, but starts as an outline —
         * used where an accent-bordered CTA is wanted without
         * competing with a primary button beside it (e.g. Hero's
         * "Get in touch" next to "View projects").
         */
        accentOutline:
          "bg-transparent text-accent border border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
        /** Secondary actions — a gentle shadow on hover, no lift, so
         * primary/accentOutline visibly outrank it. */
        secondary:
          "bg-surface text-foreground border border-border hover:bg-background-secondary hover:shadow-sm",
        outline:
          "bg-transparent text-foreground border border-border hover:bg-surface hover:shadow-sm",
        ghost: "bg-transparent text-foreground hover:bg-surface hover:shadow-sm",
      },
      size: {
        sm: "h-9 px-4 text-caption",
        md: "h-11 px-6 text-body-sm",
        lg: "h-13 px-8 text-body-sm",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as the child element instead of a `<button>` (via Radix Slot).
   * Use when a link needs button styling, e.g. `asChild` + `next/link`,
   * to avoid nesting an interactive element inside another.
   */
  asChild?: boolean;
}

/**
 * Primary interactive control for the design system.
 *
 * Server Component friendly — no internal state or effects; `onClick`
 * and other handlers are passed through from whichever parent needs
 * client interactivity, so this component itself doesn't force a
 * "use client" boundary.
 *
 * @example
 * <Button variant="primary" size="lg">Get in touch</Button>
 * <Button asChild variant="accentOutline"><Link href="/projects">View work</Link></Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";