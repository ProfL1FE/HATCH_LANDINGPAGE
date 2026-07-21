/**
 * Generates a strong, random password using the browser's cryptographic RNG
 * (not Math.random, which isn't suitable for anything security-related).
 * Guarantees at least one character from each category so it always passes
 * typical strength checks.
 */
export function generateStrongPassword(length = 16) {
  const lower = 'abcdefghijkmnopqrstuvwxyz';
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const digits = '23456789';
  const symbols = '!@#$%^&*-_+=';
  const all = lower + upper + digits + symbols;

  const randomChar = (charset) => {
    const bytes = new Uint32Array(1);
    crypto.getRandomValues(bytes);
    return charset[bytes[0] % charset.length];
  };

  const required = [randomChar(lower), randomChar(upper), randomChar(digits), randomChar(symbols)];
  const rest = Array.from({ length: length - required.length }, () => randomChar(all));
  const combined = [...required, ...rest];

  // Shuffle so the required characters aren't always in the same positions.
  for (let i = combined.length - 1; i > 0; i--) {
    const bytes = new Uint32Array(1);
    crypto.getRandomValues(bytes);
    const j = bytes[0] % (i + 1);
    [combined[i], combined[j]] = [combined[j], combined[i]];
  }

  return combined.join('');
}
