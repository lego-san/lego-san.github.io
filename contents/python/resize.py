# ctrl+shift+b

from PIL import Image

#FILE_NAMES = ["親子01.jpg", "トイストーリー01.jpg", "先生01.jpg", "先生02.jpg", "先生03.jpg", "泥棒と警察01.jpg"]
resize = 5
FILE_NAMES = ["先生01.jpg"]

for FILE_NAME in FILE_NAMES:
    img = Image.open('./contents/python/work/' + FILE_NAME)
#    new_img = img.resize((int(img.width/10),int(img.height/10)))
    new_img = img.resize((int(img.width/resize),int(img.height/resize)))
    new_img.save('./images/' + FILE_NAME)
