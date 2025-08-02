#!/bin/bash

# Setup script to prepare the development environment
set -e

# Install necessary packages
npm install

# Set up environment variables
cp .env.example .env

# Initialize database
npm run migrate
npm run seed

# Start development server
npm run dev

echo "Setup completed successfully!"