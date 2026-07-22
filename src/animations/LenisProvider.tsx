"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LenisProviderProps {
  children: ReactNode;
}

/**
 * Global smooth-scroll driver.
 *
 * Wires Lenis (PROJECT.md tech stack — previously installed but unused)
 * into GSAP's ticker, so ScrollTrigger-based reveals (animations/Reveal.tsx)
 * stay in sync with the smoothed scroll position instead of the raw
 * native scroll event.
 *
 * Respects prefers-reduced-motion (CLAUDE.md: "Reduced motion support")
 * by skipping Lenis entirely and leaving native scroll behavior in
 * place — smooth scroll is a stylistic layer, not something that should
 * override an explicit OS-level accessibility preference.
 *
 * Client Component — needs a raf loop. Mounted once in app/layout.tsx
 * so it wraps the whole tree.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function handleLenisScroll() {
      ScrollTrigger.update();
    }

    lenis.on("scroll", handleLenisScroll);

    function tick(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return function cleanup() {
      gsap.ticker.remove(tick);
      lenis.off("scroll", handleLenisScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}