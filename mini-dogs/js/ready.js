/**
 * Created by Сергей on 19.09.14.
 */

$(document).ready(function () {

    $('.menu_club .with_submenu').hover(
        function () {
            $('.submenu', this).toggle();
        }
    );

    $("#slides").slidesjs({
        responsive: true,
        navigation: {
            active: true,
            effect: "slide"
        }
    });

    $(".subscribtion>form>div>input").uniform();

    $('.regist').click(
        function () {
            $('.regist_popup').toggle();
        });
    $('.regist_popup').mouseleave(
        function () {
            $('.regist_popup').toggle();
        });

    $( "#accordion" ).accordion({
        collapsible: true
    });

    $( "#payment" ).selectmenu({ width: 290 });
    $( "#shipping" ).selectmenu({ width: 290 });

    $( "#sort" ).selectmenu({ width: 150 });














});