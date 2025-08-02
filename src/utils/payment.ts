import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});

export const createPaymentIntent = async (amount, currency = 'usd') => {
  return await stripe.paymentIntents.create({
    amount,
    currency
  });
};

export const retrievePaymentIntent = async (id) => {
  return await stripe.paymentIntents.retrieve(id);
};