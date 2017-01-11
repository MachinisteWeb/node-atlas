exports.setRoutes = function (next) {
    var NA = this,
        route = NA.webconfig.routes = {};

    route["/"] = {
		"mimeType": "text/plain"
    };

	next();
};

exports.changeDom = function (next, locals) {

	locals.dom = "Hello World";

	next();
};