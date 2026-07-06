import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "w-full bg-ink-800/60 border border-ink-600 rounded-sm px-4 py-3 text-sm text-bone placeholder:text-bone-muted/50 focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/40 transition-colors duration-200";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(baseStyles, className)} {...props} />
));
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(baseStyles, "min-h-[120px] resize-y", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export function Label({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block font-mono text-xs uppercase tracking-widest text-bone-muted mb-2",
        className
      )}
    >
      {children}
    </label>
  );
}
