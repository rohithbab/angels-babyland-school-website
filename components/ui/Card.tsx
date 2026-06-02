/**
 * Square card primitive — the site's signature element.
 * White surface, thin border, soft shadow, near-square corners (2px).
 * When `interactive`, it lifts (scale 1.03) with a stronger shadow on hover.
 */
interface CardProps {
  children: React.ReactNode;
  /** Apply the hover lift. Use for clickable cards. Default: true. */
  interactive?: boolean;
  className?: string;
}

export default function Card({
  children,
  interactive = true,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-border bg-bg shadow-[var(--shadow-card)] ${
        interactive
          ? "transition-[transform,box-shadow] duration-200 ease-out hover:scale-[1.03] hover:shadow-[var(--shadow-card-hover)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
