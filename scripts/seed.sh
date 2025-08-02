#!/bin/bash

# Database seeding script
set -e

# Seed database
npx sequelize-cli db:seed:all

echo "Database seeding completed successfully!"