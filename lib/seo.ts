import type { Metadata } from "next";

/**
 * Single source of truth for site-wide SEO constants.
 * Real copy / domain / OG images are filled in a later phase.
 */
export const SITE = {
  name: "Angels Baby Land Matric Higher Secondary School",
  shortName: "Angels Baby Land School",
  tagline: "From Darkness, Lead Unto Light",
  description:
    "Angels Baby Land Matric Higher Secondary School — building a legacy of excellence in education for over 30 years.",
  // TODO: replace with the real production domain before launch.
  url: "https://www.angelsbabyland.example",
} as const;

interface PageSeo {
  /** Page-specific title; combined with the site name. Omit for the home page. */
  title?: string;
  /** Page-specific meta description. Falls back to the site description. */
  description?: string;
  /** Route path, used for canonical + OG url (e.g. "/about"). */
  path?: string;
}

/**
 * Build a per-route Metadata object with consistent title, canonical and
 * OpenGraph defaults. Page content (real descriptions/keywords) lands later.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: PageSeo = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE.shortName}` : SITE.name;
  const desc = description ?? SITE.description;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: path,
      siteName: SITE.name,
      type: "website",
    },
  };
}
