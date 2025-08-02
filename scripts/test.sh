#!/bin/bash

# Test script to run all tests
set -e

# Run linting
npm run lint

# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

echo "All tests passed successfully!"