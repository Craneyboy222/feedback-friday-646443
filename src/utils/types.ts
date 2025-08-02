interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  profile_info: string;
}

interface FeedbackThread {
  id: number;
  user_id: number;
  company_name: string;
  url: string;
  purpose: string;
  technologies: string;
  feedback_requested: string;
  seeking_beta_testers: boolean;
  additional_comments: string;
  created_at: Date;
}

// Add more interfaces as needed

export { User, FeedbackThread };