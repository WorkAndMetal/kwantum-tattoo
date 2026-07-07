import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      aria-label={t.nav.themeToggle}
      title={t.nav.themeToggle}
      className={cn(
        "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] px-3 py-2 border border-ink-600 rounded-sm text-bone-muted hover:text-crimson-glow hover:border-crimson transition-colors duration-300",
        className
      )}
    >
      {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      <span className="text-[10px]">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
