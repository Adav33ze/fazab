import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getProjectBySlug, getProjectDescription, PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: project.name, description: `${project.name}, ${project.location} — a FAZAB project record.` } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const gallery = (project.gallery ?? []).filter((image) => image.trim().length > 0);
  const description = getProjectDescription(project);

  return (
    <>
      <header className="drawing-field drawing-field-live border-b border-foreground pt-20">
        <Container size="lg" className="py-10 sm:py-14">
          <Link href="/projects" className="inline-flex items-center gap-3 text-sm font-semibold underline decoration-foreground/30 hover:decoration-foreground"><ArrowLeft aria-hidden="true" size={17} /> Project register</Link>
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h1 className="display-balance font-display text-[clamp(4rem,8vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.025em] lg:col-span-8">{project.name}</h1>
            <dl className="grid grid-cols-2 gap-6 border-t border-foreground pt-5 text-sm lg:col-span-3 lg:col-start-10">
              <div><dt className="technical-label text-foreground-muted">Location</dt><dd className="mt-2">{project.location}</dd></div>
              <div><dt className="technical-label text-foreground-muted">Year</dt><dd className="mt-2 tabular-nums">{project.year}</dd></div>
              <div className="col-span-2"><dt className="technical-label text-foreground-muted">Discipline</dt><dd className="mt-2">{project.discipline}</dd></div>
            </dl>
          </div>
        </Container>
      </header>

      {project.image ? (
        <figure className="relative min-h-[62svh] border-b border-foreground bg-foreground">
          <Image src={project.image} alt={project.imageAlt || project.name} fill priority sizes="100vw" className="object-cover" />
        </figure>
      ) : !description && gallery.length === 0 ? (
        <section className="border-b border-foreground bg-surface py-20 sm:py-28">
          <Container size="lg" className="grid gap-10 lg:grid-cols-12">
            <p className="technical-label text-accent lg:col-span-3">Record in preparation</p>
            <div className="lg:col-span-7 lg:col-start-5">
              <h2 className="font-display text-5xl font-medium uppercase leading-[0.94]">Project documentation is being curated.</h2>
              <p className="measure mt-8 text-lg leading-8 text-foreground-muted">Contact FAZAB for verified scope, delivery and project information.</p>
            </div>
          </Container>
        </section>
      ) : null}

      {description && (
        <section aria-labelledby="project-description-heading" className="border-b border-foreground bg-surface py-20 sm:py-28">
          <Container size="lg" className="grid gap-10 lg:grid-cols-12">
            <h2 id="project-description-heading" className="font-display text-5xl font-medium uppercase leading-[0.94] lg:col-span-4">About the project</h2>
            <p className="measure whitespace-pre-line break-words text-lg leading-8 text-foreground-muted lg:col-span-7 lg:col-start-6">{description}</p>
          </Container>
        </section>
      )}

      {gallery.length > 0 && (
        <section aria-labelledby="project-gallery-heading" className="border-b border-foreground py-20 sm:py-28">
          <Container size="lg">
            <h2 id="project-gallery-heading" className="font-display text-5xl font-medium uppercase leading-[0.94]">Project gallery</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {gallery.map((image, index) => (
                <figure key={`${image}-${index}`} className="relative aspect-[4/3] border border-foreground/20 bg-surface">
                  <Image
                    src={image}
                    alt={`${project.name} — project photograph ${index + 1}`}
                    fill
                    sizes="(min-width: 1600px) 724px, (min-width: 1280px) calc(50vw - 76px), (min-width: 1024px) calc(50vw - 60px), (min-width: 768px) calc(50vw - 44px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                    className="object-contain"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-accent py-16 text-accent-foreground">
        <Container size="lg" className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <h2 className="font-display text-4xl font-medium uppercase leading-none lg:col-span-7">Discuss a project with similar requirements.</h2>
          <Link href="/contact" className="inline-flex min-h-14 items-center justify-between border border-accent-foreground px-5 font-semibold hover:bg-accent-foreground hover:text-accent lg:col-span-3 lg:col-start-10">Start a conversation <ArrowRight aria-hidden="true" size={18} /></Link>
        </Container>
      </section>
    </>
  );
}
