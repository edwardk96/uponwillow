"use client";

import { useEffect, useState } from "react";
import { navLinks, siteMeta } from "@/content/meta";
import { ButtonLink } from "@/components/ui/button";

/**
 * Top navigation. Client component because:
 *   - Mobile menu open/close state
 *   - Scroll-spy via IntersectionObserver to highlight the active section
 *
 * The scroll-spy uses IntersectionObserver rather than a scroll listener
 * (cheaper, batched by the browser).
 *
 * Logos are plain <img> tags rather than next/image. The optimization
 * benefits of next/image (lazy loading, AVIF, responsive sizing) are
 * irrelevant for tiny above-the-fold SVGs, and next/image's default
 * SVG handling has historically been fiddly (dangerouslyAllowSVG etc.).
 * Boring solution wins (coding rule 1.8).
 */
export function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Trigger when section is roughly in the upper half of the viewport.
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-card border-b-[0.5px] border-divider transition-shadow ${
        scrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <nav className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 h-14 max-w-4xl mx-auto">
        {/* Logos — left */}
        <div className="flex items-center gap-1">
          <a
            href={siteMeta.uponUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Upon — opens in a new tab"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/upon-logo.png" alt="Upon" className="h-6 w-auto" />
          </a>
          <span className="text-muted text-sm" aria-hidden="true">
            ×
          </span>
          <a
            href={siteMeta.willowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Willow — opens in a new tab"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/willow-logo.svg" alt="Willow" className="h-4 w-auto" />
          </a>
        </div>

        {/* Nav links — centre, desktop only */}
        <ul className="hidden md:flex justify-center gap-7 text-sm">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-tertiary font-normal hover:text-primary"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Spacer for mobile to keep grid balanced */}
        <div className="md:hidden" />

        {/* CTA + hamburger — right */}
        <div className="flex items-center gap-2 justify-end">
          <ButtonLink
            variant="primary"
            href={siteMeta.calcomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex !px-3.5 !py-1.5 !text-xs"
          >
            Book a 20-min call
          </ButtonLink>
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-band transition-colors"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-[0.5px] border-divider bg-card">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block px-6 py-3 text-3.5 transition-colors ${
                      isActive
                        ? "text-primary font-medium bg-band"
                        : "text-tertiary font-normal hover:text-primary"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="px-6 py-3">
              <ButtonLink
                variant="primary"
                href={siteMeta.calcomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Book a 20-min call
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
