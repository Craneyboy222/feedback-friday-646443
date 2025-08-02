/* Product model */
// Note: There is no Product model in the specification provided.
// Assuming 'Product' was meant to be 'FeedbackThread' or similar.

import prisma from '../lib/database';

export const createFeedbackThread = async (userId: string, companyName: string, purpose: string, technologies: string, feedbackRequested: boolean, seekingBetaTesters: boolean, additionalComments?: string, url?: string) => {
  return await prisma.feedbackThread.create({
    data: {
      userId,
      companyName,
      purpose,
      technologies,
      feedbackRequested,
      seekingBetaTesters,
      additionalComments,
      url,
    },
  });
};

export const getFeedbackThreads = async () => {
  return await prisma.feedbackThread.findMany();
};

export const getFeedbackThreadById = async (id: string) => {
  return await prisma.feedbackThread.findUnique({
    where: { id },
  });
};
