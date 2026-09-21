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
              src={images.photo4.src}
              alt={images.photo4.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-sans text-[0.62rem] tracking-[0.2em] text-on-void/55 uppercase">
            {images.photo4.label}
          </p>
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

          <div className="relative mt-8 h-48 w-36 overflow-hidden border border-on-void/20 bg-charcoal">
            <Image
              src={images.photo9.src}
              alt={images.photo9.alt}
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
          <p className="mt-2 font-sans text-[0.62rem] tracking-[0.2em] text-on-void/55 uppercase">
            {images.photo9.label}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
