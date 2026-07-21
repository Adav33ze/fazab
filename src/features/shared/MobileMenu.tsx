"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

/**
 * Mobile navigation — hamburger toggle + full-screen link panel.
 *
 * The only interactive piece of the nav, isolated into its own Client
 * Component so Navbar.tsx itself can stay a Server Component (CLAUDE.md:
 * "Client Components only when necessary" / "avoid unnecessary client
 * components"). Visible only below the `lg` breakpoint — Navbar.tsx
 * renders the desktop link row above that.
 *
 * Open/close animation is a plain CSS opacity/transform transition, not
 * GSAP or Framer Motion, per CLAUDE.md's motion hierarchy (CSS first);
 * it also automatically respects the `prefers-reduced-motion` rule
 * already set globally in globals.css.
 */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape, and don't let the page scroll behind the open panel.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-11 items-center justify-center text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
      >
        {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 flex flex-col justify-between bg-background px-gutter-mobile py-block transition-opacity duration-200 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-h2 text-foreground transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="lg" className="w-full">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Enquire
          </Link>
        </Button>
      </div>
    </div>
  );
}
