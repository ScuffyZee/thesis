import { useState } from 'react'

export default function TimeTracker() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState('00:00:00')
  const [selectedTask, setSelectedTask] = useState('')
  const [workNotes, setWorkNotes] = useState('')
  const [manualStart, setManualStart] = useState('')
  const [manualEnd, setManualEnd] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <h3>Timer</h3>
        <div style={{ marginTop: '1rem' }}>
          <label>Select Task: </label>
          <select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)} style={{ padding: '0.5rem' }}>
            <option value="">-- Select Task --</option>
            <option value="T001">Complete UI Design</option>
            <option value="T002">Write Documentation</option>
          </select>
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '2rem', fontFamily: 'monospace' }}>{elapsedTime}</p>
          <button onClick={() => setIsRunning(!isRunning)} style={{ padding: '0.75rem 1.5rem', backgroundColor: isRunning ? '#ff4444' : '#44ff44' }}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <h3>Manual Time Entry</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
          <div><label>Start Time</label><input type="datetime-local" value={manualStart} onChange={(e) => setManualStart(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} /></div>
          <div><label>End Time</label><input type="datetime-local" value={manualEnd} onChange={(e) => setManualEnd(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} /></div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Work Notes</label>
          <textarea value={workNotes} onChange={(e) => setWorkNotes(e.target.value)} style={{ width: '100%', padding: '0.5rem', minHeight: '80px' }} placeholder="What did you work on?" />
        </div>
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Log Time</button>
      </div>
    </div>
  )
}
