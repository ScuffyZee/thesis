import AdminLayout from '../../components/layouts/AdminLayout'
import CreateTaskForm from '../../components/admin/CreateTaskForm'
import TaskTable from '../../components/admin/TaskTable'

export default function TaskManagement() {
  return (
    <AdminLayout>
      <h1>Task Management</h1>

      <section style={{ marginTop: '1rem' }}>
        <h2>Create New Task</h2>
        <CreateTaskForm />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>All Tasks</h2>
        <TaskTable />
      </section>
    </AdminLayout>
  )
}
