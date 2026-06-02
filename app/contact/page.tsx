import type { Metadata } from "next";
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

const details = [
  { label: "Address", value: contactInfo.address },
  { label: "Phone", value: contactInfo.phone },
  { label: "Email", value: contactInfo.email },
  { label: "Working Hours", value: workingHours },
];

export default function ContactPage() {
  return (
    <section className="container-x section-y">
      {/* HERO */}
      <SectionHeading
        as="h1"
        title="Contact Us"
        subtitle="We're here to help you with any queries."
      />

      <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
        {/* OVERVIEW */}
        <p className="max-w-3xl text-text-muted">
          Whether you&apos;re a parent seeking admission details or want to know
          more, we are happy to assist you.
        </p>

        {/* CONTACT DETAILS */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d) => (
            <li key={d.label}>
              <Card interactive={false} className="h-full p-6">
                <h2 className="text-base font-bold">{d.label}</h2>
                <p className="mt-2 text-sm text-text-muted">{d.value}</p>
              </Card>
            </li>
          ))}
        </ul>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div id="enquiry-form" className="scroll-mt-24">
            <SectionHeading
              title="Send Us a Message"
              subtitle="Fill in the form and we'll get back to you."
              className="mb-6"
            />
            <ContactForm />
          </div>

          <div>
            <SectionHeading
              title="Find Us"
              subtitle="Visit our campus during working hours."
              className="mb-6"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-border">
              {/* TODO: replace with exact school map embed */}
              <iframe
                title="School location map"
                src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
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
