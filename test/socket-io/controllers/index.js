// Intégralité des actions Websocket possible pour ce template.
// Utilisé non pas par « NodeAtlas » mais par « common.js » (voir fichier précédent).
exports.asynchrone = function (params) {
    var NA = this,
        io = params.io;

    // Dès qu'on a un lien valide entre le client et notre back...
    io.sockets.on("connection", function (socket) {
        // ...rester à l'écoute de la demande « create-article-button »...
        socket.on("server-render", function (data) {
            var variation = {};

            // On récupère les variations spécifiques dans la bonne langue.
            variation = NA.addSpecificVariation(data.variation + ".json", data.lang, variation);

            // On récupère les variations communes dans la bonne langue.
            variation = NA.addCommonVariation(data.lang, variation);
            
            // On récupère le fragment HTML depuis le dossier `componentsRelativePath` et on applique les variations.
            data.render = NA.newRender(data.variation + ".htm", variation);

            // Et on répond à tous les clients avec un jeu de donnée dans data.
            io.sockets.emit('server-render', data);
        });
    });
};