// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (next, locals, request, response) {

    // Ici on modifie les variables de locals.

    console.log(locals.common.titleWebsite); // "Titre du site"
    console.log(locals.specific.titlePage); // "Bienvenue Haeresis"
    console.log(locals.specific.content); // "Ceci est un test"

    locals.common.titleWebsite = "C'est l'accueil, c'est tout.";
    locals.specific.content = "C'est l'accueil, c'est tout.";

    console.log(locals.common.titleWebsite); // "C'est l'accueil, c'est tout."
    console.log(locals.specific.titlePage); // "Bienvenue Haeresis"
    console.log(locals.specific.content); // "C'est l'accueil, c'est tout."

    // On passe à la suite.
    next();
};