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




$(window).load(function() {
    // banner slider
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: 2000,
        speed: 700,
        effect: 'fade'
    })    
    // END banner slider
});