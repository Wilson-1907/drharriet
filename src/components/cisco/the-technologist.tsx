import { technology } from "@/data/technology";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function TheTechnologist() {
  return (
    <section
      id="the-technologist"
      aria-labelledby="technologist-heading"
      className="bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionLabel number="03" label="The Technologist" />
          <h2
            id="technologist-heading"
            className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl"
          >
            {technology.headline}
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
            Practical technical breadth across programming, systems,
            security and emerging technologies — presented as domains of
            expertise, not arbitrary proficiency scores.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technology.categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 50}>
              <article className="h-full border-t border-accent/40 pt-5">
                <h3 className="font-display text-2xl text-ink">
                  {category.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1.5 font-sans text-xs tracking-wide text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
