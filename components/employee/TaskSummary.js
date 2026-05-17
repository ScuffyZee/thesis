export default function TaskSummary() {
  const summary = [
    { label: 'Tasks Assigned', value: 5 },
    { label: 'Due Today', value: 2 },
    { label: 'Overdue', value: 1 },
    { label: 'Completed This Week', value: 3 },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
      {summary.map((item) => (
        <div key={item.label} style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>{item.label}</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.value}</p>
        </div>
      ))}
    </div>
  )
}
