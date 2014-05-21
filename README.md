# node-atlas #

Version : 0.14.8 (Beta)

## Avant-propos ##

NodeAtlas est une application réalisée en JavaScript et tournant avec [Node.js](http://nodejs.org/). Elle permet trois choses :

- Créer et maintenir un ensemble d'assets HTML/CSS/JavaScript pour les fournir à des développeurs Back-end.
- Créer et maintenir des sites multilingues sans Back-end.
- Développer des sites ou des applications Node.js multilingues de toutes tailles.



### Exemples de réalisations avec NodeAtlas ###

L'outil est encore en développement et je l'expérimente petit à petit avec mes propres sites.

- Exemple de génération d'asset HTML (En cours...).
- [Exemple de simple site Node.js sans Back-end](https://github.com/Haeresis/ResumeAtlas/).
- [Exemple de développement de site Node.js](https://github.com/Haeresis/BlogAtlas/).



### Table des matières ###

- [Avant-propos](#avant-propos)
 - [Exemple de réalisations avec NodeAtlas](#exemples-de-r%C3%A9alisations-avec-nodeatlas)
 - [Table des matières](#table-des-mati%C3%A8res)
 - [Roadmap d'avancement du développement](#roadmap-davancement-du-d%C3%A9veloppement)
- [Installation](#installation)
- [Commencer avec NodeAtlas](#commencer-avec-nodeatlas)
 - [Ensemble de fichiers](#ensemble-de-fichiers)
 - [Configuration minimale](#configuration-minimale)
 - [Lancer le site avec NodeAtlas](#lancer-le-site-avec-nodeatlas)
- [Différentes configurations du webconfig.json](#diff%C3%A9rentes-configurations-du-webconfigjson)
 - [Plusieurs pages](#plusieurs-pages)
 - [Héberger des images, polices, CSS, JS, etc.](#h%C3%A9berger-des-images-polices-css-js-etc)
 - [Gérer des inclusions pour éviter la redondance du code](#g%C3%A9rer-des-inclusions-pour-%C3%A9viter-la-redondance-du-code)
 - [Gérer des variations au sein d'un même template](#g%C3%A9rer-des-variations-au-sein-dun-m%C3%AAme-template)
 - [Utiliser NodeAtlas pour générer des assets HTML](#utiliser-nodeatlas-pour-g%C3%A9n%C3%A9rer-des-assets-html)
 - [Utiliser NodeAtlas pour faire tourner un site (partie Back-end)](#utiliser-nodeatlas-pour-faire-tourner-un-site-partie-back-end)
 - [Changer les paramètres d'url.](#changer-les-param%C3%A8tres-durl)
 - [Créer ses propres variables de webconfig](#cr%C3%A9er-ses-propres-variables-de-webconfig)
 - [Gérer l'UrlRewriting](#g%C3%A9rer-lurlrewriting)
 - [Gérer les pages inexistantes](#g%C3%A9rer-les-pages-inexistantes)
 - [Gérer les redirections](#g%C3%A9rer-les-redirections)
 - [Autoriser/Interdire les demandes GET/POST](#autoriserinterdire-les-demandes-getpost)
 - [Changer les chevrons <% %> du moteur de template](#changer-les-chevrons---du-moteur-de-template)
 - [Changer la source jQuery utilisée](#changer-la-source-jquery-utilis%C3%A9e)
 - [Changer l'url final des hostname et port d'écoute](#changer-lurl-final-des-hostname-et-port-d%C3%A9coute)
- [Commandes de lancement](#commandes-de-lancement)
 - [--directory](#--directory)
 - [--webconfig](#--webconfig)
 - [--run](#--run)
 - [--httpPort](#--httpport)
 - [--generate](#--generate)
- [NodeAtlas comme module npm](#nodeatlas-comme-module-npm)
- [Faire tourner NodeAtlas sur server](#faire-tourner-nodeatlas-sur-server)
 - [Dans un environnement Windows Server avec iisnode](#dans-un-environnement-windows-server-avec-iisnode)
 - [Dans un environnement Unix avec forever](#dans-un-environnement-unix-avec-forever)
 - [Proxy](#proxy)
- [À propos de l'architecture de NodeAtlas](#a-propos-de-l-architecture-de-nodeatlas)


### Roadmap d'avancement du développement ###

- Fait 
 - Lancement d'un serveur Express
 - Génération live de maquette HTML
 - Génération complète de maquette HTML
 - Fichier de configuration (Liste des pages avec Url Rewriting)
 - Partie Back-end possible (Controllers / Models) 
 - Support de BDD possible (MySql / MongoDB)
 - Support de Socket.IO possible
 - Support des variables de parse Body / Cookie / Session
 - Support des variables personnelles de webconfig
 - Migration Express 3.x vers Express 4.x
 - Exemple de reverse-proxy pour plusieurs instances sur port 80
 - Lancer NodeAtlas avec un require() depuis un fichier de code.

- À venir 
 - Support d'une BDD de Session (ex: Redis) + key/secret
 - Support des modules Express possible
 - Auto Minification de Css/Js
 - Auto compression images
 - Injection automatique de feuille CSS en style inline (pour les maquettes email)
 - Agrégation de fichier CSS/JS pour les versions de site en production.
 - Auto-déploiement via transfert FTP
 - Support Sass/Less
 - ...





## Installation ##

Il y a plusieurs solutions pour installer Node-Atlas :

- Télécharger NodeAtlas depuis le site officiel [NodeAtlas](https://haeresis.github.com/NodeAtlas/).
_Une fois téléchargé, dézippez **NodeAtlas** dans le dossier qui vous conviendra._

- `npm install node-atlas`
_Ceci installera **NodeAtlas** dans le dossier `node_modules/node-atlas` du dossier d'execution de la commande._

- `npm install -g node-atlas`
_Ceci installera **NodeAtlas** dans le dossier `node_modules/node-atlas` global._

- Cloner le répertoire depuis [GitHub](https://github.com/Haeresis/NodeAtlas/).
_Ceci installera **NodeAtlas** dans le dossier d'accueil du clonage._





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

Vous pouvez faire tourner une page simple sans images ou fichiers CSS/JS hébergés par le site avec la configuration minimale du « webconfig.json » ci-dessous.

```js
{
	"urlRewriting": {
		"/": {
			"template": "index.htm"
		}
	}
}
```

*Note : vous pouvez inclure des images ou fichiers CSS/JS hébergés sur d'autres sites.*



### Lancer le site avec NodeAtlas ###

#### À la ligne de commande ####

Placez-vous avec un invité de commande dans le dossier « /site-hello-world/ » et exécutez la commande suivante.

```
\> node </path/to/>node-atlas/node-atlas.js
```

À votre première exécution, NodeAtlas installera tous les « node_modules » nécessaires à son fonctionnement (si vous avez téléchargé hors npm).

Ré-exécutez.

```
\> node </path/to/>node-atlas/node-atlas.js
```

Vous aurez alors accès à votre « Hello World » à la page : *http://localhost/* dans un navigateur.


#### Via un fichier JavaScript ####

Vous pouvez également utiliser NodeAtlas comme un module npm.

*app.js*

```javascript
var nodeAtlas = require("node-atlas");

nodeAtlas.init();
```

```
\> node app.js
```





## Différentes configurations du webconfig.json ##

### Plusieurs pages ##

Ci-dessous un exemple de configuration.

```js
{
	"urlRewriting": {
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



### Héberger des images, polices, CSS, JS, etc. ###

Vous pouvez également héberger tout un tas de fichier sur votre site dans un dossier public. Par exemple avec cette configuration :

```js
{
	"assetsRelativePath": "assets/"
	"urlRewriting": {
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

*Note : Si* ***assetsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier public est bien* ***assets/***. ***assetsRelativePath*** *est donc utile seulement pour changer le nom du répertoire.*



### Gérer des inclusions pour éviter la redondance du code ###

Vous pouvez segmenter vos codes HTML afin de ne pas répéter le code redondant comme par exemple les parties « head » et « foot » ou tout autre fragment de code :

```js
{
	"componentsRelativePath": "components/"
	"urlRewriting": {
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
	<% include head.htm %>
	
	<div>
		<h1>Bienvenue</h1>
		<p>C'est la page d'accueil.</p>
	</div>
	
	<% include foot.htm %>
```

*templates/members.htm*

```html
	<% include head.htm %>
	
	<div>
		<h1>Liste des members</h1>
		<p>C'est la page des membres</p>
	</div>
	
	<% include foot.htm %>
```

vous aurez accès aux adresses :

- *http://localhost/*
- *http://localhost/liste-des-membres/*

*Note : Si* ***componentsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des includes est bien* ***components/***. ***componentsRelativePath*** *est donc utile seulement pour changer le nom de répertoire.*



### Gérer des variations au sein d'un même template ###

#### En standard ####

Il est possible avec le même template et les mêmes includes de générer des pages au contenu différent (pratique en mode génération d'assets HTML). Activer les variations avec la configuration suivante :

```js
{
	"commonVariation": "common.json",
	"variationsRelativePath": "variations/",
	"urlRewriting": {
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
	<% include head.htm %>
	
	<div class="title"><%= common.titleWebsite %></div>
	
	<div>
		<h1><%= specific.titlePage %></h1>
		<%- specific.content %>
	</div>
	
	<% include foot.htm %>
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
	"titlePage": "Liste des members",
	"classPage": "members",
	"content": "<p>C'est la page des membres</p>"
}
```

vous aurez accès aux adresses :

- *http://localhost/*
- *http://localhost/liste-des-membres/*

*Note : Si* ***variationsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des variations est bien* ***variations/***. ***variationsRelativePath*** *est donc utile seulement pour changer le nom de répertoire.*


#### Pour le multilingue ####

##### Toutes les langues sur le même site #####

Sur le même principe, les variations peuvent être utilisées pour créer la même page, mais dans des langues différentes :

```js
{
	"languageCode": "en-gb",
	"variationsRelativePath": "languages/",
	"urlRewriting": {
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

*Note : Dans cet exemple j'ai décidé de me passer d'un fichier de variation commune, car je n'ai pas précisé de* ***commonVariation***. *J'ai également totalement arbitrairement décidé de renommer mon dossier* ***variations/*** *en* ***languages/***.

avec les fichiers suivants :

```
components/
— head.htm
— foot.htm
languages/
— en-gb
—— landing.json
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
	<% include head.htm %>
	
	<select>
		<% for (var i = 0; i < specific.selectLabel.length; i++) { %>
		<option><%= specific.selectLabel[i] %></option>
		<% } %>
	</select>
	
	<% include foot.htm %>
```

*templates/home.htm*

```html
	<% include head.htm %>
	
	<div>
		<h1><%= specific.titlePage %></h1>
		<%- specific.content %>
	</div>
	
	<% include foot.htm %>
```

*languages/en-gb/landing.json*

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


##### A chaque langue sa configuration #####

Vous pouvez également décider de faire tourner chaque langue dans un « webconfig.json » différent. Avec l'ensemble de fichier suivant :

```
components/
— head.htm
— foot.htm
variations/
— en-gb
—— landing.json
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
	"languageCode": "en-gb",
	"urlRewriting": {
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
	"urlRelativeSubPath": "/english",
	"languageCode": "en-gb",
	"urlRewriting": {
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
	"urlRelativeSubPath": "/francais",
	"languageCode": "fr-fr",
	"urlRewriting": {
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

*Note : il est possible de faire ensuite du reverse proxy pour ramener l'ensemble des urls sur les ports autres que le port 80 sur le port 80.*



### Utiliser NodeAtlas pour générer des assets HTML###

#### Générer des assets HTML ####

Avec la configuration suivante il est possible de générer des assets HTML du rendu de chaque page dans un fichier associé. Le fichier sera (re)créé à chaque affichage de la page dans votre navigateur.

```js
{
	"autoGenerate": true,
	"generatesRelativePath": "generate/",
	"urlRewriting": {
		"/": {
			"template": "index.htm",
			"generate": "/index.html"
		},
		"/liste-des-membres/": {
			"template": "members.htm",
			"generate": "/members/list.html"
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
generate/
templates/
— index.htm
— members.htm
webconfig.json
}
```

on peut créer physiquement les assets :

```
{
generate/
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

La génération s'enclenche quand on affiche la page uniquement parce que ***autoGenerate*** existe et est à ***true***. S'il est passé à ***false*** (ou enlevé) le seul moyen de générer toutes les pages du site sera via la commande `node </path/to/>node-atlas/server.js --generate` qui génèrera toutes les pages d'un coup. Bien entendu dans tous les cas cette commande marche et permet de régénérer toutes les pages suite à un changement telle qu'une modification dans un composant appelé sur toutes les pages.

*Note : Si* ***generatesRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des générations est bien* ***generatesRelativePath/***. ***generatesRelativePath*** *est donc utile seulement pour changer le nom répertoire.*


#### Générer un site sans partie serveur ####

Il est également possible de manager la création d'un site en simple page HTML avec la configuration suivante :

```js
{
	"languageCode": "fr-fr",
	"indexPage": true,
	"autoGenerate": true,
	"generatesRelativePath": "../HTML/",
	"assetsRelativePath": "../HTML/",
	"urlRewriting": {
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

À l'adresse *http://localhost/* s'affichera la liste des pages composants votre site (grâce à **indexPage** à **true**).

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
 	"controllersRelativePath": "controllers/",
	"urlRewriting": {
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
		// Gestion de l'accès aux modules s'il ne sont pas dans « node_modules ».
		var modulePath = (NA.webconfig._needModulePath) ? NA.nodeModulesPath : '';
		
		// Associations de chaque module pour y avoir accès partout.
		NA.modules.connect = require(modulePath + 'connect');
		NA.modules.cookie = require(modulePath + 'cookie');
		NA.modules.mongoose = require(modulePath + 'mongoose');
		NA.modules.socketio = require(modulePath + 'socket.io');

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
				throw error;
  			};

			// Suite.
  			callback(mongoose);
		});
		
		// Gestion de connexion.
		mongoose.connection.on('error', function (error) {
	  		console.log('Mongoose default connection error: ' + error);
		});

		// Gestion des déconnexion.
		mongoose.connection.on('disconnected', function () {
			console.log('Mongoose default connection disconnected');
		});
		process.on('SIGINT', function (error) {
			mongoose.connection.close(function () {
				console.log('Mongoose default connection disconnected through app termination');
				process.exit(0);
			});
		});
	};

	// Mise à disposition des Schémas Mongoose.
	privates.mongooseShemas = function (mongoose) {
		publics.shemas = {};

		// Chargement des Schémas.
		publics.shemas.article = require('../models/Article');
		publics.shemas.category = require('../models/Category');

		// Mise à disposition des Schémas.
		mongoose.model('article', website.shemas.article, 'article');
		mongoose.model('category', website.shemas.category, 'category');
	};

	// Exemple d'utilisation de Socket.IO.
	privates.socketIoInitialisation = function (socketio, NA, callback) {
		var io = socketio.listen(NA.server),
			connect = NA.modules.connect,
			cookie = NA.modules.cookie;

		// Synchronisation des Sessions avec Socket.IO.
		io.set('authorization', function (data, accept) {

            // Fallback si les cookies ne sont pas gérés.
            if (!data.headers.cookie) {
                return accept('Session cookie required.', false);
            }

            // Transformation du cookie en Objet cookie.
            data.cookie = cookie.parse(data.headers.cookie);

            // Vérification de la signature du cookie.
            data.cookie = connect.utils.parseSignedCookies(data.cookie, NA.webconfig.session.secret);
             
            // Sauver nous même une copie de la Session.
            data.sessionID = data.cookie[NA.webconfig.session.key];

			// Accepter le cookie.
            NA.webconfig.session.sessionStore.load(data.sessionID, function (error, session) {
                if (error || !session) {
                    accept("Error", false);
                } else {
                    data.session = session;
                    accept(null, true);
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

		// Évênements pour la page article (voir exemple dans le fichier d'après).
		require('./index').asynchrone(params);
	};

	// Configuration de tous les modules
	publics.setConfigurations = function (NA, callback) {
		var mongoose = NA.modules.mongoose,
			socketio = NA.modules.socketio,
			connect = NA.modules.connect;

		// Initialisation de Mongoose.
		privates.mongooseInitialization(mongoose, function (mongoose) {

			// Injection de Schémas dans Mongoose.
			privates.mongooseShemas(mongoose);

			// Initialisation de Socket IO.
			privates.socketIoInitialisation(socketio, NA, function (io) {

				// Écoute d'action Socket IO.
				privates.socketIoEvents(io, NA);

				// Ré-injection do l'objet « NodeAtlas » surchargé dans le moteur.
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
	publics.preRender = function (params, mainCallback) {
		var variation = params.variation;

		// Ici on modifie les variables de variations.
		// voir exemple dans le fichier d'après.

		// On ré-injecte les modifications.
		mainCallback(variation);
	};

}(website));



/**********************************************************/
/* Interception dela sortie HTML pour jQuery côté serveur */
/**********************************************************/

(function (publics) {
	"use strict";

	// On intervient juste avant le renvoi HTML auprès du client (response).
	publics.render = function (params, mainCallback) {
		var data = params.data;

		// Ici on peut manipuler le DOM côté serveur avant retour client.
		// voir exemple dans le fichier d'après.

		// On ré-injecte les modifications.
		mainCallback(data);
	};

}(website));



/**************************************************************/
/* Mise à dispositions des fonctionr pour le moteur NodeAtlas */
/**************************************************************/

exports.loadModules = website.loadModules;
exports.setConfigurations = website.setConfigurations;
exports.preRender = website.preRender;
exports.render = website.render;
```

Au lieu de se servir de preRender et render dans le fichier common.js effectif pour tout le site, on peut utiliser des contrôleurs spécifiques par page. La configuration précédente devient alors :

```js
{
 	"commonController": "common.js",
 	"controllersRelativePath": "controllers/",
	"urlRewriting": {
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
website.index = {};



/*******************************/
/* Interception des Variations */
/*******************************/

(function (publics) {
	"use strict";

	var privates = {};

	// On charge une fonction ou un ensemble de fonctions.
	privates.listOfArticles = require('./modules/list-of-articles');

	// On intervient juste avant l'assemblage complet EJS.
	publics.preRender = function (params, mainCallback) {
		var variation = params.variation,
			mongoose = params.NA.modules.mongoose,
			Article = mongoose.model('article');


		// Interception possible de toutes les variables de « variation/common.js ».
		console.log(variation.common.title); // Renvoi le titre stocké dans « variation/common.js ».
		variation.common.title = "Nouveau title"; // Redéfini un titre.
		console.log(variation.common.title); // Renvoi « Nouveau title » et est accessible côté template via « <%= common.title ». 

		// Interception possible de toutes les variables de « variation/index.js » (car on est dans le spécific « index.js »).
		variation.specific.title = "Nouveau title"; // Redéfini un titre qui est accessible côté template via « <%= specific.title ».
		variation.specific.newProperty = "Nouvelle propriété"; // Défini une propriété n'existant pas initialement dans le fichier de variation qui est accessible côté template via « <%= specific.newProperty ».

		// Interception possible de la configuration de la page courante.
		console.log(variation.pageUrlRewriting) // Retourne « / » pour « index », « /categories/ » pour categories, etc.
		if (/* test de non existance */) { 
			variation.pageParameters.statusCode = 404; // La page sera en 404.
		} else {
			variation.pageParameters.statusCode = 200; // La page sera en 200.
		}

		// Création d'un nouvel ensemble de variation dynamique pour les templates.
		variation.backend = {}; // Accessible via « <%= backend.<propriétés> %> ».

		privates.listOfArticles(Article, function (listOfArticles) {

			// Disponibilité des données des articles côté template derrière
			variation.backend.articles = listOfArticles; // « <%= backend.articles.<propriétés> %> ».

			// On ré-injecte les modifications.
			mainCallback(variation);
		});
	};

}(website.index));



/***********************************************************/
/* Interception de la sortie HTML pour jQuery côté serveur */
/***********************************************************/

(function (publics) {
	"use strict";
	
	// On intervient juste avant le renvoi HTML auprès du client (response).
	publics.render = function (params, mainCallback) {
		var data = params.data,
			NA = params.NA,
			jsdom = NA.modules.jsdom; // Récupération de jsdom pour parcourir le DOM avec jQuery.

		// On charge le fichier jQuery défini dans le moteur, mais on peut utiliser une autre version.
		jsdom.env(data, [NA.webconfig.jQueryVersion], function (error, window) {
			var $ = window.$;

			// Après tous les h2 de la sortie HTML « data »,
			$("h2").each(function (i) {
				var $this = $(this);

				// ... on créé une div,
				$this.after(
					// ... on injecte le contenu du h2 dans la div,
					$("<div>").html($this.html())
				)
				// ... et supprime le h2.
				$this.remove();
			});

			// On re-créer une nouvelle sortie HTML avec nos modifications.
			data = window.document.doctype.toString() + window.document.innerHTML.replace(/<script class=.jsdom.+><\/script><\/html>/g, "</html>"); // (Si vous connaissez un moyen plus élégant d'enlever ce script ajouté automatiquement « <script class=.jsdom.+><\/script><\/html> », faites moi signe !)

			// On ré-injecte les modifications.
			mainCallback(data);
		});
	};

}(website.index));



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

		// Dès qu'on a un lien valide entre le client et notre back,
		io.sockets.on('connection', function (socket) {
			var sessionID = socket.handshake.sessionID,
				session = socket.handshake.session;

			// ... resté à l'écoute de la demande « create-article-button »,
			socket.on('create-article-button', function (data) {

				// ... et répondre à cette demande en créant un nouvelle article si elle vient
				// avec les information envoyées via « data ».
				var article = new Article({
					_id: mongoose.Types.ObjectId(),
					title: data.title,
					urn: data.urn,
				});

				// Si l'utilisateur est connecté.
				if (session.account) {

					/ ... on créer sauve article en base.
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

}(website.index));



/***********************************************************/
/* Interception de la sortie HTML pour jQuery côté serveur */
/***********************************************************/

exports.preRender = website.index.preRender;
exports.render = website.index.render;
exports.asynchrone = website.index.asynchrone; // Utilisé non pas par « NodeAtlas » mais par « common.js » (voir fichier précédent).
```

*Note : Si* ***controllersRelativePath*** *n'est pas présent dans « webconfig.js » alors toute la partie Back-end est désactivée.*



### Changer les paramètres d'url ###

Par défaut, si vous utilisez la configuration suivante :

```js
{
	"urlRewriting": {
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
	"urlRewriting": {
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
	"urlRelativeSubPath": "/sub/folder",
	"urlRewriting": {
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
	"urlRewriting": {
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
	"urlRewriting": {
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



### Gérer l'UrlRewriting ###

Bien que vous puissiez paramétrer des urls statiques, vous pouvez également paramétrer une écoute d'url dynamique !

#### Standard ###

Avec la configuration suivante :

```js
{
	"urlRewriting": {
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

et récupérer les valeurs de `:member` dans le `preRender` (common et specific).

```js
exports.preRender = function (params, mainCallback) {
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
	"urlRewriting": {
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

et récupérer les valeurs de `([-a-z0-9]+)` dans le `preRender` (common et specific).

```js
exports.preRender = function (params, mainCallback) {
	var variation = params.variation;

	if (variation.params && variation.params[0]) { variation.params.member = variation.params[0]; }
	// variation.params[1] pour le deuxième match, etc...

	console.log(variation.params.member); 
	// \> 'toto', 'bob-eponge99', 'node-atlas' ou 'etc'.

	mainCallback(variation);
}
```

Les règles de création d'url dynamique avec `regExp` sont celles des [RegExp JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).



### Gérer les pages inexistantes ###

Pour afficher une page personnalisée quand une ressource n'est pas trouvée il faut :

1. Préparer une page 404.
2. Remplir le paramètre `pageNotFound` avec comme `value` la `key` de la page 404 préparée.

Voyez l'exemple ci-dessous :

```js
{
	"pageNotFound": "/pages-inexistantes/",
	"urlRewriting": {
		"/pages-inexistantes/": {
			"template": "error.htm",
			"statusCode": 404
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

- *http://localhost/cette-page-n-existe-pas.html*
- *http://localhost/elle/non/plus/*
- *http://localhost/etc*



### Gérer les redirections ###

Pour aller à une autre adresse (redirection 301 ou 302) quand vous arrivez à une url il faut utiliser le paramètre `redirect`.

#### En statique ####

Voyez l'exemple ci-dessous :

```js
{
	"urlRewriting": {
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
	"urlRewriting": {
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
	"urlRewriting": {
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



### Autoriser/Interdire les demandes GET/POST ###

Vous pouvez également manager la manière dont le serveur va répondre aux demandes GET/POST pour une page donnée. Par exemple, nous allons autoriser l'accès aux pages uniquement en GET pour tout le site et autoriser un POST pour une page seulement (et même lui interdire le GET).

```js
{
	"getSupport": true,
	"postSupport": false,
	"urlRewriting": {
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



### Changer les chevrons <% %> du moteur de template ###

Par exemple, pour inclure une partie de fichier on utilise l'instruction ***<% include head.htm %>***. Il serait possible de le faire avec ***{{ include head.htm }}*** avec la configuration ci-dessous :

```js
{
	"templateEngineOpenPattern": "{{",
	"templateEngineClosePattern": "}}",
	"urlRewriting": {
		"/": {
			"template": "index.htm"
		}
	}
}
```

*Note : Si rien n'est précisé,* ***templateEngineOpenPattern*** *et* ***templateEngineClosePattern*** *valent respectivement* ***<%*** *et* ***%>***.



### Changer la source jQuery utilisée ###

NodeAtlas utilise par défaut le fichier externe « http://code.jquery.com/jquery.js » pour manipuler le DOM. Vous pouvez changer celui-ci avec cette configuration :

```js
{
	"jQueryVersion": "./assets/javascript/jquery-1.9.0.js",
	"urlRewriting": {
		"/": {
			"template": "index.htm"
		}
	}
}
```



### Changer l'url final des hostname et port d'écoute ###

Il est possible de générer une url de visite différente des paramètres d'écoutes demandés avec ***urlHostname*** et ***urlPort***. Par exemple on écoute la boucle local sur le port 80 car un script fait du Reverse Proxy depuis le port 7777 sur le 80 avec le module « http-proxy » comme ci-dessous :

```js
{
	"httpPort": 7777,
	"httpHostname": "127.0.0.1",
	"urlPort": 80,
	"urlHostname": "localhost",
	"urlRewriting": {
		"/": {
			"template": "index.htm"
		}
	}
}
```





## Commandes de lancement ##

La façon la plus simple de lancer NodeAtlas est de se positionner dans le répertoire hébergeant votre site et de lancer la commande `\> node </path/to/>node-atlas/node-atlas.js`. Cependant il existe des options de lancement pour faire bien plus que lancer le site.

Chacune des commandes qui vont suivre peut être couplée avec les autres de cette manière :

```
\> node </path/to/>node-atlas/node-atlas.js --directory /hello-world/  --webconfig config.fr-fr.js --httpPort 80 --run
```


### --directory ###

Il est possible de lancer NodeAtlas depuis un autre endroit que le dossier où est hébergé le site que vous souhaitez faire tourner. La commande `--directory` vous sera alors très utile.

```
\> node </path/to/>node-atlas/node-atlas.js --directory </path/to/your/website/directory/>
```


### --webconfig ###

Par défaut, NodeAtlas va lire votre fichier `webconfig.json`. Il est possible qu'en plus de ce fichier vous ayez créé un autre fichier `webconfig.prod.json` dont le nom de domaine est différent. Ou encore un `webconfig.fr-fr.json` avec des urls et des variations dans une autre langue. Plutôt que de renommer vos fichiers en `webconfig.json` avant de lancer le site, précisez simplement votre autre nom de configuration. Dans l'exemple suivant, notre fichier sera `webconfig.alternatif.json`.

```
\> node </path/to/>node-atlas/node-atlas.js --webconfig webconfig.alternatif.json
```



### --run ###

Cette commande permet d'ouvrir votre navigateur à l'adresse sur laquelle le site va tourner. Très pratique quand vous ne vous souvenez plus du port pour votre version de développement. Cette commande ne sert à rien si elle est couplé avec `--generate` (voir plus loin).

```
\> node </path/to/>node-atlas/node-atlas.js --run
```



### --httpPort ###

Vous n'allez peut être pas vous ennuyer à changer votre port d'écoute sur tous vos projets et parfois vous allez devoir travailler sur deux sites différents en même temps. Avec cette commande vous n'aurez pas besoin de couper vos sites alternativement pour libérer le port d'écoute, il suffira d'en choisir un au lancement.

```
\> node </path/to/>node-atlas/node-atlas.js --httpPort 7778
```



### --generate ###

Si vous modifiez un élément dans votre fichier de variation commun ou même dans un de vos composants de template appelé sur plusieurs pages, vous n'allez pas recharger chaque page pour mettre à jour vos fichiers de sortie. Il suffira alors d'utiliser `--generate`.

```
\> node </path/to/>node-atlas/node-atlas.js --generate
```




## NodeAtlas comme module npm ##

Si vous lancez NodeAtlas via du code JavaScript, vous pouvez également configurer le lancement :

*app.js*

```javascript
var nodeAtlas = require("node-atlas");

nodeAtlas
	.config({
		directory: "</path/to/your/website/directory/>",
		webconfig: "webconfig.alternatif.json",
		run: true,
		httpPort: 7778,
		generate: true
	})
	.init();
```

```
\> node app.js
```





## Faire tourner NodeAtlas sur serveur ##

### Dans un environnement Windows Server avec iisnode ###

Dans un environnement Windows Server 2013 avec IIS8 il faut :

1. Installer l’[exécutable node.exe](http://nodejs.org/download/) capable d’exécuter du code JavaScript.
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
	"urlRewriting": {
		...
	}
}

```



### Dans un environnement Unix avec forever ###

Il faut pour cela :

1. Installer l’[exécutable node.exe](http://nodejs.org/download/) capable d’exécuter du code JavaScript.
2. Installer le [CLI tool forever](https://github.com/nodejitsu/forever) pour manager vos sites en continue.
3. Faire tourner en plus de vos sites un reverse-proxy pour que toutes vos applications tournent sur le port 80.


#### Quelques commandes forever ####

Pous lancer un site en continue il faut utiliser la commande :

```
\> forever start </path/to/>node-atlas/node-atlas.js --directory </path/to/your/website/directory/>
```

Pour le stopper, il faut repérer son **uid** avec la commande `forever list` puis utiliser la commande :

```
\> forever stop <uid>
```

ou <uid> est l'**uid** du site qui tourne.


#### webconfig exemple ####

Un webconfig exemple pour une production :

```js
{
 	"urlPort": 80,
	"httpPort": 7777,
	"httpHostname": "www.example.fr",
	"urlRewriting": {
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

Tous les messages d'erreurs se trouvent dans `/languages/default.json`. Si vous souhaitez les modifier, il suffit de dupliquer le fichier `default.json` et de le renommer en `fr-fr.json`, et de modifier la langue de l'original.

Pour finir [l'appoche publics/privates de l'architecture est expliqué dans cette article](http://blog.lesieur.name/structurer-le-javascript-de-son-site-avec-ou-sans-framework/).