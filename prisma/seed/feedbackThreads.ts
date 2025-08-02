import { PrismaClient } from '@prisma/client';

export async function seedFeedbackThreads(prisma: PrismaClient) {
  await prisma.feedbackThread.createMany({
    data: [
      {
        user_id: 1,
        company_name: 'Tech Corp',
        url: 'https://techcorp.com',
        purpose: 'Seeking feedback for new app',
        technologies: 'React, Node.js',
        feedback_requested: 'UI/UX suggestions',
        seeking_beta_testers: true,
        additional_comments: 'Looking for detailed feedback',
      },
      {
        user_id: 2,
        company_name: 'Innovate LLC',
        url: 'https://innovate.com',
        purpose: 'Testing new features',
        technologies: 'Python, Django',
        feedback_requested: 'Performance improvements',
        seeking_beta_testers: false,
        additional_comments: 'Any insights are welcome',
      }
    ],
  });
}