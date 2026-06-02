import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { clubs } from "@/data/clubs";
import { achievements } from "@/data/achievements";

/**
 * Sitemap stub — lists every static + data-driven route.
 * lastModified/priority are filled with real values before launch.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/our-journey",
    "/academics",
    "/activities",
    "/activities/culturals",
    "/activities/sports",
    "/activities/clubs",
    "/achievements",
    "/gallery",
    "/contact",
  ];

  const clubPaths = clubs.map((c) => `/activities/clubs/${c.slug}`);
  const achievementPaths = achievements.map((a) => `/achievements/${a.slug}`);

  return [...staticPaths, ...clubPaths, ...achievementPaths].map((path) => ({
    url: `${SITE.url}${path}`,
  }));
}
