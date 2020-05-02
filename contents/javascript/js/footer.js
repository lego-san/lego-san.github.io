function create_footer(id){
  var contents = "[<a href='#ID_TITLE'>ページ上に戻る</a>] / [<a href='#ID_CONTENTS'>目次に戻る</a>]";
  element = document.getElementById(id);
  var p = document.createElement('P');
  p.innerHTML = contents;
  //p.classList.toggle("guide_area_bottom");
  element = element.appendChild(p);
}

window.onload = function(){
  create_footer("ID_FOOTER");
}
