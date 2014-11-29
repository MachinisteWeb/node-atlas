# node-atlas #

Version : 0.25.1 (Beta)

THIS FILE IS STILL IN TRADUCTION...

**Vous êtes français ? Le README [derrière ce lien](https://haeresis.github.com/NodeAtlas/) vous sera peut-être plus agréable.**



## Overview ##

NodeAtlas is an application developed in JavaScript and running with [Node.js](http://nodejs.org/). It provides three things:

- Create and maintain a set of assets HTML / CSS / JavaScript to provide them to back-end developers.
- Create and maintain multilingual sites with no Back-end.
- Develop websites or multilingual Node.js applications of all sizes.



### Examples of websites with NodeAtlas ###

The tool is still in development and I experience it slowly with my own websites.

- [Generating and HTML template maintenance](https://github.com/Haeresis/ResumeAtlas/).
- [HTML website maintenance (no Back-end)](https://github.com/Haeresis/ResumeAtlas/).
- [Node.js website with Websocket and PopState](https://github.com/Haeresis/BookAtlas/).
- [Node.js website with MongoDB database and Redis](https://github.com/Haeresis/BlogAtlas/).
- [Simple web server for a file](https://github.com/Haeresis/SimpleAtlas/).



### Table of Contents ###

- [Overview](#overview)
 - [Examples of websites with NodeAtlas](#examples of websites with nodeatlas)
 - [Table of Contents](#table of contents)
 - [Roadmap of Development Progress](#roadmap of development progress)
 - [Documentation](#documentation)
- [Installation](#installation)
- [Start with NodeAtlas](#start with nodeatlas)
 - [Fileset](#fileset)
 - [Minimum Requirements](#minimum requirements)
 - [Run the site with NodeAtlas](#run the site with nodeatlas)
- [Different configurations of webconfig.json](#different configurations of webconfig.json)
 - [More one page](#more one page)
 - [Template shortcut](#template-shortcut)
 - [Host images, fonts, CSS, JS, etc.](#host images fonts css js etc)
 - [Manage inclusions to avoid redundancy code](#manage inclusions to avoid redundancy code)
 - [Manage variations within the same template](#manage variations within the same template)
 - [Manage Multilingual](#manage multilingual)
 - [NodeAtlas use to generate HTML assets](#nodeatlas use to generate html assets)
 - [Use NodeAtlas to run a website (Back-end Part)](#use nodeatlas to run a website back-end part)
 - [Changer les paramètres d'url.](#changer-les-param%C3%A8tres-durl)
 - [Créer ses propres variables de webconfig](#cr%C3%A9er-ses-propres-variables-de-webconfig)
 - [Gérer le routage (Url Rewriting)](#g%C3%A9rer-le-routage)
 - [Gérer les pages inexistantes](#g%C3%A9rer-les-pages-inexistantes)
 - [Gérer les redirections](#g%C3%A9rer-les-redirections)
 - [Minifier les CSS/JS](#minifier-les-cssjs)
 - [Changer les paramètres des Sessions](#changer-les-param%C3%A8tres-des-sessions)
 - [Stockage externe des Sessions](#stockage-externe-des-sessions)
 - [Autoriser/Interdire les demandes GET/POST](#autoriserinterdire-les-demandes-getpost)
 - [Changer les chevrons <% %> du moteur de template](#changer-les-chevrons---du-moteur-de-template)
 - [Changer l'url final des hostname et port d'écoute](#changer-lurl-final-des-hostname-et-port-d%C3%A9coute)
 - [Générer les urls dynamiquement](#g%C3%A9n%C3%A9rer-les-urls-dynamiquement)
- [Commandes de lancement](#commandes-de-lancement)
 - [--directory](#--directory)
 - [--webconfig](#--webconfig)
 - [--run](#--run)
 - [--httpPort](#--httpport)
 - [--generate](#--generate)
- [NodeAtlas as npm module](#nodeatlas-as-npm-module)
- [NodeAtlas comme simple serveur web](#nodeatlas-comme-simple-serveur-web)
- [Faire tourner NodeAtlas sur server](#faire-tourner-nodeatlas-sur-server)
 - [Dans un environnement Windows Server avec iisnode](#dans-un-environnement-windows-server-avec-iisnode)
 - [Dans un environnement Unix avec forever](#dans-un-environnement-unix-avec-forever)
 - [Proxy](#proxy)
- [À propos de l'architecture de NodeAtlas](#a-propos-de-l-architecture-de-nodeatlas)



### Roadmap of Development Progress ###

- Done
 - Express server used.
 - HTML mock-Generation live.
 - Full HTML Generation.
 - Configuration file (pages with URL Rewriting list).
 - Support of a part as possible Back-end (Controllers / Models).
 - Example of possible database (MySql / MongoDB / etc.).
 - Support Sessions.
 - Example of Socket.IO with handshake.
 - Support Express middleware.
 - Support personal variables webconfig.
 - Connect 2.x Migration to Connect 3.x.
 - Migration 3.x Express to Express 4.x.
 - Removing Connect 3.x.
 - Reverse-proxy Example for multiple instances on port 80.
 - Start with a NodeAtlas require() from a code file.
 - Install automatically NodeAtlas from npm.
 - Minification CSS / JS to generation.
 - Aggregation CSS / JS file via Bundles.
 - Support of a BDD session (Redis / MongoDB).
 - Quick Launch without "webconfig" just as a simple web server.
 - Routing shared via an external file.
 - Bundle shared via an external file.
 - Documentation of the API (JSDoc documentation node-atlas.js file)
 - Example of Socket.IO 1.0 with Handshake.

- Coming soon
 - Translation of README.md file in English.
 - Image compression.
 - Support Sass / Less.
 - Automatic injection inline CSS stylesheet (for email models).
 - Self-deployment via transfer (S) FTP.
 - ...



### Documentation ###

In addition to this README, you also have access to,
- [Code Explanation](https://haeresis.github.com/NodeAtlas/doc/) and,
- [Details of public function in the NA object](https://haeresis.github.com/NodeAtlas/doc/).





## Installation ##

There are several ways to install Node-Atlas:

- Download NodeAtlas from the official repository [NodeAtlas](https://haeresis.github.com/NodeAtlas).

   _Once downloaded, unzip **NodeAtlas** in the folder that will suit you._

   **Start at least once NodeAtlas with the command line `\> node </path/to/>node-atlas/node-atlas.js`, to install the _node_modules_.**

- `npm install node-atlas` (recommended for [use as a module](#nodeatlas-as-npm-module) in a project).

   _This will install **NodeAtlas** in the `node_modules/node-atlas` directory of the execution of the command._

- `npm install -g node-atlas` (recommended for [use as a module](#nodeatlas-as-npm-module) in large amount of project).

   _This will install **NodeAtlas** in the global `node_modules/node-atlas`._

- Clone the directory from [GitHub](https://github.com/Haeresis/NodeAtlas/).

   _This will install **NodeAtlas** in cloning home folder._

   **Start at least once NodeAtlas the with the command line `\> node </path/to/>node-atlas/node-atlas.js`, to install the _node_modules_.**





## Start with NodeAtlas ##

### Fileset ###

After installing NodeAtlas somewhere on your machine, you create a set of files representing a site anywhere else like structure below.


```
site-hello-world/
— templates/
—— index.htm
— webconfig.json
```

Here is the "/site-hello-world/templates/index.htm" file:

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
    </head>
    <body>
        <div>This is a Hello World!</div>
    </body>
</html>
```

and following, the "/site-hello-world/webconfig.json" file.

### Minimum Requirements ###

You can turn a simple page with minimal configuration "webconfig.json" below

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

equivalent to

```js
{ "routes": { "/": "index.htm" } }
```



### Run the site with NodeAtlas ###

#### With a command line ####

Position yourself with the prompt console in the folder "/Site-hello-world/" and run the following command.

```
\> node </path/to/>node-atlas/node-atlas.js
```

In your first run, NodeAtlas install all the "node_modules" necessary for running (if you downloaded out of npm).

Rerun.

```
\> node </path/to/>node-atlas/node-atlas.js
```

You will have access to your "Hello World" to the page: *http://localhost/* in a browser.


#### Via a JavaScript file ####

You can also use NodeAtlas as a npm module.

*server.js*

```javascript
var nodeAtlas = require("node-atlas");

nodeAtlas.init();
```

```
\> node app.js
```





## Different configurations of webconfig.json ##

### More one page ###

Below is a sample configuration.

```js
{
    "templatesRelativePath": "templates/",
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

To run this set of file:

```
templates/
— index.htm
— member.htm
— error.htm
webconfig.json
```

with the addresses:

- *http://localhost/* (responds to the root)
- *http://localhost/member.html* (will not respond if is POST requested)
- *http://localhost/member-without-extension/* (will not respond if is GET requested)
- *http://localhost/error.html* (return of the plain-text content (without markup) with a 404)

*Note : If* ***templatesRelativePath*** *is not present in "webconfig.js", template folder is* ***templates/***. ***templatesRelativePath*** *is useful only to change the name/path of directory.*



### Template shortcut ###

The configuration below is equivalent to the configuration section just above

```js
{
    "templatesRelativePath": "templates/",
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

because

```js
"about.html": "about.htm",
```

is a shortcut for

```js
"about.html": {
    "template": "about.htm"
}
```

Obviously this shortcut is used only if `template` is the only parameter to declare in the route.



### Host images, fonts, CSS, JS, etc. ###

You can also host any file on your site in a public folder. For example, with this configuration:

```js
{
    "assetsRelativePath": "assets/"
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and this set of files:

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

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/stylesheets/common.css*
- *http://localhost/javascript/common.js*
- *http://localhost/media/images/logo.png*

*Note : If* ***assetsRelativePath*** *is not present in "webconfig.js", default public folder is* ***assets/***. ***assetsRelativePath*** *is useful only to change the name/path of directory.*



### Manage inclusions to avoid redundancy code ###

You can segment your HTML codes to not repeat the redundant code such "head" part and "foot" part or any other code fragment:

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

with the following files:

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
        <h1>Welcome</h1>
        <p>This is the home page.</p>
    </div>
    
    <% include foot.htm %>
```

*templates/members.htm*

```html
    <% include head.htm %>
    
    <div>
        <h1>List of members</h1>
        <p>It is the Members page.</p>
    </div>
    
    <% include foot.htm %>
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/liste-des-membres/*

*Note : If* ***componentsRelativePath*** *is not present in "webconfig.js", default include folder is* ***components/***. ***componentsRelativePath*** *is useful only to change the name/path of directory.*



### Manage variations within the same template ###

It is possible with the same template and the same includes, generating pages with different content (useful in generation HTML assets mode). Activate the variations with the following configuration:

```js
{
    "commonVariation": "common.json",
    "variationsRelativePath": "variations/",
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

with the following files:

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
    "titleWebsite": "Website title",
    "classCssCommon": "common",
    "classJsCommon": "common"
}
```

*variations/index.json*

```js
{
    "titlePage": "Welcome",
    "classPage": "index",
    "content": "<p>This is the home page.</p>"
}
```

*variations/members.json*

```js
{
    "titlePage": "List of members",
    "classPage": "members",
    "content": "<p>It is the Members page.</p>"
}
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/liste-des-membres/*

*Note : If* ***variationsRelativePath*** *is not present in "webconfig.js", default variations folder is* ***variations/***. ***variationsRelativePath*** *is useful only to change the name/path of directory.*



### Manage Multilingual ###

#### All languages on the same site ####

On the same principle, the variations can be used to create the same page, but in different languages:

```js
{
    "languageCode": "en-gb",
    "variationsRelativePath": "languages/",
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

*Note : In this example I decided to do without a common variation file, because I did not specify* ***commonVariation***. *I also completely arbitrarily decided to rename my folder* ***variations/*** *to* ***languages/***.

with the following files:

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

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/home/*
- *http://localhost/accueil/*

*Note : By default is the* ***languageCode*** *root that determines the display language of the wesite. However, specifically by page language, we can be changed also the* ***languageCode****. *You should also know that once the site or page has a* ***languageCode*** *in the configuration, variations files must be placed in a subdirectory named with the* ***languageCode***.


#### Use only changes with the active multilingual ####

You may have noticed in the previous example that the `landing.json` file was not in the `en-gb/` or `fr-fr/`. This is quite possible and means that will be used in languages that do not have it in their file.

Also, when a `languageCode` is specified, NodeAtlas seek first hand the value in the corresponding folder file. If it was not there, so he went to fetch the parent folder (the one used as standard for variations without multilingual).

This will allow you, for example, to manage master language directly in the variation folder. So with the following example:

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

you can

- manage the version `en-gb` directly to the root of `variations/` (as NodeAtlas find nothing in` en-gb` then it uses the values of the root files) and
- manage the `fr-fr` release in the` fr-fr / `,

thus, if a sentence has not yet translated into a file `fr-fr`, instead of returning an error, NodeAtlas return the root version or the version` en-gb`.


#### Each language has its configuration ####

You can also choose to configure each language in a "webconfig.json" different. With the following set of file:

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

you could have "webconfig.json» next:

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
    "urlRelativeSubPath": "/english",
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
    "urlRelativeSubPath": "/francais",
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

and have access to addresses:

- *http://localhost/*
- *http://localhost:81/english/*
- *http://localhost:81/english/*
- *http://localhost:81/english/members-list/*
- *http://localhost:82/francais/*
- *http://localhost:82/francais/liste-des-membres/*

It is then possible to reverse proxy with [Bouncy](#proxy) (for example) to bring all urls on port 80 to obtain:

- *http://www.website.ext/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/members-list/*
- *http://www.website.ext/francais/*
- *http://www.website.ext/francais/liste-des-membres/*



### NodeAtlas use to generate HTML assets ###

#### Generate HTML assets ####

With the following configuration it is possible to generate HTML rendering assets of each page in a linked file. The file will be (re)created every display of page in your browser.

```js
{
    "autoGenerate": true,
    "generatesRelativePath": "generate/",
    "routes": {
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

and the following set of files:

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

can physically create assets:

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

by going to the address:

- *http://localhost/*
- *http://localhost/liste-des-membres/*

The generation starts when displaying the page if ***autoGenerate*** exist and if it is ***true***. If it is passed ***false*** (or removed) the only way to generate all the pages of the website will be via the command `node </path/to/>node-atlas/server.js --generate` will generate all pages once. Of course in all cases this command work and allow you to regenerate all pages after a change into all page (a change in a component called on all pages e.g.).

*Note : If* ***generatesRelativePath*** *is not present in "webconfig.js", default generates folder is* ***generates/***. ***generatesRelativePath*** *is useful only to change the name/path of directory.*


#### Generate website without server side ####

You can also manager a simple HTML website page with the following configuration:

```js
{
    "languageCode": "fr-fr",
    "indexPage": true,
    "autoGenerate": true,
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

and the following set of files:

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

To address *http://localhost/* will show a list of pages your site components (with **indexPage** set to **true**).

It will do more than, once your work is done, enjoy your HTML site in the folder:

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



### Use NodeAtlas to run a website (Back-end Part) ###

You can either use a single controller for the whole site and/or also by controllers template and variation.

For the master controller, use this configuration example:

```js
{
    "commonController": "common.js",
    "controllersRelativePath": "controllers/",
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

with this set of files

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

And "common.js" file containing e.g.:

- Things for load additional modules NodeAtlas.
- Things for configure additional modules.

```js
// Creating a global object for file.
var website = {};



/*******************/
/* Loading modules */
/*******************/

(function (publics) {
    "use strict";

    // Load modules for this site in the NodeAtlas object.
    publics.loadModules = function (NA) {
        // Associations of each module to access it anywhere.
        NA.modules.cookie = require('cookie');
        NA.modules.mongoose = require('mongoose');

        // Go for a specific module in the `node_modules` website.
        NA.modules.socketio = require(NA.websiteModulesPath + 'socket.io');

        // Go for a specific module in the `node_modules` NodeAtlas the engine.
        NA.modules.ejs = require(NA.nodeAtlasModulesPath + 'ejs.io');

        // Re-injection of the object "NodeAtlas" overloaded the motor.
        return NA;
    };

}(website));



/***********************/
/* Configuring Modules */
/***********************/

(function (publics) {
    "use strict";

    var privates = {};

    // Example of using MongoDB and Mongoose.
    privates.mongooseInitialization = function (mongoose, callback) {
        // "blog" database connection.
        mongoose.connect('mongodb://127.0.0.1:27017/blog', function (error) {
            if (error) {
                console.log("Database '" + address + "' is not accessible.");
                process.kill(process.pid);
            };

            // Next.
            callback(mongoose);
        });
        
        // Connection Management.
        mongoose.connection.on('error', function (error) {
            console.log('Error to connect by default Mongoose: ' + error);
        });

        // Disconnection Management.
        mongoose.connection.on('disconnected', function () {
            console.log('Disconnection of Mongoose.');
        });
        process.on('SIGINT', function (error) {
            mongoose.connection.close(function () {
                console.log('Disconnection of Mongoose because of app termination');
                process.exit(0);
            });
        });
    };

    // Mongoose Schemas Management.
    privates.mongooseSchemas = function (mongoose) {
        publics.schema = {};

        // Load Schemas.
        publics.schema.article = require('../models/Article');
        publics.schema.category = require('../models/Category');

        // Expose Schemas.
        mongoose.model('article', website.schema.article, 'article');
        mongoose.model('category', website.schema.category, 'category');
    };

    // Example using Socket.IO.
    privates.socketIoInitialisation = function (socketio, NA, callback) {
        var optionIo = (NA.webconfig.urlRelativeSubPath) ? { path: NA.webconfig.urlRelativeSubPath + '/socket.io' } : undefined,
            io = socketio(NA.server, optionIo),
            cookie = NA.modules.cookie,
            cookieParser = NA.modules.cookieParser;

        // Synchronizing sessions with Socket.IO.
        io.use(function(socket, next) {
            var handshakeData = socket.request;

            // Fallback if cookies are not supported.
            if (!handshakeData.headers.cookie) {
                return next(new Error('Session cookie required.'));
            }

            // Transformation of the cookie String to JSON object.
            handshakeData.cookie = cookie.parse(handshakeData.headers.cookie);

            // Verification of the signature of the cookie.
            handshakeData.cookie = cookieParser.signedCookies(handshakeData.cookie, NA.webconfig.session.secret);

            // Keep worn the Session ID.
            handshakeData.sessionID = handshakeData.cookie[NA.webconfig.session.key];

            // Accept the cookie.
            NA.sessionStore.load(handshakeData.sessionID, function (error, session) {
                if (error || !session) {
                    return next(new Error('No recovered session.'));
                } else {
                    handshakeData.session = session;                    
                    next();
                }
            });
        });

        // Next.
        callback(io);
    };

    // Adding listener for a specific controller "index.js" (see example in the next file).
    privates.socketIoEvents = function (io, NA) {
        var params = {};

        params.io = io;
        params.NA = NA;

        // Event for the index page (see example in the next file).
        require('./index').asynchrone(params);
    };

    // Configuration of all modules.
    publics.setConfigurations = function (NA, callback) {
        var mongoose = NA.modules.mongoose,
            socketio = NA.modules.socketio;

        // Initialize Mongoose.
        privates.mongooseInitialization(mongoose, function (mongoose) {

            // Schemas injection into Mongoose.
            privates.mongooseSchemas(mongoose);

            // Initialize Socket IO.
            privates.socketIoInitialisation(socketio, NA, function (io) {

                // Socket IO listening.
                privates.socketIoEvents(io, NA);

                // Re-injection of the object "NodeAtlas" overloaded the motor.
                callback(NA);                   
            });
        });

    };

}(website));



/****************************/
/* Variations interception. */
/****************************/

(function (publics) {
    "use strict";

    // It occurs just before the complete assembly EJS.
    publics.preRender = function (params, mainCallback) {
        var variation = params.variation;

        // Here variations variables are modified.
        // see example in the file after.

        // We re-injects the changes.
        mainCallback(variation);
    };

}(website));



/**********************************************************/
/* Interception of the HTML output for server-side jQuery */
/**********************************************************/

(function (publics) {
    "use strict";

    // It comes just before the HTML response to the client.
    publics.render = function (params, mainCallback) {
        var data = params.data;

        // Here one can manipulate the DOM before response to the client.
        // see example in the file after.

        // We re-injects the changes.
        mainCallback(data);
    };

}(website));



/********************************************/
/* Expose function for the NodeAtlas engine */
/********************************************/

exports.loadModules = website.loadModules;
exports.setConfigurations = website.setConfigurations;
exports.preRender = website.preRender;
exports.render = website.render;
```

Instead of using `preRender` and `render` in the file common.js effective for the whole website page, you can use specific controllers page. The previous configuration becomes:

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

with this set of files:

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

with a "index.js" file containing, for example:

- Things for dynamically change the front display.
- Things for changes on the server side with jQuery.
- Things for asynchronous exchanges with Socket.IO.

```js
var website = {};



/***************************/
/* Variations Interception */
/***************************/

(function (publics) {
    "use strict";

    var privates = {};

    // Charging a function or set of functions.
    privates.listOfArticles = require('./modules/list-of-articles');

    // It occurs just before the complete assembly EJS.
    publics.preRender = function (params, mainCallback) {
        var variation = params.variation,
            mongoose = params.NA.modules.mongoose,
            Article = mongoose.model('article');


        // Can intercept all the variables of "variations/common.js".
        console.log(variation.common.title); // Return title stored in « variations/common.js ».
        variation.common.title = "New Title"; // Set title.
        console.log(variation.common.title); // Return "New Title" and is accessible in template side via `<%= common.title %>`. 

        // Can intercept all the variables of "variations/index.js" (because this file correspond to specific "index.js").
        variation.specific.title = "New Title"; // Return "New Title" and is accessible in template side via `<%= specific.title %>`. 
        variation.specific.newProperty = "New Property"; // Defined a property does not exist in the original variation file that is accessible in template side via « <%= specific.newProperty ».

        // Can intercept the configuration of the current page
        console.log(variation.currentRoute) // Return « / » for « index.js », « /categories/ » for categories.js, « /categories/:category/ » for « category-detail.js », etc.

        // A test is made on a variable created in the webconfig.
        if (variation.webconfig._websiteIsClosed) {
            // The page is a 404.
            variation.currentRouteParameters.statusCode = 404;
        } else {
            // The page is a 200.
            variation.currentRouteParameters.statusCode = 200;
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

}(website));



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

        // Dès qu'on a un lien valide entre le client et notre back,
        io.sockets.on('connection', function (socket) {
            var sessionID = socket.request.sessionID,
                session = socket.request.session;

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

}(website));



/***********************************************************/
/* Interception de la sortie HTML pour jQuery côté serveur */
/***********************************************************/

exports.preRender = website.preRender;
exports.render = website.render;
exports.asynchrone = website.asynchrone; // Utilisé non pas par « NodeAtlas » mais par « common.js » (voir fichier précédent).
```

*Note : Si* ***controllersRelativePath*** *n'est pas présent dans « webconfig.js », par défaut le dossier des controlleurs est bien* ***controllers/***. ***controllersRelativePath*** *est donc utile seulement pour changer le nom/chemin du répertoire.*



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
    "urlRelativeSubPath": "/sub/folder",
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

Bien que vous puissiez paramétrer des urls statiques, vous pouvez également paramétrer une écoute d'url dynamique !

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

Pour afficher une page personnalisée quand une ressource n'est pas trouvée il faut :

1. Préparer une page 404.
2. Remplir le paramètre `pageNotFound` avec comme `value` la `key` de la page 404 préparée.

Voyez l'exemple ci-dessous :

```js
{
    "pageNotFound": "/pages-inexistantes/",
    "routes": {
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



### Minifier les CSS/JS ###

Vous pouvez automatiquement générer des fichiers CSS et JS minifiés et offusqués en créant des Bundles en référençant les groupes de fichiers d'entré par leur chemin d'accès et le chemin du fichier de sortie. Vous pouvez bien entendu en faire autant que vous le souhaité. La gérération des fichiers ce fait à chaque démarrage de NodeAtlas que ce soit en tant que serveur ou via la commande `--generate` pour peut qu'un Bundle existe dans le Webconfig.

#### Créer des Bundles ####

Avec la configuration suivante :

```js
{
    "bundles": {
        "javascript": {
            "files": {
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
            }
        },
        "stylesheets": {
            "files": {
                "stylesheets/common.min.css": [
                    "stylesheets/common.css",
                    "stylesheets/common-min780.css",
                    "stylesheets/common-min1160.css"
                ]
            }
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
— stylesheets
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript
—— javascript/modernizr.js
—— javascript/yepnot.js
—— javascript/html5Shiv.js
—— javascript/jquery.js
—— javascript/jquery-ui.js
—— javascript/prettify.js
—— javascript/prettify/run_prettify.js
—— javascript/components/extended-format-date.js
—— javascript/common.js
templates/
— index.htm
webconfig.json
```

vous obtiendrez les nouveau fichiers suivant :

```
assets/
— stylesheets
—— stylesheets/common.min.css
— javascript
—— javascript/boot.min.js
—— javascript/framework.min.js
—— javascript/common.min.js
templates/
— index.htm
webconfig.json
```

#### Désactiver des Bundles ####

Il est également possible de ne pas executer la minification au démarage d'un site web avec NodeAtlas avec les propriétés `enable: false` dans chaque type de Bundle.

```js
{
    "bundles": {
        "javascript": {
            "enable": false,
            "files": {
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
            }
        },
        "stylesheets": {
            "enable": false,
            "files": {
                "stylesheets/common.min.css": [
                    "stylesheets/common.css",
                    "stylesheets/common-min780.css",
                    "stylesheets/common-min1160.css"
                ]
            }
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

#### Bundles dans un fichier partagé ####

Afin de ne pas ré-écrire une longue liste de configuration de Bundles dans un fichier `webconfig.json` à destination de votre environnement de développement et `webconfig.prod.json` à destination de votre environnement de production, vous pouvez mutaliser la déclaration des routes dans un fichier de votre choix. Par convention, c'est le fichier `bundles.json`. 

Par exemple :

L'ensemble de fichier suivant

```
assets/
— stylesheets
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript
—— javascript/modernizr.js
—— javascript/yepnot.js
—— javascript/html5Shiv.js
—— javascript/jquery.js
—— javascript/jquery-ui.js
—— javascript/prettify.js
—— javascript/prettify/run_prettify.js
—— javascript/components/extended-format-date.js
—— javascript/common.js
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
            "enable": false,
            "files": {
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
            }
        },
        "stylesheets": {
            "enable": false,
            "files": {
                "stylesheets/common.min.css": [
                    "stylesheets/common.css",
                    "stylesheets/common-min780.css",
                    "stylesheets/common-min1160.css"
                ]
            }
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
            "enable": false,
            "files": {
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
            }
        },
        "stylesheets": {
            "enable": false,
            "files": {
                "stylesheets/common.min.css": [
                    "stylesheets/common.css",
                    "stylesheets/common-min780.css",
                    "stylesheets/common-min1160.css"
                ]
            }
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
— stylesheets
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript
—— javascript/modernizr.js
—— javascript/yepnot.js
—— javascript/html5Shiv.js
—— javascript/jquery.js
—— javascript/jquery-ui.js
—— javascript/prettify.js
—— javascript/prettify/run_prettify.js
—— javascript/components/extended-format-date.js
—— javascript/common.js
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
        "enable": false,
        "files": {
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
        }
    },
    "stylesheets": {
        "enable": false,
        "files": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    }
}
```

*Note : cette fois il est possible de désactiver les Bundles en ne les incluant pas dans le `webconfig` en question.*



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

NodeAtlas utilise également un objes de stockage mémoire (MemoryStore) qui stoques les informations dans la RAM du serveur.

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

Par exemple, pour inclure une partie de fichier on utilise l'instruction ***<% include head.htm %>***. Il serait possible de le faire avec ***{{ include head.htm }}*** avec la configuration ci-dessous :

```js
{
    "templateEngineOpenPattern": "{{",
    "templateEngineClosePattern": "}}",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

Pour tout savoir sur les possibilités du moteur de template consulter la documentation [ejs](https://github.com/visionmedia/ejs)

*Note : Si rien n'est précisé,* ***templateEngineOpenPattern*** *et* ***templateEngineClosePattern*** *valent respectivement* ***<%*** *et* ***%>***.



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
    "urlRelativeSubPath": "/sub/folder",
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
<a href="<%= urlBasePathSlice %><%= webconfig.routes.home.url %>">Lien vers l'accueil</a>
<a href="<%= urlBasePathSlice %><%= webconfig.routes.contact.url %>">Lien pour nous contacter</a>
<!-- ... -->
```

   *Note : `urlBasePathSlice` renvoyant `http://localhost` au lieu de  `http://localhost/` ou encore `http://localhost:7777/sub/folder` au lieu de `http://localhost:7777/sub/folder/`.*



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




## NodeAtlas as npm module ##

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

*Note : seul les commandes `--webconfig`, `--run`, `--directory` et `--httpPort` fonctionnent dans ce mode.*





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
    "routes": {
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

Tous les messages d'erreurs se trouvent dans `/languages/default.json`. Si vous souhaitez les modifier, il suffit de dupliquer le fichier `default.json` et de le renommer en `fr-fr.json`, et de modifier la langue de l'original.

Pour finir [l'appoche publics/privates de l'architecture est expliqué dans cette article](http://blog.lesieur.name/structurer-le-javascript-de-son-site-avec-ou-sans-framework/).