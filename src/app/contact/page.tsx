import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import contact from "@/data/contact.json";

export default function Contact() {
  const enquiryHref = `mailto:${contact.email}?subject=Project%20enquiry`;

  return (
    <>
      <Section aria-labelledby="contact-heading">
        <Container
          size="lg"
          className="flex min-h-[70vh] flex-col justify-between gap-section-mobile lg:gap-section-desktop"
        >
          <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
            {contact.eyebrow}
          </p>

          <div className="max-w-5xl">
            <h1
              id="contact-heading"
              className="font-display text-display-2 font-medium text-foreground lg:text-display-1"
            >
              {contact.heading}
            </h1>
          </div>

          <p className="max-w-xl font-body text-body-lg text-foreground-muted">
            {contact.introduction}
          </p>
        </Container>
      </Section>

      <Section background="secondary" aria-labelledby="contact-details-heading">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-block lg:grid-cols-12 lg:gap-x-8">
            <h2
              id="contact-details-heading"
              className="font-mono text-caption uppercase tracking-[0.2em] text-accent lg:col-span-3"
            >
              Contact details
            </h2>

            <div className="flex flex-col divide-y divide-border border-t border-border lg:col-span-8 lg:col-start-5">
              <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display text-h3 text-foreground transition-colors duration-200 hover:text-accent"
                >
                  {contact.email}
                </a>
              </div>

              {contact.phone && (
                <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
                    Phone
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="font-display text-h3 text-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {contact.phone}
                  </a>
                </div>
              )}

              {contact.address && (
                <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
                    Office
                  </p>
                  <p className="font-body text-body text-foreground-muted">
                    {contact.address}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="enquire-heading">
        <Container size="lg">
          <div className="border-t border-border pt-6">
            <p className="font-mono text-caption uppercase tracking-[0.2em] text-accent">
              Enquire
            </p>

            <div className="mt-8 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2
                id="enquire-heading"
                className="max-w-3xl font-display text-h2 font-medium leading-snug text-foreground lg:text-h1"
              >
                Ready to begin? Tell us what you&apos;re planning.
              </h2>

              <a
                href={enquiryHref}
                className="inline-flex h-13 items-center justify-center bg-accent px-8 font-heading text-body-lg font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:shadow-focus"
              >
                Email FAZAB
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}