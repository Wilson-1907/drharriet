import { cn } from "@/lib/utils";

type SectionLabelProps = {
  number: string;
  label: string;
  className?: string;
  light?: boolean;
};

export function SectionLabel({
  number,
  label,
  className,
  light = false,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-sans text-[0.7rem] font-medium tracking-[0.28em] uppercase",
        light ? "text-on-void/75" : "text-ink-muted",
        className,
      )}
    >
      <span className="text-accent" aria-hidden="true">
        {number}
      </span>
      <span className="mx-2 text-accent/50" aria-hidden="true">
        /
      </span>
      <span>{label}</span>
    </p>
  );
}
