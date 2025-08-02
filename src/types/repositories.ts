import { User, FeedbackThread, FeedbackResponse, Survey, PromoCode, Notification } from './database';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: number): Promise<User | null>;
}

export interface FeedbackThreadRepository {
  createThread(thread: FeedbackThread): Promise<FeedbackThread>;
  findThreadsByUserId(userId: number): Promise<FeedbackThread[]>;
  findThreadById(id: number): Promise<FeedbackThread | null>;
}

export interface FeedbackResponseRepository {
  createResponse(response: FeedbackResponse): Promise<FeedbackResponse>;
  findResponsesByThreadId(threadId: number): Promise<FeedbackResponse[]>;
}

export interface SurveyRepository {
  createSurvey(survey: Survey): Promise<Survey>;
  findSurveysByThreadId(threadId: number): Promise<Survey[]>;
}

export interface PromoCodeRepository {
  createPromoCode(promoCode: PromoCode): Promise<PromoCode>;
  findPromoCodesByThreadId(threadId: number): Promise<PromoCode[]>;
}

export interface NotificationRepository {
  createNotification(notification: Notification): Promise<Notification>;
  findNotificationsByUserId(userId: number): Promise<Notification[]>;
  markNotificationAsRead(notificationId: number): Promise<void>;
}