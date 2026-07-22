import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/animations/Reveal";
import { getProjectBySlug, PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | FAZAB",
    };
  }

  return {
    title: `${project.name} | FAZAB`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section aria-labelledby="project-heading">
        <Container size="lg" className="flex flex-col gap-section-mobile lg:gap-section-desktop">
          <Link
            href="/projects"
            className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted transition-colors duration-fast ease-standard hover:text-accent"
          >
            ← All projects
          </Link>

          <div className="grid grid-cols-1 gap-block lg:grid-cols-12 lg:gap-x-8">
            <Reveal className="lg:col-span-8">
              <h1
                id="project-heading"
                className="font-display text-display-2 font-medium text-foreground lg:text-display-1"
              >
                {project.name}
              </h1>
            </Reveal>

            <Reveal
              delay={0.1}
              as="div"
              className="lg:col-span-3 lg:col-start-10"
            >
              <dl className="flex flex-col gap-6 border-t border-border pt-6">
                <div>
                  <dt className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
                    Discipline
                  </dt>
                  <dd className="mt-2 font-body text-body text-foreground">
                    {project.discipline}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
                    Location
                  </dt>
                  <dd className="mt-2 font-body text-body text-foreground">
                    {project.location}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted">
                    Year
                  </dt>
                  <dd className="mt-2 font-body text-body text-foreground">
                    {project.year}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {project.image && (
        <Section background="secondary" aria-label={`${project.name} cover image`}>
          <Container size="lg">
            <Reveal distance={16}>
              <Image
                src={project.image}
                alt={project.imageAlt || project.name}
                width={1600}
                height={1000}
                priority
                className="aspect-[16/10] w-full object-cover"
              />
            </Reveal>
          </Container>
        </Section>
      )}

      <Section aria-labelledby="overview-heading">
        <Container size="md">
          <Reveal>
            <h2
              id="overview-heading"
              className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted"
            >
              Overview
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <p className="font-display text-h2 font-medium leading-snug text-foreground lg:text-h1">
              {project.description}
            </p>
          </Reveal>
        </Container>
      </Section>

      {project.gallery.length > 0 && (
        <Section background="secondary" aria-labelledby="gallery-heading">
          <Container size="lg">
            <Reveal as="div" className="mb-block">
              <h2
                id="gallery-heading"
                className="font-mono text-caption uppercase tracking-[0.2em] text-foreground-muted"
              >
                Gallery
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <Reveal key={image} delay={index * 0.08} distance={16}>
                  <Image
                    src={image}
                    alt={`${project.name} project image ${index + 1}`}
                    width={1200}
                    height={1500}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}