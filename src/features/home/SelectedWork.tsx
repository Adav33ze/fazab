import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PROJECTS } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="border-b border-foreground bg-background py-20 sm:py-28 lg:py-36" aria-labelledby="selected-work-heading">
      <Container size="lg">
        <div className="grid gap-8 border-b border-foreground pb-8 lg:grid-cols-12">
          <h2 id="selected-work-heading" className="font-display text-6xl font-medium uppercase leading-none lg:col-span-6">Selected work</h2>
          <p className="max-w-md text-sm leading-6 text-foreground-muted lg:col-span-4 lg:col-start-9">
            Project records are being prepared for publication. The current register preserves verified names, disciplines, locations and dates without inventing scope.
          </p>
        </div>

        <ol>
          {PROJECTS.slice(0, 4).map((project, index) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid gap-3 border-b border-border py-7 transition-colors hover:border-foreground sm:grid-cols-12 sm:items-end sm:gap-6"
              >
                <span className="technical-label text-accent sm:col-span-1">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-3xl font-medium uppercase leading-none transition-transform duration-300 group-hover:translate-x-2 sm:col-span-5 sm:text-4xl">{project.name}</span>
                <span className="text-sm text-foreground-muted sm:col-span-3">{project.discipline}</span>
                <span className="flex items-center justify-between text-sm sm:col-span-3">
                  {project.location} · {project.year}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <Link href="/projects" className="mt-10 inline-flex min-h-12 items-center gap-10 border border-foreground px-5 font-semibold transition-colors hover:bg-foreground hover:text-background">
          Open the project register <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </Container>
    </section>
  );
}
