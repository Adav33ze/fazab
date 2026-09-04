import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/constants/navigation";
import contact from "@/data/contact.json";

export function Footer() {
  return (
    <footer className="bg-foreground py-10 text-background sm:py-14">
      <Container size="lg">
        <div className="grid gap-12 border-t border-background/30 pt-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/brand/fazab-logo.svg"
              alt="FAZAB"
              width={144}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-sm leading-6 text-background/70">
              A multidisciplinary practice delivering integrated solutions from concept to construction and ongoing property care.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-start gap-3 lg:col-span-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm underline decoration-transparent hover:decoration-current">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="lg:col-span-3">
            <p className="technical-label text-background/55">Project enquiries</p>
            <a href={`mailto:${contact.email}`} className="mt-4 block text-lg underline decoration-background/40 hover:decoration-background">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="mt-2 block text-lg underline decoration-background/40 hover:decoration-background">
              {contact.phone}
            </a>
          </div>

          <div className="lg:col-span-2 lg:text-right">
            <p className="technical-label text-background/55">Office</p>
            <p className="mt-4 text-sm">Abuja, Nigeria</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-background/20 pt-5 text-xs text-background/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} FAZAB International Limited</p>
          <p>Constructing possibilities. Redefining excellence.</p>
        </div>
      </Container>
    </footer>
  );
}
