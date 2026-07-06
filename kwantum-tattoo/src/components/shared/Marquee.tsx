import { useLanguage } from "@/hooks/useLanguage";

/** Infinite horizontal marquee of studio disciplines. */
export function Marquee() {
  const { t } = useLanguage();
  const row = [...t.marquee, ...t.marquee];
  return (
    <div className="relative overflow-hidden border-y border-ink-700 bg-ink-900/60 py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display text-2xl italic tracking-wide text-bone-muted/70 flex items-center gap-12"
          >
            {w}
            <span className="text-crimson text-sm not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
