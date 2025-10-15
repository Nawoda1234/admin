'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  UsersIcon,
  FireIcon,
  ClipboardDocumentListIcon,
  SparklesIcon,
  ChartBarIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline'




const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: ChartBarIcon },
  { href: '/admin/users', label: 'Users', icon: UsersIcon },
  { href: '/admin/workouts', label: 'Workouts', icon: FireIcon },
  { href: '/admin/meal-plans', label: 'Meal Plans', icon: ClipboardDocumentListIcon },
  { href: '/admin/activity', label: 'Activity Feed', icon: SparklesIcon },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-200 flex flex-col z-50 shadow-lg">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <FireIcon className="h-8 w-8 text-red-500" />
        <h1 className="ml-2 text-2xl font-bold text-white">Fitness Tracker</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="ml-4 text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="px-4 py-4 border-t border-gray-700">
        <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span className="ml-4 text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}