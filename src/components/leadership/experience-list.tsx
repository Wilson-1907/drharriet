import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function ExperienceList() {
  return (
    <div className="space-y-12">
      {experience.map((entry, index) => (
        <Reveal key={entry.id} delay={index * 40}>
          <article className="grid gap-6 border-t border-line pt-8 md:grid-cols-[minmax(12rem,0.35fr)_1fr]">
            <div>
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                {entry.organization}
              </h2>
              <p className="mt-2 font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
                {entry.category === "academic" ? "Academic" : "Professional"}
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {entry.roles.map((role) => (
                  <li key={`${entry.id}-${role.title}`}>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <p
                        className={cn(
                          "font-sans text-base md:text-lg",
                          role.status === "current"
                            ? "font-medium text-ink"
                            : "text-ink",
                        )}
                      >
                        {role.title}
                      </p>
                      {role.status === "current" ? (
                        <span className="font-sans text-[0.62rem] tracking-[0.18em] text-accent uppercase">
                          Current
                        </span>
                      ) : null}
                      {role.status === "former" ? (
                        <span className="font-sans text-[0.62rem] tracking-[0.18em] text-ink-muted uppercase">
                          Former
                        </span>
                      ) : null}
                    </div>
                    {role.note ? (
                      <p className="mt-1 font-sans text-sm text-ink-muted">
                        {role.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
              {entry.responsibilities ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {entry.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-2.5 py-1 font-sans text-xs text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
