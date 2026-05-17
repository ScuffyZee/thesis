import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ADMIN_ROLES = ['admin', 'teamlead', 'team lead', 'department head']

export function isAdmin(role) {
  return ADMIN_ROLES.includes(role?.toLowerCase())
}

export default function useAuth(requiredRole) {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (!stored) {
      router.replace('/login')
      return
    }

    const parsed = JSON.parse(stored)
    const userIsAdmin = isAdmin(parsed.role)

    if (requiredRole === 'admin' && !userIsAdmin) {
      router.replace('/employee')
      return
    }

    if (requiredRole === 'employee' && userIsAdmin) {
      router.replace('/admin')
      return
    }

    setUser(parsed)
  }, [])

  return user
}
