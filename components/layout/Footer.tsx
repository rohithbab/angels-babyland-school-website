import Link from "next/link";
import { footerLinks, socialLinks, contactInfo } from "@/data/navigation";
import { SITE } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-bg-alt">
      <div className="container-x grid grid-cols-1 gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:py-16">
        {/* Brand + motto + contact */}
        <div>
          <h2 className="font-heading text-lg font-bold leading-snug">
            {SITE.name}
          </h2>
          <p className="mt-2 text-sm italic text-text-muted">
            &ldquo;{SITE.tagline}&rdquo;
          </p>
          <address className="mt-5 space-y-2 text-sm not-italic text-text-muted">
            <p>{contactInfo.address}</p>
            <p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-accent-strong"
              >
                {contactInfo.email}
              </a>
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="transition-colors hover:text-accent-strong"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`tel:${contactInfo.phoneAlt.replace(/\s+/g, "")}`}
                className="transition-colors hover:text-accent-strong"
              >
                {contactInfo.phoneAlt}
              </a>
            </p>
          </address>
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

        {/* Socials */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
            Socials
          </h3>
          <ul className="mt-4 space-y-2">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text transition-colors hover:text-accent-strong"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-x pb-6 text-xs text-text-muted">
        © {2026} {SITE.name}. All rights reserved.
      </div>

      {/* Soft pink glows hugging the left and right sides */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%]"
        style={{
          background:
            "radial-gradient(50% 115% at 0% 100%, rgba(248,187,208,0.55), transparent 70%), radial-gradient(50% 115% at 100% 100%, rgba(248,187,208,0.55), transparent 70%)",
        }}
      />

      {/* Oversized brand watermark — fades downward into the footer */}
      <div aria-hidden className="select-none px-2 text-center leading-[0.8]">
        <span className="block bg-gradient-to-b from-accent/70 to-accent/0 bg-clip-text font-heading text-[16vw] font-extrabold tracking-tight text-transparent">
          ABL SCHOOL
        </span>
      </div>
    </footer>
  );
}
