$(document).ready(function() {
var bob = $(this).attr('id');
$(document).keydown(function(key) {

var t = parseInt(window.getComputedStyle($("#bob")[0]).top);
var l = parseInt(window.getComputedStyle($("#bob")[0]).left);

switch(parseInt(key.which,10)) {

case 37:
 if (l <= 0) {
  $('img').animate({left: "=0px"}, 'fast');
 }
 else {
  $('img').animate({left: "-=40px"}, 'fast');
 }
break;
case 38:
 if (t <= 0) {
  $('img').animate({top: "=0px"}, 'fast');
 }
 else {
  $('img').animate({top: "-=40px"}, 'fast');
 }
break;
case 39:
 if (l >= 720){
  $('img').animate({left: "=720px"}, 'fast');
 }
 else {
  $('img').animate({left: "+=40px"}, 'fast');
 }
break;
case 40:
 if (t >= 520) {
  $('img').animate({top: "=520px"}, 'fast');
 }
 else{
  $('img').animate({top: "+=40px"}, 'fast');
 }
break;
}

});
});