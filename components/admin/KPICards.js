export default function KPICards() {
  const kpis = [
    { label: 'Total Active Tasks', value: 0 },
    { label: 'Completed Tasks Today', value: 0 },
    { label: 'Overdue Tasks', value: 0 },
    { label: 'Avg Completion Time', value: '0h' },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      {kpis.map((kpi) => (
        <div key={kpi.label} style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>{kpi.label}</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{kpi.value}</p>
        </div>
      ))}
    </div>
  )
}
