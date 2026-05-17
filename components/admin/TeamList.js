const mockTeam = [
  { id: 1, name: 'John Doe', workload: 'High', productivityScore: 85, attendance: '95%', taskCount: 8 },
  { id: 2, name: 'Jane Smith', workload: 'Medium', productivityScore: 92, attendance: '100%', taskCount: 5 },
]

export default function TeamList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {mockTeam.map((m) => (
        <div key={m.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>{m.name}</h3>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: m.workload === 'High' ? '#ffcccc' : '#ffffcc' }}>
              Workload: {m.workload}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
            <div><small>Productivity</small><p><strong>{m.productivityScore}%</strong></p></div>
            <div><small>Attendance</small><p><strong>{m.attendance}</strong></p></div>
            <div><small>Tasks</small><p><strong>{m.taskCount}</strong></p></div>
          </div>
        </div>
      ))}
    </div>
  )
}
