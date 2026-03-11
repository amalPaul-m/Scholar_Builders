// utils/helpers.js

/**
 * Truncate a string to a given length
 */
export function truncate(str, length = 100) {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Generate star rating array
 */
export function getStars(rating) {
  return Array.from({ length: 5 }, (_, i) => i < rating);
}

/**
 * Conditionally join classNames
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
