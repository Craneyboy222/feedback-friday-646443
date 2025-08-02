# API Reference

## Endpoints

### POST /api/register

Register a new user.

#### Request Body
- `username` (string): The user's username.
- `email` (string): The user's email.
- `password` (string): The user's password.

#### Responses
- `201 Created`: User registered successfully.

### POST /api/login

Authenticate a user.

#### Request Body
- `email` (string): The user's email.
- `password` (string): The user's password.

#### Responses
- `200 OK`: User authenticated successfully.

### GET /api/feedback-threads

Retrieve all feedback threads.

#### Responses
- `200 OK`: A list of feedback threads.

### POST /api/feedback-threads

Create a new feedback thread.

#### Request Body
- `company_name` (string): The company name.
- `url` (string): The company's URL.
- `purpose` (string): The purpose of the feedback.
- `technologies` (string): The technologies used.
- `feedback_requested` (boolean): Whether feedback is requested.
- `seeking_beta_testers` (boolean): Whether seeking beta testers.
- `additional_comments` (string): Additional comments.

#### Responses
- `201 Created`: Feedback thread created successfully.

### GET /api/feedback-threads/:id

Retrieve specific feedback thread.

#### Parameters
- `id` (integer): The ID of the feedback thread.

#### Responses
- `200 OK`: A feedback thread.

### POST /api/feedback-responses

Submit feedback response.

#### Request Body
- `thread_id` (integer): The ID of the feedback thread.
- `response_text` (string): The feedback response text.

#### Responses
- `201 Created`: Feedback response submitted successfully.

### GET /api/surveys/:thread_id

Retrieve surveys for a thread.

#### Parameters
- `thread_id` (integer): The ID of the feedback thread.

#### Responses
- `200 OK`: A list of surveys.

### POST /api/promo-codes

Submit promo code.

#### Request Body
- `thread_id` (integer): The ID of the feedback thread.
- `code` (string): The promo code.

#### Responses
- `201 Created`: Promo code submitted successfully.

### GET /api/notifications

Retrieve user notifications.

#### Responses
- `200 OK`: A list of notifications.

### PUT /api/notifications/:id

Mark notification as read.

#### Parameters
- `id` (integer): The ID of the notification.

#### Responses
- `200 OK`: Notification marked as read.