import { google } from 'googleapis'

// Configure authentication
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })

// Your Google Sheet ID (from the URL)
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID

export default async function handler(req, res) {
  const { method } = req

  try {
    switch (method) {
      // GET - Read data from sheet
      case 'GET': {
        const { range = 'Sheet1!A:Z' } = req.query
        
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: SPREADSHEET_ID,
          range,
        })
        
        return res.status(200).json({
          success: true,
          data: response.data.values || [],
        })
      }

      // POST - Append data to sheet
      case 'POST': {
        const { range = 'Sheet1!A:Z', values } = req.body
        
        if (!values || !Array.isArray(values)) {
          return res.status(400).json({ success: false, error: 'Values array is required' })
        }
        
        const response = await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values,
          },
        })
        
        return res.status(200).json({
          success: true,
          updatedRange: response.data.updates?.updatedRange,
          updatedRows: response.data.updates?.updatedRows,
        })
      }

      // PUT - Update specific cells
      case 'PUT': {
        const { range, values } = req.body
        
        if (!range || !values) {
          return res.status(400).json({ success: false, error: 'Range and values are required' })
        }
        
        const response = await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values,
          },
        })
        
        return res.status(200).json({
          success: true,
          updatedCells: response.data.updatedCells,
        })
      }

      // DELETE - Clear specific range
      case 'DELETE': {
        const { range } = req.body
        
        if (!range) {
          return res.status(400).json({ success: false, error: 'Range is required' })
        }
        
        await sheets.spreadsheets.values.clear({
          spreadsheetId: SPREADSHEET_ID,
          range,
        })
        
        return res.status(200).json({
          success: true,
          message: `Cleared range: ${range}`,
        })
      }

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        return res.status(405).json({ success: false, error: `Method ${method} Not Allowed` })
    }
  } catch (error) {
    console.error('Google Sheets API Error:', error)
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}