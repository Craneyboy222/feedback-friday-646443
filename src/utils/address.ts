/* Address utilities */

import axios from 'axios';

export const validateAddress = async (address: string): Promise<boolean> => {
  try {
    const response = await axios.get('https://api.addressvalidation.io', { params: { address } });
    return response.data.isValid;
  } catch (error) {
    console.error('Address validation error:', error);
    return false;
  }
};

export const formatAddress = (address: Record<string, string>): string => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
};