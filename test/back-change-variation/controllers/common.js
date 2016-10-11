// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté pour toute request HTTP, toute page confondue.
exports.changeVariation = function (params, mainCallback) {
    var variation = params.variation,
        request = params.request,
        response = params.response;

    // Ici on modifie les variables de variations.

    console.log(variation.common.titleWebsite); // "Titre du site"
    console.log(variation.specific.titlePage); // "Bienvenue"
    console.log(variation.specific.content); // "C'est la page d'accueil."

    if (request.query["title"]) {
        variation.specific.titlePage = variation.specific.titlePage + " " + request.query.title;
    }
    if (request.body["example"]) {
        variation.specific.content = request.body.example;
    }
    
    console.log(variation.common.titleWebsite); // "Titre du site"
    console.log(variation.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variation.specific.content); // "Ceci est un test"

    // On ré-injecte les modifications.
    mainCallback(variation);
};