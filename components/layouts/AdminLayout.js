import Link from 'next/link'
import { useRouter } from 'next/router'
import useAuth from '../../hooks/useAuth'

const navItems = [
  { href: '/admin', label: 'Dashboard Overview' },
  { href: '/admin/tasks', label: 'Task Management' },
  { href: '/admin/team', label: 'Team Monitoring' },
  { href: '/admin/reports', label: 'Reports & Analytics' },
]

export default function AdminLayout({ children }) {
  const router = useRouter()
  const user = useAuth('admin')

  function logout() {
    localStorage.removeItem('user')
    router.replace('/login')
  }

  if (!user) return null

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ marginBottom: '0.25rem' }}>Admin Panel</h2>
        <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1rem' }}>{user.name} ({user.employeeId})</p>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '0.5rem',
                backgroundColor: router.pathname === item.href ? '#eee' : 'transparent',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <hr style={{ margin: '1rem 0' }} />
        <button onClick={logout} style={{ padding: '0.5rem', cursor: 'pointer', backgroundColor: '#fff', border: '1px solid #ccc' }}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '1rem' }}>
        {children}
      </main>

      {/* AI Assistant Floating Button */}
      <button
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          padding: '1rem',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#333',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={() => alert('AI Assistant Panel - TODO')}
      >
        AI
      </button>
    </div>
  )
}
