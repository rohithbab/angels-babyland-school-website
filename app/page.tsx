import type { Metadata } from "next";
import { buildMetadata, SITE } from "@/lib/seo";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = buildMetadata({
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <section className="container-x section-y">
      <div className="max-w-3xl">
        <h1>{SITE.name}</h1>
        <p className="mt-3 text-lg font-medium italic text-text-muted">
          &ldquo;{SITE.tagline}&rdquo;
        </p>
        <p className="mt-4 text-text-muted">
          Building a legacy of excellence in education for over 30 years,
          shaping young minds with knowledge, discipline, and values.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="/about">Explore Campus</CTAButton>
          <CTAButton href="/contact" variant="secondary">
            Get in Touch
          </CTAButton>
        </div>
      </div>

      {/* Phase 1 placeholder — the full Home (6 sections) is built in Phase 2. */}
      <div className="mt-12 rounded-[var(--radius-card)] border border-dashed border-border bg-bg-alt p-8 text-sm text-text-muted">
        Home page sections (Hero, About, Activities &amp; Achievements previews,
        Testimonials) are added in Phase 2.
      </div>
    </section>
  );
}
