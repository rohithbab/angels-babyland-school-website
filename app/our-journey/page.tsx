import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import JourneyVideo from "@/components/journey/JourneyVideo";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
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
        align="center"
        flanked
        title="Our Journey"
        subtitle="A journey of growth, dedication, and excellence spanning over 30 years."
      />

      {/* LOOPING JOURNEY VIDEO */}
      <div className="mt-12 lg:mt-16">
        <JourneyVideo />
      </div>

      {/* TIMELINE — vertical zig-zag with scroll-reveal animation. */}
      <div className="mt-14 lg:mt-20">
        <SectionHeading
          align="center"
          flanked
          title="Milestones"
          subtitle="Key moments that shaped our school, decade after decade."
        />
        <JourneyTimeline items={journey} />
      </div>
    </section>
  );
}
