# API Endpoints Documentation

## User Registration and Authentication

- **POST /api/register**
  - Description: Register a new user.
  - Request:
    - Body: `{ "username": "string", "email": "string", "password": "string" }`
  - Responses:
    - `201`: User registered successfully.
    - `400`: Invalid input.

- **POST /api/login**
  - Description: Authenticate a user.
  - Request:
    - Body: `{ "email": "string", "password": "string" }`
  - Responses:
    - `200`: User authenticated successfully.
    - `401`: Authentication failed.

## Feedback Threads

- **GET /api/feedback-threads**
  - Description: Retrieve all feedback threads.
  - Responses:
    - `200`: List of feedback threads.

- **POST /api/feedback-threads**
  - Description: Create a new feedback thread.
  - Request:
    - Body: `{ "company_name": "string", "url": "string", "purpose": "string", "technologies": "string", "feedback_requested": "string" }`
  - Responses:
    - `201`: Feedback thread created successfully.
    - `400`: Invalid input.

- **GET /api/feedback-threads/:id**
  - Description: Retrieve a specific feedback thread.
  - Responses:
    - `200`: Feedback thread details.
    - `404`: Thread not found.

## Feedback Responses

- **POST /api/feedback-responses**
  - Description: Submit a feedback response.
  - Request:
    - Body: `{ "thread_id": "string", "response_text": "string" }`
  - Responses:
    - `201`: Feedback response submitted successfully.
    - `400`: Invalid input.

## Surveys

- **GET /api/surveys/:thread_id**
  - Description: Retrieve surveys for a thread.
  - Responses:
    - `200`: List of surveys for the thread.
    - `404`: Thread not found.

## Promo Codes

- **POST /api/promo-codes**
  - Description: Submit a promo code.
  - Request:
    - Body: `{ "thread_id": "string", "code": "string" }`
  - Responses:
    - `201`: Promo code submitted successfully.
    - `400`: Invalid input.

## Notifications

- **GET /api/notifications**
  - Description: Retrieve user notifications.
  - Responses:
    - `200`: List of notifications.

- **PUT /api/notifications/:id**
  - Description: Mark notification as read.
  - Responses:
    - `200`: Notification marked as read.
    - `404`: Notification not found.