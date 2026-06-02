import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

/**
 * Section 5 — parent testimonials marquee. The ONE auto-motion on the page.
 * Continuous horizontal scroll, PAUSES ON HOVER, and honours
 * prefers-reduced-motion (stops + becomes manually scrollable).
 *
 * Keyframes are injected as a self-contained <style> tag here rather than in
 * globals.css, to keep Phase 2 changes scoped to page.tsx + components/home.
 */
const MARQUEE_CSS = `
@keyframes ablMarquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.abl-marquee__track {
  animation: ablMarquee 45s linear infinite;
}
.abl-marquee:hover .abl-marquee__track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .abl-marquee__track { animation: none; }
  .abl-marquee { overflow-x: auto; }
}
`;

export default function Testimonials() {
  // Duplicate the set once so translateX(-50%) loops seamlessly.
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-bg-alt">
      <style>{MARQUEE_CSS}</style>

      <div className="container-x pt-[52px] lg:pt-[90px]">
        <SectionHeading
          title="What Parents Say"
          subtitle="Trusted by families across our community for over three decades."
        />
      </div>

      <div className="abl-marquee mt-10 overflow-hidden pb-[52px] lg:pb-[90px]">
        <ul className="abl-marquee__track flex w-max gap-6 px-6 lg:px-20">
          {loop.map((t, i) => (
            <li
              key={i}
              aria-hidden={i >= testimonials.length}
              className="w-[300px] shrink-0 sm:w-[340px]"
            >
              <Card interactive={false} className="flex h-full flex-col p-7">
                <span
                  aria-hidden="true"
                  className="font-heading text-4xl leading-none text-accent"
                >
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 text-text-muted">{t.quote}</p>
                <div className="mt-5">
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-text-muted">{t.relation}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
