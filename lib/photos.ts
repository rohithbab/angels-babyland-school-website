import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

const YEAR_DIRS = ["2025", "2026"];

export function generateCaption(filename: string): string {
  const name = filename.replace(IMAGE_RE, "");
  return name
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
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
