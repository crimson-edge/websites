from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
import colorsys

def create_gradient_background(width, height, color1, color2):
    base = Image.new('RGB', (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(base)
    
    for y in range(height):
        # Linear interpolation between two colors
        r1, g1, b1 = color1
        r2, g2, b2 = color2
        
        r = int(r1 + (r2 - r1) * y / height)
        g = int(g1 + (g2 - g1) * y / height)
        b = int(b1 + (b2 - b1) * y / height)
        
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return base

def add_noise(image, intensity=0.1):
    noise = Image.new('L', image.size)
    draw_noise = ImageDraw.Draw(noise)
    
    width, height = image.size
    for _ in range(width * height // 100):
        x = np.random.randint(0, width)
        y = np.random.randint(0, height)
        draw_noise.point((x, y), fill=np.random.randint(0, 50))
    
    noise = noise.filter(ImageFilter.GaussianBlur(1))
    return Image.blend(image, noise.convert('RGB'), intensity)

def create_placeholder(width, height, title, subtitle, color1, color2):
    # Create gradient background
    base = create_gradient_background(width, height, color1, color2)
    base = add_noise(base)
    
    draw = ImageDraw.Draw(base)
    
    # Load fonts
    try:
        title_font = ImageFont.truetype("/Library/Fonts/Arial Bold.ttf", 80)
        subtitle_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 40)
    except IOError:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Compute text sizes
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    
    title_width = title_bbox[2] - title_bbox[0]
    title_height = title_bbox[3] - title_bbox[1]
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_height = subtitle_bbox[3] - subtitle_bbox[1]
    
    # Position text
    title_x = (width - title_width) // 2
    subtitle_x = (width - subtitle_width) // 2
    title_y = (height - title_height - subtitle_height - 50) // 2
    subtitle_y = title_y + title_height + 20
    
    # Draw shadow
    shadow_offset = 3
    shadow_color = (0, 0, 0, 100)
    
    draw.text((title_x+shadow_offset, title_y+shadow_offset), title, font=title_font, fill=shadow_color)
    draw.text((subtitle_x+shadow_offset, subtitle_y+shadow_offset), subtitle, font=subtitle_font, fill=shadow_color)
    
    # Draw main text
    draw.text((title_x, title_y), title, font=title_font, fill=(255, 255, 255))
    draw.text((subtitle_x, subtitle_y), subtitle, font=subtitle_font, fill=(230, 230, 230))
    
    return base

# Investment Strategies Image
investing_colors = ((41, 128, 185), (142, 68, 173))  # Blue to Purple
investing_image = create_placeholder(
    1200, 800, 
    "Investment", 
    "Strategies for Wealth", 
    *investing_colors
)
investing_image.save("/Users/Walterrines/websites/moneymasteryresources/public/images/blog/investing-featured.jpg")

# Credit Scores Image
credit_colors = ((52, 152, 219), (155, 89, 182))  # Lighter Blue to Lighter Purple
credit_image = create_placeholder(
    1200, 800, 
    "Credit", 
    "Scores Explained", 
    *credit_colors
)
credit_image.save("/Users/Walterrines/websites/moneymasteryresources/public/images/blog/credit-scores-featured.jpg")

print("Placeholder images created successfully!")
