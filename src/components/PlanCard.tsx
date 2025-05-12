import React from 'react';
import { Check } from 'lucide-react';
import type { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

export function PlanCard({ plan, onSelect }: PlanCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
      <div className="mt-4 flex items-baseline text-gray-900">
        <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
        <span className="ml-1 text-xl font-semibold">/month</span>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-500">Data</h4>
            <p className="mt-1 text-lg font-medium text-gray-900">{plan.data}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-500">Calls</h4>
            <p className="mt-1 text-lg font-medium text-gray-900">{plan.calls}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-500">SMS</h4>
            <p className="mt-1 text-lg font-medium text-gray-900">{plan.sms}</p>
          </div>
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <p className="ml-3 text-sm text-gray-700">{feature}</p>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelect(plan)}
        className="mt-8 block w-full bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 rounded-lg transition-colors"
      >
        Choose {plan.name}
      </button>
    </div>
  );
}