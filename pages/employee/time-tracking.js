import EmployeeLayout from '../../components/layouts/EmployeeLayout'
import TimeTracker from '../../components/employee/TimeTracker'
import DailyWorkSummary from '../../components/employee/DailyWorkSummary'
import AITimeInsights from '../../components/employee/AITimeInsights'

export default function TimeTracking() {
  return (
    <EmployeeLayout>
      <h1>Log Work / Time Tracking</h1>

      <section style={{ marginTop: '1rem' }}>
        <h2>Time Tracker</h2>
        <TimeTracker />
      </section>

      <section style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed #999' }}>
        <h2>AI Insights</h2>
        <AITimeInsights />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Daily Work Summary</h2>
        <DailyWorkSummary />
      </section>
    </EmployeeLayout>
  )
}
