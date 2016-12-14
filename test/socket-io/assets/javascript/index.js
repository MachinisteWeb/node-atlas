window.website = window.website || {};

(function (publics) {
    "use strict";

    var html = document.getElementsByTagName("html")[0],
        body = document.getElementsByTagName("body")[0],
        layout = document.getElementsByClassName("layout")[0];

    function setServerRender() {
        var button = document.getElementsByTagName("button")[0];
        button.addEventListener("click", function () {
            NA.socket.emit("server-render", {
                lang: html.getAttribute("lang"),
                variation: body.getAttribute("data-variation")
            });
        });
    }

    publics.init = function () {
        setServerRender();
        NA.socket.on("server-render", function (data) {
            layout.innerHTML = data.render;
            setServerRender();
        });
    };
}(website.index = {}));