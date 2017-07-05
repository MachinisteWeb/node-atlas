exports.changeVariations = function (next, locals) {
    var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path;

    fs.readFile(path.join("assets/", NA.webconfig._content, "index.htm"), "utf-8", function (err, content) {
        if (err) {
            return next();
        }

        locals.common.content = content;
        next();
    });
};