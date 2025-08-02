export const capitalizeFirstLetter = (string: string) => {
  try {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } catch (error) {
    console.error('Error capitalizing string:', error);
    throw new Error('String capitalization failed');
  }
};

export const truncateString = (string: string, maxLength: number) => {
  try {
    return string.length > maxLength ? string.substring(0, maxLength) + '...' : string;
  } catch (error) {
    console.error('Error truncating string:', error);
    throw new Error('String truncation failed');
  }
};