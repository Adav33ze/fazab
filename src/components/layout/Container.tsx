import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "full";

/** Max-width per size, chosen to suit different content types. */
const SIZE_CLASSES: Record<ContainerSize, string> = {
  /** Long-form text columns (article body, contact form) */
  sm: "max-w-3xl",
  /** Standard content width (most sections) */
  md: "max-w-5xl",
  /** Wide layouts (project grids, multi-column features) */
  lg: "max-w-7xl",
  /** No constraint — full-bleed imagery, edge-to-edge media */
  full: "max-w-none",
};

type ContainerProps<T extends ElementType> = {
  /** Element/component to render as. Defaults to `div`. */
  as?: T;
  /** Max-width variant. Defaults to `lg`. */
  size?: ContainerSize;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Centers content and applies the responsive horizontal gutter tokens
 * from `spacing.css` (DESIGN.md: "large margins, generous whitespace").
 *
 * Server Component — no client JS required.
 *
 * @example
 * <Container size="md" as="main">
 *   <h1>Page content</h1>
 * </Container>
 */
export function Container<T extends ElementType = "div">({
  as,
  size = "lg",
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full",
        "px-gutter-mobile sm:px-gutter-tablet lg:px-gutter-desktop",
        SIZE_CLASSES[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
