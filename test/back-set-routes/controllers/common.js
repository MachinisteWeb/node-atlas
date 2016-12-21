exports.setModules = function () {
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
						"view": "content.htm"
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

exports.changeVariations = function (params, next) {
	var NA = this,
		fs = NA.modules.fs,
		variations = params.variations;

	fs.readFile("assets/content/" + variations.routePath.replace(".html", ".htm"), "utf-8", function (err, content) {
		if (err) {
			return next(variations);
		}

		variations.common.content = content;

		next(variations);
	});
};