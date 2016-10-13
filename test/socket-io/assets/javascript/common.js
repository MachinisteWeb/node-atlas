window.website = window.website || {};

(function (publics) {
    "use strict";

    var privates = {},
        optionsSocket,
        body = document.getElementsByTagName("body")[0];

    optionsSocket = (body.getAttribute("data-subpath") !== "") ? { path: "/" + body.getAttribute("data-subpath") + ((body.getAttribute("data-subpath")) ? "/" : "") + "socket.io" } : undefined;
    publics.socket = io.connect((body.getAttribute("data-subpath") !== "") ? body.getAttribute("data-hostname") : undefined, optionsSocket);
}(website));

website[document.getElementsByTagName("body")[0].getAttribute("data-variation")].init();