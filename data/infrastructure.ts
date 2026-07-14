/**
 * "Our Infrastructure" categories.
 *
 * Each category maps to a subfolder under
 * `public/assets/about/our-infrastructure/<slug>/`. Drop any number of photos
 * into a folder and they appear automatically — the file list is read at build
 * time (see `lib/infrastructure.ts`); no code changes per image.
 */
export interface InfraCategory {
  slug: string;
  title: string;
  /** One-line description shown on the carousel card. */
  blurb: string;
}

/** Public base path for all infrastructure photos. */
export const INFRA_BASE = "/assets/about/our-infrastructure";

/** Filesystem-safe folder name for the same base (relative to `public/`). */
export const INFRA_DIR = "assets/about/our-infrastructure";

export const infrastructureCategories: InfraCategory[] = [
  {
    slug: "spacious-classrooms",
    title: "Spacious Classrooms",
    blurb: "Bright, airy rooms built for focused, comfortable learning.",
  },
  {
    slug: "physics-lab",
    title: "Physics Lab",
    blurb: "Hands-on apparatus for experiments in mechanics, optics and more.",
  },
  {
    slug: "chemistry-lab",
    title: "Chemistry Lab",
    blurb: "A fully equipped lab for safe, guided chemical exploration.",
  },
  {
    slug: "biology-lab",
    title: "Biology Lab",
    blurb: "Microscopes, specimens and models that bring life science alive.",
  },
  {
    slug: "computer-lab",
    title: "Computer Lab",
    blurb: "Modern workstations that build real digital-age skills.",
  },
  {
    slug: "robotics-lab",
    title: "Robotics Lab",
    blurb: "Where curiosity meets engineering, coding and invention.",
  },
  {
    slug: "library",
    title: "Library",
    blurb: "A quiet home for books, reference and a lifelong love of reading.",
  },
  {
    slug: "playground",
    title: "Playground",
    blurb: "Open, safe space for sport, play and everyday joy.",
  },
];

/** Lookup helper for the category carousel. */
export function getCategory(slug: string): InfraCategory | undefined {
  return infrastructureCategories.find((c) => c.slug === slug);
}
