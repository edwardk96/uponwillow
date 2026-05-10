"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/meta";
import { ButtonLink } from "@/components/ui/button";

export function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    if (sectionIds.length === 0) return;

    // Trigger line sits just below the 56px sticky nav.
    const triggerLine = 80;

    const compute = () => {
      let active = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerLine) {
          active = id;
        } else {
          break;
        }
      }
      setActiveSection(active);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
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
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 hover:opacity-80 transition-opacity bg-transparent border-none p-0 cursor-pointer"
          aria-label="Scroll back to top"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/upon-logo.svg" alt="Upon" className="h-6 w-auto" />

          <span className="text-muted text-sm" aria-hidden="true">
            ×
          </span>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/willow-logo.svg" alt="Willow" className="h-4 w-auto" />
        </button>
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
            href={process.env.NEXT_PUBLIC_CALCOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="!hidden md:!inline-flex !px-3 !py-1.5 text-xs"
          >
            Book a 15-min call
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
                href={process.env.NEXT_PUBLIC_CALCOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Book a 15-min call
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
