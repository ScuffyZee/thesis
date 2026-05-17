export default function ProgressBar() {
  const percentage = 75

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span>Weekly Productivity</span>
        <span>{percentage}%</span>
      </div>
      <div style={{ backgroundColor: '#eee', height: '20px', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#4caf50', height: '100%', width: `${percentage}%` }} />
      </div>
    </div>
  )
}
