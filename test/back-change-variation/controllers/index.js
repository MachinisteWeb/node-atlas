// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (params, next) {
    var variations = params.variations,
        request = params.request,
        response = params.response;

    // Ici on modifie les variables de variations.

    console.log(variations.common.titleWebsite); // "Titre du site"
    console.log(variations.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variations.specific.content); // "Ceci est un test"

    variations.common.titleWebsite = "C'est l'accueil, c'est tout.";
    variations.specific.content = "C'est l'accueil, c'est tout.";

    console.log(variations.common.titleWebsite); // "C'est l'accueil, c'est tout."
    console.log(variations.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variations.specific.content); // "C'est l'accueil, c'est tout."

    // On ré-injecte les modifications.
    next(variations);
};