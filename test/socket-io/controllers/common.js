// Configuration de tous les modules.
exports.setSockets = function () {
    var NA = this,
        io = NA.io;

    io.on('connection', function (socket) {
        console.log('A user connected');
        socket.on('disconnect', function () {
            console.log('A user disconnected');
        });
    });
};


exports.changeVariations = function (params, callback) {
	var variations = params.variations,
        session = params.request.session,
		sessionID = params.request.sessionID;

	session.name = "Bruno";
    variations.session = session;
	variations.sessionID = sessionID;
    console.log(variations.session);
	console.log(variations.sessionID);

	callback(variations);
};