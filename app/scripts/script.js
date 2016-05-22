$(document).ready(function(){

    $('.top-menu a').on('click', function() {
        console.log(this);
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top -20;;


        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    });

});
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.top-menu').addClass('fixed');
        $('.wrap section').each(function(i) {
            if ($(this).position().top <= windscroll+20) {
                $('.top-menu li.active').removeClass('active');
                $('.top-menu li').eq(i).addClass('active');
            }
        });

    } else {

        $('.top-menu').removeClass('fixed');
        $('.top-menu li.active').removeClass('active');
        $('.top-menu li:first').addClass('active');
    }

}).scroll();
var show = function(){
    $('#myModal').modal('show');
}