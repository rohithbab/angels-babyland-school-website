import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = buildMetadata({
  title: "Academics",
  description:
    "Our curriculum pathway from Kindergarten to Higher Secondary, school toppers, and the higher-secondary course groups we offer.",
  path: "/academics",
});

/**
 * Curriculum pathway — three developmental stages rendered as alternating
 * image/content rows (image left, image right, image left). Images are pink
 * placeholders for now; real photos are swapped in via PlaceholderImage later.
 */
const pathway = [
  {
    stage: "Kindergarten",
    grades: "LKG & UKG",
    title: "One Learn Curriculum",
    subtitle: "Building Strong Foundations Through Joyful Learning",
    image: "/assets/about/Kindergarden_image.png",
    fit: "cover" as const,
    paragraphs: [
      `The One Learn Curriculum is designed to provide young learners with a stimulating and nurturing environment where curiosity, creativity, and confidence can flourish. Through activity-based learning, interactive experiences, and age-appropriate teaching methods, children develop essential literacy, numeracy, communication, and social skills during their formative years.`,
      `The curriculum encourages exploration, imagination, and hands-on participation, helping children learn naturally while building a strong foundation for future academic success. By fostering a love for learning from an early age, the One Learn Curriculum supports the holistic development of every child, nurturing intellectual, emotional, social, and creative growth.`,
    ],
  },
  {
    stage: "Primary Class",
    grades: "Grade 1 to 5",
    title: "E-DAC Curriculum",
    subtitle: "Empowering Young Minds Through Engaging Learning",
    image: "/assets/about/Primary_image.png",
    fit: "contain" as const,
    paragraphs: [
      `The E-DAC Curriculum is designed to provide students with a strong academic foundation while encouraging curiosity, creativity, and independent thinking. Through a balanced blend of conceptual learning, practical activities, and interactive teaching methodologies, students develop a deeper understanding of core subjects and essential life skills.`,
      `By creating an engaging and supportive learning environment, the curriculum helps children strengthen their communication, problem-solving, and critical-thinking abilities while fostering confidence and a passion for lifelong learning. E-DAC focuses on nurturing well-rounded learners who are prepared to excel academically and grow into responsible individuals.`,
    ],
  },
  {
    stage: "Samacheer Kalvi",
    grades: "Grade 6 to 12",
    title: "Samacheer Kalvi Curriculum",
    subtitle: "Preparing Students for Academic Excellence and Future Success",
    image: "/assets/about/Samacheer_image.png",
    fit: "contain" as const,
    paragraphs: [
      `The Samacheer Kalvi Curriculum provides students with a comprehensive and structured learning framework that promotes academic excellence, analytical thinking, and intellectual growth. Designed to strengthen subject knowledge and conceptual understanding, the curriculum equips learners with the skills and confidence needed to meet the challenges of higher education and an evolving world.`,
      `Through a balanced approach to academics, practical application, and continuous assessment, students are encouraged to develop critical-thinking abilities, problem-solving skills, and a disciplined approach to learning. The curriculum not only prepares students for board examinations but also empowers them to become confident, responsible, and future-ready individuals capable of achieving success in their chosen paths.`,
    ],
  },
];

/** Higher-secondary course groups, rendered as a two-column table. */
const courseGroups = [
  { group: "Group 1", subjects: "Maths with Computer Science" },
  { group: "Group 2", subjects: "Maths with Biology" },
  { group: "Group 3", subjects: "Commerce with Computer Application" },
  { group: "Group 4", subjects: "Commerce with Business Maths" },
];

/** Board-exam toppers with portrait, name and marks. */
type Topper = { name: string; marks: string; image: string };

const toppers: { twelfth: Topper[]; tenth: Topper[] } = {
  twelfth: [
    {
      name: "Sumithra S",
      marks: "559 / 600",
      image: "/assets/about/Toppers/12th_Toppers/First_Mark_12th.jpeg",
    },
    {
      name: "Parameshwari M A",
      marks: "547 / 600",
      image: "/assets/about/Toppers/12th_Toppers/Second_Mark_12th.jpeg",
    },
    {
      name: "Swathi S",
      marks: "543 / 600",
      image: "/assets/about/Toppers/12th_Toppers/Third_Mark_12th.jpeg",
    },
  ],
  tenth: [
    {
      name: "Rajesh S",
      marks: "480 / 500",
      image: "/assets/about/Toppers/10th_Toppers/First_Mark_10th.jpeg",
    },
    {
      name: "Baskar",
      marks: "480 / 500",
      image: "/assets/about/Toppers/10th_Toppers/First(1)_Mark_10th.jpeg",
    },
    {
      name: "Varshini M",
      marks: "479 / 500",
      image: "/assets/about/Toppers/10th_Toppers/Second_Mark_10th.jpeg",
    },
    {
      name: "Sivaprakash",
      marks: "479 / 500",
      image: "/assets/about/Toppers/10th_Toppers/Second(1)_Mark_10th.jpeg",
    },
    {
      name: "Manivannan",
      marks: "471 / 500",
      image: "/assets/about/Toppers/10th_Toppers/Third_Mark_10th.jpeg",
    },
  ],
};

