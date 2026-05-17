export default function AITimeInsights() {
  const insights = [
    { type: 'idle', message: 'Detected 15 minutes of idle time between 10:30-10:45' },
    { type: 'category', message: 'Suggestion: Categorize this work under "Bug Fixes"' },
    { type: 'break', message: "You've been working for 2 hours. Consider a break!" },
  ]

  return (
    <ul style={{ listStyle: 'none' }}>
      {insights.map((i, idx) => (
        <li key={idx} style={{ padding: '0.5rem', marginBottom: '0.5rem', backgroundColor: '#f9f9f9' }}>
          {i.type === 'idle' ? '⏸️' : i.type === 'category' ? '📁' : '☕'} {i.message}
        </li>
      ))}
    </ul>
  )
}
