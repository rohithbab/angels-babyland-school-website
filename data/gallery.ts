/** A single general-campus gallery image. */
export interface GalleryItem {
  /** Future image path; for now every slot renders the placeholder. */
  image: string;
  /** Required descriptive alt / caption text. */
  alt: string;
}

const IMG = "/assets/placeholder.jpg";

/** General campus images — distinct from activity/achievement galleries. */
export const galleryImages: GalleryItem[] = [
  { image: IMG, alt: "School main building and entrance" },
  { image: IMG, alt: "Students in a classroom session" },
  { image: IMG, alt: "Annual day stage performance" },
  { image: IMG, alt: "School library reading area" },
  { image: IMG, alt: "Science laboratory in use" },
  { image: IMG, alt: "Playground and outdoor activities" },
  { image: IMG, alt: "Computer lab with students" },
  { image: IMG, alt: "Sports day track event" },
  { image: IMG, alt: "Cultural celebration on campus" },
  { image: IMG, alt: "Morning assembly ground" },
];
