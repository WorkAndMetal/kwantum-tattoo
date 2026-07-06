import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-crimson/10 blur-[140px] animate-pulse-slow" />
      </div>

      {/* Giant outline text backdrop */}
      <span
        aria-hidden
        className="absolute select-none font-display font-bold text-outline text-[22vw] leading-none opacity-40 tracking-tighter"
      >
        INK
      </span>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.5em] text-crimson-glow mb-6"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-bone leading-[0.95]"
        >
          KWANTUM
          <br />
          <span className="italic font-normal text-crimson-glow">
            {t.hero.titleAccent}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-bone-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#booking">
            <Button size="lg">{t.hero.ctaBook}</Button>
          </a>
          <a href="#gallery">
            <Button size="lg" variant="outline">
              {t.hero.ctaGallery}
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#gallery"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 text-bone-muted hover:text-crimson-glow transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
