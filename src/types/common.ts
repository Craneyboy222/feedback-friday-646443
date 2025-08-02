/**
 * Represents a Feedback Thread.
 */
export interface FeedbackThread {
  id: string;
  userId: string;
  companyName: string;
  url: string;
  purpose: string;
  technologies: string;
  feedbackRequested: string;
  seekingBetaTesters: boolean;
  additionalComments: string;
  createdAt: string;
}

/**
 * Represents a Feedback Response.
 */
export interface FeedbackResponse {
  id: string;
  threadId: string;
  userId: string;
  responseText: string;
  createdAt: string;
}

/**
 * Represents a Survey.
 */
export interface Survey {
  id: string;
  threadId: string;
  surveyLink: string;
  createdAt: string;
}

/**
 * Represents a Promo Code.
 */
export interface PromoCode {
  id: string;
  threadId: string;
  code: string;
  createdAt: string;
}

/**
 * Represents a Notification.
 */
export interface Notification {
  id: string;
  message: string;
  readStatus: boolean;
  createdAt: string;
}