import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { NAV_LINKS } from "@/constants/navigation";
import { ContactMenu } from "@/features/shared/ContactMenu";

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

            <p className="mt-2 font-body text-body-sm text-foreground-muted">
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
                className="font-heading text-body-sm text-foreground-muted transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
              Start a conversation
            </p>
            <ContactMenu />
          </div>
        </div>

        <p className="border-t border-accent/30 pt-6 font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
          © {new Date().getFullYear()} FAZAB International Limited — Abuja, Nigeria
        </p>
      </Container>
    </Section>
  );
}