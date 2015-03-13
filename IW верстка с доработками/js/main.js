$(document).ready(function () {

    function photoBlockWidth () {
        var oneBlockWidth = $('.one_photo_block').innerWidth();
        var quantity = $(".one_photo_block").length;
        $('.photos_block').css('width', (oneBlockWidth+20)*quantity);
    }
    photoBlockWidth();

    function contactBlockCenter () {
        var height = $('#contacts').innerHeight();
        var width = $('#contacts').innerWidth();
        $('#contacts').css({'margin-left': -width/2, 'margin-top':-height/2})
    }
    contactBlockCenter();





});