#!/bin/bash

# Database migration script
set -e

# Run migrations
npx sequelize-cli db:migrate

echo "Database migration completed successfully!"