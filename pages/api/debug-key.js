export default function handler(req, res) {
  const key = process.env.GOOGLE_PRIVATE_KEY || ''
  res.status(200).json({
    length: key.length,
    startsCorrectly: key.includes('-----BEGIN PRIVATE KEY-----'),
    endsCorrectly: key.includes('-----END PRIVATE KEY-----'),
    hasLiteralBackslashN: key.includes('\\n'),
    hasRealNewlines: key.includes('\n'),
    first50: key.substring(0, 50),
  })
}
