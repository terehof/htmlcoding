$(document).ready(function() {
    $("#owl-carousel").owlCarousel({
        navigation: true,
        navigationText: ['', ''],
        items : 5
    });

    // toggle menu
        $('.toggle-menu').on('click', function() {
            $('nav').toggleClass('active');
            return false;
        });
        $(document).click(function(event) {
            if ($(event.target).closest("nav").length) return;
            $("nav").removeClass('active');
            event.stopPropagation();
        });

    // END toggle menu

});