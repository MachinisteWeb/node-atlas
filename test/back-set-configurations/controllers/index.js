// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariation = function (params, mainCallback) {
    var variation = params.variation;

    // On prépare le fichier à afficher un fichier json.
    variation.routeParameters.headers = {
		"Content-Type": "application/json; charset=utf-8"
    };
    variation.content = JSON.stringify(variation, null, "    ");

    // On ré-injecte les modifications.
    mainCallback(variation);
};