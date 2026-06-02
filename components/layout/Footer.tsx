import Link from "next/link";
import { footerLinks, contactInfo } from "@/data/navigation";
import { SITE } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container-x grid grid-cols-1 gap-10 py-12 md:grid-cols-3 lg:py-16">
        {/* Brand + tagline */}
        <div>
          <h2 className="font-heading text-lg font-bold leading-snug">
            {SITE.name}
          </h2>
          <p className="mt-3 text-sm italic text-text-muted">
            &ldquo;{SITE.tagline}&rdquo;
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text transition-colors hover:text-accent-strong"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-text-muted">
            <p>{contactInfo.address}</p>
            <p>
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="transition-colors hover:text-accent-strong"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-accent-strong"
              >
                {contactInfo.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-5 text-center text-xs text-text-muted">
          © {2026} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
