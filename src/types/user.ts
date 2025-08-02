import { Notification } from './common';

/**
 * Represents a User in the system.
 */
export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  profileInfo: ProfileInfo;
}

/**
 * Detailed information about the user's profile.
 */
export interface ProfileInfo {
  bio?: string;
  avatarUrl?: string;
  submittedThreads: string[];
  receivedFeedback: string[];
}

/**
 * Represents a User notification.
 */
export interface UserNotification extends Notification {
  userId: string;
}