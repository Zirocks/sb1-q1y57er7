import React, { useState } from 'react';
import { plans } from '../data/plans';
import { PlanCard } from '../components/PlanCard';
import { PaymentForm } from '../components/PaymentForm';
import { Phone } from 'lucide-react';
import type { Plan } from '../types';

export function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Get connected with our reliable network and flexible plans
          </p>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSelect={(plan) => setSelectedPlan(plan)}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose TelcoPlus?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6">
                <div className="bg-indigo-100 rounded-lg p-4 inline-block">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  5G Network Coverage
                </h3>
                <p className="mt-2 text-gray-600">
                  Experience lightning-fast speeds with our nationwide 5G network
                </p>
              </div>
              <div className="p-6">
                <div className="bg-indigo-100 rounded-lg p-4 inline-block">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No Hidden Fees
                </h3>
                <p className="mt-2 text-gray-600">
                  Transparent pricing with no surprise charges
                </p>
              </div>
              <div className="p-6">
                <div className="bg-indigo-100 rounded-lg p-4 inline-block">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  24/7 Support
                </h3>
                <p className="mt-2 text-gray-600">
                  Our dedicated team is always here to help
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPlan && (
        <PaymentForm
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </>
  );
}