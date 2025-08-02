# API Reference

This document provides a detailed reference for the API endpoints available in the enterprise application.

## Authentication

### POST /api/register
- Registers a new user.
- **Request Body**: `{ "username": "string", "email": "string", "password": "string" }`
- **Responses**:
  - `201`: User registered successfully.
  - `400`: Invalid input.

### POST /api/login
- Authenticates a user.
- **Request Body**: `{ "email": "string", "password": "string" }`
- **Responses**:
  - `200`: User authenticated successfully.
  - `401`: Authentication failed.

## Feedback

### GET /api/feedback-threads
- Retrieves all feedback threads.
- **Responses**:
  - `200`: List of feedback threads.

### POST /api/feedback-threads
- Creates a new feedback thread.
- **Request Body**: `{ "company_name": "string", "url": "string", "purpose": "string", "technologies": "string", "feedback_requested": "string" }`
- **Responses**:
  - `201`: Feedback thread created successfully.
  - `400`: Invalid input.

### GET /api/feedback-threads/:id
- Retrieves a specific feedback thread.
- **Responses**:
  - `200`: Feedback thread details.
  - `404`: Thread not found.

## Responses

### POST /api/feedback-responses
- Submits a feedback response.
- **Request Body**: `{ "thread_id": "string", "response_text": "string" }`
- **Responses**:
  - `201`: Feedback response submitted successfully.
  - `400`: Invalid input.

## Surveys

### GET /api/surveys/:thread_id
- Retrieves surveys for a thread.
- **Responses**:
  - `200`: List of surveys for the thread.
  - `404`: Thread not found.

## Promo Codes

### POST /api/promo-codes
- Submits a promo code.
- **Request Body**: `{ "thread_id": "string", "code": "string" }`
- **Responses**:
  - `201`: Promo code submitted successfully.
  - `400`: Invalid input.

## Notifications

### GET /api/notifications
- Retrieves user notifications.
- **Responses**:
  - `200`: List of notifications.

### PUT /api/notifications/:id
- Marks a notification as read.
- **Responses**:
  - `200`: Notification marked as read.
  - `404`: Notification not found.

## Error Handling
- All API endpoints return standard HTTP status codes for success and error conditions.
- Detailed error messages are provided in the response body for debugging purposes.

## Logging
- API requests and responses are logged for analysis and debugging.
- Errors are logged with appropriate severity levels to facilitate monitoring and issue resolution.

## Security
- All API requests require authentication via JWT tokens.
- Ensure that sensitive data is transmitted over HTTPS to prevent data interception.

For further information, please refer to the OpenAPI documentation or contact our support team.