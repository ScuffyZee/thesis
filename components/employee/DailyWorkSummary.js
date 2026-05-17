const mockLogs = [
  { id: 1, task: 'Complete UI Design', startTime: '09:00', endTime: '11:30', duration: '2h 30m', notes: 'Worked on dashboard' },
  { id: 2, task: 'Fix Login Bug', startTime: '13:00', endTime: '14:45', duration: '1h 45m', notes: 'Debugging auth flow' },
]

export default function DailyWorkSummary() {
  return (
    <div style={{ border: '1px solid #ccc' }}>
      <div style={{ padding: '1rem', borderBottom: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <strong>Total Time Today: 4h 15m</strong>
      </div>
      {mockLogs.map((log) => (
        <div key={log.id} style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{log.task}</strong>
            <span>{log.duration}</span>
          </div>
          <small style={{ color: '#666' }}>{log.startTime} - {log.endTime}</small>
          {log.notes && <p style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>{log.notes}</p>}
        </div>
      ))}
    </div>
  )
}
