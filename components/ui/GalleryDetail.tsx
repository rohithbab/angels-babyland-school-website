import Card from "./Card";
import PlaceholderImage from "./PlaceholderImage";
import SectionHeading from "./SectionHeading";

/**
 * TEMPLATE 2 — a titled intro followed by a grid of framed photos, each
 * frame showing its content (caption) + date + time. Image zooms on hover.
 * Reused by every leaf page (Culturals, Sports, Clubs, Achievements).
 * This interface is the canonical contract; data files conform to it.
 */
export interface GalleryFrame {
  /** Future image path; for now every slot renders the placeholder. */
  image: string;
  caption: string;
  date: string;
  time: string;
}

interface GalleryDetailProps {
  title: string;
  intro: string;
  frames: GalleryFrame[];
}

export default function GalleryDetail({
  title,
  intro,
  frames,
}: GalleryDetailProps) {
  return (
    <div>
      <SectionHeading as="h1" title={title} subtitle={intro} />

      {frames.length === 0 ? (
        <p className="mt-10 text-text-muted">Photos coming soon.</p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {frames.map((frame, i) => (
            <li key={`${frame.caption}-${i}`}>
              <Card interactive={false} className="group overflow-hidden">
                {/* Framed photo with hover zoom */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <PlaceholderImage
                    alt={frame.caption}
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Frame meta */}
                <div className="p-5">
                  <p className="font-medium">{frame.caption}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
                    <span>{frame.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{frame.time}</span>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
