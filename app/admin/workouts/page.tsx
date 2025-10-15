'use client'

import { useState } from 'react'
import { Workout } from '@/lib/type'; // FIX: Import the shared Workout type

interface WorkoutFormProps {
  workout?: Workout | null;
  onSave: (workout: Workout) => void;
  onCancel: () => void;
}

export default function WorkoutForm({ workout, onSave, onCancel }: WorkoutFormProps) {
  const [user, setUser] = useState(workout?.user || '');
  const [type, setType] = useState(workout?.type || '');
  const [duration, setDuration] = useState(workout?.duration || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: workout?.id, user, type, duration });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">User Name</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Workout Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md">Save Workout</button>
      </div>
    </form>
  )
}