$(document).ready(function(){
    $(".top-menu .col-md-2 a").on('click',function(event){
        $(this).parent().parent().find('.col-md-2').removeClass('active');
        $(this).parent().addClass('active');
    })
});

$(window).on('scroll',function(){
    $('.block').each(function(){
        if($(window).scrollTop() >= $(this).offset().top){
            console.log(123);
            var id = $(this).attr('id');
            $('.top-menu .col-md-2').removeClass('active');
            $('.top-menu .col-md-2 a[href=#'+id+']').parent().addClass("active");
        }
    });
});
