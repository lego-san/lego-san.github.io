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

window.onload = function(){
  create_contents_list("ID_CONTENTS_LIST");
}
