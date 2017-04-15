(function () {
	var optionsSocket = ("%urlRelativeSubPath%" !== "") ? {
		path: "/" + "%urlRelativeSubPath%" + ("%urlRelativeSubPath%" ? "/" : "") + "socket.io"
	} : undefined;

	window.NA = window.NA || {};
	window.NA.isClient = true;
	window.NA.io = io;
	window.NA.socket = NA.io.connect(location.origin, (window.NA.optionsSocket) ? window.NA.optionsSocket : optionsSocket);
}());