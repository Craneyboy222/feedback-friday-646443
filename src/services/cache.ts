import Redis from 'ioredis';

const redis = new Redis();

export const cacheData = async (key: string, value: any, duration: number) => {
  await redis.set(key, JSON.stringify(value), 'EX', duration);
};

export const getCachedData = async (key: string) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

export default redis;