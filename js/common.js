function create_contents_list(id){
	var contents_list = document.getElementById(id);
	var matches = document.querySelectorAll('h2');
	//var ul = document.createElement('ul');
  var ol = document.createElement('ol');
	matches.forEach( function (value, i) {
		if(value.id === "ID_CONTENTS" || value.id === "ID_COMMENT"){
      ;
    }else{
        if ( value.id === '' ) {
  			value.id = 'ID_H2_0' + i;
  		}
      var li = document.createElement('li');
  		var a = document.createElement('a');
  		a.innerHTML = value.innerHTML;
  		a.href = '#' + value.id;
  		li.appendChild(a);
  		ol.appendChild(li);
    }
	});
	contents_list.appendChild(ol);
}

function create_footer(id, layer){
  if(layer == 2){
    var contents = "[<a href='../../index.html'>HOMEへ戻る</a>]";
  }else if(layer == 3){
    var contents = "[<a href='#ID_TITLE'>ページ上に戻る</a>] / [<a href='#ID_CONTENTS'>目次に戻る</a>] / [<a href='../../../index.html'>HOMEへ戻る</a>]";
  }
  element = document.getElementById(id);

  var p = document.createElement('P');
  p.innerHTML ="<hr><br><br>";
  element = element.appendChild(p);

  var p = document.createElement('P');
  p.innerHTML = contents;
  p.classList.toggle("guide_area_bottom");
  element = element.appendChild(p);
}

function create_meta(){
  sub_function_create_meta_set_ogs();
  sub_function_create_meta_set_options();
}

function sub_function_create_meta_set_ogs(){
  var title = document.createElement('META');
  title.setAttribute('property', 'og:title');
  title.content = "Legoで遊びながら初心者がプログラミングを学ぶ";
  document.getElementsByTagName('head')[0].appendChild(title);

  var type = document.createElement('META');
	type.setAttribute('property', 'og:type');
	type.content = "article";
	document.getElementsByTagName('head')[0].appendChild(type);

  var image = document.createElement('META');
	image.setAttribute('property', 'og:image');
	image.content = "https://lego-san.github.io/icon/ミニフィグ01.jpg";
	document.getElementsByTagName('head')[0].appendChild(image);

  var url = document.createElement('META');
	url.setAttribute('property', 'og:url');
	url.content = document.location;
	document.getElementsByTagName('head')[0].appendChild(url);

  var description = document.createElement('META');
	description.setAttribute('property', 'og:description');
	description.content = "Lego遊びを通じて写真・Gifアニメーション・HTML・プログラミングを学んでます。プログラミングは初心者から中級者向けの情報です。";
	document.getElementsByTagName('head')[0].appendChild(description);

  var locale = document.createElement('META');
	locale.setAttribute('property', 'og:locale');
	locale.content = "ja_JP";
	document.getElementsByTagName('head')[0].appendChild(locale);

  var site_name = document.createElement('META');
	site_name.setAttribute('property', 'og:site_name');
	site_name.content = "Lego Play & Study";
	document.getElementsByTagName('head')[0].appendChild(site_name);
}

function sub_function_create_meta_set_options(){
  var name = document.createElement('META');
	name.setAttribute('name', 'description');
	name.content = "レゴ遊びを通じて写真・Gifアニメーション・HTML・プログラミングを学んでます。プログラミングは初心者から中級者向けの情報です。";
	document.getElementsByTagName('head')[0].appendChild(name);

  var viewport = document.createElement('META');
	viewport.setAttribute('name', 'viewport');
	viewport.content = "width=device-width,initial-scale=1";
	document.getElementsByTagName('head')[0].appendChild(viewport);

  var twitter = document.createElement('META');
  twitter.setAttribute('name', 'twitter:card');
  twitter.content = "Summary with Large Image";
  document.getElementsByTagName('head')[0].appendChild(twitter);

  var ie_option = document.createElement('META');
  ie_option.setAttribute('http-equiv', 'X-UA-Compatible');
  ie_option.content = "IE=edge";
  document.getElementsByTagName('head')[0].appendChild(ie_option);
}

function sub_function_create_meta_set_site_icon(){
//  <link rel="icon" href="画像URL" sizes="16x16" type="image/png" />
//  <link rel="icon" href="画像URL" sizes="32x32" type="image/png" />
//  <link rel="icon" href="画像URL" sizes="48x48" type="image/png" />
//  <link rel="icon" href="画像URL" sizes="62x62" type="image/png" />
}


//window.onload = function(){
//	create_contents_list("ID_CONTENTS_LIST");
//}
