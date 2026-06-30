import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTAButton from "@/components/ui/CTAButton";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo } from "@/data/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "We're here to help you with any queries — reach out or visit us.",
  path: "/contact",
});

// TODO: real details
const workingHours = "Monday – Saturday, 9:00 AM – 4:00 PM";

// Derived, click-to-action links.
const phoneDigits = contactInfo.phone.replace(/\D/g, ""); // 7299926973
const phoneAltDigits = contactInfo.phoneAlt.replace(/\D/g, "").replace(/^0/, ""); // 4425923037
const phoneHref = `tel:+91${phoneDigits}`;
const phoneAltHref = `tel:+91${phoneAltDigits}`;
const emailHref = `mailto:${contactInfo.email}`;
// TODO: confirm which number is the WhatsApp line (defaults to primary mobile).
const whatsappHref = `https://wa.me/91${phoneDigits}?text=${encodeURIComponent(
  "Hello! I'd like to know more about Angels Babyland.",
)}`;

// Map embed + directions, pointed at the real campus address.
const mapQuery = encodeURIComponent(contactInfo.address);
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const linkClass = "transition-colors hover:text-accent-strong";

/** Minimal inline icons (no icon library in the project). */
function Icon({ name }: { name: "pin" | "phone" | "mail" | "clock" }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  switch (name) {
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.22.2 2.42.57 3.56a1 1 0 01-.24 1.01l-2.2 2.22z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-5v-2h3V7h2v6z" />
        </svg>
      );
  }
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.52 15.27L2 22l4.85-1.27A10 10 0 1012 2zm0 18.2a8.16 8.16 0 01-4.16-1.14l-.3-.18-2.88.76.77-2.81-.19-.29A8.2 8.2 0 1112 20.2z" />
      <path d="M17.5 14.4c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.07 4.88 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <section className="container-x section-y">
      {/* HERO */}
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Contact Us"
        subtitle="We're here to help you with any queries."
      />
      <p className="mx-auto mt-5 max-w-3xl text-center text-text-muted">
        Whether you&apos;re a parent seeking admission details or want to know
        more, we are happy to assist you.
      </p>

      <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
        {/* CONTACT DETAILS */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DetailCard icon={<Icon name="pin" />} label="Address">
            {contactInfo.address}
          </DetailCard>

          <DetailCard icon={<Icon name="phone" />} label="Phone">
            <a href={phoneHref} className={`block ${linkClass}`}>
              {contactInfo.phone}
            </a>
            <a href={phoneAltHref} className={`mt-1 block ${linkClass}`}>
              {contactInfo.phoneAlt}
            </a>
          </DetailCard>

          <DetailCard icon={<Icon name="mail" />} label="Email">
            <a href={emailHref} className={`break-all ${linkClass}`}>
              {contactInfo.email}
            </a>
          </DetailCard>

          <DetailCard icon={<Icon name="clock" />} label="Working Hours">
            {workingHours}
          </DetailCard>
        </ul>

        {/* WHATSAPP */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-4 rounded-[var(--radius-card)] border border-border bg-bg-alt p-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-text">
              <WhatsAppIcon />
            </span>
            <span>
              <span className="block font-bold">Chat with us on WhatsApp</span>
              <span className="block text-sm text-text-muted">
                Get a quick response to your queries.
              </span>
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-card)] bg-accent px-6 py-3 text-sm font-medium text-text transition-colors duration-200 hover:bg-accent-strong">
            Message us
          </span>
        </a>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div id="enquiry-form" className="scroll-mt-24">
            <SectionHeading
              align="center"
              flanked
              title="Send Us a Message"
              subtitle="Fill in the form and we'll get back to you."
              className="mb-6"
            />
            <ContactForm />
          </div>

          <div>
            <SectionHeading
              align="center"
              flanked
              title="Find Us"
              subtitle="Visit our campus during working hours."
              className="mb-6"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-border">
              <iframe
                title="School location map"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-2 text-sm font-medium text-text ${linkClass}`}
            >
              Get Directions
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5 12h12.17l-5.59 5.59L13 19l8-8-8-8-1.42 1.41L17.17 10H5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="rounded-[var(--radius-card)] border border-border bg-bg-alt p-10 text-center">
          <h2>Visit Our Campus</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-muted">
            Experience our learning environment and see how we nurture young
            minds.
          </p>
          <div className="mt-6">
            <CTAButton href="#enquiry-form">Get in Touch</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Centered info card with an accent icon badge. */
function DetailCard({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Card
        interactive={false}
        className="flex h-full flex-col items-center p-6 text-center"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-text">
          {icon}
        </span>
        <h2 className="mt-4 text-base font-bold">{label}</h2>
        <div className="mt-2 text-sm text-text-muted">{children}</div>
      </Card>
    </li>
  );
}
