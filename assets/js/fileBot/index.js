var socket = io.connect('http://localhost:3001');

Class('FileBot')({
    prototype : {
        emitEvent : function(){
            socket.emit('hello-i-am-the-socket', { my: 'data fuckeeer' });
        }
    }
});

$(document).ready(function(){
   window.fileBot = new  FileBot();
});