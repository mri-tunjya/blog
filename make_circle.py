from PIL import Image, ImageOps, ImageDraw

def make_circle(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Square crop
    width, height = img.size
    new_size = min(width, height)
    left = (width - new_size)/2
    top = (height - new_size)/2
    right = (width + new_size)/2
    bottom = (height + new_size)/2
    img = img.crop((left, top, right, bottom))
    
    # Create mask
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask) 
    draw.ellipse((0, 0) + img.size, fill=255)
    
    # Apply mask
    output = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
    output.putalpha(mask)
    
    output.save(output_path)
    print(f"Saved circular image to {output_path}")

make_circle('/home/mritunjya/self/blog/jekyll-klise/assets/img/avatar.jpg', '/home/mritunjya/self/blog/jekyll-klise/assets/img/avatar-circle.png')
