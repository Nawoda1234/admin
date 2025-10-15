import { SparklesIcon } from '@heroicons/react/24/solid';

const mockActivities = [
  { id: 1, user: 'Alex Johnson', description: 'completed a 30-minute run.', time: '10 minutes ago' },
  { id: 2, user: 'Maria Garcia', description: 'logged a new meal.', time: '25 minutes ago' },
  { id: 3, user: 'Janith Wathsala', description: 'updated their weight.', time: '1 hour ago' },
];

export default function ActivityPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Live Activity Feed</h1>
      <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
        {mockActivities.map((activity) => (
          <div key={activity.id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
            <SparklesIcon className="h-6 w-6 text-purple-500 mr-4 mt-1"/>
            <div>
              <p className="text-gray-800"><span className="font-bold">{activity.user}</span> {activity.description}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}