# -*- coding: utf-8 -*-
"""生成 PWA 图标：橙色底 + 白色圆角卡 + 白色「英」字。
输出 icon-180.png / icon-192.png / icon-512.png 到当前目录。"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.dirname(os.path.abspath(__file__))
BG = (255, 159, 28)       # #ff9f1c 与 theme-color 一致
CARD = (255, 255, 255)
TEXT = (255, 159, 28)
FONT = r"C:/Windows/Fonts/simhei.ttf"  # 黑体，笔画粗、图标上清晰


def make(size):
    img = Image.new("RGBA", (size, size), BG)
    d = ImageDraw.Draw(img)
    # 白色圆角卡，边距 = size*0.16
    m = int(size * 0.16)
    r = int(size * 0.22)
    d.rounded_rectangle([m, m, size - m, size - m], radius=r, fill=CARD)
    # 「英」字
    fs = int(size * 0.5)
    try:
        f = ImageFont.truetype(FONT, fs)
    except Exception:
        f = ImageFont.load_default()
    ch = "英"
    bb = d.textbbox((0, 0), ch, font=f)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    x = (size - tw) / 2 - bb[0]
    y = (size - th) / 2 - bb[1]
    d.text((x, y), ch, font=f, fill=TEXT)
    p = os.path.join(OUT, f"icon-{size}.png")
    img.save(p, "PNG")
    print("生成", p)


for s in (180, 192, 512):
    make(s)
