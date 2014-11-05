(function() {

	'use strict';
	//app.init();
    //Socket stuff
//----------------------------
    var socket = io();

    $('form').submit(function(){
        socket.emit('chat message', $('#message').val());
        $('#message').val('');
        return false;
    });

    socket.on('chat message', function(msg){
        console.log(msg);
        make_message(msg);
        $('.message_holder').append($('<rph-msg>').text(msg));
    });
//----------------------------


})();



$('.cast_player').click(function(){
    $(this).toggleClass('expand_bio');
});

