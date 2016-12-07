// Chargement des modules pour ce site dans l'objet NodeAtlas.
exports.setModules = function () {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Associations de chaque module pour y avoir accès partout.
    NA.modules.RedisStore = require('connect-redis');
};

// Vous permettre d'utiliser une DB de Session externe.
exports.setSessions = function (next) {
    var NA = this,
        session = NA.modules.session,
        RedisStore = NA.modules.RedisStore(session);

    NA.sessionStore = new RedisStore();

    next();
};