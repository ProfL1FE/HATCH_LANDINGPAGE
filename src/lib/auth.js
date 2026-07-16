/**
 * Reusable auth state utility.
 *
 * Wraps browser storage so the rest of the app never touches storage keys
 * directly. This is what the Resources page checks to decide whether to
 * unlock downloads, and what Sign In writes to after a successful login.
 */

const KEYS = {
  token: 'hatch_jo1nid_token',
  refresh: 'hatch_jo1nid_refresh',
  role: 'hatch_jo1nid_role',
  email: 'hatch_jo1nid_email',
};

/**
 * Read a stored value regardless of which store holds it. A "remember me"
 * session lives in localStorage (survives browser restarts); a session-only
 * login lives in sessionStorage (cleared when the tab/browser closes).
 */
function read(key) {
  return localStorage.getItem(key) ?? sessionStorage.getItem(key);
}

export function saveSession(session, remember = true) {
  // Clear any prior session from both stores so a stale token can't linger.
  clearSession();
  const store = remember ? localStorage : sessionStorage;
  store.setItem(KEYS.token, session.token);
  if (session.refreshToken) store.setItem(KEYS.refresh, session.refreshToken);
  store.setItem(KEYS.role, session.role ?? '');
  store.setItem(KEYS.email, session.email);
}

export function clearSession() {
  Object.values(KEYS).forEach((k) => {
    localStorage.removeItem(k);
    sessionStorage.removeItem(k);
  });
}

export function isLoggedIn() {
  return !!read(KEYS.token);
}

export function getRole() {
  return read(KEYS.role) || null;
}

export function getEmail() {
  return read(KEYS.email);
}

export function getToken() {
  return read(KEYS.token);
}
