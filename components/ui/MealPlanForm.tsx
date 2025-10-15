'use client'

import { useState } from 'react'

type MealPlan = {
  id?: string;
  user: string;
  name: string;
  calories: number;
}

interface MealPlanFormProps {
  plan?: MealPlan | null;
  onSave: (plan: MealPlan) => void;
  onCancel: () => void;
}

export default function MealPlanForm({ plan, onSave, onCancel }: MealPlanFormProps) {
  const [user, setUser] = useState(plan?.user || '');
  const [name, setName] = useState(plan?.name || '');
  const [calories, setCalories] = useState(plan?.calories || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: plan?.id, user, name, calories });
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
        <label className="block text-sm font-medium text-gray-700">Plan Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Total Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">Save Plan</button>
      </div>
    </form>
  )
}