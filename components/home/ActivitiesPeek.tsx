import CTAButton from "@/components/ui/CTAButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

/**
 * Section 4 — Beyond Academics. Copy on the left, a modestly-sized image on the
 * right. Heading + subheading + paragraphs sit together (no large vertical
 * gaps). Links to /activities.
 */
export default function ActivitiesPeek() {
  return (
    <section className="bg-bg-alt">
      <div className="container-x section-y">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <h2>Beyond Academics</h2>
            <p className="mt-2 font-heading text-lg font-semibold text-accent-strong lg:text-xl">
              Nurturing Talents. Building Character. Inspiring Futures.
            </p>
            <p className="mt-4 text-justify text-text-muted">
              At Angels Babyland Matric Higher Secondary School, education
              extends far beyond textbooks and classrooms. Through cultural
              programs, classical arts, sports, leadership clubs, and community
              initiatives, students are encouraged to discover their passions
              and develop essential life skills.
            </p>
            <p className="mt-4 text-justify text-text-muted">
              Every experience is thoughtfully designed to foster creativity,
              confidence, discipline, teamwork, and leadership — helping students
              grow into well-rounded individuals prepared to excel in every
              stage of life.
            </p>
            <CTAButton href="/activities" className="mt-6">
              Check More
            </CTAButton>
          </div>

          {/* Image */}
          <div className="group relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)] lg:ml-auto lg:mr-12">
            <PlaceholderImage
              src="/assets/home/Beyond_academics(home).jpeg"
              alt="Students taking part in school activities"
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
