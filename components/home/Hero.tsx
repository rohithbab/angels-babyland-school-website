import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { SITE } from "@/lib/seo";

/**
 * Section 1 — light, welcoming hero. Soft baby-pink gradient (no dark overlay),
 * enlarged left-aligned headline / motto / copy / CTAs, and the school crest
 * floating on the right with a soft pink shadow. Carries the page's single <h1>.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-accent/25 via-bg to-bg">
      <div className="container-x w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          {/* Copy */}
          <div className="lg:pl-10">
            <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              {SITE.name}
            </h1>
            <p className="mt-5 font-heading text-xl font-semibold italic text-accent-strong sm:text-2xl lg:text-3xl">
              &ldquo;{SITE.tagline}&rdquo;
            </p>
            <p className="mt-5 max-w-xl text-base text-text-muted lg:text-lg">
              Building a legacy of excellence in education for over 30 years —
              shaping young minds with knowledge, discipline, and values.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/about" size="lg">
                Explore Campus
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Get in Touch
              </CTAButton>
            </div>
          </div>

          {/* Floating crest */}
          <div className="flex justify-center lg:justify-start lg:pl-16">
            <Image
              src="/assets/home/hero_section_floating_image.png"
              alt="Angels Baby Land school crest"
              width={512}
              height={512}
              priority
              className="h-auto w-64 animate-float object-contain drop-shadow-[0_28px_50px_rgba(236,156,190,0.5)] sm:w-80 lg:w-[28rem] xl:w-[32rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
