import { User } from './user';
import { FeedbackThread, FeedbackResponse, Survey, PromoCode, Notification } from './common';

/**
 * Database schema for Users table.
 */
export interface UsersTable {
  id: string;
  username: string;
  email: string;
  password_hash: string;
  profile_info: ProfileInfo;
}

/**
 * Database schema for FeedbackThreads table.
 */
export interface FeedbackThreadsTable {
  id: string;
  user_id: string;
  company_name: string;
  url: string;
  purpose: string;
  technologies: string;
  feedback_requested: string;
  seeking_beta_testers: boolean;
  additional_comments: string;
  created_at: string;
}

/**
 * Database schema for FeedbackResponses table.
 */
export interface FeedbackResponsesTable {
  id: string;
  thread_id: string;
  user_id: string;
  response_text: string;
  created_at: string;
}

/**
 * Database schema for Surveys table.
 */
export interface SurveysTable {
  id: string;
  thread_id: string;
  survey_link: string;
  created_at: string;
}

/**
 * Database schema for PromoCodes table.
 */
export interface PromoCodesTable {
  id: string;
  thread_id: string;
  code: string;
  created_at: string;
}

/**
 * Database schema for Notifications table.
 */
export interface NotificationsTable {
  id: string;
  user_id: string;
  message: string;
  read_status: boolean;
  created_at: string;
}