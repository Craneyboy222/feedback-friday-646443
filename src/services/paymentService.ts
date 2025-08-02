import Stripe from 'stripe';

// Payment service with Stripe integration
const stripe = new Stripe('your-stripe-secret-key', { apiVersion: '2020-08-27' });

export class PaymentService {
  static async createPaymentIntent(amount: number, currency: string) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });
      return paymentIntent;
    } catch (error) {
      console.error('Error creating payment intent', error);
      throw new Error('Payment intent creation failed');
    }
  }
}