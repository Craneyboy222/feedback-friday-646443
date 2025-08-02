#!/bin/bash

# Build script for production
set -e

# Clean previous builds
rm -rf build

# Build frontend
cd frontend
npm run build
cd ..

# Build backend
npm run build

# Copy frontend build to backend
cp -r frontend/build/* backend/build/

echo "Build completed successfully!"