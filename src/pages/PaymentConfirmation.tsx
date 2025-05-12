import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

export function PaymentConfirmation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'success' | 'processing' | 'error'>('processing');

  useEffect(() => {
    const paymentIntent = searchParams.get('payment_intent');
    const paymentIntentClientSecret = searchParams.get('payment_intent_client_secret');

    if (paymentIntent && paymentIntentClientSecret) {
      fetch(`http://localhost:3000/api/payment-status/${paymentIntent}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status === 'succeeded' ? 'success' : 'error');
        })
        .catch(() => setStatus('error'));
    } else {
      setStatus('error');
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          {status === 'processing' ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Processing your payment...
              </h2>
            </div>
          ) : status === 'success' ? (
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Payment Successful!
              </h2>
              <p className="mt-2 text-gray-600">
                Thank you for your purchase. You will receive a confirmation email shortly.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <XCircle className="h-12 w-12 text-red-500 mx-auto" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Payment Failed
              </h2>
              <p className="mt-2 text-gray-600">
                There was an error processing your payment. Please try again.
              </p>
            </div>
          )}
          
          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}