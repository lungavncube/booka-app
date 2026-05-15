import Sidebar from '@/components/dashboard/Sidebar'

export default function DashboardPage() {
  return (
    <main className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-200">
          <h1 className="text-4xl font-bold text-slate-900">
            Dashboard
          </h1>

          <div className="grid lg:grid-cols-4 gap-5 mt-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
              >
                <p className="text-slate-500">Revenue</p>
                <h3 className="text-4xl font-bold mt-4">R12,450</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}