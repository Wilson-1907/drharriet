import type { Metadata } from "next";
import { TheResearcher } from "@/components/research/the-researcher";
import { researchProfiles } from "@/data/profiles";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description: `Research themes and scholarly interests of ${profile.fullName} — AI, cybersecurity, human-centered computing, healthcare data and digital education.`,
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <div className="bg-paper">
      <div className="border-b border-on-void/10 bg-void text-on-void">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">
            Research Landscape
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-on-void md:text-6xl">
            Technology, people and systems
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {researchProfiles.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 border border-on-void/30 px-3 py-2 font-sans text-xs tracking-[0.14em] text-on-void/85 uppercase transition-colors hover:border-accent hover:text-accent"
              >
                {p.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <TheResearcher />
    </div>
  );
}
