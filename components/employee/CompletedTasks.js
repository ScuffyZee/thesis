const mockCompleted = [
  { id: 'T010', title: 'Setup Project Repo', completedDate: '2026-02-05', feedback: 'Great work!' },
  { id: 'T008', title: 'Create Database Schema', completedDate: '2026-02-03', feedback: null },
]

export default function CompletedTasks() {
  return (
    <div style={{ border: '1px solid #ccc' }}>
      {mockCompleted.map((task) => (
        <div key={task.id} style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{task.title}</strong>
            <small style={{ color: '#666' }}>Completed: {task.completedDate}</small>
          </div>
          {task.feedback && <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: '#4caf50' }}>Feedback: {task.feedback}</p>}
        </div>
      ))}
    </div>
  )
}
