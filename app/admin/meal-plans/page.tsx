'use client'

import { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
// FIX 1: Path corrected from '/ui/modal' to '/admin/Modal'
import Modal from '@/components/ui/Modal';
// FIX 2: Path corrected from '/ui/MealPlanForm' to '/admin/MealPlanForm'
import MealPlanForm from '@/components/ui/MealPlanForm';
// FIX 3: Path corrected from '/lib/type' to '/lib/types'
import { MealPlan } from '@/lib/type';

const initialPlans: MealPlan[] = [
  { id: 'mp01', user: 'Maria Garcia', name: 'High-Protein Lunch', calories: 650 },
  { id: 'mp02', user: 'Alex Johnson', name: 'Low-Carb Dinner', calories: 500 },
];

export default function MealPlansPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<MealPlan | null>(null);
  const [plans, setPlans] = useState<MealPlan[]>(initialPlans);

  const handleSavePlan = (plan: MealPlan) => {
    if (editingPlan) {
      setPlans(plans.map(p => p.id === plan.id ? plan : p));
    } else {
      const newPlan = { ...plan, id: `mp${Date.now()}` };
      setPlans([...plans, newPlan]);
    }
    setIsModalOpen(false);
    setEditingPlan(null);
  };
  
  const handleEdit = (plan: MealPlan) => {
    setEditingPlan(plan);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingPlan(null);
    setIsModalOpen(true);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Meal Plans</h1>
        <button onClick={handleAddNew} className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Meal Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-green-500 relative">
            <div className="absolute top-4 right-4 flex space-x-1">
              <button onClick={() => handleEdit(plan)} className="text-blue-600 p-1 bg-blue-50 rounded-full"><PencilIcon className="h-4 w-4"/></button>
              <button className="text-red-600 p-1 bg-red-50 rounded-full"><TrashIcon className="h-4 w-4"/></button>
            </div>
             <h2 className="text-lg font-bold text-gray-900">{plan.name}</h2>
             <p className="text-sm text-gray-500">by {plan.user}</p>
             <p className="text-2xl font-bold text-gray-800 mt-4">{plan.calories} kcal</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingPlan ? 'Edit Meal Plan' : 'Add New Meal Plan'}
      >
        <MealPlanForm
          plan={editingPlan}
          onSave={handleSavePlan}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}