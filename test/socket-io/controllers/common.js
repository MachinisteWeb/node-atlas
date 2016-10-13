var privates = {};

// Chargement des modules pour ce site dans l'objet NodeAtlas.
exports.loadModules = function () {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Associations de chaque module pour y avoir accès partout.
    NA.modules.socketio = require('socket.io');
    NA.modules.cookie = require('cookie');
};

// Exemple d'utilisation de Socket.IO.
privates.socketIoInitialisation = function (socketio, NA, callback) {
    var optionIo = (NA.webconfig.urlRelativeSubPath) ? { path: NA.webconfig.urlRelativeSubPath + '/socket.io', secure: ((NA.webconfig.httpSecure) ? true : false) } : undefined,
        io = socketio(NA.server, optionIo),
        cookie = NA.modules.cookie,
        cookieParser = NA.modules.cookieParser;

    // Synchronisation des Sessions avec Socket.IO.
    io.use(function(socket, next) {
        var handshakeData = socket.request;

        // Fallback si les cookies ne sont pas gérés.
        if (!handshakeData.headers.cookie) {
            return next(new Error('Cookie de session requis.'));
        }

        // Transformation de la String cookie en Objet JSON.
        handshakeData.cookie = cookie.parse(handshakeData.headers.cookie);

        // Vérification de la signature du cookie.
        handshakeData.cookie = cookieParser.signedCookies(handshakeData.cookie, NA.webconfig.session.secret);

        // Garder à portée l'ID de Session.
        handshakeData.sessionID = handshakeData.cookie[NA.webconfig.session.key];

        // Accepter le cookie.
        NA.sessionStore.load(handshakeData.sessionID, function (error, session) {
            if (error || !session) {
                return next(new Error('Aucune session récupérée.'));
            } else {
                handshakeData.session = session;
                next();
            }
        });
    });

    // Suite.
    callback(io);
};

// Ajout d'évènements d'écoute pour un controller spécifique « index.js » (voir exemple dans le fichier d'après).
privates.socketIoEvents = function (io, NA) {
    var params = {};

    params.io = io;

    // Evènements pour la page index (voir exemple dans le fichier d'après).
    require('./index').asynchrone.call(NA, params);
};

// Configuration de tous les modules.
exports.setConfigurations = function (callback) {
    var NA = this,
        socketio = NA.modules.socketio;

    // Initialisation de Socket IO.
    privates.socketIoInitialisation(socketio, NA, function (io) {

        // Écoute d'action Socket IO.
        privates.socketIoEvents(io, NA);

        // Étapes suivante du moteur.
        callback();
    });
};