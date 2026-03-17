from PIL import Image

def crop_favicon():
    img_path = 'public/images/company_logo.png'
    try:
        img = Image.open(img_path)
        
        # Original size is 1280x853
        # The logo and text are roughly in the center
        # Let's crop closer to the icecube and the text "CCTT"
        # Since it needs to be square for a favicon, we will make a square crop
        # that encompasses the ice cube and the text below it.
        
        # Coordinates (left, upper, right, lower)
        # We need a square. The logo and CCTT text are roughly:
        # X: 300 to 980 (width ~ 680)
        # Y: 100 to 780 (height ~ 680)
        
        width, height = img.size
        
        # Let's do a central square crop that's 750x750
        crop_size = 750
        left = (width - crop_size) // 2
        top = (height - crop_size) // 2 - 20 # shift slightly up to catch ice cube
        right = left + crop_size
        bottom = top + crop_size
        
        cropped_img = img.crop((left, top, right, bottom))
        
        # Save it
        cropped_img.save('public/cctt_favicon.png')
        print("Successfully cropped and saved favicon.")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    crop_favicon()
