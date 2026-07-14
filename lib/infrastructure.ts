import fs from "node:fs";
import path from "node:path";
import {
  INFRA_BASE,
  INFRA_DIR,
  infrastructureCategories,
  type InfraCategory,
} from "@/data/infrastructure";

/**
 * Server-only helpers that read the infrastructure photo folders from disk at
 * build time. Because this touches `node:fs`, only import it from Server
 * Components (never from a "use client" file).
 */

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

export interface InfraCategoryWithImages extends InfraCategory {
  /** Public URLs of every photo in this category (sorted, may be empty). */
  images: string[];
}

/** List the photo URLs inside one category folder, natural-sorted. */
export function listCategoryImages(slug: string): string[] {
  const dir = path.join(PUBLIC_DIR, INFRA_DIR, slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((name) => IMAGE_RE.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => `${INFRA_BASE}/${slug}/${name}`);
  } catch {
    // Folder missing or unreadable — treat as "no photos yet".
    return [];
  }
}

/** All categories, each with its resolved image list. */
export function getInfrastructure(): InfraCategoryWithImages[] {
  return infrastructureCategories.map((category) => ({
    ...category,
    images: listCategoryImages(category.slug),
  }));
}

/**
 * One highlight photo per category (the first available), for the About-page
 * marquee. Categories with no photos yet are skipped.
 */
export function getInfrastructureHighlights(): {
  slug: string;
  title: string;
  src: string;
}[] {
  return getInfrastructure()
    .filter((c) => c.images.length > 0)
    .map((c) => ({ slug: c.slug, title: c.title, src: c.images[0] }));
}
