import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Academics",
  description:
    "State Board curriculum, classes from LKG to Higher Secondary, and our approach to teaching and evaluation.",
  path: "/academics",
});

const classes = [
  { title: "LKG & UKG", note: "Early years foundation" },
  { title: "Primary", note: "Classes 1 – 5" },
  { title: "Middle", note: "Classes 6 – 8" },
  { title: "High & Higher Secondary", note: "Classes 9 – 12" },
];

const teaching = [
  "Concept-Based Learning",
  "Interactive Classroom Sessions",
  "Individual Attention",
  "Activity-Based Learning",
];

const evaluation = [
  "Regular Tests",
  "Performance Tracking",
  "Parent Communication",
  "Remedial Support",
];

export default function AcademicsPage() {
  return (
    <section className="container-x section-y">
      {/* HERO */}
      <SectionHeading
        as="h1"
        title="Academics"
        subtitle="Building strong foundations through quality education and disciplined learning."
      />

      <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
        {/* OVERVIEW */}
        <div className="max-w-3xl">
          <h2>Overview</h2>
          <p className="mt-4 text-text-muted">
            Academics form the core of our educational approach, ensuring
            clarity, understanding, and strong conceptual learning for every
            student.
          </p>
        </div>

        {/* CURRICULUM */}
        <div className="max-w-3xl">
          <h2>Curriculum</h2>
          <p className="mt-4 text-text-muted">
            The school follows the State Board curriculum, designed to provide
            structured and progressive learning.
          </p>
        </div>

        {/* CLASSES */}
        <div>
          <SectionHeading
            title="Classes"
            subtitle="A continuous learning path from the early years to higher secondary."
          />
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {classes.map((c) => (
              <li key={c.title}>
                <Card interactive={false} className="h-full p-6">
                  <div className="mb-4 h-1 w-12 bg-accent" />
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{c.note}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        {/* TEACHING */}
        <div>
          <SectionHeading
            title="Our Teaching Approach"
            subtitle="How we help every student understand, engage and grow."
          />
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teaching.map((t) => (
              <li key={t}>
                <Card interactive={false} className="h-full p-6">
                  <h3 className="text-base font-bold">{t}</h3>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        {/* EVALUATION */}
        <div>
          <SectionHeading
            title="Evaluation"
            subtitle="Consistent assessment and support to keep every student on track."
          />
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {evaluation.map((e) => (
              <li key={e}>
                <Card interactive={false} className="h-full p-6">
                  <h3 className="text-base font-bold">{e}</h3>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
