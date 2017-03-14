module.exports = function (request, response, next) {

	console.log("a NA", this.serverPath);

	next();
};