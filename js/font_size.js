function font_size(id,min,max){
  var table = document.createElement("TABLE");
  var rows = [];
  rows.push(table.insertRow(-1));
  cell01 = rows[0].insertCell(0);
  cell01.innerHTML = "文字サイズ";
  cell01.style.textAlign = "center";
  cell01.style.backgroundColor = "#FF7";
  cell02 = rows[0].insertCell(1);
  cell02.innerHTML = "表示";
  cell02.style.textAlign = "center";
  cell02.style.backgroundColor = "#FF7";

  for(i=0;i<max-min+1;i++){
    rows.push(table.insertRow(-1));
    cell01 = rows[i + 1].insertCell(0);
    cell01.innerHTML = min + i;
    cell01.style.textAlign = "center";
    cell02 = rows[i + 1].insertCell(1);
    cell02.innerHTML = "あいうえお";
    cell02.style.fontSize = min + i + "px";
  }
  document.getElementById(id).appendChild(table);
}
