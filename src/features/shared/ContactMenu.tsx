"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";
import contact from "@/data/contact.json";

export function ContactMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = contact.whatsapp.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello FAZAB, I would like to discuss a project.",
  )}`;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="contact-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 items-center justify-center gap-2 bg-accent px-5 font-heading text-body-sm font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:shadow-focus"
      >
        Get in touch
        <ChevronDown
          aria-hidden="true"
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id="contact-menu"
          className="absolute bottom-full right-0 z-50 mb-3 flex w-56 flex-col border border-border bg-surface p-2 shadow-lg"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 font-body text-body-sm text-foreground transition-colors duration-200 hover:bg-accent-muted hover:text-accent"
          >
            <MessageCircle aria-hidden="true" size={18} />
            WhatsApp
          </a>

          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 font-body text-body-sm text-foreground transition-colors duration-200 hover:bg-accent-muted hover:text-accent"
          >
            <Phone aria-hidden="true" size={18} />
            Call us
          </a>

          <a
            href={`mailto:${contact.email}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 font-body text-body-sm text-foreground transition-colors duration-200 hover:bg-accent-muted hover:text-accent"
          >
            <Mail aria-hidden="true" size={18} />
            Email us
          </a>
        </div>
      )}
    </div>
  );
}