/*
 * Sends a form entry to the Google Apps Script web app that writes it to the Google
 * Sheet (tools/apps-script/Code.gs). The web app URL is NEXT_PUBLIC_FORMS_ENDPOINT,
 * read at build time; it is not a secret, since the browser has to call it.
 *
 * Without the variable the forms behave as the prototype did: they acknowledge the
 * entry and send nothing, so local work never writes to the live sheet.
 */
export type FormName = "contact" | "careers" | "newsletter" | "report";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMS_ENDPOINT ?? "";

/** The fallback offered when an entry cannot be sent. */
export const SEND_FAILED = "We could not send that just now. Please try again, or write to connect@esmagico.com.";

/** Resolves when the sheet has the entry; rejects with a message fit to show. */
export async function sendForm(form: FormName, data: Record<string, string>): Promise<void> {
  if (!ENDPOINT) {
    if (process.env.NODE_ENV === "production") console.warn("NEXT_PUBLIC_FORMS_ENDPOINT is not set; the entry was not sent.");
    return;
  }
  let reply: { ok?: boolean } = {};
  try {
    // text/plain keeps this a simple request: Apps Script cannot answer a CORS preflight
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ form, data, page: location.pathname }),
    });
    reply = await res.json();
  } catch {
    throw new Error(SEND_FAILED);
  }
  if (!reply.ok) throw new Error(SEND_FAILED);
}

/* A field people never see and bots fill in. The script drops any entry that has it. */
export const HONEYPOT = "website";
