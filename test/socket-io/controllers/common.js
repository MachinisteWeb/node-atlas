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


exports.changeVariations = function (next, locals, request, response) {
	var session = request.session,
		sessionID = request.sessionID;

	session.name = "Bruno";
    locals.session = session;
	locals.sessionID = sessionID;
    console.log(locals.session);
	console.log(locals.sessionID);

	next();
};