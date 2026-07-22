/**
 * Real JO1NID integration.
 *
 * JO1NID is already live and tested (register, login, email verification all
 * confirmed working in production), so this calls the real API directly
 * rather than simulating a fake result — there's no reason to pretend when
 * the real thing is ready and costs nothing extra to use.
 *
 * This is the ONLY file that knows the JO1NID base URL and endpoint shapes.
 * Everything else (pages, components) goes through the functions exported
 * here, so if the API ever changes, this is the one place to update.
 */

const JO1NID_BASE = 'https://jo1nid.onrender.com';

async function postJSON(path, body) {
  let res;
  try {
    res = await fetch(`${JO1NID_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, message: 'Could not reach the sign in service. Please try again in a moment.' };
  }

  let json = {};
  try {
    json = await res.json();
  } catch {
    // some error responses may not have a JSON body
  }

  if (!res.ok) {
    const message =
      (typeof json.error === 'string' && json.error) ||
      (typeof json.message === 'string' && json.message) ||
      'Something went wrong. Please try again.';
    return { ok: false, message };
  }

  return { ok: true, message: 'OK', data: json };
}

/** Register a new JO1NID account. Does not sign the user in — email verification is required first. */
export async function registerUser(email, password, role) {
  const result = await postJSON('/api/v1/auth/register', { email: email.trim(), password, role });
  if (!result.ok) return result;
  return {
    ok: true,
    message: 'Account created. Check your email for a verification link before signing in.',
    data: result.data,
  };
}

/** Sign in with a verified JO1NID account. On success, the caller is responsible for persisting the session. */
export async function loginUser(email, password) {
  return postJSON('/api/v1/console/login', { email: email.trim(), password });
}

/**
 * Request a password-reset email. By design this ALWAYS resolves with a
 * generic ok:true message regardless of whether the address is registered,
 * so the response can't be used to enumerate accounts. The network call is
 * best-effort — postJSON never throws, and any non-ok result is deliberately
 * ignored so delivery status is never revealed to the caller.
 *
 * NOTE: confirm the real reset endpoint path with the JO1NID API before
 * relying on delivery — the anti-enumeration contract holds either way.
 */
export async function requestPasswordReset(email) {
  await postJSON('/api/v1/auth/forgot-password', { email: email.trim() });
  return { ok: true, message: 'If that email is registered, a reset link is on its way.' };
}
