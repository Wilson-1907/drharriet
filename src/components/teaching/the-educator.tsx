import Image from "next/image";
import { teaching } from "@/data/teaching";
import { images } from "@/data/images";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function TheEducator() {
  return (
    <section
      id="the-educator"
      aria-labelledby="educator-heading"
      className="bg-paper"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-soft md:aspect-[5/6]">
            <Image
              src={images.photo5.src}
              alt={images.photo5.alt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
            {images.photo5.label}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <SectionLabel number="06" label="The Educator" />
          <p className="mt-4 font-sans text-[0.65rem] tracking-[0.2em] text-accent uppercase">
            Currently teaching · Lecturer in Computing
          </p>
          <h2
            id="educator-heading"
            className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl"
          >
            {teaching.headline}
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink-muted">
            {teaching.intro}
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
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
