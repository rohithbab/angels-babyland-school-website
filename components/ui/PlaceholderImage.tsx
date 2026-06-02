import Image from "next/image";

/**
 * The ONE image component used for every image slot site-wide.
 * Wraps the single placeholder asset; real images are swapped in later by
 * changing this component only. `alt` is required for accessibility/SEO.
 *
 * Default mode is `fill` — place inside a positioned (relative) container
 * that defines the aspect ratio. Pass width/height for intrinsic sizing.
 */
const PLACEHOLDER_SRC = "/assets/placeholder.jpg";

interface PlaceholderImageProps {
  /** Required descriptive alt text (placeholder copy for now). */
  alt: string;
  /** Fill the parent (parent must be `relative`). Default: true. */
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  /** Responsive sizes hint for the browser. */
  sizes?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  alt,
  fill = true,
  width,
  height,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: PlaceholderImageProps) {
  if (!fill && width && height) {
    return (
      <Image
        src={PLACEHOLDER_SRC}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={PLACEHOLDER_SRC}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}
