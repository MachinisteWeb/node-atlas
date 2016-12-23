// Intégralité des actions Websocket possible pour ce template.
// Utilisé non pas par « NodeAtlas » mais par « common.js » (voir fichier précédent).
exports.setSockets = function () {
    var NA = this,
        io = NA.io;

    // Dès qu'on a un lien valide entre le client et notre back...
    io.sockets.on("connection", function (socket) {
        // ...rester à l'écoute de la demande « create-article-button »...
        socket.on("server-render", function (data) {
            var sessionID = socket.request.sessionID,
                session = socket.request.session,
                variations = {};

            console.log(session);
            console.log(sessionID);

            // On récupère les variations spécifiques dans la bonne langue.
            variations = NA.specific("index.json", data.lang, variations);

            // On récupère les variations communes dans la bonne langue.
            variations = NA.common(data.lang, variations);
            
            // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
            data.render = NA.render("partials/index.htm", variations);

            // Et on répond à tous les clients avec un jeu de donnée dans data.
            io.sockets.emit('server-render', data);
        });
    });
};