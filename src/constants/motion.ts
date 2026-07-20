/**
 * Motion constants
 *
 * Source: DESIGN.md / PROJECT.md → "Motion" (purposeful, elegant, smooth,
 * cinematic, never distracting; no gimmicks).
 *
 * These are plain TS values (not CSS custom properties) because GSAP and
 * Framer Motion both consume duration/easing as JavaScript, not CSS
 * strings. CSS transitions can still reference the same numbers by
 * importing this file in a Client Component, keeping every animation
 * layer — CSS, GSAP (later), Framer Motion (later) — in sync from one
 * source of truth.
 *
 * No bounce, no overshoot, no elastic easing — confident and calm,
 * per the brand language in DESIGN.md.
 */

/** Durations, in seconds (GSAP-native unit). Multiply by 1000 for ms. */
export const DURATION = {
  /** Micro-interactions: hover states, small UI feedback */
  fast: 0.2,
  /** Standard transitions: most UI state changes */
  base: 0.4,
  /** Deliberate, cinematic reveals: hero elements, section transitions */
  slow: 0.8,
  /** Large-scale page/scroll choreography */
  slowest: 1.2,
} as const;

/**
 * Cubic-bezier easing curves.
 * Format matches both CSS `cubic-bezier()` and GSAP's `ease` string syntax.
 */
export const EASE = {
  /** Default for most UI transitions — smooth, no overshoot */
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  /** Entrances — content arriving on screen */
  enter: "cubic-bezier(0.16, 1, 0.3, 1)",
  /** Exits — content leaving the screen */
  exit: "cubic-bezier(0.7, 0, 0.84, 0)",
  /** Emphasis — deliberate, editorial reveals (hero text, large imagery) */
  cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

/** Pre-built CSS transition strings for common properties. */
export const TRANSITION = {
  colors: `color ${DURATION.fast}s ${EASE.standard}, background-color ${DURATION.fast}s ${EASE.standard}, border-color ${DURATION.fast}s ${EASE.standard}`,
  opacity: `opacity ${DURATION.base}s ${EASE.standard}`,
  transform: `transform ${DURATION.base}s ${EASE.standard}`,
} as const;

export type Duration = keyof typeof DURATION;
export type Ease = keyof typeof EASE;