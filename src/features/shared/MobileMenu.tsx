"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const trigger = triggerRef.current;
    const obscured = [main, footer].filter((node): node is HTMLElement => node instanceof HTMLElement);
    const focusable = () => [
      trigger,
      ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
    ].filter((node): node is HTMLElement => node instanceof HTMLElement);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    obscured.forEach((node) => node.setAttribute("inert", ""));
    menuRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      obscured.forEach((node) => node.removeAttribute("inert"));
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <div className="justify-self-end lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-12 items-center justify-center border border-foreground bg-background"
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>

      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className={`mobile-menu-panel fixed inset-0 top-20 z-40 drawing-field bg-background px-5 py-8 transition-[opacity,visibility] duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-between">
          <div className="flex flex-col border-t border-foreground">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center justify-between border-b border-border py-5 font-display text-4xl uppercase"
              >
                {link.label} <ArrowUpRight aria-hidden="true" size={24} />
              </Link>
            ))}
          </div>
          <p className="technical-label max-w-56 text-foreground-muted">
            Integrated design and construction · Abuja, Nigeria · Since 1998
          </p>
        </nav>
      </div>
    </div>
  );
}
