// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (params, next) {
    var variations = params.variations;

    // On prépare le fichier à afficher un fichier json.
    variations.routeParameters.headers = {
		"Content-Type": "application/json; charset=utf-8"
    };
    variations.content = JSON.stringify(variations, null, "    ");

    // On ré-injecte les modifications.
    next(variations);
};