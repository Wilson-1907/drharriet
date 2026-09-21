import { Reveal } from "@/components/ui/reveal";

const stages = [
  "Computer Scientist",
  "IT Professional",
  "University Educator",
  "Researcher",
  "Academic Leader",
  "Head of Computing",
  "Director, ODeL",
] as const;

export function JourneyNarrative() {
  return (
    <section
      aria-labelledby="narrative-heading"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <Reveal>
          <p className="font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">
            The Central Story
          </p>
          <h2
            id="narrative-heading"
            className="mt-3 font-display text-3xl text-ink md:text-4xl"
          >
            From Computing to Academic Leadership
          </h2>
        </Reveal>

        <ol className="mt-10 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-x-2 md:gap-y-4">
          {stages.map((stage, index) => (
            <li key={stage} className="inline-flex items-center gap-2 md:gap-3">
              <span
                className={
                  index === stages.length - 1
                    ? "font-display text-xl text-accent md:text-2xl"
                    : "font-sans text-sm text-ink md:text-base"
                }
              >
                {stage}
              </span>
              {index < stages.length - 1 ? (
                <span className="text-accent/70" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
