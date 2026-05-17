import { useState } from 'react'

const priorityColors = { Low: '#ccffcc', Medium: '#ffffcc', High: '#ffddcc', Critical: '#ffcccc' }

export default function TaskCard({ task }) {
  const [status, setStatus] = useState(task.status)
  const [progress, setProgress] = useState(task.progress)
  const [actualHours, setActualHours] = useState('')
  const [comment, setComment] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')

  async function logToSheet() {
    setSaving(true)
    setSaveMsg('')
    try {
      const timestamp = new Date().toISOString()
      const res = await fetch('/api/sheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          range: 'Sheet1!A:N',
          values: [[
            task.id,
            task.employeeId || '',
            task.title,
            task.type || '',
            task.priority,
            task.difficulty || '',
            task.estimatedHours || '',
            actualHours || '',
            task.deadline,
            status,
            progress,
            comment || '',
            timestamp,
          ]],
        }),
      })
      const data = await res.json()
      setSaveMsg(data.success ? 'Logged successfully.' : `Error: ${data.error}`)
    } catch (err) {
      setSaveMsg('Failed to connect to the server.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{task.title}</h3>
        <span style={{ padding: '0.25rem 0.5rem', backgroundColor: priorityColors[task.priority] || '#eee' }}>{task.priority}</span>
      </div>
      <p style={{ marginTop: '0.5rem', color: '#666' }}>{task.description}</p>
      <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
        <span><strong>Type:</strong> {task.type}</span>
        <span><strong>Difficulty:</strong> {task.difficulty}</span>
        <span><strong>Est. Hours:</strong> {task.estimatedHours}h</span>
        <span><strong>Deadline:</strong> {task.deadline}</span>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Progress: {progress}%</label>
        <input type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(Number(e.target.value))} style={{ width: '100%' }} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Status: </label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Actual Hours Spent: </label>
        <input
          type="number"
          min="0"
          step="0.5"
          value={actualHours}
          onChange={(e) => setActualHours(e.target.value)}
          placeholder="e.g. 3.5"
          style={{ marginLeft: '0.5rem', padding: '0.25rem', width: '80px' }}
        />
      </div>

      <div style={{ marginTop: '1rem' }}><label>Upload: </label><input type="file" /></div>

      <div style={{ marginTop: '1rem' }}>
        <label>Comment:</label>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a comment..." style={{ flex: 1, padding: '0.5rem' }} />
        </div>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={logToSheet} disabled={saving} style={{ padding: '0.5rem 1rem', cursor: saving ? 'not-allowed' : 'pointer' }}>
          {saving ? 'Logging...' : 'Log to Sheet'}
        </button>
        {saveMsg && <span style={{ color: saveMsg.startsWith('Error') || saveMsg.startsWith('Failed') ? 'red' : 'green' }}>{saveMsg}</span>}
      </div>
    </div>
  )
}
