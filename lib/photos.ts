import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

const YEAR_DIRS = ["2025", "2026"];

export function generateCaption(filename: string): string {
  const name = filename
    .replace(IMAGE_RE, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const cleaned = name
    .replace(/^whatsapp\s+image\s+\d{4}(?:-\d{2}){2}\s+at\s+[\d.]+(?:\s+(?:am|pm))?(?:\s*\(?\d+\)?)?/i, "")
    .replace(/\s*\d+$/, "")
    .trim();
  if (!cleaned) return "Photo";
  return cleaned
    .split(/(?<=[a-z])(?=[A-Z])|\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ")
    .trim();
}

export function listYearImages(baseDir: string, year: string): string[] {
  const dir = path.join(PUBLIC_DIR, baseDir, year);
  try {
    return fs
      .readdirSync(dir)
      .filter((name) => IMAGE_RE.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => `/${baseDir}/${year}/${name}`);
  } catch {
    return [];
  }
}

export function readFramesFromDisk(
  baseDir: string,
  years: string[] = YEAR_DIRS,
): { image: string; caption: string; date: string; time: string; year: number }[] {
  const frames: { image: string; caption: string; date: string; time: string; year: number }[] = [];

  for (const y of years) {
    const photos = listYearImages(baseDir, y);
    for (const image of photos) {
      const caption = generateCaption(path.basename(image));
      frames.push({
        image,
        caption,
        date: "",
        time: "",
        year: Number(y),
      });
    }
  }

  return frames;
}

/**
 * Frames from a flat folder (no year subfolders). Used by the Extra-Curricular
 * galleries, which dropped the year filter — images live directly in the
 * activity folder and are picked up automatically here.
 */
export function readFramesFromFlatDir(
  baseDir: string,
): { image: string; caption: string; date: string; time: string; year: number }[] {
  const dir = path.join(PUBLIC_DIR, baseDir);
  try {
    return fs
      .readdirSync(dir)
      .filter((name) => IMAGE_RE.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => ({
        image: `/${baseDir}/${name}`,
        caption: generateCaption(name),
        date: "",
        time: "",
        year: 0,
      }));
  } catch {
    return [];
  }
}

export function readEventsFromDisk(
  baseDir: string,
  years: string[] = YEAR_DIRS,
): { image: string; name: string; date: string; time: string; year: number }[] {
  const events: { image: string; name: string; date: string; time: string; year: number }[] = [];

  for (const y of years) {
    const photos = listYearImages(baseDir, y);
    for (const image of photos) {
      const name = generateCaption(path.basename(image));
      events.push({
        image,
        name,
        date: "",
        time: "",
        year: Number(y),
      });
    }
  }

  return events;
}

export function readGalleryItemsFromDisk(
  baseDir: string,
): { image: string; title: string; alt: string }[] {
  const dir = path.join(PUBLIC_DIR, baseDir);
  try {
    return fs
      .readdirSync(dir)
      .filter((name) => IMAGE_RE.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => {
        const title = generateCaption(name);
        return {
          image: `/${baseDir}/${name}`,
          title,
          alt: title,
        };
      });
  } catch {
    return [];
  }
}

export function hasPhotos(baseDir: string, years: string[] = YEAR_DIRS): boolean {
  for (const y of years) {
    const photos = listYearImages(baseDir, y);
    if (photos.length > 0) return true;
  }
  return false;
}

export function mergeFrames(
  hardcoded: { image: string; caption: string; date: string; time: string; year: number }[],
  disk: { image: string; caption: string; date: string; time: string; year: number }[],
): { image: string; caption: string; date: string; time: string; year: number }[] {
  const hardcodedPaths = new Set(hardcoded.map((f) => f.image));
  const extra = disk.filter((f) => !hardcodedPaths.has(f.image));
  return [...hardcoded, ...extra];
}

export function mergeEvents(
  hardcoded: { image: string; name: string; date: string; time?: string; year: number }[],
  disk: { image: string; name: string; date: string; time: string; year: number }[],
): { image: string; name: string; date: string; time?: string; year: number }[] {
  const hardcodedPaths = new Set(hardcoded.map((e) => e.image));
  const extra = disk.filter((e) => !hardcodedPaths.has(e.image));
  return [...hardcoded, ...extra];
}
