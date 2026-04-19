"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import {
  insightsMenu,
  insightsPaths,
  solutionsMenu,
  solutionsRelatedPaths,
} from "@/data/navigation";

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "solutions" | "insights">(null);

  const solutionsActive = solutionsRelatedPaths.some(
    (p) => pathname === p || (p !== "/services" && pathname.startsWith(`${p}/`)),
  );
  const insightsActive = insightsPaths.some((p) => isPathActive(pathname, p));
  const aboutActive = isPathActive(pathname, "/about");
  const homeActive = pathname === "/";

  const closeDropdowns = useCallback(() => setOpenMenu(null), []);

  const navTriggerClass = (active: boolean, menu: "solutions" | "insights") => {
    const isOpen = openMenu === menu;
    return [
      "group relative flex items-center gap-1 py-2 font-semibold tracking-tight transition-colors duration-200",
      "after:pointer-events-none after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:rounded-full",
      "after:bg-gradient-to-r after:from-transparent after:via-primary-fixed after:to-transparent",
      "after:opacity-0 after:transition-opacity after:duration-300",
      active || isOpen ? "text-primary after:opacity-100" : "text-on-surface hover:text-primary",
      "hover:after:opacity-100",
    ].join(" ");
  };

  const standaloneLinkClass = (active: boolean) =>
    [
      "relative py-2 font-semibold tracking-tight transition-colors duration-200",
      "after:pointer-events-none after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:rounded-full",
      "after:bg-gradient-to-r after:from-transparent after:via-primary-fixed after:to-transparent",
      "after:opacity-0 after:transition-opacity after:duration-300",
      active ? "text-primary after:opacity-100" : "text-on-surface hover:text-primary hover:after:opacity-100",
    ].join(" ");

  const dropdownItemClass = (href: string) => {
    const active = pathname === href;
    return [
      "block rounded-xl p-3 transition-colors",
      active
        ? "bg-primary/10 text-primary"
        : "text-on-surface hover:bg-surface-container-low",
    ].join(" ");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-white/85 shadow-sm shadow-on-surface/5 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:gap-10">
        <Link
          href="/"
          className={[
            "shrink-0 text-xl font-black tracking-tighter text-on-surface sm:text-2xl",
            "transition-opacity hover:opacity-85",
            homeActive ? "text-primary" : "",
          ].join(" ")}
          onClick={() => setMobileOpen(false)}
          aria-current={homeActive ? "page" : undefined}
        >
          Caudate Tech
        </Link>

        <div className="hidden items-center gap-10 lg:gap-12 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("solutions")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className={navTriggerClass(solutionsActive, "solutions")}
              aria-expanded={openMenu === "solutions"}
              aria-haspopup="true"
            >
              Solutions
              <span className="material-symbols-outlined text-base text-current transition-transform group-hover:translate-y-px">
                expand_more
              </span>
            </button>
            {openMenu === "solutions" ? (
              <div className="absolute left-0 top-full z-50 w-[min(22rem,calc(100vw-2rem))] pt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="rounded-2xl border border-outline-variant/15 bg-white p-2 shadow-xl">
                  <Link
                    href="/services"
                    onClick={closeDropdowns}
                    className="mb-1 block rounded-xl px-3 py-2 text-sm font-normal text-outline transition-colors hover:bg-surface-container-low hover:text-on-surface"
                  >
                    Full services overview
                  </Link>
                  <div className="my-1 border-t border-outline-variant/10" />
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeDropdowns}
                      className={dropdownItemClass(item.href)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 text-lg text-primary">
                          {item.icon}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold leading-snug">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs font-normal leading-relaxed text-outline">
                            {item.sublabel}
                          </span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("insights")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className={navTriggerClass(insightsActive, "insights")}
              aria-expanded={openMenu === "insights"}
              aria-haspopup="true"
            >
              Insights
              <span className="material-symbols-outlined text-base text-current transition-transform group-hover:translate-y-px">
                expand_more
              </span>
            </button>
            {openMenu === "insights" ? (
              <div className="absolute left-0 top-full z-50 w-[min(20rem,calc(100vw-2rem))] pt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="rounded-2xl border border-outline-variant/15 bg-white p-2 shadow-xl">
                  {insightsMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeDropdowns}
                      className={dropdownItemClass(item.href)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 text-lg text-primary">
                          {item.icon}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold leading-snug">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs font-normal leading-relaxed text-outline">
                            {item.sublabel}
                          </span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/about"
            className={standaloneLinkClass(aboutActive)}
            aria-current={aboutActive ? "page" : undefined}
          >
            About
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="rounded-lg p-2 text-on-surface hover:bg-surface-container-low md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
          <Link
            href="/contact"
            className="nav-cta-neural rounded-xl bg-gradient-to-r from-primary to-primary-container px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35 active:translate-y-0 sm:px-6 sm:text-base"
          >
            <span className="hidden sm:inline">Start Project</span>
            <span className="sm:hidden">Start</span>
          </Link>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-primary-container/50 to-transparent" />
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="max-h-[min(75vh,calc(100dvh-5rem))] overflow-y-auto border-t border-outline-variant/15 bg-white/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-6 px-8 py-6">
            <div>
              <p className="px-1 text-[10px] font-black uppercase tracking-widest text-outline">
                Solutions
              </p>
              <Link
                href="/services"
                className="mt-2 block rounded-xl px-3 py-3 text-sm font-semibold text-on-surface hover:bg-surface-container-low"
                onClick={() => setMobileOpen(false)}
              >
                Full Services Overview
              </Link>
              {solutionsMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mt-1 flex gap-3 rounded-xl px-3 py-3 hover:bg-surface-container-low"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className="mt-0.5 block text-xs font-normal text-outline">
                      {item.sublabel}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="border-t border-outline-variant/10 pt-4">
              <p className="px-1 text-[10px] font-black uppercase tracking-widest text-outline">
                Insights
              </p>
              {insightsMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mt-2 flex gap-3 rounded-xl px-3 py-3 hover:bg-surface-container-low"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className="mt-0.5 block text-xs font-normal text-outline">
                      {item.sublabel}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/about"
              className="rounded-xl px-3 py-3 font-semibold text-on-surface hover:bg-surface-container-low"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
