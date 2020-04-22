function make_color_table(base_color){
  var table = document.createElement("TABLE");
  var rows = [];
  for(i=0;i<16;i++){
    rows.push(table.insertRow(-1));
    for(n=0;n<16;n++){
      celln = rows[i].insertCell(n);
      celln.innerHTML = "#" + base_color.toString(16) + i.toString(16) + n.toString(16);
      celln.style.backgroundColor = "#" + base_color.toString(16) + i.toString(16) + n.toString(16);
    }
  }
  document.getElementById("ID_COLOR_TABLE").appendChild(table);
}

function make_all_color_table(){
  for(base_color=0;base_color<16;base_color++){
    var para = document.createElement("H2");
    para.setAttribute("id", "ID_COLOR_TABLE_" + base_color.toString(16));
    para.innerText = "Color Table[" + base_color + "]";
    document.getElementById("ID_COLOR_TABLE").appendChild(para);
    var para = document.createElement("P");
    para.innerText = "#" + base_color.toString(16) + "xxのカラーテーブルです。";
    document.getElementById("ID_COLOR_TABLE").appendChild(para);
    make_color_table(base_color);
  }
}

function table_list(){
  var para = document.createElement("H2");
  para.setAttribute("id", "ID_CONTENTS");
  para.innerText = "Color Table List";
  document.getElementById("ID_COLOR_TABLE").appendChild(para);

  var mylist = document.createElement("OL");

  for(base_color=0;base_color<16;base_color++){
    var anchor = document.createElement("A");
    anchor.href = "#ID_COLOR_TABLE_" + base_color.toString(16);
    anchor.textContent = "Color Table[" + base_color + "]"
    document.getElementById("ID_COLOR_TABLE").appendChild(anchor);

    var myitem = document.createElement("LI");
    myitem.appendChild(anchor);
    mylist.appendChild(myitem);

  }
  document.getElementById("ID_COLOR_TABLE").appendChild(mylist);

}
