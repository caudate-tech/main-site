"use client";

import Link from 'next/link';
import { useState } from 'react';
import { serviceCategories } from '@/data/service-categories';

const linkClass =
  'font-bold tracking-tight text-outline hover:text-primary transition-all duration-300 text-sm lg:text-base whitespace-nowrap';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto relative gap-4">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-black text-on-surface tracking-tighter shrink-0"
          onClick={() => setIsMobileOpen(false)}
        >
          Caudate Tech
        </Link>

        <div className="hidden md:flex items-center flex-wrap justify-end gap-x-3 lg:gap-x-5 gap-y-2 flex-1 min-w-0">
          <Link href="/services" className={linkClass} title="Full services overview">
            Overview
          </Link>
          {serviceCategories.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className={linkClass}
              title={c.description}
            >
              <span className="hidden lg:inline">{c.label}</span>
              <span className="lg:hidden">{c.shortLabel}</span>
            </Link>
          ))}
          <Link href="/case-studies" className={linkClass}>
            Case Studies
          </Link>
          <Link href="/about" className={linkClass}>
            About
          </Link>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-low"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMobileOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-primary to-primary-container text-white px-3 sm:px-6 py-2.5 rounded-xl font-bold transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20 text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Start Project</span>
            <span className="sm:hidden">Contact</span>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-primary to-primary-container h-[2px] w-full absolute bottom-0 left-0" />
      </div>

      {isMobileOpen ? (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-outline-variant/15 bg-white/95 backdrop-blur-md max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto"
        >
          <div className="px-8 py-4 flex flex-col gap-1">
            <p className="text-[10px] font-black text-outline uppercase tracking-widest px-3 pt-2">
              Services
            </p>
            <Link
              href="/services"
              className="px-3 py-3 rounded-xl font-bold text-on-surface hover:bg-surface-container-low"
              onClick={() => setIsMobileOpen(false)}
            >
              Full overview
            </Link>
            {serviceCategories.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="px-3 py-3 rounded-xl text-on-surface hover:bg-surface-container-low flex items-start gap-3"
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="material-symbols-outlined text-primary text-xl shrink-0">
                  {c.icon}
                </span>
                <span>
                  <span className="font-bold block">{c.label}</span>
                  <span className="text-xs text-outline font-medium">{c.description}</span>
                </span>
              </Link>
            ))}
            <div className="border-t border-outline-variant/10 my-2" />
            <Link
              href="/case-studies"
              className="px-3 py-3 rounded-xl font-bold text-on-surface hover:bg-surface-container-low"
              onClick={() => setIsMobileOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="px-3 py-3 rounded-xl font-bold text-on-surface hover:bg-surface-container-low"
              onClick={() => setIsMobileOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
