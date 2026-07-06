import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes conditionally (shadcn-style cn helper). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
