/* Phone utilities */

import validator from 'validator';

export const formatPhoneNumber = (phoneNumber: string): string => {
  // Example implementation for US phone numbers
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
};

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  return validator.isMobilePhone(phoneNumber);
};