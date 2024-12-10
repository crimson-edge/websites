from PIL import Image
import os

def convert_to_webp(input_path, output_path):
    try:
        # Open the image
        image = Image.open(input_path)
        
        # Convert to RGB if it's not already
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Save as WebP
        image.save(output_path, 'WEBP')
        print(f"Converted {input_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {input_path}: {e}")

# Blog image paths
blog_images = [
    ('/Users/Walterrines/websites/moneymasteryresources/public/images/blog/investing-featured.jpg', 
     '/Users/Walterrines/websites/moneymasteryresources/public/images/blog/investing-featured.webp'),
    ('/Users/Walterrines/websites/moneymasteryresources/public/images/blog/credit-scores-featured.jpg', 
     '/Users/Walterrines/websites/moneymasteryresources/public/images/blog/credit-scores-featured.webp')
]

# Convert images
for input_path, output_path in blog_images:
    convert_to_webp(input_path, output_path)
