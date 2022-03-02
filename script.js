
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style['box-shadow'] = "5px 5px 10px black";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style['box-shadow'] = "0px 0px 0px black";
}
function indicate() {
      console.log(this)
  setTimeout(() => {
$("#"+$(this).attr('id')).css({"box-shadow":"5px 5px 10px black"})
  },500)
  setTimeout(() => {
$("#"+$(this).attr('id')).css({"box-shadow":"0"})
  },1000)
}
/*<div>
    <button class = "button"><image class = "lowEnd" src = "./images/GooglePixel4@2x.png" width = 10%  height = 10% onclick = "lowEnd()"></button>
  </div>
*/