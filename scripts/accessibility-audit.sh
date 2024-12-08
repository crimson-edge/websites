#!/bin/bash

# Accessibility Audit Script

# Install dependencies if not already installed
npm install -g pa11y-ci axe-core

# Run comprehensive accessibility tests
echo "Running Accessibility Audit..."

# PA11y CI test
pa11y-ci \
  --config .pa11yci \
  http://localhost:4321

# Axe accessibility check
npx axe http://localhost:4321 \
  --exit \
  --stdout \
  --rules 'color-contrast,document-title,html-has-lang,landmark-one-main,page-has-heading-one'

# Generate detailed report
echo "Accessibility audit complete. Review the output for potential improvements."
