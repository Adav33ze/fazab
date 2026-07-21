import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/navigation";
import { MobileMenu } from "@/features/shared/MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[4.5rem] border-b border-border bg-background">
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-body-sm uppercase tracking-wide text-foreground-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="secondary" size="sm">
            <Link href="/contact">Enquire</Link>
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}