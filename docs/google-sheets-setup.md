# Google Sheets Contact Form Setup

This guide walks you through setting up a Google Sheets backend for the contact form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named **"Portfolio Contact Form"**
3. Add these headers in Row 1:
   | A | B | C | D | E | F |
   |---|---|---|---|---|---|
   | Timestamp | Name | Email | Subject | Message | Status |

## Step 2: Create the Apps Script

1. In your sheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name,
      data.email,
      data.subject,
      data.message,
      "New",
    ]);

    // Optional: Send email notification
    MailApp.sendEmail({
      to: "shreyanshjainwork12@gmail.com",
      subject: "Portfolio Contact: " + data.subject,
      htmlBody:
        "<h3>New Contact Form Submission</h3>" +
        "<p><strong>Name:</strong> " + data.name + "</p>" +
        "<p><strong>Email:</strong> " + data.email + "</p>" +
        "<p><strong>Subject:</strong> " + data.subject + "</p>" +
        "<p><strong>Message:</strong> " + data.message + "</p>" +
        "<p><strong>Time:</strong> " + (data.timestamp || new Date().toISOString()) + "</p>",
    });

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (Ctrl+S)

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Select type: **Web app**
3. Settings:
   - Description: "Portfolio Contact Form"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. **Authorize** the app when prompted
6. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/...exec`)

## Step 4: Configure the Portfolio

1. Create a `.env` file in the project root:

```
VITE_CONTACT_FORM_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Restart the dev server

## Step 5: Test

```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Hello World"}'
```

Check your Google Sheet — a new row should appear, and you should receive an email notification.
