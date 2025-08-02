CREATE INDEX idx_users_username ON Users(username);
CREATE INDEX idx_users_email ON Users(email);
CREATE INDEX idx_feedback_threads_user_id ON FeedbackThreads(user_id);
CREATE INDEX idx_feedback_responses_thread_id ON FeedbackResponses(thread_id);
CREATE INDEX idx_feedback_responses_user_id ON FeedbackResponses(user_id);
CREATE INDEX idx_surveys_thread_id ON Surveys(thread_id);
CREATE INDEX idx_promo_codes_thread_id ON PromoCodes(thread_id);
CREATE INDEX idx_notifications_user_id ON Notifications(user_id);