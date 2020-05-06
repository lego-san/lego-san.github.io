function create_animation(id){
  var element = document.getElementById(id);
  var area_width = window.innerWidth;
  var period = parseInt(1000/20);
  var step = parseInt(area_width/period/4);
  var flag = true;
  var position = 0;
  let timer = setInterval(function() {
    area_width = window.innerWidth;
    if (flag == true){
       position = position + step;
    }else if (flag == false){
      position = position - step;
    }
    element.style.left = position + 'px';
    if (position > area_width - 250) flag = false;
    if (position < 0) flag =true;
    //clearInterval(timer);
  }, period);
}

function sample(id){
  element = document.getElementById(id);
  console.log(element.style.left);
  element.style.left = '300px';
  console.log(element.style.left);
}
