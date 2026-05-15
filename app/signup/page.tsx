'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    })

    if (error) {
      alert(error.message)
      return
    }

    router.push('/dashboard')
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white w-full max-w-md rounded-[32px] p-10 shadow-xl border border-slate-200">
        <h1 className="text-4xl font-bold text-slate-900">
          Create account
        </h1>

        <div className="mt-8 space-y-5">
          <input
            placeholder="Full name"
            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  )
}