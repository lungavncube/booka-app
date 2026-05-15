'use client'

import { useRouter } from 'next/navigation'
import { useBookingStore } from '@/store/bookingStore'

export default function BookingPage() {
  const router = useRouter()
  const { setBooking } = useBookingStore()

  function continueBooking() {
    setBooking({
      service: 'Haircut',
      date: '2026-05-20',
      time: '14:00',
      provider: 'John',
    })

    router.push('/signup')
  }

  return (
    <main className="min-h-screen bg-[#f7f5f2] px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] p-10 shadow-xl">
        <h1 className="text-5xl font-bold text-slate-900">
          Book Appointment
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="border rounded-3xl p-6 hover:border-blue-500 cursor-pointer">
            <h3 className="text-2xl font-bold">Single</h3>
            <p className="mt-3 text-slate-500">R250</p>
          </div>

          <div className="border rounded-3xl p-6 hover:border-blue-500 cursor-pointer">
            <h3 className="text-2xl font-bold">Monthly</h3>
            <p className="mt-3 text-slate-500">R450</p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6">
            <h3 className="text-2xl font-bold">Bi-weekly</h3>
            <p className="mt-3 text-slate-300">R850</p>
          </div>
        </div>

        <button
          onClick={continueBooking}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold"
        >
          Continue
        </button>
      </div>
    </main>
  )
}