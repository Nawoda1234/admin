import { AdminSidebar } from '@/components/ui/AdminSidebar'

// FIX: Removed the 'async' keyword from the function definition.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This is a standard React component that directly returns JSX.
  return (
    <div className="flex h-full bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}