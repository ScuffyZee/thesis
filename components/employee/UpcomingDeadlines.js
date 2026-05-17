const mockDeadlines = [
  { id: 'T001', title: 'Complete UI Design', deadline: '2026-02-15', daysLeft: 3 },
  { id: 'T003', title: 'Fix Login Bug', deadline: '2026-02-13', daysLeft: 1 },
]

export default function UpcomingDeadlines() {
  return (
    <div style={{ border: '1px solid #ccc' }}>
      {mockDeadlines.map((task) => (
        <div key={task.id} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontWeight: 'bold' }}>{task.title}</p>
            <small style={{ color: '#666' }}>Due: {task.deadline}</small>
          </div>
          <span style={{ padding: '0.25rem 0.5rem', backgroundColor: task.daysLeft <= 1 ? '#ffcccc' : '#ffffcc', alignSelf: 'center' }}>
            {task.daysLeft} day{task.daysLeft !== 1 ? 's' : ''} left
          </span>
        </div>
      ))}
    </div>
  )
}
