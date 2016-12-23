// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (next, locals) {

    // On prépare le fichier à afficher un fichier json.
    locals.routeParameters.headers = {
		"Content-Type": "application/json; charset=utf-8"
    };
    locals.content = JSON.stringify(locals, null, "    ");

    // On passe à la suite.
    next();
};