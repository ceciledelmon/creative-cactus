$(document).ready(function(){
    
    
    /*          LOGO         */
    var $logo = $('#logo');

    /**
     * Setup your Lazy Line element.
     * see README file for more settings
     */

    $logo.lazylinepainter({
        'svgData': svgData,
        'strokeWidth': 1.5,
        'strokeColor': '#fff',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });

    setTimeout(function(){
        $logo.lazylinepainter('paint');
    }, 10)             
    
    /*SCROLL*/
    
    $('nav ul li a').scroller();
    $('header .bounce a').scroller();
    
    /*HEADER DISPARITION*/
    var  headerclass = $(".headercontent");
    var  headerdisplay = "none";
    var  hdr = $('header').height();
    $(window).scroll(function() {
      if( $(this).scrollTop() > (hdr/2) ) {
        headerclass.fadeOut();
      } else {
        headerclass.fadeIn();
      }
    });
    
    /*MENU FIXED*/
    var  mn = $("nav.white");
    var  mnfix = "fixed";
    //var  hdr = $('header').height();
    
    $(window).scroll(function() {
      if( $(this).scrollTop() > (hdr) ) {
        mn.addClass(mnfix);
      } else {
        mn.removeClass(mnfix);
      }
    });
    
    
    function triangleRezise(){
   $('.triangle').each(function(){
      var parentWidth = $(this).parent().width();
      var parentHeight = $(this).parent().height();
      var widthVariable = $(this).attr('w');
      if(!widthVariable){ var widthVariable = $(this).attr('h');}
      triangleWidth = parseInt(widthVariable) / 100 * parentWidth;
      var heightVariable = $(this).attr('h');
      if(!heightVariable){ var heightVariable = $(this).attr('w');}
      triangleHeight = parseInt(heightVariable) / 100 * parentWidth;
      
      if($(this).hasClass('up')) {
        triangleWidth = triangleWidth / 2;
        triangleHeight = "" + triangleHeight + "px";
        triangleWidth = "" + triangleWidth + "px";
        var triangle = "0px " + triangleWidth + " " + triangleHeight + " " + triangleWidth;
        $(this).css("border-width", triangle);
      }
     else if($(this).hasClass('down')) {
        triangleWidth = triangleWidth / 2;
        triangleHeight = "" + triangleHeight + "px";
        triangleWidth = "" + triangleWidth + "px";
        var triangle = triangleHeight + " " + triangleWidth + " " + "0px " + triangleWidth;
        $(this).css("border-width", triangle);
     }
     else{};
    });
};
    

        triangleRezise();
        $(window).resize(function() {
          triangleRezise()
        });
    
    
    
    
    
})

    

    
    