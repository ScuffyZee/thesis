import { useState } from 'react'

export default function CreateTaskForm() {
  const [formData, setFormData] = useState({
    title: '', description: '', assignedTo: [], deadline: '', priority: 'medium', tags: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Create task:', formData)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
      <div>
        <label>Title</label>
        <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} style={{ width: '100%', padding: '0.5rem' }} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }} />
      </div>
      <div>
        <label>Assign To</label>
        <select multiple value={formData.assignedTo} onChange={(e) => setFormData({ ...formData, assignedTo: Array.from(e.target.selectedOptions, o => o.value) })} style={{ width: '100%', padding: '0.5rem' }}>
          <option value="emp1">Employee 1</option>
          <option value="emp2">Employee 2</option>
        </select>
      </div>
      <div>
        <label>Deadline</label>
        <input type="datetime-local" value={formData.deadline} onChange={(e) => setFormData({ ...formData, deadline: e.target.value })} style={{ width: '100%', padding: '0.5rem' }} />
      </div>
      <div>
        <label>Priority</label>
        <select value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })} style={{ width: '100%', padding: '0.5rem' }}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>
      <div>
        <label>Tags</label>
        <input type="text" value={formData.tags} onChange={(e) => setFormData({ ...formData, tags: e.target.value })} style={{ width: '100%', padding: '0.5rem' }} placeholder="comma-separated" />
      </div>
      <div><label>Attachments</label><input type="file" multiple /></div>
      <button type="submit" style={{ padding: '0.75rem' }}>Create Task</button>
    </form>
  )
}
