import pandas as pd
from PIL import Image
import pytesseract


pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'


# Load an image
img = Image.open('balance-sheet.jpg')


custom_config=r'--oem 3 --psm 6'
# Extract text from image
text = pytesseract.image_to_string(img, config=custom_config)



print(text)
