#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# 当前目录
current_dir = os.path.dirname(os.path.abspath(__file__))

# 创建Logo (256x256) - 符合Figma样式
logo = Image.new('RGBA', (256, 256), color=(255, 255, 255, 255))
draw = ImageDraw.Draw(logo)

# 创建圆角矩形
# 由于PIL不直接支持圆角矩形，我们需要分步绘制
radius = 72  # 根据Figma样式 71.68px

# 绘制填充颜色
draw.rectangle([(radius, 0), (256-radius, 256)], fill=(41, 103, 219, 255))
draw.rectangle([(0, radius), (256, 256-radius)], fill=(41, 103, 219, 255))

# 绘制四个圆角
draw.pieslice([(0, 0), (radius*2, radius*2)], 180, 270, fill=(41, 103, 219, 255))
draw.pieslice([(256-radius*2, 0), (256, radius*2)], 270, 0, fill=(41, 103, 219, 255))
draw.pieslice([(0, 256-radius*2), (radius*2, 256)], 90, 180, fill=(41, 103, 219, 255))
draw.pieslice([(256-radius*2, 256-radius*2), (256, 256)], 0, 90, fill=(41, 103, 219, 255))

# 添加文字
try:
    # 尝试加载系统字体
    font = ImageFont.truetype("Arial.ttf", 40)
except:
    # 如果找不到，使用默认字体
    font = ImageFont.load_default()
draw.text((50, 108), "汇金Pro", fill=(255, 255, 255, 255), font=font)
logo.save(os.path.join(current_dir, 'logo-placeholder.png'))

# 创建首页主图 (600x400)
hero = Image.new('RGBA', (600, 400), color=(245, 248, 250, 255))
draw = ImageDraw.Draw(hero)
# 绘制边框
draw.rectangle([(0, 0), (599, 399)], outline=(200, 200, 200, 255))
# 绘制交叉线
draw.line([(0, 0), (600, 400)], fill=(200, 200, 200, 255), width=1)
draw.line([(0, 400), (600, 0)], fill=(200, 200, 200, 255), width=1)
# 添加文字
try:
    font = ImageFont.truetype("Arial.ttf", 28)
except:
    font = ImageFont.load_default()
draw.text((200, 180), "汇金Pro预览图", fill=(100, 100, 100, 255), font=font)
hero.save(os.path.join(current_dir, 'hero-image-placeholder.png'))

# 创建二维码 (250x250)
qrcode = Image.new('RGB', (250, 250), color=(255, 255, 255))
draw = ImageDraw.Draw(qrcode)
# 绘制边框
draw.rectangle([(0, 0), (249, 249)], outline=(0, 0, 0, 255))
# 绘制二维码模式
for i in range(8):
    for j in range(8):
        if (i + j) % 2 == 0:
            draw.rectangle([(i*30+10, j*30+10), (i*30+30, j*30+30)], fill=(0, 0, 0))
# 添加文字
try:
    font = ImageFont.truetype("Arial.ttf", 18)
except:
    font = ImageFont.load_default()
draw.text((60, 115), "掌柜系统二维码", fill=(200, 0, 0, 255), font=font)
qrcode.save(os.path.join(current_dir, 'qrcode-placeholder.png'))

print("占位图生成完成: logo, hero-image, qrcode") 