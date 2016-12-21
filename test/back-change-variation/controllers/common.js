// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté pour toute request HTTP, toute page confondue.
exports.changeVariations = function (params, next) {
    var variations = params.variations,
        request = params.request,
        response = params.response;

    // Ici on modifie les variables de variations.

    console.log(variations.common.titleWebsite); // "Titre du site"
    console.log(variations.specific.titlePage); // "Bienvenue"
    console.log(variations.specific.content); // "C'est la page d'accueil."

    if (request.query["title"]) {
        variations.specific.titlePage = variations.specific.titlePage + " " + request.query.title;
    }
    if (request.body["example"]) {
        variations.specific.content = request.body.example;
    }
    
    console.log(variations.common.titleWebsite); // "Titre du site"
    console.log(variations.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variations.specific.content); // "Ceci est un test"

    // On ré-injecte les modifications.
    next(variations);
};