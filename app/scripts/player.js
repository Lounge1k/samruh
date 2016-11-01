var show = function(id,header,text){
    var modal = $('#myModal');
    modal.modal('show');
    modal.find('.modal-title').text(header);
    modal.find('.modal-text').text(text);

    var options = {
        id: id,
        loop: true
    };

    var player = new Vimeo.Player('made-in-ny', options);

    player.loadVideo(id);

    player.setVolume(0.5);

    modal.on('hidden.bs.modal', function (e) {
        player.unload();
    })

};