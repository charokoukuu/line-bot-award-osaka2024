import escpos.printer
import escpos
import sys
import time
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont
import datetime
import list
from enum import Enum
import cv2
import numpy as np



dt_now = datetime.datetime.now()
printer = escpos.printer.Serial("/dev/ttyACM0")

width = 418
height = 970
fontSize = float(50)
fontPath = "/home/kiosk/RunTicket/printer/src/font/clamp-1m-w4-regular.ttf"
data = sys.argv


class Mode(Enum):
    UP = 0
    DOWN = 1


def DrawText(mode, title, size):
    if mode == Mode.UP:
        draw.text((55, 990), title, font=ImageFont.truetype(
            fontPath, int(round(size)), encoding='unic'), fill=0)
    elif mode == Mode.DOWN:
        draw.text((55, 25), title, font=ImageFont.truetype(
            fontPath, int(round(size)), encoding='unic'), fill=0)

fontSize = float(50)
image = Image.new('1', (width, height), 255)
draw = ImageDraw.Draw(image)

img_path = f"./image/Hint.png"
try:
    img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)

    img = cv2.resize(img, (420, 990))
    threshold = 110
    _, img = cv2.threshold(img, threshold, 255, cv2.THRESH_BINARY)
    img_pil = Image.fromarray(img)
    image.paste(img_pil, (-10, 0))

    image.save('pillow_imagedraw.jpg', quality=95)
except FileNotFoundError:
    print(f"エラー：{img_path}に画像が見つかりませんでした。")

p = escpos.printer.Serial("/dev/ttyACM0")
p.image(image)
p.cut()
time.sleep(1)