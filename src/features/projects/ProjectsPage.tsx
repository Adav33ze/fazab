import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/animations/Reveal";
import { PROJECTS } from "@/data/projects";

export function ProjectsPage() {
  return (
    <>
      <Section aria-labelledby="projects-heading">
        <Container
          size="lg"
          className="flex min-h-[70vh] flex-col justify-between gap-section-mobile lg:gap-section-desktop"
        >
          <Reveal>
            <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
              Selected work
            </p>
          </Reveal>

          <Reveal delay={0.1} className="max-w-5xl">
            <h1
              id="projects-heading"
              className="font-display text-display-2 font-medium text-foreground lg:text-display-1"
            >
              Work defined by care, precision and lasting value.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl font-body text-body-lg text-foreground-muted">
              A selection of projects delivered across architecture,
              construction and project delivery.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section background="secondary" aria-labelledby="project-list-heading">
        <Container size="lg">
          <Reveal className="mb-block flex items-baseline justify-between gap-6">
            <h2
              id="project-list-heading"
              className="font-heading text-h2 font-medium text-foreground"
            >
              Projects
            </h2>

            {PROJECTS.length > 0 && (
              <p className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
                {PROJECTS[PROJECTS.length - 1].year}–{PROJECTS[0].year}
              </p>
            )}
          </Reveal>

          <ol className="border-t border-border">
            {PROJECTS.map((project, index) => (
              <Reveal
                key={project.slug}
                as="li"
                delay={index * 0.06}
                className="border-b border-border"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-1 gap-4 py-8 transition-colors duration-fast ease-standard hover:bg-accent-muted sm:grid-cols-12 sm:items-end sm:gap-x-8 lg:py-12"
                >
                  <p className="font-mono text-caption text-foreground-muted sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="sm:col-span-6">
                    {project.image && (
                      <div className="mb-6 overflow-hidden bg-surface">
                        <Image
                          src={project.image}
                          alt={project.imageAlt || project.name}
                          width={1200}
                          height={1500}
                          className="aspect-[4/5] w-full object-cover transition-transform duration-slow ease-cinematic group-hover:scale-[1.02]"
                        />
                      </div>
                    )}

                    <h3 className="font-display text-h2 font-medium text-foreground transition-colors duration-fast ease-standard group-hover:text-accent">
                      {project.name}
                    </h3>

                    <p className="mt-2 font-body text-body-sm text-foreground-muted">
                      {project.discipline}
                    </p>
                  </div>

                  <p className="font-body text-body-sm text-foreground-muted sm:col-span-3">
                    {project.location}
                  </p>

                  <p className="font-mono text-caption text-foreground-muted sm:col-span-2 sm:text-right">
                    {project.year}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  );
}