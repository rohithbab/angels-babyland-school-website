import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About Angels Baby Land Matric Higher Secondary School — our story, vision, mission, people and facilities.",
  path: "/about",
});

const infrastructure = [
  "Spacious Classrooms",
  "Science Laboratories",
  "Library",
  "Playground",
  "Computer Lab",
];

export default function AboutPage() {
  return (
    <section className="container-x section-y">
      {/* HERO */}
      <SectionHeading
        as="h1"
        title="About Us"
        subtitle="Shaping young minds with knowledge, values, and excellence for over three decades."
      />

      <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
        {/* WHO WE ARE */}
        <div className="max-w-3xl">
          <h2>Who We Are</h2>
          <p className="mt-4 text-text-muted">
            Angels Baby Land Matric Higher Secondary School has been a trusted
            name in education for over 30 years, dedicated to nurturing young
            minds and building a strong academic foundation. With a focus on
            discipline, values, and overall development, the school provides a
            supportive environment where students are encouraged to explore
            their potential and grow with confidence.
          </p>
        </div>

        {/* VISION + MISSION */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card interactive={false} className="p-8">
            <div className="mb-4 h-1 w-12 bg-accent" />
            <h3>Our Vision</h3>
            <p className="mt-3 text-text-muted">
              To create a learning environment that inspires students to achieve
              academic excellence, develop strong values, and become responsible
              individuals who contribute positively to society.
            </p>
          </Card>
          <Card interactive={false} className="p-8">
            <div className="mb-4 h-1 w-12 bg-accent" />
            <h3>Our Mission</h3>
            <p className="mt-3 text-text-muted">
              To provide quality education through a balanced approach of
              academics and extracurricular activities, fostering discipline,
              creativity, and leadership in every student.
            </p>
          </Card>
        </div>

        {/* PRINCIPAL'S MESSAGE */}
        <div>
          <h2>Principal&apos;s Message</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[260px_1fr] md:items-start">
            <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-card)] border border-border">
              <PlaceholderImage
                alt="Principal of Angels Baby Land Matric Higher Secondary School"
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-text-muted">
                At Angels Baby Land Matric Higher Secondary School, we believe
                that education is not just about academics, but about shaping
                character and building a strong foundation for life. Our goal is
                to create a positive and inspiring environment where every
                student feels valued and motivated to achieve their best.
              </p>
              <p className="mt-6 font-heading font-bold">The Principal</p>
              <p className="text-sm text-text-muted">
                Angels Baby Land Matric Hr. Sec. School
              </p>
            </div>
          </div>
        </div>

        {/* INFRASTRUCTURE */}
        <div>
          <SectionHeading
            title="Our Infrastructure"
            subtitle="Facilities designed to support learning, discovery and play."
          />
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((item) => (
              <li key={item}>
                <Card
                  interactive={false}
                  className="group h-full overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                    <PlaceholderImage
                      alt={item}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{item}</h3>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        {/* FACULTY */}
        <div className="max-w-3xl">
          <h2>Our Faculty</h2>
          <p className="mt-4 text-text-muted">
            Our team of dedicated and experienced educators plays a vital role
            in shaping the future of our students. They ensure every student
            receives the guidance and support needed to succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
