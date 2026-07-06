import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson text-bone hover:bg-crimson-glow shadow-[0_0_24px_rgba(220,38,55,0.35)] hover:shadow-[0_0_36px_rgba(220,38,55,0.55)]",
  outline:
    "border border-bone/30 text-bone hover:border-crimson hover:text-crimson-glow bg-transparent",
  ghost: "text-bone-muted hover:text-bone bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-widest transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none rounded-sm",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
