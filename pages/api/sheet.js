const {google} = require('googleapis');

export async function handler (req, res) {
    
    const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GSHEET_CLIENT_EMAIL,
          client_id: process.env.GSHEET_CLIENT_ID,
          private_key: process.env.GSHEET_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: [
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/spreadsheets',
        ],
      });
    
    const sheets = google.sheets({
        auth,
        version: 'v4',
      });

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GSHEET_DATABASE_ID,
        range: 'Sheet1!A2:I',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [body.fname, body.email, body.sms, body.referral, body.diet, body.dry, body.initiated, body.motive, body.age],
        },
      });
      console.log(response);
      res.status(201).json({response, result: "Feedback posted to spreadsheet!"})

}