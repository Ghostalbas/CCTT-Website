from PIL import Image

def remove_border():
    img_path = 'public/cctt_favicon.png'
    try:
        # Open the generated image
        img = Image.open(img_path)
        
        # We need to crop to remove the white border
        # The generated image is likely 1024x1024 or similar, let's just shave 20 pixels off every side
        width, height = img.size
        
        # Crop 20 pixels from all sides (left, top, right, bottom)
        left = 20
        top = 20
        right = width - 20
        bottom = height - 20
        
        cropped_img = img.crop((left, top, right, bottom))
        
        # Save back to the original place
        cropped_img.save(img_path)
        print("Successfully removed border and saved favicon.")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    remove_border()
