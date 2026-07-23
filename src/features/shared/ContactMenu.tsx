"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";
import contact from "@/data/contact.json";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TriggerVariant = "primary" | "outline-accent";
type TriggerSize = "md" | "lg";

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

  const triggerClassName = cn(
    buttonVariants({
      variant: variant === "outline-accent" ? "accentOutline" : "primary",
      size,
    }),
    className,
  );

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen(!isOpen)}
        className={triggerClassName}
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