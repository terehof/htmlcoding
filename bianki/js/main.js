$(document).ready(function() {
    $('.slider-main').flexslider({
        smoothHeight: true,
        slideshow: false,
        directionNav: false
    });


    $('input, textarea').placeholder();


    $.scrollUp({
        scrollText: ''
    });
});