var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();
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
        $('.message_holder').append($('<p>').text(msg));
    });
//----------------------------


})();



$('.cast_player').click(function(){
    $(this).toggleClass('expand_bio');
});


function make_message(message){

}
