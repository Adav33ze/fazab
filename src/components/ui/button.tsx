import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-3 border px-5 font-body text-sm font-semibold transition-[background-color,color,border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary:
          "border-signal bg-signal text-foreground hover:-translate-y-0.5 hover:bg-foreground hover:border-foreground hover:text-background",
        accentOutline:
          "border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        secondary:
          "border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-accent-foreground",
        outline:
          "border-border bg-transparent text-foreground hover:border-foreground",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent-muted",
      },
      size: {
        sm: "min-h-10 px-4 text-xs",
        md: "min-h-12 px-5 text-sm",
        lg: "min-h-14 px-6 text-sm",
        icon: "size-12 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);

Button.displayName = "Button";
