// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariation = function (params, mainCallback) {
    var variation = params.variation,
        request = params.request,
        response = params.response;

    // Ici on modifie les variables de variations.

    console.log(variation.common.titleWebsite); // "Titre du site"
    console.log(variation.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variation.specific.content); // "Ceci est un test"

    variation.common.titleWebsite = "C'est l'accueil, c'est tout.";
    variation.specific.content = "C'est l'accueil, c'est tout.";

    console.log(variation.common.titleWebsite); // "C'est l'accueil, c'est tout."
    console.log(variation.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variation.specific.content); // "C'est l'accueil, c'est tout."

    // On ré-injecte les modifications.
    mainCallback(variation);
};