function ToppersRow({ label, people }: { label: string; people: Topper[] }) {
  return (
    <div>
      <h3 className="text-center font-heading text-xl font-bold lg:text-2xl">
        {label}
      </h3>
      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-10">
        {people.map((person) => (
          <figure
            key={person.name}
            className="flex w-40 flex-col items-center text-center"
          >
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-accent shadow-[var(--shadow-card)] sm:h-40 sm:w-40">
              <Image
                src={person.image}
                alt={`${person.name} — ${label}`}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4">
              <p className="font-heading text-base font-bold">{person.name}</p>
              <p className="mt-0.5 text-sm text-accent-strong">
                {person.marks}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function AcademicsPage() {
  return (
    <section className="container-x section-y">
      {/* INTRO — copy left, image collage right */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <h1>Academics</h1>
          <p className="mt-5 text-justify text-text-muted lg:text-lg">
            At Angels Baby Land Matric Higher Secondary School, academics form
            the foundation of our commitment to nurturing confident, capable,
            and responsible individuals. Our structured curriculum encourages
            critical thinking, creativity, and a lifelong passion for learning
            while preparing students to excel in both academics and life.
          </p>
        </div>

        {/* Image grid box */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
          <div className="relative col-span-1 row-span-2 overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]">
            <PlaceholderImage
              alt="Students in the classroom"
              sizes="(max-width: 1024px) 50vw, 260px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]">
            <PlaceholderImage
              alt="Science laboratory session"
              sizes="(max-width: 1024px) 50vw, 260px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]">
            <PlaceholderImage
              alt="Library and reading activity"
              sizes="(max-width: 1024px) 50vw, 260px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
        {/* CURRICULUM */}
        <div className="mx-auto max-w-3xl text-center">
          <h2>Curriculum</h2>
          <p className="mt-2 font-heading text-lg font-semibold text-accent-strong lg:text-xl">
            A Strong Foundation for Lifelong Learning
          </p>
          <p className="mt-5 text-justify text-text-muted">
            At Angels Baby Land Matric Higher Secondary School, our curriculum
            is thoughtfully designed to support students at every stage of their
            educational journey. With a balanced approach that evolves according
            to the developmental needs of learners, we ensure that students
            receive age-appropriate instruction, meaningful learning
            experiences, and a strong academic foundation. From nurturing
            curiosity and creativity in the early years to fostering critical
            thinking, analytical skills, and academic excellence in higher
            grades, our curriculum promotes holistic growth while preparing
            students for future educational and life opportunities. Through a
            blend of innovative teaching practices and established academic
            standards, we strive to create confident, responsible, and lifelong
            learners.
          </p>
        </div>

        {/* CURRICULUM PATHWAY — alternating image / content rows */}
        <div>
          <SectionHeading
            align="center"
            flanked
            title="Curriculum Pathway"
            subtitle="A guided progression tailored to each stage of a child's growth."
          />
          <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
            {pathway.map((stage, idx) => {
              const imageLeft = idx % 2 === 0;
              return (
                <div
                  key={stage.title}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] w-full max-w-[540px] overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)] ${
                      imageLeft
                        ? "lg:order-1 lg:mr-auto"
                        : "lg:order-2 lg:ml-auto"
                    } ${stage.fit === "contain" ? "bg-white" : ""} mx-auto`}
                  >
                    <Image
                      src={stage.image}
                      alt={`${stage.stage} — ${stage.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className={
                        stage.fit === "contain"
                          ? "object-contain p-6"
                          : "object-cover"
                      }
                    />
                  </div>

                  {/* Content */}
                  <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                    <span className="inline-block rounded-[var(--radius-card)] bg-accent px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-text">
                      {stage.stage} · {stage.grades}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold lg:text-3xl">
                      {stage.title}
                    </h3>
                    <p className="mt-2 font-heading text-base font-semibold text-accent-strong lg:text-lg">
                      {stage.subtitle}
                    </p>
                    {stage.paragraphs.map((para, i) => (
                      <p key={i} className="mt-4 text-justify text-text-muted">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TOPPERS */}
        <div>
          <SectionHeading
            align="center"
            flanked
            title="Our School Toppers"
            subtitle="Academic Topper 2025–2026"
          />
          <div className="mt-14 space-y-14 lg:mt-20 lg:space-y-20">
            <ToppersRow label="12th Toppers" people={toppers.twelfth} />
            <ToppersRow label="10th Toppers" people={toppers.tenth} />
          </div>
        </div>

        {/* COURSES WE OFFER */}
        <div>
          <SectionHeading
            align="center"
            flanked
            title="Courses We Offer"
            subtitle="Higher Secondary subject groups for Grades 11 & 12."
          />
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-accent text-text">
                  <th className="px-5 py-4 font-heading text-sm font-bold uppercase tracking-wide lg:px-8">
                    Groups
                  </th>
                  <th className="px-5 py-4 font-heading text-sm font-bold uppercase tracking-wide lg:px-8">
                    Subjects
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseGroups.map((row, i) => (
                  <tr
                    key={row.group}
                    className={`border-t border-border ${
                      i % 2 === 1 ? "bg-bg-alt" : "bg-bg"
                    }`}
                  >
                    <td className="px-5 py-4 font-heading font-semibold lg:px-8">
                      {row.group}
                    </td>
                    <td className="px-5 py-4 text-text-muted lg:px-8">
                      {row.subjects}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
