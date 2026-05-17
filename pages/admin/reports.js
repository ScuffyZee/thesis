import { useState } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'

export default function ReportsAnalytics() {
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [selectedEmployee, setSelectedEmployee] = useState('')

  return (
    <AdminLayout>
      <h1>Reports & Analytics</h1>

      <section style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <label>Start Date: </label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
        </div>
        <div>
          <label>End Date: </label>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </div>
        <div>
          <label>Employee: </label>
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
          >
            <option value="">All Employees</option>
            <option value="1">Employee 1</option>
            <option value="2">Employee 2</option>
          </select>
        </div>
      </section>

      <section style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => alert('Export PDF')}>Export PDF</button>
        <button onClick={() => alert('Export Excel')}>Export Excel</button>
        <button onClick={() => alert('Export CSV')}>Export CSV</button>
      </section>

      <section style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed #999' }}>
        <h2>AI Insights</h2>
        <ul>
          <li>Predicts task delays</li>
          <li>Recommends deadline adjustments</li>
          <li>Identifies bottlenecks</li>
        </ul>
        <p style={{ marginTop: '1rem', color: '#666' }}>[AI analysis results will appear here]</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Report Data</h2>
        <p style={{ color: '#666' }}>[Report table/charts will render here]</p>
      </section>
    </AdminLayout>
  )
}
