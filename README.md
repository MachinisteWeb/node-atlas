# node-atlas

## Avant-propos

NodeAtlas est une application réalisée en JavaScript et tournant avec Node.js qui permet 3 choses :

- Créer et maintenir un ensemble d'assets HTML/CSS/JavaScript pour les fournirs à des développeurs Back-end.
- Créer et maintenir des sites multilingue sans Back-end.
- Développer des sites ou des applications Node.js multilingue de toute taille.

### Exemple de réalisations avec NodeAtlas

L'outil est encore en développement et je l'expérimente petit à petit avec mes propres site :

- Exemple de génération de d'asset HTML (En cours...)
- Exemple de développement de site Node.js (En cours...)

### Roadmap d'avancement du développement

#### Fait 
- Lancement d'un serveur Express
- Génération live de maquette HTML
- Génération complète de maquette HTML
- Fichier de config (Liste des page avec url Rewriting)
- Partie Back-end possible (Controllers / Models) 
- Support de BDD possible (MySql / MongoDB)

#### À venir 
- Support de Socket.IO
- Support des modules Express
- Migration Express 3.x vers Express 4.x
- Support des variables de Session/Cookie
- Support d'une BDD de Session (ex: Redis)
- Auto Minification de Css/Js
- Auto compression images
- Injection automatique de feuille CSS en inline (pour les maquettes Email)
- Aggregation de fichier CSS/JS pour les versions de site Prod.
- Auto-monté via transfert FTP
- Support Sass/Less
- ...

## Commencer avec NodeAtlas

### Ensemble de fichiers

Après avoir installer NodeAtlas quelque part sur votre machine, créez-vous un ensemble de fichiers représentant un site n'importe où ailleurs :

```
site-hello-world/
— templates/
—— index.htm
— webconfig.json
```

Voici le fichier « /site-hello-world/templates/index.htm »

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>Hello world</title>
	</head>
	<body>
		<div>Ceci est un Hello World !
	</body>
