export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Modern Booking Software
            </span>

            <h1 className="text-6xl font-bold mt-8 leading-tight text-slate-900">
              A cleaner way to manage bookings.
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Book appointments, manage clients, accept payments, and grow your business.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="/book"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold"
              >
                Book Now
              </a>

              <a
                href="/signup"
                className="border border-slate-300 px-8 py-4 rounded-2xl font-semibold"
              >
                Start Free
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-2xl border border-slate-200">
            <h3 className="text-3xl font-bold">
              Booking Preview
            </h3>
          </div>
        </div>
      </section>
    </main>
  )
}