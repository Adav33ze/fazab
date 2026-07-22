"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
 *
 * Focus management (WCAG 2.4.3 / 2.1.2): while open, Tab/Shift+Tab is
 * trapped within the toggle button and the panel's links, so keyboard
 * users can't tab into content underneath. Focus moves to the first
 * nav link on open and returns to the toggle button on close. Closed
 * panel content is also removed from the tab order and the accessibility
 * tree via tabIndex={-1} and aria-hidden, not just visually hidden via
 * opacity.
 */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, trap Tab within the menu, and don't let the page
  // scroll behind the open panel.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !containerRef.current) return;

      const focusable = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Move focus into the panel once it's rendered and visible.
    const firstLink = containerRef.current?.querySelector<HTMLElement>(
      "#mobile-menu a, #mobile-menu button",
    );
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      toggleButtonRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden" ref={containerRef}>
      <button
        ref={toggleButtonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-11 items-center justify-center text-foreground transition-colors duration-fast ease-standard hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
      >
        {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 flex flex-col justify-between bg-background px-gutter-mobile py-block transition-opacity duration-fast ease-standard ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="font-display text-h2 text-foreground transition-colors duration-fast ease-standard hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="lg" className="w-full" tabIndex={isOpen ? 0 : -1}>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Enquire
          </Link>
        </Button>
      </div>
    </div>
  );
}
