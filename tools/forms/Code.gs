// HyperModo site forms — Google Apps Script web app.
// Receives the contact and join forms, writes a row to a sheet, stores any
// attachment in a Drive folder, and emails the notification address.

const NOTIFY = 'wiqar@hypermodo.com';
const SHEET_NAME = 'HyperModo site forms';
const PARENT_FOLDER_NAME = 'HyperModo Applicants';
const FOLDER_NAME = 'Résumés';
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = ['application/pdf'];
const MIN_SECONDS_ON_PAGE = 3;
const MAX_LINKS = 2;
const MAX_PER_HOUR = 3;
const MIN_SCORE = 0.5;

function doPost(e) {
  try {
    const p = JSON.parse(e.postData.contents || '{}');
    if (p.form !== 'contact' && p.form !== 'join') return json({ ok: false, error: 'unknown form' }, 400);
    if (!p.name || !p.email) return json({ ok: false, error: 'name and email are required' }, 400);

    const refusal = (p._hp || p.website) ? 'honeypot' : spamCheck(p);
    if (refusal) {                                          // refused quietly; a bot learns nothing
      sheet('refused').appendRow([new Date(), p.form, p.name, p.email, refusal, p.elapsed || '', p.recaptcha ? 'token' : 'no token']);
      return json({ ok: true });
    }

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

// Returns a reason when the submission should be dropped, otherwise ''.
function spamCheck(p) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(p.email))) return 'bad email';
  if (Number(p.elapsed) < MIN_SECONDS_ON_PAGE) return 'too fast';
  const text = [p.goal, p.barrier, p.about].join(' ');
  if ((text.match(/https?:\/\//g) || []).length > MAX_LINKS) return 'too many links';

  const cache = CacheService.getScriptCache();
  const key = 'n:' + String(p.email).toLowerCase();
  const n = Number(cache.get(key) || 0) + 1;
  cache.put(key, String(n), 3600);
  if (n > MAX_PER_HOUR) return 'rate limit';

  const secret = PropertiesService.getScriptProperties().getProperty('RECAPTCHA_SECRET');
  if (secret) {
    if (!p.recaptcha) return 'no captcha token';
    const res = UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'post', payload: { secret: secret, response: p.recaptcha }, muteHttpExceptions: true
    });
    const v = JSON.parse(res.getContentText() || '{}');
    if (!v.success || v.action !== p.form || Number(v.score) < MIN_SCORE) return 'captcha ' + (v.score === undefined ? 'failed' : v.score);
  }
  return '';
}

function sheet(form) {
  const parents = DriveApp.getFoldersByName(PARENT_FOLDER_NAME);
  const parent = parents.hasNext() ? parents.next() : DriveApp.createFolder(PARENT_FOLDER_NAME);
  const files = parent.getFilesByName(SHEET_NAME);
  let ss;
  if (files.hasNext()) {
    ss = SpreadsheetApp.open(files.next());
  } else {
    ss = SpreadsheetApp.create(SHEET_NAME);
    DriveApp.getFileById(ss.getId()).moveTo(parent);
  }
  let sh = ss.getSheetByName(form);
  if (!sh) {
    sh = ss.insertSheet(form);
    sh.appendRow(form === 'refused'
      ? ['When', 'Form', 'Name', 'Email', 'Reason', 'Seconds on page', 'Captcha']
      : ['When', 'Form', 'Name', 'Email', 'Company', 'Role', 'LinkedIn', 'Goal', 'Barrier', 'About', 'Résumé']);
  }
  return sh;
}

function folder() {
  const parents = DriveApp.getFoldersByName(PARENT_FOLDER_NAME);
  const parent = parents.hasNext() ? parents.next() : DriveApp.createFolder(PARENT_FOLDER_NAME);
  const it = parent.getFoldersByName(FOLDER_NAME);
  return it.hasNext() ? it.next() : parent.createFolder(FOLDER_NAME);
}

function safeName(s) { return String(s).replace(/[\\/:*?"<>|]/g, '-').slice(0, 80); }

function json(obj, code) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
