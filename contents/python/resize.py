# ctrl+shift+b

from PIL import Image

FILE_NAMES = ["先生01.jpg", "先生02.jpg", "先生03.jpg"]
FILE_NAMES = ["アリエル01.jpg", "トイストーリー01.jpg"]
FILE_NAMES = ["オリジナル01.jpg"]
FILE_NAMES = ["ドラゴンボート01.jpg", "高所作業車01.jpg", "泥棒と警察01.jpg"]
FILE_NAMES = ["ミニフィグ01.jpg"]
FILE_NAMES = ["プレゼント01.jpg","南国01.jpg","ミニフィグ02.jpg"]
FILE_NAMES = ["アイス01.jpg","アイス02.jpg","アイス03.jpg"]
FILE_NAMES = ["ドラゴンボート02.jpg"]
FILE_NAMES = ["マインクラフト01.jpg"]

resize_rate = 5
resize_width = 400

for FILE_NAME in FILE_NAMES:
    img = Image.open('./contents/python/work/' + FILE_NAME)
#    new_img = img.resize((int(img.width/10),int(img.height/10)))
#    new_img = img.resize((int(img.width/resize_rate),int(img.height/resize_rate)))
    new_img = img.resize((int(resize_width), int(img.height / img.width * resize_width)))
    new_img.save('./contents/images/jpg/' + FILE_NAME)
