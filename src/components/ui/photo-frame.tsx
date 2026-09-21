import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoFrameProps = {
  src: string;
  alt: string;
  label?: string;
  treatment?: "mono" | "natural";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PhotoFrame({
  src,
  alt,
  label,
  treatment = "natural",
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: PhotoFrameProps) {
  return (
    <figure className={cn("group relative overflow-hidden bg-void/5", className)}>
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden",
          treatment === "mono" && "photo-mono",
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
      {label ? (
        <figcaption className="mt-3 font-sans text-[0.65rem] tracking-[0.22em] text-ink-muted uppercase">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
