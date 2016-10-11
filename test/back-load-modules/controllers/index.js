// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariation = function (params, mainCallback) {
    var NA = this,
        variation = params.variation,
        marked = NA.modules.marked;

    variation.example = marked("I am using __markdown__.");

    // On ré-injecte les modifications.
    mainCallback(variation);
};