</html>
```

Et ci-après, le fichier « /site-hello-world/webconfig.json »

### Configuration minimale

Vous pouvez faire tourner une page simple sans images ou fichiers CSS/JS hébergés par le site avec la configuration minimale du « webconfig.json » ci-dessous :

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

### Lancer le site avec NodeAtlas

Placez-vous avec un invité de commande dans le dossier « /site-hello-world/ » et exécutez la commande suivante :

```
\> node /path/to/node-atlas/directory/server.js
```

À votre première execution, NodeAtlas installera tous les « node_modules » nécéssaire à son fonctionnement.

Ré-exécutez

```
\> node /path/to/node-atlas/directory/server.js
```

Vous aurez alors accès à votre « Hello World » à la page : *http://localhost/* dans un navigateur.

## Différentes configurations du webconfig.json

### Plusieurs pages

Ci-dessous un exemple de configuration  :

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

pour faire tourner cet ensemble de fichier :

```
templates/
— index.htm
— member.htm
— error.htm
webconfig.json
```

aux adresses :

* *http://localhost/* (répond à la racine)
* *http://localhost/member.html* (ne répondra pas si demandé en POST)
* *http://localhost/member-without-extension/* (ne répondra pas si demandé en GET)
* *http://localhost/error.html* (renvoi du contenu plein texte (sans balise) avec une erreur 404)

### Héberger des images, polices, CSS, JS, etc...

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

et cet ensemble de fichier :

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

* *http://localhost/*
* *http://localhost/stylesheets/common.css*
* *http://localhost/javascript/common.js*
* *http://localhost/media/images/logo.png*

*Note : Si* ***assetsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier public est bien* ***assets/***. ***assetsRelativePath*** *est donc utile seulement pour changer de répertoire.*

### Gérer des includes pour reprendre du code.

Vous pouvez spliter vos codes HTML afin de ne pas répéter le code redondant comme par exemple les parties « head » et « foot » ou tout autre fragment de code :

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

* *http://localhost/*
* *http://localhost/liste-des-membres/*

*Note : Si* ***componentsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des includes est bien* ***components/***. ***componentsRelativePath*** *est donc utile seulement pour changer de répertoire.*

### Gérer des variations au sein d'un même template

#### En standard

Il est possible avec le même template et les mêmes include de générer des pages au contenu différent (pratique en mode génération d'assets HTML). Activer les variations avec la configuration suivante :

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

* *http://localhost/*
* *http://localhost/liste-des-membres/*

*Note : Si* ***variationsRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des variations est bien* ***variations/***. ***variationsRelativePath*** *est donc utile seulement pour changer de répertoire.*

#### Pour le multilingue

##### Toutes les langues sur le même site

Sur le même principe, les variations peuvent être utilisée pour créer la même page mais dans des langues différentes :

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

*Note : Dans cet exemple j'ai décidé de me passer d'un fichier de variation commune car je n'ai pas précisé de* ***commonVariation***. *J'ai également totalement arbitrairement décidé de renommer mon dossier* ***variations/*** *en* ***languages/***.

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
		<option><%= specific.selectLabel %></option>
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
	"languageCode": "en-gb",
	"urlRewriting": {
		"/": {
			"template": "landing.htm",
			"variation": "landing.json"
		}
	}
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

* *http://localhost/*
* *http://localhost/home/*
* *http://localhost/accueil/*

*Note : Par défaut c'est le* ***languageCode*** *racine qui conditionne la langue d'affichage du site. Cependant, spécifiquement par page on peut changer la langue avec également le* ***languageCode****. *Il faut également savoir que dès que le site ou une page à un* ***languageCode*** *dans la configuration, ses fichier de variations doivent être placé dans un sous répertoire portant le nom du* ***languageCode***.

##### A chaque langue sa configuration

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

* *http://localhost/*
* *http://localhost:81/english/*
* *http://localhost:81/english/*
* *http://localhost:81/english/members-list/*
* *http://localhost:82/francais/*
* *http://localhost:82/francais/liste-des-membres/*


### Utiliser NodeAtlas pour générer des assets HTML

####Générer des assets HTML

Avec la configuration suivante il est possible de générer des assets HTML du rendu de chaque page dans un fichier associé. Le fichier sera (re)créer à chaque affichage de la page dans votre navigateur. Avec la configuration suivante :

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

On peut créer les fichiers :

```
{
generate/
templates/
— index.html
— members/
—— list.html
— no/
—— generate/
——— property <== Ceci est un fichier
}
```

En ce rendant aux addresses :

* *http://localhost/*
* *http://localhost/liste-des-membres/*

*Note : Si* ***generatesRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des générations est bien* ***generatesRelativePath/***. ***generatesRelativePath*** *est donc utile seulement pour changer de répertoire. De plus la génération s'enclenche quand on affiche la page uniquement parceque* ***autoGenerate*** *existe et est à* ***true***. *Sl'il est passé à* ***false*** *(ou enlevé) le seul moyen de générer toutes le site sera via la commande « node /path/to/node-atlas/directory/server.js --generate » qui génèrera toutes les page d'un coup.*

####Générer un site sans partie serveur

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
— variation/
—— fr-fr/
——— index.json
—— en/
——— index.json
— templates/
—— index.htm
— webconfig.json
```

À l'adresse *http://localhost/* s'affichera la liste des pages composant votre site (grace à **indexPage** à **true**).

Il ne restera plus qu'à, une fois votre traval terminé, admirer votre site HTML dans le dossier :

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

### Utiliser NodeAtlas pour faire tourner un site (partie Back-end)

Vous pouvez soit utiliser un controlleur unique pour tout le site et/ou également des controlleur par template et variation.

Pour le controlleur maître utilisez par exemple cette configuration :

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
templates/
— index.htm
— categories.htm
webconfig.json
```

Et le fichier « common.js » contenant ceci par exemple :

```js
var website = {};

// Charger les modules de ce site web.
(function (publics) {

	// NA représente la variable NA du fichier server.js de NodeAtlas.
	publics.loadModules = function (NA) {
		NA.modules.mongoose = require(NA.nodeModulesPath + 'mongoose');
		// NA.modules.nodeMysql = require(NA.nodeModulesPath + 'node-mysql');
		// NA.modules.??? = require(NA.nodeModulesPath + '...');
		// ...

		// Utiliser le contenu de NA partout dans ce fichier.
		publics.NA = NA;

		return NA;
	};

}(website));

