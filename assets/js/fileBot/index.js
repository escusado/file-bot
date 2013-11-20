var socket = io.connect('http://localhost:3001');

$(document).ready(function(){
   window.fileBot = new  FileBot({
    data : 'this is my property',
    className : 'myClassIsHighClass'
   });
});