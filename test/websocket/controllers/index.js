// On référence les actions de réponse et d'envoi globaux côté serveur.
// Ce code sera exécuté pour toute entrée Websocket entrante.
exports.setSockets = function () {
    var NA = this,
        io = NA.io;

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {

        // Quelqu'un nous informe que le texte à changé.
        socket.on("update-text", function (data) {

            // On informe les autres que le texte à changé.
            io.sockets.emit("update-text", data);
        });
    });
};