import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary A utility function to merge Tailwind CSS classes with clsx.
 * @param {...ClassValue[]} inputs - A list of class values to merge.
 * @returns {string} The merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
