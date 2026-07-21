import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/navigation";
import { MobileMenu } from "@/features/shared/MobileMenu";

/**
 * Site navbar — wordmark, desktop links, and the mobile menu toggle.
 *
 * Server Component: everything here is static markup. The only
 * interactive piece (the mobile hamburger + panel) is isolated in
 * MobileMenu.tsx so this component ships no client JS of its own.
 *
 * Height is fixed at 4.5rem (h-[4.5rem]) and MobileMenu.tsx's panel
 * offset is hand-matched to it — if this height changes, update both.
 *
 * No active-link highlighting yet (would require reading the current
 * pathname, which forces a client boundary) — a reasonable next
 * enhancement once there's more than one real route to highlight.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[4.5rem] border-b border-border bg-background">
      <Container size="lg" className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="font-display text-h4 font-medium text-foreground transition-colors duration-200 hover:text-accent"
        >
          FAZAB
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
