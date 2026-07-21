import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { NAV_LINKS } from "@/constants/navigation";

export function Footer() {
  return (
    <Section as="footer" background="secondary">
      <Container size="lg" className="flex flex-col gap-block">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link href="/" className="flex w-fit items-center" aria-label="FAZAB home">
              <Image
                src="/brand/fazab-logo.svg"
                alt="FAZAB"
                width={128}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="font-body text-body-sm text-foreground-muted mt-2">
              FAZAB International Limited
              <br />
              Abuja, Nigeria
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-body-sm text-foreground-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
              Contact
            </p>
            <a
              href="mailto:info@fazabinternational.com"
              className="font-body text-body-sm text-foreground-muted transition-colors duration-200 hover:text-accent mt-2 block w-fit"
            >
              info@fazabinternational.com
            </a>
          </div>
        </div>

        <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted border-t border-border pt-6">
          © {new Date().getFullYear()} FAZAB International Limited — Abuja, Nigeria
        </p>
      </Container>
    </Section>
  );
}