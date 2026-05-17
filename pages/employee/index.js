import EmployeeLayout from '../../components/layouts/EmployeeLayout'
import TaskSummary from '../../components/employee/TaskSummary'
import ProgressBar from '../../components/employee/ProgressBar'
import UpcomingDeadlines from '../../components/employee/UpcomingDeadlines'

export default function EmployeeDashboard() {
  return (
    <EmployeeLayout>
      <h1>My Dashboard</h1>

      <section style={{ marginTop: '1rem' }}>
        <h2>My Task Summary</h2>
        <TaskSummary />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Weekly Productivity</h2>
        <ProgressBar />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Upcoming Deadlines</h2>
        <UpcomingDeadlines />
      </section>
    </EmployeeLayout>
  )
}
