import { education } from "@/data/education";
import { Reveal } from "@/components/ui/reveal";

export function EducationSection() {
  return (
    <section
      aria-labelledby="education-heading"
      className="border-y border-line bg-paper-soft"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="font-sans text-[0.65rem] tracking-[0.24em] text-accent uppercase">
            Education
          </p>
          <h2
            id="education-heading"
            className="mt-4 font-display text-3xl text-ink md:text-4xl"
          >
            Formal academic formation
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-0">
          {education.map((entry, index) => (
            <Reveal key={entry.id} as="li" delay={index * 70}>
              <div className="grid gap-4 border-t border-line py-8 md:grid-cols-[8rem_1fr_1fr] md:items-baseline">
                <p className="font-display text-3xl text-accent md:text-4xl">
                  {entry.degree}
                </p>
                <p className="font-sans text-lg text-ink md:text-xl">
                  {entry.field}
                </p>
                <p className="font-sans text-sm tracking-wide text-ink-muted md:text-right">
                  {entry.institution}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
