function check_property(id, titles, targets){
  var obj = document.getElementById(id);
  var table = document.createElement("TABLE");
  var rows = [];

  var header = table.createTHead().insertRow(-1);
  header.style.backgroundColor = "orange";
  for(i=0;i<titles.length;i++){
    header.insertCell(-1).innerHTML = titles[i]
  }

  for(i=0;i<targets.length;i++){
    var target = document.getElementById(targets[i]);
    rows.push(table.insertRow(-1));
    rows[i].insertCell(-1).innerHTML = targets[i];
    for(n=0;n<titles.length-1;n++){
      rows[i].insertCell(-1).innerHTML = window.getComputedStyle(target).getPropertyValue(titles[n+1]);
    }
  }

  obj = obj.appendChild(table);

}

function check_window_size(id){
  var obj = document.getElementById(id);
  var table = document.createElement("TABLE");

  var items = table.createTHead().insertRow(-1);
  items.style.backgroundColor = "orange";
  items.insertCell(-1).innerHTML = "Scope";
  items.insertCell(-1).innerHTML = "Height";
  items.insertCell(-1).innerHTML = "Width";

  items = table.createTHead().insertRow(-1);
  items.insertCell(-1).innerHTML = "screen size";
  items.insertCell(-1).innerHTML = screen.height + "px";
  items.insertCell(-1).innerHTML = screen.width + "px";

  items = table.createTHead().insertRow(-1);
  items.insertCell(-1).innerHTML = "outer window size";
  items.insertCell(-1).innerHTML = window.outerHeight + "px";
  items.insertCell(-1).innerHTML = window.outerWidth + "px";

  items = table.createTHead().insertRow(-1);
  items.insertCell(-1).innerHTML = "available screen size";
  items.insertCell(-1).innerHTML = screen.availHeight + "px";
  items.insertCell(-1).innerHTML = screen.availWidth  + "px";

  items = table.createTHead().insertRow(-1);
  items.insertCell(-1).innerHTML = "inner window size";
  items.insertCell(-1).innerHTML = window.innerHeight + "px";
  items.insertCell(-1).innerHTML = window.innerWidth + "px";

  items = table.createTHead().insertRow(-1);
  items.insertCell(-1).innerHTML = "HTML tag size";
  items.insertCell(-1).innerHTML = window.getComputedStyle(document.getElementsByTagName("HTML")[0]).getPropertyValue("height");
  items.insertCell(-1).innerHTML = window.getComputedStyle(document.getElementsByTagName("HTML")[0]).getPropertyValue("width");

  items = table.createTHead().insertRow(-1);
  items.insertCell(-1).innerHTML = "BODY tag size";
  items.insertCell(-1).innerHTML = window.getComputedStyle(document.getElementsByTagName("BOdY")[0]).getPropertyValue("height");
  items.insertCell(-1).innerHTML = window.getComputedStyle(document.getElementsByTagName("BODY")[0]).getPropertyValue("width");

  obj.appendChild(table);
  obj.appendChild(document.createElement("BR"));
}

function check_tag_property(id){
  var obj = document.getElementById(id);
  var table = document.createElement("TABLE");
  var titles = ["font-size", "font-weight", "border", "margin", "padding","font-family"];
  var targets = ["HTML", "BODY", "H1", "H2", "P", "FORM", "DIV"];

  var items = table.createTHead().insertRow(-1);
  items.style.backgroundColor = "orange";
  items.insertCell(-1).innerHTML = "Scope";
  for (i=0; i<titles.length; i++){
    items.insertCell(-1).innerHTML = titles[i];
  }

  for (i=0; i<targets.length; i++){
    items = table.createTHead().insertRow(-1);
    items.insertCell(-1).innerHTML = targets[i];
    for (n=0; n<titles.length; n++){
      items.insertCell(-1).innerHTML = window.getComputedStyle(document.getElementsByTagName(targets[i])[0]).getPropertyValue(titles[n]);
    }
  }
  obj.appendChild(table);
  obj.appendChild(document.createElement("BR"));
}

function check_tag_position(id){
  var obj = document.getElementById(id);
  var table = document.createElement("TABLE");
  var titles = ["Scope", "clientTop", "clientLeft", "clientHeight", "clientWidth"];
  var targets = ["HTML", "BODY", "H1", "H2", "P", "FORM", "DIV"];

  var items = table.createTHead().insertRow(-1);
  items.style.backgroundColor = "orange";
  for (i=0; i<titles.length; i++){
    items.insertCell(-1).innerHTML = titles[i];
  }

  for (i=0; i<targets.length; i++){
    items = table.createTHead().insertRow(-1);
    items.insertCell(-1).innerHTML = targets[i];
    items.insertCell(-1).innerHTML = document.getElementsByTagName(targets[i])[0].clientTop;
    items.insertCell(-1).innerHTML = document.getElementsByTagName(targets[i])[0].clientLeft;
    items.insertCell(-1).innerHTML = document.getElementsByTagName(targets[i])[0].clientHeight;
    items.insertCell(-1).innerHTML = document.getElementsByTagName(targets[i])[0].clientWidth;
  }

  obj.appendChild(table);
  obj.appendChild(document.createElement("BR"));
}


function check_navigator_property(id){
  var obj = document.getElementById(id);
  var p = document.createElement("P");
  var text;
  text = "Browser CodeName: " + navigator.appCodeName;
  text = text + "<br>" + "Browser Name: " + navigator.appName;
  text = text + "<br>" + "Browser Version: " + navigator.appVersion;
  text = text + "<br>" + "Cookies Enabled: " + navigator.cookieEnabled;
  text = text + "<br>" + "Browser Language: " + navigator.language;
  text = text + "<br>" + "Browser Online: " + navigator.onLine;
  text = text + "<br>" + "Platform: " + navigator.platform;
  text = text + "<br>" + "User-agent header: " + navigator.userAgent;

  p.innerHTML = text;
  obj.appendChild(p);
}

function check_location_property(id){
  var obj = document.getElementById(id);
  var p = document.createElement("P");
  var text;
  text = "host: " + location.host;
  text = text + "<br>" + "hostname: " + location.hostname;
  text = text + "<br>" + "href: " + location.href;
  text = text + "<br>" + "origin: " + location.origin;
  text = text + "<br>" + "port: " + location.port;
  text = text + "<br>" + "protocol: " + location.protocol;
  text = text + "<br>" + "search: " + location.search;
  text = text + "<br>" + "origin: " + location.origin;

  p.innerHTML = text;
  obj.appendChild(p);
}

function check_all_property(id){
  check_window_size(id);
  check_tag_property(id);
  check_tag_position(id);
  check_navigator_property(id);
  check_location_property(id);
}

function set_window_size(width){
  size = "toolbar=yes, " + "width=" + width + ", " + "height=" + window.innerHeight;
  myWindow = window.open(location.href, "", size);
  myWindow.focus();
}
