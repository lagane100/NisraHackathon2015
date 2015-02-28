var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io'); //use Socket.IO

var server = http.createServer(function(request, response) {
  console.log('Connection');
  var path = url.parse(request.url).pathname;

  switch (path) {
    case '/':
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('Hello, World.');
      response.end();
      break;
    case '/socket.html':
      fs.readFile(__dirname + path, function(error, data) {
        if (error){
          response.writeHead(404);
          response.write("opps this doesn't exist - 404");
        } else {
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(data, "utf8");
        }
        response.end();
      });
      break;
    default:
      response.writeHead(404);
      response.write("opps this doesn't exist - 404");
      response.end();
      break;
  }
});

server.listen(8001);

io.listen(server); //link to server

var serv_io = io.listen(server);

serv_io.sockets.on('connection', function(socket) {
	setInterval(function() {
		socket.emit('date', {'date': new Date()});
	}, 1000);

	//get server data
	socket.on('client_data', function(data) {
		process.stdout.write(data.letter);
    //caculate(data.letter);
	});
});

//function caculate(data){
//  $.ajax({
//    type: "POST",
//    url: "../save.php",
//    data: {
//      data: data
//    },
//    dataType: 'json',
//    async: false,
//    success: function (data){
//      //戰鬥結果
//    }
//  });
//}
