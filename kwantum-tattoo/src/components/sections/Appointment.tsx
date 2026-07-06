import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { Input, Label, Textarea } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

const styleKeys = [
  "Blackwork",
  "Fine Line",
  "Geometric",
  "Realism",
  "Neo-Traditional",
  "Dotwork",
];

const timeSlots = ["11:00", "13:00", "15:00", "17:00"];

interface BookingData {
  style: string;
  size: string;
  date: string;
  time: string;
  name: string;
  email: string;
  idea: string;
}

const emptyBooking: BookingData = {
  style: "",
  size: "",
  date: "",
  time: "",
  name: "",
  email: "",
  idea: "",
};

export function Appointment() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingData>(emptyBooking);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  const b = t.booking;

  const set = (patch: Partial<BookingData>) =>
    setData((d) => ({ ...d, ...patch }));

  const canContinue = [
    data.style !== "",
    data.size !== "",
    data.date !== "" && data.time !== "",
    data.name.trim() !== "" && /\S+@\S+\.\S+/.test(data.email),
  ][step];

  const next = () => {
    if (step === 3) {
      setSubmitted(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const reset = () => {
    setData(emptyBooking);
    setStep(0);
    setSubmitted(false);
  };

  return (
    <section id="booking" className="section-padding mx-auto max-w-4xl">
      <SectionHeading eyebrow={b.eyebrow} title={b.title} align="center" />

      <Reveal>
        <Card className="overflow-hidden">
          {/* Progress bar */}
          {!submitted && (
            <div className="border-b border-ink-700 px-6 py-5">
              <div className="flex items-center justify-between mb-3">
                {b.steps.map((s, i) => (
                  <span
                    key={s}
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.2em] transition-colors",
                      i <= step ? "text-crimson-glow" : "text-bone-muted/40"
                    )}
                  >
                    {i + 1}. {s}
                  </span>
                ))}
              </div>
              <div className="h-[3px] bg-ink-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-crimson"
                  animate={{ width: `${((step + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          <CardContent className="p-6 md:p-10 min-h-[380px]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-crimson/15 border border-crimson flex items-center justify-center mb-6">
                    <Check className="text-crimson-glow" size={28} />
                  </div>
                  <h3 className="font-display text-3xl text-bone mb-3">
                    {b.doneTitle}
                  </h3>
                  <p className="text-bone-muted text-sm max-w-md leading-relaxed mb-2">
                    {b.doneThanks} <span className="text-bone">{data.name}</span>{" "}
                    {b.doneBody1}{" "}
                    <span className="text-crimson-glow">{data.style}</span>{" "}
                    {b.doneBody2}{" "}
                    <span className="text-bone">
                      {data.date} {b.at} {data.time}
                    </span>{" "}
                    {b.doneBody3}{" "}
                    <span className="text-bone">{data.email}</span>{" "}
                    {b.doneBody4}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-muted/50 mb-8">
                    {b.demoNote}
                  </p>
                  <Button variant="outline" onClick={reset}>
                    {b.bookAnother}
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 0 && (
                    <div>
                      <p className="text-bone-muted text-sm mb-6">
                        {b.stylePrompt}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {styleKeys.map((s) => (
                          <button
                            key={s}
                            onClick={() => set({ style: s })}
                            className={cn(
                              "px-4 py-5 border rounded-sm font-display text-lg transition-all duration-300",
                              data.style === s
                                ? "border-crimson bg-crimson/10 text-crimson-glow"
                                : "border-ink-600 text-bone-muted hover:border-bone/40 hover:text-bone"
                            )}
                          >
                            {t.gallery.styles[s]}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <p className="text-bone-muted text-sm mb-6">
                        {b.sizePrompt}
                      </p>
                      <div className="grid md:grid-cols-3 gap-3">
                        {b.sizes.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => set({ size: s.label })}
                            className={cn(
                              "p-6 border rounded-sm text-left transition-all duration-300",
                              data.size === s.label
                                ? "border-crimson bg-crimson/10"
                                : "border-ink-600 hover:border-bone/40"
                            )}
                          >
                            <p
                              className={cn(
                                "font-display text-xl mb-1",
                                data.size === s.label
                                  ? "text-crimson-glow"
                                  : "text-bone"
                              )}
                            >
                              {s.label}
                            </p>
                            <p className="text-xs text-bone-muted">{s.desc}</p>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-bone-muted/60 mt-3">
                              {s.time}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <p className="text-bone-muted text-sm mb-6">
                        {b.datePrompt}
                      </p>
                      <div className="mb-6">
                        <Label htmlFor="date">{b.preferredDate}</Label>
                        <Input
                          id="date"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          value={data.date}
                          onChange={(e) => set({ date: e.target.value })}
                        />
                      </div>
                      <Label>{b.timeSlot}</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => set({ time: t })}
                            className={cn(
                              "py-3 border rounded-sm font-mono text-sm transition-all duration-300",
                              data.time === t
                                ? "border-crimson bg-crimson/10 text-crimson-glow"
                                : "border-ink-600 text-bone-muted hover:border-bone/40 hover:text-bone"
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name">{b.name}</Label>
                          <Input
                            id="name"
                            placeholder={b.namePlaceholder}
                            value={data.name}
                            onChange={(e) => set({ name: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">{b.email}</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={data.email}
                            onChange={(e) => set({ email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="idea">{b.idea}</Label>
                        <Textarea
                          id="idea"
                          placeholder={b.ideaPlaceholder}
                          value={data.idea}
                          onChange={(e) => set({ idea: e.target.value })}
                        />
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-ink-800/50 border border-ink-700 rounded-sm">
                        <Sparkles size={16} className="text-crimson-glow mt-0.5 shrink-0" />
                        <p className="text-xs text-bone-muted leading-relaxed">
                          {b.summary} <span className="text-bone">{data.style}</span> ·{" "}
                          <span className="text-bone">{data.size}</span> ·{" "}
                          <span className="text-bone">
                            {data.date} {b.at} {data.time}
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>

          {/* Nav buttons */}
          {!submitted && (
            <div className="flex items-center justify-between border-t border-ink-700 px-6 md:px-10 py-5">
              <Button
                variant="ghost"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                <ChevronLeft size={16} /> {b.back}
              </Button>
              <Button onClick={next} disabled={!canContinue}>
                {step === 3 ? b.submit : b.continue}{" "}
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </Card>
      </Reveal>
    </section>
  );
}
