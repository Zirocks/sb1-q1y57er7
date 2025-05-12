import { loadStripe } from '@stripe/stripe-js';

// Remplacez par votre clé publique Stripe
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);