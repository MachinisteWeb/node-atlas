var PA = {};

(function (publics) {

	var privates = {};

	publics.catchError = function () {
		process.on('uncaughtException', function (error) {
		    console.log(error);
		});
	};

	publics.loadModules = function () {
		publics.modules = {};

		publics.modules.httpProxy = require('http-proxy');
		publics.modules.http = require('http');

		publics.websites = require('./config.json');
	};

	privates.redirectingPort = function (request, response) {
		var proxy = PA.modules.httpProxy.createProxyServer({}),
			websites = PA.websites,
			finding = false,
			target;

		for (var i = 0; i < websites.length; i++) {
			if (request.headers.host === websites[i].hostname) {
				finding = true;
				target = 'http' + ((websites[i].httpSecure) ? 's' : '') + '://' + websites[i].hostname + ':' + websites[i].port;
				proxy.web(request, response, {
					target: target
				});
				console.log('Redirect to : ' + target);
			}
		}

		if (!finding) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write('This page does not exist.');
			response.end();
			console.log('Redirect to nothing... : '+ request.headers.host);
		}
	};

	publics.listeningPort = function () {
		var http = PA.modules.http;

		http.createServer(function (request, response) {

			privates.redirectingPort(request, response);

		}).listen(80);
	};

})(PA);

PA.loadModules();
PA.listeningPort();
PA.catchError();