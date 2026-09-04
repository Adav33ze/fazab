import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function ClosingCta() {
  return (
    <section className="bg-signal py-20 text-foreground sm:py-28" aria-labelledby="closing-heading">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <h2 id="closing-heading" className="display-balance font-display text-[clamp(4rem,8vw,6rem)] font-medium uppercase leading-[0.87] tracking-[-0.025em] lg:col-span-8">
            Bring the next project into focus.
          </h2>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="max-w-sm text-base leading-7 text-foreground">Share the brief, site, ambition or delivery challenge. FAZAB will connect you with the right team.</p>
            <Link href="/contact" className="mt-8 inline-flex min-h-14 w-full items-center justify-between border border-foreground bg-foreground px-5 font-semibold text-background transition-colors hover:bg-background hover:text-foreground">
              Start a conversation <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
