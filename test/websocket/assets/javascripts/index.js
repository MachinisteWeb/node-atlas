var content = document.getElementsByClassName("content")[0],
    input = document.getElementsByClassName("input")[0];

// On alerte les autres de nos modifications.
input.addEventListener("keyup", function () {
    content.innerHTML = input.value;
    NA.socket.emit("update-text", {
        text: input.value
    });
});

// On récupère les modifications des autres.
NA.socket.on("update-text", function (data) {
    content.innerHTML = data.text;
    input.value = data.text;
});