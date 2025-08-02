#!/bin/bash

# Deployment script
set -e

# Pull latest changes
sudo git pull origin main

# Install dependencies
sudo npm install

# Build the application
npm run build

# Run database migrations
npm run migrate

# Restart server using PM2
pm2 restart all

echo "Deployment completed successfully!"