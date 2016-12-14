// Configuration de tous les modules.
exports.setConfigurations = function (callback) {
    var NA = this;

    NA.io.on('connection', function (socket) {
        console.log('A user connected');
        socket.on('disconnect', function () {
            console.log('A user disconnected');
        });
    });

    callback();
};


exports.changeVariation = function (params, callback) {
	var NA = this,
		variation = params.variation,
        session = params.request.session,
		sessionID = params.request.sessionID;

	session.name = "Bruno";
    variation.session = session;
	variation.sessionID = sessionID;
    console.log(variation.session);
	console.log(variation.sessionID);

	callback(variation);
};