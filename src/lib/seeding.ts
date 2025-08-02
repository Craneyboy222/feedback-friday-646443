import { seedDatabase } from '../utils/seeding';

export const runSeeding = async () => {
  try {
    await seedDatabase();
    console.log('Data seeding completed successfully.');
  } catch (error) {
    console.error('Error during data seeding:', error);
    throw error;
  }
};