
$(document).ready(function() {
$(document).keydown(function(key) {

var = Robot;
Robot = function(){

var t = parseInt(window.getComputedStyle($("#bob")[0]).top);
var l = parseInt(window.getComputedStyle($("#bob")[0]).left);

switch(parseInt(key.which,10)) {

case 37:
 if (l <= 0) {
  $('#bob').animate({left: "=0px"}, 'fast');
  }
 else {
  $('#bob').animate({left: "-=40px"}, 'fast');
 }
break;
case 38:
 if (t <= 0) {
  $('#bob').animate({top: "=0px"}, 'fast');
 }
 else {
  $('#bob').animate({top: "-=40px"}, 'fast');
 }
break;
case 39:
 if (l >= 640){
  $('#bob').animate({left: "=720px"}, 'fast');
 }
 else {
  $('#bob').animate({left: "+=40px"}, 'fast');
 }
break;
case 40:\
 if (t >= 440) {
  $('#bob').animate({top: "=520px"}, 'fast');
 }
 else{
  $('#bob').animate({top: "+=40px"}, 'fast');
 }
break;
}

});
});
