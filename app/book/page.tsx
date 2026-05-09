'use client'

import { useState } from 'react'
import { createBooking } from '@/services/bookings'

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    booking_date: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await createBooking(form)
      alert('Booking successful 🎉')
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Book a Service</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Name"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Service (e.g haircut)"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        />

        <input
          type="datetime-local"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, booking_date: e.target.value })
          }
        />

        <button className="bg-black text-white p-2 w-full">
          Book Now
        </button>
      </form>
    </div>
  )
}