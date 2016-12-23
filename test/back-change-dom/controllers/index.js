// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (next, locals) {
	var NA = this,
		cheerio = NA.modules.cheerio, // Récupération de jsdom pour parcourir le DOM avec jQuery.
     	$ = cheerio.load(locals.dom, { decodeEntities: false }); // On charge les données pour les manipuler comme un DOM.

    // On modifie tous les contenu des noeuds avec la classe `.title`,
    $(".title").text("Modification de Contenu");

    // On recrée une nouvelle sortie HTML avec nos modifications.
    locals.dom = $.html();

    // On passe à la suite.
    next();
};