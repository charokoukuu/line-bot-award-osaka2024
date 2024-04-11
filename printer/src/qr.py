import socket
import escpos.printer
import escpos
import sys
import time
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont
import datetime
import qrcode

dt_now = datetime.datetime.now()

width = 418
height = 450
fontSize = float(50)
fontPath = "/home/kiosk/RunTicket/printer/src/font/clamp-1m-w4-regular.ttf"
# fontPath = "./font/clamp-1m-w4-regular.ttf"


def makeQR(s):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=7,
        border=4,
    )
    qr.add_data(s)
    qr.make(fit=True)
    return qr.make_image()


def makeBlackImage():
    image = Image.new('1', (width, height), 0)
    draw = ImageDraw.Draw(image)
    return image


data = sys.argv
ip = data[1]
image = Image.new('1', (width, height), 255)
draw = ImageDraw.Draw(image)
fontSize = float(50)

font = ImageFont.truetype(
    fontPath, 35, encoding='unic')
draw.text((118, 30), "おはよう☆", font=font, fill=0)
draw.text((50, 330), "https://"+ip, font=font, fill=0)
qr = makeQR("https://"+ip)
image.paste(qr, (90, 70))
# image.paste(makeBlackImage(), (0, 0))
image.save('pillow_imagedraw.jpg', quality=95)
p = escpos.printer.Serial("/dev/ttyACM0")
p.image(image)
p.cut()
time.sleep(1)
