# ctrl+shift+b

from PIL import Image

FILE_NAMES = ["先生01.jpg", "先生02.jpg", "先生03.jpg"]
FILE_NAMES = ["アリエル01.jpg"]
FILE_NAMES = ["オリジナル01.jpg"]
FILE_NAMES = ["ドラゴンボート01.jpg", "高所作業車01.jpg", "泥棒と警察01.jpg"]
FILE_NAMES = ["プレゼント01.jpg","南国01.jpg",]
FILE_NAMES = ["アイス01.jpg","アイス02.jpg","アイス03.jpg"]
FILE_NAMES = ["ドラゴンボート02.jpg"]
FILE_NAMES = ["PAB01.jpg"]
FILE_NAMES = ["ミニフィグ01.jpg", "ミニフィグ02.jpg"]
FILE_NAMES = ["ミニフィグ11.jpg", "ミニフィグ12.jpg", "ミニフィグ13.jpg", "ミニフィグ14.jpg", "ミニフィグ15.jpg", "ミニフィグ16.jpg", "ミニフィグ17.jpg", "ミニフィグ18.jpg", "ミニフィグ19.jpg", "ミニフィグ20.jpg"]
FILE_NAMES = ["ミニフィグ21.jpg", "ミニフィグ22.jpg", "ミニフィグ23.jpg", "ミニフィグ24.jpg", "ミニフィグ25.jpg", "ミニフィグ26.jpg", "ミニフィグ27.jpg", "ミニフィグ28.jpg", "ミニフィグ29.jpg", "ミニフィグ30.jpg"]
FILE_NAMES = ["ミニフィグ31.jpg", "ミニフィグ32.jpg", "ミニフィグ33.jpg", "ミニフィグ34.jpg", "ミニフィグ35.jpg", "ミニフィグ36.jpg", "ミニフィグ37.jpg", "ミニフィグ38.jpg", "ミニフィグ39.jpg", "ミニフィグ40.jpg"]
FILE_NAMES = ["ミニフィグ41.jpg", "ミニフィグ42.jpg", "ミニフィグ43.jpg", "ミニフィグ44.jpg"]
FILE_NAMES = ["ミニフィグ51.jpg", "ミニフィグ52.jpg", "ミニフィグ53.jpg", "ミニフィグ54.jpg", "ミニフィグ55.jpg", "ミニフィグ56.jpg"]
FILE_NAMES = ["ミニフィグ61.jpg", "ミニフィグ62.jpg", "ミニフィグ63.jpg", "ミニフィグ64.jpg", "ミニフィグ65.jpg", "ミニフィグ66.jpg"]
FILE_NAMES = ["ミニオン01.jpg", "ミニオン02.jpg", "ミニオン03.jpg", "ミニオン04.jpg"]
FILE_NAMES = ["ミニオン11.jpg", "ミニオン12.jpg", "ミニオン13.jpg", "ミニオン14.jpg", "ミニオン15.jpg", "ミニオン16.jpg", "ミニオン17.jpg", "ミニオン18.jpg", "ミニオン19.jpg"]
FILE_NAMES = ["プリンセス01.jpg", "プリンセス02.jpg", "プリンセス03.jpg", "プリンセス04.jpg", "プリンセス05.jpg", "プリンセス06.jpg", "プリンセス07.jpg", "プリンセス08.jpg", "プリンセス09.jpg", "プリンセス10.jpg"]
FILE_NAMES = ["プリンセス11.jpg", "プリンセス12.jpg", "プリンセス13.jpg", "プリンセス14.jpg", "プリンセス15.jpg", "プリンセス16.jpg"]
FILE_NAMES = ["プリンセス21.jpg", "プリンセス22.jpg", "プリンセス23.jpg", "プリンセス24.jpg", "プリンセス25.jpg"]
FILE_NAMES = ["トイストーリー01.jpg", "トイストーリー02.jpg", "トイストーリー03.jpg", "トイストーリー04.jpg", "トイストーリー05.jpg", "トイストーリー06.jpg", "トイストーリー07.jpg", "トイストーリー08.jpg"]
FILE_NAMES = ["ハリーポッター01.jpg", "ハリーポッター02.jpg", "ハリーポッター03.jpg", "ハリーポッター04.jpg", "ハリーポッター05.jpg", "ハリーポッター06.jpg", "ハリーポッター07.jpg", "ハリーポッター08.jpg"]
FILE_NAMES = ["レゴフレンズ01.jpg", "レゴフレンズ02.jpg", "レゴフレンズ03.jpg", "レゴフレンズ04.jpg", "レゴフレンズ05.jpg", "レゴフレンズ06.jpg"]
FILE_NAMES = ["ディズニーキャラクター01.jpg", "ディズニーキャラクター02.jpg", "ディズニーキャラクター03.jpg", "ディズニーキャラクター04.jpg", "ディズニーキャラクター05.jpg", "ディズニーキャラクター06.jpg", "ディズニーキャラクター07.jpg"]
FILE_NAMES = ["キャプテンマーベル01.jpg", "キャプテンマーベル02.jpg"]
FILE_NAMES = ["キャプテンマーベル01.jpg", "キャプテンマーベル02.jpg"]
FILE_NAMES = ["スパイダーマン01.jpg"]
FILE_NAMES = ["マインクラフト01.jpg", "マインクラフト02.jpg", "マインクラフト03.jpg"]


resize_rate = 5
resize_width = 400

for FILE_NAME in FILE_NAMES:
    img = Image.open('./contents/python/work/' + FILE_NAME)
#    new_img = img.resize((int(img.width/10),int(img.height/10)))
#    new_img = img.resize((int(img.width/resize_rate),int(img.height/resize_rate)))
    new_img = img.resize((int(resize_width), int(img.height / img.width * resize_width)))
    new_img.save('./contents/images/jpg/' + FILE_NAME)
