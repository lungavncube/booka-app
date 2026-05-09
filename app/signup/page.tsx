'use client'

import { useState } from 'react'
import { signUp } from '@/services/auth'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (e: any) => {
    e.preventDefault()

    const { error } = await signUp(email, password)

    if (error) {
      alert(error.message)
    } else {
      alert('Account created successfully 🎉')
    }
  }

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl mb-5">Create Account</h1>

      <form onSubmit={handleSignup} className="space-y-4">
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
          Sign Up
        </button>
      </form>
    </div>
  )
}