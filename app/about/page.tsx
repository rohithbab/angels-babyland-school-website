import type { Metadata } from "next";
import Image from "next/image";
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

/**
 * Leadership "tree": Founder → Correspondent → Secretary, each rendered as an
 * alternating image/content row (img left, right, left). Photos are pink
 * placeholder boxes for now; real portraits are dropped in later.
 * Text is kept verbatim from the school's silver-jubilee souvenir.
 */
type Block = { type: "p" | "quote"; text: string };

const leadership: {
  heading: string;
  name: string;
  title: string;
  imageSide: "left" | "right";
  blocks: Block[];
}[] = [
  {
    heading: "Our Founder",
    name: "P. Thangaraj",
    title: "Founder",
    imageSide: "left",
    blocks: [
      {
        type: "p",
        text: `Late Mr. P. Thangaraj, the founder of Angels Baby Land Matriculation Higher Secondary School, established the institution in 1990 with just 16 students.`,
      },
      {
        type: "p",
        text: `His vision was to provide quality education to the local community at a time when only a few schools existed in the area. He was a dedicated and hardworking individual known for his simplicity, charm, and exceptional leadership qualities.`,
      },
      {
        type: "p",
        text: `As an organizer and decision-maker, he was unparalleled. His patience, calm demeanor, effective time management, strategic planning, and strong execution skills played a vital role in the growth and success of the school.`,
      },
      {
        type: "p",
        text: `Above all, he was a God-fearing person with unwavering faith in the Almighty. He firmly believed that hard work and determination were the keys to success.`,
      },
      {
        type: "quote",
        text: `A dream doesn't become reality through magic; it takes sweat, determination, and hard work.`,
      },
    ],
  },
  {
    heading: "Message from the Correspondent",
    name: "Bagyam Thangaraj",
    title: "Correspondent",
    imageSide: "right",
    blocks: [
      {
        type: "p",
        text: `It has been a long laudable glorious 25 years of service to the nation, particularly to the Korukkupet region — 25 years of imparting quality education to the younger generation of India. Reflecting back to the days when Angels Babyland School started, it is a thrilling experience. It was started as a simple small institution with the key aim of imparting quality education, rather than a big institution with a large capital.`,
      },
      {
        type: "p",
        text: `It is because of the grace of the Almighty and the hard work of the staff that the good name of our school has earned its place among the local residents. It began to grow slowly, like a tree with firm roots. And today we stand here after completing 25 successful years in the field of education.`,
      },
      {
        type: "quote",
        text: `Education is a wealth that no youth can be robbed off.`,
      },
      {
        type: "p",
        text: `We wanted each and every child to be endowed with this priceless treasure — a youthful India that has begun to dream differently and is willing to go that extra mile to achieve their goals. At our Angels Baby Land institution we strive to work with the students to enhance their ability and thinking power beyond the classroom, in such a manner that they face the challenges independently and confidently. Each student is reinforced with worthy principles, virtues, ethics and character.`,
      },
      {
        type: "p",
        text: `Jubilee is a time for celebration and retrospection — a time to reflect on our past, analyze the present and plan for an even better tomorrow. The history of the school was full of challenges and hardships right from day one. The process of education involves students, teachers, parents, administrators and the society. I salute and congratulate all the teachers who are in the family of Angels Babyland, and those teachers who were in our family at some point of time in this 25 years of our journey, who braved many a challenge undauntingly and worked untiringly along with the management to put this school on a path of growth and success. I thank all our parents and past pupils for their support, and all our administrators and well-wishers who have been with us throughout. The results are there for all of us to see — the school stands tall as one of the most reputed educational institutions in North Chennai. And for the future, we aim to bring up students who can fulfill their hopes and dreams, and be of great service to the society and to our great nation. We hope to transform this centre into an institution of excellence in the field of education.`,
      },
    ],
  },
  {
    heading: "Message from the Secretary",
    name: "Dr. Jasmine Deva Arul Selvi. T",
    title: "Secretary",
    imageSide: "left",
    blocks: [
      {
        type: "p",
        text: `Greetings to all. I am extremely happy and filled with a sense of nostalgia and exultation on this occasion of silver jubilee celebrations and in publishing this souvenir on the joyous occasion. Over the past 25 years our institution has achieved many feats and climbed new heights. I thank the Almighty, teachers, staff members, students and parents, and well-wishers who have supported us in the past and also for their contribution in the future.`,
      },
      {
        type: "p",
        text: `The motto of our school rightly says "From Darkness Lead Unto Light". Our school has led several minds from the darkness of illiteracy to the light of wisdom and knowledge. Knowledge is power. The art of education does not end in schools. It is just the beginning. Education is a continuous process.`,
      },
      {
        type: "quote",
        text: `Education is not the preparation for life, education is life itself. — John Dewey`,
      },
      {
        type: "p",
        text: `Education plays an important role in nation building by turning out self-disciplined, educated, creative minds who will surmount all obstacles in their paths and strive for the best.`,
      },
      {
        type: "quote",
        text: `Education is a better safeguard of liberty than a standing army. — Edward Everett`,
      },
      {
        type: "p",
        text: `To seek, to strive, to find... we want every student to develop an interest in lifelong learning, to persevere — always relentless in the pursuit of knowledge — to reach for the stars and yet to have their feet firmly planted on the ground. I appeal to the Babylanders to dream for our country and work hard to achieve their dream.`,
      },
      {
        type: "quote",
        text: `Talent is cheaper than salt; what separates a talented individual from a successful one is a lot of hard work.`,
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="container-x section-y">
      {/* HERO */}
      <SectionHeading
        as="h1"
        title="About Us"
        subtitle="For over three decades, Angels BabyLand has shaped confident, capable young minds — rooted in knowledge, strong values, and an unwavering pursuit of excellence. Our promise lives in our motto: From Darkness, Lead Unto Light."
      />

      <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
        {/* WHO WE ARE — text + floating crest fills the full width */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2>Who We Are ?</h2>
            <p className="mt-4 text-justify text-text-muted">
              Angels BabyLand Matric Higher Secondary School has been a trusted
              name in education for over 30 years, dedicated to nurturing young
              minds and building a strong academic foundation. With a focus on
              discipline, values, and overall development, the school provides a
              supportive environment where students are encouraged to explore
              their potential and grow with confidence. From a humble beginning
              of just 16 students in 1990, we have grown — like a tree with firm
              roots — into one of the most respected institutions in North
              Chennai, while holding fast to the simple belief that every child
              carries a wealth that can never be taken away.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/about/about_us_section_image.png"
              alt="Angels BabyLand school crest"
              width={512}
              height={512}
              priority
              className="h-auto w-52 animate-float object-contain drop-shadow-[0_22px_40px_rgba(236,156,190,0.45)] sm:w-60 lg:w-72 xl:w-80"
            />
          </div>
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

        {/* LEADERSHIP — Founder, Correspondent, Secretary (alternating sides) */}
        <div>
          <SectionHeading
            title="Our Leadership"
            subtitle="The vision and the voices behind Angels BabyLand."
          />
          <div className="mt-10 space-y-14 lg:mt-12 lg:space-y-20">
            {leadership.map((person) => (
              <article
                key={person.title}
                className={`flex flex-col gap-8 md:flex-row md:items-start lg:gap-12 ${
                  person.imageSide === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Photo — pink placeholder box for now */}
                <div className="w-full md:w-72 md:shrink-0">
                  <div
                    className="flex aspect-square w-full items-end rounded-[var(--radius-card)] bg-accent p-4"
                    role="img"
                    aria-label={`Photo of ${person.name}, ${person.title}`}
                  >
                    <span className="font-heading text-sm font-semibold uppercase tracking-wide text-text/70">
                      {person.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4 h-1 w-12 bg-accent" />
                  <h3 className="uppercase tracking-tight">{person.heading}</h3>
                  {person.blocks.map((block, i) =>
                    block.type === "quote" ? (
                      <blockquote
                        key={i}
                        className="my-5 border-l-2 border-accent-strong pl-4 font-heading text-base italic text-text lg:text-lg"
                      >
                        “{block.text}”
                      </blockquote>
                    ) : (
                      <p key={i} className="mt-4 text-justify text-text-muted">
                        {block.text}
                      </p>
                    )
                  )}
                  <p className="mt-6 font-heading font-bold uppercase tracking-wide">
                    {person.name}
                  </p>
                  <p className="text-sm text-text-muted">{person.title}</p>
                </div>
              </article>
            ))}
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
