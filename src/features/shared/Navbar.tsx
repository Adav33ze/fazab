"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/constants/navigation";
import { MobileMenu } from "@/features/shared/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 border-b transition-[background-color,border-color] duration-300",
        isScrolled ? "border-border bg-background" : "border-transparent bg-transparent",
      )}
    >
      <Container size="lg" className="grid h-full grid-cols-[1fr_auto] items-center lg:grid-cols-12">
        <Link href="/" aria-label="FAZAB home" className="w-fit lg:col-span-3">
          <Image
            src="/brand/fazab-logo.svg"
            alt="FAZAB"
            width={132}
            height={34}
            className="h-7 w-auto brightness-0"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center justify-center gap-8 lg:col-span-6 lg:flex">
          {NAV_LINKS.slice(0, 3).map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "technical-label border-b py-2 transition-colors",
                  active ? "border-accent text-accent" : "border-transparent text-foreground hover:border-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-end lg:col-span-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-5 border border-foreground px-4 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
          >
            Start a project <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
