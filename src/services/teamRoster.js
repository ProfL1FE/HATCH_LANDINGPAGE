/**
 * Lightweight, no-backend team-roster capture.
 *
 * HATCH allows student teams of up to 5, but JO1NID only stores the
 * registering account (email/password/role) — it has no concept of a
 * "team." Rather than build a real database for this, team member details
 * are POSTed to a Google Apps Script Web App bound to a Google Sheet (see
 * docs/team-registration-backend.md for the script + deploy steps), which
 * appends a row per person and can email a notification.
 *
 * This is best-effort: the JO1NID account is the source of truth for "did
 * this person register" — if the webhook isn't configured yet, or the
 * request fails, registration still succeeds either way.
 */
const WEBHOOK_URL = import.meta.env.VITE_TEAM_WEBHOOK_URL;

export async function submitTeamRoster(payload) {
  if (!WEBHOOK_URL) return;
  try {
    // 'text/plain' avoids a CORS preflight against the Apps Script Web App
    // (which doesn't handle OPTIONS requests); the script still reads the
    // body as JSON regardless of the declared content-type. no-cors means
    // the response can't be read, which is fine — this is fire-and-forget.
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    });
  } catch {
    // Best-effort — the JO1NID account already exists regardless of whether
    // this side-channel notification succeeded.
  }
}
