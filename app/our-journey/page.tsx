import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Our Journey",
  description:
    "A journey of growth, dedication, and excellence spanning over 30 years.",
  path: "/our-journey",
});

export default function OurJourneyPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Our Journey"
        subtitle="A journey of growth, dedication, and excellence spanning over 30 years."
      />

      {/* Video placeholder block (reserved for the team's edited video). */}
      <div className="mt-10 flex aspect-video w-full items-center justify-center rounded-[var(--radius-card)] border border-border bg-bg-alt text-sm text-text-muted">
        Video placeholder — added in Phase 3.
      </div>

      <div className="mt-8 rounded-[var(--radius-card)] border border-dashed border-border bg-bg-alt p-8 text-sm text-text-muted">
        Timeline of milestone years is added in Phase 3.
      </div>
    </section>
  );
}
