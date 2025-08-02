import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seed/users';
import { seedFeedbackThreads } from './seed/feedbackThreads';
import { seedFeedbackResponses } from './seed/feedbackResponses';

const prisma = new PrismaClient();

async function main() {
  await seedUsers(prisma);
  await seedFeedbackThreads(prisma);
  await seedFeedbackResponses(prisma);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });