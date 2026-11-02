# Website forms to Google Sheets

The contact, careers, newsletter and report forms send each entry to a Google Apps
Script web app, which adds a row to a Google Sheet. `Code.gs` here is that script; the
website side is `lib/forms.ts`.

| Form | Page | Tab it writes to |
|---|---|---|
| Contact | `/contact/` | Contact |
| Careers | `/careers/apply/` | Careers |
| Newsletter | footer of every page | Newsletter |
| Report request | `/reports/` | Report requests |

Each tab is created, with a header row, the first time its form is used.

## Set it up (about 10 minutes)

1. **Create the sheet.** In Google Drive, make a new Google Sheet, for example
   "Website form entries". Use the Google account that should own the data.
2. **Add the script.** In the sheet: **Extensions → Apps Script**. Delete what is in
   `Code.gs` there, paste in the whole of `tools/apps-script/Code.gs`, and save.
   - Optional: to get an email for every entry, put an address in `NOTIFY_EMAIL` at
     the top of the script.
3. **Deploy it.** **Deploy → New deployment**, gear icon → **Web app**, then:
   - *Description*: Website forms
   - *Execute as*: **Me**
   - *Who has access*: **Anyone**

   Click **Deploy**, and approve the permissions Google asks for (the script needs
   to edit this spreadsheet, and to send email if `NOTIFY_EMAIL` is set). Google
   warns that the app is unverified, because you wrote it: choose **Advanced →
   Go to … (unsafe)** to continue.
4. **Copy the web app URL.** It looks like
   `https://script.google.com/macros/s/AKfy…/exec`. Opening it in a browser should
   show `{"ok":true,"service":"Es Magico website forms"}`.
5. **Give the URL to the website.** In your hosting provider's environment variables
   (for Vercel: Project → Settings → Environment Variables), add

   ```
   NEXT_PUBLIC_FORMS_ENDPOINT=https://script.google.com/macros/s/AKfy…/exec
   ```

   for Production, then **redeploy**: the value is built into the pages, so a deploy
   made before it was set does not have it.
6. **Test it.** Submit each form on the live site and check that a row appears.

Without `NEXT_PUBLIC_FORMS_ENDPOINT` the forms behave as they did before: they thank
the visitor and send nothing. That keeps local development out of the live sheet. To
test locally against a sheet, put the variable in `.env.local` (ignored by git).

## Changing the script later

Edit `Code.gs` in this repo first, paste it into the Apps Script editor, then
**Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**. Editing
the existing deployment keeps the same URL, so the website needs no change. A *new*
deployment gets a new URL, which would then have to replace the old one in step 5.

## What it guards against

- **Spam bots**: each form has a hidden field that people never see. An entry that
  fills it is acknowledged and dropped.
- **Bad entries**: required fields and email addresses are checked again by the
  script, not only in the browser.
- **Spreadsheet formulas**: a value starting with `=`, `+`, `-` or `@` is stored as
  text, so an entry cannot run anything in the sheet.
- **Two entries at once**: a lock makes them land on separate rows.

The web app URL is visible in the website's code, as it must be for a browser to call
it. Anyone who finds it can post to it, so the script only ever appends rows to its own
four tabs and returns nothing from the sheet.

## Before it goes live

- **Privacy policy.** Section 4 of `/privacy/` says the site collects nothing beyond a
  theme preference. Once these forms store names and email addresses in Google Sheets,
  whoever owns that page needs to say what is collected, why, where it is kept and for
  how long.
- **Who can open the sheet.** Everyone the sheet is shared with can read every entry.
- **Report requests are not sent automatically.** The report form tells the visitor
  to check their inbox; the request lands in the sheet, and someone has to send the
  report.
