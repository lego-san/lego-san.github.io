function create_contents_list(id){
  	var contents_list = document.getElementById(id);
  	var matches = document.querySelectorAll('h2');
  	var ul = document.createElement('ul');
  	matches.forEach( function (value, i) {
  		if ( value.id === '' ) {
  			value.id = 'ID_H2_0' + i;
  		}
  		var li = document.createElement('li');
  		var a = document.createElement('a');
  		a.innerHTML = value.innerHTML;
  		a.href = '#' + value.id;
  		li.appendChild(a);
  		ul.appendChild(li);
  	});
  	contents_list.appendChild(ul);
}
