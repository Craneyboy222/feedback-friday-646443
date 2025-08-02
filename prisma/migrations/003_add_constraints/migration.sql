ALTER TABLE FeedbackThreads
ADD CONSTRAINT check_url_format CHECK (url ~* '^(http|https)://');

ALTER TABLE Surveys
ADD CONSTRAINT check_survey_link_format CHECK (survey_link ~* '^(http|https)://');