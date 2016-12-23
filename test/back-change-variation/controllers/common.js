// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté pour toute request HTTP, toute page confondue.
exports.changeVariations = function (next, locals, request, response) {

    // Ici on modifie les variables de locals.

    console.log(locals.common.titleWebsite); // "Titre du site"
    console.log(locals.specific.titlePage); // "Bienvenue"
    console.log(locals.specific.content); // "C'est la page d'accueil."

    console.log(response.charset); // "utf-8"

    console.log("urlRootPath", locals.urlRootPath); // "http://localhost"
    console.log("urlSubPath", locals.urlSubPath); // "/example"
    console.log("urlBasePath", locals.urlBasePath); // "http://localhost/example"
    console.log("urlFilePath", locals.urlFilePath); // "/"
    console.log("urlQueryPath", locals.urlQueryPath); // "?title=Haeresis"
    console.log("urlPath", locals.urlPath); // "http://localhost/example/?title=Haeresis"

    if (request.query["title"]) {
        locals.specific.titlePage = locals.specific.titlePage + " " + request.query.title;
    }
    if (request.body["example"]) {
        locals.specific.content = request.body.example;
    }
    
    console.log(locals.common.titleWebsite); // "Titre du site"
    console.log(locals.specific.titlePage); // "Bienvenue Haeresis"
    console.log(locals.specific.content); // "Ceci est un test"

    // On passe à la suite modifications.
    next();
};