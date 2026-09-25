import { teaching } from "@/data/teaching";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function TheEducator() {
  return (
    <section
      id="the-educator"
      aria-labelledby="educator-heading"
      className="bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionLabel number="06" label="The Educator" />
          <p className="mt-4 font-sans text-[0.65rem] tracking-[0.2em] text-accent uppercase">
            Currently teaching · Lecturer in Computing
          </p>
          <h2
            id="educator-heading"
            className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl"
          >
            {teaching.headline}
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
            {teaching.intro}
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {teaching.dimensions.map((item) => (
              <li
                key={item}
                className="border-l-2 border-accent/70 pl-3 font-sans text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
