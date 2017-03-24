/* jshint node: true */
exports.setModules = function () {
    var NA = this;

    NA.modules.marked = require("marked");
};

exports.changeVariations = function (next, locals) {
    locals.version = require("../../../node-atlas/package.json").version;

    next();
};

exports.setRoutes = function (next) {
    var NA = this,
        fs = NA.modules.fs,
        cheerio = NA.modules.cheerio,
        async = NA.modules.async,
        marked = NA.modules.marked,
        route = NA.webconfig.routes;

    function toUrl(text) {
        return text.toLowerCase().replace(/\&#39\;|'|\&lt\;|<|\&gt\;|>|\.| |\(|\)|\/|\!|\?|,|\&|\;|\[|\]|\%/g, "-").replace(/-+/g, "-").replace(/^-/g, "").replace(/-$/g, "");
    }
    function toSafeChar(text) {
        return text.replace(/é|è|ê/g, "e").replace(/ô/g, "o").replace(/à/g, "a").replace(/û|ù/g, "u");
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

            $title.attr("id", toSafeChar(toUrl($title.text())));
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
                $toc = $title.next(),
                $titleFinal = $("<h2>");

            $titleFinal.html($title.html());
            $title.after($titleFinal);

            $toc.addClass("toc");

            $toc.find("> li").each(function () {
                var $sublink = $(this),
                    $subtitle = $sublink.find("> a"),
                    url = toSafeChar(toUrl($subtitle.text())) + ".html";

                $subtitle.attr("data-href", $subtitle.attr("href"));
                $subtitle.attr("href", url);

                $sublink.find("> ul > li").each(function () {
                    var $sublink = $(this),
                        $subtitle = $sublink.find("> a");

                    $subtitle.attr("data-href", $subtitle.attr("href"));
                	$subtitle.attr("href", url + "#" + toSafeChar(toUrl($subtitle.text())));

                    if (toSafeChar(toUrl($subtitle.text())) === key) {
                        $sublink.remove();
                    }
                });
            });

            menu = function (next) {
                fs.writeFile("assets/" + NA.webconfig._content + "index.htm", $titleFinal + $toc, function () {
                	var $base = $toc.clone();
                    $toc.remove();
                    $titleFinal.remove();
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
                var $content = $title.nextUntil("h2"),
                    $after = $content.next("h2"),
                    $before = $title.prevUntil("h2").prev("h2"),
                    divBefore = ($before.html()) ? `<div class="before">
                            <a href="${$before.attr("id")}.html">◄ ${$before.html()}</a>
                        </div>` : "",
                    divAfter = ($after.html()) ? `<div class="after">
                            <a href="${$after.attr("id")}.html">${$after.html()} ►</a>
                        </div>` : "",
                    bottom = "<div>" + divBefore + divAfter + "</div>";

                if ($title.attr("id")) {
                    fs.writeFile("assets/" + NA.webconfig._content + toSafeChar($title.attr("id")) + ".htm", $title + $content +  bottom, function () {
                            route["/" + toSafeChar($title.attr("id")) + ".html"] = {
                                "view": "content.htm",
                                "controller": "content.js"
                            };

                        nextRoute();
                    });
                } else {
                    nextRoute();
                }
            });
        });

        menu(function () {     
            async.parallel(allRoutes, function() {
                next();
            });
        });
    });   
};