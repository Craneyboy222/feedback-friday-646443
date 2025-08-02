import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

export const setCache = (key: string, value: any) => {
  try {
    cache.set(key, value);
  } catch (error) {
    console.error('Error setting cache:', error);
    throw new Error('Cache set operation failed');
  }
};

export const getCache = (key: string) => {
  try {
    return cache.get(key);
  } catch (error) {
    console.error('Error getting cache:', error);
    throw new Error('Cache get operation failed');
  }
};

export const invalidateCache = (key: string) => {
  try {
    cache.del(key);
  } catch (error) {
    console.error('Error invalidating cache:', error);
    throw new Error('Cache invalidate operation failed');
  }
};