// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (params, next) {
    var NA = this,
        dom = params.dom,
        cheerio = NA.modules.cheerio, // Récupération de jsdom pour parcourir le DOM avec jQuery.
        $ = cheerio.load(dom, { decodeEntities: false }); // On charge les données pour les manipuler comme un DOM.

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

    // On recrée une nouvelle sortie HTML avec nos modifications.
    dom = $.html();

    // On réinjecte les modifications.
    next(dom);
};