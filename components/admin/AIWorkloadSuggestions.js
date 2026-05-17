export default function AIWorkloadSuggestions() {
  const suggestions = [
    { type: 'redistribution', message: 'John Doe is overloaded. Consider reassigning 2 tasks.' },
    { type: 'pattern', message: 'Bob Johnson shows declining productivity on Fridays.' },
  ]

  return (
    <ul style={{ listStyle: 'none' }}>
      {suggestions.map((s, i) => (
        <li key={i} style={{ padding: '0.5rem', marginBottom: '0.5rem', backgroundColor: '#f9f9f9' }}>
          {s.type === 'redistribution' ? '📊' : '📉'} {s.message}
        </li>
      ))}
    </ul>
  )
}
