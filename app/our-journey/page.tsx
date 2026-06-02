import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { journey } from "@/data/journey";

export const metadata: Metadata = buildMetadata({
  title: "Our Journey",
  description:
    "A journey of growth, dedication, and excellence spanning over 30 years.",
  path: "/our-journey",
});

export default function OurJourneyPage() {
  return (
    <section className="container-x section-y">
      {/* HERO */}
      <SectionHeading
        as="h1"
        title="Our Journey"
        subtitle="A journey of growth, dedication, and excellence spanning over 30 years."
      />

      {/* VIDEO PLACEHOLDER — reserved 16:9 block with a play affordance. */}
      {/* TODO: replace with school journey video. */}
      <div className="mt-12 lg:mt-16">
        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg-alt">
          <div className="flex flex-col items-center gap-3 text-text-muted">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-text">
              {/* Play icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-sm font-medium">School journey video coming soon</span>
          </div>
        </div>
      </div>

      {/* TIMELINE — vertical on mobile, horizontal/stepped on desktop. */}
      <div className="mt-14 lg:mt-20">
        <SectionHeading
          title="Milestones"
          subtitle="Key moments that shaped our school over three decades."
        />
        <ol className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-6">
          {journey.map((m) => (
            <li key={m.year} className="lg:flex-1">
              <Card interactive={false} className="group h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <PlaceholderImage
                    alt={`${m.year} — ${m.title}`}
                    sizes="(max-width: 1024px) 100vw, 20vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-[var(--radius-card)] bg-accent px-3 py-1 font-heading text-sm font-bold text-text">
                    {m.year}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{m.blurb}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
