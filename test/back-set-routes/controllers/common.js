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

					if (route instanceof Array) {
						route.push({
							"url": "/" + $title.attr("id") + ".html",
							"view": "content.htm"
						});
					} else {					
						route["/" + $title.attr("id") + ".html"] = {
							"view": "content.htm"
						};
					}

					nextRoute();
				});
			});
		});

		async.parallel(allRoutes, function() {
		    next();
		});
	});   
};

exports.changeVariations = function (next, locals) {
	var NA = this,
		fs = NA.modules.fs;

	fs.readFile("assets/content/" + locals.route.replace(".html", ".htm"), "utf-8", function (err, content) {
		if (err) {
			return next();
		}

		locals.common.content = content;

		next();
	});
};