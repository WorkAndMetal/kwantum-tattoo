import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn("mb-14", align === "center" && "text-center")}
    >
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-crimson-glow mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-6xl font-semibold text-bone leading-tight">
        {title}
      </h2>
    </Reveal>
  );
}
