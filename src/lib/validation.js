const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return EMAIL_RE.test(value.trim());
}

export function isValidPassword(value) {
  return value.length >= 8;
}

export function required(value) {
  return value.trim().length > 0;
}
