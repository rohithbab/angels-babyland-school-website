import type { ElementType } from "react";

/** Heading + optional subtext block, with consistent spacing. */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Heading level/tag. Default: h2. Use h1 once per page. */
  as?: ElementType;
  align?: "left" | "center";
  /** Flank the title with short decorative rules: ──── Title ────. */
  flanked?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  as: Heading = "h2",
  align = "left",
  flanked = false,
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {flanked ? (
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-accent-strong/50 sm:w-16" aria-hidden />
          <Heading className="whitespace-nowrap">{title}</Heading>
          <span className="h-px w-10 bg-accent-strong/50 sm:w-16" aria-hidden />
        </div>
      ) : (
        <Heading>{title}</Heading>
      )}
      {subtitle && <p className="mt-3 text-text-muted">{subtitle}</p>}
    </div>
  );
}
