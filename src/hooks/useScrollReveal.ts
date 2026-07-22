"use client";

import { useInView } from "react-intersection-observer";
import { DURATION, EASE } from "@/constants/motion";

/**
 * Fade + 8px rise on scroll-into-view, triggered once. Uses
 * react-intersection-observer (already a dependency) rather than GSAP
 * ScrollTrigger, since the effect itself is a single fade+translate —
 * no need for a second scroll-animation library for this.
 *
 * Returns inline `style` (not Tailwind classes) because EASE.enter is a
 * JS cubic-bezier string interpolated into the transition shorthand at
 * runtime, from the same DURATION/EASE source of truth as motion.css.
 *
 * @example
 * const { ref, style } = useScrollReveal();
 * <div ref={ref} style={style}>...</div>
 */
export function useScrollReveal() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const style: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(8px)",
    transition: `opacity ${DURATION.base}s ${EASE.enter}, transform ${DURATION.base}s ${EASE.enter}`,
  };

  return { ref, style };
}
