import type { Metadata } from "next";
import { PublicationArchive } from "@/components/publications/publication-archive";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Publications",
  description: `Verified publication archive for ${profile.fullName}, including research on healthcare data interoperability, cloud security and software quality.`,
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  return (
    <div className="bg-paper">
      <div className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">
            Scholarly Archive
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-ink md:text-6xl">
            Publications
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-base text-ink-muted">
            An editorial index of verified publications. Search by title,
            journal or DOI; filter by year and research theme.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <PublicationArchive />
      </div>
    </div>
  );
}
