# Team registration backend (Google Sheet + Apps Script)

HATCH student registrations can include teammates (name, email, phone,
school — up to 5 people total). There's no HATCH-specific database yet, so
this data is sent to a **Google Apps Script Web App** bound to a Google
Sheet: free, no server to run, no account needed beyond a Google account you
already have. It appends one row per person and emails you a notification
for every new team.

The frontend (`src/services/teamRoster.js`) already sends the data — this
doc is only the one-time setup for where it goes.

## 1. Create the Sheet

1. Go to [sheets.google.com](https://sheets.google.com) → **Blank spreadsheet**.
2. Rename it something like **"HATCH 2027 Team Registrations."**

## 2. Add the script

1. In the Sheet, click **Extensions → Apps Script**. This opens a script
   editor in a new tab, already bound to this specific spreadsheet.
2. Delete whatever's in the default `Code.gs` file and paste in the script
   below.
3. Change the `NOTIFY_EMAIL` constant at the top to the email address that
   should receive a notification every time a new team registers.
4. Save (disk icon, or Ctrl+S / Cmd+S).

```javascript
/**
 * HATCH 2027 — Team Roster intake.
 * Receives registration data from the HATCH site, appends one row per
 * person (representative + each teammate) to this spreadsheet, and emails
 * a summary notification.
 */

const NOTIFY_EMAIL = 'your-team-email@example.com'; // <-- change this

function doPost(e) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Registrations') ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Registrations');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted At', 'Role', 'Name', 'Email', 'Phone', 'School', 'Team Rep Email']);
  }

  const data = JSON.parse(e.postData.contents);
  const rep = data.representative || {};
  const teammates = Array.isArray(data.teammates) ? data.teammates : [];
  const submittedAt = data.submittedAt || new Date().toISOString();

  sheet.appendRow([submittedAt, 'Representative', rep.name || '', rep.email || '', '', rep.school || '', rep.email || '']);
  teammates.forEach((tm) => {
    sheet.appendRow([submittedAt, 'Teammate', tm.name || '', tm.email || '', tm.phone || '', tm.school || '', rep.email || '']);
  });

  if (NOTIFY_EMAIL && NOTIFY_EMAIL.indexOf('@') > -1) {
    const teamList =
      teammates.map((tm) => `- ${tm.name} (${tm.email})`).join('\n') || '(solo registration, no teammates added)';
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      `New HATCH team registration: ${rep.name || rep.email}`,
      `Representative: ${rep.name} <${rep.email}>\nSchool: ${rep.school}\n\nTeammates:\n${teamList}`,
    );
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Fill in:
   - Description: anything, e.g. "HATCH team roster intake"
   - Execute as: **Me**
   - Who has access: **Anyone**
   
   ("Anyone" is required — the request comes from a visitor's browser with
   no Google login, so the endpoint has to be publicly invokable. It only
   ever runs the script above; nothing else in your Google account is
   exposed by this.)
4. Click **Deploy**.
5. The first time, Google shows an authorization prompt for your own
   script — click **Advanced** → **Go to [project name] (unsafe)** → **Allow**.
   This warning is standard for any script you deploy yourself, not a sign
   of a real problem.
6. Copy the **Web app URL** shown (it ends in `/exec`). That's the value
   you need next.

## 4. Wire it into the site

In the **Vercel** dashboard → `hatch-landingpage` project → **Settings →
Environment Variables**, add:

| Name | Value |
|---|---|
| `VITE_TEAM_WEBHOOK_URL` | the `/exec` URL from step 3.6 |

Apply it to **Production** (and Preview, if you want it active on preview
deployments too). Then redeploy — push any commit, or use **Redeploy** in
the Vercel dashboard — so the new environment variable gets baked into the
build (Vite inlines `VITE_*` vars at build time, not runtime).

Until this env var is set, the site just skips sending team data — nobody's
JO1NID registration is affected either way, since JO1NID account creation
and this notification are two completely separate steps.

## Updating the script later

If you ever need to change what gets captured or how the email is
formatted, edit the same `Code.gs` file in the Apps Script editor, save,
then **Deploy → Manage deployments → edit (pencil icon) → New version →
Deploy**. The Web App URL stays the same, so nothing on the Vercel side
needs to change.
