import { useState } from 'react'
import { useRouter } from 'next/router'
import { isAdmin } from '../hooks/useAuth'

export default function Login() {
  const router = useRouter()
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ employeeId, password }),
    })

    const data = await res.json()
    setLoading(false)

    if (!data.success) {
      setError(data.error || 'Invalid credentials')
      return
    }

    localStorage.setItem('user', JSON.stringify({ employeeId: data.employeeId, role: data.role, name: data.name }))

    if (isAdmin(data.role)) {
      router.push('/admin')
    } else {
      router.push('/employee')
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
      <div style={{ backgroundColor: '#fff', color: '#171717', padding: '2rem', border: '1px solid #ccc', width: '100%', maxWidth: '380px' }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Task Logger</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem' }}>Employee ID</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="e.g. ADM001 or EMP001"
              required
              style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box', border: '1px solid #ccc' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box', border: '1px solid #ccc' }}
            />
          </div>
          {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '0.75rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
