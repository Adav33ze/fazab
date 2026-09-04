import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Position() {
  return (
    <section className="border-b border-foreground bg-surface py-20 sm:py-28 lg:py-36" aria-labelledby="position-heading">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-3">
            <p className="technical-label text-accent">Established 1998 · Abuja</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-foreground-muted">
              Architecture, construction, project delivery, surveying and technical services—coordinated as one practice.
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 id="position-heading" className="display-balance font-display text-[clamp(3.2rem,6vw,5.6rem)] font-medium uppercase leading-[0.92] tracking-[-0.025em]">
              One line of accountability across the entire project.
            </h2>
            <div className="mt-12 grid gap-8 border-t border-border pt-6 sm:grid-cols-2">
              <p className="measure text-base leading-7 text-foreground-muted">
                Complex projects lose clarity at the joins. FAZAB brings the disciplines together early, so design intent, technical decisions and execution move in the same direction.
              </p>
              <Link href="/about" className="inline-flex items-start justify-between gap-6 border-b border-foreground pb-4 text-lg font-semibold hover:text-accent">
                Understand the practice <ArrowUpRight aria-hidden="true" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
