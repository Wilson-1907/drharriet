import Image from "next/image";
import { appointments } from "@/data/appointments";
import { images } from "@/data/images";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function NcheAppointment() {
  const item = appointments.ncheNamibia;

  return (
    <section
      id="international-appointment"
      aria-labelledby="nche-heading"
      className="bg-paper-soft"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 min-[390px]:px-5 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <SectionLabel number="08" label="International Panel" />
            <p className="mt-5 font-sans text-[0.65rem] tracking-[0.24em] text-accent uppercase">
              International appointment
            </p>
            <h2
              id="nche-heading"
              className="mt-3 font-display text-[clamp(1.85rem,6vw,3rem)] leading-tight text-ink md:text-5xl"
            >
              Chair, Academic Review Panel
            </h2>
            <p className="mt-6 font-display text-lg leading-snug text-ink sm:text-xl md:text-2xl">
              {item.programme}
            </p>
            <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />
            <dl className="mt-8 space-y-5 font-sans text-sm md:text-base">
              <div>
                <dt className="tracking-[0.18em] text-accent uppercase text-[0.62rem]">
                  Institution
                </dt>
                <dd className="mt-1 text-ink">{item.institution}</dd>
              </div>
              <div>
                <dt className="tracking-[0.18em] text-accent uppercase text-[0.62rem]">
                  Under the auspices of
                </dt>
                <dd className="mt-1 text-ink">{item.auspices}</dd>
              </div>
            </dl>
            <p className="mt-8 font-sans text-base leading-relaxed text-ink-muted md:text-lg">
              {item.summary}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {item.significance.map((point) => (
                <li
                  key={point}
                  className="border-l-2 border-accent/70 pl-3 font-sans text-sm text-ink"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2">
              <figure className="min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                  <Image
                    src={images.photo11.src}
                    alt={images.photo11.alt}
                    fill
                    sizes="(max-width: 479px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
                  {images.photo11.label}
                </figcaption>
              </figure>
              <figure className="min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                  <Image
                    src={images.photo12.src}
                    alt={images.photo12.alt}
                    fill
                    sizes="(max-width: 479px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
                  {images.photo12.label}
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
