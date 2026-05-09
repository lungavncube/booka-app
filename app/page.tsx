export default function BookaLandingPage() {
  const bookingSteps = [
    'Plan',
    'Book',
    'Pay',
    'Done',
  ]

  const plans = [
    {
      name: 'Single',
      price: 'R250',
      description: 'One-off appointment',
      active: false,
    },
    {
      name: 'Monthly',
      price: 'R250',
      description: '1 visit per month',
      active: false,
    },
    {
      name: 'Bi-weekly',
      price: 'R450',
      description: '2 visits per month',
      active: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              B
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Booka</h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 transition font-medium"
            >
              Login
            </a>

            <a
              href="/signup"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition font-medium shadow-lg shadow-blue-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100 mb-6">
            ✨ Beautiful scheduling for modern businesses
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900">
            A cleaner way to manage appointments.
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Inspired by premium booking experiences. Booka combines elegant design, fast scheduling, and modern business management tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/signup"
              className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-xl shadow-blue-200"
            >
              Start Free
            </a>

            <a
              href="/book"
              className="px-7 py-4 rounded-2xl bg-white border border-slate-300 hover:border-blue-400 hover:text-blue-600 transition font-semibold"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Booking Flow UI */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-100 blur-3xl opacity-50 rounded-full"></div>

          <div className="relative bg-[#f7f5f2] border border-[#ebe6df] rounded-[32px] p-8 shadow-2xl">
            {/* Steps */}
            <div className="flex items-center justify-center gap-4 mb-10">
              {bookingSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index === 1
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-300 text-slate-500'
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span className="hidden sm:block text-sm text-slate-500 font-medium">
                    {step}
                  </span>

                  {index !== bookingSteps.length - 1 && (
                    <div className="w-8 h-px bg-slate-300"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-sm uppercase tracking-wide text-slate-400 font-semibold">
                Choose your plan
              </p>

              <h2 className="text-4xl font-bold mt-3 text-slate-900">
                Book your appointment
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-3xl border p-6 transition-all duration-300 ${
                    plan.active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-[1.02]'
                      : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {plan.active && (
                    <div className="inline-flex px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold mb-5">
                      Most Popular
                    </div>
                  )}

                  <p
                    className={`uppercase tracking-wide text-xs font-bold ${
                      plan.active ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {plan.name}
                  </p>

                  <div className="mt-5 flex items-end gap-1">
                    <h3 className="text-5xl font-bold">{plan.price}</h3>
                    <span
                      className={`mb-2 text-sm ${
                        plan.active ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      /month
                    </span>
                  </div>

                  <p
                    className={`mt-4 leading-relaxed ${
                      plan.active ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-8 space-y-4 text-sm">
                    {[
                      'Full service booking',
                      'Schedule management',
                      'Customer support',
                      'Travel included',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            plan.active ? 'bg-emerald-400' : 'bg-blue-500'
                          }`}
                        ></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-10 w-full py-4 rounded-2xl font-semibold transition ${
                      plan.active
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                        : 'border border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {plan.active ? 'Subscribe' : 'Book Now'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="bg-[#f8fafc] border border-slate-200 rounded-[32px] p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
              <div>
                <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                  Dashboard Preview
                </p>
                <h2 className="text-4xl font-bold mt-3">
                  Elegant business management.
                </h2>
              </div>

              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  B
                </div>
                <div>
                  <p className="font-semibold">Booka Dashboard</p>
                  <p className="text-sm text-slate-500">Real-time analytics</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-5 mb-5">
              {[
                'Sales',
                'Customers',
                'Bookings',
                'Revenue',
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
                >
                  <p className="text-slate-500 text-sm">{card}</p>
                  <h3 className="text-4xl font-bold mt-3">1</h3>
                  <p className="text-emerald-500 mt-2 text-sm font-medium">
                    +15.2%
                  </p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              <div className="bg-blue-600 text-white rounded-3xl p-8 min-h-[240px] shadow-xl shadow-blue-200">
                <p className="text-blue-100">This Week</p>
                <h3 className="text-3xl font-bold mt-6">Active Services</h3>

                <div className="mt-10 space-y-5">
                  <div>
                    <p className="text-blue-100">Haircuts</p>
                    <h4 className="text-2xl font-bold">12</h4>
                  </div>

                  <div>
                    <p className="text-blue-100">Consultations</p>
                    <h4 className="text-2xl font-bold">4</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-8 min-h-[240px] shadow-sm">
                <p className="text-slate-500">Appointments</p>
                <h3 className="text-5xl font-bold mt-5">24</h3>
                <p className="text-emerald-500 mt-3 font-medium">+8.5%</p>

                <div className="mt-10 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="w-[70%] h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-8 min-h-[240px] shadow-sm">
                <p className="text-slate-500">Recent Bookings</p>

                <div className="mt-8 space-y-5">
                  {['John Doe', 'Sarah Smith', 'Michael Lee'].map((name, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-slate-100"></div>
                        <div>
                          <p className="font-semibold">{name}</p>
                          <p className="text-sm text-slate-500">Confirmed</p>
                        </div>
                      </div>

                      <span className="text-sm text-slate-400">2pm</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold tracking-tight">
              Everything you need in one platform.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Streamline bookings, manage clients, and grow your business with tools built for modern service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Smart Scheduling',
                desc: 'Prevent double bookings and manage appointments easily.',
                color: 'from-blue-500 to-cyan-400',
              },
              {
                title: 'Client Management',
                desc: 'Keep track of customers and booking history securely.',
                color: 'from-violet-500 to-fuchsia-400',
              },
              {
                title: 'Payments',
                desc: 'Accept deposits and online payments seamlessly.',
                color: 'from-emerald-500 to-lime-400',
              },
              {
                title: 'Analytics',
                desc: 'View booking performance and business growth insights.',
                color: 'from-orange-500 to-amber-400',
              },
              {
                title: 'Calendar Sync',
                desc: 'Connect your availability with external calendars.',
                color: 'from-pink-500 to-rose-400',
              },
              {
                title: 'Mobile Friendly',
                desc: 'Optimized experience across all devices.',
                color: 'from-sky-500 to-indigo-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-7 hover:shadow-xl transition"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl shadow-lg`}
                >
                  ✦
                </div>

                <h3 className="text-2xl font-bold mt-6">{feature.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight">
            Pricing that scales with your business.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Start free and upgrade when your bookings grow.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <div className="bg-white border border-slate-200 rounded-[32px] p-10 text-left shadow-lg">
              <p className="text-slate-500 font-medium">Starter</p>
              <h3 className="text-6xl font-bold mt-4">Free</h3>

              <ul className="space-y-5 mt-10 text-slate-700">
                <li>✔ Appointment bookings</li>
                <li>✔ Email confirmations</li>
                <li>✔ Mobile friendly</li>
                <li>✔ Basic dashboard</li>
              </ul>

              <button className="mt-10 w-full py-4 rounded-2xl border border-slate-300 hover:bg-slate-100 transition font-semibold">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-[32px] p-10 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-white text-blue-600 text-sm font-bold shadow">
                Most Popular
              </div>

              <p className="text-blue-100 font-medium">Business</p>
              <h3 className="text-6xl font-bold mt-4">R299</h3>
              <p className="mt-2 text-blue-100">per month</p>

              <ul className="space-y-5 mt-10 text-white/90">
                <li>✔ Everything in Starter</li>
                <li>✔ Online payments</li>
                <li>✔ Advanced analytics</li>
                <li>✔ Team management</li>
                <li>✔ Priority support</li>
              </ul>

              <button className="mt-10 w-full py-4 rounded-2xl bg-white text-blue-700 hover:bg-slate-100 transition font-bold shadow-lg">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-5xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Start accepting bookings online today.
          </h2>

          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Build a modern booking experience for your customers with Booka.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <a
              href="/signup"
              className="px-8 py-4 rounded-2xl bg-white text-blue-700 font-bold hover:bg-slate-100 transition shadow-lg"
            >
              Create Account
            </a>

            <a
              href="/book"
              className="px-8 py-4 rounded-2xl border border-white/40 hover:bg-white/10 transition font-semibold"
            >
              Try Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}