export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-paper" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-3">
        <div className="h-px w-16 origin-left animate-pulse bg-accent" />
        <p className="font-sans text-[0.65rem] tracking-[0.24em] text-ink-muted uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
