export default function RecentActivities() {
  const activities = [
    { id: 1, message: 'Task #123 was updated', time: '2 min ago' },
    { id: 2, message: 'Task #120 marked as completed', time: '5 min ago' },
    { id: 3, message: 'New comment on Task #118', time: '10 min ago' },
  ]

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxHeight: '300px', overflowY: 'auto' }}>
      <ul style={{ listStyle: 'none' }}>
        {activities.map((a) => (
          <li key={a.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
            <p>{a.message}</p>
            <small style={{ color: '#666' }}>{a.time}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
