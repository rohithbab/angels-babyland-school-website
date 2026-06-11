import CTAButton from "@/components/ui/CTAButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

/**
 * Section 5 — Our Achievements. Image on the left, copy on the right (alternates
 * the rhythm with Beyond Academics). Modestly-sized image, tight spacing.
 * Links to /achievements.
 */
export default function AchievementsPeek() {
  return (
    <section className="bg-bg">
      <div className="container-x section-y">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="group relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)] lg:mx-0">
            <PlaceholderImage
              alt="School achievement and award ceremony"
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>

          {/* Copy */}
          <div>
            <h2>Our Achievements</h2>
            <p className="mt-2 font-heading text-lg font-semibold text-accent-strong lg:text-xl">
              A Legacy of Success Built Over 30 Years.
            </p>
            <p className="mt-4 text-justify text-text-muted">
              The achievements of our students stand as a testament to the
              values, discipline, and excellence that define Angels Baby Land
              Matric Higher Secondary School. Over the years, our school has
              celebrated numerous accomplishments in academics, sports, cultural
              activities, and leadership initiatives, earning recognition and
              respect within the community.
            </p>
            <p className="mt-4 text-justify text-text-muted">
              Each milestone tells a story of determination, growth, and success
              — motivating every student to pursue excellence and create their
              own inspiring journey.
            </p>
            <CTAButton href="/achievements" className="mt-6">
              Check More
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
