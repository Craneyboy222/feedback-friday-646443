import { PrismaClient } from '@prisma/client';

export async function seedFeedbackResponses(prisma: PrismaClient) {
  await prisma.feedbackResponse.createMany({
    data: [
      {
        thread_id: 1,
        user_id: 2,
        response_text: 'Great app, but needs better navigation.',
      },
      {
        thread_id: 2,
        user_id: 1,
        response_text: 'The performance is quite impressive!',
      }
    ],
  });
}