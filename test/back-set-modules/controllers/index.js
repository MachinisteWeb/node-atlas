// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (next, locals) {
    var NA = this,
        marked = NA.modules.marked;

    locals.example = marked("I am using __markdown__.");

    // On passe à la suite.
    next();
};