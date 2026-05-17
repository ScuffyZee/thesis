import AdminLayout from '../../components/layouts/AdminLayout'
import TeamList from '../../components/admin/TeamList'
import AIWorkloadSuggestions from '../../components/admin/AIWorkloadSuggestions'

export default function TeamMonitoring() {
  return (
    <AdminLayout>
      <h1>Team Monitoring</h1>

      <section style={{ marginTop: '1rem', padding: '1rem', border: '1px dashed #999' }}>
        <h2>AI Insights</h2>
        <AIWorkloadSuggestions />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Team Members</h2>
        <TeamList />
      </section>
    </AdminLayout>
  )
}
