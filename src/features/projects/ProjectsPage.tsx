import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PROJECTS } from "@/data/projects";

export function ProjectsPage() {
  return (
    <>
      <header className="drawing-field drawing-field-live border-b border-foreground pt-20">
        <Container size="lg" className="grid min-h-[72svh] gap-12 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
          <h1 className="display-balance font-display text-[clamp(4.4rem,9vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.025em] lg:col-span-8">A register of work shaped with care.</h1>
          <p className="max-w-sm border-t border-foreground pt-5 text-sm leading-6 text-foreground-muted lg:col-span-3 lg:col-start-10">Verified project imagery and detailed case studies are being curated. Published records show only the information currently on file.</p>
        </Container>
      </header>

      <section className="border-b border-foreground bg-surface py-20 sm:py-28" aria-labelledby="project-register-heading">
        <Container size="lg">
          <div className="grid grid-cols-12 gap-4 border-b border-foreground pb-4">
            <h2 id="project-register-heading" className="technical-label col-span-5 sm:col-span-6">Project</h2>
            <span className="technical-label col-span-4 hidden sm:block">Discipline</span>
            <span className="technical-label col-span-7 text-right sm:col-span-2">Place / Year</span>
          </div>
          <ol>
            {PROJECTS.map((project, index) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group grid grid-cols-12 items-end gap-4 border-b border-border py-7 hover:border-foreground">
                  <span className="col-span-5 flex items-start gap-4 sm:col-span-6">
                    <span className="technical-label mt-1 text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-display text-2xl font-medium uppercase leading-none transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">{project.name}</span>
                  </span>
                  <span className="col-span-4 hidden text-sm text-foreground-muted sm:block">{project.discipline}</span>
                  <span className="col-span-7 flex items-center justify-end gap-5 text-right text-sm sm:col-span-2">{project.location} · {project.year}<ArrowUpRight aria-hidden="true" size={17} /></span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
