"use client";

import { useMemo, useState } from "react";
import {
  constellationCenter,
  researchJourney,
  researchThemes,
  type ResearchThemeId,
} from "@/data/research";
import { publications } from "@/data/publications";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

const nodePositions: Record<ResearchThemeId, { x: number; y: number }> = {
  ai: { x: 50, y: 12 },
  cybersecurity: { x: 82, y: 28 },
  hci: { x: 88, y: 58 },
  education: { x: 72, y: 84 },
  software: { x: 28, y: 84 },
  "digital-learning": { x: 12, y: 58 },
  healthcare: { x: 18, y: 28 },
  quality: { x: 50, y: 72 },
};

export function TheResearcher() {
  const [active, setActive] = useState<ResearchThemeId>("healthcare");

  const theme = researchThemes.find((t) => t.id === active)!;

  const relatedPubs = useMemo(
    () =>
      publications.filter((p) =>
        p.themes.some((t) => theme.publicationThemes.includes(t)),
      ),
    [theme],
  );

  return (
    <section
      id="the-researcher"
      aria-labelledby="researcher-heading"
      className="bg-paper-soft"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionLabel number="02" label="The Researcher" />
          <h2
            id="researcher-heading"
            className="mt-5 max-w-2xl font-display text-[clamp(1.85rem,5.5vw,3rem)] leading-tight text-ink md:text-5xl"
          >
            Research at the intersection of technology, people and systems.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Desktop constellation */}
          <Reveal className="hidden md:block">
            <div
              className="relative aspect-square w-full max-w-xl mx-auto lg:max-w-none"
              role="group"
              aria-label="Interactive research constellation"
            >
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {researchThemes.map((t) => {
                  const pos = nodePositions[t.id];
                  const related = theme.related.includes(t.id) || t.id === active;
                  return (
                    <line
                      key={`line-${t.id}`}
                      x1="50"
                      y1="50"
                      x2={pos.x}
                      y2={pos.y}
                      stroke={related ? "#8B1E2D" : "currentColor"}
                      strokeWidth={related ? 0.35 : 0.15}
                      className={related ? "opacity-80" : "text-ink/15 opacity-60"}
                    />
                  );
                })}
                {theme.related.map((rid) => {
                  const a = nodePositions[active];
                  const b = nodePositions[rid];
                  return (
                    <line
                      key={`rel-${rid}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke="#8B1E2D"
                      strokeWidth="0.25"
                      strokeDasharray="1 1"
                      className="opacity-50"
                    />
                  );
                })}
              </svg>

              <div className="absolute top-1/2 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-paper shadow-sm">
                <span className="font-sans text-[0.62rem] tracking-[0.2em] text-ink uppercase">
                  {constellationCenter.label}
                </span>
              </div>

              {researchThemes.map((t) => {
                const pos = nodePositions[t.id];
                const isActive = t.id === active;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActive(t.id)}
                    onMouseEnter={() => setActive(t.id)}
                      className={cn(
                      "absolute z-20 max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-1.5 text-center font-sans text-[0.58rem] leading-tight tracking-[0.08em] uppercase transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:px-3 lg:text-[0.65rem]",
                      isActive
                        ? "border-accent bg-accent text-on-void"
                        : "border-line bg-paper text-ink hover:border-accent hover:text-accent",
                    )}
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                    aria-pressed={isActive}
                  >
                    {t.shortLabel}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Mobile theme list */}
          <Reveal className="md:hidden">
            <div className="flex flex-wrap gap-2" role="listbox" aria-label="Research themes">
              {researchThemes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="option"
                  aria-selected={t.id === active}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "rounded-full border px-3 py-2 font-sans text-[0.65rem] tracking-[0.12em] uppercase",
                    t.id === active
                      ? "border-accent bg-accent text-on-void"
                      : "border-line bg-paper text-ink",
                  )}
                >
                  {t.shortLabel}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="border border-line bg-paper p-6 md:p-8">
              <p className="font-sans text-[0.62rem] tracking-[0.22em] text-accent uppercase">
                Theme
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                {theme.label}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink-muted md:text-base">
                {theme.description}
              </p>

              <div className="mt-8">
                <p className="font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
                  Related publications
                </p>
                {relatedPubs.length === 0 ? (
                  <p className="mt-3 font-sans text-sm text-ink-muted">
                    No verified publications mapped to this theme yet.
                  </p>
                ) : (
                  <ul className="mt-3 space-y-4">
                    {relatedPubs.map((p) => (
                      <li key={p.id} className="border-t border-line pt-4">
                        <p className="font-sans text-xs text-accent">{p.year}</p>
                        <Link
                          href={`/publications/${p.id}`}
                          className="mt-1 block font-sans text-sm leading-snug text-ink transition-colors hover:text-accent"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <p className="font-sans text-[0.62rem] tracking-[0.22em] text-accent uppercase">
            Research story
          </p>
          <p className="mt-2 max-w-2xl font-sans text-sm text-ink-muted">
            A visual reading of themes present in documented publications — not
            presented as a single formal research programme.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
            {researchJourney.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-3">
                <span className="font-sans text-sm text-ink md:text-base">
                  {step}
                </span>
                {i < researchJourney.length - 1 ? (
                  <span className="text-accent" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
