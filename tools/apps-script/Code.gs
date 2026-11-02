/*
 * Es Magico website forms -> Google Sheet.
 *
 * Paste this whole file into the Apps Script editor of the Google Sheet that should
 * receive the entries (Extensions > Apps Script), then deploy it as a web app. The
 * steps are in tools/apps-script/README.md.
 *
 * Each form writes to a tab of its own, created with a header row the first time an
 * entry arrives. Nothing else in the spreadsheet is touched.
 */

/* Optional: an address that is emailed whenever an entry arrives. Leave it empty for
   no email. The address must be one the script's owner may send to (any address works
   with a normal Google account). */
const NOTIFY_EMAIL = "";

/* The forms the website sends, the tab each one writes to, and its columns in order.
   `key` is what the website sends; `label` is the column heading in the sheet. */
const FORMS = {
  contact: {
    tab: "Contact",
    fields: [
      { key: "name", label: "Name", required: true },
      { key: "email", label: "Work email", required: true, email: true },
      { key: "org", label: "Organisation", required: true },
      { key: "sector", label: "Industry", required: true },
      { key: "outcome", label: "Outcome to move", required: true },
    ],
  },
  careers: {
    tab: "Careers",
    fields: [
      { key: "name", label: "Name", required: true },
      { key: "email", label: "Email", required: true, email: true },
      { key: "phone", label: "Phone" },
      { key: "area", label: "Area", required: true },
      { key: "links", label: "LinkedIn, GitHub or portfolio", required: true },
      { key: "note", label: "What they shipped", required: true },
    ],
  },
  newsletter: {
    tab: "Newsletter",
    fields: [{ key: "email", label: "Email", required: true, email: true }],
  },
  report: {
    tab: "Report requests",
    fields: [
      { key: "report", label: "Report", required: true },
      { key: "email", label: "Work email", required: true, email: true },
      { key: "name", label: "Name" },
      { key: "org", label: "Organisation" },
    ],
  },
};

const MAX_LENGTH = 5000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: "The request was not readable." });
  }
  // the website's hidden "website" field is left empty by people and filled by bots;
  // a filled one is acknowledged and dropped, so the bot learns nothing
  if (body.data && body.data.website) return reply({ ok: true });

  const spec = FORMS[body.form];
  if (!spec) return reply({ ok: false, error: "Unknown form." });
  const data = body.data || {};
  for (const f of spec.fields) {
    const v = String(data[f.key] || "").trim();
    if (f.required && !v) return reply({ ok: false, error: `${f.label} is missing.` });
    if (f.email && v && !EMAIL.test(v)) return reply({ ok: false, error: `${f.label} is not a valid address.` });
  }

  // one entry at a time, so two arriving together never land on the same row
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(spec.tab) || book.insertSheet(spec.tab);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted at"].concat(spec.fields.map((f) => f.label), ["Page"]));
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, spec.fields.length + 2).setFontWeight("bold");
    }
    const row = [new Date()].concat(spec.fields.map((f) => clean(data[f.key])), [clean(body.page)]);
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    const lines = spec.fields.map((f) => `${f.label}: ${String(data[f.key] || "").trim()}`);
    MailApp.sendEmail(NOTIFY_EMAIL, `New ${spec.tab} entry from esmagico.com`, lines.join("\n") + `\n\nPage: ${body.page || ""}`);
  }
  return reply({ ok: true });
}

/* Opening the web app URL in a browser shows that it is live. */
function doGet() {
  return reply({ ok: true, service: "Es Magico website forms" });
}

/* A value is stored as text: trimmed, capped in length, and never read as a formula,
   so an entry that starts with = + - or @ cannot run anything in the sheet. */
function clean(value) {
  const v = String(value == null ? "" : value).trim().slice(0, MAX_LENGTH);
  return /^[=+\-@]/.test(v) ? `'${v}` : v;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
