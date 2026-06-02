import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/** robots.txt stub — allow all crawling and point at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
