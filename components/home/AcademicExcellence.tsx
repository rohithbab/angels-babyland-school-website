import PlaceholderImage from "@/components/ui/PlaceholderImage";

/**
 * Section 3 — Academic Excellence. Image on the left, heading + subheading +
 * copy on the right. Image is a modest, properly-sized box (not full-bleed).
 */
export default function AcademicExcellence() {
  return (
    <section className="bg-bg">
      <div className="container-x section-y">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="group relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)] lg:mx-0">
            <PlaceholderImage
              alt="Students excelling in academics at Angels Baby Land"
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>

          {/* Copy */}
          <div>
            <h2>Academic Excellence</h2>
            <p className="mt-2 font-heading text-lg font-semibold text-accent-strong lg:text-xl">
              Empowering Students Through Knowledge and Excellence
            </p>
            <p className="mt-4 text-justify text-text-muted">
              At Angels Baby Land Matric Higher Secondary School, academics are
              at the heart of everything we do. Backed by over 30 years of
              educational excellence, we provide a nurturing learning
              environment where students develop strong foundations, critical
              thinking abilities, and the confidence to excel in every stage of
              life.
            </p>
            <p className="mt-4 text-justify text-text-muted">
              Our commitment to quality education inspires students to learn,
              grow, and achieve their fullest potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
