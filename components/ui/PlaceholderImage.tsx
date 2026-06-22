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
  /** Override the default placeholder source. */
  src?: string;
  /** Fill the parent (parent must be `relative`). Default: true. */
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  /** Responsive sizes hint for the browser. */
  sizes?: string;
  priority?: boolean;
  /** Encode quality (1-100). Defaults to Next's 75; raise for sharper photos. */
  quality?: number;
}

export default function PlaceholderImage({
  alt,
  src,
  fill = true,
  width,
  height,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  quality,
}: PlaceholderImageProps) {
  const imgSrc = src ?? PLACEHOLDER_SRC;

  if (!fill && width && height) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        quality={quality}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
      quality={quality}
    />
  );
}
