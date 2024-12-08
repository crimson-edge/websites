#!/bin/bash

# Lighthouse performance testing script
echo "Running Lighthouse Performance Tests..."

# Ensure Lighthouse is installed
npm install -g lighthouse

# Test production build
lighthouse http://localhost:4321 \
  --view \
  --output-path=./lighthouse-report.html \
  --preset=desktop \
  --chrome-flags="--headless"

# Generate summary
echo "Performance testing complete. Check lighthouse-report.html for detailed results."
