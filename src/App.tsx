import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { HomePage } from './pages/HomePage';
import { PaymentConfirmation } from './pages/PaymentConfirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <Phone className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">TelcoPlus</h1>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/confirmation" element={<PaymentConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;