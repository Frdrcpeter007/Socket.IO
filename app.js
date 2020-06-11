var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

//Quand un user s'y connect
io.on('connection', function(socket) {
    console.log('A user connected');
 
    setTimeout(function() {
        socket.emit("latence", {message: "Le temps est écoulé"})
     }, 3000);

    //Lorsqu'il se deconnect
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });

http.listen(3000, function() {
   console.log('listening on *:3000');
});