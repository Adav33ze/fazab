"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { DURATION, EASE } from "@/constants/motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Wraps route content in a restrained fade + 8px rise on navigation.
 * Uses gsap.context for scoped, auto-cleaned animation — no bounce,
 * no slide/scale, per DESIGN.md's "cinematic, never distracting" motion
 * language.
 *
 * Mount this once, high in the tree (app/layout.tsx wraps {children} in
 * <main>). The `key={pathname}` forces a remount on route change, which
 * combined with useLayoutEffect re-triggers the reveal without a flash
 * of unstyled content.
 *
 * Reduced motion: globals.css's `@media (prefers-reduced-motion: reduce)`
 * block only zeroes out CSS transitions/animations — GSAP tweens run via
 * inline styles and ignore that media query entirely. This checks the
 * same preference directly and, if set, skips the tween and snaps
 * content straight to its final state instead.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.base,
          ease: EASE.enter,
        },
      );
    }, el);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div key={pathname} ref={containerRef}>
      {children}
    </div>
  );
}