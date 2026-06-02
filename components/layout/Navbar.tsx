"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, type NavItem } from "@/data/navigation";

/** Is `href` the active route (exact match, or a parent of the current path)? */
function useIsActive() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };
}

export default function Navbar() {
  const isActive = useIsActive();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="container-x flex h-16 items-center justify-between gap-6 lg:h-20"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMobile}
          className="flex flex-col leading-tight"
        >
          <span className="font-heading text-base font-bold tracking-tight lg:text-lg">
            Angels Baby Land
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted lg:text-xs">
            Matric Hr. Sec. School
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.href} item={item} isActive={isActive} />
            ) : (
              <li key={item.href}>
                <DesktopLink href={item.href} active={isActive(item.href)}>
                  {item.label}
                </DesktopLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile slide-in panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          onClick={closeMobile}
          className={`absolute inset-0 bg-text/30 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-1 overflow-y-auto border-l border-border bg-bg px-6 pb-8 pt-20 shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="border-b border-border/60">
                <button
                  type="button"
                  onClick={() => setMobileSubOpen((v) => !v)}
                  aria-expanded={mobileSubOpen}
                  className="flex w-full items-center justify-between py-3 text-left font-medium"
                >
                  {item.label}
                  <span
                    className={`text-text-muted transition-transform duration-200 ${
                      mobileSubOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {mobileSubOpen && (
                  <ul className="pb-2 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeMobile}
                          className={`block py-2 text-sm ${
                            isActive(child.href)
                              ? "text-accent-strong"
                              : "text-text-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`border-b border-border/60 py-3 font-medium ${
                  isActive(item.href) ? "text-accent-strong" : "text-text"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop sub-components                                             */
/* ------------------------------------------------------------------ */

function DesktopLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
        active ? "text-accent-strong" : "text-text hover:text-accent-strong"
      }`}
    >
      {children}
      {/* Nav underline */}
      <span
        className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-accent-strong transition-transform duration-200 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

function DesktopDropdown({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: (href: string) => boolean;
}) {
  const parentActive = isActive(item.href);
  return (
    <li className="group relative">
      <Link
        href={item.href}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
          parentActive
            ? "text-accent-strong"
            : "text-text hover:text-accent-strong"
        }`}
      >
        {item.label}
        <span className="text-[10px] text-text-muted transition-transform duration-200 group-hover:rotate-180">
          ▾
        </span>
      </Link>
      {/* Dropdown — appears on hover / focus-within */}
      <div className="invisible absolute left-0 top-full min-w-44 translate-y-1 border border-border bg-bg opacity-0 shadow-[var(--shadow-card)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul className="py-1">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={`block px-4 py-2 text-sm transition-colors hover:bg-bg-alt ${
                  isActive(child.href)
                    ? "text-accent-strong"
                    : "text-text"
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
