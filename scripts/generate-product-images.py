from PIL import Image, ImageDraw, ImageFont
import numpy as np
import colorsys

def generate_gradient_background(width, height):
    # Create a gradient background
    base = Image.new('RGB', (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(base)
    
    # Create a smooth color gradient
    for y in range(height):
        # Interpolate between two colors
        r1, g1, b1 = (41, 128, 185)  # Deep blue
        r2, g2, b2 = (142, 68, 173)  # Deep purple
        
        # Linear interpolation
        r = int(r1 + (r2 - r1) * y / height)
        g = int(g1 + (g2 - g1) * y / height)
        b = int(b1 + (b2 - b1) * y / height)
        
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return base

def add_text_and_icons(image, title, subtitle):
    draw = ImageDraw.Draw(image)
    
    # Load a professional font
    try:
        title_font = ImageFont.truetype("/Library/Fonts/Arial Bold.ttf", 60)
        subtitle_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 30)
    except IOError:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Add title
    draw.text((50, 50), title, font=title_font, fill=(255, 255, 255))
    
    # Add subtitle
    draw.text((50, 150), subtitle, font=subtitle_font, fill=(230, 230, 230))
    
    return image

def generate_credit_repair_magic_image():
    width, height = 600, 400
    image = generate_gradient_background(width, height)
    
    # Add credit-related icons or symbols
    draw = ImageDraw.Draw(image)
    
    # Draw stylized credit score gauge
    center_x, center_y = width // 2, height // 2
    
    # Outer circle (background)
    draw.ellipse([center_x-150, center_y-150, center_x+150, center_y+150], 
                 outline=(255,255,255,100), width=20)
    
    # Inner arc representing credit score improvement
    draw.arc([center_x-150, center_y-150, center_x+150, center_y+150], 
             start=135, end=45, fill=(0,255,0), width=30)
    
    image = add_text_and_icons(image, "Credit Repair", "Transform Your Financial Future")
    
    return image

def generate_wealth_switch_image():
    width, height = 600, 400
    image = generate_gradient_background(width, height)
    
    draw = ImageDraw.Draw(image)
    
    # Draw stylized wealth growth symbol
    points = [
        (width//2, height//2 - 100),  # Top point
        (width//2 - 100, height//2 + 100),  # Bottom left
        (width//2 + 100, height//2 + 100)   # Bottom right
    ]
    
    # Draw an upward arrow representing wealth growth
    draw.polygon(points, fill=(0,255,0,100))
    
    image = add_text_and_icons(image, "Wealth Switch", "Activate Your Financial Potential")
    
    return image

# Generate and save images
credit_repair_image = generate_credit_repair_magic_image()
credit_repair_image.save("/Users/Walterrines/websites/moneymasteryresources/public/images/credit-repair-magic.jpg")

wealth_switch_image = generate_wealth_switch_image()
wealth_switch_image.save("/Users/Walterrines/websites/moneymasteryresources/public/images/wealth-switch.jpg")

print("Product images generated successfully!")
