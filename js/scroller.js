
jQuery.fn.scroller = function () { 
        $(this).click(allerA) ;
    
    function allerA(ev)
    {
        ev.preventDefault() ;
		var page = $(this).attr('href'); // Page cible
        console.log(page) ;
		var speed = 750; // Durée de l'animation (en ms)
        var hauteurHeader = $("body>div#wrapper>header").height() ;
		$('html, body').animate( { scrollTop: $(page).offset().top - hauteurHeader}, speed ); // Go
    }
}


			