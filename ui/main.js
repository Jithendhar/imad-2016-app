console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML ='newv value';

var image = document.getElementById('madi');
marginLeft = 0;
function moveRight () 
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px'
}
img.onclick = function(){
  var interval=setInterval(moveRight,100);
}