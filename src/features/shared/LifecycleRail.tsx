"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const PROGRESS_HEIGHTS = [
  "h-0",
  "h-[10%]",
  "h-[20%]",
  "h-[30%]",
  "h-[40%]",
  "h-[50%]",
  "h-[60%]",
  "h-[70%]",
  "h-[80%]",
  "h-[90%]",
  "h-full",
] as const;

const ROUTE_LABELS: Record<string, string> = {
  "/": "Full property lifecycle",
  "/services": "Integrated services",
  "/projects": "Project register",
  "/about": "The practice",
  "/contact": "Project enquiries",
};

export function LifecycleRail() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState(ROUTE_LABELS[pathname] ?? "FAZAB");

  useEffect(() => {
    let frame = 0;
    let observer: IntersectionObserver | null = null;
    const updateProgress = () => {
      frame = 0;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.round((window.scrollY / available) * 100) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    frame = window.requestAnimationFrame(updateProgress);
    window.addEventListener("scroll", onScroll, { passive: true });

    const timer = window.setTimeout(() => {
      setLabel(ROUTE_LABELS[pathname] ?? "FAZAB");
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main header, main section[aria-labelledby]"));
      const nextObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);
          const text = visible?.target.querySelector("h1, h2")?.textContent?.replace(/\s+/g, " ").trim();
          if (text) setLabel(text.slice(0, 38));
        },
        { rootMargin: "-16% 0px -76% 0px", threshold: 0 },
      );
      observer = nextObserver;
      sections.forEach((section) => nextObserver.observe(section));
    }, 0);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const progressStep = Math.min(10, Math.round(progress / 10));

  return (
    <aside aria-hidden="true" className="pointer-events-none fixed bottom-5 right-2 top-24 z-40 hidden w-6 flex-col items-center text-white mix-blend-difference md:flex">
      <span className="technical-label max-h-48 overflow-hidden [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">{label}</span>
      <span className="relative my-4 w-px flex-1 bg-white/35">
        <span className={cn("absolute left-0 top-0 w-px bg-white transition-[height] duration-300", PROGRESS_HEIGHTS[progressStep])} />
      </span>
      <span className="text-[0.68rem] font-semibold tabular-nums">{String(progress).padStart(2, "0")}%</span>
    </aside>
  );
}
