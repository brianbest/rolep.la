

(function() {

	//'use strict';
	//app.init();
    //Socket stuff
    $(document).foundation();

    var winHeight = $( window ).height();
    winHeight = winHeight - 75;
    $('.message_holder').css('height',winHeight);


//----------------------------
    var socket = io();

    $('#msg_form').submit(function(){
        socket.emit('chat message', $('#message').val());
        $('#message').val('');
        return false;
    });

    $('#create_char').submit(function(){
        var new_char = {
            user_name : $('#user_name').val(),
            char_name : $('#char_name').val(),
            age : $('#age').val(),
            gender : $('#gender').val(),
            bio : $('#bio').val()
        };
        socket.emit('new character', new_char);

        return false;
    });

    socket.on('chat message', function(msg){
        console.log(msg);

        $('.message_holder').scrollTop = $('.message_holder').scrollHeight;
        $('.message_holder').append($('<rph-msg>').text(msg));
    });

    socket.on('characters', function(characters){
        console.log(characters);

    });
    socket.on('characters stats', function(characters){
        console.log(characters);

    });

//----------------------------


})();



$('.cast_player').click(function(){
    $(this).toggleClass('expand_bio');
});


//Switches tabs
var tabs = document.querySelector('paper-tabs');
var currTab = 'online_tab';//set defualt tab

tabs.addEventListener('core-select', function() {
    switch (tabs.selected){
        case "online":
            $('.' + currTab).css('display','none');
            currTab = 'online_tab';
            $('.' + currTab).css('display','block');
            break;
        case "cast":
            $('.' + currTab).css('display','none');
            currTab = 'cast_tab';
            $('.' + currTab).css('display','block');
            break;
        case "story":
            $('.' + currTab).css('display','none');
            currTab = 'story_tab';
            $('.' + currTab).css('display','block');
            break;
        case "setting":
            $('.' + currTab).css('display','none');
            currTab = 'setting_tab';
            $('.' + currTab).css('display','block');
            break;
    }
    console.log("Selected: " + tabs.selected);
});
