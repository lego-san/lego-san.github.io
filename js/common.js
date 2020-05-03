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

//window.onload = function(){
//	create_contents_list("ID_CONTENTS_LIST");
//}
