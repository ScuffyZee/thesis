import EmployeeLayout from '../../components/layouts/EmployeeLayout'
import CompletedTasks from '../../components/employee/CompletedTasks'
import PerformanceSummary from '../../components/employee/PerformanceSummary'

export default function TaskHistory() {
  return (
    <EmployeeLayout>
      <h1>Task History</h1>

      <section style={{ marginTop: '1rem' }}>
        <h2>Past Performance Summary</h2>
        <PerformanceSummary />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Completed Tasks</h2>
        <CompletedTasks />
      </section>
    </EmployeeLayout>
  )
}
