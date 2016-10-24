exports.loadModules = function () {
	var NA = this;
	NA.modules.marked = require("marked");
};

exports.setRoutes = function (next) {
	var NA = this,
		fs = NA.modules.fs,
		cheerio = NA.modules.cheerio,
		async = NA.modules.async,
		marked = NA.modules.marked,
		route = NA.webconfig.routes;

	fs.readFile("../../README.md", "utf-8", function (err, content) {
		if (err) {
			new Error("README File not found.");
			return next();
		}

		var dom = marked(content),
			$ = cheerio.load(dom, { decodeEntities: false }),
			allRoutes = [];

		$("h2").each(function () {
			//
			var $title = $(this);

			allRoutes.push(function (nextRoute) {

				fs.writeFile("assets/content/" + $title.attr("id") + ".htm", $title + $title.nextUntil("h2"), function () {

					route["/" + $title.attr("id") + ".html"] = {
						"template": "content.htm"
					};

					nextRoute();
				});
			});
		});

		async.parallel(allRoutes, function() {
		    next();
		});
	});   
};

exports.changeVariation = function (params, next) {
	var NA = this,
		fs = NA.modules.fs,
		variation = params.variation;

	fs.readFile("assets/content/" + variation.currentRoute.replace(".html", ".htm"), "utf-8", function (err, content) {
		if (err) {
			return next(variation);
		}

		variation.common.content = content;

		next(variation);
	});
};