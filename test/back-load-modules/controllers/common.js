// On intervient avant que la phase de chargement des modules ne soit achevée.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.loadModules = function () {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Associations de chaque module pour y avoir accès partout.
    NA.modules.marked = require('marked');
};