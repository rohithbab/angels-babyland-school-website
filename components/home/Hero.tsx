import CTAButton from "@/components/ui/CTAButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { SITE } from "@/lib/seo";

/**
 * Section 1 — full-bleed hero. Background image + dark overlay, with
 * left-aligned content (~40% width) and intentional breathing space at right.
 * Carries the page's single <h1>.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden lg:min-h-[78vh]">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0 -z-10">
        <PlaceholderImage
          alt="Angels Baby Land school campus"
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container-x w-full">
        <div className="max-w-xl text-white lg:max-w-[44%]">
          <h1 className="text-white">{SITE.name}</h1>
          <p className="mt-3 text-lg font-medium italic text-white/90">
            &ldquo;{SITE.tagline}&rdquo;
          </p>
          <p className="mt-4 text-white/85">
            Building a legacy of excellence in education for over 30 years,
            shaping young minds with knowledge, discipline, and values.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton href="/about">Explore Campus</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
