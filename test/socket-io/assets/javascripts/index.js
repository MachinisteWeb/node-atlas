var html = document.getElementsByTagName("html")[0],
    layout = document.getElementsByClassName("layout")[0];

// On associe sur le bouton l'action de communiquer avec le serveur en cliquant dessus.
function setServerRender() {
    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function () {
        NA.socket.emit("server-render", {
            lang: html.getAttribute("lang")
        });
    });
}

// On affecte l'action au bouton.
setServerRender();

// Quand le serveur répond après notre demande auprès de lui...
NA.socket.on("server-render", function (data) {

    // ...on met à jour le contenu...
    layout.innerHTML = data.render;

    // ...et ré-affectons l'action au bouton du nouveau contenu.
    setServerRender();
});