var http = require("http"),
	fs = require("fs"),
	httpPort = 8000,
	httpServer;

httpServer = http.createServer(function (request, response) {
	var router = {
			"/": "index.htm",
			"/contact": "contact.htm"
		},
		file = router[request.url] || "error.htm",
		statusCode = (router[request.url]) ? 200 : 404;

	fs.readFile(file, "utf-8", function (err, content) {
		if (err) { 
			console.log("We cannot open " + file + " view file.");
		}
		response.writeHead(statusCode, {
			"Content-Type": "text/html; charset=utf-8"
		});

		response.end(content);
	});
})

httpServer.listen(httpPort, function () {
	console.log("Server listening on: http://localhost:%s", httpPort);
});
