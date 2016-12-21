// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (params, next) {
    var NA = this,
        variations = params.variations,
        marked = NA.modules.marked;

    variations.example = marked("I am using __markdown__.");

    // On ré-injecte les modifications.
    next(variations);
};