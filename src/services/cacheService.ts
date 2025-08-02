import Redis from 'ioredis';

// Cache service with Redis integration
const redis = new Redis();

export class CacheService {
  static async setCache(key: string, value: string, expiry: number) {
    try {
      await redis.set(key, value, 'EX', expiry);
    } catch (error) {
      console.error('Error setting cache', error);
      throw new Error('Cache set failed');
    }
  }

  static async getCache(key: string) {
    try {
      return await redis.get(key);
    } catch (error) {
      console.error('Error getting cache', error);
      throw new Error('Cache get failed');
    }
  }
}