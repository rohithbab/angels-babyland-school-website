"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Section 2 — Vision & Mission. Each card rests showing its cover image
 * (which carries the "OUR VISION" / "OUR MISSION" title). On HOVER for pointer
 * devices, or on TAP for touch devices, a content panel slides up to cover the
 * image and reveal the full text (scrollable if it overflows).
 */
interface VisionMission {
  title: string;
  image: string;
  /** Lead-in paragraph(s) shown before any bullet list. */
  lead: string[];
  /** Optional label introducing the bullet list (e.g. "Our mission is to:"). */
  bulletsIntro?: string;
  bullets?: string[];
  /** Optional closing paragraph after the bullets. */
  closing?: string;
}

const cards: VisionMission[] = [
  {
    title: "Our Vision",
    image: "/assets/home/our_vision_cover_pic.png",
    lead: [
      "To be a center of educational excellence that empowers students with knowledge, character, and confidence, enabling them to become responsible citizens and future leaders. We envision a learning environment where academic achievement is balanced with moral values, creativity, discipline, and compassion.",
      "For over three decades, Angels Baby Land Matric Higher Secondary School has remained committed to nurturing young minds and shaping generations of learners who contribute positively to society. Our vision is to inspire every student to discover their unique potential, embrace lifelong learning, and face the challenges of an ever-evolving world with courage, integrity, and determination.",
      "We strive to create a culture where education extends beyond the classroom, fostering innovation, critical thinking, leadership, and social responsibility. Through a holistic approach to learning, we aim to develop individuals who not only excel academically but also uphold strong ethical values and make meaningful contributions to their communities and the nation.",
    ],
  },
  {
    title: "Our Mission",
    image: "/assets/home/our_mission_cover_pic.png",
    lead: [
      "At Angels Baby Land Matric Higher Secondary School, our mission is to provide a nurturing, inclusive, and stimulating educational environment that promotes academic excellence and personal growth. We are dedicated to delivering quality education that equips students with the knowledge, skills, and values necessary for success in life.",
    ],
    bulletsIntro: "Our mission is to:",
    bullets: [
      "Foster a strong foundation of academic learning through effective teaching methodologies and continuous improvement.",
      "Encourage creativity, critical thinking, and problem-solving abilities that prepare students for future opportunities and challenges.",
      "Instill discipline, integrity, respect, and responsibility as essential values in everyday life.",
      "Promote participation in cultural, sports, and extracurricular activities to ensure holistic development.",
      "Create a safe and supportive atmosphere where every child feels valued, inspired, and empowered to achieve their fullest potential.",
      "Strengthen partnerships between students, parents, teachers, and the community to build a collaborative educational journey.",
    ],
    closing:
      "Building upon a proud legacy of over 30 years, we remain committed to shaping confident, compassionate, and capable individuals who are prepared to lead, serve, and succeed in a rapidly changing world.",
  },
];

function VisionMissionCard({
  title,
  image,
  lead,
  bulletsIntro,
  bullets,
  closing,
}: VisionMission) {
  const [open, setOpen] = useState(false);
  // Only hover-capable (pointer) devices reveal on hover; touch reveals on tap.
  const hoverCapable = useRef(false);

  useEffect(() => {
    hoverCapable.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  const reveal = () => hoverCapable.current && setOpen(true);
  const hide = () => hoverCapable.current && setOpen(false);

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      onMouseEnter={reveal}
      onMouseLeave={hide}
      onFocus={reveal}
      onBlur={hide}
      className="group relative h-[24rem] w-full overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg text-left shadow-[var(--shadow-card)] lg:h-[28rem]"
    >
      {/* Cover image — the resting face */}
      <Image
        src={image}
        alt={`${title} — Angels Baby Land`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      {/* "Hover or tap" hint, fades out as the panel opens */}
      <span
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 rounded-[var(--radius-card)] bg-text/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        Hover or tap to read
      </span>

      {/* Content panel — slides up to cover the image */}
      <div
        className={`absolute inset-0 flex flex-col overflow-y-auto bg-bg p-7 transition-transform duration-300 ease-out lg:p-9 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h3 className="text-accent-strong">{title}</h3>
        <div className="mt-3 space-y-3">
          {lead.map((p, i) => (
            <p key={i} className="text-sm text-text-muted lg:text-base">
              {p}
            </p>
          ))}
          {bulletsIntro && (
            <p className="font-medium text-text">{bulletsIntro}</p>
          )}
          {bullets && (
            <ul className="space-y-2">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-text-muted lg:text-base"
                >
                  <span aria-hidden className="mt-1 text-accent-strong">
                    •
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {closing && (
            <p className="text-sm text-text-muted lg:text-base">{closing}</p>
          )}
        </div>
      </div>
    </button>
  );
}

export default function AboutCurtains() {
  return (
    <section className="bg-bg">
      <div className="container-x section-y">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <VisionMissionCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
