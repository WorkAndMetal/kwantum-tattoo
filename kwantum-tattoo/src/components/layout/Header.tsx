import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 40;
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.booking, href: "#booking" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "site-header fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-ink-700 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="group flex items-baseline gap-1">
          <span className="header-brand-main font-display text-2xl font-bold tracking-wide text-bone">
            KWANTUM
          </span>
          <span className="header-brand-sub font-mono text-xs uppercase tracking-[0.3em] text-crimson-glow group-hover:text-bone transition-colors">
            tattoo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="header-link font-mono text-xs uppercase tracking-[0.25em] text-bone hover:text-crimson-glow transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <ThemeSwitcher />
          <LanguageSwitcher />
          <a
            href="#booking"
            className="font-mono text-xs uppercase tracking-[0.25em] px-5 py-2.5 border border-crimson text-crimson-glow hover:bg-crimson hover:text-bone transition-all duration-300 rounded-sm"
          >
            {t.nav.bookNow}
          </a>
        </nav>

        {/* Mobile: switcher + toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button
            className="header-menu-btn text-bone p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-md border-b border-ink-700"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="header-link font-mono text-sm uppercase tracking-[0.25em] text-bone hover:text-crimson-glow transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
