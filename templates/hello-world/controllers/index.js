exports.changeVariations = function (params, next) {
	var variations = params.variations;

	variations.specific.helloWorld = variations.specific.helloWorld + "!!!!!!!!!!!!!!!!!!!!";

	next(variations);
};