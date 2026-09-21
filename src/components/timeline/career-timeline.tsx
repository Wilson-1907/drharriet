"use client";

import { useState } from "react";
import { careerTimeline } from "@/data/experience";
import { images } from "@/data/images";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function CareerTimeline() {
  const [active, setActive] = useState(
    careerTimeline.findIndex((s) => s.isCurrent) || careerTimeline.length - 1,
  );

  return (
    <section
      aria-labelledby="journey-heading"
      className="bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-sans text-[0.65rem] tracking-[0.24em] text-accent uppercase">
                The Career Journey
              </p>
              <h2
                id="journey-heading"
                className="mt-4 font-display text-[clamp(1.85rem,5.5vw,3rem)] leading-tight text-ink md:text-5xl"
              >
                From Systems to Scholarship
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-ink-muted">
                An editorial timeline of documented roles — from systems
                administration and IT practice toward university teaching,
                research and academic leadership. Dates are omitted where not
                independently verified.
              </p>
            </Reveal>

            <ol className="relative mt-12 space-y-0 border-l border-line pl-6 md:pl-8">
              {careerTimeline.map((stage, index) => {
                const isActive = index === active;
                return (
                  <li key={stage.id} className="relative pb-8 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={cn(
                        "absolute top-1.5 -left-[1.9rem] h-3 w-3 rounded-full border-2 transition-colors md:-left-[2.15rem]",
                        stage.isCurrent || isActive
                          ? "border-accent bg-accent"
                          : "border-line bg-paper hover:border-accent",
                      )}
                      aria-label={`Show ${stage.organization}`}
                      aria-pressed={isActive}
                    />
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={cn(
                        "w-full text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                        isActive ? "opacity-100" : "opacity-70 hover:opacity-100",
                      )}
                    >
                      {stage.isCurrent ? (
                        <span className="font-sans text-[0.62rem] tracking-[0.24em] text-accent uppercase">
                          Current
                        </span>
                      ) : null}
                      <p
                        className={cn(
                          "font-display leading-snug text-ink",
                          stage.isHighlight
                            ? "text-3xl md:text-4xl"
                            : "text-xl md:text-2xl",
                        )}
                      >
                        {stage.organization}
                      </p>
                      <p
                        className={cn(
                          "mt-1 font-sans",
                          stage.isHighlight
                            ? "text-base text-ink"
                            : "text-sm text-ink-muted",
                        )}
                      >
                        {stage.role}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <Reveal delay={100}>
            <div className="sticky top-28">
              <div className="relative aspect-[5/4] overflow-hidden bg-paper-soft">
                <Image
                  src={images.photo8.src}
                  alt={images.photo8.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 border border-line bg-paper-soft p-6">
                <p className="font-sans text-[0.62rem] tracking-[0.22em] text-accent uppercase">
                  Selected stage
                </p>
                <p className="mt-3 font-display text-2xl text-ink">
                  {careerTimeline[active]?.organization}
                </p>
                <p className="mt-2 font-sans text-sm text-ink-muted">
                  {careerTimeline[active]?.role}
                </p>
                {careerTimeline[active]?.isCurrent ? (
                  <p className="mt-4 border-t border-line pt-4 font-sans text-sm leading-relaxed text-ink">
                    Current chapter: directing ODeL, continuing as Lecturer in
                    Computing at Karatina University, and serving part-time as
                    Director of ODeL at Murang&apos;a University of Technology.
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
