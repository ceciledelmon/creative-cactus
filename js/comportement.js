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
})



    
    