$(document).ready(function() {
    $(document).keydown(function(key) {
        
      
       switch(parseInt(key.which,10)) {
        
			case 37:
				$('img').animate({left: "-=40px"}, 'fast');
				break;

			case 38:
				$('img').animate({top: "-=40px"}, 'fast');
				break;
			case 39:
				$('img').animate({left: "+=40px"}, 'fast');
				break;
			case 40:
				$('img').animate({top: "+=40px"}, 'fast');
				break;
        }
        
	});

});