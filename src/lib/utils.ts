import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utilities in favor
 * of the last one supplied.
 *
 * Every component in this design system should compose its class names
 * through `cn()` rather than string concatenation, so consumers can
 * safely override/extend styles via a `className` prop without
 * unpredictable specificity fights.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-accent", className)
 */
export function cn(...inputs: readonly ClassValue[]): string {
  return twMerge(clsx(inputs));
}