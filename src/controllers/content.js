exports.changeVariations = function (params, next) {
    var NA = this,
        fs = NA.modules.fs,
        variations = params.variations;

    fs.readFile("assets/" + NA.webconfig._content + variations.route.replace(".html", ".htm"), "utf-8", function (err, content) {
        if (err) {
            return next(variations);
        }

        variations.common.content = content;
        next(variations);
    });
};