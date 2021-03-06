//requires
var express = require('express'),
    io      = require('socket.io').listen(3001),
    Neon    = require('neon'),
    colors  = require('./node_modules/colors');

//config
var app = express(),
    port = 3000;

Neon.Class('FileBot')({
    prototype : {
        init : function (){
            this.configureApp();
            this.setRoutes();
            this.setupSockets();
            this.serverStart();

            return this;
        },

        configureApp : function(){
            app.use('/assets', express.static(__dirname + '/assets'));
            app.use(app.router);

            return this;
        },

        setRoutes : function(){
            app.get('/', function(req, res){
              res.sendfile('index.html');
            });

            app.get('/todo-app', function(req, res){
              res.sendfile('todo.html');
            });

            app.get('/todo-data', function(req, res){
              var dummyData = [
                {name: 'get tortillas',status : 'active'},
                {name: 'code todo app',status : 'done'},
                {name: 'fix car',status : 'active'},
                {name: 'buy ps4',status : 'done'},
                {name: 'cook meth',status : 'active'},
                {name: 'send computer to mars',status : 'active'},
                {name: 'smoke some pot',status : 'done'},
                {name: 'paint walls',status : 'active'},
                {name: 'wash dishes',status : 'done'},
                {name: 'make bed',status : 'active'},
                {name: 'fuck carmen salinas',status : 'done'}
              ];

              res.send(JSON.stringify(dummyData));
            });


            return this;
        },

        setupSockets : function(){
            var fileBot = this;

            io.sockets.on('connection', function (socket) {

                socket.on('hello-i-am-the-socket', function (data) {
                    console.log('The socket pinged the event hello-i-am-the-socket');
                    console.log(data);
                });

            });
        },

        bindSocketEvents : function(socket){
            // socket.emit('news', { hello: 'world' });

        },

        serverStart : function(){
            console.log('The filebot is ready to server master!!!'.green);
            console.log('...in this port: http://localhost:'.blue+port.toString().magenta+'!!!!'.blue);
            console.log('the scoket is in 3001');
            app.listen(3000);
        }
    }
});

var fileBot = new Neon.FileBot();

console.log('server inited on port http://localhost:3000');