import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
})

const sheets = google.sheets({ version: 'v4', auth })

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { employeeId, password } = req.body

  if (!employeeId || !password) {
    return res.status(400).json({ success: false, error: 'Employee ID and password are required' })
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_AUTH_SHEET_ID,
      range: 'Sheet1!A:D', // Employee ID | Password | Role | Name
    })

    const rows = response.data.values || []

    // Skip header row, find matching user
    const user = rows.slice(1).find(
      (row) => row[0] === employeeId && row[1] === password
    )

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid employee ID or password' })
    }

    const [id, , role, name] = user

    return res.status(200).json({
      success: true,
      employeeId: id,
      role: role?.toLowerCase(), // normalize: "admin"/"teamlead" or "employee"
      name: name || id,
    })
  } catch (error) {
    console.error('Auth sheet error:', error)
    return res.status(500).json({ success: false, error: 'Failed to reach authentication sheet' })
  }
}
