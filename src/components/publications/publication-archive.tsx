"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import {
  filterPublications,
  publicationThemeLabels,
  publicationYears,
  type PublicationTheme,
} from "@/data/publications";

export function PublicationArchive() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<number | "all">("all");
  const [theme, setTheme] = useState<PublicationTheme | "all">("all");

  const results = useMemo(
    () => filterPublications({ query, year, theme }),
    [query, year, theme],
  );

  return (
    <div>
      <div className="grid gap-4 border border-line bg-paper p-3 min-[390px]:p-4 md:grid-cols-[1.4fr_auto_auto] md:items-end md:p-5">
        <label className="block">
          <span className="font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
            Search
          </span>
          <div className="relative mt-2">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Title, journal, DOI…"
              className="w-full border border-line bg-paper-soft py-2.5 pr-3 pl-10 font-sans text-sm text-ink outline-none focus:border-accent"
            />
          </div>
        </label>

        <label className="block">
          <span className="font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
            Year
          </span>
          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value === "all" ? "all" : Number(e.target.value))
            }
            className="mt-2 w-full border border-line bg-paper-soft px-3 py-2.5 font-sans text-sm text-ink outline-none focus:border-accent md:min-w-[8rem]"
          >
            <option value="all">All years</option>
            {publicationYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
            Theme
          </span>
          <select
            value={theme}
            onChange={(e) =>
              setTheme(
                e.target.value === "all"
                  ? "all"
                  : (e.target.value as PublicationTheme),
              )
            }
            className="mt-2 w-full border border-line bg-paper-soft px-3 py-2.5 font-sans text-sm text-ink outline-none focus:border-accent md:min-w-[12rem]"
          >
            <option value="all">All themes</option>
            {(Object.keys(publicationThemeLabels) as PublicationTheme[]).map(
              (key) => (
                <option key={key} value={key}>
                  {publicationThemeLabels[key]}
                </option>
              ),
            )}
          </select>
        </label>
      </div>

      <p className="mt-6 font-sans text-sm text-ink-muted" aria-live="polite">
        {results.length} publication{results.length === 1 ? "" : "s"}
      </p>

      {results.length === 0 ? (
        <div className="mt-8 border border-dashed border-line px-6 py-16 text-center">
          <p className="font-display text-2xl text-ink">No publications found</p>
          <p className="mt-2 font-sans text-sm text-ink-muted">
            Try another search term or clear the filters.
          </p>
        </div>
      ) : (
        <ol className="mt-4">
          {results.map((pub) => (
            <li key={pub.id}>
              <article className="grid gap-3 border-t border-line py-8 md:grid-cols-[5rem_1fr_auto] md:gap-8">
                <p className="font-display text-2xl text-accent">{pub.year}</p>
                <div>
                  <h2 className="font-sans text-base leading-snug text-ink md:text-lg">
                    <Link
                      href={`/publications/${pub.id}`}
                      className="transition-colors hover:text-accent"
                    >
                      {pub.title}
                    </Link>
                  </h2>
                  <p className="mt-3 font-sans text-sm text-ink-muted">
                    <span className="text-ink">{pub.journal}</span>
                    <span className="mx-2">·</span>
                    Vol. {pub.volume}, Issue {pub.issue}
                    <span className="mx-2">·</span>
                    pp. {pub.pages}
                  </p>
                  {pub.doi ? (
                    <p className="mt-2 font-sans text-xs text-ink-muted">
                      DOI: {pub.doi}
                    </p>
                  ) : null}
                  {pub.issn ? (
                    <p className="mt-1 font-sans text-xs text-ink-muted">
                      ISSN: {pub.issn}
                    </p>
                  ) : null}
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {pub.themes.map((t) => (
                      <li
                        key={t}
                        className="font-sans text-[0.62rem] tracking-[0.14em] text-accent uppercase"
                      >
                        {publicationThemeLabels[t]}
                      </li>
                    ))}
                  </ul>
                </div>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 self-start font-sans text-xs tracking-[0.14em] text-accent uppercase"
                  >
                    Open DOI <ExternalLink className="h-3 w-3" />
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
