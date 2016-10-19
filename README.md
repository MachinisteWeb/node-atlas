# node-atlas #

[![Faites un don](https://img.shields.io/badge/don-%E2%9D%A4-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://travis-ci.org/Haeresis/NodeAtlas.svg)](https://travis-ci.org/Haeresis/NodeAtlas/) [![Version 1.4](https://img.shields.io/badge/version-1.4-brightgreen.svg)](https://github.com/Haeresis/NodeAtlas) [![Package NPM](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-0.10%2C_6.8-brightgreen.svg)](https://nodejs.org/en/) [![Technical Debt Ratio](https://img.shields.io/badge/debt_ratio-0%25-brightgreen.svg)](http://docs.sonarqube.org/display/PLUG/JavaScript+Plugin) [![Dependency Status](https://gemnasium.com/Haeresis/NodeAtlas.svg)](https://gemnasium.com/Haeresis/NodeAtlas)

**For an international version of this README.md, [follow this link](http://haeresis.github.io/NodeAtlas/).**





## Avant-propos ##

### Pour réaliser quoi ? ###

NodeAtlas est un Framework JavaScript MVC(2) côté serveur sous forme de [module npm](https://www.npmjs.com/package/node-atlas) ([node-atlas](https://www.npmjs.com/package/node-atlas)) et tournant sur toutes les versions de [Node.js](https://nodejs.org/en/). Il vous permet de :

- Créer, maintenir et documenter des interfaces utilisateurs HTML/CSS/JavaScript pour créer un ensemble d'assets cohérants afin de les fournirs en tant que Guidelines pour la réalisation de divers sites ou applications web.

- Créer, maintenir et faire tourner des sites internationalisés (et localisables) sans mettre en place le moindre fichier JavaScript. Particulièrement taillé pour les débutants ou la réalisation de sites vitrines hautement performant et maintenable en des temps records.

- Développer des sites, des applications ou des API distantes en [Node.js](https://nodejs.org/en/) de manière évolutives et tournant côté serveur tout en vous permettant grâce à l'éco-système [npm](https://www.npmjs.com/) et les built-in fonctions de créer des contenus temps réel, de packager et optimiser vos sites pour de hautes performances, d'être orienté composant avec des réponses HTTP passant la validation W3C et parfaitement indexable par les moteurs de recherche pour le SEO.



### Pourquoi NodeAtlas ? ###

NodeAtlas est designé pour créer des sites évolutifs et pour permettre au Front-end ou Back-end développeur d'embrasser [Node.js](https://nodejs.org/).

Commencez avec une simple page HTML,

- puis internationalisez là,
- puis créez d'autres pages,
- puis minifiez/offusquez/compressez vos sources,
- puis utiliser Less ou/et Stylus,
- puis prenez la main sur la logique serveur,
- puis connectez vous à [MySQL](https://www.mysql.fr/), [MongoDB](https://www.mongodb.org/), [ElasticSearch](https://www.elastic.co/)...,
- puis rendez tout ça temps réel avec [Socket.io](http://socket.io/),
- puis soyez orienté composant avec [ComponentAtlas](https://github.com/Haeresis/ComponentAtlas),
- puis laissez votre client éditer son site avec [EditAtlas](https://github.com/Haeresis/EditAtlas),
- puis créer des plugins,
- puis...



### Et les autres Frameworks JavaScript ? ###

Contrairement aux Frameworks JavaScript comme Angular, Aurelia ou Reac, NodeAtlas fonctionne côté serveur et délivre son contenu derrière des url en retour HTTP. Les sites sont indexables et valides W3C c'est à dire que le code utile est bien renvoyé par la Response HTTP en premier lieu, et est ensuite modifié par requête Websocket si vous le souhaitez. Cela signifie donc que NodeAtlas n'est pas une alternative au nombreux Frameworks Front-end JavaScript qui ne se servent que de [Node.js](https://nodejs.org/en/) pour l'utilisation de [npm](https://www.npmjs.com/) ou [jspm](http://jspm.io/) ou [gulp](http://gulpjs.com/). NodeAtlas forme un socle en dessous et remplace bien votre PHP, JAVA ou C# côté serveur. À l'instar de [Meteor.js](https://www.meteor.com/), NodeAtlas vous fournit un cadre de travail et une structure initial (que vous pouvez complètement changer) et des outils vous permettant de vous passer de [gulp](http://gulpjs.com/) mais contrairement à [Meteor.js](https://www.meteor.com/) l'objet `NA` n'est disponible que côté serveur. Il vous est donc laissé le choix d'étendre les mécanismes NodeAtlas à votre partie cliente ou d'utiliser la structure de votre choix.

Pour un comparatif avec d'autre Librarie/Framework/API JavaScript côté serveur, [vous pouvez consulter cette grille](#nodeatlas-vs-les-autres).


### Exemples de réalisations avec NodeAtlas ###

Voici une liste de repository que vous pouvez décortiquer à votre gré :

- [Génération et maintenance de maquette HTML](https://github.com/Haeresis/ResumeAtlas/).
- [Maintenance de site HTML (sans Back-end)](https://github.com/Haeresis/ResumeAtlas/).
- [Site Node.js avec Websocket et PopState](https://github.com/Haeresis/BookAtlas/).
- [Site Node.js avec base MongoDB et Redis](https://github.com/Haeresis/BlogAtlas/).
- [Exemple Node.js de modification de contenu live sans Back-office](https://github.com/Haeresis/EditAtlas/).
- [Simple Serveur Web pour un dossier](https://github.com/Haeresis/SimpleAtlas/).
- [Exemple d'API REST](https://github.com/Haeresis/ApiAtlas/).
- [Utilisation du préprocesseur Less en temps réel côté serveur](https://github.com/Haeresis/LessAtlas/).
- [Création d'extensions pour booster les capacités natives](https://github.com/Haeresis/ComponentAtlas/).



### Table des matières ###

- [Avant-propos](#avant-propos)
 - [Pour réaliser quoi ?](#pour-réaliser-quoi-)
 - [Pourquoi NodeAtlas ?](#pourquoi-nodeatlas-)
 - [Et les autres Frameworks JavaScript ?](#et-les-autres-frameworks-javascript-)
 - [Exemples de réalisations avec NodeAtlas](#exemples-de-réalisations-avec-nodeatlas)
 - [Table des matières](#table-des-matières)
 - [Documentation](#documentation)
 - [Contribution](#contribution)
- [Installation](#installation)
- [Commencer avec NodeAtlas](#commencer-avec-nodeatlas)
 - [Ensemble de fichiers](#ensemble-de-fichiers)
 - [Configuration minimale](#configuration-minimale)
 - [Lancer le site avec NodeAtlas](#lancer-le-site-avec-nodeatlas)
- [Création de site (partie Front-end)](#création-de-site-partie-front-end)
 - [Plusieurs pages](#plusieurs-pages)
 - [Raccourci de template](#raccourci-de-template)
 - [Héberger des images, polices, CSS, JS, etc.](#héberger-des-images-polices-css-js-etc)
 - [Gérer des inclusions pour éviter la redondance du code](#gérer-des-inclusions-pour-éviter-la-redondance-du-code)
 - [Gérer des variations au sein d'un même template](#gérer-des-variations-au-sein-dun-m%C3%AAme-template)
 - [Gérer le multilingue](#gérer-le-multilingue)
 - [Changer les paramètres d'url](#changer-les-paramètres-durl)
 - [Créer ses propres variables de webconfig](#créer-ses-propres-variables-de-webconfig)
 - [Utiliser NodeAtlas pour générer des maquettes HTML](#utiliser-nodeatlas-pour-générer-des-maquettes-html)
- [Développement JavaScript (partie Back-end)](#développement-javascript-partie-back-end)
 - [Utiliser NodeAtlas pour faire tourner un site](#utiliser-nodeatlas-pour-faire-tourner-un-site)
 - [Utiliser les Websocket à la place des échanges AJAX](#utiliser-les-websocket-à-la-place-des-échanges-ajax)
 - [Utiliser une base de donnée MySQL (SQL)](#utiliser-une-base-de-donnée-mysql-sql)
 - [Utiliser une base de donnée MongoDB (NoSQL)](#utiliser-une-base-de-donnée-mongodb-nosql)
- [Pour aller plus loin](#pour-aller-plus-loin)
 - [Gérer le routage (Url Rewriting)](#gérer-le-routage-url-rewriting)
 - [Gérer les pages inexistantes](#gérer-les-pages-inexistantes)
 - [Gérer les redirections](#gérer-les-redirections)
 - [Gérer les Headers de page](#gérer-les-headers-de-page)
 - [Faire tourner le site en HTTPs](#faire-tourner-le-site-en-https)
 - [Minifier les CSS/JS](#minifier-les-cssjs)
 - [Générer les CSS avec Less](#générer-les-css-avec-less)
 - [Générer les CSS avec Stylus](#générer-les-css-avec-stylus)
 - [Optimiser les Images](#optimiser-les-images)
 - [Injecter du CSS inline pour maintenir des assets Email](#injecter-du-css-inline-pour-maintenir-des-assets-email)
 - [Autoriser/Interdire les demandes GET/POST](#autoriserinterdire-les-demandes-getpost)
 - [Autoriser/Interdire les demandes PUT/DELETE](#autoriserinterdire-les-demandes-putdelete)
 - [Changer les paramètres des Sessions](#changer-les-paramètres-des-sessions)
 - [Stockage externe des Sessions](#stockage-externe-des-sessions)
 - [Changer les chevrons <% %> du moteur de template](#changer-les-chevrons---du-moteur-de-template)
 - [Changer l'url final des hostname et port d'écoute](#changer-lurl-final-des-hostname-et-port-découte)
 - [Générer les urls dynamiquement](#générer-les-urls-dynamiquement)
- [CLI / Commandes de lancement](#cli--commandes-de-lancement)
 - [--directory](#--directory-path)
 - [--webconfig](#--webconfig-webconfigname)
 - [--browse](#--browse-subpath)
 - [--httpHostname](#--httphostname-httphostname)
 - [--httpPort](#--httpport-httpport)
 - [--generate](#--generate)
- [API / NodeAtlas comme module npm](#api--nodeatlas-comme-module-npm)
- [NodeAtlas comme simple serveur web](#nodeatlas-comme-simple-serveur-web)
- [Faire tourner NodeAtlas sur serveur](#faire-tourner-nodeatlas-sur-serveur)
 - [Dans un environnement Windows Server avec iisnode](#dans-un-environnement-windows-server-avec-iisnode)
 - [Dans un environnement Unix avec forever](#dans-un-environnement-unix-avec-forever)
 - [Dans un environnement Unix avec Nginx](#dans-un-environnement-unix-avec-nginx)
 - [Proxy](#proxy)
- [À propos de NodeAtlas](#À-propos-de-nodeatlas)



### Documentation ###

En complément de ce README, vous avez également accès au,
- [tl;dr](http://blog.lesieur.name/nodeatlas-le-framework-nodejs-mvc2-oriente-front-end/) et aux
- [détails des fonctions de l'objet NA](http://haeresis.github.io/NodeAtlas/doc/index.html) (En).



### Contribution ###

Si vous souhaitez contribuer avec :

 - De l'amélioration ou de la correction de code,
 - De la correction d'orthographe pour la documentation française ou
 - De la traduction décente pour la documentation anglaise

Merci de respecter ses étapes :

 1. Forkez le repository NodeAtlas.
 2. Travaillez sur une branch créé à partir de la branch master.
 3. Commitez et pushez votre branch.
 4. Faites une pull request.
 5. Soyez patient. ;-)

Tout en respectant les conventions suivantes :

- Passez le test Sonarqube JS avec 0% de Dette technique.

Merci d'avance pour votre aide !





## Installation ##

*Avant toutes choses, assurez-vous d'avoir installé [Node.js](https://nodejs.org/en/) et [Python 2.7](https://www.python.org/download/releases/2.7/) pour installer NodeAtlas sans aucun problème.*

Il y a plusieurs solutions pour installer NodeAtlas :

- Télécharger NodeAtlas depuis le site officiel [NodeAtlas](https://github.com/Haeresis/NodeAtlas).

   _Une fois téléchargé, dézippez **NodeAtlas** dans le dossier qui vous conviendra._

   **Lancer au moins une fois NodeAtlas à la ligne de commande `\> node </path/to/>node-atlas/node-atlas.js`, pour installer les _node_modules_.**

- `npm install node-atlas` (recommandé pour un [usage sous forme de module](#api--nodeatlas-comme-module-npm) dans un projet).

   _Ceci installera **NodeAtlas** dans le dossier `node_modules/node-atlas` du dossier d'exécution de la commande._

- `npm install -g node-atlas` (recommandé pour un [usage sous forme de module](#api--nodeatlas-comme-module-npm) dans beaucoup de projet ou pour [un usage à la ligne de commande](#cli--commandes-de-lancement)).

   _Ceci installera **NodeAtlas** dans le dossier `node_modules/node-atlas` global._

- Cloner le répertoire depuis [GitHub](https://github.com/Haeresis/NodeAtlas/) (recommandé pour participer au développement).

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

Vous aurez accès à votre « Hello World » à la page *http://localhost/* dans un navigateur.


#### Avec un exécutable sur votre OS ####

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

nodeAtlas().run();
```

```
\> node server.js
```





## Création de site (partie Front-end) ##

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
            "template": "member.htm",
            "postSupport": false
        },
        "/member-without-extension/": {
            "template": "member.htm",
            "getSupport": false
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

*Note : Si* ***templatesRelativePath*** *n'est pas présent dans « webconfig.json », par défaut le dossier des templates est bien* ***templates***. ***templatesRelativePath*** *est donc utile seulement pour changer le nom/chemin du répertoire.*



### Raccourci de template ###

La configuration ci-dessous est équivalente à la configuration de la section juste au-dessus

```js
{
    "templatesRelativePath": "templates",
    "routes": {
        "/": "index.htm",
        "/member.html": {
            "template": "member.htm",
            "postSupport": false
        },
        "/member-without-extension/": {
            "template": "member.htm",
            "getSupport": false
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
    "assetsRelativePath": "assets",
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

*Note : Si* ***assetsRelativePath*** *n'est pas présent dans « webconfig.json », par défaut le dossier public est bien* ***assets***. ***assetsRelativePath*** *est donc utile seulement pour changer le nom/chemin du répertoire.*

#### maxAge, Etag, etc. ####

Il est possible de manager les informations livrées par NodeAtlas à la demande d'une ressource (comme le `maxAge`, l'`etag`, etc.) via la propriété `staticOptions` du webconfig. Pour connaître la totalité des possibilités, voir les options d'[Express](http://expressjs.com/api.html#express.static).

Par exemple, pour un webconfig de développement, il peut être intéressant de mettre le `maxAge` à 0 de manière à toujours avoir la dernière modification d'un fichier sans s'acharner sur le rechargement de page.

```
{
    "staticOptions": {
        "maxAge": 0
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```



### Gérer des inclusions pour éviter la redondance du code ###

Vous pouvez segmenter vos codes HTML afin de ne pas répéter le code redondant comme par exemple les parties « head » et « foot » ou tout autre fragment de code :

```js
{
    "componentsRelativePath": "components/",
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

*Note : Si* ***componentsRelativePath*** *n'est pas présent dans « webconfig.json », par défaut le dossier des includes est bien* ***components***. ***componentsRelativePath*** *est donc utile seulement pour changer le nom/chemin de répertoire.*



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
        <title><%- specific.titlePage %></title>

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

    <div class="title"><%- common.titleWebsite %></div>

    <div>
        <h1><%- specific.titlePage %></h1>
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

*Note : Si* ***variationsRelativePath*** *n'est pas présent dans « webconfig.json », par défaut le dossier des variations est bien* ***variations***. ***variationsRelativePath*** *est donc utile seulement pour changer le nom/chemin de répertoire.*



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
        <h1><%- specific.titlePage %></h1>
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

*Note : Par défaut c'est le* ***languageCode*** *racine qui conditionne la langue d'affichage du site. Cependant, spécifiquement par page on peut changer la langue avec également le* ***languageCode***. *Il faut également savoir que dès que le site ou une page à un* ***languageCode*** *dans la configuration, ses fichiers de variations doivent être placées dans un sous répertoire portant le nom du* ***languageCode***.


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



### Utiliser NodeAtlas pour générer des maquettes HTML ###

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

De plus avec `--generate`, l'intégralité du dossier `assetsRelativePath` (dossier des fichiers publiques) sera copié dans le dossier `generatesRelativePath` si les deux dossiers n'ont pas un chemin identique, et que `generatesRelativePath` existe. Cela vous permet réellement d'obtenir en sortie dans le dossier de génération des pages « stand-alone » avec l'intégralité des fichiers auxquelles elles font appel (CSS / JS / Images, etc.).

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





## Développement JavaScript (partie Back-end) ##

### Utiliser NodeAtlas pour faire tourner un site ###

NodeAtlas ne se contente pas que de faciliter la génération de page web en fonction de variable dans les fichiers de variation. NodeAtlas vous permet également d'intéragir avec le contenu des fichiers variations ou avec le DOM généré en fonction ;

- des paramètres dans la partie query de l'url (GET),
- des paramètres dans le body de la requête (POST),
- de vous connecter à des bases de donner,
- de maintenir des sessions, 
- de faire des échange AJAX ou même Websocket et
- de faire bien plus encore !

Pour cela, il vous est possible d'intéragir à divers endroit du cycle de vie de création d'une page grâce à un contrôleur commun (`commonController`) et à un controlleur spécifique à chaque page (`routes[<route>].controller`).

Voici à quoi peut ressembler un `webconfig.json` permettant d'atteindre tous les points du cycle de vie d'une page.

```js
{
    "controllersRelativePath": "controllers",
    "commonController": "common.js",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json",
            "controller": "index.json"
        }
    }
}
```

*Note : Si* ***controllersRelativePath*** *n'est pas présent dans « webconfig.json », par défaut le dossier des controlleurs est bien* ***controllers***. ***controllersRelativePath*** *est donc utile seulement pour changer le nom/chemin du répertoire.*

et voici le détail des endroits ou vous pouvez intervenir :

**Démarrage de NodeAtlas** 
> Initialisation des modules internes

> - *loadModules* --> à manipuler depuis le fichier `commonController` (`common.js` dans l'exemple).

> Initialisation des modules externes

> - *setConfigurations* --> à manipuler depuis le fichier `commonController` (`common.js` dans l'exemple).

> Lancement du serveur web

> - *setSessions* --> à manipuler depuis le fichier `commonController` (`common.js` dans l'exemple).

> Maintient du serveur up

**Requête/Réponse HTTP de NodeAtlas** 
> Traitement de la Request du Client

> - *changeVariation* --> à manipuler depuis le fichier `commonController` (`common.js` dans l'exemple).

> - *changeVariation* --> à manipuler depuis le fichier `routes[<route>].controller` (`index.js` dans l'exemple).

> Assemblage des Templates et Compilation des Variations => DOM complet de la Réponse.

> - *changeDom* --> à manipuler depuis le fichier `commonController` (`common.js` dans l'exemple).

> - *changeDom* --> à manipuler depuis le fichier `routes[<route>].controller` (`index.js` dans l'exemple).

> Envoi de la Response au Client

#### changeVariation ####

Pour intercepter les variations, vous pouvez soit utiliser le contrôleur commun pour tout le site et/ou également le contrôleur par page.

Voici un exemple utilisant les deux interceptions, d'abord la commune au deux pages, puis celle de chaque page :

```js
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json",
            "controller": "index.js"
        }
    }
}
```

avec cet ensemble de fichier :

```
components/
— head.htm
— foot.htm
variations/
— common.json
— index.json
controllers/
— common.js
— index.js
templates/
— index.htm
webconfig.json
```

En demandant la page `http://localhost/?title=Haeresis` en POST avec une variable `example=Ceci+est+un+test` dans le corp de requête, les fichiers suivants (entre autre) seront utilisés :

*variations/common.json*

```js
{
    "titleWebsite": "Titre du site"
}
```

*variations/index.json*

```js
{
    "titlePage": "Bienvenue",
    "content": "<p>C'est la page d'accueil.</p>"
}
```

*templates/index.htm*

```html
    <%- include('head.htm') %>

    <div class="title"><%- common.titleWebsite %></div>

    <div>
        <h1><%- specific.titlePage %></h1>
        <%- specific.content %>
    </div>

    <%- include('foot.htm') %>
```

*controllers/common.js*

```js
// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté pour toute request HTTP, toute page confondue.
exports.changeVariation = function (params, next) {
    var variation = params.variation,
        request = params.request,
        response = params.response;

    // Ici on modifie les variables de variations.

    console.log(variation.common.titleWebsite); // "Titre du site"
    console.log(variation.specific.titlePage); // "Bienvenue"
    console.log(variation.specific.content); // "C'est la page d'accueil."

    if (request.query["title"]) {
        variation.specific.titlePage = variation.specific.titlePage + " " + request.query.title;
    }
    if (request.body["example"]) {
        variation.specific.content = request.body.example;
    }
    
    console.log(variation.common.titleWebsite); // "Titre du site"
    console.log(variation.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variation.specific.content); // "Ceci est un test"

    // On ré-injecte les modifications.
    next(variation);
};
```

*controllers/index.js*

```js
// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariation = function (params, next) {
    var variation = params.variation,
        request = params.request,
        response = params.response;

    // Ici on modifie les variables de variations.

    console.log(variation.common.titleWebsite); // "Titre du site"
    console.log(variation.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variation.specific.content); // "Ceci est un test"

    variation.common.titleWebsite = "C'est l'accueil, c'est tout.";
    variation.specific.content = "C'est l'accueil, c'est tout.";

    console.log(variation.common.titleWebsite); // "C'est l'accueil, c'est tout."
    console.log(variation.specific.titlePage); // "Bienvenue Haeresis"
    console.log(variation.specific.content); // "C'est l'accueil, c'est tout."

    // On ré-injecte les modifications.
    next(variation);
};
```

ce qui produit la sortie suivante :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>C'est l'accueil, c'est tout.</title>
    </head>
    <body>
        <div class="title">C'est l'accueil, c'est tout.</div>
        <div>
            <h1>Bienvenue Haeresis</h1>
            C'est l'accueil, c'est tout.
        </div>
    </body>
</html>
```

Si vous décidez de déshabonner la variation spécifique avec le webconfig suivant :

```js
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json"
        }
    }
}
```

alors la sortie sera :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Titre du site</title>
    </head>
    <body>
        <div class="title">Titre du site</div>
        <div>
            <h1>Bienvenue Haeresis</h1>
            Ceci est un test
        </div>
    </body>
</html>
```

#### changeDom ####

Pour intercepter le DOM avant qu'il ne soit renvoyé, vous pouvez soit utiliser le contrôleur commun pour tout le site et/ou également le contrôleur par page.

Voici un exemple utilisant les deux interceptions, d'abord la commune au deux pages, puis celle de chaque page :

```js
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json",
            "controller": "index.js"
        }
    }
}
```

avec cet ensemble de fichier :

```
variations/
— index.json
controllers/
— common.js
— index.js
templates/
— index.htm
webconfig.json
```

En demandant la page `http://localhost/` les fichiers suivants (entre autre) seront utilisés :

*variations/common.json*

```js
{
    "titleWebsite": "Titre du site"
}
```

*variations/index.json*

```js
{
    "titlePage": "Bienvenue",
    "content": "<p>C'est la page d'accueil.</p>"
}
```

*templates/index.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title><%- common.titleWebsite %></title>
    </head>
    <body>
        <div class="title"><%- common.titleWebsite %></div>
        <div>
            <h1><%- specific.titlePage %></h1>
            <%- specific.content %>
        </div>
    </body>
</html>
```

*controllers/common.js*

```js
// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté pour toute request HTTP, toute page confondue.
exports.changeDom = function (params, next) {
    var NA = this,
        dom = params.dom,
        request = params.request,
        response = params.response,
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
```

*controllers/index.js*

```js
// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (params, next) {
    var NA = this,
        dom = params.dom,
        request = params.request,
        response = params.response,
        cheerio = NA.modules.cheerio, // Récupération de jsdom pour parcourir le DOM avec jQuery.
        $ = cheerio.load(dom, { decodeEntities: false }); // On charge les données pour les manipuler comme un DOM.

    // On modifie tous les contenu des noeuds avec la classe `.title`.
    $(".title").text("Modification de Contenu");

    // On recrée une nouvelle sortie HTML avec nos modifications.
    dom = $.html();

    // On réinjecte les modifications.
    next(dom);
};
```

ce qui produit la sortie suivante :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8">
        <title>Titre du site</title>
    </head>
    <body>
        <div class="title">Modification de Contenu</div>
        <div>
            <div>Bienvenue</div>
            <p>C'est la page d'accueil.</p>
        </div>
    </body>
</html>
```

#### loadModules ####

Pour charger d'autres modules qui ne sont pas fournis avec NodeAtlas vous pouvez utiliser le contrôleur commun pour tout le site afin de les charger une seule fois et de les rendres disponible dans tous vos controlleurs.

Voici un exemple utilisant un module externe à NodeAtlas :

```js
{
    "commonController": "common.js",
    "routes": {
        "/": {
            "template": "index.htm",
            "controller": "index.js"
        }
    }
}
```

avec cet ensemble de fichier :

```
controllers/
— common.js
— index.js
templates/
— index.htm
webconfig.json
```

En demandant la page `http://localhost/` les fichiers suivants (entre autre) seront utilisés :

*templates/index.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Test Module</title>
    </head>
    <body>
        <div class="title">Test Module</div>
        <div>
            <h1>Test Module</h1>
            <%- example %>
        </div>
    </body>
</html>
```

*controllers/common.js*

```js
// On intervient avant que la phase de chargement des modules ne soit achevée.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.loadModules = function () {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Associations de chaque module pour y avoir accès partout.
    NA.modules.marked = require('marked');
};
```

*controllers/index.js*

```js
// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariation = function (params, next) {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this,
        variation = params.variation,
        marked = NA.modules.marked;

    variation.example = marked("I am using __markdown__.");

    // On ré-injecte les modifications.
    next(variation);
};
```

ce qui produit la sortie suivante :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Test Module</title>
    </head>
    <body>
        <div class="title">Test Module</div>
        <div>
            <h1>Test Module</h1>
            <p>I am using <strong>markdown</strong>.</p>
        </div>
    </body>
</html>
```

#### setConfigurations ####

Pour configurer le serveur web de NodeAtlas ([ExpressJs](http://expressjs.com/)) vous pouvez utiliser le contrôleur commun pour tout le site afin de les charger une seule fois et de les rendres disponible dans tous vos controlleurs.

Voici un exemple utilisant un middleware pour [ExpressJs](http://expressjs.com/) :

```js
{
    "commonController": "common.js",
    "routes": {
        "/": {
            "template": "index.htm",
            "controller": "index.js"
        }
    }
}
```

avec cet ensemble de fichier :

```
controllers/
— common.js
templates/
— index.htm
webconfig.json
```

En demandant la page `http://localhost/` les fichiers suivants (entre autre) seront utilisés :

*templates/index.htm*

```html
<%- content %>
```

*controllers/common.js*

```js
// On intervient au niveau du serveur avant que celui-ci ne soit démarré.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setConfigurations = function (next) {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Middleware utilisé lors de chaque requête.
    NA.httpServer.use(function (request, response, next) {
        response.setHeader("X-Frame-Options", "ALLOW-FROM http://www.lesieur.name/");
        next();
    });

    // On ré-injecte les modifications.
    next();
};
```

*controllers/index.js*

```js
// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariation = function (params, next) {
    var variation = params.variation;

    // On prépare le fichier pour un affichage JSON.
    variation.currentRouteParameters.headers = {
        "Content-Type": "application/json; charset=utf-8"
    };
    variation.content = JSON.stringify(variation, null, "    ");

    // On ré-injecte les modifications.
    next(variation);
};
```

ce qui produit la sortie suivante :

```html
{
    "urlBasePathSlice": "http://localhost",
    "urlBasePath": "http://localhost/",
    "urlPath": "http://localhost/",
    "pathname": /* ... */,
    "filename": /* ... */,
    "params": {},
    "currentRouteParameters": { /* ... */ },
    "currentRoute": "/",
    "webconfig": { /* ... */ }
}
```

#### setSessions ####

Pour parler de `setSessions` nous allons par l'exemple, voir comment se connecter à `MongoDB` pour la connexion aux bases de données et comment stocker les sessions des utilisateur dans une bases de donnée avec `Redis`.

Voici l'ensemble de fichier suivant :

```
controllers/
— common.js
templates/
— index.htm
variations/
— common.json
— index.json
webconfig.json
```

Avec le `webconfig.json` :

```js
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json"
        }
    }
}
```

et avec le fichier « common.js » contenant par exemple :

```js
// Chargement des modules pour ce site dans l'objet NodeAtlas.
exports.loadModules = function () {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Associations de chaque module pour y avoir accès partout.
    NA.modules.RedisStore = require('connect-redis');
};

// Vous permettre d'utiliser une DB de Session externe.
exports.setSessions = function (next) {
    var NA = this,
        session = NA.modules.session,
        RedisStore = NA.modules.RedisStore(session);

    NA.sessionStore = new RedisStore();

    next();
};
```



### Utiliser les Websocket à la place des échanges AJAX ###

Afin de conserver une liaison ouverte entre la partie Frontale et la partie Serveur de vos applications, NodeAtlas est à même d'utiliser [Socket.IO](http://socket.io/) dont vous trouverez plus de détail sur le site officiel.

Grâce à cela, vous pourrez changer des informations en temps réel sur votre page, mais également sur toutes les autres page ouvertes à travers tous les autres navigateurs.

Avec l'ensemble de fichier suivant :

```
assets/
— javascript/
—— common.js
—— index.js
components/
— foot.htm
— head.htm
— index.htm
controllers/
— common.js
- index.js
variations/
— common.json
— index.json
templates/
— index.htm
webconfig.json
```

Contenant le `webconfig.json` suivant :

```json
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json",
            "controller": "index.js"
        }
    }
}
```

et contenant les fichiers de template suivant :

**components/head.htm**

```html
<!DOCTYPE html>
<html lang="<%= languageCode %>">
    <head>
        <meta charset="utf-8" />
        <title><%- common.titleWebsite %></title>
    </head>
    <body data-hostname="<%= webconfig.urlWithoutFileName %>" data-subpath="<%= webconfig.urlRelativeSubPath.slice(1) %>" data-variation="<%= currentRouteParameters.variation.replace(/\.json/,'') %>">
```

*Note : `data-hostname` et `data-subpath` va nous aider à paramètrer Socket.io côté Front.*

**components/foot.htm**

```html
        <script type="text/javascript" src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
        <script src="javascript/common.js"></script>
    </body>
</html>
```

*Note : Le fichier frontal de Socket.IO s'injecte ici en global.*

**components/index.htm**

```html
        <div class="title"><%- common.titleWebsite %></div>
        <div>
            <h1><%- specific.titlePage %></h1>
            <%- specific.content %>
            <div><%- new Date() %></div>
        </div>
        <button>Update</button>
```

*Note : Chaque clique sur `button` raffraichira le contenu de `components/index.htm`.*

**templates/index.htm**

```html
    <%- include('head.htm') %>
    <div class="layout">
    <%- include('index.htm') %>
    </div>
    <script src="javascript/index.js"></script>
    <%- include('foot.htm') %>
```

*Note : On construit ici la page d'accueil `/`.*

ainsi que les fichiers de variations suivant :

**variations/common.json**

```json
{
    "titleWebsite": "Socket.IO Exemple"
}
```

**variations/index.json**

```json
{
    "titlePage": "Date",
    "content": "<p>La date actuelle est :</p>"
}
```

Jusque là, rien d'inhabituel et tout fonctionnerait sans partie contrôleur. Mais nous allons mettre en place la communication via Socket.IO côté Serveur puis côté Client.

Côté serveur, nous utiliserons les fichiers suivant :

**controllers/common.js**

```js
var privates = {};

// Chargement des modules pour ce site dans l'objet NodeAtlas.
exports.loadModules = function () {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Associations de chaque module pour y avoir accès partout.
    NA.modules.socketio = require('socket.io');
    NA.modules.cookie = require('cookie');
};

// Exemple d'utilisation de Socket.IO.
privates.socketIoInitialisation = function (socketio, NA, next) {
    var optionIo = (NA.webconfig.urlRelativeSubPath) ? { path: NA.webconfig.urlRelativeSubPath + '/socket.io', secure: ((NA.webconfig.httpSecure) ? true : false) } : undefined,
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

        // Garder à portée l'ID de Session.
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
    next(io);
};

// Ajout d'évènements d'écoute pour un controller spécifique « index.js » (voir exemple dans le fichier d'après).
privates.socketIoEvents = function (io, NA) {
    var params = {};

    params.io = io;

    // Evènements pour la page index (voir exemple dans le fichier d'après).
    require('./index').asynchrone.call(NA, params);
};

// Configuration de tous les modules.
exports.setConfigurations = function (next) {
    var NA = this,
        socketio = NA.modules.socketio;

    // Initialisation de Socket IO.
    privates.socketIoInitialisation(socketio, NA, function (io) {

        // Écoute d'action Socket IO.
        privates.socketIoEvents(io, NA);

        // Étapes suivante du moteur.
        next();
    });
};
```

*Note : Ceci est la configuration global de Socket.IO côté serveur.*

**controllers/index.js**

```js
// Intégralité des actions Websocket possible pour ce template.
// Utilisé non pas par « NodeAtlas » mais par « common.js » (voir fichier précédent).
exports.asynchrone = function (params) {
    var NA = this,
        io = params.io;

    // Dès qu'on a un lien valide entre le client et notre back...
    io.sockets.on("connection", function (socket) {

        // ...rester à l'écoute de la demande « create-article-button »...
        socket.on("server-render", function (data) {
            var sessionID = socket.request.sessionID,
                session = socket.request.session,
                variation = {};

            // On récupère les variations spécifiques dans la bonne langue.
            variation = NA.addSpecificVariation("index.json", data.lang, variation);

            // On récupère les variations communes dans la bonne langue.
            variation = NA.addCommonVariation(data.lang, variation);
            
            // On récupère le fragment HTML depuis le dossier `componentsRelativePath` et on applique les variations.
            data.render = NA.newRender("index.htm", variation);

            // Et on répond à tous les clients avec un jeu de donnée dans data.
            io.sockets.emit('server-render', data);
        });
    });
};
```

Quand au côté client, nous utiliserons les fichiers suivant :

**assets/javascript/common.js**

```js
window.website = window.website || {};

(function (publics) {
    "use strict";

    var privates = {},
        optionsSocket,
        body = document.getElementsByTagName("body")[0];

    // On configure Socket.IO côté Client.
    optionsSocket = (body.getAttribute("data-subpath") !== "") ? { path: "/" + body.getAttribute("data-subpath") + ((body.getAttribute("data-subpath")) ? "/" : "") + "socket.io" } : undefined;
    publics.socket = io.connect((body.getAttribute("data-subpath") !== "") ? body.getAttribute("data-hostname") : undefined, optionsSocket);
}(website));

// On exécute le JavaScript Spécifique à la page en cours, ici ["index"].
website[document.getElementsByTagName("body")[0].getAttribute("data-variation")].init();
```

*Note : Ceci est la configuration global de Socket.IO côté client en ce basant sur `data-subpath` et `data-hostname`.*

**assets/javascript/index.js**

```js
window.website = window.website || {};

(function (publics) {
    "use strict";

    var html = document.getElementsByTagName("html")[0],
        body = document.getElementsByTagName("body")[0],
        layout = document.getElementsByClassName("layout")[0];

    // On associe sur le bouton l'action de communiquer avec le serveur en cliquant dessus.
    function setServerRender() {
        var button = document.getElementsByTagName("button")[0];
        button.addEventListener("click", function () {
            website.socket.emit("server-render", {
                lang: html.getAttribute("lang"),
                variation: body.getAttribute("data-variation")
            });
        });
    }

    // On créer le code qui s'exécutera au lancement de la page.
    publics.init = function () {

        // On affecte l'action au bouton.
        setServerRender();

        // Quand le serveur répond après notre demande auprès de lui...
        website.socket.on("server-render", function (data) {

            // ...on met à jour le contenu...
            layout.innerHTML = data.render;

            // ...et ré-affectons l'action au bouton du nouveau contenu.
            setServerRender();
        });
    };
}(website.index = {}));
```

Lancer votre projet et rendez-vous à l'adresse `http://localhost/` dans deux onglets différent, voir même, dans deux navigateurs différent. Vous constaterez alors qu'à chaque clique sur « Update », la page se remettra à jour (comme le montre la date courante) sur tous les onglets ouvert.

Grâce à `NA.addSpecificVariation`, `NA.addCommonVariation` et `NA.newRender`, il est possible de générer une nouvelle compilation d'un template (composant) et d'une variation commune et spécifique.

Si `data.lang` dans notre exemple est de type `undefined`, alors les fichiers seront cherchés à la racine. Si `variation` est de type `undefined` alors un objet contenant uniquement le scope demandé sera renvoyé.



### Utiliser une base de donnée MySQL (SQL) ###

Nous allons voir à présent comment utiliser des informations venant d'une base de donnée. Pour cela nous allons utiliser le module npm `mysql`. Il va également nous falloir [installer un serveur MySQL](https://dev.mysql.com/downloads/installer/).

#### Base de donnée MySQL ####

Tout d'abord, nous allons alimenter la base de donnée avec la base `demo` :

```
CREATE DATABASE demo;
```

et la sélectionner :

```
USE demo
```

puis créer la table `user` :

```
CREATE TABLE user
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    lastname VARCHAR(100),
    firstname VARCHAR(100),
    email VARCHAR(255),
    birthdate DATE,
    gender TINYINT(1),
    country VARCHAR(255),
    town VARCHAR(255),
    zipcode VARCHAR(5),
    address VARCHAR(255)
);
```

et la remplir avec un jeu de données :

```
INSERT INTO user (
    lastname,
    firstname,
    email,
    birthdate,
    gender,
    country,
    town,
    zipcode,
    address
) VALUES (
    "Lesieur",
    "Bruno",
    "bruno.lesieur@gmail.com",
    "1988/07/18",
    true,
    "France",
    "Annecy",
    74000,
    "66 avenue de Genève"
);
```

#### Fichiers NodeAtlas ####

Avec le jeu de fichier suivant :

```
assets/
— javascript/
—— models/
——— user.js
controllers/
— common.js
— index.js
models/
— user.js
templates/
— index.htm
variations/
— common.json
— index.json
webconfig.json
```

Nous allons utiliser le `webconfig.json` suivant avec une variable custom `_mysqlConfig` qui contiendra toutes les informations pour se connecter à la base de donnée :

```
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json",
            "controller": "index.js"
        }
    },
    "_mysqlConfig": {
        "host": "localhost",
        "user": "root",
        "password": "root",
        "database": "demo"
    }
}
```

Avec les fichiers suivant pour afficher la page :

**templates/index.htm**

```html
<!DOCTYPE html>
<html lang="<%- languageCode %>">
    <head>
        <meta charset="utf-8" />
        <title><%- common.titleWebsite %></title>
    </head>
    <body>
        <div class="title"><%- common.titleWebsite %></div>
        <div>
            <h1><%- specific.titlePage %></h1>
            <%- specific.content %>
            <ul>
                <li>Id: <strong><%- id %></strong></li>
                <li>Lastname: <strong><%- lastname %></strong></li>
                <li>Firstname: <strong><%- firstname %></strong></li>
                <li>Email: <strong><%- email %></strong></li>
                <li>Birthdate: <strong><%- birthdate %></strong></li>
                <li>Gender: <strong><%- gender %></strong></li>
                <li>Country: <strong><%- country %></strong></li>
                <li>Town: <strong><%- town %></strong></li>
                <li>Zipcode: <strong><%- zipcode %></strong></li>
                <li>Address: <strong><%- address %></strong></li>
            </ul>
        </div>
    </body>
</html>
```

**variations/common.json**

```js
{
    "titleWebsite": "Exemple MySql",
    "male": "Homme",
    "female": "Femme"
}
```

**variations/index.json**

```js
{
    "titlePage": "Table User",
    "content": "<p>Détail de l'entrée `bruno`.</p>"
}
```

Enfin nous allons nous connecter à la base de donnée avec le controlleur globale `controllers/common.js` :

```js
exports.loadModules = function () {
    var NA = this;

    NA.modules.mysql = require('mysql');
    NA.models = {};
    NA.models.User = require('../models/user.js');
};

exports.setConfigurations = function (next) {
    var NA = this,
        mysql = NA.modules.mysql;

    NA.mySql = mysql.createPool(NA.webconfig._mysqlConfig);

    next();
};
```

Et afficher les résultats via le controlleur spécifique `controllers/index.js` :

```js
exports.changeVariation = function (params, mainCallback) {
    var NA = this,
        variation = params.variation,
        User = NA.models.User,
        bruno = User();

    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            return false;
        }

        bruno
        .setConnection(connection)
        .firstname("bruno")
        .readFirst(function () {

            variation.id = bruno.id();
            variation.lastname = bruno.lastname();
            variation.firstname = bruno.firstname();
            variation.email = bruno.email();
            variation.birthdate = bruno.birthdate();
            variation.gender = (bruno.gender()) ? variation.common.male : variation.common.female;
            variation.country = bruno.country();
            variation.town = bruno.town();
            variation.zipcode = bruno.zipcode();
            variation.address = bruno.address();

            mainCallback(variation);
        });
    });
};
```

en utilisant le model `user` via le fichier de connexion à la base de donnée `models/user.js` :

```js
/* jslint esversion: 6 */
var user = require('../assets/javascript/models/user.js');

function User(connection) {
    var privates = {},
        publics = this;

    privates.connection = connection;

    if (!(publics instanceof User)) {
        return new User();
    }

    publics.setConnection = function (connection) {
        privates.connection = connection;
        return publics;
    };

    user.call(publics);

    publics.readFirst = function (callback) {
        var select = `SELECT
                    id,
                    lastname,
                    firstname,
                    email,
                    birthdate,
                    gender,
                    country,
                    town,
                    zipcode,
                    address
                FROM user`, 
            where = "", 
            limit = " LIMIT 0,1 ",
            addWhere = " WHERE ";

        if (publics.id()) { where += addWhere + "`id` = '" + publics.id().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.lastname()) { where += addWhere + "`lastname` = '" + publics.lastname().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.firstname()) { where += addWhere + "`firstname` = '" + publics.firstname().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.email()) { where += addWhere + "`email` = '" + publics.email().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.birthdate()) { where += addWhere + "`birthdate` = '" + publics.birthdate().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.gender()) { where += addWhere + "`gender` = '" + publics.gender().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.country()) { where += addWhere + "`country` = '" + publics.country().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.town()) { where += addWhere + "`town` = '" + publics.town().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.zipcode()) { where += addWhere + "`zipcode` = '" + publics.zipcode().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.address()) { where += addWhere + "`address` = '" + publics.address().replace(/'/g, "''") + "'"; addWhere = ' && '; }

        privates.connection.query(select + where + limit, function(err, rows, fields) {
            if (err) console.log(err);

            if (rows[0]) {
                publics.id(rows[0].id);
                publics.lastname(rows[0].lastname);
                publics.firstname(rows[0].firstname);
                publics.email(rows[0].email);
                publics.birthdate(rows[0].birthdate);
                publics.gender((rows[0].gender) ? true : false);
                publics.country(rows[0].country);
                publics.town(rows[0].town);
                publics.zipcode(rows[0].zipcode);
                publics.address(rows[0].address);
            }

            callback();
        });
    };
}

User.prototype = Object.create(user.prototype);
User.prototype.constructor = User;

module.exports = User;
```

basé sur une classe `user` partagé entre le Front et le Back `assets/javascript/models/user.js` :

```js
(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.User = factory;
    }
}(this, function User() {
    var privates = {},
        publics = this;

    if (!(publics instanceof User)) {
        return new User();
    }

    publics.id = function (id) {
        if (typeof id === 'undefined') {
            return privates.id;
        } else {
            privates.id = id;
            return publics;
        }
    };

    publics.lastname = function (lastname) {
        if (typeof lastname === 'undefined') {
            return privates.lastname;
        } else {
            privates.lastname = lastname;
            return publics;
        }
    };

    publics.firstname = function (firstname) {
        if (typeof firstname === 'undefined') {
            return privates.firstname;
        } else {
            privates.firstname = firstname;
            return publics;
        }
    };

    publics.email = function (email) {
        if (typeof email === 'undefined') {
            return privates.email;
        } else {
            privates.email = email;
            return publics;
        }
    };

    publics.birthdate = function (birthdate) {
        if (typeof birthdate === 'undefined') {
            return privates.birthdate;
        } else {
            privates.birthdate = birthdate;
            return publics;
        }
    };

    publics.gender = function (gender) {
        if (typeof gender === 'undefined') {
            return privates.gender;
        } else {
            privates.gender = gender;
            return publics;
        }
    };
    
    publics.country = function (country) {
        if (typeof country === 'undefined') {
            return privates.country;
        } else {
            privates.country = country;
            return publics;
        }
    };

    publics.town = function (town) {
        if (typeof town === 'undefined') {
            return privates.town;
        } else {
            privates.town = town;
            return publics;
        }
    };

    publics.zipcode = function (zipcode) {
        if (typeof zipcode === 'undefined') {
            return privates.zipcode;
        } else {
            privates.zipcode = zipcode;
            return publics;
        }
    };

    publics.address = function (address) {
        if (typeof address === 'undefined') {
            return privates.address;
        } else {
            privates.address = address;
            return publics;
        }
    };
}));
```

Vous obtiendrez la sortie suivante :

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="utf-8" />
        <title>Exemple MySql</title>
    </head>
    <body>
        <div class="title">Exemple MySql</div>
        <div>
            <h1>Table User</h1>
            <p>Détail de l'entrée `bruno`.</p>
            <ul>
                <li>Id: <strong>1</strong></li>
                <li>Lastname: <strong>Lesieur</strong></li>
                <li>Firstname: <strong>Bruno</strong></li>
                <li>Email: <strong>bruno.lesieur@gmail.com</strong></li>
                <li>Birthdate: <strong>Mon Jul 18 1988 00:00:00 GMT+0200 (Paris, Madrid (heure d’été))</strong></li>
                <li>Gender: <strong>Homme</strong></li>
                <li>Country: <strong>France</strong></li>
                <li>Town: <strong>Annecy</strong></li>
                <li>Zipcode: <strong>74000</strong></li>
                <li>Address: <strong>66 avenue de Genève</strong></li>
            </ul>
        </div>
    </body>
</html>
```



### Utiliser une base de donnée MongoDB (NoSQL) ###

Nous allons voir à présent comment utiliser des informations venant d'une base de donnée non sql. Pour cela nous allons utiliser le module npm `mongoose`. Il va également nous falloir [installer un serveur MongoDB](https://www.mongodb.com/).

#### Base de donnée MongoDB ####

Tout d'abord, nous allons alimenter la base de donnée avec la base `demo` et la sélectionner :

```
use demo
```

puis créer la collection `user` :

```
db.createCollection("user")
```

et la remplir avec un document :

```
db.user.insert({
    email: "bruno.lesieur@gmail.com",
    identity: {
        lastname: "Lesieur",
        firstname: "Bruno",
        gender: true,
        birthdate : new Date("1988/07/18")
    },
    location: {
        country: "France",
        town: "Annecy",
        zipcode: "74000",
        address: "66 avenue de Genève"
    }
})
```

#### Fichiers NodeAtlas ####

Avec le jeu de fichier suivant :

```
assets/
— javascript/
—— models/
——— user.js
controllers/
— common.js
— index.js
templates/
— index.htm
variations/
— common.json
— index.json
webconfig.json
```

Nous allons utiliser le `webconfig.json` suivant avec une variable custom `_mongodbConfig` qui contiendra toutes les informations pour se connecter à la base de donnée :

```
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json",
            "controller": "index.js"
        }
    },
    "_mongodbConfig": {
        "host": "localhost",
        "port": "27017",
        "database": "demo"
    }
}
```

Avec les fichiers suivant pour afficher la page :

**templates/index.htm**

```html
<!DOCTYPE html>
<html lang="<%- languageCode %>">
    <head>
        <meta charset="utf-8" />
        <title><%- common.titleWebsite %></title>
    </head>
    <body>
        <div class="title"><%- common.titleWebsite %></div>
        <div>
            <h1><%- specific.titlePage %></h1>
            <%- specific.content %>
            <ul>
                <li>Id: <strong><%- id %></strong></li>
                <li>Lastname: <strong><%- lastname %></strong></li>
                <li>Firstname: <strong><%- firstname %></strong></li>
                <li>Email: <strong><%- email %></strong></li>
                <li>Birthdate: <strong><%- birthdate %></strong></li>
                <li>Gender: <strong><%- gender %></strong></li>
                <li>Country: <strong><%- country %></strong></li>
                <li>Town: <strong><%- town %></strong></li>
                <li>Zipcode: <strong><%- zipcode %></strong></li>
                <li>Address: <strong><%- address %></strong></li>
            </ul>
        </div>
    </body>
</html>
```

**variations/common.json**

```js
{
    "titleWebsite": "MongoDB Exemple",
    "male": "Homme",
    "female": "Femme"
}
```

**variations/index.json**

```js
{
    "titlePage": "Collection User",
    "content": "<p>Détail du document `{ \"identity.firstname\": \"Bruno\" }`.</p>"
}
```

Enfin nous allons nous connecter à la base de donnée avec le controlleur globale `controllers/common.js` :

```js
exports.loadModules = function () {
    var NA = this,
        path = NA.modules.path;

    NA.modules.mongoose = require('mongoose');
    NA.models = {};
    NA.models.User = require('../assets/javascript/models/user.js');
};

exports.setConfigurations = function (next) {
    var NA = this,
        mongoose = NA.modules.mongoose,
        config = NA.webconfig._mongodbConfig;

    mongoose.Promise = global.Promise;
    mongoose.model("user", NA.models.User, "user");
    mongoose.connect("mongodb://" + config.host + ":" + config.port + "/" + config.database, function (error) {
        next();
    });
};
```

Et afficher les résultats via le controlleur spécifique `controllers/index.js` :

```js
exports.changeVariation = function (params, mainCallback) {
    var NA = this,
        variation = params.variation,
        mongoose = NA.modules.mongoose,
        User = mongoose.model('user');

    User
    .findOne({ "identity.firstname": "Bruno" })
    .exec(function (err, bruno) {

        variation.id = bruno._id;
        variation.lastname = bruno.identity.lastname;
        variation.firstname = bruno.identity.firstname;
        variation.birthdate = bruno.identity.birthdate;
        variation.email = bruno.email;
        variation.gender = (bruno.identity.gender) ? variation.common.male : variation.common.female;
        variation.country = bruno.location.country;
        variation.town = bruno.location.town;
        variation.zipcode = bruno.location.zipcode;
        variation.address = bruno.location.address;

        mainCallback(variation);
    });
};
```

en utilisant sur une classe `user` partagé entre le Front et le Back `assets/javascript/models/user.js` :

```js
var mongoose;
if (typeof module !== 'undefined' && module.exports) {
     mongoose = require('mongoose');
}

(function (expose, factory) {
    if (mongoose) {
        module.exports = factory;
    } else {
        expose.User = factory;
    }
}(this, new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type : String, match: /^\S+@\S+$/ },
    identity: {
        lastname: String,
        firstname: String,
        gender: Boolean,
        birthdate : { type : Date, default : Date.now }
    },
    location: {
        country: String,
        town: String,
        zipcode: String,
        address: String
    }
})));
```

Vous obtiendrez la sortie suivante :

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="utf-8" />
        <title>Exemple MongoDB</title>
    </head>
    <body>
        <div class="title">Exemple MongoDB</div>
        <div>
            <h1>Collection User</h1>
            <p>Détail de l'entrée `{ "identity.firstname": "Bruno" }`.</p>
            <ul>
                <li>Id: <strong>5804d4d530788ee2e52ea1c7</strong></li>
                <li>Lastname: <strong>Lesieur</strong></li>
                <li>Firstname: <strong>Bruno</strong></li>
                <li>Email: <strong>bruno.lesieur@gmail.com</strong></li>
                <li>Birthdate: <strong>Mon Jul 18 1988 00:00:00 GMT+0200 (Paris, Madrid (heure d’été))</strong></li>
                <li>Gender: <strong>Homme</strong></li>
                <li>Country: <strong>France</strong></li>
                <li>Town: <strong>Annecy</strong></li>
                <li>Zipcode: <strong>74000</strong></li>
                <li>Address: <strong>66 avenue de Genève</strong></li>
            </ul>
        </div>
    </body>
</html>
```





## Pour aller plus loin ##

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
exports.changeVariation = function (params, next) {
    var variation = params.variation;

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' ou 'etc'.

    next(variation);
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
exports.changeVariation = function (params, next) {
    var variation = params.variation;

    if (variation.params && variation.params[0]) { variation.params.member = variation.params[0]; }
    // variation.params[1] pour le deuxième match, etc...

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' ou 'etc'.

    next(variation);
}
```

Les règles de création d'url dynamique avec `regExp` sont celles des [RegExp JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

#### Routage dans un fichier partagé ####

Afin de ne pas réécrire une longue liste de route dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutualiser la déclaration des routes dans un fichier de votre choix. Par convention, c'est le fichier `routes.json`.

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

*Note : Vous pouvez vous créer plusieurs fichier de route comme `routes.en.json` et `routes.fr.json` et associer chacun d'eux dans un ensemble de webconfig paramétrés pour faire tourner un site dans diverses langues.*



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
            "statusCode": 301
        },
        "/aller-sur-node-atlas/": {
            "redirect": "http://haeresis.github.io/NodeAtlas/",
            "statusCode": 302
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
            "redirect": "/membres/:member/",
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
            "redirect": "/membres/$0/",
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

Pour le second *match* utilisez $1, pour le troisième $2, etc.



### Gérer les Headers de page ###

Par défaut, les Headers envoyé par NodeAtlas sont les suivants : `Content-Type:text/html; charset=utf-8` avec un `statusCode` à 200.

Il est tout à fait possible de modifier ses valeurs pour une entrée de route pour des APIs local au site.

```js
{
    "routes": {
        "/api/articles": {
            "template": "display-json.htm",
            "controller": "blog/list-of-articles.js",
            "mimeType": "application/json"
            "charset": "ISO-8859-1",
            "statusCode": 203
        }
    }
}
```

Il est également possible de modifier complètement les Headers, ce qui écrase toutes les autres valeurs à l'exception du `statusCode`.

```js
{
    "routes": {
        "/api/articles": {
            "template": "display-json.htm",
            "controller": "blog/list-of-articles.js",
            "statusCode": 203,
            "headers": {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            }
        }
    }
}
```



### Faire tourner le site en HTTPs ###

Il est très simple de faire tourner une instance de NodeAtlas avec le protocol HTTPs. Pour cela il suffit de créer, par exemple un dossier `security` dans lequel vous allez placer vos fichiers `server.key` et `server.crt` afin d'alimenter le protocol.

Il ne vous reste plus qu'à utiliser la configuration suivante :

```js
{
    "httpSecure": true,
    "httpSecureRelativeKeyPath": "security/server.key",
    "httpSecureRelativeCertificatePath": "security/server.crt",
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

Pour finir, il est également possible de seulement laisser la valeur de `httpSecure` à `true` pour obtenir un `https` dans vos chemins comme `urlBasePath` ou `urlBase` et de valider vos certificats d'une autre manière.

```js
{
    "httpSecure": true,
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```



### Minifier les CSS/JS ###

Vous pouvez automatiquement générer des fichiers CSS et JS minifiés et offusqués en créant des Bundles en référençant les groupes de fichiers d'entré par leur chemin d'accès et le chemin du fichier de sortie. Vous pouvez bien entendu en faire autant que vous le souhaitez. La génération des fichiers se fait à chaque démarrage de NodeAtlas que ce soit en tant que serveur ou via la commande `--generate` pour peu qu'un Bundle existe dans le Webconfig.

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

Afin de ne pas réécrire une longue liste de configuration de Bundles dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutualiser la déclaration des fichiers dans un fichier de votre choix. Par convention, c'est le fichier `bundles.json`.

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

Il est également possible de ne pas exécuter la minification au démarrage d'un site web avec NodeAtlas avec les propriétés `"stylesheetsBundlesEnable": false` et `"javascriptBundlesEnable": false` pour chaque type de Bundle.

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
        <p>This line is red.</p>
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

Par défaut, dans l'exemple ci-dessus un fichier `common.css.map` sera généré. Celui-ci permet à votre navigateur de vous indiquer qu'elle ligne du fichier `.less` a générée la propriété CSS de l'élément que vous avez sélectionné dans votre débuggeur.

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

Par défaut, les `@import` utilisés par Less seront capable de fouiller dans les sous dossier : `styles`, `stylesheets` ou `css`. Il est possible de changer cela avec :

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



### Générer les CSS avec Stylus ###

Vous pouvez utiliser le préprocesseur Stylus pour créer vos CSS. Le fonctionnement est le suivant : à chaque fois qu'une requête CSS est effectuée, si un équivalent Stylus existe il est lu et celui-ci génère le CSS. Une fois l'opération effectuée, on renvoi le CSS demandée.

Avec la structure suivante :

```
assets/
— stylesheets
—— common.styl
templates/
— index.htm
webconfig.json
```

ainsi que le webconfig suivante :

```js
{
    "enableStylus": true,
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
        <title>Stylus Test</title>
        <link rel="stylesheet" href="stylesheets/common.css">
    </head>
    <body>
        <p>This line is red.</p>
    </body>
</html>
```

*assets/stylesheets/common.styl*

```css
p
    color: #f00
```

vous générerez le fichier `assets/stylesheets/common.css` en appelant l'url `http://localhost/` ou `http://localhost/stylesheets/common.css`.

#### Source Map et Minification ####

Par défaut, dans l'exemple ci-dessus un fichier `common.css.map` sera généré. Celui-ci permet à votre navigateur de vous indiquer qu'elle ligne du fichier `.styl` a générée la propriété CSS de l'élément que vous avez sélectionné dans votre débuggeur.

Cela se désactive avec `enableStylus.sourceMap` à `false` :

```
    "enableStylus": {
        "sourceMap": false
    },
    "routes": {
        "/": "index.htm"
    }
```

Vous pouvez également générer des fichiers CSS déjà minifiés avec :

```
    "enableStylus": {
        "compress": true
    },
    "routes": {
        "/": "index.htm"
    }
```

*Note:* Plus d'options sur [la documentation du module stylus](https://www.npmjs.com/package/stylus).

#### Compiler les Stylus avec `--generate` ####

Comme les Stylus sont compilés a la volé, quand le fichier est demandé en http(s), toutes modifications dans le Stylus demandera de faire tourner le site pour la répercuter dans le CSS. Ensuite seulement vous pourrez minifier vos CSS. Il est possible d'automatiser cette tâche pour ne pas avoir à démarrer le site grâce à `enableStylus.stylus`.

Avec le `webconfig.json` suivant :

```js
{
    "enableStylus": {
        "stylus": [
            "stylesheets/common.styl",
            "stylesheets/component-1.styl",
            "stylesheets/component-2.styl",
            "stylesheets/component-3.styl"
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
        "stylus": "stylus.json"
    },
    "routes": {
        "/": "index.htm"
    }
}
```

avec `stylus.json` qui contient :

```js
[
    "stylesheets/common.styl",
    "stylesheets/component-1.styl",
    "stylesheets/component-2.styl",
    "stylesheets/component-3.styl"
]
```

Par défaut, les `@import` utilisés par Less seront capable de fouiller dans les sous dossier : `styles`, `stylesheets` ou `css`. Il est possible de changer cela avec :

```js
{
    "enableStylus": {
        "paths": [
            "subdirectory/styles-files",
        ],
        "stylus": "stylus.json"
    },
    "routes": {
        "/": "index.htm"
    }
}
```



### Optimiser les Images ###

Vous pouvez automatiquement optimiser les images que vous allez utiliser dans votre site pour en limiter le poids de chargement en créant des Optimizations en référençant les fichiers d'entrés par leur chemin d'accès et le chemin du dossier de sortie. Vous pouvez bien entendu en faire autant que vous le souhaitez. L'optimisation des images se fait à chaque démarrage de NodeAtlas que ce soit en tant que serveur ou via la commande `--generate` pour peu que des Optimizations existe dans le Webconfig.

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

#### Ajouter des options aux Optimizations ####

Il est possible de redéfinir les options par défaut pour l'optimisation via ses 4 objets :

```js
{
    "optimizations": {
        "jpg": { "progressive": false },
        "gif": { "interlaced": false },
        "png": { "optimizationLevel": 1 },
        "svg": { "multipass": false },
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

Pour connaître toutes les options c'est par ici :
- [Options Jpeg](https://www.npmjs.com/package/imagemin-jpegtran)
- [Options Gif](https://www.npmjs.com/package/imagemin-gifsicle)
- [Options Png](https://www.npmjs.com/package/imagemin-optipng)
- [Options Svg](https://www.npmjs.com/package/imagemin-svgo)

#### Optimizations dans un fichier partagé ####

Afin de ne pas réécrire une longue liste de configuration d'Optimizations dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutualiser la déclaration des fichiers dans un fichier de votre choix. Par convention, c'est le fichier `optimizations.json`.

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

Il est également possible de ne pas exécuter l'optimisation au démarrage d'un site web avec NodeAtlas avec les propriétés `"imagesOptimizationsEnable": false`.

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

*Note : si vos optimizations sont dans un fichier partagé, vous pouvez également les désactiver simplement en retirant la ligne `"optimizations": "optimizations.json"`.*

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

Il existe également la même propriété globale impactant toutes les pages.

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



### Autoriser/Interdire les demandes PUT/DELETE ###

Fonctionnant exactement de la même manière que `getSupport` et `postSupport`, les deux actions HTTP PUT et DELETE qui part défaut ne sont pas activé peuvent être activé avec `putSupport` et `deleteSupport`.

```js
{
    "getSupport": false,
    "postSupport": false,
    "putSupport": true,
    "routes": {
        "/read-all-entry/": {
            "template": "display-json.htm",
            "variation": "all-entry.json",
            "getSupport": true,
            "putSupport": false
        },
        "/read-entry/:id/": {
            "template": "display-json.htm",
            "variation": "entry.json",
            "getSupport": true,
            "putSupport": false
        },
        "/create-entry/:id/": {
            "template": "display-json.htm",
            "variation": "entry.json",
            "postSupport": true,
            "putSupport": false
        },
        "/update-entry/:id/": {
            "template": "display-json.htm",
            "variation": "entry.json"
        },
        "/delete-entry/:id/": {
            "template": "display-json.htm",
            "variation": "entry.json",
            "deleteSupport": true,
            "putSupport": false
        }
    }
}
```

Avec la configuration ci-dessus, seulement une action HTTP n'est possible par entrée, cela permet de faire des APIs REST facilement avec NodeAtlas.



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

NodeAtlas utilise également un objet de stockage mémoire (MemoryStore) qui stocke les informations dans la RAM du serveur.

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

Pour résoudre ce souci, il convient de prendre en charge l'enregistrement des sessions via une base No SQL tel que `Redis` ou `MongoBD`.

Pour cela il suffit d'utiliser la fonction `setSessions` dans le fichier `controllers/common.js` de la [partie Back-end](#utiliser-nodeatlas-pour-faire-tourner-un-site-partie-back-end).

#### Session gérées avec Redis ####

Implémenter le code suivant dans `controllers/common.js` pour stocker vos sessions dans Redis en local.

```
var website = {};

(function (publics) {
    "use strict";

    publics.loadModules = function () {
    	var NA = this;

        NA.modules.RedisStore = require('connect-redis');
    };

    publics.setSessions = function (next) {
        var NA = this,
    		session = NA.modules.session,
            RedisStore = NA.modules.RedisStore(session);

        NA.sessionStore = new RedisStore();

        next();
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

    publics.loadModules = function () {
    	var NA = this;

        NA.modules.MongoStore = require('connect-mongo');
    };

    publics.setSessions = function (next) {
        var NA = this,
        	session = NA.modules.session,
            MongoStore = NA.modules.MongoStore(session);

        NA.sessionStore = new MongoStore({
            db: 'sessions'
        });

        next();
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
        <title><?- specific.titlePage ?></title>

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
    <?- include('head.htm') ?>

    <div class="title"><?- common.titleWebsite ?></div>

    <div>
        <h1><?- specific.titlePage ?></h1>
        <?- specific.content ?>
    </div>

    <?- include('foot.htm') ?>
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

Il est possible que les chemins créés à partir de votre url soient interprétés comme des sous-dossiers qui n'ont en réalité aucune existence réelle. Cela a pour conséquence de rendre l'adresse `media/images/example.jpg` initialement accessible depuis un template affiché à **http://localhost**` impossible à récupérer quand le template est affiché à **http://localhost/sub-directory/** (puisqu'il faudrait alors que notre chemin soit plutôt `../media/images/example.jpg`).

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

Il est possible de solutionner ce problème en donnant une clé à un chemin précis et en déportant son chemin dans la propriété `url`.

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


### --directory &lt;path> ###

Il est possible de lancer NodeAtlas depuis un autre endroit que le dossier où est hébergé le site que vous souhaitez faire tourner. La commande `--directory` vous sera alors très utile.

```
\> node </path/to/>node-atlas/node-atlas.js --directory </path/to/your/website/directory/>
```


### --webconfig &lt;webconfigName> ###

Par défaut, NodeAtlas va lire votre fichier `webconfig.json`. Il est possible qu'en plus de ce fichier vous ayez créé un autre fichier `webconfig.prod.json` dont le nom de domaine est différent. Ou encore un `webconfig.fr-fr.json` avec des urls et des variations dans une autre langue. Plutôt que de renommer vos fichiers en `webconfig.json` avant de lancer le site, précisez simplement votre autre nom de configuration. Dans l'exemple suivant, notre fichier sera `webconfig.alternatif.json`.

```
\> node </path/to/>node-atlas/node-atlas.js --webconfig webconfig.alternatif.json
```



### --browse [subpath] ###

Cette commande permet d'ouvrir votre navigateur à l'adresse sur laquelle le site va tourner. Très pratique quand vous ne vous souvenez plus du port pour votre version de développement. Cette commande ne sert à rien si elle est couplée avec `--generate` (voir plus loin).

```
\> node </path/to/>node-atlas/node-atlas.js --browse
```

Vous pouvez également cibler une page précise en ajoutant la fin de l'url.


```
\> node </path/to/>node-atlas/node-atlas.js --browse index.html
```



### --httpHostname &lt;httpHostname> ###

Il est parfois utile de demander son adresse IP via un `ipconfig` pour le paramettrer dans l'url afin de rendre son site entièrement disponible sur un périphérique du réseau local (smartphone par exemple). Vous pourrez le faire avec cette commande.

```
\> node </path/to/>node-atlas/node-atlas.js --httpHostname 192.168.1.1
```



### --httpPort &lt;httpPort> ###

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
require("node-atlas")().config({
    directory: "</path/to/your/website/directory/>",
    webconfig: "webconfig.alternatif.json",
    browse: true,
    httpHostname: "192.168.1.1",
    httpPort: 7778,
    generate: true
}).init();
```

```
\> node server.js
```

Vous pouvez également lancer plusieurs sites en une fois. Bien entendu, chaque webconfig écoutera un port différent.

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

Vous pouvez aussi exécuter d'autres tâches après la génération de vos assets :

*servers.js*

```javascript
require("node-atlas")().afterGeneration(function() {
    require('child_process').exec(__dirname + "/documentation.bat", function (err, stdout, stderr) {
        console.log("Documentation generation...");
        console.log(stdout);
        console.log("Documentation generation done !");
    });
}).run({
    generate: true
});
```





## NodeAtlas comme simple serveur web ##

Si NodeAtlas ne trouve pas le « webconfig.json » ou le `--webconfig` que vous lui aurez indiqué, il se lancera en mode « Simple Serveur Web » ou « Public ».

**Ce mode est pratique pour tester très rapidement que NodeAtlas est correctement installé ou pour créer des petits exemples HTML qui ont besoin d'un serveur web pour fonctionner (retours AJAX, iframe embarquée, etc.).**

Pour bien comprendre ce que cela signifie : s'il existe un quelconque fichier dans le répertoire d'où NodeAtlas a été lancé, il sera renvoyé par requête HTTP si on le réclame via son chemin d'accès.

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



#### Dans un environnement Unix avec Nginx ####

Voici un exemple de configuration pour Nginx :

```javascript
## Server an.example.fr

upstream websocket {
    server Ip_backend:7777;
}

server {

    listen   80;
    server_name an.example.fr;

        keepalive_timeout    60;

    access_log on;

        access_log /var/log/nginx/access.log logstash;
    error_log /var/log/nginx/error-an.example.fr.log;

    location /socket.io/ {
            proxy_pass http://websocket;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
    }

    location / {
        proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;

            proxy_pass http://websocket;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_redirect off;

    }

    error_page 400 401 402 403 405 406 407 408 409 410 411 412 413 414 415 416 417 500 501 502 503 504 505 506 507 /error.html;

    location = /error.html {
            root /var/www/nginx-default;
    }
}
```

`Ip_backend` doit être remplacé par l'IP de votre sous-réseaux privé. Cela peut être `127.0.0.1` si la node tourne sur le même serveur que Nginx.

`websocket` peut être remplacé par n'importe quel mot, il faudra alors aussi modifier le `proxy_pass`. Il doit être unique à chaque node.



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





## À propos de NodeAtlas ##

NodeAtlas est fait de tel sorte que n'importe laquelle de ses instances contienne l'intégralité des fonctions lui permettant de fonctionner. NodeAtlas délivre lui-même son objet dans les controllers via les méthodes utilisées en mode Back-end avec Node.js pour vous permettre de changer ponctuellement son comportement.

### NodeAtlas VS les autres ###

|                       | **NodeAtlas**                                                                                                  | Express                  | Hapi                   | Sails                                           | Restify                  | LoopBack                                             | Meteor                                                      |
|-----------------------|----------------------------------------------------------------------------------------------------------------|--------------------------|------------------------|-------------------------------------------------|--------------------------|------------------------------------------------------|-------------------------------------------------------------|
| Type                  | Framework Web **MVC(2)**                                                                                       | Librarie serveur HTTP    | Framework serveur HTTP | Framework Web MVC                               | Librarie HTTP REST       | Framework d'API                                      | Full-stack JavaScript app platform                          |
| Top Features          | Simplicité, **Evolutivité**, Modularité                                                                        | Routage HTTP, middleware | Modularité, securité   | Familier à Rails, MVC                           | Simplicité, Routage REST | Connectivité d'Entreprise                            | Framework Front-end et Back-end                             |
| Adapté pour           | **Sites web**, Apps web, APIs REST, **Maquettage**                                                             | Apps web simple          | Apps web, APIs         | Apps web, APIs                                  | APIs REST Simple         | Apps web, APIs                                       | Apps web                                                    |
| Node Module Package   | Oui                                                                                                            | Oui                      | Oui                    | Oui                                             | Oui                      | Oui                                                  | Non                                                         |
| Extensions            | **Plugin Atlas**, Module Npm , Middleware Express                                                              | Middleware Express       | Plugins Hapi           |                                                 |                          |                                                      | Package et repository Meteor, Module Npm                    |
| Sources de données    | **Builtin**: En-memoire, fichier (JSON), REST. Avec **module npm externe**: NoSQL (MongoDB...), SQL (MySql...) |                          |                        | En memoire, Fichier, PostgreSQL, MySQL, MongoDB |                          | En mémoire/fichir, SQL NoSQL, ATG, Email, REST, SOAP | MongoDB, MySQL and PostgreSQL via 3rd-party Meteor packages |
| Langue principale     | Français                                                                                                       | Anglais                  | Anglais                | Anglais                                         | Anglais                  | Anglais                                              | Anglais                                                     |

Tous les messages d'erreurs se trouvent dans `/languages/default.json`. Si vous souhaitez les modifier, il suffit de remplacer le contenu de `default.json` (actuellement identique à celui de `en-gb`) par celui de `fr-fr.json` ou tout autre fichier traduit par vos soins.