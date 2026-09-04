import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import contact from "@/data/contact.json";

export const metadata: Metadata = { title: "Contact", description: "Start a project conversation with FAZAB International Limited in Abuja, Nigeria." };

export default function Contact() {
  const phone = contact.phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello FAZAB, I would like to discuss a project.")}`;
  const METHODS = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}?subject=Project%20enquiry`, icon: Mail },
    { label: "WhatsApp", value: contact.whatsapp, href: whatsappHref, icon: MessageCircle },
    { label: "Phone", value: contact.phone, href: `tel:${phone}`, icon: Phone },
  ] as const;

  return (
    <>
      <header className="drawing-field drawing-field-live border-b border-foreground pt-20">
        <Container size="lg" className="grid min-h-[72svh] gap-12 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
          <h1 className="display-balance font-display text-[clamp(4.4rem,9vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.025em] lg:col-span-8">Begin with the project in front of you.</h1>
          <p className="max-w-sm border-t border-foreground pt-5 text-lg leading-7 lg:col-span-3 lg:col-start-10">Share the brief, site, requirements or delivery challenge. We will connect you with the right FAZAB team.</p>
        </Container>
      </header>

      <section className="border-b border-foreground bg-surface py-20 sm:py-28" aria-labelledby="contact-methods-heading">
        <Container size="lg" className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 id="contact-methods-heading" className="font-display text-4xl font-medium uppercase leading-none">Direct lines</h2>
            <p className="mt-5 text-sm leading-6 text-foreground-muted">Choose the channel that suits the stage of your enquiry.</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            {METHODS.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target={label === "WhatsApp" ? "_blank" : undefined} rel={label === "WhatsApp" ? "noreferrer" : undefined} className="group grid gap-4 border-t border-border py-6 first:border-foreground sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                <Icon aria-hidden="true" size={20} />
                <div><span className="technical-label text-foreground-muted">{label}</span><span className="mt-2 block font-display text-2xl font-medium uppercase sm:text-3xl">{value}</span></div>
                <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
              </a>
            ))}
            <div className="grid gap-4 border-y border-border py-6 sm:grid-cols-[3rem_1fr] sm:items-center">
              <MapPin aria-hidden="true" size={20} />
              <div><span className="technical-label text-foreground-muted">Office</span><span className="mt-2 block font-display text-2xl font-medium uppercase sm:text-3xl">{contact.address}</span></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
