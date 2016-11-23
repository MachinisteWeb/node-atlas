/* jshint node: true */

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

    function toUrl(text) {
        return text.toLowerCase().replace(/'| |\(|\)|\/|\!|\?|,|\&|\;|\[|\]|\%/g, "-").replace(/-+/g, "-").replace(/^-/g, "").replace(/-$/g, "");
    }

    fs.readFile(NA.webconfig._readme, "utf-8", function (err, content) {
        if (err) {
            return next();
        }

        var dom = marked(content),
            $ = cheerio.load(dom, { decodeEntities: false }),
            allRoutes = [],
            menu,
            key = NA.webconfig._toc;

        $("h2, h3").each(function () {
            var $title = $(this);

            $title.attr("id", toUrl($title.text()));
        });
        $("table").each(function () {
            var $table = $(this),
            	$container = $("<div>");

            $container.addClass("table");
            $table.after($container);
            $container.html($table.clone());
            $table.remove();
        });

        $("h3[id=" + key + "]").each(function () {
            var $title = $(this),
                $toc = $title.next();

            $toc.addClass("toc");

            $toc.find("> li").each(function () {
                var $sublink = $(this),
                    $subtitle = $sublink.find("> a"),
                    url = encodeURIComponent(toUrl($subtitle.text())) + ".html";

                $subtitle.attr("data-href", $subtitle.attr("href"));
                $subtitle.attr("href", url);

                $sublink.find("> ul > li").each(function () {
                    var $sublink = $(this),
                        $subtitle = $sublink.find("> a");

                    $subtitle.attr("data-href", $subtitle.attr("href"));
                	$subtitle.attr("href", url + "#" + encodeURIComponent(toUrl($subtitle.text())));

                    if (toUrl($subtitle.text()) === key) {
                        $sublink.remove();
                    }
                });
            });

            menu = function (next) {
                fs.writeFile("assets/" + NA.webconfig._content + "index.htm", $title + $toc, function () {
                	var $base = $toc.clone();
                    $toc.remove();
                    $title.remove();

                    $("a").filter(function (index, element) {
                    	return !$(element).is("[href^=http]");
                    }).each(function () {
                    	var $needTransform = $(this);
                    	$base.find("> li").each(function () {
                    		var $subitem = $(this),
                    			$link = $subitem.find("a");
                    		if ($link.attr("data-href") === $needTransform.attr("href")) {
                				$needTransform.attr("href", $link.attr("href"));
                    		}
                    		$subitem.find("> ul > li a").each(function () {
                    			var $sublink = $(this);
                    			if ($sublink.attr("data-href") === $needTransform.attr("href")) {
	                				$needTransform.attr("href", $sublink.attr("href"));
	                    		}
							});
                    	});
        			});

                    next();
                });
            };

        });

        $("h2").each(function () {
            var $title = $(this);

            allRoutes.push(function (nextRoute) {
                fs.writeFile("assets/" + NA.webconfig._content + encodeURIComponent($title.attr("id")) + ".htm", $title + $title.nextUntil("h2"), function () {
                    route["/" + encodeURIComponent($title.attr("id")) + ".html"] = {
                        "template": "content.htm",
                        "controller": "content.js"
                    };
                    //console.log("===================================");
                    //console.log(route);

                    nextRoute();
                });
            });
        });

        menu(function () {     
            async.parallel(allRoutes, function() {
                next();
            });
        });
    });   
};