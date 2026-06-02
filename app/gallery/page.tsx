import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "A look at life and learning across our campus.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Gallery"
        subtitle="A look at life and learning across our campus."
      />

      {/* Themed placeholder grid — the lightbox gallery is built in Phase 3. */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-border"
          >
            <PlaceholderImage
              alt={`Campus gallery image ${i + 1}`}
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
