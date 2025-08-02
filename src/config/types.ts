export type User = {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  profileInfo: string;
};

export type FeedbackThread = {
  id: number;
  userId: number;
  companyName: string;
  url: string;
  purpose: string;
  technologies: string;
  feedbackRequested: string;
  seekingBetaTesters: boolean;
  additionalComments: string;
  createdAt: Date;
};

export type FeedbackResponse = {
  id: number;
  threadId: number;
  userId: number;
  responseText: string;
  createdAt: Date;
};