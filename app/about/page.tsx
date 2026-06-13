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
  "Robotics Lab",
];

/**
 * Leadership "tree": Founder → Correspondent → Principal → Secretary →
 * President, each rendered as a stacked card joined by a vertical connector.
 * Photos are pink placeholder boxes for now; real portraits are dropped in
 * later. Text is kept verbatim from the school's messages.
 */
type Block = { type: "p" | "quote"; text: string };

const leadership: {
  role: string;
  name: string;
  blocks: Block[];
}[] = [
  {
    role: "Founder",
    name: "P. Thangaraj",
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
    role: "Correspondent",
    name: "Bagyam Thangaraj",
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
    role: "Principal",
    name: "Mrs. Jackline Jose",
    blocks: [
      {
        type: "p",
        text: `At Angels Baby Land Matric Higher Secondary School, we believe that education is not merely the acquisition of knowledge but the development of character, confidence, and compassion. Our goal is to nurture students into responsible citizens who are prepared to face the challenges of an ever-changing world.`,
      },
      {
        type: "p",
        text: `We strive to provide a stimulating learning environment where every child is encouraged to discover their talents, develop critical thinking skills, and achieve academic excellence. Through dedication, discipline, and innovation, we aim to inspire a lifelong love for learning.`,
      },
      {
        type: "quote",
        text: `The future belongs to those who believe in the beauty of their dreams.`,
      },
      {
        type: "p",
        text: `With the support of our committed teachers, parents, and management, we continue to guide our students toward success while upholding the values and traditions that define our institution.`,
      },
    ],
  },
  {
    role: "Secretary",
    name: "Dr. Jasmine Deva Arul Selvi. T",
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
  {
    role: "President",
    name: "Dr. Charles Sekar",
    blocks: [
      {
        type: "p",
        text: `Angels Baby Land Matric Higher Secondary School has grown into a respected institution through a shared commitment to educational excellence and student development. We take pride in providing opportunities that help students realize their full potential.`,
      },
      {
        type: "p",
        text: `Our vision is to create a generation of confident, ethical, and socially responsible individuals who contribute meaningfully to society. We remain dedicated to enhancing educational standards while embracing innovation and progress.`,
      },
      {
        type: "quote",
        text: `Success is not measured by what we achieve for ourselves, but by the positive impact we create for others.`,
      },
      {
        type: "p",
        text: `I extend my gratitude to our students, parents, faculty members, and well-wishers whose trust and support continue to strengthen the legacy of Angels Baby Land.`,
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="container-x section-y">
      {/* HERO + WHO WE ARE — crest vertically centered on the right, spanning
          the full height of the intro + Who We Are copy. */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <h1>About Us</h1>
          <p className="mt-3 text-text-muted">
            For over three decades, Angels BabyLand has shaped confident,
            capable young minds — rooted in knowledge, strong values, and an
            unwavering pursuit of excellence. Our promise lives in our motto:
            From Darkness, Lead Unto Light.
          </p>

          <div className="mt-10 lg:mt-14">
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
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/about/about_us_section_image.png"
            alt="Angels BabyLand school crest"
            width={512}
            height={512}
            priority
            className="h-auto w-64 animate-float object-contain drop-shadow-[0_24px_44px_rgba(236,156,190,0.45)] sm:w-80 lg:w-[26rem] xl:w-[30rem]"
          />
        </div>
      </div>

      <div className="mt-14 space-y-14 lg:mt-20 lg:space-y-20">
        {/* LEADERSHIP — Founder → Correspondent → Secretary. Stacked cards, each
            with a square photo straddling the card's top edge, joined by a
            vertical connector line (timeline feel). */}
        <div>
          <SectionHeading
            title="Our Leadership"
            subtitle="The vision and the voices behind Angels BabyLand."
          />
          <div className="mx-auto mt-16 flex w-full max-w-[1600px] flex-col lg:mt-20">
            {leadership.map((person, idx) => (
              <div key={person.role} className="w-full">
                {/* Connector line between consecutive cards */}
                {idx > 0 && (
                  <div className="flex justify-center" aria-hidden>
                    <span className="h-12 w-0.5 bg-accent-strong/40 lg:h-16" />
                  </div>
                )}

                {/* Top padding holds the photo's protruding upper half */}
                <div className="pt-20 lg:pt-28">
                  <article className="relative rounded-[var(--radius-card)] border border-border bg-bg px-6 pb-8 pt-24 shadow-[var(--shadow-card)] lg:px-12 lg:pb-12 lg:pt-32">
                    {/* Square photo — pink placeholder, straddles the card top */}
                    <div
                      className="absolute left-1/2 top-0 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[var(--radius-card)] border-4 border-bg bg-accent shadow-[var(--shadow-card)] lg:h-56 lg:w-56"
                      role="img"
                      aria-label={`Photo of ${person.name}, ${person.role}`}
                    >
                      <span className="px-2 text-center font-heading text-sm font-semibold uppercase tracking-wide text-text/70">
                        {person.role}
                      </span>
                    </div>

                    {/* Highlighted title box: ROLE — Name */}
                    <div className="flex justify-center">
                      <span className="inline-block rounded-[var(--radius-card)] bg-accent px-4 py-1.5 text-center font-heading text-sm font-bold uppercase tracking-wide text-text lg:text-base">
                        {person.role} — {person.name}
                      </span>
                    </div>

                    {/* Message body */}
                    <div className="mt-6">
                      {person.blocks.map((block, i) =>
                        block.type === "quote" ? (
                          <blockquote
                            key={i}
                            className="my-5 border-l-2 border-accent-strong pl-4 font-heading text-base italic text-text lg:text-lg"
                          >
                            “{block.text}”
                          </blockquote>
                        ) : (
                          <p
                            key={i}
                            className="mt-4 text-justify text-text-muted"
                          >
                            {block.text}
                          </p>
                        )
                      )}
                    </div>
                  </article>
                </div>
              </div>
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
