// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (next, locals) {
    var $ = locals.virtualDom(); // Transformer la chaîne HTML en DOM Virtuel.

    // Après tous les h1 de la sortie HTML « dom »,
    $("h1").each(function () {
        var $this = $(this);

        // ...on créé une div,
        $this.after(
            // ... on injecte le contenu du h1 dans la div,
            $("<div>").html($this.html())
        );
        // ...et supprime le h1.
        $this.remove();
    });

    // On retourne les modifications pour qu'elles redeviennet une chaîne HTML.
    next($);
};