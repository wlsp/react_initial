import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";

export const FullYear = () => new Date().getFullYear();

export default function dateFormat(date: string) {
  const formatedDate = new Date(date);
  return new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "short",
      day: "2-digit",
  }).format(formatedDate);
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}