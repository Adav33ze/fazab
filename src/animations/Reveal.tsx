"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DURATION, EASE } from "@/constants/motion";

type RevealTag = "div" | "section" | "li" | "article" | "span";

interface RevealProps {
  children: ReactNode;
  /** HTML tag to render. Defaults to `div`. */
  as?: RevealTag;
  /** Stagger delay in seconds, for revealing a group of siblings in sequence. */
  delay?: number;
  /** Distance the element travels upward as it reveals, in pixels. */
  distance?: number;
  className?: string;
}

/**
 * Scroll-triggered reveal — fades and lifts children into place as they
 * enter the viewport.
 *
 * Uses the same DURATION/EASE values as every other animation layer
 * (constants/motion.ts), so scroll reveals read as part of one calm,
 * cinematic motion language rather than a bolted-on scroll library
 * default. Deliberately subtle per DESIGN.md's "Motion" section: a
 * short opacity/translate move, no scale, no rotation, no bounce.
 *
 * Respects prefers-reduced-motion by rendering children in their final
 * state immediately, with no animation.
 *
 * Client Component — needs ScrollTrigger and a DOM ref. Wrap individual
 * pieces (a heading, a row, a card) rather than an entire Section, so
 * each piece reveals independently.
 *
 * @example
 * <Reveal><h2>Selected Work</h2></Reveal>
 * <Reveal as="li" delay={index * 0.08}>{row}</Reveal>
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  distance = 24,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(function setupReveal() {
      gsap.fromTo(
        element,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.slow,
          delay,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return function cleanup() {
      context.revert();
    };
  }, [delay, distance]);

  return createElement(as, { ref, className }, children);
}