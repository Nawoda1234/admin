import { UserCircleIcon } from '@heroicons/react/24/solid';

const mockUsers = [
  { id: '1', name: 'Janith Wathsala', email: 'janith.w@example.com', joinDate: '2025-10-01' },
  { id: '2', name: 'Navindu Perera', email: 'navindu.p@example.com', joinDate: '2025-09-25' },
  { id: '3', name: 'Alex Johnson', email: 'alex.j@example.com', joinDate: '2025-09-15' },
  { id: '4', name: 'Maria Garcia', email: 'maria.g@example.com', joinDate: '2025-08-30' },
];

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date Joined</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center">
                  <UserCircleIcon className="h-10 w-10 text-gray-400" />
                  <span className="ml-4 text-sm font-medium text-gray-900">{user.name}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}