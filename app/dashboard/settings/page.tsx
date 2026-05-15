export default function SettingsPage() {
  return (
    <main className="p-8">
      <div className="bg-white rounded-[32px] p-10 border border-slate-200 shadow-sm max-w-3xl">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <div className="mt-10 space-y-6">
          <input
            placeholder="Business Name"
            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
          />

          <input
            placeholder="Business Email"
            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  )
}