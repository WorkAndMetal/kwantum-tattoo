import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

interface Work {
  id: number;
  style: string;
  gradient: string;
  span?: string;
}

/**
 * Mock portfolio pieces. Gradients act as art placeholders —
 * replace with real images in src/assets when available.
 */
const works: Work[] = [
  {
    id: 1,
    style: "Blackwork",
    gradient: "from-ink-700 via-crimson-dark/40 to-ink-950",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    style: "Fine Line",
    gradient: "from-ink-800 via-ink-600 to-crimson-dark/30",
  },
  {
    id: 3,
    style: "Geometric",
    gradient: "from-crimson-dark/50 via-ink-800 to-ink-950",
  },
  {
    id: 4,
    style: "Dotwork",
    gradient: "from-ink-950 via-ink-700 to-ink-900",
  },
  {
    id: 5,
    style: "Surrealism",
    gradient: "from-ink-800 via-crimson/20 to-ink-950",
    span: "md:col-span-2",
  },
  {
    id: 6,
    style: "Neo-Traditional",
    gradient: "from-crimson-dark/40 via-ink-900 to-ink-800",
  },
];

const filterKeys = ["All", "Blackwork", "Fine Line", "Geometric", "Dotwork", "Surrealism", "Neo-Traditional"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Work | null>(null);
  const { t } = useLanguage();

  const visible =
    filter === "All" ? works : works.filter((w) => w.style === filter);

  return (
    <section id="gallery" className="section-padding mx-auto max-w-7xl">
      <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />

      {/* Filters */}
      <Reveal className="flex flex-wrap gap-3 mb-10">
        {filterKeys.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 border rounded-sm transition-all duration-300",
              filter === f
                ? "border-crimson text-crimson-glow bg-crimson/10"
                : "border-ink-600 text-bone-muted hover:border-bone/40 hover:text-bone"
            )}
          >
            {f === "All" ? t.gallery.filterAll : t.gallery.styles[f]}
          </button>
        ))}
      </Reveal>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((w) => (
            <motion.button
              layout
              key={w.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => setSelected(w)}
              className={cn(
                "group relative overflow-hidden rounded-md border border-ink-700 text-left",
                w.span
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110",
                  w.gradient
                )}
              />
              <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/10 transition-colors duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson-glow mb-1">
                  {t.gallery.styles[w.style]}
                </p>
                <p className="font-display text-xl text-bone">
                  {t.gallery.works[w.id]}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-[4/3] rounded-md overflow-hidden border border-ink-600"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  selected.gradient
                )}
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 text-bone hover:text-crimson-glow transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-ink-950 to-transparent">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-glow mb-2">
                  {t.gallery.styles[selected.style]}
                </p>
                <p className="font-display text-3xl text-bone">
                  {t.gallery.works[selected.id]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
