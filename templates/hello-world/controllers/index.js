exports.changeVariation = function (params, next) {
	var variation = params.variation;

	variation.specific.helloWorld = variation.specific.helloWorld + "!!!!!!!!!!!!!!!!!!!!";

	next(variation);
};