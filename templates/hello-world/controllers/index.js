/* jshint node: true */
exports.changeVariations = function (next, variations) {
	variations.specific.helloWorld = variations.specific.helloWorld + "!";

	next();
};