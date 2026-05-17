import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isAdmin } from '../hooks/useAuth'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.replace('/login')
      return
    }
    const { role } = JSON.parse(user)
    router.replace(isAdmin(role) ? '/admin' : '/employee')
  }, [])

  return null
}
