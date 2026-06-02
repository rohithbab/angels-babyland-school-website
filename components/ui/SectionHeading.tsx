import type { ElementType } from "react";

/** Heading + optional subtext block, with consistent spacing. */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Heading level/tag. Default: h2. Use h1 once per page. */
  as?: ElementType;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  as: Heading = "h2",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <Heading>{title}</Heading>
      {subtitle && (
        <p className="mt-3 text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
