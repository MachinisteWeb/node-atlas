exports.setRoutes = function (next) {
    var NA = this,
        route = NA.webconfig.routes;

    route.unshift({
        "key": "add_fr-fr",
        "url": "/ajoutee/",
		"output": "/ajoutee.html",
		"view": "content.htm"
    });
    route.unshift({
        "key": "add_en-us",
        "url": "/english/added/",
		"output": "/english/added.html",
		"view": "content.htm",
		"languageCode": "en-us"
    });

    next(); 
};

exports.changeDom = function (next, locals) {
	var NA = this,
        $ = locals.virtualDom();

    for (let route of NA.webconfig.routes) {
    	if (route.key === "home_" + locals.common.menu.href) {
			$("div > a").attr("href", route.url.slice(1));
    	}
    }

    next($);
};