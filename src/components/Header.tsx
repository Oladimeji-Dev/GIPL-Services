"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(61,49,38,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-espresso-800 transition-colors hover:text-bronze-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-medium text-espresso-800 transition-colors hover:text-bronze-600"
          >
            {siteConfig.phone}
          </a>
          <a
            href="#quote"
            className="rounded-full bg-espresso-900 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-bronze-600"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-espresso-900 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 border-t border-espresso-900/10 bg-paper px-5 py-4 sm:px-8"
          aria-label="Mobile primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-espresso-800 transition-colors hover:bg-surface hover:text-bronze-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="rounded-lg px-2 py-3 text-base font-medium text-espresso-800 transition-colors hover:bg-surface hover:text-bronze-600"
          >
            {siteConfig.phone}
          </a>
          <a
            href="#quote"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-espresso-900 px-5 py-3 text-center text-base font-semibold text-paper transition-colors hover:bg-bronze-600"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
