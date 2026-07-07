import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

/** Compact TR/EN toggle button. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Switch language"
      className={cn(
        "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] px-3 py-2 border border-ink-600 rounded-sm text-bone-muted hover:text-crimson-glow hover:border-crimson transition-colors duration-300",
        className
      )}
    >
      <Languages size={14} />
      <span className={lang === "en" ? "text-crimson-glow" : ""}>EN</span>
      <span className="text-bone-muted">/</span>
      <span className={lang === "tr" ? "text-crimson-glow" : ""}>TR</span>
    </button>
  );
}
