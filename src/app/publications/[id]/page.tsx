import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import {
  getPublicationById,
  publicationThemeLabels,
  publications,
} from "@/data/publications";
import { profile } from "@/data/profile";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return publications.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pub = getPublicationById(id);
  if (!pub) {
    return { title: "Publication not found" };
  }
  return {
    title: pub.title,
    description: `${pub.title} — ${pub.journal} (${pub.year})`,
    alternates: { canonical: `/publications/${pub.id}` },
  };
}

export default async function PublicationDetailPage({ params }: Props) {
  const { id } = await params;
  const pub = getPublicationById(id);
  if (!pub) notFound();

  return (
    <article className="bg-paper">
      <div className="border-b border-on-void/10 bg-void text-on-void">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">
            {pub.year} · Scholarly Article
          </p>
          <h1 className="mt-5 font-display text-3xl leading-tight text-on-void md:text-5xl">
            {pub.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <dl className="space-y-6 border border-line p-6 md:p-8">
          <div>
            <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
              Journal
            </dt>
            <dd className="mt-2 font-sans text-base text-ink">{pub.journal}</dd>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                Volume
              </dt>
              <dd className="mt-2 font-sans text-ink">{pub.volume}</dd>
            </div>
            <div>
              <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                Issue
              </dt>
              <dd className="mt-2 font-sans text-ink">{pub.issue}</dd>
            </div>
            <div>
              <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                Pages
              </dt>
              <dd className="mt-2 font-sans text-ink">{pub.pages}</dd>
            </div>
          </div>
          {pub.doi ? (
            <div>
              <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                DOI
              </dt>
              <dd className="mt-2 font-sans text-ink">{pub.doi}</dd>
            </div>
          ) : null}
          {pub.issn ? (
            <div>
              <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                ISSN
              </dt>
              <dd className="mt-2 font-sans text-ink">{pub.issn}</dd>
            </div>
          ) : null}
          <div>
            <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
              Author
            </dt>
            <dd className="mt-2 font-sans text-ink">{profile.fullName}</dd>
          </div>
          <div>
            <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
              Themes
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {pub.themes.map((t) => (
                <span
                  key={t}
                  className="border border-line px-2.5 py-1 font-sans text-xs text-ink-muted"
                >
                  {publicationThemeLabels[t]}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-4">
          {pub.url ? (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 font-sans text-xs tracking-[0.16em] text-on-void uppercase transition-colors hover:bg-accent-deep"
            >
              Open via DOI <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : null}
          <Link
            href="/publications"
            className="inline-flex items-center border border-line px-5 py-2.5 font-sans text-xs tracking-[0.16em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Back to archive
          </Link>
        </div>
      </div>
    </article>
  );
}
