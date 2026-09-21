import { leadership } from "@/data/leadership";
import { Reveal } from "@/components/ui/reveal";

export function QualityAssurance() {
  return (
    <section
      aria-labelledby="qa-heading"
      className="border-y border-line bg-paper-soft"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="font-sans text-[0.65rem] tracking-[0.24em] text-accent uppercase">
            Institutional Quality
          </p>
          <h2
            id="qa-heading"
            className="mt-4 max-w-xl font-display text-3xl text-ink md:text-4xl"
          >
            Academic quality assurance as scholarly practice
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.qualityAssurance.map((item, index) => (
            <Reveal key={item} as="li" delay={index * 40}>
              <div className="h-full border-t border-accent/50 pt-4">
                <p className="font-sans text-sm leading-snug text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
