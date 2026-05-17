export default function PerformanceSummary() {
  const stats = [
    { label: 'Total Completed', value: 15 },
    { label: 'Avg Completion Time', value: '2.3 days' },
    { label: 'On-Time Rate', value: '87%' },
    { label: 'Avg Rating', value: '4.2/5' },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
      {stats.map((s) => (
        <div key={s.label} style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>{s.label}</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{s.value}</p>
        </div>
      ))}
    </div>
  )
}
