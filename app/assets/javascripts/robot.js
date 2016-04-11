/*_____________________Pole______________________*/

var Pole = (function () {
    Pole.prototype.w = 5;
    Pole.prototype.h = 6;
    function Pole(h, w) {
        if(h){
            this.h = h;
        }
        if(w) {
            this.w = w;
        }
       
    }
    Pole.prototype.resize = function(){
        $('#pole').css('width', 40*this.w+6);
        $('#pole').css('height', 40*this.h+6);
    }
    return Pole;
})()

/*______________________Robot_____________________*/

var Robot, robot;

Robot = (function () {
    function Robot (options) {
        $(document).keydown(this.move.bind(this));
    }

    Robot.prototype.move = function (key) {

var t = parseInt($("#bob").css("top"));
var l = parseInt($("#bob").css("left"));
var a = parseInt($("#pole").css("width"));
var b = parseInt($("#pole").css("height"));

        switch (parseInt(key.which, 10)) {

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
 if (l >= a-46){
  $('#bob').animate({left: a-46}, 'fast');
 }
 else {
  $('#bob').animate({left: "+=40px"}, 'fast');
 }
break;
case 40:

 if (t >= b-46) {
  $('#bob').animate({top: b-46}, 'fast');
 }
 else{
  $('#bob').animate({top: "+=40px"}, 'fast');
 }
break;
};

};
  return Robot;
})();


/*_________________Conec_robotu__________________*/

$(document).ready(function() {
    /*----------razmer_polya----------*/
	$('#bt').on('click', function(){
    var w = $(".sh:text").val();
    var h = $(".ws:text").val();
    if (h>10 || w>10) {
        alert("Maximum height/width = 10!");
    }
    else{
    var pole1 = new Pole(h, w);}
    pole1.resize();
   
    }); 
    /*------------Robot_go------------*/
  
    var r1 = new Robot;
    r1.move();
    
});


