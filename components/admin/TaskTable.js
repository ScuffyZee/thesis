const mockTasks = [
  { id: 'T001', title: 'Sample Task 1', assignedTo: 'John', priority: 'High', deadline: '2026-02-15', status: 'In Progress', progress: 50 },
  { id: 'T002', title: 'Sample Task 2', assignedTo: 'Jane', priority: 'Medium', deadline: '2026-02-20', status: 'Not Started', progress: 0 },
]

export default function TaskTable() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>
            <th style={{ padding: '0.75rem' }}>Task ID</th>
            <th style={{ padding: '0.75rem' }}>Title</th>
            <th style={{ padding: '0.75rem' }}>Assigned To</th>
            <th style={{ padding: '0.75rem' }}>Priority</th>
            <th style={{ padding: '0.75rem' }}>Deadline</th>
            <th style={{ padding: '0.75rem' }}>Status</th>
            <th style={{ padding: '0.75rem' }}>Progress</th>
            <th style={{ padding: '0.75rem' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockTasks.map((t) => (
            <tr key={t.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '0.75rem' }}>{t.id}</td>
              <td style={{ padding: '0.75rem' }}>{t.title}</td>
              <td style={{ padding: '0.75rem' }}>{t.assignedTo}</td>
              <td style={{ padding: '0.75rem' }}>{t.priority}</td>
              <td style={{ padding: '0.75rem' }}>{t.deadline}</td>
              <td style={{ padding: '0.75rem' }}>{t.status}</td>
              <td style={{ padding: '0.75rem' }}>{t.progress}%</td>
              <td style={{ padding: '0.75rem' }}><button>View</button> <button>Edit</button> <button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
