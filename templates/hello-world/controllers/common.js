exports.setRoutes = function (next) {
    var NA = this,
        route = NA.webconfig.routes;

    route.unshift({
        "url": "/ajoutee/",
		"output": "/ajoutee.html",
		"view": "content.htm"
    });
    route.unshift({
        "url": "/english/added/",
		"output": "/english/added.html",
		"view": "content.htm",
		"languageCode": "en-us"
    });

    next(); 
};