var show = function(id,header,text){
    $.fn.fullpage.setAllowScrolling(false);
    var modal = $('#myModal');
    modal.on('hidden.bs.modal', function (e) {
        $.fn.fullpage.setAllowScrolling(true);
    });
    modal.modal('show');
    modal.find('.modal-title').text(header);
    modal.find('.modal-text').text(text);

    var options = {
        id: id,
        loop: true
    };
    if(id){
        $('#iframe').show();
        $('#carousel-example-generic').hide();
        var player = new Vimeo.Player('made-in-ny', options);

        player.loadVideo(id);

        player.setVolume(0.5);

        modal.on('hidden.bs.modal', function (e) {
            player.unload();
        })
    }else{
        $('#iframe').hide();
        $('#carousel-example-generic').show();
    }
};