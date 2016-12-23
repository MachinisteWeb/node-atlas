exports.changeVariations = function (next, locals) {
    var NA = this,
        fs = NA.modules.fs;

    fs.readFile("assets/" + NA.webconfig._content + locals.route.replace(".html", ".htm"), "utf-8", function (err, content) {
        if (err) {
            return next();
        }

        locals.common.content = content;

        next();
    });
};