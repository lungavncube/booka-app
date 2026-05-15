import Link from 'next/link'

const links = [
  'Dashboard',
  'Appointments',
  'Customers',
  'Services',
  'Analytics',
  'Settings',
]

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-slate-200 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Booka
      </h1>

      <nav className="mt-10 space-y-2">
        {links.map((link) => (
          <Link
            key={link}
            href="#"
            className="block px-5 py-4 rounded-2xl hover:bg-blue-50 hover:text-blue-600 font-medium"
          >
            {link}
          </Link>
        ))}
      </nav>
    </aside>
  )
}