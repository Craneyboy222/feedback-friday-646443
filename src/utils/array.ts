export const uniqueArray = <T>(array: T[]): T[] => {
  try {
    return Array.from(new Set(array));
  } catch (error) {
    console.error('Error getting unique array:', error);
    throw new Error('Array uniqueness operation failed');
  }
};

export const chunkArray = <T>(array: T[], size: number): T[][] => {
  try {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  } catch (error) {
    console.error('Error chunking array:', error);
    throw new Error('Array chunking failed');
  }
};