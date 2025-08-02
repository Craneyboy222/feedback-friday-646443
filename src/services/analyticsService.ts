import { FeedbackThreads, FeedbackResponses } from '../models';

// Analytics service with data tracking
export class AnalyticsService {
  static async getFeedbackAnalytics() {
    try {
      const totalThreads = await FeedbackThreads.count();
      const totalResponses = await FeedbackResponses.count();
      return { totalThreads, totalResponses };
    } catch (error) {
      console.error('Error generating feedback analytics', error);
      throw new Error('Error fetching analytics data');
    }
  }

  static async getUserEngagement(userId: number) {
    try {
      const userThreads = await FeedbackThreads.count({ where: { user_id: userId } });
      const userResponses = await FeedbackResponses.count({ where: { user_id: userId } });
      return { userThreads, userResponses };
    } catch (error) {
      console.error('Error fetching user engagement data', error);
      throw new Error('Error fetching user engagement data');
    }
  }
}