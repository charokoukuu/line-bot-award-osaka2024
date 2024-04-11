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

animalList = list.ANIMAL_LIST

dt_now = datetime.datetime.now()
printer = escpos.printer.Serial("/dev/ttyACM0")

width = 418
height = 1100
fontSize = float(50)
fontPath = "/home/kiosk/RunTicket/printer/src/font/clamp-1m-w4-regular.ttf"
data = sys.argv
menuTitle = data[1].split(",")
date = data[2]
timeStr = data[3]
orderId = data[4]
result = 0


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

DrawText(Mode.UP, "大阪工業大学", fontSize)
font = ImageFont.truetype(
    fontPath, 20, encoding='unic')
draw.text((210, 1050), date+" "+timeStr, font=font, fill=0)
draw.text((210, 1070), "ID: "+orderId, font=font, fill=0)

img_path = f"./image/imgcar.png"
try:
    img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)

    img = cv2.resize(img, (420, 990))
    # img = cv2.GaussianBlur(img, (39, 39), 0)
    threshold = 128
    _, img = cv2.threshold(img, threshold, 255, cv2.THRESH_BINARY)
    img_pil = Image.fromarray(img)
    image.paste(img_pil, (0, 0))

    image.save('pillow_imagedraw.jpg', quality=95)
except FileNotFoundError:
    print(f"エラー：{img_path}に画像が見つかりませんでした。")

p = escpos.printer.Serial("/dev/ttyACM0")
p.image(image)
p.cut()
time.sleep(1)