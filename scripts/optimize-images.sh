#!/bin/bash

# Directory containing images
IMAGE_DIR="/Users/Walterrines/websites/moneymasteryresources/public/images/blog"

# Optimize and resize images
for img in "$IMAGE_DIR"/*.jpg; do
    # Resize and compress image
    sips -Z 1200 "$img"
done

# Generate WebP versions using built-in macOS tools
for img in "$IMAGE_DIR"/*.jpg; do
    converted_img="${img%.*}.webp"
    # Use built-in macOS image conversion
    osascript -e "tell application \"Image Events\"
        set theImage to open \"$img\"
        scale theImage to size 1200
        save theImage as JPEG in \"$converted_img\"
        close theImage
    end tell"
done

echo "Image optimization complete!"
