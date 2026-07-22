"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";
import contact from "@/data/contact.json";
import { cn } from "@/lib/utils";

type TriggerVariant = "primary" | "outline-accent";
type TriggerSize = "md" | "lg";

const TRIGGER_VARIANT_CLASSES: Record<TriggerVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
  "outline-accent":
    "border border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground",
};

const TRIGGER_SIZE_CLASSES: Record<TriggerSize, string> = {
  md: "h-11 gap-2 px-5 text-body-sm",
  lg: "h-13 gap-2 px-8 text-body-lg",
};

interface ContactMenuProps {
  variant?: TriggerVariant;
  size?: TriggerSize;
  label?: string;
  dropdownAlign?: "up" | "down";
  className?: string;
}

export function ContactMenu({
  variant = "primary",
  size = "md",
  label = "Get in touch",
  dropdownAlign = "down",
  className,
}: ContactMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const whatsappNumber = contact.whatsapp.replace(/\D/g, "");
  const whatsappHref =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent("Hello FAZAB, I would like to discuss a project.");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  const dropdownPositionClass =
    dropdownAlign === "up" ? "bottom-full mb-3" : "top-full mt-3";

  const chevronClass = isOpen
    ? "transition-transform duration-fast ease-standard rotate-180"
    : "transition-transform duration-fast ease-standard";

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center justify-center font-heading font-medium transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:shadow-focus",
          TRIGGER_VARIANT_CLASSES[variant],
          TRIGGER_SIZE_CLASSES[size],
          className,
        )}
      >
        {label}
        <ChevronDown aria-hidden="true" size={16} className={chevronClass} />
      </button>

      {isOpen && (
        <div
          id={menuId}
          className={cn(
            "absolute right-0 z-50 flex w-56 flex-col border border-border bg-surface p-2 shadow-lg",
            dropdownPositionClass,
          )}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 font-body text-body-sm text-foreground transition-colors duration-fast ease-standard hover:bg-accent-muted hover:text-accent"
          >
            <MessageCircle aria-hidden="true" size={18} />
            WhatsApp
          </a>

          <a
            href={"tel:" + contact.phone.replace(/\D/g, "")}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 font-body text-body-sm text-foreground transition-colors duration-fast ease-standard hover:bg-accent-muted hover:text-accent"
          >
            <Phone aria-hidden="true" size={18} />
            Call us
          </a>

          <a
            href={"mailto:" + contact.email}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 font-body text-body-sm text-foreground transition-colors duration-fast ease-standard hover:bg-accent-muted hover:text-accent"
          >
            <Mail aria-hidden="true" size={18} />
            Email us
          </a>
        </div>
      )}
    </div>
  );
}