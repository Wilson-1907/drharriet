"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    const prevOverflow = style.overflow;
    const prevPosition = style.position;
    const prevTop = style.top;
    const prevWidth = style.width;

    // Lock scroll without jumping — keeps header fixed in viewport
    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";

    return () => {
      style.overflow = prevOverflow;
      style.position = prevPosition;
      style.top = prevTop;
      style.width = prevWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 border-b transition-colors duration-300",
          open ? "z-[80]" : "z-50",
          scrolled || open
            ? "border-line bg-paper/95 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 min-[390px]:px-5 sm:py-4 md:px-8">
          <Link
            href="/"
            className="group min-w-0 font-sans text-[0.68rem] tracking-[0.18em] text-ink uppercase transition-colors hover:text-accent"
            onClick={() => setOpen(false)}
          >
            <span className="block truncate font-display text-base tracking-normal normal-case text-ink group-hover:text-accent sm:text-lg md:text-xl">
              Dr. H. L. Tsinale
            </span>
            <span className="mt-0.5 hidden text-[0.62rem] text-ink-muted sm:block">
              Director, ODeL · Lecturer · Karatina University
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary"
          >
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-sans text-[0.68rem] tracking-[0.2em] uppercase transition-colors",
                    active
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative z-[80] inline-flex h-10 w-10 items-center justify-center text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fixed viewport overlay — always opens in place, even when scrolled */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-void/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />

        <div
          id="mobile-nav"
          className={cn(
            "absolute top-0 right-0 left-0 max-h-[min(100dvh,100%)] overflow-y-auto border-b border-line bg-paper pt-[4.5rem] shadow-xl transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "-translate-y-full",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="flex flex-col px-5 pb-8" aria-label="Mobile">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-line/60 py-4 font-sans text-sm tracking-[0.14em] uppercase transition-colors",
                    active ? "text-accent" : "text-ink hover:text-accent",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