// Configurer des modules et autres actions avant la lancée du serveur.
(function (publics) {

	var privates = {};

	publics.setConfigurations = function (NA) {
		var mongoose = NA.modules.mongoose;
		//var nodeMysql = NA.modules.nodeMysql;

		// Création arbitraire de nouvelles propriétés à l'objet NA.
		NA.backend = {};

		privates.mongooseInitialization(mongoose, function (mongoose) {
			// privates.mySqlInitialization(nodeMysql, function (nodeMysql) {
			
				privates.mongooseShemas(mongoose);
				//...
				
				return NA;
			// });
		})
		

	};

	privates.mongooseInitialization = function (mongoose, callback) {
		
		// ...
		
		callback(mongoose);
	};

	privates.mongooseShemas = function (mongoose) {
		publics.shemas = {};

		publics.shemas.article = require('../models/Article');
		mongoose.model('article', website.shemas.article, 'article');
	};
	
	privates.mySqlInitialization = function (nodeMysql, callback) {
		
		// ...
		
		callback(nodeMysql);
	};

}(website));

// PreRender
(function (publics) {

	publics.preRender = function (params, mainCallback) {
		var variation = params.variation;

		// Ici on modifie les variables de variations.
		// ...
		//console.log(params.variation);

		mainCallback(variation);
	};

}(website));

// Render
(function (publics) {

	publics.render = function (params, mainCallback) {
		var data = params.data;

		// Ici on peut manipuler le DOM côté serveur avant retour client.
		// ...
		//console.log(params.data);

		mainCallback(data);
	};

}(website));

exports.loadModules = website.loadModules;
exports.setConfigurations = website.setConfigurations;
exports.preRender = website.preRender;
exports.render = website.render;
```

Au lieu de ce servir de preRender et render dans le fichier common.js effectif pour tout le site, on peut utiliser des controlleurs spécifique par page. La config précédente devient alors :

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
templates/
— index.htm
— categories.htm
webconfig.json
```

avec par exemple un fichier index.js comme celui-ci :

```js
var website = {};

// PreRender
(function (publics) {

	var privates = {};

	privates.listOfArticles = require('./modules/list-of-articles');

	publics.preRender = function (params, mainCallback) {
		var variation = params.variation,
			mongoose = params.NA.modules.mongoose,
			Article = mongoose.model('article');

		variation.backend = {};

		privates.listOfArticles(Article, function (listOfArticles) {

			variation.backend.articles = listOfArticles;

			mainCallback(variation);
		});
	};

}(website));

// Render
(function (publics) {

	publics.render = function (params, mainCallback) {
		var data = params.data;

		// Ici on peut manipuler le DOM côté serveur avant retour client.
		// console.log(params.data);

		mainCallback(data);
	};

}(website));

exports.preRender = website.preRender;
exports.render = website.render;
```

### Changer les paramètres d'url.

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

et vous pourrez accéder à l'url : *http://localhost/*

Changer alors la configuration en ceci :

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

### Autoriser/Interdire les demandes GET/POST...

Vous pouvez également manager la manière dont le serveur va répondre aux demande GET/POST pour une page donnée. Par exemple nous allons autoriser l'accès aux pages uniquement en GET pour tout le site et autoriser un POST pour une page seulement (et même lui interdir le GET).

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

*Note : Si rien n'est précisé,* ***getSupport*** et ***postSupport*** sont à ***true*** au niveau global et par page.

### Changer les chevrons <% %> du moteur de template

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

### Changer la source jQuery utilisée

NodeAtlas utilise par défaut le fichier externe « http://code.jquery.com/jquery.js » pour manipuler le DOM. Vous pouvez changer celui-ci avec cette configuration :

```js
{
	"jQueryVersion": "http://code.jquery.com/jquery-1.9.0.js",
	"urlRewriting": {
		"/": {
			"template": "index.htm"
		}
	}
}
```

### Changer l'url final des hosname et port d'écoute

Il est possible de générer une url de visite différente des paramètres d'écoute demandé avec ***urlHostname*** et ***urlPort***. Par exemple on écoute la boucle local sur le port 80 car un script fait du Reverse Proxy depuis le port 7777 sur le 80 avec le module « http-proxy » comme ci dessous :

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