import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";

export function AcademicSnapshot() {
  return (
    <section
      aria-labelledby="snapshot-heading"
      className="border-b border-line bg-paper-soft"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <h2 id="snapshot-heading" className="sr-only">
            Academic snapshot
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {profile.snapshot.map((item, index) => (
              <div
                key={item.label}
                className="border-t border-line pt-5"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <p className="font-sans text-[0.65rem] tracking-[0.24em] text-accent uppercase">
                  {item.label}
                </p>
                <p className="mt-3 font-display text-2xl leading-snug text-ink md:text-[1.7rem]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
