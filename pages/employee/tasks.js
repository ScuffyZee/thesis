import EmployeeLayout from '../../components/layouts/EmployeeLayout'
import TaskCard from '../../components/employee/TaskCard'

const mockTasks = [
  { id: 'T001', employeeId: 'E001', title: 'Complete UI Design', description: 'Design the dashboard UI', type: 'Design', priority: 'High', difficulty: 'Medium', estimatedHours: 5, deadline: '2026-02-15', status: 'In Progress', progress: 60 },
  { id: 'T002', employeeId: 'E001', title: 'Write Documentation', description: 'Document the API endpoints', type: 'Documentation', priority: 'Medium', difficulty: 'Low', estimatedHours: 3, deadline: '2026-02-18', status: 'Not Started', progress: 0 },
  { id: 'T003', employeeId: 'E001', title: 'Fix Login Bug', description: 'Fix the authentication issue', type: 'Bug Fix', priority: 'Critical', difficulty: 'High', estimatedHours: 4, deadline: '2026-02-13', status: 'In Progress', progress: 80 },
]

export default function MyTasks() {
  return (
    <EmployeeLayout>
      <h1>My Tasks</h1>

      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {mockTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </EmployeeLayout>
  )
}
