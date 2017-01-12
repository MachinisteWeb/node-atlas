exports.changeVariations = function (next, locals) {
	var NA = this,
		error = new Error("Not Found");

    locals.message = error.message;
    locals.error = NA.express.get("env") === "development" ? error : {};

    next();
};