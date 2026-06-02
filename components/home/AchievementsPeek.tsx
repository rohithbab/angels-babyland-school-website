import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

/**
 * Section 4 — Achievements sneak peek. Heading + written copy + one image
 * (text + image only). Image sits on the left on desktop to alternate rhythm
 * with the Activities section. Links to /achievements.
 */
export default function AchievementsPeek() {
  return (
    <section className="bg-bg">
      <div className="container-x section-y">
        <SectionHeading
          title="Our Achievements"
          subtitle="Celebrating milestones and success stories of our students."
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <p className="text-text-muted">
              Over three decades, our students, teachers, and institution have
              earned recognition across academics, sports, and the arts. These
              milestones reflect the dedication and values at the heart of our
              school.
            </p>
            <p className="mt-4 text-text-muted">
              Each success story inspires the next generation to aim higher.
            </p>
            <CTAButton href="/achievements" className="mt-6">
              Check More
            </CTAButton>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border lg:order-1">
            <PlaceholderImage
              alt="School achievement and award ceremony"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
