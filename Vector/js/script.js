$(document).ready(function () {
    $('#branches_select').chosen({
        disable_search: true,
        width: "95%"
    });
//    menu catalog
    $('.menu .catalog').click(function() {
        $(this).addClass('opened');
        $('.catalog_submenu').show();
        return false;
    });
    $('.catalog_submenu .close').click(function () {
        $('.catalog_submenu').hide();
        $('.menu .catalog').removeClass('opened')
    });
//    //menu catalog

    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        prevText: '',
        nextText: ''
    });
    $('.bxslider').bxSlider({
        slideWidth: 140,
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 40,
        pager: false
    });
//    tabs contacts
    $('#tab_nav_1').click(function() {
        if ( $('#tab_nav_2').hasClass('active') ) {
            $('#tab_nav_2').removeClass('active');
            $('#tab_nav_1').addClass('active');
            $('#tab_2').hide();
            $('#tab_1').show();
        }
    });
    $('#tab_nav_2').click(function() {
        if ( $('#tab_nav_1').hasClass('active') ) {
            $('#tab_nav_1').removeClass('active');
            $('#tab_nav_2').addClass('active');
            $('#tab_1').hide();
            $('#tab_2').show();
        }
    });
//    //tabs contacts

    $(function(){
        $('#item').slides({
            preload: true,
            preloadImage: 'img/loading.gif',
            effect: 'slide, fade',
            crossfade: true,
            slideSpeed: 200,
            fadeSpeed: 500,
            generateNextPrev: false,
            generatePagination: false
        });
    });



//    item tabs
    $('ul.tabs_nav').on('click', 'li:not(.current)', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('div#item_tabs').find('div.box').eq($(this).index()).fadeIn(250).siblings('div.box').hide();
    });
//    //item tabs

//    object block
    $('.object_block').hover(
        function() {
            $(this).find('.image_hover').animate({top:'0px'}, 200);
            $(this).find('.image_hover_icon').animate({top: '50%'}, 200);
        },
        function() {
            $(this).find('.image_hover').animate({top:'100%'}, 200);
            $(this).find('.image_hover_icon').animate({top: '-50%'}, 200);
        }
    );
//    //object block
    $(".image_zoom").fancybox({
        padding: 0,
        closeBtn: false,
        autoSize: false,
        maxHeight: 500,
        afterLoad: function() {
            this.title = '<div class="bottom_title">' + $(this.element).data("caption") + '</div>'+ '<div class="tips">Фото ' + '<span>' +(this.index + 1) + '</span>' + ' из ' + this.group.length + '</div>' + '<p class="image_title">' + this.title + '</p>';
        },
        helpers:  {
            title : {
                type : 'outside',
                position: 'top'
            }
        }


    });
//    contacts tabs (map)
//    $('ul.contacts_tabs_nav').on('click', 'li:not(.current)', function() {
//        $(this).addClass('current').siblings().removeClass('current')
//            .parents('div.map_wrap').find('div.box').eq($(this).index()).fadeIn(250).siblings('div.box').hide();
//    });
    $('.map_wrap area').click(function() {
        var tabIndex;
        $('.contacts_tabs_nav li').removeClass('current');
        $('.contacts_tabs_nav > .' + $(this).attr('class')).addClass('current');
        tabIndex = $('.contacts_tabs_nav > .' + $(this).attr('class')).index() + 1;
        $('.tab_content > .box').hide();
        $('.tab_content').find('.box:nth-child('+ tabIndex +')').fadeIn(250);
        return false;
    });
//    //contacts tabs (map)

//    popups
    $(".js__p_callback_start, .js__p_pricelist_start, .js__p_feedback_start, .js__p_branches_start").simplePopup();

    $('.js__p_branches_start').click();
//    //popups

});
