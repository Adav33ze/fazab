import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Card — a surfaced container for grouped content (project entries,
 * service summaries, contact details).
 *
 * Composed from small sub-components rather than a single prop-heavy
 * component, so consumers only include what they need:
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Residential Tower</CardTitle>
 *     <CardDescription>Dubai, UAE — 2024</CardDescription>
 *   </CardHeader>
 *   <CardContent>...</CardContent>
 *   <CardFooter><Button>View project</Button></CardFooter>
 * </Card>
 *
 * All Server Components — no state or effects.
 */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface shadow-md",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-heading text-h4 font-medium text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("font-body text-body-sm text-foreground-muted", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-t border-border px-6 py-4",
        className,
      )}
      {...props}
    />
  );
}