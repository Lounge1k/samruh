$(document).ready(function(){
    //$(".wrap").onepage_scroll();

    //$('.top-menu a').on('click', function() {
    //    console.log(this);
    //    var scrollAnchor = $(this).attr('data-scroll'),
    //        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top ;
    //
    //
    //    $('body,html').animate({
    //        scrollTop: scrollPoint
    //    }, 500);
    //
    //    return false;
    //
    //});
    $('#fullpage').fullpage({
        anchors:['home', 'projects', 'about','team','contacts'],
        menu:'#menu',
        lockAnchors:false
    });
    var arrow = $('#arrow');
    var animate = setInterval(function(){
        if(arrow.css('margin-top') == '60px'){
            arrow.css('margin-top','0');
            arrow.addClass('zero');
        }else{
            arrow.css('margin-top','60px');
            arrow.removeClass('zero');
        }

    },1000);


    $('#videos').on('click',function(e){
        var id = $(e.toElement).data('item');
        var header = $(e.toElement.parentElement).find('.video-name').text();
        var text = $(e.toElement.parentElement).find('.hide').text();
        show(id,header,text);
    })

});
//$(window).scroll(function() {
//    var windscroll = $(window).scrollTop();
//    if (windscroll >= 100) {
//        $('.top-menu').addClass('fixed');
//        $('.wrap section').each(function(i) {
//            if ($(this).position().top <= windscroll+40) {
//                $('.top-menu li.active').removeClass('active');
//                $('.top-menu li').eq(i).addClass('active');
//            }
//        });
//
//    } else {
//
//        $('.top-menu').removeClass('fixed');
//        $('.top-menu li.active').removeClass('active');
//        $('.top-menu li:first').addClass('active');
//    }
//
//}).scroll();
