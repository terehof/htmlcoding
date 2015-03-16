$(window).load(function () {
    if ($(window).width() > 768) {
        $('.text-block').each(function () {
            var height = $(this).height();
            $(this).find('.container > .row > div').css('height', height + 'px');
            var innerHeight = $(this).find('h3').outerHeight(true) + $(this).find('p').outerHeight(true);
            var padding = (height - innerHeight) / 2 - 10;
            $(this).find('.container > .row > div:not(".hidden-xs")').css('padding-top', padding + 'px');
        })
    }


    $('#state-select').chosen({
        disable_search: true
    });

    $('input, textarea').placeholder();

    $('.checkbox').uniform();
    $('.js_label').on('click', function () {
        if ( $(this).find('.checker > span').hasClass('checked') ) {
            $(this).addClass('checked');
        } else {
            $(this).removeClass('checked');
        }
    })

});