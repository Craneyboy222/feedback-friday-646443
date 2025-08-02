import { format, parseISO } from 'date-fns';

export const formatDate = (date: string, dateFormat: string) => {
  try {
    return format(parseISO(date), dateFormat);
  } catch (error) {
    console.error('Error formatting date:', error);
    throw new Error('Date formatting failed');
  }
};

export const getCurrentDate = () => {
  try {
    return new Date().toISOString();
  } catch (error) {
    console.error('Error getting current date:', error);
    throw new Error('Current date retrieval failed');
  }
};