CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_info JSONB,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE FeedbackThreads (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    company_name VARCHAR(255),
    url VARCHAR(255),
    purpose TEXT,
    technologies TEXT,
    feedback_requested TEXT,
    seeking_beta_testers BOOLEAN DEFAULT FALSE,
    additional_comments TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE FeedbackResponses (
    id SERIAL PRIMARY KEY,
    thread_id INT REFERENCES FeedbackThreads(id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(id) ON DELETE SET NULL,
    response_text TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Surveys (
    id SERIAL PRIMARY KEY,
    thread_id INT REFERENCES FeedbackThreads(id) ON DELETE CASCADE,
    survey_link VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PromoCodes (
    id SERIAL PRIMARY KEY,
    thread_id INT REFERENCES FeedbackThreads(id) ON DELETE CASCADE,
    code VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Notifications (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    message TEXT,
    read_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);