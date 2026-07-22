"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/constants/navigation";
import { MobileMenu } from "@/features/shared/MobileMenu";
import { cn } from "@/lib/utils";

/**
 * Primary site navigation.
 *
 * Client Component (previously a Server Component) — converting was
 * necessary to read scroll position for the transparent-over-hero →
 * solid-on-scroll treatment, and the current route for the active-link
 * indicator below. Everything else here is still static markup.
 *
 * Positioned `fixed` rather than `sticky` so it can sit transparently
 * over Hero.tsx's full-bleed image (see that file's matching
 * `-mt-[4.5rem]`, which pulls the hero section up under this bar) and
 * over app/layout.tsx's `pt-[4.5rem]` on <main>, which restores the
 * header's height as real document flow space on every other page.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function isLinkActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[4.5rem] border-b transition-colors duration-base ease-standard",
        isScrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container size="lg" className="flex h-full items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="FAZAB home">
          <Image
            src="/brand/fazab-logo.svg"
            alt="FAZAB"
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-heading text-body-sm uppercase tracking-wide transition-colors duration-fast ease-standard hover:text-foreground",
                  active ? "text-accent" : "text-foreground-muted",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}