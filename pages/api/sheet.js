import { google } from 'googleapis';

export default async function handler(req, res) {
    const body = req.body;
    const target = ['https://www.googleapis.com/auth/spreadsheets'];
    const jwt = new google.auth.JWT(
      process.env.GSHEET_CLIENT_EMAIL,
      null,
      (process.env.GSHEET_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );


    const sheets = google.sheets({ version: 'v4', auth: jwt });
    
    sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GSHEET_DATABASE_ID,
    range: 'Sheet1!A2:J', // sheet name
    valueInputOption: 'USER_ENTERED',
    requestBody: {
        values: [[body.fname, body.email, body.sms, body.referral, body.diet, body.dry, body.initiated, body.motive, body.age, body.country]],
      },
  }, (err, result) => {
    if (err) {
      // Handle error.
      console.log(err);
    } else {
      console.log(`cells appended.`);
    }
  });
}