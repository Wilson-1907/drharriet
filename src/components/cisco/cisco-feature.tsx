import Image from "next/image";
import { credentials } from "@/data/credentials";
import { images } from "@/data/images";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function CiscoFeature() {
  const { cisco } = credentials;

  return (
    <section
      aria-labelledby="cisco-heading"
      className="bg-void text-on-void"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden bg-charcoal">
            <Image
              src={images.photo3.src}
              alt={images.photo3.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <SectionLabel number="04" label="The Technologist" light />
          <h2
            id="cisco-heading"
            className="mt-5 font-display text-4xl text-on-void md:text-5xl"
          >
            {cisco.program}
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="mt-6 font-display text-2xl text-on-void md:text-3xl">
            {cisco.title}
          </p>
          <p className="mt-3 font-sans text-sm tracking-[0.16em] text-on-void/60 uppercase">
            Issued {cisco.issued}
          </p>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-on-void/75">
            {cisco.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
