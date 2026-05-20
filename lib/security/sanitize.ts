// Strip ASCII control chars (0x00-0x1F and 0x7F).
// Pattern built from a string to avoid literal control chars in source.
const CONTROL_CHARS = new RegExp('[\\x00-\\x1F\\x7F]', 'g');

export function stripControlChars(value: string): string {
  return value.replace(CONTROL_CHARS, '').trim();
}

export function collapseWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function sanitizeText(value: string, maxLength = 2000): string {
  return collapseWhitespace(stripControlChars(value)).slice(0, maxLength);
}
