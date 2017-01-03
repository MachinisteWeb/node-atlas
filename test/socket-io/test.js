var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(80, function(){
  console.log('listening on *:3000');
});

app.get('/', function(req, res){
  res.end("test");
});