import Link from "next/link";

/** On-brand call-to-action button. Renders a Next.js Link. */
interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  /** primary = filled pink; secondary = outlined. Default: primary. */
  variant?: "primary" | "secondary";
  /** md = standard; lg = larger padding + text (e.g. hero). Default: md. */
  size?: "md" | "lg";
  className?: string;
}

const base =
  "inline-flex items-center justify-center rounded-[var(--radius-card)] font-medium transition-colors duration-200";

const sizes: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base lg:text-lg",
};

const variants: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-text hover:bg-accent-strong",
  secondary:
    "border border-border bg-bg text-text hover:bg-bg-alt",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
