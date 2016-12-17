// On référence les actions de réponse et d'envoi globaux côté serveur.
// Ce code sera exécuté pour toute entrée Websocket entrante.
exports.setSockets = function () {
    var NA = this,
        io = NA.io;

    io.on('connection', function (socket) {
        console.log("Un onglet est ouvert.");
        socket.on('disconnect', function () {
            console.log("Un onglet est fermé.");
        });
    });
};