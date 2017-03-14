module.exports = function (request, response, next) {

	console.log("b request", request.url);
	console.log("b response", response.statusCode);

	next();
};