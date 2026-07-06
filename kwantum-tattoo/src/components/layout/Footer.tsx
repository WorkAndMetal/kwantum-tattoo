import { Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink-700 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-bone mb-3">
            KWANTUM<span className="text-crimson-glow"> tattoo</span>
          </p>
          <p className="text-sm text-bone-muted leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-glow mb-4">
            {t.footer.hoursTitle}
          </p>
          <ul className="text-sm text-bone-muted space-y-2">
            {t.footer.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-glow mb-4">
            {t.footer.follow}
          </p>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center border border-ink-600 rounded-sm text-bone-muted hover:text-crimson-glow hover:border-crimson transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-800 py-5 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-muted/50">
          © {new Date().getFullYear()} Kwantum Tattoo — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
