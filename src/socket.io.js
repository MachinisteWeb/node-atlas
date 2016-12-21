(function () {
    var optionsSocket = ("%urlRelativeSubPath%" !== "") ? { 
        path: "/" + "%urlRelativeSubPath%" + ("%urlRelativeSubPath%" ? "/" : "") + "socket.io" 
    } : undefined;
    
    window.NA = window.NA || {};
    window.NA.io = io;
    window.NA.socket = NA.io.connect(("%urlRelativeSubPath%" !== "") ? "%urlRoot%" : undefined, optionsSocket);
}());