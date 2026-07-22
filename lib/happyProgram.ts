import fs from "node:fs";
import path from "node:path";
import { HAPPY_PROGRAM_BASE, HAPPY_PROGRAM_DIR } from "@/data/happyProgram";
import type { GalleryFrame } from "@/components/ui/GalleryDetail";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

function listPhotosInDir(yearDir: string): string[] {
  const dir = path.join(PUBLIC_DIR, HAPPY_PROGRAM_DIR, yearDir);
  try {
    return fs
      .readdirSync(dir)
      .filter((name) => IMAGE_RE.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => `${HAPPY_PROGRAM_BASE}/${yearDir}/${name}`);
  } catch {
    return [];
  }
}

export function getHappyProgramFrames(): GalleryFrame[] {
  const frames: GalleryFrame[] = [];
  const year = new Date().getFullYear();

  for (const y of [2025, 2026]) {
    const photos = listPhotosInDir(String(y));
    for (const photo of photos) {
      frames.push({
        image: photo,
        caption: "",
        date: "",
        time: "",
        year: y,
      });
    }
  }

  return frames;
}

export function getHappyProgramHighlights(): { slug: string; title: string; src: string }[] {
  const photos = listPhotosInDir("2025");
  return photos.slice(0, 10).map((src, i) => ({
    slug: `happy-program-${i}`,
    title: "Happy Program",
    src,
  }));
}
