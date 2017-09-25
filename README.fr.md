# node-atlas #

[![Faites un don](https://img.shields.io/badge/don-%E2%9D%A4-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://api.travis-ci.org/Haeresis/node-atlas.svg)](https://travis-ci.org/Haeresis/node-atlas/) [![Package npm](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-4.0%2C_last-brightgreen.svg)](https://nodejs.org/en/) [![Technical Debt Ratio](https://img.shields.io/badge/quality_code-A-brightgreen.svg)](http://docs.sonarqube.org/display/PLUG/JavaScript+Plugin) [![Dependency Status](https://gemnasium.com/Haeresis/node-atlas.svg)](https://gemnasium.com/Haeresis/node-atlas) [![Chat pour de l'Aide](https://img.shields.io/badge/gitter-rejoindre%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/NodeAtlas/Aide)

**For an international version of this README.md, [follow this link](README.en.md).**





## Avant-propos ##

NodeAtlas est un framework JavaScript MVC(2) côté serveur sous forme de [module npm](https://www.npmjs.com/package/node-atlas) ([node-atlas](https://www.npmjs.com/package/node-atlas)) et tournant avec [Node.js](https://nodejs.org/). NodeAtlas vous permet de :

- Créer, maintenir et faire tourner des sites internationalisés (et localisables) sans mettre en place le moindre fichier serveur JavaScript. Particulièrement taillé pour la réalisation de sites vitrines ou d'applications web monopages hautement performante et maintenable en des temps records.

   > Exemple : [Simple page web](https://bruno.lesieur.name/)

- Créer, maintenir et documenter des interfaces utilisateurs HTML / CSS / JavaScript pour fournir un ensemble de livrables clients cohérants en tant que guide de style pour la réalisation de divers sites ou applications web ou encore monter des sites sans partie serveur (par exemple pour GitHub Pages).

   > Exemple : [Documentation de pages, composants et d'interface web](https://www.lesieur.name/doc-atlas/) ou [le site officiel NodeAtlas](https://node-atlas.js.org/).

- Développer des sites, des applications ou des API distantes en [Node.js](https://nodejs.org/) de manière évolutives et tournant côté serveur tout en vous permettant grâce à l'écosystème [npm](https://www.npmjs.com/) et les built-in fonctions de créer des contenus clients temps réel, de packager et optimiser vos sites pour de hautes performances, d'être orienté composant avec des réponses HTTP passant la validation W3C et parfaitement indexable par les moteurs de recherche pour le SEO.

   > Exemple : [Blog](https://blog.lesieur.name/), [Portfolio](https://www.lesieur.name/) ou [API Distante](https://www.lesieur.name/api/)



### Pourquoi NodeAtlas ? ###

NodeAtlas est conçu pour créer des sites évolutifs et pour permettre aux développeurs front-end et back-end d'embrasser [Node.js](https://nodejs.org/) en leur offrant une une courbe d'apprentissage aisée.

Commencez avec une simple page HTML,

- puis créez d'autres pages,
- puis internationalisez les,
- puis minifiez/offusquez/compressez vos sources,
- puis utiliser des préprocesseurs comme [Stylus](http://stylus-lang.com/), [Less](http://lesscss.org/) ou/et [Pug](https://pugjs.org/api/getting-started.html) simplement,
- puis prenez la main sur la logique serveur avec les points d'ancrage et [Express](http://expressjs.com/),
- puis soyez temps réel et réactif côté serveur grâce à [Socket.IO](https://socket.io/),
- puis connectez vous à [MySQL](https://www.mysql.com/fr/), [MongoDB](https://www.mongodb.com/), [ElasticSearch](https://www.elastic.co/fr/)...,
- puis soyez isomorphique et réactif côté client grâce à [Vue](https://fr.vuejs.org/) ou [React](https://facebook.github.io/react/),
- puis soyez orienté composants et/ou services grâce à des projets comme [ComponentAtlas](https://github.com/Haeresis/ComponentAtlas) et/ou [ApiAtlas](https://github.com/Haeresis/ApiAtlas),
- puis laissez votre client éditer son site avec [EditAtlas](https://github.com/Haeresis/EditAtlas),
- puis créer des plugins,
- puis...



### Et les autres frameworks JavaScript ? ###

Contrairement aux frameworks JavaScript côté client comme Vue, Angular ou React, NodeAtlas fonctionne côté serveur et délivre son contenu derrière des URL par réponse HTTP. Les sites sont indexables et valides W3C : c'est-à-dire que le code utile est bien renvoyé par la réponse HTTP en premier lieu, et est ensuite modifiée par requête asynchrone (AJAX, Websocket...) si vous le souhaitez. Cela signifie donc que NodeAtlas n'est pas une alternative aux nombreux frameworks JavaScript côté client qui ne se servent que de [Node.js](https://nodejs.org/en/) pour l'utilisation de [npm](https://www.npmjs.com/), [jspm](http://jspm.io/), [gulp](http://gulpjs.com/), etc. NodeAtlas est plutôt une alternative à Sails ou Meteor. Il forme un socle au dessus de Node.js et remplace bien votre code PHP, Java ou encore C# côté serveur. À l'instar de [Meteor](https://www.meteor.com/), NodeAtlas vous fournit un cadre de travail et une structure initiale (que vous pouvez modifier) et des outils vous permettant de vous passer de [gulp](http://gulpjs.com/) mais contrairement à [Meteor](https://www.meteor.com/) l'objet `NA` n'est disponible que côté serveur par défaut. Il vous est donc laissé le choix d'étendre les mécanismes NodeAtlas à votre partie cliente ou d'utiliser la structure de votre choix.

Pour un comparatif avec d'autre bibliothèque / framework / API JavaScript côté serveur, [vous pouvez consulter cette grille](#nodeatlas-vs-les-autres).



### Exemples de réalisations avec NodeAtlas ###

Vous trouverez une liste de dépôts que vous pouvez décortiquer à votre gré sur la communauté GitHub de NodeAtlas :

- [Tous les exemples fournis par la communauté NodeAtlas sur GitHub](https://github.com/NodeAtlas).





### Table des matières ###

- [Avant-propos](#avant-propos)
 - [Pourquoi NodeAtlas ?](#pourquoi-nodeatlas-)
 - [Et les autres frameworks JavaScript ?](#et-les-autres-frameworks-javascript-)
 - [Exemples de réalisations avec NodeAtlas](#exemples-de-réalisations-avec-nodeatlas)
 - [Table des matières](#table-des-matières)
 - [Documentation](#documentation)
 - [Contribution](#contribution)
- [Installation](#installation)
 - [Installation de NodeAtlas](#installation-de-nodeatlas)
 - [Installation de Node.js](#installation-de-nodejs)
- [Commencer avec NodeAtlas](#commencer-avec-nodeatlas)
 - [Ensemble de fichiers](#ensemble-de-fichiers)
 - [Configuration minimale](#configuration-minimale)
 - [Lancer le site avec NodeAtlas](#lancer-le-site-avec-nodeatlas)
 - [Squelette de Hello World](#squelette-de-hello-world)
- [Partie vue et template](#partie-vue-et-template)
 - [Plusieurs pages](#plusieurs-pages)
 - [Référencer ses routes](#référencer-ses-routes)
 - [Héberger des images, polices, CSS, JS, etc.](#héberger-des-images-polices-css-js-etc)
 - [Gérer l'inclusion de fichiers partiels](#gérer-linclusion-de-fichiers-partiels)
 - [Gérer des variations au sein d'une même vue](#gérer-des-variations-au-sein-dune-même-vue)
 - [Gérer l'internationalisation (i18n)](#gérer-linternationalisation-i18n)
 - [Gérer l'anatomie des URL](#gérer-lanatomie-des-url)
 - [Créer ses propres variables de webconfig](#créer-ses-propres-variables-de webconfig)
 - [Utiliser une vue globale](#utiliser-une-vue-globale)
 - [Partager des dossiers](#partager-des-dossiers)
 - [Générer des maquettes HTML](#générer-des-maquettes-html)
 - [Moteur de template EJS](#moteur-de-template-ejs)
 - [Moteur de template Pug](#moteur-de-template-pug)
- [Partie contrôleur et modèle](#partie-contrôleur-et-modèle)
 - [Cycle de vie et Points d'ancrage](#cycle-de-vie-et-points-dancrage)
 - [Échange client-serveur en temps réel avec websockets](#échange-client-serveur-en-temps réel-avec-websockets)
 - [Utiliser une base de données MySQL (SQL)](#utiliser-une-base-de-données-mysql-sql)
 - [Utiliser une base de données MongoDB (NoSQL)](#utiliser-une-base-de-données-mongodb-nosql)
 - [Utiliser des middlewares depuis Express](#utiliser-des-middlewares-depuis-express)
 - [Créer une application isomorphique](#créer-une-application-isomorphique)
 - [Moteur de template Vue](#moteur-de-template-vue)
- [Pour aller plus loin](#pour-aller-plus-loin)
 - [Gérer le routage (URL Rewriting)](#gérer-le-routage-url-rewriting)
 - [Gérer les pages inexistantes](#gérer-les-pages-inexistantes)
 - [Injecter des routes dynamiquement](#injecter-des-routes-dynamiquement)
 - [Gérer les redirections](#gérer-les-redirections)
 - [Gérer les Headers de page](#gérer-les-headers-de-page)
 - [Configuration dynamique](#configuration-dynamique)
 - [Faire tourner le site en HTTPs](#faire-tourner-le-site-en-https)
 - [Minifier les CSS / JS](#minifier-les-css--js)
 - [Générer les CSS avec Less](#générer-les-css-avec-less)
 - [Générer les CSS avec Stylus](#générer-les-css-avec-stylus)
 - [Optimiser les Images](#optimiser-les-images)
 - [Injecter du CSS inline pour maintenir des assets Email](#injecter-du-css-inline-pour-maintenir-des-assets-email)
 - [Autoriser / Interdire les demandes GET / POST](#autoriser--interdire-les-demandes-get--post)
 - [Autoriser / Interdire les demandes PUT / DELETE](#autoriser--interdire-les-demandes-put--delete)
 - [Gérér CORS et les demandes OPTIONS](#gerer-cors-et-les-demandes-options)
 - [Changer les paramètres des sessions](#changer-les-paramètres-des-sessions)
 - [Stockage externe des sessions](#stockage-externe-des-sessions)
 - [Changer l'URL final des hostname et port d'écoute](#changer-lurl-final-des-hostname-et-port-découte)
 - [Générer les URL dynamiquement](#générer-les-URL-dynamiquement)
 - [Moteur de template personnalisé](#moteur-de-template-personnalisé)
 - [Pas de vue](#pas-de-vue)
 - [Activer le cache](#activer-le-cache)
- [Anatomie du webconfig](#anatomie-du-webconfig)
- [CLI / Commandes de lancement](#cli--commandes-de-lancement)
 - [--help](#--help)
 - [--version](#--version)
 - [--browse](#--browse)
 - [--path](#--path)
 - [--webconfig](#--webconfig)
 - [--httpHostname](#--httphostname)
 - [--httpPort](#--httpport)
 - [--generate](#--generate)
 - [--cache](#--cache)
 - [--create](#--create)
 - [--httpSecure](#--httpsecure)
 - [--lang](#--lang)
- [API / NodeAtlas comme module npm](#api--nodeatlas-comme-module-npm)
 - [&lt;NA>.start()](#nastart)
 - [&lt;NA>.init(options)](#nainitoptions)
 - [&lt;NA>.run(options)](#narunoptions)
 - [&lt;NA>.started(callback)](#nastartedcallback)
 - [&lt;NA>.stopped(callback)](#nastoppedcallback)
 - [&lt;NA>.generated(callback)](#nageneratedcallback)
 - [&lt;NA>.created(callback)](#nacreatedcallback)
- [NodeAtlas comme simple serveur web](#nodeatlas-comme-simple-serveur-web)
- [Environnement de Développement](#environnement-de-développement)
 - [Debug du front-end](#debug-du-front-end)
 - [Debug du back-end](#debug-du-back-end)
 - [Tests de Périphériques](#tests-de-périphériques)
 - [Auto-rechargement à chaud](#auto-rechargement-a-chaud)
- [Environnement de Production](#environnement-de-production)
 - [Dans un environnement Windows Server avec iisnode](#dans-un-environnement-windows-server-avec-iisnode)
 - [Dans un environnement Unix avec forever](#dans-un-environnement-unix-avec-forever)
 - [Dans un environnement Unix avec Nginx](#dans-un-environnement-unix-avec-nginx)
 - [Proxy](#proxy)
- [Plus sur NodeAtlas](#plus-sur-nodeatlas)
 - [NodeAtlas VS les autres](#nodeatlas-vs-les-autres)



### Documentation ###

En complément de cette documentation, vous avez également accès aux,
- [tl;dr](https://github.com/NodeAtlas/NodeAtlas#node-atlas),
- [détails des fonctions de l'objet NA](https://node-atlas.js.org/doc/node-atlas/) (En) et vous pouvez aussi
- [discuter sur le chat ou demander de l'aide pour NodeAtlas](https://gitter.im/NodeAtlas/Aide).



### Contribution ###

Si vous souhaitez contribuer avec :

 - De l'amélioration ou de la correction de code,
 - De la correction d'orthographe pour la documentation française ou
 - De la traduction décente pour la documentation anglaise

Merci de respecter ses étapes :

 1. Répliquez le dépôt NodeAtlas.
 2. Travaillez sur une branch créée à partir de la branche master.
 3. Actez et poussez votre branche.
 4. Faites une proposition de fusion.
 5. Soyez patient. ;-)

Tout en respectant les conventions suivantes :

- [Passez le test Sonarqube JS avec un rang A](http://www.sonarqube.org/) : Bugs, Vulnerabilités et Dette Technique.

Merci d'avance pour votre aide !





## Installation ##

Avant de pouvoir installer NodeAtlas, assurez-vous d'avoir installé [Node.js](https://nodejs.org/), vous pouvez voir cela dans la section : [Installation de Node.js](#installation-de-nodejs) plus bas.

### Installation de NodeAtlas ###

*Note : Si vous êtes sous Linux, il faudra ajouter `sudo` en amont des commandes si vous n'êtes pas root.*

Il y a plusieurs manières d'installer NodeAtlas :

- **Avec npm, dans le dossier du projet** avec la commande suivante :

   > `npm install node-atlas`

   *Ceci installera* NodeAtlas *dans le dossier « node_modules/node-atlas/ » du dossier d'exécution de la commande. Recommandé pour un [usage sous forme de module](#api--nodeatlas-comme-module-npm) dans un projet.*

- **Avec npm, dans le dossier des modules globaux** avec la commande suivante :

   > `npm install -g node-atlas`

   *Ceci installera* NodeAtlas *dans le dossier « node_modules/node-atlas/ » global. Recommandé pour un [usage sous forme de module](#api--nodeatlas-comme-module-npm) dans beaucoup de projet ou pour [un usage à la ligne de commande](#cli--commandes-de-lancement).*

- **Cloner le répertoire** depuis le dépôt officiel [GitHub](https://github.com/NodeAtlas/node-atlas).

   > `git clone https://github.com/NodeAtlas/node-atlas.git`

   *Ceci installera* NodeAtlas *dans le dossier de votre dépôt local.*

   *Utilisez `npm install` depuis le dossier `</path/to/>node-atlas/` pour installer toutes les dépendences. Recommandé pour participer au développement.*

- **Télécharger NodeAtlas** depuis le site officiel [NodeAtlas](https://node-atlas.js.org/).

   *Une fois téléchargé, dézippez* NodeAtlas *dans le dossier « node_modules/ » qui vous conviendra.*

   *Utilisez `npm install` depuis le dossier `</path/to/>node-atlas/` pour installer toutes les dépendences.*



### Installation de Node.js ###

NodeAtlas est développé sous la forme d'un [Node.js Module Package](https://www.npmjs.com/) ou npm ce qui signifie qu'il a besoin de Node.js pour fonctionner. Node.js permet de rapidement et efficatement faire tourner du JavaScript en dehors du navigateur, rendant possible l'utilisation du même langage côté client et serveur.

*Note : Python 2.6 ou 2.7 est requis pour les sources tarballs.*

#### Installer sur Windows ####

En utilisant un installeur :

- [Download Windows Installer](https://nodejs.org/en/download/).

En utilisant [chocolatey](http://chocolatey.org/) pour installer Node.js :

```bash
cinst nodejs
```

ou en l'installant avec `cinst` :

```bash
cinst nodejs.install
```

#### Installer sur OSX ####

En utilisant un installeur :

- [Download Macintosh Installer](https://nodejs.org/en/download/).

En utilisant [homebrew](https://github.com/mxcl/homebrew):

```bash
brew install node
```

En utilisant [macports](http://www.macports.org/):

```bash
port install nodejs
```

#### Installer sur Linux ####

En utilisant un package :

- [Download Linux Binaries](https://nodejs.org/en/download/).

Exemple d'installation avec `apt-get` :

```bash
sudo apt-get install python-software-properties python g++ make
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Il y a un conflit de nom entre le `node` de package (Amateur Packet Radio Node Program), et les binaires de Node.js on été renommé de `node` à `nodejs`. Vous pouvez effectuer un symlink de `/usr/bin/node` à `/usr/bin/nodejs` ou désinstaller Amateur Packet Radio Node pour éviter le conflit.





## Commencer avec NodeAtlas ##

Une instance de site NodeAtlas est pilotée par le fichier `webconfig.json`. Tout site NodeAtlas en possède un, c'est ce qui force le moteur à passer de « Simple serveur web » à « Serveur web NodeAtlas ».

NodeAtlas n'est pas une architecture MVC standard. L'une des particularités de NodeAtlas est que le contrôleur s'occupe lui-même de rendre la page sans développement de votre part. Aussi le minimum vital pour créer une page est de référencer un fichier de vue.

Nous allons voir pour commencer comment mettre en place l'ensemble de fichiers minimals afin de réaliser un « Hello World ! ».

### Ensemble de fichiers ###

Après avoir installé NodeAtlas, créez-vous un ensemble de fichiers représentant un site dans le dossier de votre choix. Nous allons dans cet exemple le faire dans un dossier `hello-world` :

```txt
hello-world/
├─ views/
│  └─ index.htm
└─ webconfig.json
```

Nous allons donc délivrer derrière une adresse HTTP le contenu de la vue `views/index.htm` :

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

Voyons ci-après le contenu du fichier `webconfig.json`.

### Configuration minimale ###

Vous pouvez faire tourner une page simple avec la configuration minimale du `webconfig.json` ci-dessous :

*webconfig.json*

```json
{
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

équivalente à

*webconfig.json*

```json
{ "routes": { "/": "index.htm" } }
```



### Lancer le site avec NodeAtlas ###

#### Avec la commande `node-atlas` ####

**Si vous avez installé NodeAtlas avec `npm install -g node-atlas`** vous pouvez utiliser la commande `node-atlas`. `node-atlas` est un raccourci de la commande `node </path/to/globals/>node_modules/node-atlas/`.

> *Note : vous pouvez également utiliser la commande `atlas` qui est un alias de `node-atlas` mais plus rapide à écrire.*

Placez-vous avec votre invité de commande dans le dossier `hello-world/` et exécutez la commande suivante.

```bash
$ node-atlas
```

> Note : Si votre port 80 est utilisé ou que vous n'avez pas accès à celui-ci, vous pouvez utiliser l'option `--httpPort`.

>  ```bash
$ node-atlas --httpPort 8080
```

> ou utiliser la propriété du webconfig `httpPort`

> ```json
{
   "httpPort": 8080,
   "routes": { "/": "index.htm" }
}
```

Vous aurez accès à votre « Hello World » à la page `http://localhost/` dans un navigateur (ou `http://localhost:8080/`).


#### Via un fichier JavaScript ####

Vous pouvez également utiliser NodeAtlas comme un module npm.

Créer alors un fichier `server.js` au même niveau que le `webconfig.json`.

*server.js*

```javascript
require("node-atlas")().start();
```

Lancez ensuite le fichier avec Node.js.

```bash
$ node server.js
```



### Squelette de Hello World

Il est également possible d'obtenir une application déjà prête avec plusieurs des fonctionnalités qui seront étudiées un peu plus loin avec la commande `--create`. Pour ce faire il faut créer un dossier de test et y copier un squelette d'application exemple :

```bash
$ node-atlas --create hello-world
```

et démarrer !

```bash
$ node-atlas --browse
```





## Partie vue et template ##

NodeAtlas fonctionne avec une configuration via l'utilisation d'un `webconfig.json` qui lui permet d'étendre les possibilités du site de manière évolutive tout au long de sa vie. Par exemple, pour créer un site sans JavaScript côté serveur (pas de contrôleur), il suffit de ne renseigner qu'un paramètre `view` pour chaque route.

Cependant, vous pourrez toujours utiliser du JavaScript dans les templates des vues grâce à l'utilisation du moteur de template [EJS](http://ejs.co/) avec lequel fonctionne NodeAtlas par défaut.

Voyons les possibilités de nos sites par agrégat simple de fichiers de vue.

### Plusieurs pages ###

Ci-dessous un exemple de configuration.

```json
{
	"viewsRelativePath": "views",
	"routes": {
		"/": {
			"view": "index.htm"
		},
		"/membre.html": {
			"view": "member.htm",
			"post": false
		},
		"/membre-sans-extension/": {
			"view": "member.htm",
			"get": false
		},
		"a-propos.html": {
			"view": "about.htm"
		},
		"/erreur.html": {
			"view": "error.htm",
			"statusCode": 404,
			"mimeType": "text/plain"
		}
	}
}
```

Pour faire tourner cet ensemble de fichier :

```txt
├─ views/
│  ├─ about.htm
│  ├─ error.htm
│  ├─ index.htm
│  └─ member.htm
└─ webconfig.json
```

aux adresses :

- `http://localhost/` (répond à la racine),
- `http://localhost/membre.html` (ne répondra pas si demandée en POST),
- `http://localhost/membre-sans-extension/` (ne répondra pas si demandée en GET),
- `http://localhost/a-propos.html` (renvoi « Cannot GET about.html » car le contenu d'une route doit __obligatoirement__ commencer par un `/` pour être référencée),
- `http://localhost/erreur.html` (renvoi du contenu plein texte (sans balise) avec une erreur 404).

*Note : si* `viewsRelativePath` *n'est pas présent dans `webconfig.json`, par défaut le dossier des vues est bien* `views`. `viewsRelativePath` *est donc utile seulement pour changer le nom / chemin du répertoire.*



### Référencer ses routes ###

La configuration ci-dessous est équivalente à la configuration de la section juste au-dessus

```json
{
	"viewsRelativePath": "views",
	"routes": {
		"/": "index.htm",
		"/membre.html": {
			"view": "member.htm",
			"post": false
		},
		"/membre-sans-extension/": {
			"view": "member.htm",
			"get": false
		},
		"a-propos.html": "about.htm",
		"/erreur.html": {
			"view": "error.htm",
			"statusCode": 404,
			"mimeType": "text/plain"
		}
	}
}
```

car

```json
"/": "index.htm",
```

est un raccourci de

```json
"/": {
	"view": "index.htm"
}
```

Évidemment ce raccourci ne sert que si `view` est le seul paramètre à déclarer de la route.

#### Ordonner les routes ####

Il est également possible de placer ses routes dans un tableau, ce qui permettra de les prioriser lors de leur manipulation ultérieure dans la section des contrôleurs.

Dans ce cas le chemin devient le paramètre `url`.

```json
{
	"viewsRelativePath": "views",
	"routes": [{
		"url": "/",
		"view": "index.htm"
	}, {
		"url": "/membre.html",
		"view": "member.htm",
		"post": false
	}, {
		"url": "/membre-sans-extension/",
		"view": "member.htm",
		"get": false
	}, {
		"url": "a-propos.html",
		"view": "about.htm"
	}, {
		"url": "/erreur.html",
		"view": "error.htm",
		"statusCode": 404,
		"mimeType": "text/plain"
	}]
}
```

#### Routage dans un fichier partagé ####

Afin de ne pas réécrire une longue liste de route dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutualiser la déclaration des routes dans un fichier de votre choix. Par convention, c'est le fichier `routes.json`.

Par exemple :

L'ensemble de fichier suivant

```txt
├─ views/
│  └─ index.htm
├─ webconfig.json
└─ webconfig.prod.json
```

avec `webconfig.json`

```json
{
	"httpPort": 7777,
	"routes": {
		"/": {
			"view": "index.htm"
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
			"view": "index.htm"
		}
	}
}
```

pourrait devenir l'ensemble de fichier suivant

```txt
├─ views/
│  └─ index.htm
├─ routes.json
├─ webconfig.json
└─ webconfig.prod.json
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
		"view": "index.htm"
	}
}
```

*Note : vous pouvez vous créer plusieurs fichiers de routes comme `routes.en.json` et `routes.fr.json` et associer chacun d'eux dans un ensemble de webconfig paramétrés pour faire tourner un site dans diverses langues.*



### Héberger des images, polices, styles, scripts, etc. ###

Vous pouvez également héberger tout un tas de fichiers sur votre site dans un dossier public. Par exemple avec cette configuration :

```json
{
	"assetsRelativePath": "assets",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

et cet ensemble de fichiers :

```txt
├─ assets/
│  ├─ stylesheets/
│  │  └─ common.css
│  ├─ javascripts/
│  │  └─ common.js
│  └─ media/
│     └─ images/
│        └─ logo.png
├─ views/
│  └─ index.htm
└─ webconfig.json
```

vous aurez accès aux adresses :

- `http://localhost/`
- `http://localhost/stylesheets/common.css`
- `http://localhost/javascripts/common.js`
- `http://localhost/media/images/logo.png`

*Note : si* `assetsRelativePath` *n'est pas présent dans `webconfig.json`, par défaut le dossier public est bien* `assets`. `assetsRelativePath` *est donc utile seulement pour changer le nom / chemin du répertoire.*

#### maxAge, Etag, etc. ####

Il est possible de délivrer des en-tête HTTP personnalisées pour les ressources publiques (comme le `maxAge`, l'`Etag`, etc.) via la propriété `staticOptions` du webconfig. Pour connaître la totalité des possibilités, voir les options d'[Express](http://expressjs.com/fr/api.html).



### Gérer l'inclusion de fichiers partiels ###

Vous pouvez segmenter vos codes HTML afin de ne pas répéter le code redondant comme par exemple les parties « head » et « foot » ou tout autre fragment de code (pas d'inquiétude, nous verrons plus loin comment gérer un template unique composé des balises `head` et `body` avec fermeture dans le même fichier).

*webconfig.json*

```json
{
	"routes": {
		"/": {
			"view": "index.htm"
		},
		"/liste-des-membres/": {
			"view": "members.htm"
		}
	}
}
```

avec les fichiers suivants :

```txt
├─ assets/
│  ├─ stylesheets/
│  │  └─ common.css
│  └─ javascripts/
│     └─ common.js
├─ views/
│  ├─ partials/
│  │  ├─ head.htm
│  │  └─ foot.htm
│  ├─ index.htm
│  └─ members.htm
└─ webconfig.json
```

*views/partials/head.htm*

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

*views/partials/foot.htm*

```html
		<script async type="text/javascript" src="javascripts/common.js"></script>
	</body>
</html>
```

*views/index.htm*

```html
	<?- include("partials/head.htm") ?>

	<div>
		<h1>Bienvenue</h1>
		<p>C'est la page d'accueil.</p>
	</div>

	<?- include("partials/foot.htm") ?>
```

*views/members.htm*

```html
	<?- include("partials/head.htm") ?>

	<div>
		<h1>Liste des members</h1>
		<p>C'est la page des membres.</p>
	</div>

	<?- include("partials/foot.htm") ?>
```

vous aurez accès aux adresses :

- `http://localhost/`
- `http://localhost/liste-des-membres/`

*Note : pour plus d'information sur la différence entre `<?`, `<?-`, `<?=`, etc. vous pouvez vous référez à la section [moteur de template](#moteur-de-template-ejs).*



### Gérer des variations au sein d'une même vue ###

Il est possible avec la même vue et les mêmes inclusions de générer des pages aux contenus différents (utile en mode génération de maquettes HTML). Activer les variations avec la configuration suivante :

```json
{
	"variation": "common.json",
	"variationsRelativePath": "variations",
	"routes": {
		"/": {
			"view": "template.htm",
			"variation": "index.json",
		},
		"/liste-des-membres/": {
			"view": "template.htm",
			"variation": "members.json",
		}
	}
}
```

avec les fichiers suivants :

```txt
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ index.css
│  │  └─ members.css
│  └─ javascripts/
│     ├─ common.js
│     ├─ index.js
│     └─ members.js
├─ variations/
│  ├─ common.json
│  ├─ index.json
│  └─ members.json
├─ views/
│  ├─ partials/
│  │  ├─ head.htm
│  │  └─ foot.htm
│  └─ template.htm
└─ webconfig.json
```

*variations/common.json*

```json
{
	"titleWebsite": "Titre du site",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*variations/index.json*

```json
{
	"titlePage": "Bienvenue",
	"classPage": "index",
	"content": "<p>C'est la page d'accueil.</p>"
}
```

*variations/members.json*

```json
{
	"titlePage": "Liste des membres",
	"classPage": "members",
	"content": "<p>C'est la page des membres.</p>"
}
```

*views/partials/head.htm*

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

*views/partials/foot.htm*

```html
		<script async type="text/javascript" src="javascripts/<?= common.classJsCommon ?>.js"></script>
	</body>
</html>
```

*views/template.htm*

```html
	<?- include("partials/head.htm") ?>

	<div class="title"><?- common.titleWebsite ?></div>

	<div>
		<h1><?- specific.titlePage ?></h1>
		<?- specific.content ?>
	</div>

	<?- include("partials/foot.htm") ?>
```

vous aurez accès aux adresses :

- `http://localhost/`
- `http://localhost/liste-des-membres/`

*Note: si* `variationsRelativePath` *n'est pas présent dans `webconfig.json`, par défaut le dossier des variations est bien* `variations`. `variationsRelativePath` *est donc utile seulement pour changer le nom / chemin de répertoire.*



### Gérer l'internationalisation (i18n) ###

#### Toutes les langues sur le même site ####

Sur le même principe, les variations peuvent être utilisées pour créer la même page, mais dans des langues différentes (et derrière des routes différentes) :

```json
{
	"languageCode": "en-us",
	"variationsRelativePath": "l10n",
	"routes": {
		"/": {
			"view": "landing.htm",
			"variation": "landing.json"
		},
		"/home/": {
			"view": "home.htm",
			"variation": "home.json"
		},
		"/accueil/": {
			"view": "home.htm",
			"variation": "home.json",
			"languageCode": "fr-fr"
		}
	}
}
```

*Note : dans cet exemple, je n'utilise pas la propriété `variation` commune car je n'utilise pas de* `common.json` *. J'ai arbitrairement décidé de renommer mon dossier* `variations` *en* `l10n` *(localisation)*.

avec les fichiers suivants :

```txt
├─ l10n/
│  ├─ landing.json
│  ├─ en-us
│  │  └─ home.json
│  └─ fr-fr
│     └─ home.json
├─ views/
│  ├─ partials/
│  │  ├─ head.htm
│  │  └─ foot.htm
│  ├─ landing.htm
│  └─ home.htm
└─ webconfig.json
```

*l10n/landing.json*

```json
{
	"titlePage": "Landing",
	"classPage": "landing",
	"selectLabel": [
		"English",
		"Français"
	]
}
```

*l10n/en-us/home.json*

```json
{
	"titlePage": "Welcome",
	"classPage": "home",
	"content": "<p>This is a home page.</p>"
}
```

*l10n/fr-fr/home.json*

```json
{
	"titlePage": "Bienvenue",
	"classPage": "home",
	"content": "<p>C'est la page d'accueil.</p>"
}
```

*views/partials/head.htm*

```html
<!DOCTYPE html>
<html lang="<?= languageCode ?>">
	<head>
		<meta charset="utf-8" />
		<title><?= specific.titlePage ?></title>
	</head>
	<body class="<?= specific.classPage ?>">
```

*views/partials/foot.htm*

```html
	</body>
</html>
```

*views/landing.htm*

```html
	<?- include("partials/head.htm") ?>

	<select>
		<? for (var i = 0; i < specific.selectLabel.length; i++) { ?>
		<option><?= specific.selectLabel[i] ?></option>
		<? } ?>
	</select>

	<?- include("partials/foot.htm") ?>
```

*views/home.htm*

```html
	<?- include("partials/head.htm") ?>

	<div>
		<h1><?- specific.titlePage ?></h1>
		<?- specific.content ?>
	</div>

	<?- include("partials/foot.htm") ?>
```

vous aurez accès aux adresses :

- `http://localhost/`
- `http://localhost/home/`
- `http://localhost/accueil/`

*Note : par défaut c'est le* `languageCode` *racine qui conditionne la langue d'affichage du site. Il est aussi possible de changer la langue avec un* `languageCode` par page. *Il faut également savoir que dès que le site ou une page à un* `languageCode` *dans la configuration, ses fichiers de variations doivent être placées dans un sous répertoire portant le nom du* `languageCode`.


#### Utiliser variations et localisations ensemble ####

Vous avez peut-être constaté dans l'exemple précédent que le fichier `landing.json` n'était pas dans le dossier `en-us/` ou `fr-fr/`. Cela est tout à fait possible et signifie qu'il sera utilisé dans les langues qui ne le possèdent pas dans leur dossier.

Aussi, quand un `languageCode` est précisé, NodeAtlas part d'abord chercher la valeur dans le fichier du dossier correspondant. Si celle-ci n'y est pas, alors il part la chercher dans le dossier parent (celui utilisé en standard pour les variations sans localisation).

Cela va vous permettre par exemple de gérer la langue maître directement dans le dossier de variation. Ainsi avec l'exemple suivant :

```txt
┊┉
├─ variations/
│  ├─ common.json
│  ├─ home.json
│  └─ fr-fr
│     ├─ common.json
│     └─ home.json
┊┉
```

vous pouvez :

- gérer la version `en-us` directement à la racine de `variations/` (comme NodeAtlas ne trouve rien dans `en-us` il utilise alors les valeurs des fichiers racines) et
- gérer la version `fr-fr` dans le dossier `fr-fr/`,

ainsi, si une phrase n'est pas encore traduite dans un fichier `fr-fr`, au lieu de renvoyer une erreur, NodeAtlas renverra la version racine, soit la version `en-us`.


#### À chaque langue sa configuration ####

Vous pouvez également décider de faire tourner chaque langue dans un `webconfig.json` différent. Avec l'ensemble de fichier suivant :

```txt
├─ variations/
│  ├─ landing.json
│  ├─ en-us
│  │  ├─ home.json
│  │  └─ members.json
│  └─ fr-fr
│     ├─ home.json
│     └─ members.json
├─ views/
│  ├─ partials/
│  │  ├─ head.htm
│  │  └─ foot.htm
│  ├─ landing.htm
│  ├─ home.htm
│  └─ members.htm
├─ webconfig.json
├─ webconfig.en-us.json
└─ webconfig.fr-fr.json
```

vous pourriez avoir les `webconfig.json` suivant :

*webconfig.json*

```json
{
	"routes": {
		"/": {
			"view": "landing.htm",
			"variation": "landing.json"
		}
	}
}
```

*webconfig.en-us.json*

```json
{
	"httpPort": 81,
	"urlRelativeSubPath": "english",
	"languageCode": "en-us",
	"routes": {
		"/": {
			"view": "home.htm",
			"variation": "home.json"
		},
		"/members-list/": {
			"view": "members.htm",
			"variation": "members.json"
		}
	}
}
```

*webconfig.fr-fr.json*

```json
{
	"httpPort": 82,
	"urlRelativeSubPath": "francais",
	"languageCode": "fr-fr",
	"routes": {
		"/": {
			"view": "home.htm",
			"variation": "home.json"
		},
		"/liste-des-membres/": {
			"view": "members.htm",
			"variation": "members.json"
		}
	}
}
```

et avoir accès aux adresses :

- `http://localhost/`
- `http://localhost:81/english/`
- `http://localhost:81/english/`
- `http://localhost:81/english/members-list/`
- `http://localhost:82/francais/`
- `http://localhost:82/francais/liste-des-membres/`

Il est ensuite possible de faire du reverse proxy avec pour ramener l'ensemble des URL sur le port 80 afin d'obtenir :

- `http://www.website.ext/`
- `http://www.website.ext/english/`
- `http://www.website.ext/english/`
- `http://www.website.ext/english/members-list/`
- `http://www.website.ext/francais/`
- `http://www.website.ext/francais/liste-des-membres/`



### Gérer l'anatomie des URL ###

Par défaut, si vous utilisez la configuration suivante :

*webconfig.json*

```json
{
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

avec la vue suivante :

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>URL</title>
	</head>
	<body>
		<div><?- urlRootPath ?></div>
		<div><?- urlSubPath ?></div>
		<div><?- urlBasePath ?></div>
		<div><?- urlFilePath ?></div>
		<div><?- urlQueryPath ?></div>
		<div><?- urlPath ?></div>
	</body>
</html>
```

cela est identique à utiliser celle-ci :

*webconfig.json*

```json
{
	"httpHostname": "localhost",
	"httpPort": 80,
	"httpSecure": false,
	"urlRelativeSubPath": "",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

Vous pourrez accéder à l'URL : `http://localhost/` et au contenu :

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>URL</title>
	</head>
	<body>
		<div>http://localhost</div>
		<div></div>
		<div>http://localhost</div>
		<div>/</div>
		<div></div>
		<div>http://localhost/</div>
	</body>
</html>
```

Changez alors la configuration en ceci :

```json
{
	"httpHostname": "127.0.0.1",
	"httpPort": 7777,
	"httpSecure": "security/server",
	"urlRelativeSubPath": "sub/folder",
	"routes": {
		"/index.html": {
			"view": "index.htm"
		}
	}
}
```

Vous pourrez cette fois accéder à l'URL : `https://127.0.0.1:7777/sub/folder/index.html?test=ok` et au contenu :

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>URL</title>
	</head>
	<body>
		<div>https://127.0.0.1:7777</div>
		<div>/sub/folder</div>
		<div>https://127.0.0.1:7777/sub/folder</div>
		<div>/index.html</div>
		<div>?test=ok</div>
		<div>https://127.0.0.1:7777/sub/folder/index.html</div>
	</body>
</html>
```

Note : cette exemple ne fonctionnera que si vous avez des fichiers `server.crt` et `server.key` valide dans le dossier `security/`. Essayez le sans `"httpSecure": "security/server"` et il fonctionnera avec des URL sans `https`.



### Créer ses propres variables de webconfig ###

Imaginons deux webconfigs dans lesquels nous allons créer nos propres variables comme suit :

1. *webconfig.json*

   ```json
   {
   	"routes": {
   		"/": {
   			"view": "index.htm"
   		}
   	},
   	"_minified": ""
   }
   ```

2. *webconfig.prod.json*

   ```json
   {
   	"routes": {
   		"/": {
   			"view": "index.htm"
   		}
   	},
   	"_minified": ".min"
   }
   ```

avec cet ensemble de fichiers :

```txt
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  └─ common.min.css
│  └─ javascripts/
│     ├─ common.js
│     └─ common.min.js
├─ views/
│  └─ index.htm
├─ webconfig.json
└─ webconfig.prod.json
```

et `index.htm` contenant :

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>Hello world</title>
		<link rel="stylesheet" type="text/css" href="stylesheets/common<?= webconfig._minified ?>.css" />
	</head>
	<body>
		<div>Ceci est un test de récupération de ressources minifiées/non-minifiées.</div>
		<script type="text/javascript" src="javascripts/common<?= webconfig._minified ?>.js"></script>
	</body>
</html>
```

En lançant (depuis le dossier du site) la commande :

```bash
$ node-atlas
```

Nous aurons à l'adresse `http://localhost/` la sortie suivante avec les fichiers non minifiés :

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
		<script type="text/javascript" src="javascripts/common.js"></script>
	</body>
</html>
```

Cependant en lançant la commande :

```bash
$ node-atlas --webconfig webconfig.prod.json
```

Nous aurons à l'adresse `http://localhost/` la sortie suivante avec les fichiers minifiés :

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
		<script type="text/javascript" src="javascripts/common.min.js"></script>
	</body>
</html>
```

*Note : il vaut mieux préfixer ses variables personnelles avec « _ » pour éviter des conflits avec des variables de configuration existantes ou futures.*



### Utiliser une vue globale ###

Plutôt que d'inclure une partie header et une partie footer en deux fichiers scindés dont les balises de l'un ne se ferme que dans les balises de l'autre : vous pouvez également les rassembler dans un seul fichier dans lequel vous indiquerez à quelle endroit les vues doivent se placer. Vous pourrez dans ce layout utiliser toutes les variations et tous les systèmes déjà vu.

avec cet ensemble de fichiers

```txt
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  └─ index.css
│  └─ javascripts/
│     └─ common.js
├─ variations/
│  ├─ common.json
│  └─ index.json
├─ views/
│  ├─ partials/
│  │  └─ header.htm
│  ├─ about.htm
│  ├─ common.htm
│  └─ index.htm
└─ webconfig.json
```

et avec le webconfig suivant :

*webconfig.json*

```json
{
	"view": "common.htm",
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.htm",
			"variation": "index.json"
		},
		"/a-propos/": {
			"view": "about.htm"
		}
	}
}
```

et ces deux fichiers de variations :

*common.json*

```json
{
	"titleWebsite": "Titre du site",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*index.json*

```json
{
	"titlePage": "Bienvenue",
	"classPage": "index",
	"content": "<p>C'est la page d'accueil.</p>"
}
```

vous pourez générer avec ces vues :

*views/common.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8">
		<title><?- specific.titlePage || "Pas de titre" ?></title>
		<link rel="stylesheet" href="stylesheets/<?= common.classCssCommon ?>.css"  media="all">
		<? if (specific.classPage) { ?>
		<link rel="stylesheet" href="stylesheets/<?= specific.classPage ?>.css"  media="all">
		<? } ?>
	</head>
	<body>
		<!-- Inclure un fichier normalement -->
		<?- include("partials/header.htm") ?>

		<!-- Inclure le fichier vu de `view` -->
		<?- include(routeParameters.view) ?>

		<script async="true" type="text/javascript" src="javascripts/<?= common.classJsCommon ?>.js"></script>
	</body>
</html>
```

*views/partals/header.htm*

```html
	<? if (specific.titlePage) { ?>
	<header>
		<h1><?= specific.titlePage ?></h1>
	</header>
	<? } ?>
```

*views/index.htm*

```html
	<div>
		<?- specific.content ?>
	</div>
```

*views/about.htm*

```html
	<div>
		<h1>NodeAtlas © Haeresis</h1>
	</div>
```

et obtenir les URL suivantes :

*/*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8">
		<title>Bienvenue</title>
		<link rel="stylesheet" href="stylesheets/common.css"  media="all">
		<link rel="stylesheet" href="stylesheets/index.css"  media="all">
	</head>
	<body>
		<header>
			<h1>Bienvenue</h1>
		</header>
		<div>
			<p>C'est la page d'accueil.</p>
		</div>
		<script async="true" type="text/javascript" src="javascripts/common.js"></script>
	</body>
</html>
```

*/about/*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8">
		<title>Pas de titre</title>
		<link rel="stylesheet" href="stylesheets/common.css"  media="all">
	</head>
	<body>
		<div>
			<h1>NodeAtlas © Haeresis</h1>
		</div>
		<script async="true" type="text/javascript" src="javascripts/common.js"></script>
	</body>
</html>
```



### Partager des dossiers ###

Il est possible de partager plus de contenu que ce qu'il y a dans le dossier hébergé par `assetsRelativePath`. Il est tout à fait possible de partager des vues ou des modèles avec la partie cliente par exemple. On appel les fichiers de ses dossiers des fichiers statiques.

Voyons l'exemple suivant :

avec cet ensemble de fichiers

```txt
├─ models/
│  └─ user.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

*webconfig.json*

```json
{
	"statics": {
		"/javascripts/models": "models"
	},
	"routes": {
		"/": "index.htm"
	}
}
```

*views/index.htm*

```html
<!DOCTYPE html>
	<html lang="fr-fr">
	<head>
		<meta charset="utf-8">
		<title>Statics</title>
	</head>
	<body>
		<div id="user"></div>
		<script src="javascripts/models/user.js"></script>
		<script>
			var user = new User(),
				mount = document.getElementById("user");

			user
				.firstname("Bruno")
				.lastname("Lesieur");

			mount.innerHTML = user.firstname() + " " + user.lastname();
		</script>
	</body>
</html>
```

*models/user.js*

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
}));
```

Nous pourrons accéder aux fichiers HTML `http://localhost/` et au JavaScript `http://localhost/javascripts/user.js`.

#### maxAge, Etag, etc. ####

Il est possible de configurer les informations livrées par NodeAtlas à la demande d'une ressource statique (comme le `maxAge`, l'`Etag`, etc.) via la propriété `staticOptions`. Dans ce cas, on ne fournit plus une `string` mais un `Object` et la propriété initiale devient le paramètre `path`. Par défaut les `staticOptions` sont celle global au webconfig (voir les options d'[Express](http://expressjs.com/fr/api.html)).

```json
{
	"statics": {
		"/javascripts/models": {
			"path": "models",
			"staticOptions": {
				"index": false
			}
		}
	},
	"routes": {
		"/": "index.htm"
	}
}
```

#### Ordonner les routes ####

Il est également possible de placer ses routes dans un tableau, ce qui permettra de les prioriser lors de leur manipulation ultérieur dans la section des contrôleurs.

Dans ce cas le chemin devient le paramètre `virtual`.

```json
{
	"statics": [{
		"virtual": "/javascripts/models",
		"path": "models",
		"staticOptions": {
			"index": false
		}
	}],
	"routes": {
		"/": "index.htm"
	}
}
```



### Générer des maquettes HTML ###

#### Générer des designs HTML ####

Avec la configuration suivante il est possible de générer des aperçu HTML du rendu de chaque page dans un fichier associé. Le fichier sera (re)créé à chaque affichage de la page dans votre navigateur.

```json
{
	"htmlGenerationBeforeResponse": true,
	"assetsRelativePath": "../HTML/",
	"serverlessRelativePath": "../HTML/",
	"routes": {
		"/": {
			"view": "index.htm",
			"output": "/index.html"
		},
		"/liste-des-membres/": {
			"view": "members.htm",
			"output": "/membres/liste.html"
		},
		"/liste-des-membres/?foo=bar": {
			"view": "members.htm",
			"output": false
		},
		"/aucun/parametre/output/": {
			"view": "members.htm"
		}
	}
}
```

et l'ensemble de fichiers suivant :

```txt
├─ HTML/
│  ├─ stylesheets/
│  │  ├─ common.css
│  └─ javascripts/
│     └─ common.js
├─ views/
│  ├─ index.htm
│  └─ members.htm
└─ webconfig.json
```

on peut créer physiquement la sortie suivante :

```txt
├─ HTML/
│  ├─ stylesheets/
│  │  └─ common.css
│  ├─ javascripts/
│  │  └─ common.js
│  ├─ index.html
│  ├─ members/
│  │  └─ list.html
│  └─ aucun/
│     └─ parametre/
│        └─ output ⤆ Ceci est un fichier
├─ views/
│  ┊┉
└─ webconfig.json
```

en se rendant aux adresses :

- `http://localhost/`
- `http://localhost/liste-des-membres/`
- `http://localhost/parametre/output/`

*Note : Il n'y a pas de génération pour `/liste-des-membres/?foo=bar` car `output` est à `false`. Utilisez cette valeur pour ignorer des routes à la génération.*

La génération s'enclenche quand on affiche la page uniquement parce que `htmlGenerationBeforeResponse` existe et est à `true`.

#### Générer un site sans partie serveur ####

Il est également possible de gérer la création d'un site en simple page HTML avec la commande `--generate`.

Si `htmlGenerationBeforeResponse` est passé à `false` (ou enlevé) le seul moyen de générer toutes les pages du site sera via la commande `node-atlas --generate` qui génèrera toutes les pages d'un coup dans le dossier `serverlessRelativePath` à la condition que le `output` global soit à `true`.

De plus avec `--generate`, l'intégralité du dossier `assetsRelativePath` (dossier des fichiers publics) sera copié dans le dossier `serverlessRelativePath` si les deux dossiers n'ont pas un chemin identique à condition que `assetsCopy` soit à `true`.

Cela vous permet réellement d'obtenir en sortie dans le dossier de génération des pages « stand-alone » avec l'intégralité des fichiers auxquels elles font appel (CSS / JS / Images, etc.).

Voyons cela avec la configuration suivante :

```json
{
	"output": true,
	"assetsCopy": true,
	"languageCode": "fr-fr",
	"index": true,
	"serverlessRelativePath": "serverless",
	"routes": {
		"/cv.html": {
			"view": "index.htm",
			"variation": "index.json"
		},
		"/en/cv.html": {
			"view": "index.htm",
			"variation": "index.json",
			"languageCode": "en"
		}
	}
}
```

et l'ensemble de fichiers suivant :

```txt
├─ assets/
│  ├─ stylesheets/
│  │  └─ common.css
│  └─ javascripts/
│     └─ common.js
├─ variations/
│  ├─ fr-fr/
│  │  └─ index.json
│  └─ en/
│     └─ index.json
├─ views/
│  └─ index.htm
└─ webconfig.json
```

Avec `node-atlas --browse`, à l'adresse `http://localhost/` s'affichera la liste des pages composants votre site (grâce à `"index": true`).

Il ne restera plus qu'à, une fois `--generate` utilisé, admirer votre site HTML dans le dossier :

```
┊┉
├─ serverless/
│  ├─ stylesheets/
│  │  └─ common.css
│  ├─ javascripts/
│  │  └─ common.js
│  ├─ cv.html
│  └─ en/
│     └─ cv.html
┊┉
```

*Note : si* `serverlessRelativePath` *n'est pas présent dans `webconfig.js`, par défaut le dossier des générations est bien* `serverless/`. `serverlessRelativePath` *est donc utile seulement pour changer le nom / chemin répertoire.*

#### Générer les fichiers statics ####

Les fichiers définis dans `statics` sont également copiable dans le dossier `serverlessRelativePath` lors de l'appel à `--generate`. Pour permettre cela, vous pouvez utiliser pour chaque dossier statique le paramètre `output` mis à `true`.

```
{
	"statics": {
		"/javascripts/models": {
			"path": "models",
			"output": true
		}
	},
}
```



### Moteur de template EJS ###

Par défaut, NodeAtlas utilise déjà le [moteur de template EJS](http://ejs.co/), c'est ce qui vous permet d'utiliser du JavaScript dans les balises `<?` et `?>`.

Les balises `<?` et `?>` permettent d'inclure du JavaScript au sein même de vos templates. Il existe différentes variantes de la balise vous permettant d'afficher le résultat JavaScript dans votre template (comme vous le feriez avec un `document.write`). Les voici :

- `<?` La balise « Scriptlet » par défaut, pour les structure de contrôle, pas de sortie.
- `<?=` Affiché le résultat des expressions dans le template (échappement HTML).
- `<?-` Affiché le résultat des expressions dans le template tel quel.
- `<?#` Balise commentaire, pas d'exécution, pas de sortie.
- `<?%` Affiche litéralement le contenu d'une `<?`
- `?>` La balise de fermeture.
- `-?>` La balise Mode trim, exécute un trim sur les nouvelles lignes.

Cependant, EJS fonctionne normalement avec les balises `<%` et `%>`. Vous pouvez remettre ces valeurs ou même utiliser celles que vous souhaitez.

```json
{
	"templateEngineDelimiter": "%",
	"routes": {
		"/": {
			"view": "index.ejs"
		}
	}
}
```

Par exemple, pour inclure une partie de fichier on utilise l'instruction `<?- include("partials/head.htm") ?>`. Il serait possible de le faire avec `<%- include("partials/head") %>` avec la configuration ci-dessous :

Voyez l'exemple dans les fichiers ci-dessous :

*webconfig.json*

```json
{
	"templateEngineDelimiter": "%",
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.ejs",
			"variation": "index.json"
		}
	}
}
```

*variations/common.json*

```json
{
	"titleWebsite": "Titre du site",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*variations/index.json*

```json
{
	"titlePage": "Bienvenue",
	"classPage": "index",
	"content": "<p>C'est la page d'accueil.</p>"
}
```

*views/partials/head.ejs*

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

*views/partials/foot.ejs*

```html
		<script async type="text/javascript" src="javascripts/<%= common.classJsCommon %>.js"></script>
	</body>
</html>
```

*views/index.ejs*

```html
	<%- include("partials/head") %>

	<div class="title"><%- common.titleWebsite %></div>

	<div>
		<h1><%- specific.titlePage %></h1>
		<%- specific.content %>
	</div>

	<%- include("partials/foot") %>
```

Pour tout savoir sur les possibilités du moteur de template consultez [la documentation EJS](http://ejs.co/).

*Note : si rien n'est précisé,* `templateEngineDelimiter` *vaut* `?`.



### Moteur de Template Pug ###

Il est possible d'utiliser en lieu et place de EJS le [moteur de template Pug](https://pugjs.org/) (anciennement Jade) pour générer les pages et manipuler les variations. Cela est possible pour l'intégralité du site avec par exemple ce webconfig :

```json
{
	"pug": true,
	"routes": {
		"/": {
			"view": "index.pug"
		},
		"/contenu/": {
			"view": "content.pug"
		}
	}
}
```

ou seulement pour une page précise :

```
{
	"routes": {
		"/": {
			"view": "index.pug"
		},
		"/contenu/": {
			"pug": true,
			"view": "content.pug"
		}
	}
}
```

Il est également possible pour un moteur complet en Pug de repasser une page spécifique en EJS.

```
{
	"pug": true,
	"routes": {
		"/": {
			"pug": false,
			"view": "index.pug"
		},
		"/contenu/": {
			"view": "content.pug"
		}
	}
}
```

Voyons ce que cela donnerait avec l'exemple suivant :

*webconfig.json*

```
{
	"pug": true,
	"view": "common.pug",
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.pug",
			"variation": "index.json"
		}
	}
}
```

*variations/common.json*

```json
{
	"titleWebsite": "Titre du site",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*variations/index.json*

```json
{
	"titlePage": "Bienvenue",
	"classPage": "index",
	"content": "<p>C'est la page d'accueil.</p>"
}
```

*views/common.pug*

```html
doctype html
html(lang="fr-fr")
	head
		meta(charset="utf-8")
		title #{specific.titlePage}
		link(type="text/css", rel="stylesheet", href="stylesheets/" + common.classCssCommon + ".css", media="all")
		link(type="text/css", rel="stylesheet", href="stylesheets/" + specific.classPage + ".css", media="all")
	body(class=specific.classPage)
		include partials/header
		include #{routeParameters.view}
		script(async, type="text/javascript", src="javascripts/" + common.classJsCommon + ".js")
```

*views/partials/header.pug*

```html
h1 #{titleWebsite}
```

*views/index.pug*

```html
div
	h2 #{specific.titlePage}
	| !{specific.content}
```

Pour tout savoir sur les possibilités du moteur de template consultez [la documentation Pug](https://pugjs.org/).

*Note : si rien n'est précisé,* `pug` *vaut* `false`.



### Moteur de Template Vue ###

[Vue](https://vuejs.org/) est un framework MVVM évolutif comme Angular ou React qui est utilisable en tant que moteur de rendu côté serveur pour NodeAtlas. L'avantage ici, c'est que côté client il reprend la main en hydratant le code généré depuis le serveur pour le rendre réactif côté client !

> N'hésitez pas à reconsulter cette partie plus tard car elle utilise divers mécanismes de contrôleur que nous allons apprendre à utiliser dans la prochaine partie.

Nous vous proposons de mettre en place l'utilisation de [Vue](https://fr.vuejs.org/) + [Vue Router](https://router.vuejs.org/fr/) + [Vue Server Renderer](https://ssr.vuejs.org/fr/) à travers la commande suivante :

```bash
node-atlas --create hello-vue
```

puis de l'initialiser à l'aide de la commande

```bash
cd ./hello-vue/
npm install
```

et enfin de le démarrer avec la commande

```bash
node-atlas --browse
```

- [Retrouvez les sources et toutes les explications d'utilisation sur le dépôt GitHub dédié](https://github.com/Haeresis/node-atlas-hello-vue).





## Partie contrôleur et modèle ##

NodeAtlas ne se contente pas uniquement de faciliter la génération de page web en fonction de variables dans les fichiers de variation. NodeAtlas vous permet également d'intéragir avec le contenu des fichiers de variations ou avec le DOM généré en fonction :

- des paramètres dans la partie query de l'URL (GET),
- des paramètres dans le corps de la requête (POST)

mais également :

- de vous connecter à des bases de données,
- de maintenir des sessions,
- de faire des échanges websockets et
- de faire bien plus encore !



### Cycle de vie et points d'ancrage ###

Le cycle de vie de NodeAtlas est le suivant. D'abord, les ressources se chargent, le serveur démarre, les routes s'initialisent et tout est opérationnel. Puis, à chaque requête HTTP entrante, une réponse est générée. Vous pouvez intervenir grâce à différents points d'ancrage pendant le démarrage, et pendant la création d'une page.

Voici à quoi peut ressembler un `webconfig.json` permettant d'atteindre tous les points d'ancrage du cycle de vie d'une page.

```json
{
	"controllersRelativePath": "controllers",
	"controller": "common.js",
	"routes": {
		"/": {
			"view": "index.htm",
			"controller": "index.json"
		}
	}
}
```

*Note : Si* `controllersRelativePath` *n'est pas présent dans « webconfig.json », par défaut le dossier des contrôleurs est bien* `controllers`. `controllersRelativePath` *est donc utile seulement pour changer le nom/chemin du répertoire.*

et voici le détail des endroits ou vous pouvez intervenir pendant :

*Le lancement du serveur*

```
┌─[Chargement des modules Node.js]
┊
├─[Chargement des variables d'initialisation]
┊
├─[Chargement des modules npm]
┊
├─[Prise en compte des commandes et de la langue du CLI]
┊
├─[Prise en compte des options de l'API]
┊
└─[Chargement de la langue du CLI]
  ┊
  ├─[Chargement des variables globales]
  ┊
  ├─[Prise en compte des instructions du webconfig]
  ┊
  └─[Chargement du contrôleur commun]
	┊  _________________________________________
	├─{Point d'ancrage : <controller>.setModules}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	├─[Initialisation du serveur]
	┊  __________________________________________
	├─{Point d'ancrage : <controller>.setSessions}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	├─[Initialisation des sessions]
	┊
	├─[Initialisation des sockets]
	┊ ┊  _________________________________________
	┊ ├─{Point d'ancrage : <controller>.setSockets}_______
	┊ └─{Point d'ancrage : routes[<controller>].setSockets}
	┊    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	┊  ________________________________________________
	├─{Point d'ancrage : <controller>.setConfigurations}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	└─[Démarrage du serveur]
	  ┊
	  ├─[Initialisation du moteur de template]
	  ┊  ________________________________________
	  ├─{Point d'ancrage : <controller>.setRoutes}
	  ┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	  └─[Initialisation des routes]
		┊
		∞
```

*Le traitement des requêtes de chaque route*

```
∞
┊
└─[Traitement d'une requête]
  ┊
  └─[Chargement du contrôleur spécifique]
	┊  _______________________________________________
	├─{Point d'ancrage : <controller>.changeVariations}_______
	├─{Point d'ancrage : routes[<controller>].changeVariations}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	└─[Compilation du moteur de template]
	  ┊  ________________________________________
	  ├─{Point d'ancrage : <controller>.changeDom}_______
	  ├─{Point d'ancrage : routes[<controller>].changeDom}
	  ┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	  └─[Envoi de la réponse]
		┊
		∞
```

#### changeVariations ####

Pour intercepter les variations, vous pouvez soit utiliser le contrôleur commun pour tout le site et/ou également le contrôleur par page.

`changeVariations(next, locals, request, response)` est une fonction a `exports` et fournissant :

- L'objet `NA` en tant que `this`.
- En premier paramètre la fonction de retour `next()`.
- En deuxième paramètre l'objet `locals` contenant entre autre la variation `locals.common` pour accéder aux variations communes et la variation `locals.specific` pour accéder aux variations spécifiques.
- En troisième paramètre l'objet `request` qui va être faites.
- En quatrième paramètre l'objet `response` faites pour cette page.

Voici un exemple utilisant les deux points d'entrée, d'abord la commune à plusieurs pages, puis celle de chaque page :

```json
{
	"urlRelativeSubPath": "example",
	"controller": "common.js",
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.htm",
			"variation": "index.json",
			"controller": "index.js"
		}
	}
}
```

avec cet ensemble de fichier :

```
├─ variations/
│  ├─ common.json
│  └─ index.json
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ views/
│  ├─ partials/
│  │  ├─ head.htm
│  │  └─ foot.htm
│  └─ index.htm
└─ webconfig.json
```

En demandant la page `http://localhost/example/?title=Haeresis` en POST avec une variable `example=Ceci+est+un+test` dans le corps de requête, les fichiers suivants (entre autre) seront utilisés :

*variations/common.json*

```json
{
	"titleWebsite": "Titre du site"
}
```

*variations/index.json*

```json
{
	"titlePage": "Bienvenue",
	"content": "<p>C'est la page d'accueil.</p>"
}
```

*views/index.htm*

```html
	<?- include("partials/head.htm") ?>

	<div class="title"><?- common.titleWebsite ?></div>

	<div>
		<h1><?- specific.titlePage ?></h1>
		<?- specific.content ?>
	</div>

	<?- include("partials/foot.htm") ?>
```

*controllers/common.js*

```js
// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté pour toute request HTTP, toute page confondue.
exports.changeVariations = function (next, locals, request, response) {

	// Ici on modifie les variables de locals.

	console.log(locals.common.titleWebsite); // "Titre du site"
	console.log(locals.specific.titlePage); // "Bienvenue"
	console.log(locals.specific.content); // "C'est la page d'accueil."

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
```

*controllers/index.js*

```js
// On intervient avant que les variables soient injectées dans le système de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (next, locals, request, response) {

	// Ici on modifie les variables de locals.

	console.log(locals.common.titleWebsite); // "Titre du site"
	console.log(locals.specific.titlePage); // "Bienvenue Haeresis"
	console.log(locals.specific.content); // "Ceci est un test"

	locals.common.titleWebsite = "C'est l'accueil, c'est tout.";
	locals.specific.content = "C'est l'accueil, c'est tout.";

	console.log(locals.common.titleWebsite); // "C'est l'accueil, c'est tout."
	console.log(locals.specific.titlePage); // "Bienvenue Haeresis"
	console.log(locals.specific.content); // "C'est l'accueil, c'est tout."

	// On passe à la suite.
	next();
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

Si vous décidez de désabonner la variation spécifique avec le webconfig suivant :

```json
{
	"controller": "common.js",
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.htm",
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

`changeDom(next, locals, request, response)` est une fonction a `exports` et fournissant :

- L'objet `NA` en tant que `this`.
- En premier paramètre la fonction de retour `next([$])` acceptant optionellement en premier paramètre la function `$` utilisée pour manipuler le DOM Virtuel.
- En deuxième paramètre l'objet `locals` contenant entre autre la string `locals.dom` contenant la réponse ou la function `locals.virtualDom()` générant un Dom Virtuel.
- En troisième paramètre l'objet `request` qui va être faites.
- En quatrième paramètre l'objet `response` faites pour cette page.

Voici un exemple utilisant les deux points d'entrée, d'abord la commune à plusieurs pages, puis celle de chaque page :

```json
{
	"controller": "common.js",
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.htm",
			"variation": "index.json",
			"controller": "index.js"
		}
	}
}
```

avec cet ensemble de fichier :

```
├─ variations/
│  ├─ common.json
│  └─ index.json
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

En demandant la page `http://localhost/` les fichiers suivants (entre autre) seront utilisés :

*variations/common.json*

```json
{
	"titleWebsite": "Titre du site"
}
```

*variations/index.json*

```json
{
	"titlePage": "Bienvenue",
	"content": "<p>C'est la page d'accueil.</p>"
}
```

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title><?- common.titleWebsite ?></title>
	</head>
	<body>
		<div class="title"><?- common.titleWebsite ?></div>
		<div>
			<h1><?- specific.titlePage ?></h1>
			<?- specific.content ?>
		</div>
	</body>
</html>
```

*controllers/common.js*

```js
// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (next, locals, request, response) {
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
```

*controllers/index.js*

```js
// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (next, locals, request, response) {
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

#### setSockets ####

Pour maintenir une connexion temps réel entre votre partie Cliente et Serveur à travers toutes les pages ouvertes sur tous les navigateurs de tous les ordinateurs sur le web, vous aller pouvoir définir vos websockets ici [Plus de détail dans la partie Socket.IO](#échange-client-serveur-en-temps réel-avec-websockets).

`setSockets()` est une fonction a `exports` et fournissant :

- L'objet `NA` en tant que `this`.

Voici un exemple utilisant les deux points d'entrée, d'abord la commune à plusieurs pages, puis celle de chaque page :

```json
{
	"socketClientFile": "/node-atlas/socket.io.js",
	"socketServerOptions": { transports: ['polling', 'websocket'] },
	"controller": "common.js",
	"routes": {
		"/": {
			"view": "index.htm",
			"controller": "index.js"
		}
	}
}
```

avec cet ensemble de fichier :

```
├─ assets/
│  └─ javascripts/
│     └─ index.js
├─ controllers/
│  ├─ common.js
│  ├─ index.js
│  └─ test.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

En demandant la page `http://localhost/` les fichiers suivants (entre autre) seront utilisés :

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>Exemple Websocket</title>
	</head>
	<body>
		<div class="layout">
			<div class="content"></div>
			<div class="field">Tape du texte : <input class="input" type="text"></div>
		</div>
		<script type="text/javascript" src="socket.io/socket.io.js"></script>
		<script type="text/javascript" src="node-atlas/socket.io.js"></script>
		<script type="text/javascript" src="javascripts/test.js"></script>
		<script type="text/javascript" src="javascripts/index.js"></script>
	</body>
</html>
```

*Note : Si* `socketClientFile` *et* `socketServerOptions` *ne sont pas présent dans `webconfig.json`, par défaut le fichier client et les options serveurs pour configurer les sockets sont bien* `/node-atlas/socket.io.js` *et* `{ transports: ['polling', 'websocket'] }`. *Il sont donc utiles seulement pour changer le chemin du fichier ou les transports des sockets permis. Si vous mettez `socketClientFile` à `false`, le fichier client ne sera pas accessible.*

*assets/javascripts/test.js*

```js
(function (expose, factory) {
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory;
	} else {
		expose.Test = factory;
	}
}(this, function () {
	if (NA.isClient) {
		console.log("Client");
	} else {
		console.log("Serveur");
	}
}));
```

*controllers/common.js*

```js
// On référence les actions de réponse et d'envoi globaux côté serveur.
// Ce code sera exécuté pour toute entrée Websocket entrante.
exports.setSockets = function () {
	var NA = this,
		io = NA.io;

	io.on('connection', function (socket) {
		console.log("Un onglet est ouvert.");
		socket.on('disconnect', function () {
			console.log("Un onglet est fermé.");
		});
	});
};
```

*controllers/index.js*

```js
// On référence les actions de réponse et d'envoi globaux côté serveur.
// Ce code sera exécuté pour toute entrée Websocket entrante.
exports.setSockets = function () {
	var NA = this,
		path = NA.modules.path,
		io = NA.io;

	require(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, "javascripts/test.js"))(); // display `Serveur`

	// Attendre un lien valide entre client et serveur
	io.sockets.on("connection", function (socket) {

		// Quelqu'un nous informe que le texte à changé.
		socket.on("update-text", function (data) {

			// On informe les autres que le texte à changé.
			io.sockets.emit("update-text", data);
		});
	});
};
```

*assets/javascripts/index.js*

```js
var content = document.getElementsByClassName("content")[0],
	input = document.getElementsByClassName("input")[0];

Test(); // display `Client`

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
```

Vous pourrez, en ouvrant divers navigateurs, et divers onglet, constaté que tout est bien mis à jour chez tout le monde. Chaque nouvel ongle ouvert affiche sur le serveur le message de connexion, et chaque onglet fermé, le message de deconnexion sur la console serveur.

*Note : Vous pouvez changer le fichier `node-atlas/socket.io.js` par un fichier fournis par vous-même pour changer la variable `optionsSocket`. Vous pouvez aussi changer la valeur de `NA.optionsSocket` côté client (avant l'insertion de `node-atlas/socket.io.js`) avec un objet d'options personnalisées.*



#### setModules ####

Pour charger d'autres modules qui ne sont pas fournis avec NodeAtlas vous pouvez utiliser le contrôleur commun pour tout le site afin de les charger une seule fois et de les rendres disponible dans tous vos contrôleurs.

`setModules()` est une fonction a `exports` et fournissant :

- L'objet `NA` en tant que `this`.

Voici un exemple utilisant un module externe à NodeAtlas :

```json
{
	"controller": "common.js",
	"routes": {
		"/": {
			"view": "index.htm",
			"controller": "index.js"
		}
	}
}
```

avec cet ensemble de fichier :

```
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

En demandant la page `http://localhost/` les fichiers suivants (entre autre) seront utilisés :

*views/index.htm*

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
			<?- example ?>
		</div>
	</body>
</html>
```

*controllers/common.js*

```js
// On intervient avant que la phase de chargement des modules ne soit achevée.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setModules = function () {
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
exports.changeVariations = function (next, locals) {
	// Utiliser « NodeAtlas » depuis le moteur.
	var NA = this,
		marked = NA.modules.marked;

	locals.example = marked("J'utilise __markdown__.");

	// On passe à la suite.
	next();
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

Pour configurer le serveur web de NodeAtlas ([ExpressJs](http://expressjs.com/)) vous pouvez utiliser le contrôleur commun pour tout le site afin faire vos modifications avant le démarrage du serveur.

`setConfigurations(next)` est une fonction a `exports` et fournissant :

- L'objet `NA` en tant que `this`.
- En premier paramètre la fonction de retour `next()`.

Voici un exemple utilisant un middleware pour [ExpressJs](http://expressjs.com/) :

```json
{
	"controller": "common.js",
	"routes": {
		"/": {
			"view": "index.htm",
			"controller": "index.js"
		}
	}
}
```

avec cet ensemble de fichier :

```
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

En demandant la page `http://localhost/` les fichiers suivants (entre autre) seront utilisés :

*views/index.htm*

```html
<?- content ?>
```

*controllers/common.js*

```js
// On intervient au niveau du serveur avant que celui-ci ne soit démarré.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setConfigurations = function (next) {
	// Récupérer l'instance « NodeAtlas » du moteur.
	var NA = this;

	// Middleware utilisé lors de chaque requête.
	NA.express.use(function (request, response, next) {
		response.setHeader("X-Frame-Options", "ALLOW-FROM https://www.lesieur.name/");
		next();
	});

	// On ré-injecte les modifications.
	next();
};
```

*controllers/index.js*

```js
// On intervient avant que les variables soient injectées dans le moteur de template.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeVariations = function (next, locals) {

	// On prépare le fichier pour un affichage JSON.
	locals.routeParameters.headers = {
		"Content-Type": "application/json; charset=utf-8"
	};
	locals.content = JSON.stringify(locals, null, "    ");

	// On passe à la suite.
	next();
};
```

ce qui produit la sortie suivante :

```html
{
	"urlRootPath": "http://localhost",
	"urlSubPath": "",
	"urlBasePath": "http://localhost",
	"urlFilePath": "/",
	"urlQueryPath": "",
	"urlPath": "http://localhost/",
	"params": {},
	"query": {},
	"body": {},
	"routeParameters": { /* ... */ },
	"route": "/",
	"webconfig": { /* ... */ }
}
```

#### setSessions ####

Pour configurer les sessions client-serveur de NodeAtlas vous pouvez utiliser le contrôleur commun pour tout le site afin de définir vos sessions avant le démarrage du serveur. Voici un exemple de management de Session avec [Redis](http://redis.io/).

`setSessions(next)` est une fonction a `exports` et fournissant :

- L'objet `NA` en tant que `this`.
- En premier paramètre la fonction de retour `next()`.

Voici l'ensemble de fichier suivant :

```
├─ controllers/
│  └─ common.js
├─ views/
│  └─ index.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
└─ webconfig.json
```

Avec le `webconfig.json` :

```json
{
	"controller": "common.js",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

et avec le fichier « common.js » contenant par exemple :

```js
// On intervient avant que la phase de chargement des modules ne soit achevée.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setModules = function () {
	// Récupérer l'instance « NodeAtlas » du moteur.
	var NA = this;

	// Associations de chaque module pour y avoir accès partout.
	NA.modules.RedisStore = require('connect-redis');
};

// On intervient au niveau du serveur pendant la configuration des sessions.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setSessions = function (next) {
	var NA = this,
		session = NA.modules.session,
		RedisStore = NA.modules.RedisStore(session);

	// On remplace la session par default.
	NA.sessionStore = new RedisStore();

	// On redonne la main à NodeAtlas pour la suite.
	next();
};
```

#### setRoutes ####

Pour configurer les routes de NodeAtlas dynamiquement vous pouvez utiliser le contrôleur commun pour tout le site afin de les charger une seule fois et de les rendres disponible dans tous vos contrôleurs.

`setRoutes(next)` est une fonction a `exports` et fournissant :

- L'objet `NA` en tant que `this`.
- En premier paramètre la fonction de retour `next()`.

Voici l'ensemble de fichier suivant :

```
├─ controllers/
│  └─ common.js
├─ views/
│  ├─ content.htm
│  └─ index.htm
├─ variations/
│  └─ common.json
└─ webconfig.json
```

Avec le `webconfig.json` :

```json
{
	"controller": "common.js",
	"variation": "common.json",
	"routes": {
		"/index.html": {
			"view": "index.htm"
		}
	}
}
```

et avec le fichier « common.js » contenant par exemple :

```json
// On intervient au niveau des routes pendant qu'elles sont ajoutées.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setRoutes = function (next) {

	// On récupère l'instance de NodeAtlas en cours.
	var NA = this,

		// Et nous récupérons les routes en provenance du webconfig...
		route = NA.webconfig.routes;

	// ...pour ajouter la route "/content.html" à la liste de nos routes.
	route["/content.html"] = {
		"view": "content.htm"
	};

	// On redonne la main à NodeAtlas pour la suite.
	next();
};
```



### Échange client-serveur en temps réel avec websockets ###

Afin de conserver une liaison ouverte entre la partie Cliente et la partie Serveur de vos applications, NodeAtlas utilise [Socket.IO](http://socket.io/) dont vous trouverez plus de détail sur le site officiel.

Grâce à cela, vous pourrez changer des informations en temps réel sur votre page, mais également sur toutes les autres pages ouvertes à travers tous les autres navigateurs.

Avec l'ensemble de fichier suivant :

```
├─ assets/
│  └─ javascripts/
│     └─ index.js
├─ controllers/
│  └─ index.js
├─ variations/
│  ├─ common.json
│  └─ index.json
├─ views/
│  ├─ partials/
│  │  └─ index.htm
│  └─ index.htm
└─ webconfig.json
```

Contenant le `webconfig.json` suivant :

```json
{
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.htm",
			"variation": "index.json",
			"controller": "index.js"
		}
	}
}
```

et contenant les fichiers de template suivant :

*views/partials/index.htm*

```html
		<div class="title"><?- common.titleWebsite ?></div>
		<div>
			<h1><?- specific.titlePage ?></h1>
			<?- specific.content ?>
			<div><?- new Date() ?></div>
		</div>
		<button>Update</button>
```

*Note : Chaque clique sur `button` raffraichira le contenu de `views/partials/index.htm`.*

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title><?- common.titleWebsite ?></title>
	</head>
	<body>
		<div class="layout">
			<?- include('partials/index.htm') ?>
		</div>
		<script type="text/javascript" src="socket.io/socket.io.js"></script>
		<script type="text/javascript" src="node-atlas/socket.io.js"></script>
		<script type="text/javascript" src="javascripts/index.js"></script>
	</body>
</html>
```

*Note : On construit ici la page d'accueil `/`.*

ainsi que les fichiers de variations suivant :

*variations/common.json*

```json
{
	"titleWebsite": "Exemple Socket.IO"
}
```

*variations/index.json*

```json
{
	"titlePage": "Date",
	"content": "<p>La date actuelle est :</p>"
}
```

Jusque là, rien d'inhabituel et tout fonctionnerait sans partie contrôleur. Mais nous allons mettre en place la communication via Socket.IO côté Serveur puis côté Client.

Côté serveur, nous utiliserons le contrôleur commun suivant :

*controllers/index.js*

```js
// Intégralité des actions Websocket possible avec `setSockets`.
exports.setSockets = function () {
	var NA = this,
		io = NA.io;

	// Dès qu'on a un lien valide entre le client et notre serveur...
	io.sockets.on("connection", function (socket) {

		// ...rester à l'écoute de la demande « create-article-button »...
		socket.on("server-render", function (data) {
			var sessionID = socket.request.sessionID,
				session = socket.request.session,
				locals = {};

			// On récupère les variations spécifiques dans la bonne langue.
			locals = NA.specific("index.json", data.lang, locals);

			// On récupère les variations communes dans la bonne langue.
			locals = NA.common(data.lang, locals);

			// On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
			data.render = NA.view("partials/index.htm", locals);

			// Et on répond à tous les clients avec un jeu de donnée dans data.
			io.sockets.emit("server-render", data);
		});
	});
};
```

Quand au côté client, nous utiliserons les fichiers suivant :

*assets/javascripts/index.js*

```js
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
```

Lancer votre projet et rendez-vous à l'adresse `http://localhost/` dans deux onglets différent, voir même, dans deux navigateurs différent. Vous constaterez alors qu'à chaque clique sur « Update », la page se remettra à jour (comme le montre la date courante) sur tous les onglets ouvert.

Grâce à `NA.specific`, `NA.common` et `NA.view`, il est possible de générer une nouvelle compilation d'une vue et d'une variation commune et spécifique.

Si `data.lang` dans notre exemple est de type `undefined`, alors les fichiers seront cherchés à la racine. Si `locals` est de type `undefined` alors un objet contenant uniquement le scope demandé sera renvoyé.

Note : pour permettre à `view` d'utiliser le moteur Pug au lieu de celui d'EJS, il faut mettre la valeur `locals.pug` à `true` avant d'utiliser `NA.common` et `NA.specific`.



### Utiliser une base de données MySQL (SQL) ###

Nous allons voir à présent comment utiliser des informations venant d'une base de données. Pour cela nous allons utiliser le module npm `mysql`. Il va également nous falloir [installer un serveur MySQL](https://dev.mysql.com/downloads/installer/).

Donc, depuis le dossier du `webconfig.json`, utilisez :

```bash
npm install mysql
```

#### Base de données MySQL ####

Tout d'abord, nous allons alimenter la base de données avec la base `demo` :

```sql
CREATE DATABASE demo;
```

et la sélectionner :

```sql
USE demo
```

puis créer la table `user` :

```sql
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

```sql
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
	"Elric",
	"Edward",
	"edward.elric@fma.br",
	"2006/01/01",
	true,
	"Amestris",
	"Resembool",
	00000,
	"The Elric's house"
);
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
	"Elric",
	"Alphonse",
	"alphonse.elric@fma.br",
	"2008/01/01",
	true,
	"Amestris",
	"Resembool",
	00000,
	"The Elric's house"
);
```

#### Fichiers NodeAtlas ####

Voyons à présent l'architecture de site que nous allons arbitrairement créer pour présenter notre exemple :

```
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ models/
│  ├─ objects/
│  │  └─ user.js
│  └─ connectors/
│     └─ user.js
├─ views/
│  └─ index.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
└─ webconfig.json
```

Nous allons utiliser le `webconfig.json` suivant avec une variable custom `_mysqlConfig` qui contiendra toutes les informations pour se connecter à la base de données :

```json
{
	"controller": "common.js",
	"variation": "common.json",
	"statics": {
		"/models": "models/objects"
	},
	"routes": {
		"/": {
			"view": "index.htm",
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

Nous allons ensuite nous connecter à la base de données avec le contrôleur globale `controllers/common.js` :

```json
exports.setModules = function () {
	var NA = this;

	// Import du module `mysql`.
	NA.modules.mysql = require('mysql');

	// Création de la collection de modèle...
	NA.models = {};
	// ...et récupération du modèle User avec accès à Mysql.
	NA.models.User = require('../models/connectors/user.js');
};

exports.setConfigurations = function (next) {
	var NA = this,
		path = NA.modules.path,
		mysql = NA.modules.mysql;

	// Créer un pool de connexion à MySQL.
	NA.mySql = mysql.createPool(NA.webconfig._mysqlConfig);

	next();
};
```

Et afficher les résultats via le contrôleur spécifique `controllers/index.js` :

```json
exports.changeVariations = function (next, locals) {
	var NA = this,
		user = new NA.models.User(),
		user2 = new NA.models.User(),
		user3 = new NA.models.User(),
		user4 = new NA.models.User();

	NA.mySql.getConnection(function(err, connection) {
		if (err) {
			throw err;
		}

		// Exemple de lecture.
		user
		.setConnection(connection)
		.lastname("Elric")
		.read(function (allUsers) {
			locals.user = user;
			locals.users = allUsers;

			// Exemple de création.
			user2
			.setConnection(connection)
			.firstname("Winry")
			.lastname("Rockbell")
			.email("winry.rockbell@fma.br")
			.gender(true)
			.create(function (infos) {
				locals.insertId = infos.insertId;
				locals.user2 = user2;

				// Exemple de modification.
				user3
				.gender(false)
				.birthdate("2008-01-01")
				.country("Amestris")
				.town("Resembool")
				.zipcode("99999")
				.address("The Rockbell's house");

				user2.update(user3, function (infos) {
					locals.affectedRows = infos.affectedRows;
					locals.user2 = user2;

					// Exemple de suppression.
					user4
					.setConnection(connection)
					.gender(false)
					.delete(function (infos) {
						locals.deletedRows = infos.affectedRows;
						next();
					});
				});
			});
		});
	});
};
```

en utilisant le modèle `user` via le fichier de connexion à la base de données `models/connectors/user.js` :

```json
var user = require('../objects/user.js');

function User(connection) {
	var privates = {},
		publics = this;

	user.call(publics);

	privates.connection = connection;

	publics.setConnection = function (connection) {
		privates.connection = connection;
		return publics;
	};

	publics.read = function (callback) {
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
			where = "";

		if (publics.id()) { where += ' && `id` = ' + publics.id(); }
		if (publics.lastname()) { where += ' && `lastname` = "' + publics.lastname() + '"'; }
		if (publics.firstname()) { where += ' && `firstname` = "' + publics.firstname() + '"'; }
		if (publics.email()) { where += ' && `email` = "' + publics.email() + '"'; }
		if (publics.birthdate()) { where += ' && `birthdate` = "' + publics.birthdate() + '"'; }
		if (typeof publics.gender() === "boolean") { where += ' && `gender` = ' + (publics.gender() ? 1 : 0); }
		if (publics.country()) { where += ' && `country` = "' + publics.country() + '"'; }
		if (publics.town()) { where += ' && `town` = "' + publics.town() + '"'; }
		if (publics.zipcode()) { where += ' && `zipcode` = "' + publics.zipcode() + '"'; }
		if (publics.address()) { where += ' && `address` = "' + publics.address() + '"'; }

		where = where.replace("&&", "WHERE");

		privates.connection.query(select + where, function (err, rows) {
			var users = [],
				user;

			if (err) {
				throw err;
			}

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

			for (var i = 0; i < rows.length; i++) {
				user = new User();
				user.id(rows[i].id);
				user.lastname(rows[i].lastname);
				user.firstname(rows[i].firstname);
				user.email(rows[i].email);
				user.birthdate(rows[i].birthdate);
				user.gender((rows[i].gender) ? true : false);
				user.country(rows[i].country);
				user.town(rows[i].town);
				user.zipcode(rows[i].zipcode);
				user.address(rows[i].address);
				users.push(user);
			}

			if (callback) {
				callback(users);
			}
		});

		return publics;
	};

	publics.create = function (callback) {
		var insert = "INSERT INTO user (",
			values = ") VALUES (";

		if (publics.id()) {
			insert += "`id`, ";
			values += publics.id() + ', ';
		}
		if (publics.lastname()) {
			insert += "`lastname`, ";
			values += '"' + publics.lastname() + '", ';
		}
		if (publics.firstname()) {
			insert += "`firstname`, ";
			values += '"' + publics.firstname() + '", ';
		}
		if (publics.email()) {
			insert += "`email`, ";
			values += '"' + publics.email() + '", ';
		}
		if (publics.birthdate()) {
			insert += "`birthdate`, ";
			values += '"' + publics.birthdate() + '", ';
		}
		if (typeof publics.gender() === "boolean") {
			insert += "`gender`, ";
			values += (publics.gender() ? 1 : 0) + ', ';
		}
		if (publics.country()) {
			insert += "`country`, ";
			values += '"' + publics.country() + '", ';
		}
		if (publics.town()) {
			insert += "`town`, ";
			values += '"' + publics.town() + '", ';
		}
		if (publics.zipcode()) {
			insert += "`zipcode`, ";
			values += '"' + publics.zipcode() + '", ';
		}
		if (publics.address()) {
			insert += "`address`, ";
			values += '"' + publics.address() + '", ';
		}

		insert = insert.replace(/, $/g, "");
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}

			publics.id(infos.insertId);

			if (callback) {
				callback(infos);
			}
		});

		return publics;
	};

	publics.update = function (user, callback) {
		var update = "UPDATE user SET",
			where = "";

		if (user.id()) { update += '`id` = ' + user.id() + ', '; }
		if (user.lastname()) { update += '`lastname` = "' + user.lastname() + '", '; }
		if (user.firstname()) { update += '`firstname` = "' + user.firstname() + '", '; }
		if (user.email()) { update += '`email` = "' + user.email() + '", '; }
		if (user.birthdate()) { update += '`birthdate` = "' + user.birthdate() + '", '; }
		if (typeof user.gender() === "boolean") { update += '`gender` = ' + (user.gender() ? 1 : 0) + ', '; }
		if (user.country()) { update += '`country` = "' + user.country() + '", '; }
		if (user.town()) { update += '`town` = "' + user.town() + '", '; }
		if (user.zipcode()) { update += '`zipcode` = "' + user.zipcode() + '", '; }
		if (user.address()) { update += '`address` = "' + user.address() + '", '; }

		update = update.replace(/, $/g, "");

		if (publics.id()) { where += ' && `id` = ' + publics.id(); }
		if (publics.lastname()) { where += ' && `lastname` = "' + publics.lastname() + '"'; }
		if (publics.firstname()) { where += ' && `firstname` = "' + publics.firstname() + '"'; }
		if (publics.email()) { where += ' && `email` = "' + publics.email() + '"'; }
		if (publics.birthdate()) { where += ' && `birthdate` = "' + publics.birthdate() + '"'; }
		if (typeof publics.gender() === "boolean") { where += ' && `gender` = ' + (publics.gender() ? 1 : 0); }
		if (publics.country()) { where += ' && `country` = "' + publics.country() + '"'; }
		if (publics.town()) { where += ' && `town` = "' + publics.town() + '"'; }
		if (publics.zipcode()) { where += ' && `zipcode` = "' + publics.zipcode() + '"'; }
		if (publics.address()) { where += ' && `address` = "' + publics.address() + '"'; }

		where = where.replace("&&", "WHERE");

		privates.connection.query(update + where, function (err, infos) {
			if (err) {
				throw err;
			}

			if (user.id()) { publics.id(user.id()); }
			if (user.lastname()) { publics.lastname(user.lastname()); }
			if (user.firstname()) { publics.firstname(user.firstname()); }
			if (user.email()) { publics.email(user.email()); }
			if (user.birthdate()) { publics.birthdate(user.birthdate()); }
			if (typeof publics.gender() === "boolean") { publics.gender(user.gender()); }
			if (user.country()) { publics.country(user.country()); }
			if (user.town()) { publics.town(user.town()); }
			if (user.zipcode()) { publics.zipcode(user.zipcode()); }
			if (user.address()) { publics.address(user.address()); }

			if (callback) {
				callback(infos);
			}
		});

		return publics;
	};

	publics.delete = function (callback) {
		var del = "DELETE FROM user",
			where = "";

		if (publics.id()) { where += ' && `id` = ' + publics.id(); }
		if (publics.lastname()) { where += ' && `lastname` = "' + publics.lastname() + '"'; }
		if (publics.firstname()) { where += ' && `firstname` = "' + publics.firstname() + '"'; }
		if (publics.email()) { where += ' && `email` = "' + publics.email() + '"'; }
		if (publics.birthdate()) { where += ' && `birthdate` = "' + publics.birthdate() + '"'; }
		if (typeof publics.gender() === "boolean") { where += ' && `gender` = ' + (publics.gender() ? 1 : 0); }
		if (publics.country()) { where += ' && `country` = "' + publics.country() + '"'; }
		if (publics.town()) { where += ' && `town` = "' + publics.town() + '"'; }
		if (publics.zipcode()) { where += ' && `zipcode` = "' + publics.zipcode() + '"'; }
		if (publics.address()) { where += ' && `address` = "' + publics.address() + '"'; }

		where = where.replace("&&", "WHERE");

		privates.connection.query(del + where, function (err, infos) {
			if (err) {
				throw err;
			}

			if (publics.id()) { publics.id(undefined); }
			if (publics.lastname()) { publics.lastname(undefined); }
			if (publics.firstname()) { publics.firstname(undefined); }
			if (publics.email()) { publics.email(undefined); }
			if (publics.birthdate()) { publics.birthdate(undefined); }
			if (typeof publics.gender() === "boolean") { publics.gender(undefined); }
			if (publics.country()) { publics.country(undefined); }
			if (publics.town()) { publics.town(undefined); }
			if (publics.zipcode()) { publics.zipcode(undefined); }
			if (publics.address()) { publics.address(undefined); }

			if (callback) {
				callback(infos);
			}
		});

		return publics;
	};
}

User.prototype = Object.create(user.prototype);
User.prototype.constructor = User;

module.exports = User;
```

basé sur une classe `user` partagée entre la partie cliente et serveur `models/objects/user.js` :

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

Avec les fichiers suivant pour afficher la page :

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title><?- common.titleWebsite ?></title>
	</head>
	<body>
		<div class="title"><?- common.titleWebsite ?></div>
		<div>
			<h1><?- specific.titlePage ?></h1>
			<div class="first">
				<?- specific.content ?>
				<ul>
					<li>Id: <strong><?- user.id() ?></strong></li>
					<li>Lastname: <strong><?- user.lastname() ?></strong></li>
					<li>Firstname: <strong><?- user.firstname() ?></strong></li>
					<li>Email: <strong><?- user.email() ?></strong></li>
					<li>Birthdate: <strong><?- user.birthdate() ?></strong></li>
					<li>Gender: <strong><?- user.gender() ?></strong></li>
					<li>Country: <strong><?- user.country() ?></strong></li>
					<li>Town: <strong><?- user.town() ?></strong></li>
					<li>Zipcode: <strong><?- user.zipcode() ?></strong></li>
					<li>Address: <strong><?- user.address() ?></strong></li>
				</ul>
			</div>
			<div class="all">
				<?- specific.contents ?>
				<? for (var i = 0; i < users.length; i++) { ?>
				<ul>
					<li>Id: <strong><?- users[i].id() ?></strong></li>
					<li>Lastname: <strong><?- users[i].lastname() ?></strong></li>
					<li>Firstname: <strong><?- users[i].firstname() ?></strong></li>
					<li>Email: <strong><?- users[i].email() ?></strong></li>
					<li>Birthdate: <strong><?- users[i].birthdate() ?></strong></li>
					<li>Gender: <strong><?- users[i].gender() ?></strong></li>
					<li>Country: <strong><?- users[i].country() ?></strong></li>
					<li>Town: <strong><?- users[i].town() ?></strong></li>
					<li>Zipcode: <strong><?- users[i].zipcode() ?></strong></li>
					<li>Address: <strong><?- users[i].address() ?></strong></li>
				</ul>
				<? } ?>
			</div>
			<div class="last">
				<?- specific.contentInsert ?>
				<p>insertId: <?- insertId ?></p>
				<p>numberUpdate: <?- affectedRows ?></p>
				<ul>
					<li>Id: <strong><?- user2.id() ?></strong></li>
					<li>Lastname: <strong><?- user2.lastname() ?></strong></li>
					<li>Firstname: <strong><?- user2.firstname() ?></strong></li>
					<li>Email: <strong><?- user2.email() ?></strong></li>
					<li>Birthdate: <strong><?- user2.birthdate() ?></strong></li>
					<li>Gender: <strong><?- user2.gender() ?></strong></li>
					<li>Country: <strong><?- user2.country() ?></strong></li>
					<li>Town: <strong><?- user2.town() ?></strong></li>
					<li>Zipcode: <strong><?- user2.zipcode() ?></strong></li>
					<li>Address: <strong><?- user2.address() ?></strong></li>
				</ul>
				<p>numberDelete: <?- deletedRows ?></p>
			</div>
		</div>
	</body>
</html>
```

*variations/common.json*

```json
{
	"titleWebsite": "Exemple MySql",
	"male": "Homme",
	"female": "Femme"
}
```

*variations/index.json*

```json
{
	"titlePage": "Table User",
	"content": "<p>Détail de la première entrée.</p>",
	"contents": "<p>Détail de toutes les entrées.</p>",
	"contentInsert": "<p>Détail de l'utilisateur ajouté puis modifié.</p>"
}
```

Vous obtiendrez la sortie suivante :

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>MySql Exemple</title>
	</head>
	<body>
		<div class="title">MySql Exemple</div>
		<div>
			<h1>Table User</h1>
			<div class="first">
				<p>Détail de la première entrée.</p>
				<ul>
					<li>Id: <strong>1</strong></li>
					<li>Lastname: <strong>Elric</strong></li>
					<li>Firstname: <strong>Edward</strong></li>
					<li>Email: <strong>edward.elric@fma.br</strong></li>
					<li>Birthdate: <strong>Sun Jan 01 2006 00:00:00 GMT+0100 (Paris, Madrid)</strong></li>
					<li>Gender: <strong>true</strong></li>
					<li>Country: <strong>Amestris</strong></li>
					<li>Town: <strong>Resembool</strong></li>
					<li>Zipcode: <strong>0</strong></li>
					<li>Address: <strong>The Elric's house</strong></li>
				</ul>
			</div>
			<div class="all">
				<p>Détail de toutes les entrées.</p>
				<ul>
					<li>Id: <strong>1</strong></li>
					<li>Lastname: <strong>Elric</strong></li>
					<li>Firstname: <strong>Edward</strong></li>
					<li>Email: <strong>edward.elric@fma.br</strong></li>
					<li>Birthdate: <strong>Sun Jan 01 2006 00:00:00 GMT+0100 (Paris, Madrid)</strong></li>
					<li>Gender: <strong>true</strong></li>
					<li>Country: <strong>Amestris</strong></li>
					<li>Town: <strong>Resembool</strong></li>
					<li>Zipcode: <strong>0</strong></li>
					<li>Address: <strong>The Elric's house</strong></li>
				</ul>
				<ul>
					<li>Id: <strong>2</strong></li>
					<li>Lastname: <strong>Elric</strong></li>
					<li>Firstname: <strong>Alphonse</strong></li>
					<li>Email: <strong>alphonse.elric@fma.br</strong></li>
					<li>Birthdate: <strong>Tue Jan 01 2008 00:00:00 GMT+0100 (Paris, Madrid)</strong></li>
					<li>Gender: <strong>true</strong></li>
					<li>Country: <strong>Amestris</strong></li>
					<li>Town: <strong>Resembool</strong></li>
					<li>Zipcode: <strong>0</strong></li>
					<li>Address: <strong>The Elric's house</strong></li>
				</ul>
			</div>
			<div class="last">
				<p>Détail de l'utilisateur ajouté puis modifié.</p>
				<p>insertId: 3</p>
				<p>numberUpdate: 1</p>
				<ul>
					<li>Id: <strong>3</strong></li>
					<li>Lastname: <strong>Rockbell</strong></li>
					<li>Firstname: <strong>Winry</strong></li>
					<li>Email: <strong>winry.rockbell@fma.br</strong></li>
					<li>Birthdate: <strong>2008-01-01</strong></li>
					<li>Gender: <strong>false</strong></li>
					<li>Country: <strong>Amestris</strong></li>
					<li>Town: <strong>Resembool</strong></li>
					<li>Zipcode: <strong>99999</strong></li>
					<li>Address: <strong>The Rockbell's house</strong></li>
				</ul>
				<p>numberDelete: 1</p>
			</div>
		</div>
	</body>
</html>
```



### Utiliser une base de données MongoDB (NoSQL) ###

Nous allons voir à présent comment utiliser des informations venant d'une base de données non sql. Pour cela nous allons utiliser le module npm `mongoose`. Il va également nous falloir [installer un serveur MongoDB](https://www.mongodb.com/).

Donc, depuis le dossier du `webconfig.json`, utilisez :

```bash
npm install mongoose
```

#### Base de données MongoDB ####

Tout d'abord, nous allons alimenter la base de données avec la base `demo` et la sélectionner :

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
	email: "john.doe@unknown.com",
	identity: {
		lastname: "Doe",
		firstname: "John",
		gender: true,
		birthdate : new Date("1970/01/01")
	},
	location: {
		country: "Unknown",
		town: "Unknown",
		zipcode: "00000",
		address: "42 unknown"
	}
})
```

#### Fichiers NodeAtlas ####

Avec le jeu de fichier suivant :

```
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ models/
│  └─ user.js
├─ views/
│  └─ index.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
└─ webconfig.json
```

Nous allons utiliser le `webconfig.json` suivant avec une variable custom `_mongodbConfig` qui contiendra toutes les informations pour se connecter à la base de données :

```json
{
	"controller": "common.js",
	"variation": "common.json",
	"statics": {
		"/models": "models"
	},
	"routes": {
		"/": {
			"view": "index.htm",
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

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="<?- languageCode ?>">
	<head>
		<meta charset="utf-8" />
		<title><?- common.titleWebsite ?></title>
	</head>
	<body>
		<div class="title"><?- common.titleWebsite ?></div>
		<div>
			<h1><?- specific.titlePage ?></h1>
			<?- specific.content ?>
			<ul>
				<li>Id: <strong><?- id ?></strong></li>
				<li>Lastname: <strong><?- lastname ?></strong></li>
				<li>Firstname: <strong><?- firstname ?></strong></li>
				<li>Email: <strong><?- email ?></strong></li>
				<li>Birthdate: <strong><?- birthdate ?></strong></li>
				<li>Gender: <strong><?- gender ?></strong></li>
				<li>Country: <strong><?- country ?></strong></li>
				<li>Town: <strong><?- town ?></strong></li>
				<li>Zipcode: <strong><?- zipcode ?></strong></li>
				<li>Address: <strong><?- address ?></strong></li>
			</ul>
		</div>
	</body>
</html>
```

*variations/common.json*

```json
{
	"titleWebsite": "MongoDB Exemple",
	"male": "Homme",
	"female": "Femme"
}
```

*variations/index.json*

```json
{
	"titlePage": "Collection User",
	"content": "<p>Détail du document `{ \"identity.firstname\": \"John\" }`.</p>"
}
```

Enfin nous allons nous connecter à la base de données avec le contrôleur globale `controllers/common.js` :

```js
exports.setModules = function () {
	var NA = this,
		path = NA.modules.path;

	NA.modules.mongoose = require('mongoose');
	NA.models = {};
	NA.models.User = require('../models/user.js');
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

Et afficher les résultats via le contrôleur spécifique `controllers/index.js` :

```js
exports.changeVariations = function (next, locals) {
	var NA = this,
		mongoose = NA.modules.mongoose,
		User = mongoose.model('user');

	User
	.findOne({ "identity.firstname": "John" })
	.exec(function (err, user) {

		locals.id = user._id;
		locals.lastname = user.identity.lastname;
		locals.firstname = user.identity.firstname;
		locals.birthdate = user.identity.birthdate;
		locals.email = user.email;
		locals.gender = (user.identity.gender) ? locals.common.male : locals.common.female;
		locals.country = user.location.country;
		locals.town = user.location.town;
		locals.zipcode = user.location.zipcode;
		locals.address = user.location.address;

		next();
	});
};
```

en utilisant sur une classe `user` partagée entre la partie cliente et la partie serveur `models/user.js` :

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
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>Exemple MongoDB</title>
	</head>
	<body>
		<div class="title">Exemple MongoDB</div>
		<div>
			<h1>Collection User</h1>
			<p>Détail de l'entrée `{ "identity.firstname": "John" }`.</p>
			<ul>
				<li>Id: <strong>5804d4d530788ee2e52ea1c7</strong></li>
				<li>Lastname: <strong>Doe</strong></li>
				<li>Firstname: <strong>John</strong></li>
				<li>Email: <strong>john.doe@unknown.com</strong></li>
				<li>Birthdate: <strong>Mon Jan 01 1970 00:00:00 GMT+0200 (Paris, Madrid (heure d’été))</strong></li>
				<li>Gender: <strong>Homme</strong></li>
				<li>Country: <strong>Unknown</strong></li>
				<li>Town: <strong>Unknown</strong></li>
				<li>Zipcode: <strong>00000</strong></li>
				<li>Address: <strong>42 unknown</strong></li>
			</ul>
		</div>
	</body>
</html>
```



### Utiliser des middlewares depuis Express ###

NodeAtlas repose en partie sur le module npm [Express.js](http://expressjs.com/). Vous pouvez accéder à l'objet Express d'une instance NodeAtlas par l'intermédiaire de `NA#express`. Cela vous permet d'ajouter des middlewares Express de la même manière que vous l'auriez fait avec Express seul.

En ce qui concerne la pré-configuration d'Express avec un webconfig vide, elle est faites ainsi :

```js
NA.express.set("strict routing", true);
/* ... */
NA.express.set("x-powered-by", false);
/* ... */
/* Activation de gzip, deflate et cie. */
NA.express.use(compress());
/* ... */
/* Parse le type d'encryption "x-www-form-urlencoded". */
NA.express.use(bodyParser.urlencoded({ extended: true }));
/* ... */
/* Parse le type d'encryption "application/json". */
NA.express.use(bodyParser.json());
/* ... */
/* Parse les cookies. */
NA.express.use(cookieParser());
/* ... */
/* Gére les cookies de session. */
NA.express.use(session(optionSession));
/* ... */
/* Gére de dossier `assets/` et son accès depuis le domain root ou un sous-dossier. */
NA.express.use(NA.webconfig.urlRelativeSubPath, express.static(path.join(NA.serverPath, NA.webconfig.assetsRelativePath), staticOptions));
```

Vous pouvez vous même ajouter des middlewares de plusieurs manière.

#### Avec `setConfigurations` ####

Vous pouvez obtenir l'objet `NA#express` près à accueillir des middlewares ici dans le point d'ancrage `setConfigurations`. Cela ajoutera les mécanismes à toutes les routes de votre site.

```js
exports.setConfigurations = function (next) {
	var NA = this;

	// Middleware fait main.
	NA.express.use(function (request, response, next) {
		response.setHeader("X-Frame-Options", "ALLOW-FROM https://www.lesieur.name/");
		next();
	});

	// Middleware ajoutant diverse entête http de sécurisation.
	NA.express.use(require("helmet")());

	next();
};
```

#### Avec le paramètre `middlewares` des Routes ####

Il est également possible de délivrer ses middlewares uniquement pour une seule route. Dans ce cas vous pouvez utilisez le paramètre `middlewares` comme suit :

**webconfig.json**

```js
{
	"middlewaresRelativePath": "middlewares",
	"routes": {
		"/upload-file": {
			"view": "upload.htm",
			"controller": "upload.js",
			"middlewares": "upload.js"
		}
	}
	"_jwt": {
		secret: "AUTH_CLIENT_SECRET",
		audience: "AUTH_CLIENT_ID"
	}
}
```

et utiliser le fichier suivant pour autoriser l'envoi de donnée POST encrypté en "multipart/data-form" uniquement si vous êtes authentifié par un token JSON :

**middlewares/upload.js**

```js
var multer  = require("multer"),
	jwt = require("express-jwt");

module.exports = function () {
	var NA = this,
		path = NA.modules.path,
		upload = multer({ dest: path.join(NA.serverPath, "uploads") });

	return [
		jwt({
			secret: NA.webconfig._jwt.secret,
			audience: NA.webconfig._jwt.audience
		}),
		upload.single("avatar"),
	];
};
```

*Note : Si* `middlewaresRelativePath` *n'est pas présent dans « webconfig.json », par défaut le dossier des contrôleurs est bien* `middlewares`. `middlewaresRelativePath` *est donc utile seulement pour changer le nom/chemin du répertoire.*

#### Avec le paramètre `middlewares` en Global ####

Il est également possible d'utiliser ce système pour toutes les routes, ainsi le webconfig se présenterait plutôt ainsi :

**webconfig.json**

```js
{
	"middlewares": "is-authenticated.js"
	"routes": {
		"/upload-file": {
			"view": "upload.htm",
			"controller": "upload.js"
		}
	}
	"_jwt": {
		secret: "AUTH_CLIENT_SECRET",
		audience: "AUTH_CLIENT_ID"
	}
}
```

Avec le fichier :

**middlewares/is-authenticated.js**

```js
var jwt = require("express-jwt");

module.exports = function () {
	var NA = this;

	return [
		jwt({
			secret: NA.webconfig._jwt.secret,
			audience: NA.webconfig._jwt.audience
		})
	];
};
```

#### Tableau de `middlewares` ####

Vous pouvez également fournir un tableau vers une liste de fichier de middleware Express que ce soit pour chaque route ou en global :

**webconfig.json**

```js
{
	"routes": {
		"/upload-file": {
			"view": "upload.htm",
			"controller": "upload.js",
			"middlewares": ["is-authenticated.js", "redirect.js"]
		}
	}
	"_jwt": {
		secret: "AUTH_CLIENT_SECRET",
		audience: "AUTH_CLIENT_ID"
	}
}
```

Avec l'utilisation de l'objet NA :

**middlewares/is-authenticated.js**

```js
var jwt = require("express-jwt");

module.exports = function () {
	var NA = this;

	return [jwt({
		secret: NA.webconfig._jwt.secret,
		audience: NA.webconfig._jwt.audience
	})];
};
```

où sans :

**middlewares/redirect.js**

```js
module.exports = function (request, response, next) {

	response.redirect('https://go.to.visitor.page/');

	next();
};
```



### Créer une application isomorphique

Une application isomorphique est une application dont le code JavaScript est en grande partie le même qu'il soit exécuté côté client ou exécuté côté serveur. NodeAtlas propose un exemple d'application isomorphique dans son template dédié à [Vue.js](https://fr.vuejs.org/).

Pour tester cela il vous suffit :

de créer un dossier de test

```bash
mkdir hello-vue
cd hello-vue
```

d'y placer les fichier de `hello-vue`

```bash
node-atlas --create hello-vue
```

d'installer les dépendances

```bash
npm install
```

et de lancer le site en français

```bash
node-atlas --browse
```

ou en version internationale

```bash
node-atlas --browse --webconfig webconfig.en-us.json
```

Vous trouverrez tout ce qu'il faut pour appréhender la partie serveur du `constrollers/common.js` sur https://ssr.vuejs.org/ et seul la partie cliente du `assets/javascripts/common.js` sur https://vuejs.org/.





## Pour aller plus loin ##

NodeAtlas offre également tout un système de fonctionnalités de développement et de packaging à travers son sytème de configuration. Voyons cela.

### Gérer le routage (Url Rewriting) ###

Bien que vous puissiez paramétrer des URL statiques, vous pouvez également paramétrer une écoute d'URL dynamiques !

#### Paramètres ###

Il est possible de récupérer des paramètres de l'URL pour afficher un contenu différent en fonctions de leurs contenus.

Avec la configuration suivante :

```json
{
	"routes": {
		"/liste-des-membres/:member/:action/": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/liste-des-membres/:member/:action": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/liste-des-membres/:member/": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/liste-des-membres/:member": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/liste-des-membres/": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/liste-des-membres": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

vous pourrez accéder à :

- *http://localhost/*
- *http://localhost/liste-des-membres*
- *http://localhost/liste-des-membres/*
- *http://localhost/liste-des-membres/toto/*
- *http://localhost/liste-des-membres/bob-eponge99*
- *http://localhost/liste-des-membres/node-atlas/show/*
- *http://localhost/liste-des-membres/etc/lolol*
- *http://localhost/liste-des-membres/?example=test*
- *http://localhost/liste-des-membres/etc?example=test* (en POST avec `test=This+is+a+test`)

et récupérer les valeurs de `:member`, `:action`, `example` et `test` dans le `changeVariations` (common et specific).

```js
exports.changeVariations = function (next, locals, request, response) {

	console.log("param request:", request.params.member);
	// $ undefined, 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.
	console.log("param locals:", locals.params.member);
	// $ undefined, 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

	console.log("param request", request.params.action);
	// $ undefined, 'show' or 'lolol'.
	console.log("param locals", locals.params.action);
	// $ undefined, 'show' or 'lolol'.

	console.log("query request", request.query.example);
	// $ undefined or 'test'
	console.log("query locals", locals.query.example);
	// $ undefined or 'test'

	console.log("body request", request.body.test);
	// $ undefined or 'This is a test'.
	console.log("body locals", locals.body.test);
	// $ undefined or 'This is a test'.

	next();
};
```

### Paramètres avancés ###

Nous voyons que nous utilisons une configuration identique pour trois routes dans l'exemple précédent. Vous pouvez également vous aider d'expressions régulières pour définir ce qui peut varier pour accéder à votre URL ou préciser quels sont les paramètres valides dans l'URL. Ce sytème est simplifié étant donné que beaucoup de caractère ne se trouve pas dans l'url. Il n'est donc pas nécéssaire par exemple d'échaper les `/` par exemple.

Avec la configuration suivante :

```json
{
	"routes": {
		"/liste-des-membres/?(:member([-a-zA-Z0-9]+)/?(:action(afficher|editer)/?)?)?": {
			"view": "members.htm"
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

vous pourrez accéder à :

- *http://localhost/*
- *http://localhost/liste-des-membres*
- *http://localhost/liste-des-membres/*
- *http://localhost/liste-des-membres/toto/*
- *http://localhost/liste-des-membres/bob-eponge99*
- *http://localhost/liste-des-membres/node-atlas/show/*
- *http://localhost/liste-des-membres/?example=test*
- *http://localhost/liste-des-membres/etc?example=test* (en POST avec `test=This+is+a+test`)

et récupérer les valeurs de `:member`, `:action`, `example` et `test` dans une vue.

```html
<!DOCTYPE html>
<html lang="fr-fr">
  <head>
	<meta charset="utf-8">
	<title>URL Rewriting Test</title>
  </head>
  <body>
	Member: <strong><?- params.member ?></strong><br>
	Action: <strong><?- params.action ?></strong><br>
	Example: <strong><?- query.example ?></strong><br>
	Test: <strong><?- body.test ?></strong>
  </body>
</html>
```

vous ne pourrez pas accéder à :

- *http://localhost/liste-des-membres/etc/lolol*
- *http://localhost/liste-des-membres/`toto_16`/afficher/*
- *http://localhost/liste-des-membres/toto/`supprimer`/*

#### Expressions Régulières ###

Vous pouvez également activer les expressions régulières pour un chemin précis avec `regExp`. Si celui-ci vaut `true`, le précédent mode ne fonctionne plus et vous passez en mode Expression Régulière. Si `regExp` est une chaine de caractère, celle-ci fait office de flag (g, i, m ou y).

Voyez la configuration suivante :

```js
{
	"routes": {
		"/liste-des-membres/([-a-z0-9]+)/?": {
			"view": "members.htm",
			"regExp": "i"
		},
		"/liste-des-membres/?": {
			"view": "members.htm",
			"regExp": true
		},
		"/": {
			"view": "index.htm"
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

et récupérer les valeurs de `([-a-z0-9]+)` dans le `changeVariations` (common et specific).

```js
exports.changeVariation = function (next, locals) {

	if (locals.params && locals.params[0]) { locals.params.member = locals.params[0]; }
	// locals.params[1] pour le deuxième match, etc...

	console.log(locals.params.member);
	// $ 'toto', 'bob-eponge99', 'node-atlas' ou 'etc'.

	next();
}
```

Les règles de création d'url dynamique avec `regExp` sont celles des [RegExp JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScripts/Reference/Global_Objects/RegExp).



### Gérer les pages inexistantes ###

#### Écouter toutes les URL, même les adresses du dossier `assetsRelativePath` ####

Pour afficher une page personnalisée quand une ressource n'est pas trouvée il faut :

1. Préparer une page 404.
2. Remplir le paramètre `pageNotFound` avec comme `value` la `key` de la page 404 préparée.

Voyez l'exemple ci-dessous :

```json
{
	"pageNotFound": "/pages-inexistantes/",
	"routes": {
		"/liste-des-membres/": {
			"view": "members.htm"
		},
		"/": {
			"view": "index.htm"
		},
		"/pages-inexistantes/": {
			"view": "error.htm",
			"statusCode": 404
		}
	}
}
```

vous pourrez accéder à :

- *http://localhost/cette-page-n-existe-pas.html*
- *http://localhost/elle/non/plus/*
- *http://localhost/etc*

#### Page d'erreur localisée ####

Il vous suffit de créer une nouvelle route finissant par `*` dans la langue souhaitée.

Voyez l'exemple ci-dessous :

```json
{
	"pageNotFound": "/pages-inexistantes/",
	"languageCode": "fr-fr",
	"routes": {
		"/liste-des-membres/": {
			"view": "members.htm",
			"variation": "members.json"
		},
		"/": {
			"view": "index.htm",
			"variation": "index.json"
		},
		"/pages-inexistantes/": {
			"view": "error.htm",
			"variation": "error.json",
			"statusCode": 404
		},
		"/english/list-of-members/": {
			"view": "members.htm",
			"languageCode": "en-gb",
			"variation": "members.json"
		},
		"/english/": {
			"view": "index.htm",
			"languageCode": "en-gb",
			"variation": "index.json"
		},
		"/english/*": {
			"view": "error.htm",
			"languageCode": "en-gb",
			"variation": "error.json",
			"statusCode": 404
		}
	}
}
```



### Injecter des routes dynamiquement ###

Nous avons pu voir qu'avec `setRoutes` il était possible d'injecter dynamiquement des routes. Cependant, l'injection de route ne se fait qu'à la fin car `NA.webconfig.routes` est un objet. Il n'y a donc pas de moyen d'ordonner les routes, ce qui est génant car les routes sont résolu dans l'ordre dans lesquels elles ont été injectées.

Nous allons résoudre ça en changeant la manière de créer les routes de `routes: { <key>: { ... } }` à `routes: [{ "key": <key>, ... }]`.

Voici l'ensemble de fichier suivant :

```
├─ controllers/
│  └─ common.js
├─ views/
│  ├─ index.htm
│  ├─ content.htm
│  └─ error.htm
└─ webconfig.json
```

Avec le `webconfig.json` initialement comme ceci avec `routes: <Object>` :

```json
{
	"controller": "common.js",
	"routes": {
		"/doc/index.html": {
			"view": "index.htm"
		},
		"/doc/*": {
			"view": "error.htm",
			"statusCode": 404
		}
	}
}
```

se transformant en cela avec `routes: <Array>` :

```json
{
	"controller": "common.js",
	"routes": [{
		"url": "/doc/index.html
		"view": "index.htm"
	}, {
		"url": "/doc/*",
		"view": "error.htm",
		"statusCode": 404
	}]
}
```

Avec le fichier « common.js » nous pouvons maintenant injecter les routes à des positions précise. Nous allons les ajoutés au début.

```json
// On intervient au niveau des routes pendant qu'elles sont ajoutées.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setRoutes = function (next) {

	// On récupère l'instance de NodeAtlas en cours.
	var NA = this,

		// Et nous récupérons les routes en provenance du webconfig...
		route = NA.webconfig.routes;

	// ...pour ajouter la route "/content.html" au débuts de nos routes.
	route.unshift({
		"url": "/doc/content.html",
		"view": "content.htm"
	});

	// On redonne la main à NodeAtlas pour la suite.
	next();
};
```

De cette manière l'adresse `http://localhost/doc/content.html` renverra la vue `content.htm` et non la vue `error.htm` en 404.



### Gérer les redirections ###

Pour aller à une autre adresse (redirection 301 ou 302) quand vous arrivez à une url il faut utiliser le paramètre `redirect`.

*Note : si vous ne précisez pas un `statusCode`, la redirection ne se fera pas. Le `statusCode` est obligatoire.*

#### En statique ####

Voyez l'exemple ci-dessous :

```json
{
	"routes": {
		"/liste-des-membres/": {
			"view": "members.htm"
		},
		"/liste-des-membres": {
			"redirect": "/liste-des-membres/",
			"statusCode": 301
		},
		"/aller-sur-node-atlas/": {
			"redirect": "https://node-atlas.js.org/",
			"statusCode": 302
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

Vous serez redirigé :

- sur `http://localhost/liste-des-membres/` quand vous accéderez à `http://localhost/liste-des-membres` avec une entête _redirection permanente_.
- sur `https://node-atlas.js.org/` quand vous accéderez à `http://localhost/aller-sur-node-atlas/` avec une entête _redirection temporaire_.

#### En dynamique ####

Voyez l'exemple ci-dessous :

```json
{
	"routes": {
		"/liste-des-membres/:member/": {
			"view": "members.htm"
		},
		"/liste-des-membres/:member": {
			"redirect": "/liste-des-membres/:member/",
			"statusCode": 301
		},
		"/": {
			"view": "index.htm"
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
			"view": "members.htm",
			"regExp": true
		},
		"/liste-des-membres/([-a-z0-9]+)/": {
			"redirect": "/membres/$0/",
			"statusCode": 301,
			"regExp": true
		},
		"/liste-des-membres/": {
			"view": "members.htm"
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

Vous serez redirigé sur `http://localhost/membres/haeresis/` quand vous accéderez à `http://localhost/liste-des-membres/haeresis/` avec une entête _redirection permanente_.

Pour le second *match* utilisez $1, pour le troisième $2, etc.



### Gérer les Headers de page ###

Par défaut, les Headers envoyé par NodeAtlas sont les suivants : `Content-Type:text/html; charset=utf-8` avec un `statusCode` à 200.

Il est tout à fait possible de modifier ses valeurs pour une entrée de route pour des APIs local au site.

```json
{
	"mimeType": "application/json",
	"charset": "utf-16",
	"routes": {
		"/": {
			"view": "index.htm",
			"mimeType": "text/html"
		},
		"/api/articles": {
			"view": "display-json.htm",
			"controller": "blog/list-of-articles.js",
			"charset": "utf-8",
			"statusCode": 203
		}
	}
}
```

Il est également possible de modifier complètement les Headers, ce qui écrase toutes les autres valeurs de headers (à l'exception du `statusCode` donc). Mettre une valeur à `false` retire le Headers précédemment mis en place.

```json
{
	"headers": {
		"Content-Type": "application/json; charset=utf-8",
		"Access-Control-Allow-Origin": "*"
	},
	"routes": {
		"/api/articles": {
			"view": "display-json.htm",
			"controller": "blog/list-of-articles.js",
			"statusCode": 203,
			"headers": {
				"Access-Control-Allow-Origin": false
			}
		}
	}
}
```



### Configuration dynamique ###

Plutôt que d'utiliser plusieurs configurations statique `.json`, il est tout a fait possible d'utiliser des configurations dynamiques `.js`. Dans ce cas, ce que votre fichier `.js` devra retourner avec `module.exports` sera un objet JSON valide.

Nous pouvons ainsi aisément remplacer les six fichiers suivants :

*webconfig.json*

```json
{
	"languageCode": "fr-fr",
	"statics": "statics.fr-fr.json"
	"routes": {
		"/": "index.htm"
	}
}
```

*webconfig.prod.json*

```json
{
	"cache": true,
	"languageCode": "fr-fr",
	"statics": "statics.fr-fr.json"
	"routes": {
		"/": "index.htm"
	}
}
```

*webconfig.en-us.json*

```json
{
	"languageCode": "fr-fr",
	"statics": "statics.fr-fr.json"
	"routes": {
		"/": "index.htm"
	}
}
```

*webconfig.en-us.prod.json*

```json
{
	"cache": true,
	"languageCode": "en-us",
	"statics": "statics.en-us.json"
	"routes": {
		"/": "index.htm"
	}
}
```

*statics.fr-fr.json*

```json
{
	"/variations/": "variations/fr-fr/",
}
```

*statics.en-us.json*

```json
{
	"/variations/": "variations/en-us/",
}
```

par les deux fichiers suivants :

*webconfig.json*

```json
module.export = (function () {
	var webconfig = {
		"cache": false,
		"languageCode": "fr-fr",
		"statics": "statics.json"
		"routes": {
			"/": "index.htm"
		}
	};

	if (process.env.NODE_ENV === 'production') {
		webconfig["cache"] = true;
	}

	if (process.env.LANG) {
		webconfig["languageCode"] = process.env.LANG;
	}

	return webconfig;
}());
```

*statics.json*

```json
module.export = (function () {
	var NA = this.NA,
		languageCode = NA.webconfig.languageCode

	return {
		"/variations/": "variations/" + languageCode + "/",
	};
}());
```

en supposant les variables d'environnements suivantes pour les quatre environnements suivants :

Local FR

```bash
NODE_ENV=DEVELOPMENT
LANG=fr-fr
```

Local EN

```bash
NODE_ENV=DEVELOPMENT
LANG=en-us
```

Prod FR

```bash
NODE_ENV=PRODUCTION
LANG=fr-fr
```

Prod EN

```bash
NODE_ENV=PRODUCTION
LANG=en-us
```



### Faire tourner le site en HTTPs ###

Il est très simple de faire tourner une instance de NodeAtlas avec le protocol HTTPs. Pour cela il suffit de créer, par exemple un dossier `security` dans lequel vous allez placer vos fichiers `server.key` et `server.crt` afin d'alimenter le protocol.

Il ne vous reste plus qu'à utiliser la configuration suivante :

```json
{
	"httpSecure": true,
	"httpSecureKeyRelativePath": "security/server.key",
	"httpSecureCertificateRelativePath": "security/server.crt",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

Vous pouvez également, si —comme c'est le cas ici— vos deux fichiers Key et Certificate portent le même nom, utiliser cette configuration :

```json
{
	"httpSecure": "security/server",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

Pour finir, il est également possible de seulement laisser la valeur de `httpSecure` à `true` pour obtenir un `https` dans vos chemins comme `urlBasePath` ou `urlBase`. Cependant le serveur ce lancera en HTTP, il vous faudra un proxy qui gère pour vous la lecture du certificat.

```json
{
	"httpSecure": true,
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

*Note : en production, si vous redirigez un proxy vers votre instance de NodeAtlas, n'oubliez pas qu'en HTTPs ce n'est pas `urlPort: 80` mais `urlPort: 443`*



### Minifier les CSS / JS ###

Vous pouvez automatiquement générer des fichiers CSS et JS minifiés et offusqués en créant des Bundles en référençant les groupes de fichiers d'entré par leur chemin d'accès et le chemin du fichier de sortie. Vous pouvez bien entendu en faire autant que vous le souhaitez. La génération des fichiers se fait à chaque démarrage de NodeAtlas que ce soit en tant que serveur ou via la commande `--generate` pour peu qu'un Bundle existe dans le webconfig.

#### Créer des Bundles ####

Avec la configuration suivante :

```json
{
	"bundles": {
		"javascripts": {
			"javascripts/boot.min.js": [
				"javascripts/modernizr.js",
				"javascripts/yepnot.js",
				"javascripts/html5Shiv.js"
			],
			"javascripts/framework.min.js": [
				"javascripts/jquery.js",
				"javascripts/jquery-ui.js",
				"javascripts/prettify.js",
				"javascripts/prettify/run_prettify.js"
			],
			"javascripts/common.min.js": [
				"javascripts/components/extended-format-date.js",
				"javascripts/common.js"
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
			"view": "index.htm"
		}
	}
}
```

et l'ensemble de fichier suivant :

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  └─ common-min1160.css
│  └─ javascripts/
│     ├─ modernizr.js
│     ├─ yepnot.js
│     ├─ html5Shiv.js
│     ├─ jquery.js
│     ├─ jquery-ui.js
│     ├─ prettify.js
│     ├─ prettify/
│     │  └─ run_prettify.js
│     ├─ components/
│     │  └─ extended-format-date.js
│     └─ common.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

vous obtiendrez les nouveaux fichiers suivant :

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  ├─ common-min1160.css
│  │  └─ common.min.css     ⤆ nouveau fichier
│  └─ javascripts/
│     ├─ modernizr.js
│     ├─ yepnot.js
│     ├─ html5Shiv.js
│     ├─ jquery.js
│     ├─ jquery-ui.js
│     ├─ prettify.js
│     ├─ prettify/
│     │  └─ run_prettify.js
│     ├─ components/
│     │  └─ extended-format-date.js
│     ├─ common.js
│     ├─ boot.min.js        ⤆ nouveau fichier
│     ├─ framework.min.js   ⤆ nouveau fichier
│     └─ common.min.js      ⤆ nouveau fichier
├─ views/
│  └─ index.htm
└─ webconfig.json
```

#### Bundles dans un fichier partagé ####

Afin de ne pas réécrire une longue liste de configuration de Bundles dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutualiser la déclaration des fichiers dans un fichier de votre choix. Par convention, c'est le fichier `bundles.json`.

Par exemple :

L'ensemble de fichier suivant

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  └─ common-min1160.css
│  └─ javascripts/
│     ├─ modernizr.js
│     ├─ yepnot.js
│     ├─ html5Shiv.js
│     ├─ jquery.js
│     ├─ jquery-ui.js
│     ├─ prettify.js
│     ├─ prettify/
│     │  └─ run_prettify.js
│     ├─ components/
│     │  └─ extended-format-date.js
│     └─ common.js
├─ views/
│  └─ index.htm
├─ webconfig.json
└─ webconfig.prod.json
```

avec `webconfig.json`

```json
{
	"httpPort": 7777,
	"bundles": {
		"javascripts": {
			"javascripts/boot.min.js": [
				"javascripts/modernizr.js",
				"javascripts/yepnot.js",
				"javascripts/html5Shiv.js"
			],
			"javascripts/framework.min.js": [
				"javascripts/jquery.js",
				"javascripts/jquery-ui.js",
				"javascripts/prettify.js",
				"javascripts/prettify/run_prettify.js"
			],
			"javascripts/common.min.js": [
				"javascripts/components/extended-format-date.js",
				"javascripts/common.js"
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
			"view": "index.htm"
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
		"javascripts": {
			"javascripts/boot.min.js": [
				"javascripts/modernizr.js",
				"javascripts/yepnot.js",
				"javascripts/html5Shiv.js"
			],
			"javascripts/framework.min.js": [
				"javascripts/jquery.js",
				"javascripts/jquery-ui.js",
				"javascripts/prettify.js",
				"javascripts/prettify/run_prettify.js"
			],
			"javascripts/common.min.js": [
				"javascripts/components/extended-format-date.js",
				"javascripts/common.js"
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
			"view": "index.htm"
		}
	}
}
```

pourrait devenir l'ensemble de fichier suivant

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  └─ common-min1160.css
│  └─ javascripts/
│     ├─ modernizr.js
│     ├─ yepnot.js
│     ├─ html5Shiv.js
│     ├─ jquery.js
│     ├─ jquery-ui.js
│     ├─ prettify.js
│     ├─ prettify/
│     │  └─ run_prettify.js
│     ├─ components/
│     │  └─ extended-format-date.js
│     └─ common.js
├─ views/
│  └─ index.htm
├─ bundles.json              ⤆ nouveau fichier
├─ webconfig.json
└─ webconfig.prod.json
```

avec `webconfig.json`

```json
{
	"httpPort": 7777,
	"bundles": "bundles.json",
	"routes": {
		"/": {
			"view": "index.htm"
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
			"view": "index.htm"
		}
	}
}
```

et `bundles.json`

```json
{
	"javascripts": {
		"javascripts/boot.min.js": [
			"javascripts/modernizr.js",
			"javascripts/yepnot.js",
			"javascripts/html5Shiv.js"
		],
		"javascripts/framework.min.js": [
			"javascripts/jquery.js",
			"javascripts/jquery-ui.js",
			"javascripts/prettify.js",
			"javascripts/prettify/run_prettify.js"
		],
		"javascripts/common.min.js": [
			"javascripts/components/extended-format-date.js",
			"javascripts/common.js"
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

Il est également possible de ne pas exécuter la minification au démarrage d'un site web avec NodeAtlas avec les propriétés `"cssBundlingEnable": false` et `"jsBundlingEnable": false` pour chaque type de Bundle.

```json
{
	"cssBundlingEnable": false,
	"jsBundlingEnable": false,
	"bundles": {
		"javascripts": {
			"javascripts/boot.min.js": [
				"javascripts/modernizr.js",
				"javascripts/yepnot.js",
				"javascripts/html5Shiv.js"
			],
			"javascripts/framework.min.js": [
				"javascripts/jquery.js",
				"javascripts/jquery-ui.js",
				"javascripts/prettify.js",
				"javascripts/prettify/run_prettify.js"
			],
			"javascripts/common.min.js": [
				"javascripts/components/extended-format-date.js",
				"javascripts/common.js"
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
			"view": "index.htm"
		}
	}
}
```

*Note : si vos bundles sont dans un fichier partagé, vous pouvez également les désactiver simplement en retirand la ligne `"bundles": "bundles.json"`.*

#### Ré-générer les Bundles avant chaque rendu de page ####

De manière à toujours tester vos page avec les fichiers minifiés, vous pouvez demander à ce qu'ils soient régénérés avant chaque affichage de page avec les propriétés `"cssBundlingBeforeResponse": true` et `"jsBundlingBeforeResponse": true` pour chaque type de Bundle.

```json
{
	"cssBundlingBeforeResponse": false,
	"jsBundlingBeforeResponse": false,
	"bundles": {
		"javascripts": {
			"javascripts/boot.min.js": [
				"javascripts/modernizr.js",
				"javascripts/yepnot.js",
				"javascripts/html5Shiv.js"
			],
			"javascripts/framework.min.js": [
				"javascripts/jquery.js",
				"javascripts/jquery-ui.js",
				"javascripts/prettify.js",
				"javascripts/prettify/run_prettify.js"
			],
			"javascripts/common.min.js": [
				"javascripts/components/extended-format-date.js",
				"javascripts/common.js"
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
			"view": "index.htm"
		}
	}
}
```

*Note : ceci n'est pas conseillé en production car cela ralenti les réponses des pages.*

#### Version dans noms de fichiers générés ####

Afin de forcer le navigateur à charger de nouveau vos fichiers en cache il est intéressant de changer leur nom pour chaque version. Ainsi avec l'occurence `{version}` sera remplacé par le numéro de version de votre site actuel (par défaut `0.0.0`).

Ainsi, si vous avez un fichier `package.json` ou un `webconfig.json` valide avec un numéro de version indiqué sous la propriété version, ce numéro remplacera la valeur `{version}`. Ainsi avec le webconfig suivant :

*webconfig*

```js
{
	"version": "1.0.0",
	"bundles": "bundles.json"
	"routes": "routes.json"
}
```

et les bundles suivants :

*bundles.json*

```json
{
	"javascripts": {
		"javascripts/boot.{version}.min.js": [
			"javascripts/modernizr.js",
			"javascripts/yepnot.js",
			"javascripts/html5Shiv.js"
		]
	},
	"stylesheets": {
		"stylesheets/common.{version}.min.css": [
			"stylesheets/common.css",
			"stylesheets/common-min780.css",
			"stylesheets/common-min1160.css"
		]
	}
}
```

vous obtiendrez les fichiers `assets/javascripts/boot.1.0.0.min.js` et `assets/javascripts/common.1.0.0.min.css`.

que vous pourrez appeler ainsi :

_views/*.htm_

```htm
<!-- ... -->

<link rel="stylesheet" href="stylesheets/common.<?= webconfig.version ?>.min.css">

<!-- ... -->

<script src="javascripts/boot.<?= webconfig.version ?>.min.js"></script>

<!-- ... -->
```

#### Bundles avec Sockets ####

Il est possible de minifier le fichier défini par `NA.webconfig.socketClientFile` même si celui-ci n'existe pas physiquement. Il suffit pour cela de le glisser dans les bundles souhaité.

Dans l'exemple suivant, le fichier virtuel `node-atlas/socket.io.js` sera ajouté aux sources avec la bonne configuration pour faire le lien client/serveur.

```json
{
	"bundles": {
		"javascripts": {
			"javascripts/common.min.js": [
				"javascripts/socket.io.js",
				"node-atlas/socket.io.js",
				"javascripts/common.js"
			]
		}
	},
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```



### Générer les CSS avec Less ###

Vous pouvez utiliser le préprocesseur Less pour créer vos CSS. Le fonctionnement est le suivant : à chaque fois qu'une requête CSS est effectuée, si un équivalent Less existe il est lu et celui-ci génère le CSS. Une fois l'opération effectuée, on renvoi le CSS demandée.

Avec la structure suivante :

```
├─ assets/
│  └─ stylesheets
│     └─ common.less
├─ views/
│  └─ index.htm
└─ webconfig.json
```

ainsi que le webconfig suivante :

```json
{
	"less": true,
	"routes": {
		"/": "index.htm"
	}
}
```

et le contenu suivant dans :

*views/index.htm*

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

#### Source Map, Minification et Autoprefix ####

Par défaut, dans l'exemple ci-dessus un fichier `common.css.map` sera généré. Celui-ci permet à votre navigateur de vous indiquer qu'elle ligne du fichier `.less` a générée la propriété CSS de l'élément que vous avez sélectionné dans votre débuggeur.

Cela se désactive avec `less.sourceMap` à `false` :

```json
	"less": {
		"sourceMap": false
	},
	"routes": {
		"/": "index.htm"
	}
```

Vous pouvez également générer des fichiers CSS déjà minifiés avec :

```json
	"less": {
		"compress": true
	},
	"routes": {
		"/": "index.htm"
	}
```

Pour finir, vous pouvez également ajouter automatiquement les prefix vendeur comme `--webkit`, `--moz`, `--ms`, `--o` lors de la génération sans vous en préoccuper dans vos sources !

```json
	"less": {
		"autoprefix": true
	},
	"routes": {
		"/": "index.htm"
	}
```

#### Compiler les Less avec `--generate` ####

Comme les Less sont compilés a la volé, quand le fichier est demandé en http(s), toutes modifications dans le Less demandera de faire tourner le site pour la répercuter dans le CSS. Ensuite seulement vous pourrez minifier vos CSS. Il est possible d'automatiser cette tâche pour ne pas avoir à démarrer le site grâce à `less.files`.

Avec le `webconfig.json` suivant :

```json
{
	"less": {
		"files": [
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

```json
{
	"less": {
		"files": "less.json"
	},
	"routes": {
		"/": "index.htm"
	}
}
```

avec `less.json` qui contient :

```json
[
	"stylesheets/common.less",
	"stylesheets/component-1.less",
	"stylesheets/component-2.less",
	"stylesheets/component-3.less"
]
```

Par défaut, les `@import` utilisés par Less seront capable de fouiller dans les sous dossier : `styles`, `stylesheets` ou `css`. Il est possible de changer cela avec :

```json
{
	"less": {
		"paths": [
			"subdirectory/styles-files",
		],
		"files": "less.json"
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
├─ assets/
│  └─ stylesheets
│     └─ common.styl
├─ views/
│  └─ index.htm
└─ webconfig.json
```

ainsi que le webconfig suivante :

```json
{
	"stylus": true,
	"routes": {
		"/": "index.htm"
	}
}
```

et le contenu suivant dans :

*views/index.htm*

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

#### Source Map, Minification et Autoprefix ####

Par défaut, dans l'exemple ci-dessus un fichier `common.css.map` sera généré. Celui-ci permet à votre navigateur de vous indiquer qu'elle ligne du fichier `.styl` a générée la propriété CSS de l'élément que vous avez sélectionné dans votre débuggeur.

Cela se désactive avec `stylus.sourceMap` à `false` :

```json
	"stylus": {
		"sourceMap": false
	},
	"routes": {
		"/": "index.htm"
	}
```

Vous pouvez également générer des fichiers CSS déjà minifiés avec :

```json
	"stylus": {
		"compress": true
	},
	"routes": {
		"/": "index.htm"
	}
```

Pour finir, vous pouvez également ajouter automatiquement les prefix vendeur comme `--webkit`, `--moz`, `--ms`, `--o` lors de la génération sans vous en préoccuper dans vos sources !

```json
	"stylus": {
		"autoprefix": true
	},
	"routes": {
		"/": "index.htm"
	}
```

*Note:* Plus d'options sur [la documentation du module stylus](https://www.npmjs.com/package/stylus).

#### Compiler les Stylus avec `--generate` ####

Comme les Stylus sont compilés a la volé, quand le fichier est demandé en http(s), toutes modifications dans le Stylus demandera de faire tourner le site pour la répercuter dans le CSS. Ensuite seulement vous pourrez minifier vos CSS. Il est possible d'automatiser cette tâche pour ne pas avoir à démarrer le site grâce à `stylus.files`.

Avec le `webconfig.json` suivant :

```json
{
	"stylus": {
		"files": [
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

```json
{
	"stylus": {
		"files": "stylus.json"
	},
	"routes": {
		"/": "index.htm"
	}
}
```

avec `stylus.json` qui contient :

```json
[
	"stylesheets/common.styl",
	"stylesheets/component-1.styl",
	"stylesheets/component-2.styl",
	"stylesheets/component-3.styl"
]
```

Par défaut, les `@import` utilisés par Stylus seront capable de fouiller dans les sous dossier : `styles`, `stylesheets` ou `css`. Il est possible de changer cela avec :

```json
{
	"stylus": {
		"paths": [
			"subdirectory/styles-files",
		],
		"files": "stylus.json"
	},
	"routes": {
		"/": "index.htm"
	}
}
```



### Optimiser les Images ###

Vous pouvez automatiquement optimiser les images que vous allez utiliser dans votre site pour en limiter le poids de chargement en créant des Optimizations en référençant les fichiers d'entrés par leur chemin d'accès et le chemin du dossier de sortie. Vous pouvez bien entendu en faire autant que vous le souhaitez. L'optimisation des images se fait à chaque démarrage de NodeAtlas que ce soit en tant que serveur ou via la commande `--generate` pour peu que des Optimizations existe dans le webconfig.

#### Créer des Optimizations ####

Avec la configuration suivante :

```json
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
			"view": "index.htm"
		}
	}
}
```

et l'ensemble de fichier suivant :

```
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        └─ example.svg
├─ views/
│  └─ index.htm
└─ webconfig.json
```

vous obtiendrez les nouveaux fichiers suivant :

```
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        ├─ example.svg
│        └─ optimized/       ⤆ nouveau dossier
│           ├─ example.png   ⤆ nouveau fichier
│           ├─ example.jpg   ⤆ nouveau fichier
│           ├─ example.gif   ⤆ nouveau fichier
│           └─ example.svg   ⤆ nouveau fichier
├─ views/
│  └─ index.htm
└─ webconfig.json
```

#### Créer des Optimizations par groupes de fichier ####

Vous pouvez par exemple, plutôt que d'indiquer les fichiers un par un, les indiquer en groupe :

```json
{
	"optimizations": {
		"images": {
			"media/images/*.{gif,jpg,png,svg}": "media/images/optimized/"
		}
	},
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

#### Ajouter des options aux Optimizations ####

Il est possible de redéfinir les options par défaut pour l'optimisation via ses 4 objets :

```json
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
			"view": "index.htm"
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
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        └─ example.svg
├─ views/
│  └─ index.htm
├─ webconfig.json
└─ webconfig.prod.json
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
			"view": "index.htm"
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
			"view": "index.htm"
		}
	}
}
```

pourrait devenir l'ensemble de fichier suivant

```
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        └─ example.svg
├─ views/
│  └─ index.htm
├─ bundles.json
├─ webconfig.json
└─ webconfig.prod.json
```

avec `webconfig.json`

```json
{
	"httpPort": 7777,
	"optimizations": "optimizations.json",
	"routes": {
		"/": {
			"view": "index.htm"
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
			"view": "index.htm"
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

Il est également possible de ne pas exécuter l'optimisation au démarrage d'un site web avec NodeAtlas avec les propriétés `"imgOptimizationsEnable": false`.

```json
{
	"imgOptimizationsEnable": false,
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
			"view": "index.htm"
		}
	}
}
```

*Note : si vos optimizations sont dans un fichier partagé, vous pouvez également les désactiver simplement en retirant la ligne `"optimizations": "optimizations.json"`.*

#### Ré-générer les Optimizations avant chaque rendu de page ####

Vous pouvez demander à ce que les fichiers soient régénérés avant chaque affichage de page avec les propriétés `"imgOptimizationsBeforeResponse": true`.

```json
{
	"imgOptimizationsBeforeResponse": false,
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
			"view": "index.htm"
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
			"view": "email.htm",
			"output": "bienvenue.html",
			"injectCss": "stylesheets/email.css"
		}
	}
}
```

et l'ensemble de fichiers suivant :

```
├─ serverless/
├─ assets/
│  └─ stylesheets/
│     └─ email.css
├─ views/
│  └─ email.htm
└─ webconfig.json
```

dont les contenus sont :

*stylesheets/common.css*

```css
body {
	color: #f00;
}
```

*views/email.htm**

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

vous obtiendrez en sortie avec la commande `node-atlas --generate` l'ensemble de fichier suivant :

```
├─ serverless/
│  └─ bienvenue.html    <= template email prêt à l'envoi !
├─ assets/
│  └─ stylesheets/
│     └─ email.css
├─ views/
│  └─ email.htm
└─ webconfig.json
```

avec comme contenu pour `serverless/bienvenue.html`

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

> Test : Depuis `./tests/examples/css-injection` lancez `node "../../../" --generate`. Le résultat est dans `serverless`.

#### Injection globale ####

Il existe également la même propriété globale impactant toutes les pages.

```json
{
	"injectCss": "stylesheets/email.css",
	"routes": {
		"/bienvenue/": {
			"view": "email-a.htm",
			"generate": "bienvenue.html"
		},
		"/au-revoir/": {
			"view": "email-b.htm",
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
			"view": "email-a.htm",
			"generate": "bienvenue.html",
			"injectCss": "/stylesheets/welcome.css"
		},
		"/au-revoir/": {
			"view": "email-b.htm",
			"generate": "au-revoir.html",
			"injectCss": ["stylesheets/good-bye.css", "/stylesheets/others.css"]
		}
	}
}
```

> Test : Depuis `./tests/examples/css-injection` lancez `node "../../../" --generate --webconfig webconfig.multiple.json`. Le résultat est dans `serverless`.



### Autoriser / Interdire les demandes GET / POST ###

Vous pouvez également manager la manière dont le serveur va répondre aux demandes GET/POST pour une page donnée. Par exemple, nous allons autoriser l'accès aux pages uniquement en GET pour tout le site et autoriser un POST pour une page seulement (et même lui interdire le GET).

```json
{
	"get": true,
	"post": false,
	"routes": {
		"/": {
			"view": "index.htm"
		},
		"/liste-des-membres/": {
			"view": "members.htm"
		},
		"/rediger-commentaire/": {
			"view": "write-com.htm"
		},
		"/commentaire-sauvegarde/": {
			"view": "save-com.htm",
			"get": false,
			"post": true
		}
	}
}
```

*Note : Si rien n'est précisé,* `get` *et* `post` *sont à* `true` *au niveau global et par page.*



### Autoriser / Interdire les demandes PUT / DELETE ###

Fonctionnant exactement de la même manière que `get` et `post`, les deux actions HTTP PUT et DELETE qui part défaut ne sont pas activé peuvent être activé avec `put` et `delete`.

```json
{
	"get": false,
	"post": false,
	"put": true,
	"routes": {
		"/read-all-entry/": {
			"view": "display-json.htm",
			"variation": "all-entry.json",
			"get": true,
			"put": false
		},
		"/read-entry/:id/": {
			"view": "display-json.htm",
			"variation": "entry.json",
			"get": true,
			"put": false
		},
		"/create-entry/:id/": {
			"view": "display-json.htm",
			"variation": "entry.json",
			"post": true,
			"put": false
		},
		"/update-entry/:id/": {
			"view": "display-json.htm",
			"variation": "entry.json"
		},
		"/delete-entry/:id/": {
			"view": "display-json.htm",
			"variation": "entry.json",
			"delete": true,
			"put": false
		}
	}
}
```

Avec la configuration ci-dessus, seulement une action HTTP n'est possible par entrée, cela permet de faire des APIs REST facilement avec NodeAtlas.



### Gérér CORS et les demandes OPTIONS ###

Par défaut, les requêtes pré-vérifiées ("preflighted requests") ne sont pas activées. Vous allez en avoir besoin pour, par exemple, effectuer des requêtes Cross-Domain ou CORS. Les requêtes pré-vérifiées se font avec la méthode HTTP OPTIONS.

Pour activer OPTIONS sur une route, utilisez la propriété `options` sur une route dans le webconfig. Pour activer OPTIONS sur toutes les routes, utilisez alors la propriété options du webconfig sur la configuration global.

```json
{
	"options": true,
	"routes": {
		"/read-all-entry/": {
			"view": "display-json.htm",
			"variation": "all-entry.json",
			"options": false
		},
		"/create-entry/:id/": {
			"view": "display-json.htm",
			"variation": "entry.json",
			"post": true
		},
		"/delete-entry/:id/": {
			"view": "display-json.htm",
			"variation": "entry.json",
			"delete": true
		}
	}
}
```

**Demande Cross-Domain**

Si vous souhaitez authoriser une ressource du serveur NodeAtlas au requête en provenance de `www.domain-a.com` pour une page précise, vous pouvez le faire ainsi :

```json
{
	"routes": {
		"/api/random-quote": {
			"controller": "get-quote.js",
			"headers": {
				"Access-Control-Allow-Origin": "http://www.domain-a.com"
			}
		}
	}
}
```

Ainsi vous pourrez par exemple accepter la requête suivante qui a pour `Origin`, `http://www.domain-a.com` qui est donc une valeur de `Access-Control-Allow-Origin` :

```bash
GET /api/random-quote HTTP/1.1
Host: www.domain-a.com
...
Origin: http://www.domain-a.com
...
```

**Demande Cross-Domain avec jeton**

Si vous souhaitez authoriser des ressources du serveur NodeAtlas aux requêtes en provenance de n'importe quel domaine externe pour la page `/api/random-quote` et une page qui attend un jeton d'authentification pour la page `/api/protected/random-quote`, vous pouvez le faire ainsi :

```json
{
	"mimeType": "application/json",
	"headers": {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Authorization"
	},
	"routes": {
		"/api/random-quote": {
			"controller": "get-quote.js"
		},
		"/api/protected/random-quote": {
			"controller": "get-quote.js",
			"middlewares": "is-authenticated.js",
			"options": true
		}
	}
}
```

Faire lire un jeton à NodeAtlas depuis un domaine externe nécessite de lui passer l'en-tête HTML `Authorization`. Pour que celle-ci soit accepté par NodeAtlas il faut le définir avec `Access-Control-Allow-Headers` acceptant `Authorization`. L'envoi d'un jeton nécessitant une requête pré-vérifiée, il faut également mettre `options` à `true` pour autoriser les requêtes HTTP avec la méthode OPTIONS.

Ainsi vous pourrez par exemple accepter la requête suivante qui passe un jeton d'authentification à notre serveur pour la ressource `/api/protected/random-quote` :

```bash
GET /api/protected/random-quote HTTP/1.1
Host: localhost:1337
...
Origin: http://localhost
Authorization: Bearer CODE_DU_JETON
...
```

**Autre demande Cross-Domain**

Toutes les entêtes prévues pour faire fonctionner CORS sont accepté via le mécanisme d'ajout d'en-tête de NodeAtlas.



### Changer les paramètres des sessions ###

#### Clé et Secret ####

NodeAtlas gère lui-même les sessions stockées sur le serveur avec comme paramètres initiaux :

- Key : `nodeatlas.sid`
- Secret : `1234567890bépo`

qui permettent à un client de rester connecté à travers les pages à un même ensemble de variable personnelles côtés serveur.

Il est possible de modifier ses paramètres par défaut (et même obligatoire pour des sites en productions) avec les paramètres de `webconfig.json` suivant :

```json
{
	sessionKey: "clé personnelle",
	sessionSecret: "secret personnel"
}
```

NodeAtlas utilise également un objet de stockage mémoire (MemoryStore) qui stocke les informations dans la RAM du serveur.

#### Autres paramètres ####

Il est possible de changer l'intégralité des paramètres des sessions (sauf le MemoryStore) en utilisant la configuration de `webconfig.json` suivante :

```json
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



### Stockage externe des sessions ###

Par défaut, c'est NodeAtlas qui stocke les sessions serveurs dans la RAM du serveur par application. Cela ne permet pas de partager des sessions utilisateurs à travers plusieurs applications NodeAtlas (ou autre) et efface toutes les sessions en cours pour une application en cas de redémarrage de celle-ci.

Pour résoudre ce souci, il convient de prendre en charge l'enregistrement des sessions via une base No SQL tel que `Redis` ou `MongoBD`.

Pour cela il suffit d'utiliser la fonction `setSessions` dans le fichier de `controller` commun.

#### Session gérées avec Redis ####

Implémenter le code suivant dans le `controller` commun pour stocker vos sessions dans Redis en local.

```
exports.setModules = function () {
	var NA = this;

	NA.modules.RedisStore = require("connect-redis");
};

exports.setSessions = function (njsext) {
	var NA = this,
		session = NA.modules.session,
		RedisStore = NA.modules.RedisStore(session);

	NA.sessionStore = new RedisStore();

	next();
};
```

Plus d'informations sur [connect-redis](https://www.npmjs.org/package/connect-redis).


#### Session gérées avec MongoDB ####

Implémenter le code suivant dans `controllers/common.js` pour stocker vos sessions dans la database `sessions` d'une MongoDB locale.

```
exports.setModules = function () {
	var NA = this;

	NA.modules.MongoStore = require("connect-mongo");
};

exports.setSessions = function (next) {
	var NA = this,
		session = NA.modules.session,
		MongoStore = NA.modules.MongoStore(session);

	NA.sessionStore = new MongoStore({
		db: "sessions"
	});

	next();
};
```

Plus d'informations sur [connect-redis](https://www.npmjs.org/package/connect-mongo).



### Changer l'url final des hostname et port d'écoute ###

Il est possible de générer une url de visite différente des paramètres d'écoutes demandés avec `urlHostname` et `urlPort`. Par exemple on écoute la boucle local sur le port 80 car un script fait du Reverse Proxy depuis le port 7777 sur le 80 avec le module « http-proxy » comme ci-dessous :

```json
{
	"httpPort": 7777,
	"httpHostname": "127.0.0.1",
	"urlPort": 80,
	"urlHostname": "localhost",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```



### Générer les URL dynamiquement ###

#### Les chemins relatifs en absolue ####

Il est possible que les chemins créés à partir de votre url soient interprétés comme des sous-dossiers qui n'ont en réalité aucune existence réelle. Cela a pour conséquence de rendre l'adresse `media/images/example.jpg` initialement accessible depuis un template affiché à **http://localhost** impossible à récupérer quand le template est affiché à **http://localhost/sub-directory/** (puisqu'il faudrait alors que notre chemin soit plutôt `../media/images/example.jpg`).

Pour ne plus avoir à se soucier de l'accès aux ressources peu importe l'url qui est demandée, il suffit de transformer toutes les URL relatives telles que :

```
<link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
<!-- ... -->
<img src="media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="javascripts/common.js"></script>
```

en URL absolues avec la variable `urlBasePath` comme ci-dessous :

```
<link rel="stylesheet" type="text/css" href="<?= urlBasePath ?>stylesheets/common.css" />
<!-- ... -->
<img src="<?= urlBasePath ?>media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="<?= urlBasePath ?>javascripts/common.js"></script>
```

À noter que dans le cas de la configuration suivante :

```json
{
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

`urlBasePath` retourne `http://localhost/` alors que dans celle-ci :

```json
{
	"httpPort": 7777,
	"urlRelativeSubPath": "sub/folder",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

`urlBasePath` retourne `http://localhost:7777/sub/folder/`.

#### Les chemins des templates ####

En utilisant le webconfig suivant :

```json
{
	"routes": {
		"/index.html": {
			"view": "index.htm"
		},
		"/contact.html": {
			"view": "contact.htm"
		}
	}
}
```

ainsi que la view `index.htm` correspondante

```html
<!-- ... -->
<a href="http://localhost/index.html">Lien vers l'accueil</a>
<a href="http://localhost/contact.html">Lien pour nous contacter</a>
<!-- ... -->
```

je serais obligé de changer mon lien dans le template si je change le port d'écoute ou si je change le chemin de l'url. Le changement de configuration suivant :

```json
{
	"httpPort": 7777,
	"routes": {
		"/home.html": {
			"view": "index.htm"
		},
		"/contact-us.html": {
			"view": "contact.htm"
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

```json
{
	"routes": {
		"index": {
			"url": "/index.html",
			"view": "index.htm"
		},
		"contact": {
			"url": "/contact.html",
			"view": "contact.htm"
		}
	}
}
```

je peux à présent écrire le lien dans le template de manière dynamique :

1. comme suit

   ```html
<!-- ... -->
<a href="<?= urlBasePath ?><?= webconfig.routes.home.url.slice(1) ?>">Lien vers l'accueil</a>
<a href="<?= urlBasePath ?><?= webconfig.routes.contact.url.slice(1) ?>">Lien pour nous contacter</a>
<!-- ... -->
```

   *Note : `.slice(1)` permet de supprimer facilement le double `/` pour une url fonctionnelle.*

2. ou comme suit

   ```html
<!-- ... -->
<a href="<?= urlBasePath ?>.<?= webconfig.routes.home.url ?>">Lien vers l'accueil</a>
<a href="<?= urlBasePath ?>.<?= webconfig.routes.contact.url ?>">Lien pour nous contacter</a>
<!-- ... -->
```

   *Note : Cela donnerait par exemple `http://localhost/./home.html`, ce qui est une url fonctionnelle.*

3. ou comme suit

   ```html
<!-- ... -->
<a href="<?= urlBasePathSlice + webconfig.routes.home.url ?>">Lien vers l'accueil</a>
<a href="<?= urlBasePathSlice + webconfig.routes.contact.url ?>">Lien pour nous contacter</a>
<!-- ... -->
```

   *Note : `urlBasePathSlice` renvoyant `http://localhost` au lieu de `http://localhost/` ou encore `http://localhost:7777/sub/folder` au lieu de `http://localhost:7777/sub/folder/`.*

#### Utilisation de la clé pour mapper les pages ####

Il est parfois utile de connaître la clé utilisé pour la page courante afin de trouver une équivalence dans une autre langue par exemple.

Avec le webconfig suivant :

```json
{
	"languageCode": "fr-fr",
	"routes": {
		"index_fr-fr": {
			"url": "/",
			"view": "/index.htm"
		},
		"index_en-us": {
			"url": "/english/",
			"view": "index.htm",
			"languageCode": "en-us"
		},
		"cv_fr-fr": {
			"url": "/cv/",
			"view": "cv.htm"
		},
		"cv_en-us": {
			"url": "/english/resume/",
			"view": "index.htm",
			"languageCode": "en-us"
		}
	}
}
```

et les fichiers de variation commun suivant en fr :

```json
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

```json
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
	<? for (var i = 0; i < common.language.length; i++) { ?>
	<li><a href="<?= urlBasePath + webconfig.routes[routeKey.split('_')[0] + '_' + common.language[i].code].url ?>"><?- common.language[i].name ?></a></li>
	<? } ?>
</ul>
```



### Moteur de template personnalisé ###

Il est possible de laisser l'implémentation de [Express prendre la main sur le moteur de rendu des vues](http://expressjs.com/fr/guide/using-template-engines.html). Pour cela il faut utiliser le paramètre `engine`. Un exemple en utilisant le moteur Handlebars :

Tout d'abord, ajouter le middleware Express Handlebars à vos modules :

```
npm install express-handlebars
```

puis utiliser `engine` avec la valeur arbitraire `hbs`

```
{
	"engine": "hbs",
	"controller": "common.js",
	"variation": "common.json",
	"routes": {
		"/": {
			"view": "index.hbs",
			"variation": "index.json"
		}
	}
}
```

puis expliquer au moteur Express de NodeAtlas comment rendre les vues :

```js
exports.setModules = function () {
	var NA = this;

	NA.modules.exphbs = require("express-handlebars");
};

exports.setConfigurations = function (next) {
  var NA = this,
	exphbs = NA.modules.exphbs;

	NA.express.engine("hbs", exphbs());

	next();
};
```

enfin voyons rapidement ce que le fichier `index.hbs` pourrait contenir :

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8">
		<title>{{specific.titlePage}}</title>
		<link rel="stylesheet" href="stylesheets/{{common.classCssCommon}}.css" media="all">
		<link rel="stylesheet" href="stylesheets/{{specific.classPage}}.css" media="all">
	</head>
	<body class="{{specific.classPage}}">
		<div>
			<h1>{{specific.titlePage}}</h1>
			{{{specific.content}}}
		</div>
		<script async="true" type="text/javascript" src="javascripts/{{common.classJsCommon}}.js"></script>
	</body>
</html>
```

Ce que fait `engine`, c'est abandonner le système de NodeAtlas et passer par celui d'Express. Comme Express a besoin d'un objet `response` pour rendre une vue, il est impossible d'utiliser ce mécanisme via l'utilisation de la fonction `NA.view` de l'API NodeAtlas, celle-ci ne supportant que le moteur NodeAtlas, EJS et Pug.

#### Différence entre `engine`, `templateEngineDelimiter` et `pug` ####

Il est tout a fait possible de passer par Express pour rendre EJS et Pug. Dans ce cas, puisque `node-atlas` embarque les modules `ejs` et `pug` en tant que dépendance, il n'est pas nécéssaire de passer par le `controller` commun et l'utilisation de `npm` pour les mettre en place. Il suffit juste d'utiliser `engine: "ejs"` ou `engine: "pug"`.

Cependant, faire cela retire les bénéfices apporter par NodeAtlas pour l'utilisation de ces deux moteurs comme par exemple le support des inclusions dynamique pour Pug dans la `view` avec `#{routeParameters.view}`.



### Pas de vue ###

Il est possible de ne pas utiliser de vue et de seulement faire appel au contrôleur. Dans ce cas le point d'ancrage `changeVariations` est inutile. Il va falloir alimenter vous même `locals.dom` dans le point d'ancrage `changeDom`.

*webconfig.json*

```json
{
	"routes": {
		"/(:member/)?": {
			"controller": "index.js",
			"mimeType": "application/json"
		}
	}
}
```

*controllers/index.js*

```js
exports.changeDom = function (next, locals) {
	locals.dom = `{
  "params": ${locals.params.member},
  "query": ${locals.query.member},
  "body": ${locals.body.member}
}`;

	next();
};
```

Ainsi à l'adresse `http://localhost/riri/?query=fifi` demandé en POST avec le body `member=loulou` vous obtiendrez la sortie :

```json
{
  "params": "riri",
  "query": "fifi",
  "body": "loulou"
}
```

#### Pas de routes ####

Pas un seul webconfig présenté dans la documentation ne se passe du paramètre `routes`. Pourtant il est facultatif au même titre que tous les autres. Aussi avec le webconfig suivant :

*webconfig.json*

```json
{
	"controller": "common.js"
}
```

et le contrôleur suivant :

*controllers/common.js*

```js
exports.setRoutes = function (next) {
	var NA = this,
		route = NA.webconfig.routes = {};

	route["/"] = {
		"mimeType": "text/plain"
	};

	next();
};

exports.changeDom = function (next, locals) {

	locals.dom = "Hello World";

	next();
};
```

Il est tout à fait possible d'obtenir à l'adresse `http://localhost/` le simple message « Hello World ».



### Activer le cache ###

C'est une bonne chose de ne pas reservir des fichiers qui n'ont pas bougé pour la production. Vous pouvez mettre à `true` la valeur du webconfig `cache` pour ça:

```json
{
	cache: true,
	route: {
	  "/": "index.htm"
	}
}
```

Vous pouvez également lancer `node-atlas` avec l'option `--cache` :

> ```bash
node-atlas --cache
```

ou mettre votre variable d'environnement `NODE_ENV` à `production` :

> si vous êtes sous Unix/MacOS

> ```bash
export NODE_ENV=production
```

> ou si vous êtes sur windows

> ```bash
SET NODE_ENV=production
```

> ou vous pouvez démarrer NodeAtlas comme suit

> ```bash
NODE_ENV=production node-atlas
```

> ou vous pouvez la définir dans votre fichier JavaScript :

> ```js
process.env.NODE_ENV = "production";
```





## Anatomie du webconfig ##

Le webconfig est ce qui permet de piloter NodeAtlas et décider si vous ne souhaiter ne vous servir que de vue, que de contrôleur, si vous avez besoin de variation, si vous avez besoin d'activer les requêtes PUT/DELETE, etc. Sans lui, NodeAtlas se lance en tant que Simple Serveur Web. Voici la liste complète des paramètres d'un webconfig sachant qu'ils sont tous facultatifs en fonction de vos besoins.

### &lt;NA>.webconfig ###

```js
Object{
	"assetsCopy": Boolean,
	"assetsRelativePath": String<path-from-root>,
	"bundles": (String<filepath-from-root> | Object{
		"javascripts": Object{
		... url: Array.String<filepath-from-assets>
		},
		"stylesheets": Object{
		... url: Array.String<filepath-from-assets>
		}
	}),
	"cache": Boolean,
	"charset": String,
	"controller": String<filepath-from-controllers>,
	"controllersRelativePath": String<path-from-root>,
	"delete": Boolean,
	"engine": String,
	"index": Boolean,
	"get": Boolean,
	"headers": Object,
	"htmlGenerationBeforeResponse": Boolean,
	"httpHostname": String,
	"httpPort": Number,
	"httpSecure": (String<filepath-from-root> | Boolean),
	"httpSecureKeyRelativePath": String<filepath-from-root>,
	"httpSecureCertificateRelativePath": String<filepath-from-root>,
	"injectCss": (String<filepath-from-assets> | Array.String<filepath-from-assets>),
	"imgOptimizationsBeforeResponse": Boolean,
	"imgOptimizationsEnable": Boolean,
	"jsBundlingBeforeResponse": Boolean,
	"jsBundlingEnable": Boolean,
	"languageCode": String,
	"less": (Boolean | Object{
		"autoprefix": Boolean,
		"compress": Boolean,
		"files": (String<filepath-from-root> | Array.String<filepath-from-assets>),
		"paths": Array.String<path-from-assets>,
		"sourceMap": Boolean
	}),
	"middlewares": (String<filepath-from-middlewares> | Array.String<filepath-from-middlewares>),
	"middlewaresRelativePath": String<path-from-root>,
	"mimeType": String,
	"optimizations": (String<filepath-from-root> | Object{
		"gif": Object,
		"images": Object{
		... url: String<filepath-from-assets>
		},
		"jpg": Object,
		"png": Object,
		"svg": Object
	},
	"options": Boolean,
	"output": Boolean,
	"post": Boolean,
	"pug": Boolean,
	"put": Boolean,
	"routes": (String<filepath-from-root> | Object{
	... "(String</url> | String<key>)": String<filepath-from-views> | NA<routeParameter>)
	} | Array.NA<routeParameter>,
	"serverlessRelativePath": String<path-from-root>,
	"session": Object,
	"staticOptions": Object<from-express-statics-options>,
	"statics": String<filepath-from-root> | Object{
	... /virtual: (String<path-from-root> | Object{
			"path": String<path-from-root>,
			"staticOptions": Object<from-express-statics-options>
		})
	} | Array.Object{
		"path": String<path-from-root>,
		"staticOptions": Object<from-express-statics-options>,
		"virtual": String<urlpath-from-base>
	},
	"cssBundlingBeforeResponse": Boolean,
	"cssBundlingEnable": Boolean,
	"socketClientFile": String<urlpath-from-base>,
	"socketServerOptions": Object<from-socketio-server-options>,
	"stylus": (Boolean | Object{
		"autoprefix": Boolean,
		"compress": Boolean,
		"files": (String<filepath-from-root> | Array.String<filepath-from-assets>),
		"paths": Array.String<path-from-assets>,
		"sourceMap": Boolean,
	}),
	"templateEngineDelimiter": String,
	"urlHostname": String,
	"urlPort": Number,
	"urlRelativeSubPath": String<urlpath-from-root>,
	"variation": String<filepath-from-variations>,
	"variationsRelativePath": String<path-from-root>,,
	"version": String<xx.xx.xx>,
	"view": String<filepath-from-views>,
	"viewsRelativePath": String<path-from-root>
}
```

### &lt;NA>.routeParameters ###

```js
Object{
	"charset": String,
	"controller": String<filepath-from-controllers>,
	"delete": Boolean,
	"get": Boolean,
	"headers": Object,
	"injectCss": (String<filepath-from-assets> | Array.String<filepath-from-assets>),
	"key": String,
	"middlewares": (String<filepath-from-middlewares> | Array.String<filepath-from-middlewares>),
	"mimeType": String,
	"options": Boolean,
	"output": (String<filepath-into-serverless> | Boolean<false>),
	"post": Boolean,
	"put": Boolean,
	"redirect": (String<urlpath-from-base | url>),
	"statusCode": Number,
	"url": String<urlpath-from-base>,
	"variation": String<filepath-from-variations>,
	"view": String<filepath-from-views>
}
```





## CLI / Commandes de lancement ##

La façon la plus simple de lancer NodeAtlas est de se positionner dans le répertoire hébergeant votre site et de lancer la commande `node-atlas`. Cependant il existe des options de lancement pour faire bien plus que lancer le site.

Chacune des commandes qui vont suivre peut être couplée avec les autres de cette manière :

```bash
$ node-atlas --lang fr-fr --httpSecure security/server --browse hello-world
```

ou comme cela

```bash
$ node </path/to/>node-atlas/ --path hello-world --webconfig config.fr-fr.js --httpPort 80 --browse
```



### --help ###

#### Utilisation ####

```bash
-h, --help
```

#### Explication ####

Pour obtenir de l'aide (ouvrir le MAN) sur les commandes ci-après listé directement dans la CLI, utilisez `--help`

```
$ node-atlas --help
```



### --version ###

#### Utilisation ####

```bash
-V, --version
```

#### Explication ####

Pour connaître la version de NodeAtlas que vous utilisez avec la CLI, il vous suffit de la retourner au format `vX.X.X` grâce à `--version`.

```
$ node-atlas --version
```



### --browse [subpath] ###

#### Utilisation ####

```bash
-b, --browse [subpath]
```

#### Explication ####

Cette commande permet d'ouvrir votre navigateur à l'adresse sur laquelle le site va tourner. Très pratique quand vous ne vous souvenez plus du port pour votre version de développement. Cette commande ne sert à rien si elle est couplée avec `--generate` (voir plus loin).

```
$ node-atlas --browse
```

Vous pouvez également cibler une page précise en ajoutant la fin de l'url.

```
$ node-atlas --browse index.html
```



### --path ###

#### Utilisation ####

```bash
-p, --path <path>
```

#### Explication ####

Il est possible de lancer NodeAtlas depuis un autre endroit que le dossier où est hébergé le site que vous souhaitez faire tourner. La commande `--path` vous sera alors très utile.

```bash
$ node-atlas --path </path/to/your/website/directory>/
```



### --webconfig ###

#### Utilisation ####

```bash
-w, --webconfig <webconfigName>
```

#### Explication ####

Par défaut, NodeAtlas va lire votre fichier `webconfig.json`. Il est possible qu'en plus de ce fichier vous ayez créé un autre fichier `webconfig.prod.json` dont le nom de domaine est différent. Ou encore un `webconfig.fr-fr.json` avec des URL et des variations dans une autre langue. Plutôt que de renommer vos fichiers en `webconfig.json` avant de lancer le site, précisez simplement votre autre nom de configuration. Dans l'exemple suivant, notre fichier sera `webconfig.alternatif.json`.

```
$ node-atlas --webconfig webconfig.alternatif.json
```



### --httpHostname ###

#### Utilisation ####

```bash
-H, --httpHostname <httpHostname>
```

#### Explication ####

Il est parfois utile de demander son adresse IP via un `ipconfig` pour le paramettrer dans l'url afin de rendre son site entièrement disponible sur un périphérique du réseau local (smartphone par exemple). Vous pourrez le faire avec cette commande.

```
$ node-atlas --httpHostname 192.168.1.1
```



### --httpPort ###

#### Utilisation ####

```bash
-P, --httpPort <httpPort>
```

#### Explication ####

Vous n'allez peut être pas vous ennuyer à changer votre port d'écoute sur tous vos projets et parfois vous allez devoir travailler sur deux sites différents en même temps. Avec cette commande vous n'aurez pas besoin de couper vos sites alternativement pour libérer le port d'écoute, il suffira d'en choisir un au lancement.

```
$ node-atlas --httpPort 7778
```



### --generate ###

#### Utilisation ####

```bash
-g, --generate
```

#### Explication ####

Si vous modifiez un élément dans votre fichier de variation commun ou même dans un de vos composants de view appelé sur plusieurs pages, vous n'allez pas recharger chaque page pour mettre à jour vos fichiers de sortie. Il suffira alors d'utiliser `--generate`. Cette commande copiera l'intégralité du contenu du dossier `assetsRelativePath` dans `serverlessRelativePath` si leur chemin est différent.

```
$ node-atlas --generate
```



### --cache ###

#### Utilisation ####

```bash
-n, --cache
```

#### Explication ####

Si vous souhaitez éviter d'avoir des ressources en cache pendant votre phase de développement, le plus simple est d'utiliser cette option. C'est votre unique possiblilité d'avoir un « Simple Serveur Web » sans cache.

```
$ node-atlas --cache
```



### --create ###

#### Utilisation ####

```bash
-c, --create [path]
```

#### Explication ####

NodeAtlas contient un dossier `templates` qui contient des exemples de site prèt à l'usage. Pour les installer dans le répertoire dans lequel vous allez exécuter NodeAtlas il faut vous servir de `--create` suivi du dossier contenu dans `templates` que vous souhaitez utiliser. Par défaut, c'est la valeur `hello-world` qui est utilisée. *Valeurs possible : `hello-world`.*

```
$ node-atlas --create hello-world
```



### --httpSecure ###

#### Utilisation ####

```bash
-S, --httpSecure [pathName]
```

#### Explication ####

Si vous utilisez l'option `--httpSecure`, tous les chemins seront accédez en HTTPs. Vous devez définir les fichiers `.crt` and `.key` avec `pathName` si vous souhaitez que le serveur lui-même se lance en HTTPs. Par exemple, si vous avez les fichiers `security/server.crt` et `security/server.key` depuis la racine du site NodeAtlas, vous devez utiliser la commande suivante :

```
$ node-atlas --httpSecure security/server
```



### --lang ###

#### Utilisation ####

```bash
-l, --lang <cultureCode-countryCode>
```

#### Explication ####

En utilisant `--lang` vous changerez la langue de utilisée par NodeAtlas. En réalité cette commande remplace le contenu du fichier `languages/default.json` par celui de `languages/fr-fr.json` si le paramètre passé est « fr-fr » comme dans l'exemple ci-dessous. Lancer NodeAtlas ultérieurement conservera la dernière langue utilisée.

```
$ node-atlas --lang fr-fr
```



## API / NodeAtlas comme module npm ##

Vous pouvez lancez NodeAtlas via du code JavaScript.

L'intégralité des fonctions privés, modules et espaces de nom de NodeAtlas sont décrit dans [la documentation de l'API](https://node-atlas.js.org/doc/node-atlas/) (En). En ce qui concerne les [Points d'ancrage c'est par ici](#cycle-de-vie-et-points-dancrage) et pour les fonctions de démarrage du serveur c'est ci-dessous :



### &lt;NA>.start() ###

Exécuté un simple lancement de NodeAtlas avec `start()`. Par défaut il cherchera le `webconfig.json` dans le dossier où le script est exécuté. Si aucun `webconfig.json` n'est trouvé, un Simple Serveur Web sera lancé.

*server.js*

```javascript
require("node-atlas")().start();
```

```
$ node server.js
```



### &lt;NA>.init(options) ###

Vous pouvez également configurer le lancement avec `init(options)` :

*server.js*

```javascript
require("node-atlas")().init({
	path: "/path/to/your/website/directory/",
	webconfig: "webconfig.alternatif.json",
	browse: true,
	httpHostname: "192.168.1.1",
	httpPort: 7778,
	generate: true
}).start();
```

```
$ node server.js
```

L'objet `options` est le suivant :

```
{
	path: <string>,
	webconfig: <string>,
	browse: <boolean|string>,
	httpHostname: <string>,
	httpPort: <number>,
	generate: <boolean>,
	cache: <boolean>,
	lang: <string>,
	create: <string>,
	httpSecure: <boolean|string>
}
```

*Note : plus de détails pour chaque option dans [la partie CLI](#cli--commandes-de-lancement).*



### &lt;NA>.run(options) ###

Avec `run(options)` vous pouvez configurer et lancer NodeAtlas en une commande.

Vous pouvez par exemple lancer plusieurs sites en une fois. Bien entendu, chaque webconfig écoutera un port différent.

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



### &lt;NA>.started(callback) ###

Avec `started(callback)`, vous pouvez aussi exécuter d'autres tâches après que le serveur web soit lancé :

*servers.js*

```javascript
require("node-atlas")().started(function() {
	console.log("Server started!");
}).run({
	browse: true
});
```



### &lt;NA>.stopped(callback) ###

Avec `stopped(callback)`, vous pouvez aussi exécuter d'autres tâches après que le serveur web soit stoppé :

*servers.js*

```javascript
require("node-atlas")().stopped(function() {
	console.log("Server stopped!");
}).start();
```



### &lt;NA>.generated(callback) ###

Avec `generated(callback)`, vous pouvez aussi exécuter d'autres tâches après la génération de vos assets :

*servers.js*

```javascript
require("node-atlas")().generated(function() {
	require('child_process').exec(__dirname + "/documentation.bat", function (err, stdout, stderr) {
		console.log("Documentation generation...");
		console.log(stdout);
		console.log("Documentation generation done!");
	});
}).run({
	generate: true
});
```



### &lt;NA>.created(callback) ###

Avec `created(callback)`, vous pouvez aussi exécuter d'autres tâches après avoir initialisé le répertoire courant avec un site template :

*servers.js*

```javascript
var nodeAtlas = require("node-atlas"),
	website = nodeAtlas();

website.init({
	"init": true
}).created(function() {
	website.run({
		"browse": true
	});
}).start();
```





## NodeAtlas comme simple serveur web ##

Si NodeAtlas ne trouve pas le « webconfig.json » ou le `--webconfig` que vous lui aurez indiqué, il se lancera en mode « Simple Serveur Web » ou « Public ».

**Ce mode est pratique pour tester très rapidement que NodeAtlas est correctement installé ou pour créer des petits exemples HTML qui ont besoin d'un serveur web pour fonctionner (retours AJAX, iframe embarquée, etc.).**

Pour bien comprendre ce que cela signifie : s'il existe un quelconque fichier dans le répertoire d'où NodeAtlas a été lancé, il sera renvoyé par requête HTTP si on le réclame via son chemin d'accès.

Par exemple, en lançant NodeAtlas dans le répertoire `site-hello-world`

```
site-hello-world/
├─ views/
│  └─ index.htm
└─ webconfig.json
```

en exécutant la commande

```
$ node-atlas
```

ou même la commande

```
$ node-atlas --webconfig webconfig.not-exist.json
```

le serveur se lancera en mode « Simple Serveur Web » et les fichiers « http://localhost/webconfig.json » ou « http://localhost/views/webconfig.htm » seront accessible tel que le navigateur pourrait les renvoyer en tant que simple serveur web.

*Note : la commande `--generate` ne fonctionne pas avec ce mode.*





## Environnement de Développement ##

NodeAtlas utilise Node.js qui est développé sur le moteur V8. Le moteur V8 est également utilisé par les navigateurs Google Chrome et Chromium ce qui fait que NodeAtlas peut être complètement débuggué dans cet environnement.

### Debug du front-end ###

Vous pouvez débugguer vos rendu HTML, vos règles CSS et votre code JavaScript front-end de la même manière que vous l'auriez fait avec un simple site HTML ou une autre technologie. Vous avez donc accès via F12 à la console JavaScript, aux éléments du DOM éditables, à l'éditeur de propriétés et animations CSS ainsi qu'au débuggeur de fichier JavaScript.

La nouveauté avec NodeAtlas vient de l'éditeur de CSS. Là où il vous indiquait les fichiers CSS et lignes pour vos fichiers source en CSS, il vous indique pour un fichier CSS généré avec Stylus ou Less le fichier Stylus ou Less ainsi que sa ligne.

### Debug du back-end ###

À partir de Node.js v6.6+, vous pouvez débugguer tout simplement votre code back-end dans Google Chrome. Il suffit pour cela d'utiliser l'option `--inspect` de node.

Créez vous par exemple un fichier de lancement comme celui-ci :

```javascript
require("node-start")().start()
```

puis lancez le avec la commande suivante :

```
node --inspect server.js
```

Le moteur vous communiquera alors l'url d'une page à afficher dans Chrome. Rendez-vous sur cette page afin de voir les messages de la console dans l'onglet `console`, de debugguer votre code avec la totalité des fichiers utilisés dans `source` et des tests de performance avec `profile`.

### Tests de Périphériques ###

Pour tester votre site ou application web pendant la phase de développement sur vos téléphones mobiles et tablettes il suffit de connecter votre poste de développement et ces appareils sur le même réseau local.

Par exemple, connectez tous vos appareils sur le même réseau Wifi. Puis, trouvez sur ce réseau, l'ip de votre poste de développement. Sur Windows, cela ce fait à l'aide de la commande `ipconfig` par exemple.

Une fois votre ip connu, il ne vous reste qu'à définir le hostname et le port d'écoute pour votre instance de développement NodeAtlas :

```
node-atlas --httpPort 7777 --httpHostname 192.168.1.24 --browse
```

Ce qui ouvrira votre site ici : `http://192.168.1.24:7777/`.

Il ne vous reste plus qu'à réclamer cette url depuis vos autres appareils et tester vos rendus et cas d'utilisations.

### Auto-rechargement à chaud ###

Vous pouvez vous servir du module npm [browserSync](https://browsersync.io/) ainsi que du module [Nodemon](https://nodemon.io/) pour recharger les fichiers dans le navigateur automatiquement dès que ceux-ci ont bougés dans votre environnement de développement. Il vous faut installer les modules npm `gulp`, `browserSync` et `gulp-nodemon` pour faire de l'auto-rechargement à chaud.

#### Installer les dépendances ####

Le plus simple est d'ajouter à votre `package.json` les lignes suivantes :

*package.json*

```json
{
  /* ... */
  "devDependencies": {
	"browser-sync": "2.18.x",
	"gulp": "3.9.x",
	"gulp-nodemon": "2.2.x"
  },
  /* ... */
}
```

et de lancer la commande

```bash
npm install
```

#### Créer vos configurations ####

Créez vous un fichier `server.js` (si vous n'en avez pas déjà un) et placez y (par exemple) ce code de lancement :

*server.js*

```js
require("node-atlas")().start();
```

Créez vous également un fichier `gulpfile.js` dans lequel vous mettrez ses instructions :

```js
/* jshint node: true */

/* Charger les modules */
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	nodemon = require('gulp-nodemon');

/* Dire que la première tâche après celle par défaut sera la tâche `browser-sync`. */
gulp.task('default', ['browser-sync']);

/* Dire que la tâche après `browser-sync` sera la `nodemon`. */
gulp.task('browser-sync', ['nodemon'], function() {

	/* En ce qui concerne la tâche courante nous allons
	   lancer de quoi écoutez les fichiers pour le Front. */
	browserSync.init(null, {
		proxy: "http://localhost:7777", // Ça c'est le port httpPort de la config NodeAtlas.
		files: ["views/**", "assets/**", "variations/**"], // Ça c'est tous les fichiers que vous écoutez depuis la racine.
		port: 57776, // Ça c'est le port pour le développement à chaud.
	});
});

/* Dernière tâche `nodemon`. */
gulp.task('nodemon', function (next) {
   var started = false;

	/* En ce qui concerne la tâche courante nous allons
	   lancer de quoi écoutez les fichiers pour le Back. */
	return nodemon({
		script: 'server.js', // Ceci est le script qui va être lancé.
		ext: 'js json', // Ceci sont les fichiers back que nous écoutons.
		ignore: ['gulpfile.js', 'variations/**', 'views/**', 'assets/**'] // Ceci sont les fichiers front que nous ignorons d'écouter.
	}).on('restart', function() {

		/* Quand le serveur redémarre, recharger la page courante. */
		setTimeout(function () {
			 browserSync.reload();
		}, 500);
	}).on('start', function () {

		/* Empècher Nodemon de se lancer plusieurs fois. */
		if (!started) {
			next();
			started = true;
		}
	});
});
```

#### Lancement ####

Il ne vous reste plus qu'à lancer tout ça avec la commande

```bash
gulp
```

ou vous créer une commande npm dans votre `package.json` en ajoutant cette ligne :

```json
{
  /* ... */
  "scripts": {
	/* ... */
	"watch": "gulp"
	/* ... */
  },
  /* ... */
}
```

et lancer la commande

```bash
npm run watch
```





## Environnement de Production ##

C'est bien de développer, mais il est temps de faire tourner vos réalisations sur des serveurs de production. Voici divers exemple.

> IMPORTANT : il est fortement recommandé d'utiliser l'option `"cache": true` dans le webconfig de production afin de permettre au moteur d'être optimisé ou mettre votre variable d'environnement `NODE_ENV` à `production`.

-----

> NOTE : il est possible que le proxy que vous utilisiez ne gère pas les websockets. Dans ce cas il faudra limiter le transport à `"socketServerOptions": { transports: ['polling'] }` (par défaut en l'absence de cette valeur les transports sont progressivement testé comme suit `{ transports: ['polling', 'websocket'] }`.

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
├─ node_modules/
│  ┊┉
├─ languages/
│  ┊┉
│  └─ default.json
┊┉
└─ index.js
site-hello-world/
├─ assets/
│  ┊┉
├─ views/
│  └─ index.htm
└─ webconfig.json
```

devient ceci :

```
site-hello-world/
├─ node_modules/
│  ┊┉
├─ languages/
│  ┊┉
│  └─ default.json
┊┉
├─ assets/
│  ┊┉
├─ views/
│  └─ index.htm
├─ index.js
└─ webconfig.json
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
├─ node_modules/
│  ┊┉
├─ languages/
│  ┊┉
│  └─ default.json
┊┉
├─ assets/
│  ┊┉
├─ views/
│  └─ index.htm
├─ index.js
├─ webconfig.json
└─ web.config
```

Il ne vous restera plus qu'à cliquer sur « Browse <url-of-site> » dans votre panneau d'action IIS8. Vous pouvez dès lors manager votre site (Démarrage / Arrêt / Recyclage de Pool) comme pour n'importe quelle autre application IIS8.

#### webconfig exemple ####

Un webconfig exemple pour une production :

```json
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
$ forever start </path/to/>node-atlas/ --path </path/to/your/website/directory/>
```

Pour le stopper, il faut repérer son **uid** avec la commande `forever list`

```
$ forever list
```

puis utiliser la commande :

```
$ forever stop <uid>
```

ou `<uid>` est l'**uid** du site qui tourne.


#### webconfig exemple ####

Un webconfig exemple pour une production :

```json
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

*global-server.js*

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
$ forever start </path/to/>global-server.js
```

[Plus d'informations sur Bouncy](https://github.com/substack/bouncy)





## Plus sur NodeAtlas ##

NodeAtlas est fait de tel sorte que n'importe laquelle de ses instances contienne l'intégralité des fonctions lui permettant de fonctionner. NodeAtlas délivre lui-même son objet dans les controllers via les méthodes utilisées en mode back-end avec Node.js pour vous permettre de changer ponctuellement son comportement.

### NodeAtlas VS les autres ###

|               | Type                             | Fonctions principales                   | Adapté pour                                   | Node Module Package | Liaison client | Langue principale     |
|---------------|----------------------------------|-----------------------------------------|-----------------------------------------------|---------------------|----------------|-----------------------|
| **NodeAtlas** | Framework serveur web **MVC(2)** | Simplicité, **Evolutivité**, Modularité | **Sites/Apps web**, APIs REST, **Maquettage** | Oui                 | Libre          | **Français**          |
| Express       | Bibliothèque serveur HTTP        | Routage HTTP, middleware                | Apps web simple                               | Oui                 | Non            | Anglais               |
| Hapi          | Framework serveur HTTP           | Modularité, securité                    | Apps web, APIs                                | Oui                 | Libre          | Anglais               |
| LoopBack      | Framework d'API                  | Connectivité d'Entreprise               | Apps web, APIs                                | Oui                 | Libre          | Anglais               |
| Meteor        | Platforme d'App                  | Framework front-end et back-end         | Apps web                                      | Non                 | Meteor         | Anglais               |
| Next          | Framework serveur de rendu       | Rendu serveur React préconfiguré        | Apps web                                      | Oui                 | React          | Anglais               |
| Nuxt          | Framework serveur de rendu       | Rendu serveur Vue préconfiguré          | Apps web                                      | Oui                 | Vue            | Anglais               |
| Restify       | Bibliothèque HTTP REST           | Simplicité, Routage REST                | APIs REST                                     | Oui                 | Non            | Anglais               |
| Sails         | Framework Web MVC                | Familier à Rails, MVC                   | Apps web, APIs                                | Oui                 | Libre          | Anglais               |
| Total         | Framework Web MVC                | Familier à Django, Sans dépendances npm | Apps web, APIs                                | Oui                 | jComponent     | Anglais