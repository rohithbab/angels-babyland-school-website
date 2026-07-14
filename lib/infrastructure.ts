import fs from "node:fs";
import path from "node:path";
import {
  INFRA_BASE,
  INFRA_DIR,
  INFRA_THUMBS_BASE,
  INFRA_THUMBS_DIR,
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
  /**
   * Curated thumbnail for the carousel/marquee. The dedicated
   * `infrastructure-thumbnails/<slug>.<ext>` file if present, else the first
   * gallery photo, else null.
   */
  thumbnail: string | null;
}

const THUMB_EXTS = ["jpg", "jpeg", "png", "webp", "avif"];

/** Resolve the curated thumbnail file for a category, if one exists. */
export function categoryThumbnail(slug: string): string | null {
  const dir = path.join(PUBLIC_DIR, INFRA_THUMBS_DIR);
  for (const ext of THUMB_EXTS) {
    if (fs.existsSync(path.join(dir, `${slug}.${ext}`))) {
      return `${INFRA_THUMBS_BASE}/${slug}.${ext}`;
    }
  }
  return null;
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

/** All categories, each with its resolved image list + thumbnail. */
export function getInfrastructure(): InfraCategoryWithImages[] {
  return infrastructureCategories.map((category) => {
    const images = listCategoryImages(category.slug);
    return {
      ...category,
      images,
      thumbnail: categoryThumbnail(category.slug) ?? images[0] ?? null,
    };
  });
}

/**
 * One curated highlight photo per category, for the About-page marquee.
 * Categories with no thumbnail or photos yet are skipped.
 */
export function getInfrastructureHighlights(): {
  slug: string;
  title: string;
  src: string;
}[] {
  return getInfrastructure()
    .filter((c): c is InfraCategoryWithImages & { thumbnail: string } =>
      Boolean(c.thumbnail)
    )
    .map((c) => ({ slug: c.slug, title: c.title, src: c.thumbnail }));
}
