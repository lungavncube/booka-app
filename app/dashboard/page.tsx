'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from '@/services/auth'
import { supabase } from '@/lib/supabaseClients'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
      }
    }

    getUser()
  }, [])

  const handleLogout = async () => {
    await signOut()
    router.push('/login')
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl">Dashboard</h1>

      <p className="mt-4">
        Logged in as: {user?.email}
      </p>

      <button
        onClick={handleLogout}
        className="mt-5 bg-red-500 text-white p-2"
      >
        Logout
      </button>
    </div>
  )
}