function check_style(id, titles, tags){
  var obj = document.getElementById(id);
  var table = document.createElement("TABLE");
  var rows = [];

  var header = table.createTHead().insertRow(-1);
  header.style.backgroundColor = "orange";
  for(i=0;i<titles.length;i++){
    header.insertCell(-1).innerHTML = titles[i]
  }

  for(i=0;i<tags.length;i++){
    var target = document.getElementById("ID_" + tags[i]);
    rows.push(table.insertRow(-1));
    rows[i].insertCell(-1).innerHTML = tags[i];
    for(n=0;n<titles.length-1;n++){
      rows[i].insertCell(-1).innerHTML = window.getComputedStyle(target).getPropertyValue(titles[n+1]);
    }
  }

  obj = obj.appendChild(table);

}
