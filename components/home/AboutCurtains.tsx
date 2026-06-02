"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Section 2 — two square "curtain" cards (Mission / Vision).
 * Default shows only the title on a baby-pink panel. The panel slides up
 * (curtain) to reveal the text beneath: on HOVER for pointer devices, on TAP
 * for touch devices. A single ~280ms transform — no other motion.
 */
interface Curtain {
  title: string;
  body: string;
}

const cards: Curtain[] = [
  {
    title: "Our Mission",
    body: "To provide quality education through a balanced approach of academics and extracurricular activities, fostering discipline, creativity, and leadership in every student.",
  },
  {
    title: "Our Vision",
    body: "To create a learning environment that inspires students to achieve academic excellence, develop strong values, and become responsible individuals who contribute positively to society.",
  },
];

function CurtainCard({ title, body }: Curtain) {
  const [open, setOpen] = useState(false);
  // Only hover-capable (pointer) devices should reveal on hover; touch reveals on tap.
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
      className="group relative aspect-square w-full overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg text-left shadow-[var(--shadow-card)]"
    >
      {/* Revealed content underneath */}
      <div className="absolute inset-0 flex flex-col justify-center gap-3 p-8">
        <h3>{title}</h3>
        <p className="text-text-muted">{body}</p>
      </div>

      {/* Curtain panel */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-accent px-6 text-center transition-transform duration-300 ease-out ${
          open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <span className="font-heading text-2xl font-bold text-text lg:text-3xl">
          {title}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-text/70">
          Hover or tap to read
        </span>
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
            <CurtainCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
