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

        $("h3[id=" + key + "]").each(function () {
            var $title = $(this),
                $toc = $title.next();

            $toc.find("> li").each(function () {
                var $sublink = $(this),
                    $subtitle = $sublink.find("> a"),
                    url = encodeURIComponent(toUrl($subtitle.text())) + ".html";

                $subtitle.attr("href", url);

                $sublink.find("> ul > li").each(function () {
                    var $sublink = $(this),
                        $subtitle = $sublink.find("> a");

                    $subtitle.attr("href", url + "#" + encodeURIComponent(toUrl($subtitle.text())));

                    if (toUrl($subtitle.text()) === key) {
                        $sublink.remove();
                    }
                });
            });

            menu = function (next) {
                fs.writeFile("assets/" + NA.webconfig._content + "index.htm", $title + $toc, function () {
                    $toc.remove();
                    $title.remove();

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