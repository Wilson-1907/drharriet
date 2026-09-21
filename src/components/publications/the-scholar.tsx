import Link from "next/link";
import { publications } from "@/data/publications";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink } from "lucide-react";

export function TheScholar() {
  const featured = publications.slice(0, 4);

  return (
    <section
      id="the-scholar"
      aria-labelledby="scholar-heading"
      className="bg-paper-soft"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionLabel number="07" label="The Scholar" />
            <h2
              id="scholar-heading"
              className="mt-5 font-display text-4xl text-ink md:text-5xl"
            >
              Selected Research
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <ButtonLink href="/publications" variant="outline">
              Full publication archive
            </ButtonLink>
          </Reveal>
        </div>

        <ol className="mt-12">
          {featured.map((pub, index) => (
            <Reveal key={pub.id} as="li" delay={index * 50}>
              <article className="grid gap-3 border-t border-line py-8 md:grid-cols-[5rem_1fr_auto] md:gap-8">
                <p className="font-display text-2xl text-accent">{pub.year}</p>
                <div>
                  <h3 className="font-sans text-base leading-snug text-ink md:text-lg">
                    <Link
                      href={`/publications/${pub.id}`}
                      className="transition-colors hover:text-accent"
                    >
                      {pub.title}
                    </Link>
                  </h3>
                  <p className="mt-3 font-sans text-sm text-ink-muted">
                    {pub.journal}
                    <span className="mx-2 text-line">·</span>
                    Vol. {pub.volume}, Issue {pub.issue}
                    <span className="mx-2 text-line">·</span>
                    pp. {pub.pages}
                  </p>
                  {pub.doi ? (
                    <p className="mt-2 font-sans text-xs tracking-wide text-ink-muted">
                      DOI: {pub.doi}
                    </p>
                  ) : null}
                </div>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 self-start font-sans text-xs tracking-[0.14em] text-accent uppercase transition-opacity hover:opacity-70"
                  >
                    DOI <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="font-sans text-xs text-ink-muted">—</span>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
