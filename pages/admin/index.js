import AdminLayout from '../../components/layouts/AdminLayout'
import KPICards from '../../components/admin/KPICards'
import ProductivityGraph from '../../components/admin/ProductivityGraph'
import RecentActivities from '../../components/admin/RecentActivities'

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard Overview</h1>

      <section style={{ marginTop: '1rem' }}>
        <h2>Key Metrics</h2>
        <KPICards />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Productivity Graph</h2>
        <ProductivityGraph />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Recent Activities</h2>
        <RecentActivities />
      </section>
    </AdminLayout>
  )
}
