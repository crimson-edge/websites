#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p ../public/images

# Download hero image - professional medical consultation setting
curl -o ../public/images/trt-hero.jpg "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1200&h=800&fit=crop"

# Download cost guide image
curl -o ../public/images/trt-cost.jpg "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop"

# Download natural optimization image
curl -o ../public/images/natural-t.jpg "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop"
