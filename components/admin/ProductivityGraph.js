export default function ProductivityGraph() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', minHeight: '200px' }}>
        <h3>Weekly Task Completion</h3>
        <p style={{ color: '#666' }}>[Chart placeholder]</p>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '1rem', minHeight: '200px' }}>
        <h3>Team Performance</h3>
        <p style={{ color: '#666' }}>[Chart placeholder]</p>
      </div>
    </div>
  )
}
