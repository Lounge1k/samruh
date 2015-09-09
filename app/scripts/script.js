$(document).ready(function(){
    $(".height").css("height",$(window).outerHeight());
});

$(document).resize(function(){
    $(".height").css("height",$(window).outerHeight());
});