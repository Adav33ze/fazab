import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return <Container size="lg" className="pt-40 pb-28 min-h-[75svh]">
    <h1 className="font-display text-6xl uppercase font-medium leading-none">This page is not on the plan.</h1>
    <p className="mt-8 max-w-xl text-foreground-muted leading-7">404 — This address may have changed. Explore our work or contact the team to find what you need.</p>
    <nav aria-label="Find your next page" className="mt-10 flex flex-wrap gap-8 font-semibold underline">
      <Link prefetch={false} href="/">Home</Link>
      <Link prefetch={false} href="/projects">Projects</Link>
      <Link prefetch={false} href="/services">Services</Link>
      <Link prefetch={false} href="/contact">Contact</Link>
    </nav>
  </Container>;
}
