#!/bin/bash

# Create the blog-images directory if it doesn't exist
mkdir -p ../public/blog-images

# Download hero image - medical professional discussing TRT with patient
curl -o ../public/blog-images/trt-guide-hero.jpg "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&h=800&fit=crop"

# Download TRT methods image - showing different TRT administration methods
curl -o ../public/blog-images/trt-methods.jpg "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&h=800&fit=crop"

# Download benefits image - showing a fit, healthy man in his 40s
curl -o ../public/blog-images/trt-benefits.jpg "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop"
