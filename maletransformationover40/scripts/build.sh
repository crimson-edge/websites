#!/bin/bash

echo "Cleaning previous build..."
rm -rf dist

echo "Checking content directory structure..."
ls -R src/content

echo "Installing dependencies..."
npm install

echo "Building site with debug info..."
ASTRO_LOG_LEVEL=debug npm run build

echo "Checking built content..."
ls -R dist/blog
