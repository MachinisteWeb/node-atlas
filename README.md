# node-atlas #

Version : 1.0 (Beta)

**For an international version of this README.md, [follow this link](https://haeresis.github.com/NodeAtlas/doc/).**





## Avant-propos ##

NodeAtlas est une application réalisée en JavaScript et tournant avec [Node.js](http://nodejs.org/). Elle permet trois choses :

- Créer et maintenir un ensemble d'assets HTML/CSS/JavaScript pour les fournir à des développeurs Back-end.
- Créer et maintenir des sites multilingues sans Back-end.
- Développer des sites ou des applications Node.js multilingues de toutes tailles.



### Exemples de réalisations avec NodeAtlas ###

L'outil est encore en développement et je l'expérimente petit à petit avec mes propres sites.

- [Génération et maintenance de maquette HTML](https://github.com/Haeresis/ResumeAtlas/).
- [Maintenance de site HTML (sans Back-end)](https://github.com/Haeresis/ResumeAtlas/).
- [Site Node.js avec Websocket et PopState](https://github.com/Haeresis/BookAtlas/).
- [Site Node.js avec base MongoDB et Redis](https://github.com/Haeresis/BlogAtlas/).
- [Exemple Node.js de modification de contenu live sans Back-office](https://github.com/Haeresis/EditAtlas/).
- [Simple Serveur Web pour un dossier](https://github.com/Haeresis/SimpleAtlas/).
- [Utilisation du préprocesseur Less pour des Framework non invasif dans le HTML](https://github.com/Haeresis/LessAtlas/).



### Table des matières ###

- [Avant-propos](#avant-propos)
 - [Exemple de réalisations avec NodeAtlas](#exemples-de-r%C3%A9alisations-avec-nodeatlas)
 - [Table des matières](#table-des-mati%C3%A8res)
 - [Roadmap d'avancement du développement](#roadmap-davancement-du-d%C3%A9veloppement)
 - [Documentation](#documentation)
- [Installation](#installation)
- [Commencer avec NodeAtlas](#commencer-avec-nodeatlas)
 - [Ensemble de fichiers](#ensemble-de-fichiers)
 - [Configuration minimale](#configuration-minimale)
 - [Lancer le site avec NodeAtlas](#lancer-le-site-avec-nodeatlas)
- [Différentes configurations du webconfig.json](#diff%C3%A9rentes-configurations-du-webconfigjson)
 - [Plusieurs pages](#plusieurs-pages)
 - [Raccourci de template](#raccourci-de-template)
 - [Héberger des images, polices, CSS, JS, etc.](#h%C3%A9berger-des-images-polices-css-js-etc)
 - [Gérer des inclusions pour éviter la redondance du code](#g%C3%A9rer-des-inclusions-pour-%C3%A9viter-la-redondance-du-code)
 - [Gérer des variations au sein d'un même template](#g%C3%A9rer-des-variations-au-sein-dun-m%C3%AAme-template)
 - [Gérer le multilingue](#g%C3%A9rer-le-multilingue)
 - [Utiliser NodeAtlas pour générer des assets HTML](#utiliser-nodeatlas-pour-g%C3%A9n%C3%A9rer-des-assets-html)
 - [Utiliser NodeAtlas pour faire tourner un site (partie Back-end)](#utiliser-nodeatlas-pour-faire-tourner-un-site-partie-back-end)
 - [Génerer des fragments de page par retour AJAX/Websocket](#generer-des-fragments-de-page-par-retour-ajax-websocket)
 - [Changer les paramètres d'url](#changer-les-param%C3%A8tres-durl)
 - [Créer ses propres variables de webconfig](#cr%C3%A9er-ses-propres-variables-de-webconfig)
 - [Gérer le routage (Url Rewriting)](#g%C3%A9rer-le-routage-url-rewriting)
 - [Gérer les pages inexistantes](#g%C3%A9rer-les-pages-inexistantes)
 - [Gérer les redirections](#g%C3%A9rer-les-redirections)
 - [Faire tourner le site en HTTPs](#faire-tourner-le-site-en-https)
 - [Minifier les CSS/JS](#minifier-les-cssjs)
 - [Générer les CSS avec Less](#g%C3%A9n%C3%A9rer-les-css-avec-less)
 - [Optimiser les Images](#optimiser-les-images)
 - [Injecter du CSS inline pour maintenir des assets Email](#injecter-du-css-inline-pour-maintenir-des-assets-email)
 - [Autoriser/Interdire les demandes GET/POST](#autoriserinterdire-les-demandes-getpost)
 - [Changer les paramètres des Sessions](#changer-les-param%C3%A8tres-des-sessions)
 - [Stockage externe des Sessions](#stockage-externe-des-sessions)
 - [Changer les chevrons <% %> du moteur de template](#changer-les-chevrons---du-moteur-de-template)
 - [Changer l'url final des hostname et port d'écoute](#changer-lurl-final-des-hostname-et-port-d%C3%A9coute)
 - [Générer les urls dynamiquement](#g%C3%A9n%C3%A9rer-les-urls-dynamiquement)
- [CLI / Commandes de lancement](#cli-commandes-de-lancement)
 - [--directory](#--directory)
 - [--webconfig](#--webconfig)
 - [--browse](#--browse)
 - [--httpPort](#--httpport)
 - [--generate](#--generate)
- [API / NodeAtlas comme module npm](#api-nodeatlas-comme-module-npm)
- [NodeAtlas comme simple serveur web](#nodeatlas-comme-simple-serveur-web)
- [Faire tourner NodeAtlas sur serveur](#faire-tourner-nodeatlas-sur-serveur)
 - [Dans un environnement Windows Server avec iisnode](#dans-un-environnement-windows-server-avec-iisnode)
 - [Dans un environnement Unix avec forever](#dans-un-environnement-unix-avec-forever)
 - [Proxy](#proxy)
- [À propos de l'architecture de NodeAtlas](#%C3%80-propos-de-larchitecture-de-nodeatlas)



### Roadmap d'avancement du développement ###

- Fait
 - Lancement d'un serveur Express.
 - Génération live de maquette HTML.
 - Génération complète de maquette HTML.
 - Fichier de configuration (Liste des pages avec Url Rewriting).
 - Support d'une partie Back-end possible (Controllers / Models).
 - Exemple d'utilisation de BDD possible (MySql / MongoDB / etc.).
 - Support des Sessions.
 - Exemple de Socket.IO avec Handshake.
 - Support des middlewares de Express.
 - Support des variables personnelles de webconfig.
 - Migration Connect 2.x vers Connect 3.x.
 - Migration Express 3.x vers Express 4.x.
 - Retrait de Connect 3.x.
 - Exemple de reverse-proxy pour plusieurs instances sur port 80.
 - Lancer NodeAtlas avec un require() depuis un fichier de code.
 - Installer automatiquement NodeAtlas depuis npm.
 - Minification de CSS/JS à la génération.
 - Agrégation de fichier CSS/JS via des Bundles.
 - Support d'une BDD de Session (Redis / MongoDB).
 - Lancement rapide sans « webconfig » juste en tant que simple serveur web.
 - Routage partagé via un fichier externe.
 - Bundle partagé via un fichier externe.
 - Documentation de l'API (documentation JSDoc du fichier node-atlas.js)
 - Exemple de Socket.IO 1.0 avec Handshake.
 - Traduction du fichier README.md en anglais.
 - Créer une commande `nodeatlas` en installation globale.
 - Support Less.
 - Support HTTPs (WSs aussi).
 - Compression des images.
 - Injection automatique de feuille CSS en style inline (pour les maquettes email).
 - Migration EJS 1.x vers EJS 2.x.

- À venir et avec votre aide !
 - Tests globaux sur divers projets.
 - Relecture et tests du README fr.
 - Amélioration du README en.
 - Création d'un site EN/FR dédié au projet avec NodeAtlas.
 - Passage en 1.0.0.



### Documentation ###

En complément de ce README (Fr), vous avez également accès au,
- [tl;dr](http://blog.lesieur.name/nodeatlas-le-framework-nodejs-mvc2-oriente-front-end/) (Fr),
- [Explications de code](https://github.com/Haeresis/NodeAtlas/blob/master/node-atlas.js) (En) et au,
- [détail des fonctions publiques de l'objet NA](http://haeresis.github.io/NodeAtlas/doc/namespaces.list.html) (En).





## Installation ##

Il y a plusieurs solutions pour installer Node-Atlas :

- Télécharger NodeAtlas depuis le site officiel [NodeAtlas](https://github.com/Haeresis/NodeAtlas).

   _Une fois téléchargé, dézippez **NodeAtlas** dans le dossier qui vous conviendra._

   **Lancer au moins une fois NodeAtlas à la ligne de commande `\> node </path/to/>node-atlas/node-atlas.js`, pour installer les _node_modules_.**

- `npm install node-atlas` (recommandé pour un [usage sous forme de module](#nodeatlas-comme-module-npm) dans un projet).

   _Ceci installera **NodeAtlas** dans le dossier `node_modules/node-atlas` du dossier d'execution de la commande._

- `npm install -g node-atlas` (recommandé pour un [usage sous forme de module](#nodeatlas-comme-module-npm) dans beaucoup de projet ou pour un usage à la ligne de commande).

   _Ceci installera **NodeAtlas** dans le dossier `node_modules/node-atlas` global._

- Cloner le répertoire depuis [GitHub](https://github.com/Haeresis/NodeAtlas/).

   _Ceci installera **NodeAtlas** dans le dossier d'accueil du clonage._

   **Lancez au moins une fois NodeAtlas à la ligne de commande `\> node </path/to/>node-atlas/node-atlas.js`, pour installer les _node_modules_.**





## Commencer avec NodeAtlas ##

### Ensemble de fichiers ###

Après avoir installé NodeAtlas quelque part sur votre machine, créez-vous un ensemble de fichiers représentant un site n'importe où ailleurs comme la structure ci-dessous.


```
site-hello-world/
— templates/
—— index.htm
— webconfig.json
```

Voici le fichier « /site-hello-world/templates/index.htm » :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
    </head>
    <body>
        <div>Ceci est un Hello World !</div>
    </body>
</html>
```

et ci-après, le fichier « /site-hello-world/webconfig.json ».

### Configuration minimale ###

Vous pouvez faire tourner une page simple avec la configuration minimale du « webconfig.json » ci-dessous

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

équivalente à

```js
{ "routes": { "/": "index.htm" } }
```



### Lancer le site avec NodeAtlas ###

#### À la ligne de commande en appelant le script ####

Placez-vous avec un invité de commande dans le dossier « /site-hello-world/ » et exécutez la commande suivante.

```
\> node </path/to/>node-atlas/node-atlas.js
```

À votre première exécution, NodeAtlas installera tous les « node_modules » nécessaires à son fonctionnement (si vous avez téléchargé hors npm).

Ré-exécutez.

```
\> node </path/to/>node-atlas/node-atlas.js
```

Vous aurez accès à votre « Hello World » à la page *http://localhost/* dans un navigateur.


#### Avec un executable sur votre OS ####

**Si vous avez installé NodeAtlas avec `npm install -g node-atlas`** vous pouvez également utiliser la commande `nodeatlas`. `nodeatlas` est un raccourci de `node </path/to/>node-atlas/node-atlas.js`.

Placez-vous toujours avec votre invité de commande dans le dossier « /site-hello-world/ » et exécutez la commande suivante.

```
\> nodeatlas
```

*Note : *si la commande `nodeatlas` n'est pas disponible sous unix après installation (erreur quand vous la tapez), c'est surement à cause d'un problème de droit. Si vous êtes root la commande `chown -R root:root /usr/local/bin/` avant de retaper `npm install -g node-atlas` solutionnera votre problème, sinon la utilisez la commande `sudo npm install -g node-atlas`.*


#### Via un fichier JavaScript ####

Vous pouvez également utiliser NodeAtlas comme un module npm.

*server.js*

```javascript
var nodeAtlas = require("node-atlas");

nodeAtlas.run();
```

```
\> node server.js
```





## Différentes configurations du webconfig.json ##

### Plusieurs pages ###

Ci-dessous un exemple de configuration.

```js
{
    "templatesRelativePath": "templates",
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/member.html": {
            "template": "member.htm"
            "postSupport": false,
        },
        "/member-without-extension/": {
            "template": "member.htm"
            "getSupport": false,
        },
        "about.html": {
            "template": "about.htm"
        },
        "/error.html": {
            "template": "error.htm",
            "statusCode": 404,
            "mimeType": "text/plain"
        }
    }
}
```

Pour faire tourner cet ensemble de fichier :

```
templates/
— index.htm
— member.htm
— error.htm
webconfig.json
```

aux adresses :

- *http://localhost/* (répond à la racine)
- *http://localhost/member.html* (ne répondra pas si demandée en POST)
- *http://localhost/member-without-extension/* (ne répondra pas si demandée en GET)
- *http://localhost/error.html* (renvoi du contenu plein texte (sans balise) avec une erreur 404)

*Note : Si* ***templatesRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des templates est bien* ***templates***. ***templatesRelativePath*** *est donc utile seulement pour changer le nom/chemin du répertoire.*



### Raccourci de template ###

La configuration ci-dessous est équivalente à la configuration de la section juste au dessus

```js
{
    "templatesRelativePath": "templates",
    "routes": {
        "/": "index.htm",
        "/member.html": {
            "template": "member.htm"
            "postSupport": false,
        },
        "/member-without-extension/": {
            "template": "member.htm"
            "getSupport": false,
        },
        "about.html": "about.htm",
        "/error.html": {
            "template": "error.htm",
            "statusCode": 404,
            "mimeType": "text/plain"
        }
    }
}
```

car

```js
"about.html": "about.htm",
```

est un raccourci de

```js
"about.html": {
    "template": "about.htm"
}
```

Évidemment ce raccourci ne sert que si `template` est le seul paramètre à déclarer de la route.



### Héberger des images, polices, CSS, JS, etc. ###

Vous pouvez également héberger tout un tas de fichier sur votre site dans un dossier public. Par exemple avec cette configuration :

```js
{
    "assetsRelativePath": "assets"
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et cet ensemble de fichiers :

```
assets/
— stylesheets/
—— common.css
— javascript/
—— common.js
— media/
—— images/
——— logo.png
templates/
— index.htm
webconfig.json
```

vous aurez accès aux adresses :

- *http://localhost/*
- *http://localhost/stylesheets/common.css*
- *http://localhost/javascript/common.js*
- *http://localhost/media/images/logo.png*

*Note : Si* ***assetsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier public est bien* ***assets***. ***assetsRelativePath*** *est donc utile seulement pour changer le nom/chemin du répertoire.*



### Gérer des inclusions pour éviter la redondance du code ###

Vous pouvez segmenter vos codes HTML afin de ne pas répéter le code redondant comme par exemple les parties « head » et « foot » ou tout autre fragment de code :

```js
{
    "componentsRelativePath": "components/"
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/liste-des-membres/": {
            "template": "members.htm"
        }
    }
}
```

avec les fichiers suivants :

```
assets/
— stylesheets/
—— common.css
— javascript/
—— common.js
components/
— head.htm
— foot.htm
templates/
— index.htm
— members.htm
webconfig.json
```

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>

        <link type="text/css" rel="stylesheet" href="stylesheets/common.css" media="all" />
    </head>
    <body>
```

*components/foot.htm*

```html
        <script async type="text/javascript" src="javascript/common.js"></script>
    </body>
</html>
```

*templates/index.htm*

```html
    <%- include('head.htm') %>

    <div>
        <h1>Bienvenue</h1>
        <p>C'est la page d'accueil.</p>
    </div>

    <%- include('foot.htm') %>
```

*templates/members.htm*

```html
    <%- include('head.htm') %>

    <div>
        <h1>Liste des members</h1>
        <p>C'est la page des membres.</p>
    </div>

    <%- include('foot.htm') %>
```

vous aurez accès aux adresses :

- *http://localhost/*
- *http://localhost/liste-des-membres/*

*Note : Si* ***componentsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des includes est bien* ***components***. ***componentsRelativePath*** *est donc utile seulement pour changer le nom/chemin de répertoire.*



### Gérer des variations au sein d'un même template ###

Il est possible avec le même template et les mêmes includes de générer des pages au contenu différent (utile en mode génération d'assets HTML). Activer les variations avec la configuration suivante :

```js
{
    "commonVariation": "common.json",
    "variationsRelativePath": "variations",
    "routes": {
        "/": {
            "template": "template.htm",
            "variation": "index.json",
        },
        "/liste-des-membres/": {
            "template": "template.htm",
            "variation": "members.json",
        }
    }
}
```

avec les fichiers suivants :

```
assets/
— stylesheets/
—— common.css
—— home.css
—— members.css
— javascript/
—— common.js
—— home.js
—— members.js
components/
— head.htm
— foot.htm
variations/
— common.json
— index.json
— members.json
templates/
— template.htm
webconfig.json
```

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title><%= specific.titlePage %></title>

        <link type="text/css" rel="stylesheet" href="stylesheets/<%= common.classCssCommon %>.css" media="all" />
        <link type="text/css" rel="stylesheet" href="stylesheets/<%= specific.classPage %>.css" media="all" />
    </head>
    <body class="<%= specific.classPage %>">
```

*components/foot.htm*

```html
        <script async type="text/javascript" src="javascript/<%= common.classJsCommon %>.js"></script>
    </body>
</html>
```

*templates/template.htm*

```html
    <%- include('head.htm') %>

    <div class="title"><%= common.titleWebsite %></div>

    <div>
        <h1><%= specific.titlePage %></h1>
        <%- specific.content %>
    </div>

    <%- include('foot.htm') %>
```

*variations/common.json*

```js
{
    "titleWebsite": "Titre du site",
    "classCssCommon": "common",
    "classJsCommon": "common"
}
```

*variations/index.json*

```js
{
    "titlePage": "Bienvenue",
    "classPage": "index",
    "content": "<p>C'est la page d'accueil.</p>"
}
```

*variations/members.json*

```js
{
    "titlePage": "Liste des membres",
    "classPage": "members",
    "content": "<p>C'est la page des membres.</p>"
}
```

vous aurez accès aux adresses :

- *http://localhost/*
- *http://localhost/liste-des-membres/*

*Note : Si* ***variationsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des variations est bien* ***variations***. ***variationsRelativePath*** *est donc utile seulement pour changer le nom/chemin de répertoire.*



### Gérer le multilingue ###

#### Toutes les langues sur le même site ####

Sur le même principe, les variations peuvent être utilisées pour créer la même page, mais dans des langues différentes :

```js
{
    "languageCode": "en-gb",
    "variationsRelativePath": "languages",
    "routes": {
        "/": {
            "template": "landing.htm",
            "variation": "landing.json"
        },
        "/home/": {
            "template": "home.htm",
            "variation": "home.json"
        },
        "/accueil/": {
            "template": "home.htm",
            "variation": "home.json",
            "languageCode": "fr-fr"
        }
    }
}
```

*Note : Dans cet exemple j'ai décidé de me passer d'un fichier de variation commune, car je n'ai pas précisé de* ***commonVariation***. *J'ai également totalement arbitrairement décidé de renommer mon dossier* ***variations*** *en* ***languages***.

avec les fichiers suivants :

```
components/
— head.htm
— foot.htm
languages/
— landing.json
— en-gb
—— home.json
— fr-fr
—— home.json
templates/
— landing.htm
— home.htm
webconfig.json
```

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="<%= languageCode %>">
    <head>
        <meta charset="utf-8" />
        <title><%= specific.titlePage %></title>
    </head>
    <body class="<%= specific.classPage %>">
```

*components/foot.htm*

```html
    </body>
</html>
```

*templates/landing.htm*

```html
    <%- include('head.htm') %>

    <select>
        <% for (var i = 0; i < specific.selectLabel.length; i++) { %>
        <option><%= specific.selectLabel[i] %></option>
        <% } %>
    </select>

    <%- include('foot.htm') %>
```

*templates/home.htm*

```html
    <%- include('head.htm') %>

    <div>
        <h1><%= specific.titlePage %></h1>
        <%- specific.content %>
    </div>

    <%- include('foot.htm') %>
```

*languages/landing.json*

```js
{
    "titlePage": "Landing",
    "classPage": "landing",
    "selectLabel": [
        "English",
        "Français"
    ]
}
```

*languages/en-gb/home.json*

```js
{
    "titlePage": "Welcome",
    "classPage": "home",
    "content": "<p>This is a home page.</p>"
}
```

*languages/fr-fr/home.json*

```js
{
    "titlePage": "Bienvenue",
    "classPage": "home",
    "content": "<p>C'est la page d'accueil.</p>"
}
```

vous aurez accès aux adresses :

- *http://localhost/*
- *http://localhost/home/*
- *http://localhost/accueil/*

*Note : Par défaut c'est le* ***languageCode*** *racine qui conditionne la langue d'affichage du site. Cependant, spécifiquement par page on peut changer la langue avec également le* ***languageCode****. *Il faut également savoir que dès que le site ou une page à un* ***languageCode*** *dans la configuration, ses fichiers de variations doivent être placées dans un sous répertoire portant le nom du* ***languageCode***.


#### Utiliser seulement les variations avec le multilingue actif ####

Vous avez peut-être constaté dans l'exemple précédent que le fichier `landing.json` n'était pas dans le dossier `en-gb/` ou `fr-fr/`. Cela est tout à fait possible et signifie qu'il sera utilisé dans les langues qui ne le possèdent pas dans leur dossier.

Aussi, quand un `languageCode` est précisé, NodeAtlas part d'abord chercher la valeur dans le fichier du dossier correspondant. Si celle-ci n'y ai pas, alors il part la chercher dans le dossier parent (celui utilisé en standard pour les variations sans multilingue).

Cela va vous permettre par exemple de manager la langue maître directement dans le dossier de variation. Ainsi avec l'exemple suivant :

```
...
variations/
— common.json
— home.json
— fr-fr
—— common.json
—— home.json
...
```

vous pouvez

- gérer la version `en-gb` directement à la racine de `variations/` (comme NodeAtlas ne trouve rien dans `en-gb` il utilise alors les valeurs des fichiers racines) et
- gérer la version `fr-fr` dans le dossier `fr-fr/`,

ainsi, si une phrase n'est pas encore traduite dans un fichier `fr-fr`, au lieu de renvoyer une erreur, NodeAtlas renverra la version racine, soit la version `en-gb`.


#### À chaque langue sa configuration ####

Vous pouvez également décider de faire tourner chaque langue dans un « webconfig.json » différent. Avec l'ensemble de fichier suivant :

```
components/
— head.htm
— foot.htm
variations/
— landing.json
— en-gb
—— home.json
—— members.json
— fr-fr
—— home.json
—— members.json
templates/
— landing.htm
— home.htm
— members.htm
webconfig.json
webconfig.en-gb.json
webconfig.fr-fr.json
```

vous pourriez avoir les « webconfig.json » suivant :

*webconfig.json*

```js
{
    "routes": {
        "/": {
            "template": "landing.htm",
            "variation": "landing.json"
        }
    }
}
```

*webconfig.en-gb.json*

```js
{
    "httpPort": 81,
    "urlRelativeSubPath": "english",
    "languageCode": "en-gb",
    "routes": {
        "/": {
            "template": "home.htm",
            "variation": "home.json"
        },
        "/members-list/": {
            "template": "members.htm",
            "variation": "members.json"
        }
    }
}
```

*webconfig.fr-fr.json*

```js
{
    "httpPort": 82,
    "urlRelativeSubPath": "francais",
    "languageCode": "fr-fr",
    "routes": {
        "/": {
            "template": "home.htm",
            "variation": "home.json"
        },
        "/liste-des-membres/": {
            "template": "members.htm",
            "variation": "members.json"
        }
    }
}
```

et avoir accès aux adresses :

- *http://localhost/*
- *http://localhost:81/english/*
- *http://localhost:81/english/*
- *http://localhost:81/english/members-list/*
- *http://localhost:82/francais/*
- *http://localhost:82/francais/liste-des-membres/*

Il est ensuite possible de faire du reverse proxy avec [Bouncy](#proxy) (par exemple) pour ramener l'ensemble des urls sur le port 80 afin d'obtenir :

- *http://www.website.ext/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/members-list/*
- *http://www.website.ext/francais/*
- *http://www.website.ext/francais/liste-des-membres/*



### Utiliser NodeAtlas pour générer des assets HTML ###

#### Générer des assets HTML ####

Avec la configuration suivante il est possible de générer des assets HTML du rendu de chaque page dans un fichier associé. Le fichier sera (re)créé à chaque affichage de la page dans votre navigateur.

```js
{
    "htmlGenerateBeforeResponse": true,
    "generatesRelativePath": "generates",
    "routes": {
        "/": {
            "template": "index.htm",
            "generate": "/index.html"
        },
        "/liste-des-membres/": {
            "template": "members.htm",
            "generate": "/members/list.html"
        },
        "/liste-des-membres/?foo=bar": {
            "template": "members.htm",
            "generate": false
        },
        "/no/generate/property/": {
            "template": "members.htm"
        }
    }
}
```

et l'ensemble de fichiers suivant :

```
{
assets/
— stylesheets/
—— common.css
— javascript/
—— common.js
generates/
templates/
— index.htm
— members.htm
webconfig.json
}
```

on peut créer physiquement les assets :

```
{
generates/
— index.html
— members/
—— list.html
— no/
—— generate/
——— property <== Ceci est un fichier
templates/
— index.htm
— members.htm
webconfig.json
}
```

en se rendant aux adresses :

- *http://localhost/*
- *http://localhost/liste-des-membres/*
- *http://localhost/no/generate/property/*

*Note : Il n'y a pas de génération pour « /liste-des-membres/?foo=bar » car `generate` est à `false`. Utilisez cette valeur pour ignorer des routes à la génération.*

La génération s'enclenche quand on affiche la page uniquement parce que ***htmlGenerateBeforeResponse*** existe et est à ***true***. S'il est passé à ***false*** (ou enlevé) le seul moyen de générer toutes les pages du site sera via la commande `node </path/to/>node-atlas/server.js --generate` qui génèrera toutes les pages d'un coup uniquement si le dossier de `generatesRelativePath` existe. Bien entendu dans tous les cas cette commande marche et permet de régénérer toutes les pages suite à un changement telle qu'une modification dans un composant appelé sur toutes les pages.

De plus avec `--generate`, l'intégralité du dossier `assetsRelativePath` (dossier des fichiers publiques) sera copié dans le dossier `generatesRelativePath` si les deux dossier n'ont pas un chemin identique, et que `generatesRelativePath` existe. Cela vous permet réellement d'obtenir en sortie dans le dossier de génération des pages « stand-alone » avec l'intégralité des fichiers auxquelles elles font appel (CSS / JS / Images, etc.).

Vous pouvez également désactiver la génération, même si un dossier `generatesRelativePath` existe dans les dossiers, avec `htmlGenerateEnable` à `false`.

*Note : Si* ***generatesRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des générations est bien* ***generates/***. ***generatesRelativePath*** *est donc utile seulement pour changer le nom/chemin répertoire.*


#### Générer un site sans partie serveur ####

Il est également possible de manager la création d'un site en simple page HTML avec la configuration suivante :

```js
{
    "languageCode": "fr-fr",
    "enableIndex": true,
    "htmlGenerateBeforeResponse": true,
    "generatesRelativePath": "../HTML/",
    "assetsRelativePath": "../HTML/",
    "routes": {
        "/cv.html": {
            "template": "index.htm",
            "variation": "index.json"
        },
        "/en/cv.html": {
            "template": "index.htm",
            "variation": "index.json",
            "languageCode": "en"
        }
    }
}
```

et l'ensemble de fichiers suivant :

```
HTML/
— stylesheets/
—— common.css
— javascript/
—— common.js
engine/
— variations/
—— fr-fr/
——— index.json
—— en/
——— index.json
— templates/
—— index.htm
— webconfig.json
```

À l'adresse *http://localhost/* s'affichera la liste des pages composants votre site (grâce à **enableIndex** à **true**).

Il ne restera plus qu'à, une fois votre travail terminé, admirer votre site HTML dans le dossier :

```
HTML/
— stylesheets/
—— common.css
— javascript/
—— common.js
— cv.html
— en/
—— cv.html
```



### Utiliser NodeAtlas pour faire tourner un site (partie Back-end) ###

Vous pouvez soit utiliser un contrôleur unique pour tout le site et/ou également des contrôleurs par template et variation.

Pour le contrôleur maître, utilisez par exemple cette configuration :

```js
{
    "commonController": "common.js",
    "controllersRelativePath": "controllers",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json"
        },
        "/categories/": {
            "template": "categories.htm",
            "variation": "categories.json"
        }
    }
}
```

avec cet ensemble de fichier

```
variations/
— index.json
— categories.json
controllers/
— common.js
models/
— Article.js
— Category.js
templates/
— index.htm
— categories.htm
webconfig.json
```

Et le fichier « common.js » contenant par exemple :

- De quoi charger des modules supplémentaires à NodeAtlas.
- De quoi configurer les modules supplémentaires.

```js
// Création d'un objet global au fichier.
var website = {};



/**********************/
/* Chargement modules */
/**********************/

(function (publics) {
    "use strict";

    // Chargement des modules pour ce site dans l'objet NodeAtlas.
    publics.loadModules = function (NA) {
        // Associations de chaque module pour y avoir accès partout.
        NA.modules.cookie = require('cookie');
        NA.modules.mongoose = require('mongoose');

        // Aller chercher un module spécifiquement dans le `node_modules` du site web.
        NA.modules.socketio = require(NA.websiteModulesPath + 'socket.io');

        // Aller chercher un module spécifiquement dans le `node_modules` du moteur NodeAtlas.
        NA.modules.ejs = require(NA.nodeAtlasModulesPath + 'ejs.io');

        // Ré-injection de l'objet « NodeAtlas » surchargé dans le moteur.
        return NA;
    };

}(website));



/*****************************/
/* Configuration des modules */
/*****************************/

(function (publics) {
    "use strict";

    var privates = {};

    // Exemple d'utilisation de MongoDB et Mongoose.
    privates.mongooseInitialization = function (mongoose, callback) {
        // Connexion à la base « blog ».
        mongoose.connect('mongodb://127.0.0.1:27017/blog', function (error) {
            if (error) {
                console.log("La base '" + address + "' n'est pas accessible.");
                process.kill(process.pid);
            };

            // Suite.
            callback(mongoose);
        });

        // Gestion de connexion.
        mongoose.connection.on('error', function (error) {
            console.log('Erreur pour la connexion par défaut à Mongoose : ' + error);
        });

        // Gestion des déconnexion.
        mongoose.connection.on('disconnected', function () {
            console.log('Déconnexion de Mongoose.');
        });
        process.on('SIGINT', function (error) {
            mongoose.connection.close(function () {
                console.log("Déconnexion de Mongoose en raison de l'arrêt de l'app.");
                process.exit(0);
            });
        });
    };

    // Mise à disposition des Schémas Mongoose.
    privates.mongooseSchemas = function (mongoose) {
        publics.schema = {};

        // Chargement des Schémas.
        publics.schema.article = require('../models/Article');
        publics.schema.category = require('../models/Category');

        // Mise à disposition des Schémas.
        mongoose.model('article', website.schema.article, 'article');
        mongoose.model('category', website.schema.category, 'category');
    };

    // Exemple d'utilisation de Socket.IO.
    privates.socketIoInitialisation = function (socketio, NA, callback) {
        var optionIo = (NA.webconfig.urlRelativeSubPath) ? { path: NA.webconfig.urlRelativeSubPath + '/socket.io' } : undefined,
            io = socketio(NA.server, optionIo),
            cookie = NA.modules.cookie,
            cookieParser = NA.modules.cookieParser;

        // Synchronisation des Sessions avec Socket.IO.
        io.use(function(socket, next) {
            var handshakeData = socket.request;

            // Fallback si les cookies ne sont pas gérés.
            if (!handshakeData.headers.cookie) {
                return next(new Error('Cookie de session requis.'));
            }

            // Transformation de la String cookie en Objet JSON.
            handshakeData.cookie = cookie.parse(handshakeData.headers.cookie);

            // Vérification de la signature du cookie.
            handshakeData.cookie = cookieParser.signedCookies(handshakeData.cookie, NA.webconfig.session.secret);

            // Garder à porté l'ID de Session.
            handshakeData.sessionID = handshakeData.cookie[NA.webconfig.session.key];

            // Accepter le cookie.
            NA.sessionStore.load(handshakeData.sessionID, function (error, session) {
                if (error || !session) {
                    return next(new Error('Aucune session récupérée.'));
                } else {
                    handshakeData.session = session;
                    next();
                }
            });
        });

        // Suite.
        callback(io);
    };

    // Ajout d'évênements d'écoute pour un controller spécifique « index.js » (voir exemple dans le fichier d'après).
    privates.socketIoEvents = function (io, NA) {
        var params = {};

        params.io = io;
        params.NA = NA;

        // Évênements pour la page index (voir exemple dans le fichier d'après).
        require('./index').asynchrone(params);
    };

    // Configuration de tous les modules.
    publics.setConfigurations = function (NA, callback) {
        var mongoose = NA.modules.mongoose,
            socketio = NA.modules.socketio;

        // Initialisation de Mongoose.
        privates.mongooseInitialization(mongoose, function (mongoose) {

            // Injection de Schémas dans Mongoose.
            privates.mongooseSchemas(mongoose);

            // Initialisation de Socket IO.
            privates.socketIoInitialisation(socketio, NA, function (io) {

                // Écoute d'action Socket IO.
                privates.socketIoEvents(io, NA);

                // Ré-injection de l'objet « NodeAtlas » surchargé dans le moteur.
                callback(NA);
            });
        });

    };

}(website));



/*******************************/
/* Interception des Variations */
/*******************************/

(function (publics) {
    "use strict";

    // On intervient juste avant l'assemblage complet EJS.
    publics.changeVariation = function (params, mainCallback) {
        var variation = params.variation;

        // Ici on modifie les variables de variations.
        // voir exemple dans le fichier d'après.

        // On ré-injecte les modifications.
        mainCallback(variation);
    };

}(website));



/***********************************************************/
/* Interception de la sortie HTML pour jQuery côté serveur */
/***********************************************************/

(function (publics) {
    "use strict";

    // On intervient juste avant le renvoi HTML auprès du client (response).
    publics.changeDom = function (params, mainCallback) {
        var dom = params.dom;

        // Ici on peut manipuler le DOM côté serveur avant retour client.
        // voir exemple dans le fichier d'après.

        // On ré-injecte les modifications.
        mainCallback(dom);
    };

}(website));



/*************************************************************/
/* Mise à dispositions des fonction pour le moteur NodeAtlas */
/*************************************************************/

exports.loadModules = website.loadModules;
exports.setConfigurations = website.setConfigurations;
exports.changeVariation = website.changeVariation;
exports.changeDom = website.changeDom;
```

Au lieu de se servir de `changeVariation` et `changeDom` dans le fichier `common.js` effectif pour tout le site, on peut utiliser des contrôleurs spécifiques par page. La configuration précédente devient alors :

```js
{
    "commonController": "common.js",
    "controllersRelativePath": "controllers/",
    "routes": {
        "/": {
            "template": "index.htm",
            "controller": "index.js",
            "variation": "index.json"
        },
        "/categories/": {
            "template": "categories.htm",
            "controller": "categories.js",
            "variation": "categories.json"
        }
    }
}
```

avec cet ensemble de fichier

```
variations/
— index.json
— categories.json
controllers/
— modules/
—— list-of-article.js/
— common.js
- index.js
- categories.js
models/
— Article.js
— Category.js
templates/
— index.htm
— categories.htm
webconfig.json
```

avec un fichier « index.js » contenant par exemple :

- De quoi modifier les variations dynamiquement avant affichage.
- De quoi faire des modifications jQuery côté serveur.
- De quoi faire des échanges asynchrones avec Socket.IO.

```js
var website = {};



/*******************************/
/* Interception des Variations */
/*******************************/

(function (publics) {
    "use strict";

    var privates = {};

    // On charge une fonction ou un ensemble de fonctions.
    privates.listOfArticles = require('./modules/list-of-articles');

    // On intervient juste avant l'assemblage complet EJS.
    publics.changeVariation = function (params, mainCallback) {
        var variation = params.variation,
            mongoose = params.NA.modules.mongoose,
            Article = mongoose.model('article');


        // Interception possible de toutes les variables de « variations/common.js ».
        console.log(variation.common.title); // Renvoi le titre stocké dans « variations/common.js ».
        variation.common.title = "Nouveau title"; // Redéfini un titre.
        console.log(variation.common.title); // Renvoi « Nouveau title » et est accessible côté template via `<%= common.title %>`.

        // Interception possible de toutes les variables de « variations/index.js » (car on est dans le spécific « index.js »).
        variation.specific.title = "Nouveau title"; // Redéfini un titre qui est accessible côté template via `<%= specific.title %>`.
        variation.specific.newProperty = "Nouvelle propriété"; // Défini une propriété n'existant pas initialement dans le fichier de variation qui est accessible côté template via `<%= specific.newProperty %>`.

        // Interception possible de la configuration de la page courante.
        console.log(variation.currentRoute) // Retourne « / » pour « index.js », « /categories/ » pour « categories.js », « /categories/:category/ » pour « category-detail.js », etc.

        // On test une variable créer de toute pièce dans le webconfig.
        if (variation.webconfig._websiteIsClosed) {
            // La page sera en 404.
            variation.currentRouteParameters.statusCode = 404;
        } else {
            // La page sera en 200.
            variation.currentRouteParameters.statusCode = 200;
        }

        // Création d'un nouvel ensemble de variation dynamique pour les templates.
        variation.backend = {}; // Propriétés accessibles via « <%= backend.<propriétés> %> ».p

        privates.listOfArticles(Article, function (listOfArticles) {

            // Disponibilité des données des articles côté template.
            variation.backend.articles = listOfArticles; // « <%= backend.articles.<propriétés> %> ».

            // On ré-injecte les modifications.
            mainCallback(variation);
        });
    };

}(website));



/***********************************************************/
/* Interception de la sortie HTML pour jQuery côté serveur */
/***********************************************************/

(function (publics) {
    "use strict";

    // On intervient juste avant le renvoi HTML auprès du client (response).
    publics.changeDom = function (params, mainCallback) {
        var dom = params.dom,
            NA = params.NA,
            cheerio = NA.modules.cheerio, // Récupération de jsdom pour parcourir le DOM avec jQuery.
            $ = cheerio.load(dom); // On charge les données pour les manipuler comme un DOM.

        // Après tous les h2 de la sortie HTML « dom »,
        $("h2").each(function (i) {
            var $this = $(this);

            // ...on créé une div,
            $this.after(
                // ... on injecte le contenu du h2 dans la div,
                $("<div>").html($this.html())
            )
            // ...et supprime le h2.
            $this.remove();
        });

        // On re-créer une nouvelle sortie HTML avec nos modifications.
        dom = $.html()

        // On ré-injecte les modifications.
        mainCallback(dom);
    };

}(website));



/***********************************************/
/* Gestion des évênements Socket.IO asynchrone */
/***********************************************/

(function (publics) {
    "use strict";

    var privates = {};

    // Intégralité des actions Websocket possible pour ce template.
    publics.asynchrone = function (params) {
        var io = params.io,
            mongoose = params.NA.modules.mongoose,
            marked = params.NA.modules.marked,
            Article = mongoose.model('article'),
            renderer = new marked.Renderer();

        // Dès qu'on a un lien valide entre le client et notre back...
        io.sockets.on('connection', function (socket) {
            var sessionID = socket.request.sessionID,
                session = socket.request.session;

            // ...rester à l'écoute de la demande « create-article-button »...
            socket.on('create-article-button', function (data) {

                // ...et répondre à cette demande en créant un nouvelle article si elle vient
                // avec les information envoyées via « data ».
                var article = new Article({
                    _id: mongoose.Types.ObjectId(),
                    title: data.title,
                    urn: data.urn,
                });

                // Si l'utilisateur est connecté.
                if (session.account) {

                    // ...on sauve l'article en base.
                    article.save(function (error) {
                        if (error) {
                            throw error;
                        }

                        // Et on répond à tous les clients avec un jeu de donnée dans data.
                        io.sockets.emit('create-article-button', data);
                    });
                }
            });
        });
    };

}(website));



/*************************************************************/
/* Mise à dispositions des fonction pour le moteur NodeAtlas */
/*************************************************************/

exports.changeVariation = website.changeVariation;
exports.changeDom = website.changeDom;
exports.asynchrone = website.asynchrone; // Utilisé non pas par « NodeAtlas » mais par « common.js » (voir fichier précédent).
```

*Note : Si* ***controllersRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des controlleurs est bien* ***controllers***. ***controllersRelativePath*** *est donc utile seulement pour changer le nom/chemin du répertoire.*



### Génerer des fragments de page par retour AJAX/Websocket ###

Une fois qu'une page est génerée et envoyée au client, le serveur ne sait pas, quand une requête AJAX lui parvient de qu'elle chemin il s'agit. Il est donc incapable de vous renvoyer un composant HTML avec les bonnes valeurs de variation dedans ou même la bonne langue.

La première étape est de baliser votre code HTML. Par exemple, il pourrait contenir ceci :

```html
...
<html lang="<%= languageCode %>">
...
<body data-variation="<%= currentRouteParameters.variation %>">
...
```

ce qui génèrerait ceci :

```html
...
<html lang="fr-fr">
...
<body data-variation="index">
...
```

puis, quand votre JavaScript fera une requête AJAX via jQuery, ou comme ici, une requête socket.io, il utilisera ses paramètres :

```js
...
publics.socket.emit("load-section-a", {
    lang: $("html").attr('lang'),
    variation: $("body").data('variation')
});
...
```

pour que le serveur récupère les valeurs :

```js
...
socket.on('load-section-a', function (data) {
    var result = {},
        currentVariation = {};

    // On récupère les variations spécifiques dans la bonne langue.
    currentVariation = NA.addSpecificVariation(data.variation, data.lang, currentVariation);

    // On récupère les variations communes dans la bonne langue.
    currentVariation = NA.addCommonVariation(data.lang, currentVariation);

    // On récupère le fragment HTML depuis le dossier `componentsRelativePath` et on applique les variations.
    result = NA.newRender("section-a.htm", currentVariation);

    // On renvoit le résultat pour injection dans le DOM.
    socket.emit('load-sections', result);
});
...
```

tout ceci grâce à `NA.addSpecificVariation`, `NA.addCommonVariation` et `NA.newRender`.

Si `data.lang` dans notre exemple est de type `undefined`, alors les fichiers seront cherchés à la racine. Si `currentVariation` est de type `undefined` alors un objet contenant uniquement le scope demandé sera renvoyé.



### Changer les paramètres d'url ###

Par défaut, si vous utilisez la configuration suivante :

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

cela est identique à utiliser celle-ci :

```js
{
    "httpHostname": "localhost",
    "httpPort": 80,
    "httpSecure": false,
    "urlRelativeSubPath": "",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et vous pourrez accéder à l'url : *http://localhost/*.

Changez alors la configuration en ceci :

```js
{
    "httpHostname": "127.0.0.1",
    "httpPort": 7777,
    "httpSecure": true,
    "urlRelativeSubPath": "sub/folder",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

pour accéder à : *https://127.0.0.1:7777/sub/folder/*



### Créer ses propres variables de webconfig ###

Imaginons deux webconfigs dans lesquels nous allons créer nos propres variables comme suit :

1. « webconfig.json »

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    },
    "_minified": ""
}
```

2. « webconfig.prod.json »

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    },
    "_minified": ".min"
}
```

avec cet ensemble de fichiers

```
assets/
— stylesheets/
—— common.css
—— common.min.css
— javascript/
—— common.js
—— common.min.js
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

et « index.htm » contenant :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
        <link rel="stylesheet" type="text/css" href="stylesheets/common<%= webconfig._minified %>.css" />
    </head>
    <body>
        <div>Ceci est un test de récupération de ressources minifiées/non-minifiées.</div>
        <script type="text/javascript" src="javascript/common<%= webconfig._minified %>.js"></script>
    </body>
</html>
```

En lançant (depuis le dossier du site) la commande :

```
\> node </path/to/>node-atlas/node-atlas.js
```

Nous aurons à l'adresse « http://localhost/ » la sortie suivante avec les fichiers non minifiés :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
        <link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
    </head>
    <body>
        <div>Ceci est un test de récupération de ressources minifiées/non-minifiées.</div>
        <script type="text/javascript" src="javascript/common.js"></script>
    </body>
</html>
```

Cependant en lançant la commande :

```
\> node </path/to/>node-atlas/server.js --webconfig webconfig.prod.json
```

Nous aurons à l'adresse « http://localhost/ » la sortie suivante avec les fichiers minifiés :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
        <link rel="stylesheet" type="text/css" href="stylesheets/common.min.css" />
    </head>
    <body>
        <div>Ceci est un test de récupération de ressources minifiées/non-minifiées.</div>
        <script type="text/javascript" src="javascript/common.min.js"></script>
    </body>
</html>
```

*Note : Il vaut mieux préfixer ses variables personnelles avec « _ » pour éviter des conflits avec des variables de configuration existantes ou futures.*



### Gérer le routage (Url Rewriting) ###

Bien que vous puissiez paramétrer des urls statiques, vous pouvez également paramétrer une écoute d'url dynamiques !

#### Standard ###

Avec la configuration suivante :

```js
{
    "routes": {
        "/liste-des-membres/:member/": {
            "template": "members.htm"
        },
        "/liste-des-membres/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

vous pourrez accéder à :

- *http://localhost/*
- *http://localhost/liste-des-membres/*
- *http://localhost/liste-des-membres/toto/*
- *http://localhost/liste-des-membres/bob-eponge99/*
- *http://localhost/liste-des-membres/node-atlas/*
- *http://localhost/liste-des-membres/etc/*

et récupérer les valeurs de `:member` dans le `changeVariation` (common et specific).

```js
exports.changeVariation = function (params, mainCallback) {
    var variation = params.variation;

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' ou 'etc'.

    mainCallback(variation);
}
```

Les règles de création d'url dynamique sont celles de [Express.js](http://expressjs.com/4x/api.html#req.params).

#### Expressions Régulières ###

Vous pouvez également activer les expressions régulières pour un chemin précis avec `regExp`. Si celui-ci vaut `true`, le précédent mode ne fonctionne plus et vous passez en mode Expression Régulière. Si `regExp` est une chaine de caractère, celle-ci fait office de flag (g, i, m ou y).

Voyez la configuration suivante :

```js
{
    "routes": {
        "/liste-des-membres/([-a-z0-9]+)/?": {
            "template": "members.htm",
            "regExp": "g"
        },
        "/liste-des-membres/?": {
            "template": "members.htm",
            "regExp": true
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

vous pourrez accéder à :

- *http://localhost/*
- *http://localhost/liste-des-membres/* _(ou *https://localhost/liste-des-membres*)_
- *http://localhost/liste-des-membres/toto/* _(ou *https://localhost/liste-des-membres/toto*)_
- *http://localhost/liste-des-membres/bob-eponge99/* _(ou *https://localhost/liste-des-membres/bob-eponge99*)_
- *http://localhost/liste-des-membres/node-atlas/* _(ou *https://localhost/liste-des-membres/node-atlas*)_
- *http://localhost/liste-des-membres/etc/* _(ou *https://localhost/liste-des-membres/etc*)_

et récupérer les valeurs de `([-a-z0-9]+)` dans le `changeVariation` (common et specific).

```js
exports.changeVariation = function (params, mainCallback) {
    var variation = params.variation;

    if (variation.params && variation.params[0]) { variation.params.member = variation.params[0]; }
    // variation.params[1] pour le deuxième match, etc...

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' ou 'etc'.

    mainCallback(variation);
}
```

Les règles de création d'url dynamique avec `regExp` sont celles des [RegExp JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

#### Routage dans un fichier partagé ####

Afin de ne pas ré-écrire une longue liste de route dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutaliser la déclaration des routes dans un fichier de votre choix. Par convention, c'est le fichier `routes.json`.

Par exemple :

L'ensemble de fichier suivant

```
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

avec `webconfig.json`

```json
{
    "httpPort": 7777,
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et avec `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

pourrait devenir l'ensemble de fichier suivant

```
templates/
— index.htm
routes.json
webconfig.json
webconfig.prod.json
```

avec `webconfig.json`

```json
{
    "httpPort": 7777,
    "routes": "routes.json"
}
```

avec `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "routes": "routes.json"
}
```

et `routes.json`

```json
{
    "/": {
        "template": "index.htm"
    }
}
```

*Note : Vous pouvez vous créer plusieurs fichier de route comme `routes.en.json` et `routes.fr.json` et associer chacun d'eux dans un ensemble de webconfig paramètrer pour faire tourner un site dans diverses langues.*



### Gérer les pages inexistantes ###

#### Écouter toutes les urls, même les adresses du dossier `assetsRelativePath` ####

Pour afficher une page personnalisée quand une ressource n'est pas trouvée il faut :

1. Préparer une page 404.
2. Remplir le paramètre `pageNotFound` avec comme `value` la `key` de la page 404 préparée.

Voyez l'exemple ci-dessous :

```js
{
    "pageNotFound": "/pages-inexistantes/",
    "routes": {
        "/liste-des-membres/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        },
        "/pages-inexistantes/": {
            "template": "error.htm",
            "statusCode": 404
        }
    }
}
```

vous pourrez accéder à :

- *http://localhost/cette-page-n-existe-pas.html*
- *http://localhost/elle/non/plus/*
- *http://localhost/etc*

#### Page d'erreur multilingue ####

Il vous suffit de créer une nouvelle route finissant par `*` dans la langue souhaitée.

Voyez l'exemple ci-dessous :

```js
{
    "pageNotFound": "/pages-inexistantes/",
    "languageCode": "fr-fr",
    "routes": {
        "/liste-des-membres/": {
            "template": "members.htm",
            "variation": "members.json"
        },
        "/": {
            "template": "index.htm",
            "variation": "index.json"
        },
        "/pages-inexistantes/": {
            "template": "error.htm",
            "variation": "error.json",
            "statusCode": 404
        },
        "/english/list-of-members/": {
            "template": "members.htm",
            "languageCode": "en-gb",
            "variation": "members.json"
        },
        "/english/": {
            "template": "index.htm",
            "languageCode": "en-gb",
            "variation": "index.json"
        },
        "/english/*": {
            "template": "error.htm",
            "languageCode": "en-gb",
            "variation": "error.json",
            "statusCode": 404
        }
    }
}
```

### Gérer les redirections ###

Pour aller à une autre adresse (redirection 301 ou 302) quand vous arrivez à une url il faut utiliser le paramètre `redirect`.

*Note : si vous ne précisez pas un `statusCode`, la redirection ne se fera pas. Le `statusCode` est obligatoire.*

#### En statique ####

Voyez l'exemple ci-dessous :

```js
{
    "routes": {
        "/liste-des-membres/": {
            "template": "members.htm"
        },
        "/liste-des-membres": {
            "redirect": "/liste-des-membres/",
            "statusCode": 301,
        },
        "/aller-sur-node-atlas/": {
            "redirect": "http://haeresis.github.io/NodeAtlas/",
            "statusCode": 302,
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

Vous serez redirigé :

- sur `http://localhost/liste-des-membres/` quand vous accéderez à `http://localhost/liste-des-membres` avec une entête _redirection permanente_.
- sur `http://haeresis.github.io/NodeAtlas/` quand vous accéderez à `http://localhost/aller-sur-node-atlas/` avec une entête _redirection temporaire_.

#### En dynamique ####

Voyez l'exemple ci-dessous :

```js
{
    "routes": {
        "/liste-des-membres/:member/": {
            "template": "members.htm"
        },
        "/liste-des-membres/:member": {
            "redirect": "/membres/:member/"
            "statusCode": 301
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

Vous serez redirigé sur `http://localhost/liste-des-membres/haeresis/` quand vous accéderez à `http://localhost/liste-des-membres/haeresis` avec une entête _redirection permanente_.

#### Avec expressions régulières ####

Voyez l'exemple ci-dessous :

```js
{
    "routes": {
        "/membres/([-a-z0-9]+)/": {
            "template": "members.htm",
            "regExp": true
        },
        "/liste-des-membres/([-a-z0-9]+)/": {
            "redirect": "/membres/$0$/"
            "statusCode": 301,
            "regExp": true
        },
        "/liste-des-membres/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

Vous serez redirigé sur `http://localhost/membres/haeresis/` quand vous accéderez à `http://localhost/liste-des-membres/haeresis/` avec une entête _redirection permanente_.

Pour le second *match* utilisez $1$, pour le troisième $2$, etc.



### Faire tourner le site en HTTPs ###

Il est très simple de faire tourner une instance de NodeAtlas avec le protocol HTTPs. Pour cela il suffit de créer, par exemple un dossier `security` dans lequel vous allez placer vos fichier `server.key` et `server.crt` afin d'alimenter le protocol.

Il ne vous reste plus qu'à utiliser la configuration suivante :

```js
{
    "httpSecure": true,
    "httpSecureRelativeKeyPath": "security/server.key"
    "httpSecureRelativeCertificatePath": "security/server.crt"
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

Vous pouvez également, si —comme c'est le cas ici— vos deux fichiers Key et Certificate portent le même nom, utiliser cette configuration :

```js
{
    "httpSecure": "security/server",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```



### Minifier les CSS/JS ###

Vous pouvez automatiquement générer des fichiers CSS et JS minifiés et offusqués en créant des Bundles en référençant les groupes de fichiers d'entré par leur chemin d'accès et le chemin du fichier de sortie. Vous pouvez bien entendu en faire autant que vous le souhaitez. La gérération des fichiers se fait à chaque démarrage de NodeAtlas que ce soit en tant que serveur ou via la commande `--generate` pour peut qu'un Bundle existe dans le Webconfig.

#### Créer des Bundles ####

Avec la configuration suivante :

```js
{
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et l'ensemble de fichier suivant :

```
assets/
— stylesheets/
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript/
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
templates/
— index.htm
webconfig.json
```

vous obtiendrez les nouveaux fichiers suivant :

```
assets/
— stylesheets/
—— common.css
—— common-min780.css
—— common-min1160.css
—— common.min.css     <= nouveau fichier
— javascript/
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
—— boot.min.js        <= nouveau fichier
—— framework.min.js   <= nouveau fichier
—— common.min.js      <= nouveau fichier
templates/
— index.htm
webconfig.json
```

#### Bundles dans un fichier partagé ####

Afin de ne pas ré-écrire une longue liste de configuration de Bundles dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutaliser la déclaration des fichiers dans un fichier de votre choix. Par convention, c'est le fichier `bundles.json`.

Par exemple :

L'ensemble de fichier suivant

```
assets/
— stylesheets/
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript/
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

avec `webconfig.json`

```json
{
    "httpPort": 7777,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et avec `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

pourrait devenir l'ensemble de fichier suivant

```
assets/
— stylesheets/
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript/
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
templates/
— index.htm
bundles.json
webconfig.json
webconfig.prod.json
```

avec `webconfig.json`

```json
{
    "httpPort": 7777,
    "bundles": "bundles.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

avec `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "bundles": "bundles.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et `bundles.json`

```json
{
    "javascript": {
        "javascript/boot.min.js": [
            "javascript/modernizr.js",
            "javascript/yepnot.js",
            "javascript/html5Shiv.js"
        ],
        "javascript/framework.min.js": [
            "javascript/jquery.js",
            "javascript/jquery-ui.js",
            "javascript/prettify.js",
            "javascript/prettify/run_prettify.js"
        ],
        "javascript/common.min.js": [
            "javascript/components/extended-format-date.js",
            "javascript/common.js"
        ]
    },
    "stylesheets": {
        "stylesheets/common.min.css": [
            "stylesheets/common.css",
            "stylesheets/common-min780.css",
            "stylesheets/common-min1160.css"
        ]
    }
}
```

*Note : il est possible de désactiver les Bundles en ne les incluant pas dans le `webconfig` en question.*

#### Désactiver des Bundles ####

Il est également possible de ne pas executer la minification au démarage d'un site web avec NodeAtlas avec les propriétés `"stylesheetsBundlesEnable": false` et `"javascriptBundlesEnable": false` pour chaque type de Bundle.

```js
{
    "stylesheetsBundlesEnable": false,
    "javascriptBundlesEnable": false,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : si vos bundles sont dans un fichier partagé, vous pouvez également les désactiver simplement en retirand la ligne `"bundles": "bundles.json"`.*

#### Ré-générer les Bundles avant chaque rendu de page ####

De manière à toujours tester vos page avec les fichiers minifiés, vous pouvez demander à ce qu'ils soient régénérés avant chaque affichage de page avec les propriétés `"stylesheetsBundlesBeforeResponse": true` et `"javascriptBundlesBeforeResponse": true` pour chaque type de Bundle.

```js
{
    "stylesheetsBundlesBeforeResponse": false,
    "javascriptBundlesBeforeResponse": false,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : ceci n'est pas conseillé en production car cela ralenti les réponses des pages.*



### Générer les CSS avec Less ###

Vous pouvez utiliser le préprocesseur Less pour créer vos CSS. Le fonctionnement est le suivant : à chaque fois qu'une requête CSS est effectuée, si un équivalent Less existe il est lu et celui-ci génère le CSS. Une fois l'opération effectuée, on renvoi le CSS demandée.

Avec la structure suivante :

```
assets/
— stylesheets
—— common.less
templates/
— index.htm
webconfig.json
```

ainsi que le webconfig suivante :

```js
{
    "enableLess": true,
    "routes": {
        "/": "index.htm"
    }
}
```

et le contenu suivant dans :

*templates/index.htm*

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Less Test</title>
        <link rel="stylesheet" href="stylesheets/common.css">
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

*assets/stylesheets/common.less*

```css
p {
    color: #f00;
}
```

vous générerez le fichier `assets/stylesheets/common.css` en appelant l'url `http://localhost/` ou `http://localhost/stylesheets/common.css`.

#### Source Map et Minification ####

Par défaut, dans l'exemple ci-dessus un fichier `common.css.map` sera généré. Celui-ci permet à votre navigateur de vous indiqué qu'elle ligne du fichier `.less` a généré la propriété CSS de l'élément que vous avez sélectionné dans votre débuggeur.

Cela se désactive avec `enableLess.sourceMap` à `false` :

```
    "enableLess": {
        "sourceMap": false
    },
    "routes": {
        "/": "index.htm"
    }
```

Vous pouvez également générer des fichiers CSS déjà minifiés avec :

```
    "enableLess": {
        "compress": true
    },
    "routes": {
        "/": "index.htm"
    }
```

#### Compiler les Less avec `--generate` ####

Comme les Less sont compilés a la volé, quand le fichier est demandé en http(s), toutes modifications dans le Less demandera de faire tourner le site pour la répercuter dans le CSS. Ensuite seulement vous pourrez minifier vos CSS. Il est possible d'automatiser cette tâche pour ne pas avoir à démarrer le site grâce à `enableLess.less`.

Avec le `webconfig.json` suivant :

```js
{
    "enableLess": {
        "less": [
            "stylesheets/common.less",
            "stylesheets/component-1.less",
            "stylesheets/component-2.less",
            "stylesheets/component-3.less"
        ]
    },
    "routes": {
        "/": "index.htm"
    }
}
```

ou suivante :

```js
{
    "enableLess": {
        "less": "less.json"
    },
    "routes": {
        "/": "index.htm"
    }
}
```

avec `less.json` qui contient :

```js
[
    "stylesheets/common.less",
    "stylesheets/component-1.less",
    "stylesheets/component-2.less",
    "stylesheets/component-3.less"
]
```

Par defaut, les `@import` utilisés par Less seront capable de fouiller dans les sous dossier : `styles`, `stylesheets` ou `css`. Il est possible de changer cela avec :

```js
{
    "enableLess": {
        "paths": [
            "subdirectory/styles-files",
        ],
        "less": "less.json"
    },
    "routes": {
        "/": "index.htm"
    }
}
```



### Optimiser les Images ###

Vous pouvez automatiquement optimiser les images que vous aller utiliser dans votre site pour en limiter le poids de chargement en créant des Optimizations en référençant les fichiers d'entrés par leur chemin d'accès et le chemin du dossier de sortie. Vous pouvez bien entendu en faire autant que vous le souhaitez. L'optimisation des images se fait à chaque démarrage de NodeAtlas que ce soit en tant que serveur ou via la commande `--generate` pour peut que des Optimizations existe dans le Webconfig.

#### Créer des Optimizations ####

Avec la configuration suivante :

```js
{
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et l'ensemble de fichier suivant :

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
——— example.svg
templates/
— index.htm
webconfig.json
```

vous obtiendrez les nouveaux fichiers suivant :

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
——— example.svg
——— optimized/      <= nouveau dossier
———— example.png    <= nouveau fichier
———— example.jpg    <= nouveau fichier
———— example.gif    <= nouveau fichier
———— example.svg    <= nouveau fichier
templates/
— index.htm
webconfig.json
```

#### Créer des Optimizations par groupes de fichier ####

Vous pouvez par exemple, plutôt que d'indiquer les fichiers un par un, les indiquer en groupe :

```js
{
    "optimizations": {
        "images": {
            "media/images/*.{gif,jpg,png,svg}": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

#### Optimizations dans un fichier partagé ####

Afin de ne pas ré-écrire une longue liste de configuration d'Optimizations dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutaliser la déclaration des fichiers dans un fichier de votre choix. Par convention, c'est le fichier `optimizations.json`.

Par exemple :

L'ensemble de fichier suivant

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
——— example.svg
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

avec `webconfig.json`

```json
{
    "httpPort": 7777,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et avec `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

pourrait devenir l'ensemble de fichier suivant

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
——— example.svg
templates/
— index.htm
optimizations.json
webconfig.json
webconfig.prod.json
```

avec `webconfig.json`

```json
{
    "httpPort": 7777,
    "optimizations": "optimizations.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

avec `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "optimizations": "optimizations.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

et `optimizations.json`

```json
{
    "images": {
        "media/images/example.png": "media/images/optimized/",
        "media/images/example.jpg": "media/images/optimized/",
        "media/images/example.gif": "media/images/optimized/",
        "media/images/example.svg": "media/images/optimized/"
    }
}
```

*Note : il est possible de désactiver les Optimizations en ne les incluant pas dans le `webconfig` en question.*

#### Désactiver des Optimizations ####

Il est également possible de ne pas executer l'optimisation au démarage d'un site web avec NodeAtlas avec les propriétés `"imagesOptimizationsEnable": false`.

```js
{
    "imagesOptimizationsEnable": false,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : si vos optimizations sont dans un fichier partagé, vous pouvez également les désactiver simplement en retirand la ligne `"optimizations": "optimizations.json"`.*

#### Ré-générer les Optimizations avant chaque rendu de page ####

Vous pouvez demander à ce que les fichiers soient régénérés avant chaque affichage de page avec les propriétés `"imagesOptimizationsBeforeResponse": true`.

```js
{
    "imagesOptimizationsBeforeResponse": false,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : ceci n'est pas conseillé en production car cela ralenti les réponses des pages.*



### Injecter du CSS inline pour maintenir des assets Email ###

Quand on créer des templates pour envoyer des Newsletters par email, ou même de simple message, on ne peut pas attacher de feuille de style. Le seul moyen à notre disposition est d'écrire les instructions CSS dans le template à l'intérieur de l'attribut `style` brisant ainsi la séparation du font et de la forme.

#### Injection spécifique ####

Avec `injectCss`, il vous suffit d'habiller votre template comme à votre habitude via une feuille de style et NodeAtlas injectera à chaque rendu les styles dans l'attribut `style`. Il ne vous restera plus qu'à générer vos templates.

Avec par exemple la configuration suivante :

```json
{
    "routes": {
        "/": {
            "template": "email.htm",
            "generate": "bienvenue.html",
            "injectCss": "stylesheets/email.css"
        }
    }
}
```

et l'ensemble de fichiers suivant :

```
generates/
assets/
— stylesheets/
—— email.css
templates/
— email.htm
```

dont les contenus sont :

**stylesheets/common.css**

```css
body {
    color: #f00;
}
```

**templates/email.htm***

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Email</title>
    </head>
    <body>
        <p>This is a template email.</p>
    </body>
</html>
```

vous obtiendrez en sortie avec la commande `node </path/to/>node-atlas/node-atlas.js --generate` l'ensemble de fichier suivant :

```
generates/
— bienvenue.html    <= template email prêt à l'envoi !
assets/
— stylesheets/
—— email.css
templates/
— email.htm
```

avec comme contenu pour `generates/bienvenue.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Email</title>
    </head>
    <body style="color: #f00;">
        <p>This is a template email.</p>
    </body>
</html>
```

Ce mécanisme marche également si vous n'avez pas l'intention de générer quoi que ce soit mais sur un site qui tourne. Pratique pour modifier vos maquettes en live avant de les générer.

> Test : Depuis `./tests/examples/css-injection` lancez `node "../../../node-atlas.js" --generate`. Le résultat est dans `generates`.

#### Injection globale ####

Il existe également la même propriété globale inpactant toutes les pages.

```json
{
    "injectCss": "stylesheets/email.css",
    "routes": {
        "/bienvenue/": {
            "template": "email-a.htm",
            "generate": "bienvenue.html"
        },
        "/au-revoir/": {
            "template": "email-b.htm",
            "generate": "au-revoir.html"
        }
    }
}
```

ainsi les deux pages `bienvenue` et `au-revoir` contiendront chacune `<body style="color: #f00;">`.

> Test : Depuis `./tests/examples/css-injection` lancez `node "../../../node-atlas.js" --generate --webconfig webconfig.common.json`. Le résultat est dans `generates`.

#### Injection multiple ####

Il est possible :
- De préciser des feuilles spécifique et commune en même temps.
- De préciser plus d'une feuille à la fois.

```json
{
    "injectCss": ["stylesheets/reset.css", "stylesheets/email.css"],
    "routes": {
        "/bienvenue/": {
            "template": "email-a.htm",
            "generate": "bienvenue.html",
            "injectCss": "/stylesheets/welcome.css"
        },
        "/au-revoir/": {
            "template": "email-b.htm",
            "generate": "au-revoir.html",
            "injectCss": ["stylesheets/good-bye.css", "/stylesheets/others.css"]
        }
    }
}
```

> Test : Depuis `./tests/examples/css-injection` lancez `node "../../../node-atlas.js" --generate --webconfig webconfig.multiple.json`. Le résultat est dans `generates`.



### Autoriser/Interdire les demandes GET/POST ###

Vous pouvez également manager la manière dont le serveur va répondre aux demandes GET/POST pour une page donnée. Par exemple, nous allons autoriser l'accès aux pages uniquement en GET pour tout le site et autoriser un POST pour une page seulement (et même lui interdire le GET).

```js
{
    "getSupport": true,
    "postSupport": false,
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/liste-des-membres/": {
            "template": "members.htm"
        },
        "/rediger-commentaire/": {
            "template": "write-com.htm"
        },
        "/commentaire-sauvegarde/": {
            "template": "save-com.htm",
            "getSupport": false,
            "postSupport": true
        }
    }
}
```

*Note : Si rien n'est précisé,* ***getSupport*** *et* ***postSupport*** *sont à* ***true*** *au niveau global et par page.*



### Changer les paramètres des Sessions ###

#### Clé et Secret ####

NodeAtlas gère lui-même les sessions stockées sur le serveur avec comme paramètres initiaux :

- Key : `nodeatlas.sid`
- Secret : `1234567890bépo`

qui permettent à un client de rester connecté à travers les pages à un même ensemble de variable personnelles côtés serveur.

Il est possible de modifier ses paramètres par défaut (et même obligatoire pour des sites en productions) avec les paramètres de `webconfig.json` suivant :

```js
{
    sessionKey: "clé personnelle",
    sessionSecret: "secret personnel"
}
```

NodeAtlas utilise également un objet de stockage mémoire (MemoryStore) qui stoques les informations dans la RAM du serveur.

#### Autres paramètres ####

Il est possible de changer l'intégralité des paramètres des sessions (sauf le MemoryStore) en utilisant la configuration de `webconfig.json` suivante :

```js
{
    "session": {
        "key": "clé personnelle",
        "secret": "secret personnel",
        "cookie": {
            "path": '/',
            "httpOnly": true,
            "secure": false,
            "maxAge": null
        },
        ...,
        ...,
        ...
    }
}
```

L'intégralité de la configuration possible se trouve sur la documentation du module [express-session](https://github.com/expressjs/session).



### Stockage externe des Sessions ###

Par défaut, c'est NodeAtlas qui stocke les sessions serveurs dans la RAM du serveur par application. Cela ne permet pas de partager des sessions utilisateurs à travers plusieurs applications NodeAtlas (ou autre) et efface toutes les sessions en cours pour une application en cas de redémarrage de celle-ci.

Pour résoudre ce soucis, il convient de prendre en charge l'enregistrement des sessions via une base No SQL tel que `Redis` ou `MongoBD`.

Pour cela il suffit d'utiliser la fonction `setSessions` dans le fichier `controllers/common.js` de la [partie Back-end](#utiliser-nodeatlas-pour-faire-tourner-un-site-partie-back-end).

#### Session gérées avec Redis ####

Implémenter le code suivant dans `controllers/common.js` pour stocker vos sessions dans Redis en local.

```
var website = {};

(function (publics) {
    "use strict";

    publics.loadModules = function (NA) {
        NA.modules.RedisStore = require('connect-redis');

        return NA;
    };

    publics.setSessions = function (NA, callback) {
        var session = NA.modules.session,
            RedisStore = NA.modules.RedisStore(session);

        NA.sessionStore = new RedisStore();

        callback(NA);
    };

}(website));

exports.loadModules = website.loadModules;
exports.setSessions = website.setSessions;
```

Plus d'informations sur [connect-redis](https://www.npmjs.org/package/connect-redis).


#### Session gérées avec MongoDB ####

Implémenter le code suivant dans `controllers/common.js` pour stocker vos sessions dans la database `sessions` d'une MongoDB locale.

```
var website = {};

(function (publics) {
    "use strict";

    publics.loadModules = function (NA) {
        NA.modules.MongoStore = require('connect-mongo');

        return NA;
    };

    publics.setSessions = function (NA, callback) {
        var session = NA.modules.session,
            MongoStore = NA.modules.MongoStore(session);

        NA.sessionStore = new MongoStore({
            db: 'sessions'
        });

        callback(NA);
    };

}(website));

exports.loadModules = website.loadModules;
exports.setSessions = website.setSessions;
```

Plus d'informations sur [connect-redis](https://www.npmjs.org/package/connect-mongo).



### Changer les chevrons <% %> du moteur de template ###

Par exemple, pour inclure une partie de fichier on utilise l'instruction ***<%- include('head.htm') %>***. Il serait possible de le faire avec ***<?- include('head.htm') ?>*** avec la configuration ci-dessous :

```js
{
    "templateEngineDelimiter": "?",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

Voyez l'exemple dans les fichiers ci-dessous :

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title><?= specific.titlePage ?></title>

        <link type="text/css" rel="stylesheet" href="stylesheets/<?= common.classCssCommon ?>.css" media="all" />
        <link type="text/css" rel="stylesheet" href="stylesheets/<?= specific.classPage ?>.css" media="all" />
    </head>
    <body class="<?= specific.classPage ?>">
```

*components/foot.htm*

```html
        <script async type="text/javascript" src="javascript/<?= common.classJsCommon ?>.js"></script>
    </body>
</html>
```

*templates/template.htm*

```html
    <? include('head.htm') ?>

    <div class="title"><?= common.titleWebsite ?></div>

    <div>
        <h1><?= specific.titlePage ?></h1>
        <?- specific.content ?>
    </div>

    <? include('foot.htm') ?>
```

Pour tout savoir sur les possibilités du moteur de template consulter la documentation [ejs](https://github.com/mde/ejs)

*Note : Si rien n'est précisé,* ***templateEngineDelimiter*** *vaut* ***%***.



### Changer l'url final des hostname et port d'écoute ###

Il est possible de générer une url de visite différente des paramètres d'écoutes demandés avec ***urlHostname*** et ***urlPort***. Par exemple on écoute la boucle local sur le port 80 car un script fait du Reverse Proxy depuis le port 7777 sur le 80 avec le module « http-proxy » comme ci-dessous :

```js
{
    "httpPort": 7777,
    "httpHostname": "127.0.0.1",
    "urlPort": 80,
    "urlHostname": "localhost",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

Il est également possible de faire en sorte qu'aucune autre url ne puisse être tapé. Ainsi si on réclame `www.localhost` ou `localhost:7777` c'est bien sur `localhost` que sera le visiteur :

```js
{
    "enableForceDomain": true,
    "httpPort": 7777,
    "httpHostname": "127.0.0.1",
    "urlPort": 80,
    "urlHostname": "localhost",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```



### Générer les urls dynamiquement ###

#### Les chemins relatifs en absolue ####

Il est possible que les chemins créés à partir de votre url soient interprétés comme des sous-dossiers qui n'ont en réalité aucune existance réelle. Cela a pour conséquence de rendre l'adresse `media/images/example.jpg` initialement accessible depuis un template affiché à **http://localhost**` impossible à récupérer quand le template est affiché à **http://localhost/sub-directory/** (puisqu'il faudrait alors que notre chemin soit plutôt `../media/images/example.jpg`).

Pour ne plus avoir à se soucier de l'accès aux ressources peu importe l'url qui est demandée, il suffit de transformer toutes les urls relatives telles que :

```
<link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
<!-- ... -->
<img src="media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="javascript/common.js"></script>
```

en urls absolues avec la variable `urlBasePath` comme ci-dessous :

```
<link rel="stylesheet" type="text/css" href="<%= urlBasePath %>stylesheets/common.css" />
<!-- ... -->
<img src="<%= urlBasePath %>media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="<%= urlBasePath %>javascript/common.js"></script>
```

À noter que dans le cas de la configuration suivante :

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

`urlBasePath` retourne `http://localhost/` alors que dans celle-ci :

```js
{
    "httpPort": 7777,
    "urlRelativeSubPath": "sub/folder",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

`urlBasePath` retourne `http://localhost:7777/sub/folder/`.

#### Les chemins des templates ####

En utilisant le webconfig suivant :

```js
{
    "routes": {
        "/index.html": {
            "template": "index.htm"
        },
        "/contact.html": {
            "template": "contact.htm"
        }
    }
}
```

ainsi que le template `index.htm` correspondant

```html
<!-- ... -->
<a href="http://localhost/index.html">Lien vers l'accueil</a>
<a href="http://localhost/contact.html">Lien pour nous contacter</a>
<!-- ... -->
```

je serais obligé de changer mon lien dans le template si je change le port d'écoute ou si je change le chemin de l'url. Le changement de configuration suivant :

```js
{
    "httpPort": 7777,
    "routes": {
        "/home.html": {
            "template": "index.htm"
        },
        "/contact-us.html": {
            "template": "contact.htm"
        }
    }
}
```

me contraindrait à modifier le template précédent comme suit :

```html
<!-- ... -->
<a href="http://localhost:7777/home.html">Lien vers l'accueil</a>
<a href="http://localhost:7777/contact-us.html">Lien pour nous contacter</a>
<!-- ... -->
```

Il est possible de solutionner ce problème en donnant une clé à un chemin précis et en déportant sont chemin dans la propriété `url`.

Avec le webconfig suivant :

```js
{
    "routes": {
        "index": {
            "url": "/index.html",
            "template": "index.htm"
        },
        "contact": {
            "url": "/contact.html",
            "template": "contact.htm"
        }
    }
}
```

je peux à présent écrire le lien dans le template de manière dynamique :

1. comme suit

   ```html
<!-- ... -->
<a href="<%= urlBasePath %><%= webconfig.routes.home.url.slice(1) %>">Lien vers l'accueil</a>
<a href="<%= urlBasePath %><%= webconfig.routes.contact.url.slice(1) %>">Lien pour nous contacter</a>
<!-- ... -->
```

   *Note : `.slice(1)` permet de supprimer facilement le double `/` pour une url fonctionnelle.*

2. ou comme suit

   ```html
<!-- ... -->
<a href="<%= urlBasePath %>.<%= webconfig.routes.home.url %>">Lien vers l'accueil</a>
<a href="<%= urlBasePath %>.<%= webconfig.routes.contact.url %>">Lien pour nous contacter</a>
<!-- ... -->
```

   *Note : Cela donnerait par exemple `http://localhost/./home.html`, ce qui est une url fonctionnelle.*

3. ou comme suit

   ```html
<!-- ... -->
<a href="<%= urlBasePathSlice + webconfig.routes.home.url %>">Lien vers l'accueil</a>
<a href="<%= urlBasePathSlice + webconfig.routes.contact.url %>">Lien pour nous contacter</a>
<!-- ... -->
```

   *Note : `urlBasePathSlice` renvoyant `http://localhost` au lieu de `http://localhost/` ou encore `http://localhost:7777/sub/folder` au lieu de `http://localhost:7777/sub/folder/`.*

#### Utilisation de la clé pour mapper les pages ####

Il est parfois utile de connaître la clé utilisé pour la page courante afin de trouver une équivalence dans une autre langue par exemple.

Avec le webconfig suivant :

```js
{
    "languageCode": "fr-fr",
    "routes": {
        "index_fr-fr": {
            "url": "/",
            "template": "/index.htm"
        },
        "index_en-us": {
            "url": "/english/",
            "template": "index.htm",
            "languageCode": "en-us"
        },
        "cv_fr-fr": {
            "url": "/cv/",
            "template": "cv.htm"
        },
        "cv_en-us": {
            "url": "/english/resume/",
            "template": "index.htm",
            "languageCode": "en-us"
        }
    }
}
```

et les fichiers de variation commun suivant en fr :

```js
{
    "language": [{
        "name": "Anglais",
        "code": "en-us"
    }, {
        "name": "Français",
        "code": "fr-fr"
    }]
}
```

et en en :

```js
{
    "language": [{
        "name": "English",
        "code": "en-us"
    }, {
        "name": "French",
        "code": "fr-fr"
    }]
}
```

on peut alors créer un lien entre chaque page multilingue comme ceci :

```html
<ul>
    <% for (var i = 0; i < common.language.length; i++) { %>
    <li><a href="<%= urlBasePathSlice + webconfig.routes[currentRouteName.split('_')[0] + '_' + common.language[i].code].url %>"><%- common.language[i].name %></a></li>
    <% } %>
</ul>
```



## CLI / Commandes de lancement ##

La façon la plus simple de lancer NodeAtlas est de se positionner dans le répertoire hébergeant votre site et de lancer la commande `\> node </path/to/>node-atlas/node-atlas.js`. Cependant il existe des options de lancement pour faire bien plus que lancer le site.

Chacune des commandes qui vont suivre peut être couplée avec les autres de cette manière :

```
\> node </path/to/>node-atlas/node-atlas.js --directory /hello-world/ --webconfig config.fr-fr.js --httpPort 80 --browse
```


### --directory <path> ###

Il est possible de lancer NodeAtlas depuis un autre endroit que le dossier où est hébergé le site que vous souhaitez faire tourner. La commande `--directory` vous sera alors très utile.

```
\> node </path/to/>node-atlas/node-atlas.js --directory </path/to/your/website/directory/>
```


### --webconfig <webconfigName> ###

Par défaut, NodeAtlas va lire votre fichier `webconfig.json`. Il est possible qu'en plus de ce fichier vous ayez créé un autre fichier `webconfig.prod.json` dont le nom de domaine est différent. Ou encore un `webconfig.fr-fr.json` avec des urls et des variations dans une autre langue. Plutôt que de renommer vos fichiers en `webconfig.json` avant de lancer le site, précisez simplement votre autre nom de configuration. Dans l'exemple suivant, notre fichier sera `webconfig.alternatif.json`.

```
\> node </path/to/>node-atlas/node-atlas.js --webconfig webconfig.alternatif.json
```



### --browse [subpath] ###

Cette commande permet d'ouvrir votre navigateur à l'adresse sur laquelle le site va tourner. Très pratique quand vous ne vous souvenez plus du port pour votre version de développement. Cette commande ne sert à rien si elle est couplé avec `--generate` (voir plus loin).

```
\> node </path/to/>node-atlas/node-atlas.js --browse
```

Vous pouvez également cibler une page précise en ajoutant la fin de l'url.


```
\> node </path/to/>node-atlas/node-atlas.js --browse index.html
```




### --httpPort <httpPort> ###

Vous n'allez peut être pas vous ennuyer à changer votre port d'écoute sur tous vos projets et parfois vous allez devoir travailler sur deux sites différents en même temps. Avec cette commande vous n'aurez pas besoin de couper vos sites alternativement pour libérer le port d'écoute, il suffira d'en choisir un au lancement.

```
\> node </path/to/>node-atlas/node-atlas.js --httpPort 7778
```



### --generate ###

Si vous modifiez un élément dans votre fichier de variation commun ou même dans un de vos composants de template appelé sur plusieurs pages, vous n'allez pas recharger chaque page pour mettre à jour vos fichiers de sortie. Il suffira alors d'utiliser `--generate`. Cette commande copiera l'intégralité du contenu du dossier `assetsRelativePath` dans `generatesRelativePath` si leur chemin est différent.

```
\> node </path/to/>node-atlas/node-atlas.js --generate
```




## API / NodeAtlas comme module npm ##

Si vous lancez NodeAtlas via du code JavaScript, vous pouvez également configurer le lancement :

*server.js*

```javascript
require("node-atlas").run({
    directory: "</path/to/your/website/directory/>",
    webconfig: "webconfig.alternatif.json",
    browse: true,
    httpPort: 7778,
    generate: true
});
```

```
\> node server.js
```

Vous pouvez également lancer plusieurs site en une fois. Bien entendu, chaque webconfig écoutera un port différent.

*servers.js*

```javascript
var nodeAtlas = require("node-atlas"),
    websiteEn = new nodeAtlas(),
    websiteFr = new nodeAtlas();

websiteEn.run({
    "browse": true,
    "webconfig": "webconfig.english.json"
});
websiteFr.run({
    "browse": true,
    "webconfig": "webconfig.french.json"
});
```





## NodeAtlas comme simple serveur web ##

Si NodeAtlas ne trouve pas le « webconfig.json » ou le `--webconfig` que vous lui aurez indiqué, il se lancera en mode « Simple Serveur Web » ou « Public ».

**Ce mode est pratique pour tester très rapidement que NodeAtlas est correctement installé ou pour créer des petits exemples HTML qui ont besoin d'un serveur web pour fonctionner (retours AJAX, iframe embarquée, etc.).**

Pour bien comprendre ce que cela signifie : s'il existe un quelconque fichier dans le répertoire d'où NodeAtlas a été lancé, il sera renvoyé par requête HTTP si ont le réclame via son chemin d'accès.

Par exemple, en lançant NodeAtlas dans le répertoire `site-hello-world`

```
site-hello-world/
— templates/
—— index.htm
— webconfig.json
```

en exécutant la commande

```
\> node </path/to/>node-atlas/node-atlas.js
```

ou même la commande

```
\> node </path/to/>node-atlas/node-atlas.js --webconfig webconfig.not-exist.json
```

le serveur se lancera en mode « Simple Serveur Web » et les fichiers « http://localhost/webconfig.json » ou « http://localhost/templates/webconfig.htm » seront accessible tel que le navigateur pourrait les renvoyer en tant que simple serveur web.

*Note : seul les commandes `--webconfig`, `--browse`, `--directory` et `--httpPort` fonctionnent dans ce mode.*





## Faire tourner NodeAtlas sur serveur ##

### Dans un environnement Windows Server avec iisnode ###

Dans un environnement Windows Server 2013 avec IIS8 il faut :

1. Installer [l’exécutable node.exe](http://nodejs.org/download/) capable d’exécuter du code JavaScript.
2. Installer [le module IIS8 UrlRewrite](http://www.iis.net/downloads/microsoft/url-rewrite) pour mapper les pages exécutées à une Url de sortie.
3. Installer [le module IIS8 issnode](https://github.com/tjanczuk/iisnode/downloads) pour lire des web.config et manager des site via IIS (Management de pool d’application, démarrage/arrêt de site, etc...).

#### Créer une application ####

Dans IIS8, créez un Website et créez une Application.

Le contenu de votre application sera celui du site mélangé à celui de NodeAtlas. Cela signifie donc que ceci :

```
node-atlas/
— node_modules/
— languages/
—— default.json
— node-atlas.js
site-hello-world/
— assets/
— templates/
—— index.htm
— webconfig.json
```

devient ceci :

```
site-hello-world/
— node_modules/
— languages/
—— default.json
— assets/
— templates/
—— index.htm
— node-atlas.js
— webconfig.json
```

Vous rajouterez à cet ensemble de fichiers, un fichier supplémentaire nommé `web.config` dont le contenu est le suivant :

```xml
<configuration>
    <system.webServer>
        <handlers>
            <add name="iisnode" path="node-atlas.js" verb="*" modules="iisnode" />
        </handlers>
        <rewrite>
            <rules>
                <rule name="LogFile" patternSyntax="ECMAScript" stopProcessing="true">
                     <match url="^[a-zA-Z0-9_\-]+\.js\.logs\/\d+\.txt$"/>
                </rule>
                <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
                    <match url="^node-atlas.js\/debug[\/]?" />
                </rule>
                <rule name="StaticContent">
                     <action type="Rewrite" url="assets{REQUEST_URI}"/>
                </rule>
                <rule name="DynamicContent">
                     <conditions>
                          <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
                     </conditions>
                     <action type="Rewrite" url="node-atlas.js"/>
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

pour au final obtenir :

```
site-hello-world/
— node_modules/
— languages/
—— default.json
— assets/
— templates/
—— index.htm
— node-atlas.js
— webconfig.json
— web.config
```

Il ne vous restera plus qu'à cliquer sur « Browse <url-of-site> » dans votre panneau d'action IIS8. Vous pouvez dès lors manager votre site (Démarrage / Arrêt / Recyclage de Pool) comme pour n'importe quelle autre application IIS8.

#### webconfig exemple ####

Un webconfig exemple pour une production :

```js
{
    "urlPort": 80,
    "httpPort": 7777,
    "httpHostname": "www.example.fr",
    "routes": {
        ...
    }
}

```



### Dans un environnement Unix avec forever ###

Il faut pour cela :

1. Installer [l’exécutable node.exe](http://nodejs.org/download/) capable d’exécuter du code JavaScript.
2. Installer [le CLI tool forever](https://github.com/nodejitsu/forever) pour manager vos sites en continue (démarrage, arrêt, redémarrage, etc.).
3. Faire tourner en plus de vos sites un reverse-proxy pour que toutes vos applications tournent sur le port 80.


#### Quelques commandes forever ####

Pour manager un nouveau site en continue il faut utiliser la commande :

```
\> forever start </path/to/>node-atlas/node-atlas.js --directory </path/to/your/website/directory/>
```

Pour le stopper, il faut repérer son **uid** avec la commande `forever list`

```
\> forever list
```

puis utiliser la commande :

```
\> forever stop <uid>
```

ou `<uid>` est l'**uid** du site qui tourne.


#### webconfig exemple ####

Un webconfig exemple pour une production :

```js
{
    "urlPort": 80,
    "httpPort": 7777,
    "httpHostname": "www.example.fr",
    "routes": {
        ...
    }
}

```

Il vous faudra ensuite utiliser un reverse-proxy pour rendre votre site accessible sur le port 80.




### Proxy ###

#### Bouncy ####

Bouncy est un exemple de reverse-proxy que vous pouvez utiliser pour faire tourner divers sites NodeAtlas (avec d'autres types de site) ensemble sur le même port (le 80).

Vous pouvez par exemple :

- lancer 3 applications Node.js sur les ports 7777, 7778 et 7779 avec forever,
- et en plus lancer un server apache sur le port 81

et rendre tous vos sites accessibles derrière des noms de domaines sur le port 80 avec Bouncy par exemple.

Voici un exemple de configuration avec Bouncy :

**global-server.js**

```javascript
var bouncy = require('bouncy');

var server = bouncy(function (request, response, bounce) {
    if (request.headers.host === 'beep.example.com') {
        bounce(7777);
    }
    else if (request.headers.host === 'blup.example.com') {
        bounce(7776);
    }
    else if (request.headers.host === 'boop.example.com') {
        bounce(81);
    }
    else {
        response.statusCode = 404;
        response.end('no such host');
    }
});

server.listen(80);
```

que vous pouvez lancer avec :

```
\> forever start </path/to/>global-server.js
```

[Plus d'informations sur Bouncy](https://github.com/substack/bouncy)





## À propos de l'architecture de NodeAtlas ##

NodeAtlas est fait de tel sorte que l'objet `NA` contienne l'intégralité des fonctions lui permettant de fonctionner. NodeAtlas délivre lui-même son objet dans les controllers via les méthodes utilisées en mode Back-end avec Node.js pour vous permettre de changer ponctuellement son comportement.

Tous les messages d'erreurs se trouvent dans `/languages/default.json`. Si vous souhaitez les modifier, il suffit de remplacer le contenu de `default.json` (actuellement identique à celui de `en-gb`) par celui de `fr-fr.json` ou tout autre fichier traduit par vos soins.

Pour finir [l'appoche publics/privates de l'architecture est expliqué dans cette article](http://blog.lesieur.name/structurer-le-javascript-de-son-site-avec-ou-sans-framework/).