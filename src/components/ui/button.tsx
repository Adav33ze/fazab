import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-heading font-medium",
    "rounded-md",
    "transition-colors duration-fast ease-standard",
    "focus-visible:outline-none focus-visible:shadow-focus",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
        secondary:
          "bg-surface text-foreground border border-border hover:bg-background-secondary",
        outline:
          "bg-transparent text-foreground border border-border hover:bg-surface",
        ghost: "bg-transparent text-foreground hover:bg-surface",
      },
      size: {
        sm: "h-9 px-4 text-body-sm",
        md: "h-11 px-6 text-body",
        lg: "h-13 px-8 text-body-lg",
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
 * <Button asChild variant="outline"><Link href="/projects">View work</Link></Button>
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
