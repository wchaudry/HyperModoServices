# Site forms

Both forms on the site post JSON to one Google Apps Script web app that runs
in the wiqar@hypermodo.com account. Nothing else receives the submissions.

## Deploy (once, from the wiqar@hypermodo.com account)

1. Open https://script.google.com and create a new project named `HyperModo site forms`.
2. Replace the contents of `Code.gs` with the file beside this README.
3. Deploy → New deployment → type *Web app*.
   Execute as: **Me**. Who has access: **Anyone**.
4. Authorise when prompted (Drive, Sheets, Mail).
5. Copy the web app URL and set it in `config/_default/hugo.toml` as `forms_endpoint`.

The first submission creates a Drive folder named *HyperModo Applicants* holding
the spreadsheet *HyperModo site forms* (one tab per form) and a *Résumés* folder.

## Redeploying after a change to Code.gs

Deploy → Manage deployments → edit the existing deployment → *New version*.
The URL stays the same.

## Limits (free Google account)

About 100 emails a day from the script, 20,000 calls a day, files up to 10 MB
and PDF only. Until `forms_endpoint` is set, each form composes an email instead.

## Spam

Every submission passes a honeypot, a minimum time on page, an email
format check, a link count, a per-address rate limit, and — when the
`RECAPTCHA_SECRET` script property is set — a reCAPTCHA v3 check with a
minimum score. Refused submissions get `ok: true` so a bot learns nothing.

Set the secret once: Project Settings → Script Properties → add
`RECAPTCHA_SECRET` with the secret key from the reCAPTCHA admin console.
The site key is `recaptcha_site_key` in `config/_default/hugo.toml`.
