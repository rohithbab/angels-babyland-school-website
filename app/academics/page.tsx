import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Academics",
  description:
    "State Board curriculum, classes from LKG to Higher Secondary, and our teaching approach.",
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Academics"
        subtitle="Our curriculum, classes, teaching approach and evaluation."
      />
      <div className="mt-10 rounded-[var(--radius-card)] border border-dashed border-border bg-bg-alt p-8 text-sm text-text-muted">
        Academics content (Overview, Curriculum, Classes, Teaching, Evaluation)
        is added in Phase 3.
      </div>
    </section>
  );
}
