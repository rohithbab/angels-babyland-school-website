import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { contactInfo } from "@/data/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Angels Baby Land — address, phone and email.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out or visit our campus."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card interactive={false} className="p-6">
          <h3 className="text-base font-bold">Address</h3>
          <p className="mt-2 text-sm text-text-muted">{contactInfo.address}</p>
        </Card>
        <Card interactive={false} className="p-6">
          <h3 className="text-base font-bold">Phone</h3>
          <p className="mt-2 text-sm text-text-muted">{contactInfo.phone}</p>
        </Card>
        <Card interactive={false} className="p-6">
          <h3 className="text-base font-bold">Email</h3>
          <p className="mt-2 text-sm text-text-muted">{contactInfo.email}</p>
        </Card>
      </div>

      <div className="mt-8 rounded-[var(--radius-card)] border border-dashed border-border bg-bg-alt p-8 text-sm text-text-muted">
        Contact form, working hours and embedded map are added in Phase 3.
      </div>
    </section>
  );
}
