import Link from "next/link";
import Card from "./Card";
import PlaceholderImage from "./PlaceholderImage";

/**
 * TEMPLATE 1 — a responsive grid of square, linking cards.
 * Reused by the Activities / Clubs / Achievements landings and Home previews.
 * This interface is the canonical contract; data files conform to it.
 */
export interface CardItem {
  title: string;
  href: string;
  /** Future image path; for now every slot renders the placeholder. */
  image: string;
  blurb?: string;
}

interface CardGridProps {
  items: CardItem[];
  /** Max columns on desktop (tablet shows 2, mobile shows 1). Default: 3. */
  columns?: 2 | 3 | 4;
}

const desktopCols: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export default function CardGrid({ items, columns = 3 }: CardGridProps) {
  return (
    <ul
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${desktopCols[columns]}`}
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="group block h-full">
            <Card className="flex h-full flex-col overflow-hidden">
              {/* Square image area */}
              <div className="relative aspect-square overflow-hidden">
                <PlaceholderImage
                  alt={item.title}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold">{item.title}</h3>
                {item.blurb && (
                  <p className="mt-2 text-sm text-text-muted">{item.blurb}</p>
                )}
                <span className="mt-4 inline-block text-sm font-medium text-accent-strong">
                  Explore →
                </span>
              </div>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
