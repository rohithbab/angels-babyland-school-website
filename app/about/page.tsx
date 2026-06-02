import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "About Angels Baby Land Matric Higher Secondary School.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="About Us"
        subtitle="Who we are, our vision and mission, and the people behind the school."
      />
      <div className="mt-10 rounded-[var(--radius-card)] border border-dashed border-border bg-bg-alt p-8 text-sm text-text-muted">
        About page content (Who We Are, Vision, Mission, Principal&apos;s
        Message, Infrastructure, Faculty) is added in Phase 3.
      </div>
    </section>
  );
}
