// HyperModo site forms — Google Apps Script web app.
// Receives the contact and join forms, writes a row to a sheet, stores any
// attachment in a Drive folder, and emails the notification address.

const NOTIFY = 'wiqar@hypermodo.com';
const SHEET_NAME = 'HyperModo site forms';
const FOLDER_NAME = 'HyperModo résumés';
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = ['application/pdf'];

function doPost(e) {
  try {
    const p = JSON.parse(e.postData.contents || '{}');
    if (p.website) return json({ ok: true });            // honeypot filled: pretend success, do nothing
    if (p.form !== 'contact' && p.form !== 'join') return json({ ok: false, error: 'unknown form' }, 400);
    if (!p.name || !p.email) return json({ ok: false, error: 'name and email are required' }, 400);

    let fileUrl = '';
    if (p.file && p.file.data) {
      const bytes = Utilities.base64Decode(p.file.data);
      if (bytes.length > MAX_FILE_BYTES) return json({ ok: false, error: 'file too large' }, 400);
      if (ALLOWED_TYPES.indexOf(p.file.type) === -1) return json({ ok: false, error: 'PDF only' }, 400);
      const blob = Utilities.newBlob(bytes, p.file.type, safeName(p.name) + ' — ' + safeName(p.file.name));
      fileUrl = folder().createFile(blob).getUrl();
    }

    const row = [new Date(), p.form, p.name, p.email, p.company || '', p.role || '', p.linkedin || '',
                 p.goal || '', p.barrier || '', p.about || '', fileUrl];
    sheet(p.form).appendRow(row);

    MailApp.sendEmail({
      to: NOTIFY,
      replyTo: p.email,
      subject: p.form === 'join' ? 'HyperModo — someone wants to join: ' + p.name
                                 : 'HyperModo — a first conversation: ' + p.name,
      body: p.form === 'join'
        ? ['Name: ' + p.name, 'Email: ' + p.email, 'LinkedIn: ' + (p.linkedin || ''), '', 'About:', p.about || '', '', 'Résumé: ' + (fileUrl || 'none')].join('\n')
        : ['Name: ' + p.name, 'Company: ' + (p.company || ''), 'Role: ' + (p.role || ''), 'Email: ' + p.email, '', 'Where the business wants to go:', p.goal || '', '', 'What stands in the way:', p.barrier || ''].join('\n')
    });
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500);
  }
}

function sheet(form) {
  const files = DriveApp.getFilesByName(SHEET_NAME);
  const ss = files.hasNext() ? SpreadsheetApp.open(files.next()) : SpreadsheetApp.create(SHEET_NAME);
  let sh = ss.getSheetByName(form);
  if (!sh) {
    sh = ss.insertSheet(form);
    sh.appendRow(['When', 'Form', 'Name', 'Email', 'Company', 'Role', 'LinkedIn', 'Goal', 'Barrier', 'About', 'Résumé']);
  }
  return sh;
}

function folder() {
  const it = DriveApp.getFoldersByName(FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);
}

function safeName(s) { return String(s).replace(/[\\/:*?"<>|]/g, '-').slice(0, 80); }

function json(obj, code) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
