import { MapPin, Phone, Mail } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Card, CardContent } from "@/components/ui/Card";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const { t } = useLanguage();

  const items = [
    {
      icon: MapPin,
      label: t.contact.studio,
      value: "Muradiye Bostanı Sk. No: 8/A Türkali Mh. Beşiktaş, Istanbul, Turkey",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+90 (216) 555 0042",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "hello@kwantumtattoo.com",
    },
  ];

  return (
    <section id="contact" className="section-padding mx-auto max-w-7xl">
      <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />

      <div className="grid gap-10 lg:grid-cols-2 items-start">
        <div className="space-y-4">
          {items.map(({ icon: Icon, label, value }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <Card className="hover:border-crimson/50 transition-colors duration-300">
                <CardContent className="flex items-center gap-5">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-ink-600 rounded-sm text-crimson-glow">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-muted mb-1">
                      {label}
                    </p>
                    <p className="text-bone text-sm md:text-base">{value}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Stylized interactive map */}
        <Reveal delay={0.2}>
          <div className="relative h-[320px] lg:h-[360px] rounded-md overflow-hidden border border-ink-700 bg-ink-900">
            <iframe
              title="Kwantum Tattoo Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6017.783913694719!2d28.996294070796964!3d41.04949175753618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7b679db133b%3A0xdfacae06c948b00d!2sKwantum%20Tattoo%20Garden!5e0!3m2!1str!2str!4v1783378637067!5m2!1str!2str"
              className="absolute inset-0 h-full w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(rgba(232,228,220,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(232,228,220,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="relative flex h-4 w-4 mb-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-60" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-crimson-glow" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-muted">
                {t.contact.mapLabel}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
