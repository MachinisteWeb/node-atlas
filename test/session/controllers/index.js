exports.changeVariations = function (next, locals, request) {

	// On affecte au valeur utilisable dans la view `designVersion`.
	// Par défaut on est en RWD.
	locals.designVersion = (request.session.designVersion !== undefined) ? request.session.designVersion : "rwd";

    next();
};

exports.setSockets = function () {
	var NA = this,
		io = NA.io;

	// Dès qu'on a un lien valide entre le client et notre serveur...
    io.sockets.on("connection", function (socket) {

        // ...rester à l'écoute de la demande « change-version »...
        socket.on("change-version", function (data) {
            var session = socket.request.session;

            // Si data vaut "rwd" (existe)...
            if (data.designVersion) {
            	// on le passe à rien
            	session.designVersion = "";
            } else {
            	// sinon on le passe à "rwd"
            	session.designVersion = "rwd";
            }

            // On sauvegarde le nouvel état de session.
            session.touch().save();
        });
    });
};