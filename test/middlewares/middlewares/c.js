module.exports = function () {
	var NA = this;
	return [function (request, response, next) {
		console.log("c NA", NA.serverPath);
		next();
	}, function (request, response, next) {
		console.log("c request", request.url);
		console.log("c response", response.statusCode);
		next();
	}];
};