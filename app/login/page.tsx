'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from '@/services/auth'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const handleLogin = async (e: any) => {
    e.preventDefault()

    const { error } = await signIn(email, password)

    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl mb-5">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  )
}