exports.changeVariation = function (params, next) {
    var NA = this,
        fs = NA.modules.fs,
        variation = params.variation;

    fs.readFile("assets/" + NA.webconfig._content + variation.currentRoute.replace(".html", ".htm"), "utf-8", function (err, content) {
        if (err) {
            return next(variation);
        }

        variation.common.content = content;
        next(variation);
    });
};