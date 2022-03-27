# node-atlas #

[![Donate](https://img.shields.io/badge/don-%3C3-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://travis-ci.org/Haeresis/node-atlas.svg)](https://travis-ci.org/Haeresis/node-atlas/) [![Package npm](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-6.0%2C_last-brightgreen.svg)](https://nodejs.org/en/) [![Chat for Help](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/NodeAtlas/Help)

**Vous êtes français ? Le README [derrière ce lien](README.fr.md) vous sera peut-être plus agréable.**





## Overview ##

NodeAtlas is an MVC(2) JavaScript Server-Side Framework as an [npm module](https://www.npmjs.com/package/node-atlas) (the [node-atlas](https://www.npmjs.com/package/node-atlas) module) and designed to run with [Node.js](https://nodejs.org/). NodeAtlas allows you to:

- Create, maintain and run internationalized websites without using a single JavaScript server file. That's it's perfect for beginners and for developing brand website or single web app with high performance quickly.

	> Exemple : [Simple Web Page](https://bruno.lesieur.name/) or [Scrollable OnePage](http://www.impaakt.com/).

- Create, maintain and document a set of assets HTML / CSS / JavaScript user interfaces to provide solid guidelines for the realization of website or webapp (i.e. for brands) on create serverless website (i.e. for GitHub Pages).

	> Exemple : [Pages, Componants and Web Interface Documentation](https://www.lesieur.name/doc-atlas/) or [the official NodeAtlas website](https://node-atlas.js.org/english/).

- Develop Node.js internationalized websites, scalable [Node.js](https://nodejs.org/) applications or distant APIs running of all sizes with server-based source code for high performance, indexability for SEO and W3C compliance. Distant REST APIs are also easy to create.

	> Exemple : [Blog](https://blog.lesieur.name/), [Portfolio](https://www.lesieur.name/), [Website](https://www.coup-critique.com/) or [Distant API](https://www.lesieur.name/api/).



### Why NodeAtlas? ###

NodeAtlas is designed to create scalable websites and to allow front-end and back-end developers to embrace [Node.js](https://nodejs.org/en/) and offer an easy learning curve.

Starting with a single HTML page,

- then create other pages,
- then internationalize them,
- then minify/obfuscate/optimized your sources,
- then use preprocessor like [Stylus](http://stylus-lang.com/), [Less](http://lesscss.org/) or [Pug](https://pugjs.org/api/getting-started.html) easily,
- then use files for drive back-end part with code with hooks and [Express](http://expressjs.com/),
- then use [Socket.IO](https://socket.io/) for server-side reactivity and real-time exchanges,
- then connect you to [MySQL](https://www.mysql.com/), [MongoDB](https://www.mongodb.com/), [ElasticSearch](https://www.elastic.co/)...,
- then use [Vue](https://vuejs.org/) or [React](https://facebook.github.io/react/) for isomorphism and client-side reactivity,
- then be component-based and/or service-oriented with projects like [ComponentAtlas](https://github.com/MachinisteWeb/ComponentAtlas) and/or [ApiAtlas](https://github.com/MachinisteWeb/ApiAtlas),
- then let your customer edit website itself with [EditAtlas](https://github.com/MachinisteWeb/EditAtlas)
- then create plugins,
- then...



### Others Frameworks? ###

In opposition to others client-side JavaScript frameworks like Vue, Angular or React, NodeAtlas run server-side and provide some real URLs by HTTP response. Websites are indexable and W3C compliant, that means each page is constructed by HTTP response and after by asynchronous (AJAX, Websocket...) mechanisms. So, NodeAtlas is not an alternative to others client-side JavaScript frameworks that only use [Node.js](https://nodejs.org/en/) for use after [npm](https://www.npmjs.com/), [jspm](http://jspm.io/), [gulp](http://gulpjs.com/), etc. So, NodeAtlas is same as Sails or Meteor. And that means NodeAtlas is a substituent to PHP, Java or C# server-side. In the same way as [Meteor](https://www.meteor.com/), NodeAtlas allow you to set your working environment and you have not need of [gulp](http://gulpjs.com/) but by an opposition of [Meteor](https://www.meteor.com/), the `NA` object is not provided client-side by default. It's your responsibility to spread server-side mechanism to client-side.

To comparate NodeAtlas with others JavaScript Server-side library / framework / API, [you could check this grid](#nodeatlas-vs-others).



### Examples of creation ###

You'll find a list of GitHub repositories provided by NodeAtlas community to analyze and understand how NodeAtlas works:

- [All examples provided by NodeAtlas GitHub Communauty](https://github.com/NodeAtlas).





### Table of Contents ###

- [Overview](#overview)
 - [Why NodeAtlas](#why-nodeatlas)
 - [Others Frameworks?](#others-frameworks)
 - [Examples of creation](#examples-of-websites)
 - [Table of Contents](#table-of-contents)
 - [Documentation](#documentation)
 - [Contributing](#contributing)
- [Installation](#installation)
 - [Install NodeAtlas](#install-nodeatlas)
 - [Install Node.js](#install-nodejs)
- [Get Started](#get-started)
 - [Fileset](#fileset)
 - [Minimum Requirements](#minimum-requirements)
 - [Run the Website](#run-the-website)
 - [Hello World Skeleton](#hello-world-skeleton)
- [View Part](#view-part)
 - [Routing](#routing)
 - [Assets](#assets)
 - [Partial Files](#partial-files)
 - [Variations](#variations)
 - [Internationalization (i18n)](#internationalization-i18n)
 - [URL Values](#url-values)
 - [Webconfig Variables](#webconfig-variables)
 - [Global Layout](#global-layout)
 - [Public Files](#public-files)
 - [Static Generate Files](#static-generate-files)
 - [Template Engines](#template-engines)
- [Controller Part](#controller-part)
 - [Lifecycle](#lifecycle)
 - [`changeVariations` Hook](#changevariations-hook)
 - [`changeDom` Hook](#changedom-hook)
 - [`setSockets Hook](#setsockets-hook)
 - [`setModules Hook](#setmodules-hook)
 - [`setConfigurations Hook](#setconfigurations-hook)
 - [`setSessions Hook](#setsessions-hook)
 - [`setRoutes` Hook](#setroutes-hook)
 - [Websockets Exchanges](#websockets-exchanges)
 - [Middlewares](#middleware)
- [Tools Part](#tools-part)
 - [Minify CSS / JS](#minify-css--js)
 - [CSS generation with Less](#css-generation-with-less)
 - [CSS generation with Stylus](#css-generation-with-stylus)
 - [Optimize Images Files](#optimize-images-files)
 - [CSS Inline Injection](#css-inline-injection)
- [Advanced Part](#advanced-part)
 - [Page Not Found](#page-not-found)
 - [Dynamic Routing](#dynamic-routing)
 - [Programmatic Routing](#programmatic-routing)
 - [Redirects](#redirects)
 - [HTTP Headers](#http-headers)
 - [Dynamic Configuration](#dynamic-configuration)
 - [HTTPs](#https)
 - [GET / POST](#get--post)
 - [PUT / DELETE](#put--delete)
 - [CORS and OPTIONS](#cors-and-options)
 - [Settings of Sessions](#settings-of-sessions)
 - [Storage Sessions](#storage-sessions)
 - [Listening URL](#listening-url)
 - [Dynamic URLs](#dynamic-urls)
 - [Custom Template Engine](#custom-template-engine)
 - [No view](#no-view)
 - [Cache](#cache)
 - [SQL Database](#sql-database)
 - [NoSQL Database](#nosql-database)
 - [Isomorphic App](#isomorphic-app)
- [Webconfig's Anatomy](#webconfigs-anatomy)
- [CLI / Running commands](#cli--running-commands)
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
- [API / NodeAtlas as npm module](#api--nodeatlas-as-npm-module)
 - [&lt;NA>.start()](#nastart)
 - [&lt;NA>.init(options)](#nainitoptions)
 - [&lt;NA>.run(options)](#narunoptions)
 - [&lt;NA>.started(callback)](#nastartedcallback)
 - [&lt;NA>.stopped(callback)](#nastoppedcallback)
 - [&lt;NA>.generated(callback)](#nageneratedcallback)
 - [&lt;NA>.created(callback)](#nacreatedcallback)
- [NodeAtlas as a simple web server](#nodeatlas-as-a-simple-web-server)
- [Development Environment](#development-environment)
 - [Front-end Debug](#front-end-debug)
 - [Back-end Debug](#back-end-debug)
 - [Devices Tests](#devices-tests)
 - [Hot Reloading](#hot-reloading)
- [Production Environment](#production-environment)
 - [In a Windows Server environment with iisnode](#in-a-windows-server-environment-with-iisnode)
 - [In a Unix environment with forever](#in-a-unix-environment-with-forever)
 - [In a Unix environment with NGINX](#in-a-unix-environment-with-nginx)
 - [Proxy](#proxy)
- [More About NodeAtlas](#more-about-nodeatlas)
 - [NodeAtlas vs. Others](#nodeatlas-vs-others)



### Documentation ###

In addition to this documentation, you also have access to,
- [tl;dr](https://www.npmjs.com/package/node-atlas),
- [details of functions in the NA object](https://node-atlas.js.org/doc/node-atlas/) and you could
- [discuss on chat and ask assistance for NodeAtlas](https://gitter.im/NodeAtlas/Help).



### Contributing ###

If you would like to contribute with:

 - Code enhancements and fixes,
 - French correct spelling mistake or
 - Decent English translation

Please do the following:

 1. Fork the NodeAtlas repository.
 2. Hack on a separate topic branch created from the latest master.
 3. Commit and push the topic branch.
 4. Make a pull request.
 5. Be patient. ;-)

Please note that modifications should follow these coding guidelines:

- [Pass Sonarqube JS with rank A](http://www.sonarqube.org/) : Bugs, Vulnerabilities, and Debt Ratio.

Thank you for helping out!





## Installation ##

Before install NodeAtlas, install [Node.js](https://nodejs.org/), we will see this in the section : [Install Node.js](#install-nodejs) bellow.

### Install NodeAtlas ###

*Note: With Linux, add `sudo` before all commands if you're not logged with root user.*

There are several ways to install NodeAtlas:

- **With npm, into project directory** with the following command:

	> `npm install node-atlas`

	*This will install* NodeAtlas *in the « node_modules/node-atlas/ » directory of the execution of the command. Recommended for [use as a module](#api--nodeatlas-as-npm-module) in a project*

- **With npm, into global modules directory** with the following command:

	> `npm install -g node-atlas`

	*This will install* NodeAtlas *in the global « node_modules/node-atlas/ ». Recommended for [use as a module](#api--nodeatlas-as-npm-module) in large amount of project or for [a command line utilisation](#cli--running-commands).*

- **Clone the directory** from [GitHub](https://github.com/NodeAtlas/node-atlas) official repository.

	> `git clone https://github.com/NodeAtlas/node-atlas.git`

	*This will install* NodeAtlas *in your local repository.*

	*Use `npm install` command from `</path/to/>node-atlas/` directory to install all dependencies. Recommended for participating to project.*

- Download NodeAtlas from the official repository [NodeAtlas](https://node-atlas.js.org/).

	*Once downloaded, unzip* NodeAtlas *in the « node_modules/ » folder that will suit you.*

	*Use `npm install` command from `</path/to/>node-atlas/` directory to install all dependencies.*



### Install Node.js ###

NodeAtlas is developed as a [Node.js Module Package](https://www.npmjs.com/) that means it require Node.js to work. Node.js allows us to quickly and efficiently run JavaScript code outside the browser, making it possible to use the same language on both the client-side and server-side.

*Note: Python 2.6 or 2.7 is required to build from source tarballs.*

#### Install on Windows ####

Using a package:

- [Download Windows Installer](https://nodejs.org/en/download/).

Using [chocolatey](http://chocolatey.org/) to install Node.js:

```bash
cinst nodejs
```

or for full install with `cinst`:

```bash
cinst nodejs.install
```

#### Install on OSX ####

Using a package:

- [Download Macintosh Installer](https://nodejs.org/en/download/).

Using [homebrew](https://github.com/mxcl/homebrew):

```bash
brew install node
```

Using [macports](http://www.macports.org/):

```bash
port install nodejs
```

#### Install on Linux ####

Using a package:

- [Download Linux Binaries](https://nodejs.org/en/download/).

Example install with `apt-get`:

```bash
sudo apt-get install python-software-properties python g++ make
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

There is a naming conflict with the `node` package (Amateur Packet Radio Node Program), and the Node.js binary has been renamed from `node` to `nodejs`. You'll need to symlink `/usr/bin/node` to `/usr/bin/nodejs` or you could uninstall the Amateur Packet Radio Node Program to avoid that conflict.





## Get Started ##

An NodeAtlas instance is configuration-driven with `webconfig.json`. All NodeAtlas website has it, that turn the engine from « Simple Web Server » to « NodeAtlas Web Server ».

NodeAtlas isn't a standard MVC hierarchy. One of is particularity is the capability of the controller to render the view without any development from you.

We will start with a how-to set minimal files to perform a "Hello World!".

### Fileset ###

After installing NodeAtlas, you can create a set of files representing a site in the folder of your choice. In the example below, we will use `hello-world` directory:

```txt
hello-world/
├─ views/
│  └─ index.htm
└─ webconfig.json
```

We will display to the HTTP address the content of the `views/index.htm` file:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>Hello world</title>
	</head>
	<body>
		<div>This is a Hello World!</div>
	</body>
</html>
```

See just below following, the content of `webconfig.json` file.

### Minimum Requirements ###

You can turn a simple page with minimal configuration `webconfig.json` below :

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

equivalent to

*webconfig.json*

```json
{ "routes": { "/": "index.htm" } }
```



### Run the Website ###

#### With the `node-atlas` command line ####

**If you have installed NodeAtlas with `npm install -g node-atlas`** you can use the `node-atlas` command. `node-atlas` is a alias for the command `node </path/to/globals/>node_modules/node-atlas/`.

> *Note: you can also use the `atlas` command which is an alias of `node-atlas` for writing it more simply.*

Position yourself with the prompt console in the folder `hello-world/` and run the following command.

```bash
$ node-atlas
```

> Note: if your port 80 is in use or if you don't have the privilege to access it, you can use the `--httpPort` options.

>  ```bash
$ node-atlas --httpPort 8080
```

> or use the webconfig option `httpPort`

> ```json
{
	"httpPort": 8080,
	"routes": { "/": "index.htm" }
}
```

You will have access to your "Hello World" to the page: `http://localhost/` in a browser (or `http://localhost:8080/`).


#### Via a JavaScript file ####

You can also use NodeAtlas as an npm module.

So, create a `server.js` file into the same folder of `webconfig.json`.

*server.js*

```javascript
require("node-atlas")().start();
```

Then run the file with Node.js.

```bash
$ node server.js
```



### Hello World Skeleton

It's also possible to get an app already create with some features already implemented. We study them later but for now just use `--create` command to test that and copy a skeleton app:

```bash
$ node-atlas --create hello-world
```

and Start!

```bash
$ node-atlas --browse
```





## View Part ##

NodeAtlas works with a configuration with the usage of `webconfig.json` that allows its to scale and upgrade possibilities in a versatile way. For example, to create a website without JavaScript server-side (no controller), just add a `view` parameter to each route.

It's still possible to use JavaScript inline into views with the capabilities offered by template engine [EJS](http://ejs.co/) used by NodeAtlas by default.

We will see all possibilities with couples of view files together.



### Routing ###

To display the content of a file behind an URL, we will register to the `webconfig.json` some files. The accès address to this files are called routes, and the content of this routes is called a page.

#### More One Page ####

Below is a sample configuration of `webconfig.json` for many pages.

```json
{
	"viewsRelativePath": "views",
	"routes": {
		"/": {
			"view": "index.htm"
		},
		"/member.html": {
			"view": "member.htm",
			"post": false
		},
		"/member-without-extension/": {
			"view": "member.htm",
			"get": false
		},
		"about.html": {
			"view": "about.htm"
		},
		"/error.html": {
			"view": "error.htm",
			"statusCode": 404,
			"mimeType": "text/plain"
		}
	}
}
```

To run this set of file:

```txt
├─ views/
│  ├─ about.htm
│  ├─ error.htm
│  ├─ index.htm
│  └─ member.htm
└─ webconfig.json
```

with the addresses:

- `http://localhost/` (responds to the root),
- `http://localhost/member.html` (will not respond if is POST requested),
- `http://localhost/member-without-extension/` (will not respond if is GET requested),
- `http://localhost/about.html` (return « Cannot GET about.html » because route path  __must__ start by `/` to be referenced),
- `http://localhost/error.html` (return of the plain-text content (without markup) with a 404).

*Note: if* `viewsRelativePath` *is not present in `webconfig.json`, views folder is* `views`. `viewsRelativePath` *is useful only to change the name/path of directory.*

#### Route Shortcut ####

The configuration below is equivalent to the configuration section just above

```json
{
	"viewsRelativePath": "views",
	"routes": {
		"/": "index.htm",
		"/member.html": {
			"view": "member.htm",
			"post": false
		},
		"/member-without-extension/": {
			"view": "member.htm",
			"get": false
		},
		"about.html": "about.htm",
		"/error.html": {
			"view": "error.htm",
			"statusCode": 404,
			"mimeType": "text/plain"
		}
	}
}
```

because

```json
"/": "index.htm",
```

is a shortcut for

```json
"/": {
	"view": "index.htm"
}
```

Obviously, this shortcut is used only if `view` is the only parameter to declare in the route.

#### Order routes ####

It's also possible to place routes into an array, that allows you to ordinate routes for an advanced usage in controllers section.

In this case, the path becomes the `url` parameter.

```json
{
	"viewsRelativePath": "views",
	"routes": [{
		"url": "/",
		"view": "index.htm"
	}, {
		"url": "/member.html",
		"view": "member.htm",
		"post": false
	}, {
		"url": "/member-without-extension/",
		"view": "member.htm",
		"get": false
	}, {
		"url": "about.html",
		"view": "about.htm"
	}, {
		"url": "/error.html",
		"view": "error.htm",
		"statusCode": 404,
		"mimeType": "text/plain"
	}]
}
```

#### Routing in a shared file ####

In order to not rewrite a long route list in `webconfig.json` file to your development environment and `webconfig.prod.json` to your production environment, you can group route in a file of your choice. By convention, the name is `routes.json` file.

For example:

The following set of file

```txt
├─ views/
│  └─ index.htm
├─ webconfig.json
└─ webconfig.prod.json
```

with `webconfig.json`

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

and with `webconfig.prod.json`

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

could be the following set of file

```txt
├─ views/
│  └─ index.htm
├─ routes.json
├─ webconfig.json
└─ webconfig.prod.json
```

with `webconfig.json`

```json
{
	"httpPort": 7777,
	"routes": "routes.json"
}
```

with `webconfig.prod.json`

```json
{
	"httpPort": 7776,
	"httpHostname": "blog.lesieur.name",
	"urlPort": 80,
	"routes": "routes.json"
}
```

and `routes.json`

```json
{
	"/": {
		"view": "index.htm"
	}
}
```

*Note: you can create multiple route file as `routes.en.json` and `routes.fr.json` and associate each of them in a set of webconfig parameterize to run a website in various languages.*



### Assets ###

You can host any file on your site in a public folder like images, fonts, styles, scripts, etc.. For example, with this configuration:

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

and this set of files:

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

you will have access to the addresses:

- `http://localhost/`
- `http://localhost/stylesheets/common.css`
- `http://localhost/javascripts/common.js`
- `http://localhost/media/images/logo.png`

*Note: if* `assetsRelativePath` *is not present in `webconfig.json`, default public folder is* `assets`. `assetsRelativePath` *is useful only to change the name/path of directory.*

#### maxAge, Etag, etc. ####

It's possible to manage HTTP headers provided when public resources are requested (like `maxAge`, `Etag`, etc.) via the `staticOptions` property in webconfig. For more information, see the [Express](http://expressjs.com/en/api.html) documentation about static files.



### Partial Files ###

You can segment your HTML codes to not repeat the redundant code such "head" part and "foot" part or any other code fragment (don't worry, we will see later how to manage a mater page with `head` and `body` tags including opening and closing part into the same file).

*webconfig.json*

```json
{
	"routes": {
		"/": {
			"view": "index.htm"
		},
		"/list-of-members/": {
			"view": "members.htm"
		}
	}
}
```

with the following files:

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
<html lang="en-us">
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
		<h1>Welcome</h1>
		<p>This is the home page.</p>
	</div>

	<?- include("partials/foot.htm") ?>
```

*views/members.htm*

```html
	<?- include("partials/head.htm") ?>

	<div>
		<h1>List of members</h1>
		<p>It is the Members page.</p>
	</div>

	<?- include("partials/foot.htm") ?>
```

you will have access to the addresses:

- `http://localhost/`
- `http://localhost/list-of-members/`

*Note: for more informations to the differences between `<?`, `<?-`, `<?=`, etc. you can refer to the section [emplate engine](#ejs-template-engine).*



### Variations ###

It is possible with the same view and the same includes, generating pages with different contents (useful in generation HTML assets mode). Activate the variations with the following configuration:

```json
{
	"variation": "common.json",
	"variationsRelativePath": "variations",
	"routes": {
		"/": {
			"view": "template.htm",
			"variation": "index.json",
		},
		"/list-of-members/": {
			"view": "template.htm",
			"variation": "members.json",
		}
	}
}
```

with the following files:

```
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
	"titleWebsite": "Website title",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*variations/index.json*

```json
{
	"titlePage": "Welcome",
	"classPage": "index",
	"content": "<p>This is the home page.</p>"
}
```

*variations/members.json*

```json
{
	"titlePage": "List of members",
	"classPage": "members",
	"content": "<p>It is the Members page.</p>"
}
```

*views/partials/head.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
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

you will have access to the addresses:

- `http://localhost/`
- `http://localhost/list-of-members/`

*Note: if* `variationsRelativePath` *is not present in `webconfig.json`, default variations folder is* `variations`. `variationsRelativePath` *is useful only to change the name/path of directory.*



### Internationalization (i18n) ###

#### All languages on the same site ####

On the same principle, the variations can be used to create the same page, but in different languages (and different routes):

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

*Note: in this example, I use the common `variation` property because I don't use a* `common.js` *file. I also decided to rename my folder* `variations` *to* `l10n` *(localization)*.

with the following files:

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

you will have access to the addresses:

- `http://localhost/`
- `http://localhost/home/`
- `http://localhost/accueil/`

*Note: by default is the* `languageCode` *root that determines the display language of the wesite. It's also possible to change the page language with a* `languageCode` for a page. *You should also know that once the site or page has a* `languageCode` *in the configuration, variations files must be placed in a subdirectory named with the* `languageCode`.


#### Use both variations and localizations ####

You may have noticed in the previous example that the `landing.json` file was not in the `en-us/` or `fr-fr/`. This is quite possible and means that will be used in languages that do not have it in their file.

Also, when a `languageCode` is specified, NodeAtlas seek first hand the value in the corresponding folder file. If it was not there, so he went to fetch the parent folder (the one used as a standard for variations without localization).

This will allow you, for example, to manage master language directly in the variation folder. So with the following example:

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

you can:

- manage the version `en-us` directly to the root of `variations/` (as NodeAtlas find nothing in `en-us` then it uses the values of the root files) and
- manage the `fr-fr` release in the `fr-fr/ `,

Thus, if a sentence has not yet translated into a file `fr-fr`, instead of returning an error, NodeAtlas return the root version or the version `en-us`.


#### Each language has its configuration ####

You can also choose to configure each language in a `webconfig.json` different. With the following set of file:

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

you could have `webconfig.json` next:

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
		"/list-of-members/": {
			"view": "members.htm",
			"variation": "members.json"
		}
	}
}
```

and have access to addresses:

- `http://localhost/`
- `http://localhost:81/english/`
- `http://localhost:81/english/`
- `http://localhost:81/english/members-list/`
- `http://localhost:82/francais/`
- `http://localhost:82/francais/list-of-members/`

It is then possible to reverse proxy with to bring all URLs on port 80 to obtain:

- `http://www.website.ext/`
- `http://www.website.ext/english/`
- `http://www.website.ext/english/`
- `http://www.website.ext/english/members-list/`
- `http://www.website.ext/francais/`
- `http://www.website.ext/francais/list-of-members/`



### URL Values ###

By default, if you use the following configuration:

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

with the following view :

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>URLs</title>
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

This is the same to use it:

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

and you will be access to the URL: `http://localhost/` to see this content:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>URLs</title>
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

Then change the configuration to this:

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

to access this time to : `https://127.0.0.1:7777/sub/folder/index.html?test=ok` to see this content:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>URLs</title>
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

Note: this example work only if you have `server.crt` and `server.key` files valide into `security/` folder. Try without `"httpSecure": "security/server"` to see it work without `https` in URLs.



### Webconfig Variables ###

Imagine two webconfigs in which we create our own variables as follows:

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

with this set of files:

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

and `index.htm` containing:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>Hello world</title>
		<link rel="stylesheet" type="text/css" href="stylesheets/common<?= webconfig._minified ?>.css" />
	</head>
	<body>
		<div>This is a test to get a file minify/unminify.</div>
		<script type="text/javascript" src="javascripts/common<?= webconfig._minified ?>.js"></script>
	</body>
</html>
```

To run (from the site folder) the command:

```bash
$ node-atlas
```

We will have to address `http://localhost/` the following output with non-minified files:

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>Hello world</title>
		<link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
	</head>
	<body>
		<div>This is a test to get a file minify/unminify.</div>
		<script type="text/javascript" src="javascripts/common.js"></script>
	</body>
</html>
```

However, running the command:

```bash
$ node-atlas --webconfig webconfig.prod.json
```

We will have to address `http://localhost/` the following output with minified files:

```html
<!DOCTYPE html>
<html lang="fr-fr">
	<head>
		<meta charset="utf-8" />
		<title>Hello world</title>
		<link rel="stylesheet" type="text/css" href="stylesheets/common.min.css" />
	</head>
	<body>
		<div>This is a test to get a file minify/unminify.</div>
		<script type="text/javascript" src="javascripts/common.min.js"></script>
	</body>
</html>
```

*Note: it is better to prefix his personal variables with "_" to avoid conflicts with existing or future configuration variables.*



### Global Layout ###

Include a head part and foot part in two separate files create the following problem: tag from the head file are only closed into foot file. If you want to put all global things in the same file you could use a global view and indicate into where all views are injected. You can use all other mechanisms of view in this layout.

with this set of files

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

and with the following webconfig:

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
		"/about/": {
			"view": "about.htm"
		}
	}
}
```

and this two variation files:

*common.json*

```json
{
	"titleWebsite": "Website Title",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*index.json*

```json
{
	"titlePage": "Welcome",
	"classPage": "index",
	"content": "<p>This is the Homepage.</p>"
}
```

you could create with this views:

*views/common.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<title><?- specific.titlePage || "No title" ?></title>
		<link rel="stylesheet" href="stylesheets/<?= common.classCssCommon ?>.css"  media="all">
		<? if (specific.classPage) { ?>
		<link rel="stylesheet" href="stylesheets/<?= specific.classPage ?>.css"  media="all">
		<? } ?>
	</head>
	<body>
		<!-- Include a file in standard way -->
		<?- include("partials/header.htm") ?>

		<!-- Include the current `view` file -->
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
	<h1>NodeAtlas © MachinisteWeb</h1>
</div>
```

an display the following URL:

*/*

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<title>Welcome</title>
		<link rel="stylesheet" href="stylesheets/common.css"  media="all">
		<link rel="stylesheet" href="stylesheets/index.css"  media="all">
	</head>
	<body>
		<header>
			<h1>Welcome</h1>
		</header>
		<div>
			<p>This is the Homepage.</p>
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
			<h1>NodeAtlas © MachinisteWeb</h1>
		</div>
		<script async="true" type="text/javascript" src="javascripts/common.js"></script>
	</body>
</html>
```



### Public files ###

It is possible to share more than only the `assetsRelativePath` public directory. You could for example share views or models with to the client-side. We call them statics files.

We see the following example:

with this set of files

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
	<html lang="en-us">
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

We can access to the HTML files `http://localhost/` and JavaScript `http://localhost/javascripts/user.js`.

#### maxAge, Etag, etc. ####

It's possible to manage information provided by NodeAtlas when a static resource is requested (like `maxAge`, `Etag`, etc.) via the `staticOptions`. In this case, the parameter is not a `string` anymore but an `Object` and the initial property become the `path` parameter. By default, `staticOptions` are the same as global webconfig (more information at [Express](http://expressjs.com/en/api.html) documentation).

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

#### Order routes ####

It's also possible to place routes into an array, that allows you to ordinate routes for an advanced usage in controllers section.

In this case, the path becomes the `virtual` parameter.

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



### Static Generate Templates ###

#### Generate HTML Designs ####

With the following configuration, it is possible to generate HTML rendering assets of each page in a linked file. The file will be (re)created every display of the page in your browser.

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
		"/list-of-members/": {
			"view": "members.htm",
			"output": "/members/list.html"
		},
		"/list-of-members/?foo=bar": {
			"view": "members.htm",
			"output": false
		},
		"/no/output/parameter/": {
			"view": "members.htm"
		}
	}
}
```

and the following set of files:

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

can physically create following output:

```txt
├─ HTML/
│  ├─ stylesheets/
│  │  └─ common.css
│  ├─ javascripts/
│  │  └─ common.js
│  ├─ index.html
│  ├─ members/
│  │  └─ list.html
│  └─ no/
│     └─ output/
│        └─ parameter ⤆ Ceci est un fichier
├─ views/
│  ┊┉
└─ webconfig.json
```

by going to the address:

- `http://localhost/`
- `http://localhost/list-of-members/`
- `http://localhost/no/output/parameter/`

*Note: no output page are generated for `/list-of-members/?foo=bar` because `output` is set to `false`. Use this value to ignore a route generation.*

The generation starts when displaying the page if `htmlGenerationBeforeResponse` exists and if it is `true`.

#### Generate website without server-side ####

You can also manage a simple HTML website page with `--generate` command.

If `htmlGenerationBeforeResponse` is set to `false` (or removed) the only way to generate all the pages of the website will be via the command `node-atlas --generate` will generate all pages into `serverlessRelativePath` only if global `output` is set to `true`.

Also with `--generate` , the entire ` assetsRelativePath` folder (public folder files) will be copied in the `serverlessRelativePath` if both folders does not have the same path only if global `assetsCopy` is set to `true`.

It really allows you to get the stand-alone pages you want in output folder with all files which they call (CSS / JS / Images, etc.).

See this with the following configuration:

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

and the following set of files:

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

With `node-atlas --browse`, to address `http://localhost/` will show a list of pages your site components (with `"index": true`)

It will do more than, once `--generate` was used, enjoy your HTML site in the folder:

```txt
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

*Note: if* `serverlessRelativePath` *is not present in `webconfig.json`, default folder for generated files is* `serverless/`. `serverlessRelativePath` *is useful only to change the name/path of directory.*

#### Generate Static Files ####

Files defined into `statics` are also copyable into `serverlessRelativePath` when you use `--generate`. To allow this, you could use for each directory the parameter `output` set to `true`.

```json
{
	"statics": {
		"/javascripts/models": {
			"path": "models",
			"output": true
		}
	},
}
```



### Template Engines ###

By default, NodeAtlas already use [EJS template engine](http://ejs.co/), it's that allows you to use JavaScript between `<?` and `?>` tags.

Tags `<?` and `?>` allow you to include JavaScript into templates. There are many different tag format allow you to display JavaScript output into your template (in the same way you should with `document.write`). See below:

- `<?` Opening 'scriptlet' tag by default for control-flow, no output provided.
- `<?=` Outputs the value into the template (HTML escaped).
- `<?-` Outputs the unescaped value into the template.
- `<?#` Comment tag, no execution, no output.
- `<?%` Outputs a literal `<?`.
- `?>` Plain ending tag.
- `-?>` Trim-mode ('newline slurp') tag, trims following newline.

#### EJS ####

However, EJS works by default with `<%` and `%>`. You could set this values or set others values if you want.

```json
{
	"templateEngineDelimiter": "%",
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

For example, to include part of a file instruction is used `<?- include("partials/head.htm") ?>`. It would be possible to do it with `<%- include("partials/head") %>` with the configuration below:

See the example in files below:

*webconfig.json*

```json
{
	"templateEngineDelimiter": true,
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
	"titleWebsite": "Website Title",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*variations/index.json*

```json
{
	"titlePage": "Welcome",
	"classPage": "index",
	"content": "<p>This is the Homepage.</p>"
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

Learn all about the possibilities of the template engine consult [the documentation EJS](http://ejs.co/).

*Note: if nothing is set,* `templateEngineDelimiter` *is set to* `?`.

#### Pug ####

It's also possible to change EJS template to [Pug Template Engine](https://pugjs.org/) (new Jade template name) to generate pages with variations. This is possible for all pages like this:

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

or just for one page like this:

```json
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

It's also possible to reset EJS only for one page.

```json
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

We can see now an example with a set of files below:

*webconfig.json*

```json
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
	"titleWebsite": "Website Title",
	"classCssCommon": "common",
	"classJsCommon": "common"
}
```

*variations/index.json*

```json
{
	"titlePage": "Welcome",
	"classPage": "index",
	"content": "<p>This is the Homepage.</p>"
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

Learn all about the possibilities of the template engine consult [the documentation Pug](https://pugjs.org/).

*Note: if nothing is set,* `pug` *is set to* `false`.

#### Vue.js ####

[Vue](https://vuejs.org/) is a progressive MVVM framework like Angular or React which can be used as a server template engine for NodeAtlas. The main useful feature is the client-side hydrate this code from the response of server and made reactivity and route with it!

> Feel free to back to this section later because some controller mechanisms are used and will be explained later in the next chapter.

We propose us to set up an usage of [Vue](https://vuejs.org/) + [Vue Router](https://router.vuejs.org/en/) + [Vue Server Renderer](https://ssr.vuejs.org/en/) with the following command:

```bash
node-atlas --create hello-vue
```

then initialize project with the command

```bash
cd ./hello-vue/
npm install
```

and then, run it with the command

```bash
node-atlas --browse
```

- [Check the sources and more usage possibilities on the GitHub repository](https://github.com/MachinisteWeb/node-atlas-hello-vue).





## Controller Part ##

NodeAtlas is useful for more than simply generate template web page easily based on your variations files. NodeAtlas allow you to dynamically interact with variations var and with the DOM with usage of:

- parameters in the query part of URL (GET),
- parameters in request body (POST),

but also, using natives features from Node.js or npm, interact usage of:

- data from files,
- data from databases,
- data from  active user sessions,
- data provide from WebSockets exchanges,
- and more!



### Lifecycle ###

NodeAtlas lifecycle works as following. First, resources are loaded, the server start, routes are added and all is up. Then, for each HTTP request, a response is generated. You could use hooks while server start and while the response is constructed.

This is a `webconfig.json` allows you to manipulate each hook of lifecycle of a page.

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

*Note: if* `controllersRelativePath` *is not present in `webconfig.json`, default controller folder is* `controllers`. `controllersRelativePath` *is useful only to change the name/path of directory.*

and this is all hooks you can use while:

#### Starting the server ####

```txt
┌─[Loading Node.js Modules]
┊
├─[Loading Init Vars]
┊
├─[Loading npm Modules]
┊
├─[Setting CLI Commands and Language]
┊
├─[Setting API Options]
┊
└─[Loading CLI Language]
  ┊
  ├─[Loading Global Vars]
  ┊
  ├─[Setting Webconfig Instructions]
  ┊
  └─[Loading Common Controller]
	┊  ______________________________
	├─{Hook : <controller>.setModules}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	├─[Server Init]
	┊  _______________________________
	├─{Hook : <controller>.setSessions}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	├─[Sessions Init]
	┊
	├─[Sockets Init]
	┊ ┊  ______________________________
	┊ ├─{Hook : <controller>.setSockets}_______
	┊ └─{Hook : routes[<controller>].setSockets}
	┊    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	┊  _____________________________________
	├─{Hook : <controller>.setConfigurations}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	└─[Starting the server]
	  ┊
	  ├─[Template Engine Init]
	  ┊  _____________________________
	  ├─{Hook : <controller>.setRoutes}
	  ┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	  └─[Routes Init]
		┊
		∞
```

#### Processing a request ####

```txt
∞
┊
└─[Processing a request]
  ┊
  └─[Loading Specific Controller]
	┊  ____________________________________
	├─{Hook : <controller>.changeVariations}_______
	├─{Hook : routes[<controller>].changeVariations}
	┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	└─[Template Engine Compilation]
	  ┊  _____________________________
	  ├─{Hook : <controller>.changeDom}_______
	  ├─{Hook : routes[<controller>].changeDom}
	  ┊  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	  └─[Send Response]
		┊
		∞
```



### `changeVariations` Hook ###

In order to intercept variations, you could use the common controller for all the website page and/or also a specific controller per page.

`changeVariations(next, locals, request, response)` is a function to `exports` and provide:

- `NA` object as `this`.
- A callback function `next()` in the first argument.
- An object `locals` in the second argument with the `locals.common` for common variations and the `locals.specific` for specific variations.
- The `request` object in the third argument for this page.
- The `response` object in the fourth argument for this page.

This is an example using the two hooks, the common in first and after the specific:

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

with this files :

```txt
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

Do a POST request on `http://localhost/example/?title=MachinisteWeb` with `example=This+is+a+test` variable in body will use the following files:

*variations/common.json*

```json
{
	"titleWebsite": "Site Title"
}
```

*variations/index.json*

```json
{
	"titlePage": "Welcome",
	"content": "<p>This is the Home Page.</p>"
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
// This code is executed before variation are injected into template engine.
// This code is executed for all HTTP request, for all pages.
exports.changeVariations = function (next, locals, request, response) {

	// Here we update `locals` variable.

	console.log(locals.common.titleWebsite); // `"Site Title"`
	console.log(locals.specific.titlePage); // `"Welcome"`
	console.log(locals.specific.content); // `"This is the Home Page."`

	console.log("urlRootPath", locals.urlRootPath); // `"http://localhost"`
	console.log("urlSubPath", locals.urlSubPath); // `"/example"`
	console.log("urlBasePath", locals.urlBasePath); // `"http://localhost/example"`
	console.log("urlFilePath", locals.urlFilePath); // `"/"`
	console.log("urlQueryPath", locals.urlQueryPath); // `"?title=MachinisteWeb"`
	console.log("urlPath", locals.urlPath); // `"http://localhost/example/?title=MachinisteWeb"`

	if (request.query["title"]) {
		locals.specific.titlePage = locals.specific.titlePage + " " + request.query.title;
	}
	if (request.body["example"]) {
		locals.specific.content = request.body.example;
	}

	console.log(locals.common.titleWebsite); // `"Site Title"`
	console.log(locals.specific.titlePage); // "Welcome MachinisteWeb"
	console.log(locals.specific.content); // `"This is a test"`

	// We continue with next steps.
	next();
};
```

*controllers/index.js*

```js
// This code is executed before variation are injected into template engine.
// This code is executed only for the `/` page.
exports.changeVariations = function (next, locals, request, response) {

	// Here we update `locals` variable.

	console.log(locals.common.titleWebsite); // `"Site Title"`
	console.log(locals.specific.titlePage); // `"Welcome MachinisteWeb"`
	console.log(locals.specific.content); // `"This is a test"`

	locals.common.titleWebsite = `"It's Home, no way."`;
	locals.specific.content = `"It's Home, no way."`;

	console.log(locals.common.titleWebsite); // `"It's Home, no way."`
	console.log(locals.specific.titlePage); // `"Welcome MachinisteWeb"`
	console.log(locals.specific.content); // `"It's Home, no way."`

	// We continue with next steps.
	next();
};
```

this produce the following output:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>It's Home, no way.</title>
	</head>
	<body>
		<div class="title">It's Home, no way.</div>
		<div>
			<h1>Welcome MachinisteWeb</h1>
			It's Home, no way.
		</div>
	</body>
</html>
```

If you delete the variation entry of specific page from webconfig:

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

the output will be the following:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>Site Title</title>
	</head>
	<body>
		<div class="title">Site Title</div>
		<div>
			<h1>Welcome MachinisteWeb</h1>
			This is a test
		</div>
	</body>
</html>
```



### `changeDom` Hook ###

In order to intercept DOM before it was sent, you could use the common controller for all the website page and/or also a specific controller per page.

`changeDom(next, locals, request, response)` is a function to `exports` and provide :

- `NA` object as `this`.
- A callback function `next([dom])` in the first argument which accepts an optional first updated `dom` argument used to manipulate the Virtual DOM.
- An object `locals` in the second argument with the `locals.dom` string that contains the response or the `locals.virtualDom()` function creating a usable Virtual DOM.
- The `request` object in the third argument for this page.
- The `response` object in the fourth argument for this page.

This is an example using the two hooks, the common for all pages in first and after the specific:

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

with this files:

```txt
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

Do a request on `http://localhost/` will use the following files (and others):

*variations/common.json*

```json
{
	"titleWebsite": "Site Title"
}
```

*variations/index.json*

```json
{
	"titlePage": "Welcome",
	"content": "<p>This is Home Page.</p>"
}
```

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
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
// This code is executed before DOM was sent to client.
// This code is executed for all HTTP request, for all pages.
exports.changeDom = function (next, locals, request, response) {
	// Transform HTML string into Virtual DOM.
	var $ = locals.virtualDom();

	// Just after eath h1 from HTML of `dom`...
	Array.prototype.forEach.call(dom.window.document.getElementsByTagName("h1"), function (h1) {

		// ...we create a div,
		var div = dom.window.document.createElement('div');

		// ...we inject the content of h1 into the div...
		div.innerHTML = h1.innerHTML;
		h1.parentNode.insertBefore(div, h1.nextElementSibling);

		// ...and we delete the h1.
		h1.parentNode.removeChild(h1);
	});

	// Return updates for reinject them into HTML string.
	next(dom);
};
```

*controllers/index.js*

```js
// This code is executed before DOM was sent to client.
// This code is executed only for the « / » page .
exports.changeDom = function (next, locals, request, response) {
	var NA = this,
		jsdom = NA.modules.jsdom, // `jsdom` for manipulate Virtual DOM.
		dom = new jsdom.JSDOM(locals.dom); // We load datas for manipulate it as a DOM.

	// We update node content with `.title` class.
	dom.window.document.getElementsByClassName("title")[0].textContent = "Content Update";

	// We recreate a new HTML output with updates.
	locals.dom = dom.serialize();

	// We go to next step.
	next();
};
```

the output will be as following:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<title>Site Title</title>
	</head>
	<body>
		<div class="title">Content Update</div>
		<div>
			<div>Welcome</div>
			<p>This is Home Page.</p>
		</div>
	</body>
</html>
```



### `setSockets` Hook ###

In order to keep a real-time connection between your client-side and server-side across all pages opened on all browsers that run on all OS, you could define your WebSockets here. [More details in Socket.IO part](#websockets-exchanges).

`setSockets()` is a function to `exports` and providing:

- `NA` object as `this`.

This is an example using the two hooks, the common in first and after the specific:

```json
{
	"socketClientFile": "/node-atlas/socket.io.js",
	"socketServerOptions": { "transports": ["polling", "websocket"] },
	"controller": "common.js",
	"routes": {
		"/": {
			"view": "index.htm",
			"controller": "index.js"
		}
	}
}
```

with this files:

```txt
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

Do a request on `http://localhost/` will use the following files (and others files):

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>Websocket Example</title>
	</head>
	<body>
		<div class="layout">
			<div class="content"></div>
			<div class="field">Write something : <input class="input" type="text"></div>
		</div>
		<script type="text/javascript" src="socket.io/socket.io.js"></script>
		<script type="text/javascript" src="node-atlas/socket.io.js"></script>
		<script type="text/javascript" src="javascripts/test.js"></script>
		<script type="text/javascript" src="javascripts/index.js"></script>
	</body>
</html>
```

*Note: if* `socketClientFile` *and* `socketServerOptions` *are not present in `webconfig.json`, default client file and server options for sockets for config sockets are* `/node-atlas/socket.io.js` *and* `{ transports: ['polling', 'websocket'] }`. `socketClientFile`. *They are useful only to change the name of file or the sockets transports alloweds. If you set `socketClientFile` to `false`, the client file will be not adding on accessible routes.*

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
		console.log("Server");
	}
}));
```

*controllers/common.js*

```js
// This code is executed for each WebSocket request/response on server.
// This code is executed for all WebSocket from Client.
exports.setSockets = function () {
	var NA = this,
		io = NA.io;

	io.on('connection', function (socket) {
		console.log("A tab is opened.");
		socket.on('disconnect', function () {
			console.log("A tab is closed.");
		});
	});
};
```

*controllers/index.js*

```js
// This code is executed for each WebSocket request/response on server.
// This code is executed for all WebSocket from client.
exports.setSockets = function () {
	var NA = this,
		path = NA.modules.path,
		io = NA.io;

	require(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, "javascripts/test.js"))(); // display `Server`

	// Wait for a valid connection between client and servere.
	io.sockets.on("connection", function (socket) {

		// A page says the text has changed.
		socket.on("update-text", function (data) {

			// We say to all others page the page has changed.
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

// We say to others we just change text.
input.addEventListener("keyup", function () {
	content.innerHTML = input.value;
	NA.socket.emit("update-text", {
		text: input.value
	});
});

// Others says they changed the text.
NA.socket.on("update-text", function (data) {
	content.innerHTML = data.text;
	input.value = data.text;
});
```

You will see, opening different browsers and tabs. All is updated in all tabs. Each tab open display the connection message and each tab closed display the disconnection message on the server console.

*Note: you can change the `node-atlas/socket.io.js` file by a file provided by you in order to change `optionsSocket` variable. You can also change `NA.optionsSocket` in a front-side file, before inserting of `node-atlas/socket.io.js` with a custom option object.*



### `setModules` Hook ###

To load others modules which not include into NodeAtlas, you can use the common controller for all the website in order to load it once and use modules anywhere in all controllers.

`setModules()` is a function to `exports` and providing:

- `NA` object as `this`.

This is an example using an external module of NodeAtlas:

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

with this set of files:

```txt
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

Do a request on `http://localhost/` will use the following files (and others files):

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>Module Test</title>
	</head>
	<body>
		<div class="title">Module Test</div>
		<div>
			<h1>Module Test</h1>
			<?- example ?>
		</div>
	</body>
</html>
```

*controllers/common.js*

```js
// This code is executing during the modules loading phase.
// This code will be executed when NodeAtlas starting.
exports.setModules = function () {
	// Use the NodeAtlas instance from engine.
	var NA = this;

	// Associate each modules to allow us to use them anywhare.
	NA.modules.marked = require('marked');
};
```

*controllers/index.js*

```js
// This code is executed before variation are injected into template engine.
// This code is executed only for the `/` page .
exports.changeVariations = function (next, locals) {
	// Use the NodeAtlas instance from engine.
	var NA = this,
		marked = NA.modules.marked;

	variations.example = marked("I am using __markdown__.");

	// We do next step.
	next();
};
```

this will produce the following output:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>Module Test</title>
	</head>
	<body>
		<div class="title">Module Test</div>
		<div>
			<h1>Module Test</h1>
			<p>I am using <strong>markdown</strong>.</p>
		</div>
	</body>
</html>
```



### `setConfigurations` Hook ###

To configure NodeAtlas web server others ([Express](http://expressjs.com/)), you can use the common controller to set configurations before the server start.

`setConfigurations(next)` is a function to `exports` and providing:

- `NA` object as `this`.
- A callback function `next()` in first argument.

This is an example using a middleware for [Express](http://expressjs.com/):

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

with this set of files:

```txt
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ views/
│  └─ index.htm
└─ webconfig.json
```

Do a request on `http://localhost/` will use the following files (and others files):

*views/index.htm*

```html
<?- content ?>
```

*controllers/common.js*

```js
// This code is executing before starting of the web server.
// This code will be executed when NodeAtlas starting.
exports.setConfigurations = function (next) {
	// Use the NodeAtlas instance from engine.
	var NA = this;

	// Middleware used for each request.
	NA.express.use(function (request, response, next) {
		response.setHeader("X-Frame-Options", "ALLOW-FROM https://www.lesieur.name/");
		next();
	});

	// We do next steps.
	next();
};
```

*controllers/index.js*

```js
// This code is executing before starting of the web server.
// This code is executed only for the `/` page .
exports.changeVariations = function (next, locals) {

	// We prepare file for JSON displaying.
	locals.routeParameters.headers = {
		"Content-Type": "application/json; charset=utf-8"
	};
	locals.content = JSON.stringify(locals, null, "    ");

	// We do the next step.
	next();
};
```

this will produce the following output:

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



### `setSessions` Hook ###

To configure client-server Sessions of NodeAtlas, you can use the common controller to set sessions before the server start. this is an example with [Redis](http://redis.io/) sessions.

`setSessions(next)` is a function to `exports` and providing:

- `NA` object as `this`.
- A callback function `next()` in first parameter.

This is all files for example:

```txt
├─ controllers/
│  └─ common.js
├─ views/
│  └─ index.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
└─ webconfig.json
```

With the `webconfig.json`:

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

And `common.js` file containing e.g.:

```js
// This code is executing during the modules loading phase.
// This code will be executed when NodeAtlas starting.
exports.setModules = function () {
	// Find instance of NodeAtlas engine.
	var NA = this;

	// Associations of each module to access it anywhere.
	NA.modules.RedisStore = require('connect-redis');
};

// This code is executing while configuration of session.
// This code will be executed when NodeAtlas starting.
exports.setSessions = function (next) {
	var NA = this,
		session = NA.modules.session,
		RedisStore = NA.modules.RedisStore(session);

	// We replace the default session.
	NA.sessionStore = new RedisStore();

	// We do next steps.
	next();
};
```



### `setRoutes` Hook ###

To configure routes of NodeAtlas by programmation, you can use the common controller for all the website in order to load it once and use modules anywhere in all controllers.

`setRoutes(next)` is a function to `exports` and providing:

- `NA` object as `this`.
- A callback function `next()` in first argument.

This is all files for example:

```txt
├─ controllers/
│  └─ common.js
├─ views/
│  ├─ content.htm
│  └─ index.htm
├─ variations/
│  └─ common.json
└─ webconfig.json
```

With the `webconfig.json`:

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

And `common.js` file containing e.g.:

```js
// This code is executing while route are added.
// This code will be executed when NodeAtlas starting.
exports.setRoutes = function (next) {

	// We use instance of NodeAtlas.
	var NA = this,

		// And we keep routes from NodeAtlas webconfig...
		route = NA.webconfig.routes;

	// ...to add "/content.html" route amongs others routes.
	route["/content.html"] = {
		"view": "content.htm"
	};

	// We do next steps.
	next();
};
```



### Websockets Exchanges ###

To keep a link between client-side and server-side part of the website, NodeAtlas use [Socket.IO](http://socket.io/) (more details on official website).

Thanks to this, you could change in real-time data on your page, but also change data from another tabs or browsers.

With this following files:

```txt
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

With this `webconfig.json`:

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

and with this views files:

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

*Note: each click on `button` will update content from `views/partials/index.htm`.*

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
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

*Note: we parse here the home page `/`.*

and the following variations files:

*variations/common.json*

```json
{
	"titleWebsite": "Socket.IO Example"
}
```

*variations/index.json*

```json
{
	"titlePage": "Date",
	"content": "<p>Current date is:</p>"
}
```

All work fine here, but see what we will do with controller part on server-side and on client-side.

On server, we will use the following controller file:

*controllers/index.js*

```js
// All WebSocket action possible with `setSockets`.
exports.setSockets = function () {
	var NA = this,
		io = NA.io;

	// Once we have a valid connection between the client and our server...
	io.sockets.on('connection', function (socket) {

		// ...stay tuned on the `server-render` request...
		socket.on("server-render", function (data) {
			var sessionID = socket.request.sessionID,
				session = socket.request.session,
				locals = {};

			// Specific variations in the good language.
			locals = NA.specific("index.json", data.lang, locals);

			// Common variations in the good language.
			locals = NA.common(data.lang, locals);

			// HTML part from `viewsRelativePath` directory and render with variations.
			result = NA.view("partials/index.htm", locals);

			// And responds to all customers with a set of data in data.
			io.sockets.emit("server-render", data);
		});
	});
};
```

And for client-side, we use the following files:

*assets/javascripts/index.js*

```js
var html = document.getElementsByTagName("html")[0],
	layout = document.getElementsByClassName("layout")[0];

// We associate on the button the action to contact server.
function setServerRender() {
	var button = document.getElementsByTagName("button")[0];
	button.addEventListener("click", function () {
		NA.socket.emit("server-render", {
			lang: html.getAttribute("lang")
		});
	});
}

// We set action on button.
setServerRender();

// When server response come back...
NA.socket.on("server-render", function (data) {

	// ...we update data content...
	layout.innerHTML = data.render;

	// ...and we set again button action.
	setServerRender();
});
```

Run your project and go on `http://localhost/` across multiple tab and/or multiple browsers. You will see when you click on "Update", the page (current date) will be updated on all tabs open.

Thanks to `NA.specific`, `NA.common` and `NA.view`, it's possible to generate a new view and variation compilation.

If `data.lang` in this example is the type of `undefined`, files will be searched in the root directory. If `locals` is the type of `undefined` an empty object will be created.

Note: to allows `view` to use Pug template engine and not EJS, you must define `locals.pug` to `true` before use `NA.common` and `NA.specific`.



### Middlewares ###

NodeAtlas is constructed on the top of [Express](http://expressjs.com/). You can access to the Express Object of a NodeAtlas instance using `NA#express`. With this, you are able to add Express middlewares in the same way you add it in standalone Express.

What we can say about the NodeAtlas's Express pre-configuration when the webconfig is empty:

```js
NA.express.set("strict routing", true);
/* ... */
NA.express.set("x-powered-by", false);
/* ... */
/* Activate gzip, deflate and co. */
NA.express.use(compress());
/* ... */
/* Parsing "x-www-form-urlencoded" encryption type. */
NA.express.use(bodyParser.urlencoded({ extended: true }));
/* ... */
/* Parsing "application/json" encryption type. */
NA.express.use(bodyParser.json());
/* ... */
/* Parsing cookies. */
NA.express.use(cookieParser());
/* ... */
/* Manage session cookies. */
NA.express.use(session(optionSession));
/* ... */
/* Manage `assets/` directory and access of file from domain root or a subpath. */
NA.express.use(NA.webconfig.urlRelativeSubPath, express.static(path.join(NA.serverPath, NA.webconfig.assetsRelativePath), staticOptions));
```

You can add middlewares with different ways.

#### With `setConfigurations` ####

You can get the `NA#express` object ready to use middlewares with the `setConfigurations` hook. That will add the new mechanisms for all routes of your website.

```js
exports.setConfigurations = function (next) {
	var NA = this;

	// Middleware create by you.
	NA.express.use(function (request, response, next) {
		response.setHeader("X-Frame-Options", "ALLOW-FROM https://www.lesieur.name/");
		next();
	});

	// Middleware adding severals security headers.
	NA.express.use(require("helmet")());

	next();
};
```

#### With the `middlewares` parameter from Routes ####

It's also possible to deliver middlewares only for one route. In this case, you could use the `middlewares` parameter like this :

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

and use the following file to authorize the `"multipart/data-form"` encryption data type by POST only if you are authenticated by a JSON token:

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

*Note: if* `middlewaresRelativePath` *is not present in `webconfig.json`, default controller folder is* `middlewares`. `middlewaresRelativePath` *is useful only to change the name/path of directory.*

#### With the `middlewares` parameter in Global ####

It's also possible to use the same way for all routes. So, the webconfig will be used like that:

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

With the file:

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

#### Array of `middlewares` ####

You could also provide an array with a file list of Express middlewares both in local route or global:

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

With the `NA` usage:

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

or not:

**middlewares/redirect.js**

```js
module.exports = function (request, response, next) {

	response.redirect('https://go.to.visitor.page/');

	next();
};
```





## Tools Part ##

### Minify CSS / JS ###

You can automatically generate CSS and JS files minified and obfuscated by creating bundles by referencing the file by input and output path. Of course you can do as much as you want. The generation files is executed every time you start NodeAtlas either as a server or via the `--generate` command if a bundle exists in the webconfig.

#### Creating Bundles ####

With the following configuration:

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

and the following set of file:

```txt
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

you will get the following new files:

```txt
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  ├─ common-min1160.css
│  │  └─ common.min.css     ⤆ new file
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
│     ├─ boot.min.js        ⤆ new file
│     ├─ framework.min.js   ⤆ new file
│     └─ common.min.js      ⤆ new file
├─ views/
│  └─ index.htm
└─ webconfig.json
```

#### Bundles in a shared file ####

In order to not re-write a long Bundles configuration list in `webconfig.json` file to your development environment an `webconfig.prod.json` to your production environment, you can group routes in a file of your choice. By convention, the name is `bundles.json` file.

For example,

The following set of file:

```txt
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

with `webconfig.json`:

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

and with `webconfig.prod.json`:

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

could be the following set of file:

```txt
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
├─ bundles.json              ⤆ new file
├─ webconfig.json
└─ webconfig.prod.json
```

with `webconfig.json`:

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

with `webconfig.prod.json`:

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

and `bundles.json`:

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

*Note : it is possible to disable bundles by not including them in the webconfig.*

#### Disable Bundles ####

It is also possible to not execute the minification when run a website with NodeAtlas with `"cssBundlingEnable": false` et `"jsBundlingEnable": false` for each type of bundle.

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

*Note : if your bundle is in shared file, you could desactivated it also without the `"bundles": "bundles.json"`. Just remove it.*

#### Regenerate Bundles before each Page Response ####

For test your page with minified files, you can ask it to be regenerated before each page response with `"cssBundlingBeforeResponse": false` et `"jsBundlingBeforeResponse": false` for each type of bundle.

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

*Note : this is not recommanded for production environment because it's slowed responses pages.*

#### Version into generate file names ####

In order to force the browser to force reload new versions of files in the cache, it's an interesting feature to be capable to change the name file for each version. And the `{version}` pattern will be replaced by the version number of your website (`0.0.0` by default).

So, if you have a `package.json` or a `webconfig.json` valid file with a version number into the `version` property, this number will replace the `{version}` pattern. With the following webconfig:

*webconfig*

```js
{
	"version": "1.0.0",
	"bundles": "bundles.json"
	"routes": "routes.json"
}
```

and the following bundles:

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

you will get files `assets/javascripts/boot.1.0.0.min.js` and `assets/javascripts/common.1.0.0.min.css`.

And you will be able to request them as following:

_views/*.htm_

```htm
<!-- ... -->

<link rel="stylesheet" href="stylesheets/common.<?= webconfig.version ?>.min.css">

<!-- ... -->

<script src="javascripts/boot.<?= webconfig.version ?>.min.js"></script>

<!-- ... -->
```

#### Bundles with WebSockets ####

It's possible to minify file defined in `NA.webconfig.socketClientFile` even if it's not a real physical file. Just add it into bundles of your choice.

In the following example, virtual `/node-atlas/socket.io.js` file will be added to bundles with the correct client/server sockets configuration.

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



### CSS generation with Less ###

You can use the preprocessor Less to create your CSS. The operation is as follows: whenever a CSS request is made, if a Less equivalent exists it is read and it generates the CSS. Once done, the new CSS is responded.

With the following structure:

```
├─ assets/
│  └─ stylesheets
│     └─ common.less
├─ views/
│  └─ index.htm
└─ webconfig.json
```

and the following webconfig:

```json
{
	"less": true,
	"routes": {
		"/": "index.htm"
	}
}
```

and the following content in:

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

you will build the `assets/stylesheets/common.css` by calling the URL `http://localhost/` or `http://localhost/stylesheets/common.css`.

#### Source Map, Minification and Autoprefix ####

By default, in the above example, a `common.css.map` file will be generated. This allows your browser to indicated you that line in the `.less`  file has generated the CSS property of the item you have selected in your debugger.

Disable this with `less.sourceMap` to `false`:

```json
	"less": {
		"sourceMap": false
	},
	"routes": {
		"/": "index.htm"
	}
```

You can also generate CSS files already minify with:

```json
	"less": {
		"compress": true
	},
	"routes": {
		"/": "index.htm"
	}
```

Finally, you can also automaticly add vendor prefix like `--webkit`, `--moz`, `--ms`, `--o` for generated file without care about it in your sources files!

```json
	"less": {
		"autoprefix": true
	},
	"routes": {
		"/": "index.htm"
	}
```

#### Compile Less files with `--generate` ####

Because of Less files are compilated on the fly, when a file is requested in HTTP(S), modification needed the running website for generating CSS output. Then you can use CSS. It's possible to skip running step and directly compilated Less before minifying CSS with `less.files`.

With the following `webconfig.json`:

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

or with the following `webconfig.json`:

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

with `less.json` containing:

```js
[
	"stylesheets/common.less",
	"stylesheets/component-1.less",
	"stylesheets/component-2.less",
	"stylesheets/component-3.less"
]
```

The `@import` used by Less will be capable to walk into subdirectories: `styles`, `stylesheets` or `css`. It's possible to change that with :

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



### CSS generation with Stylus ###

You can use the preprocessor Stylus to create your CSS. The operation is as follows: whenever a CSS request is made, if a Stylus equivalent exists it is read and it generates the CSS. Once done, the new CSS is responded.

With the following structure:

```
├─ assets/
│  └─ stylesheets
│     └─ common.styl
├─ views/
│  └─ index.htm
└─ webconfig.json
```

and the following webconfig:

```json
{
	"stylus": true,
	"routes": {
		"/": "index.htm"
	}
}
```

and the following content in:

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

you will build the `assets/stylesheets/common.css` by calling the URL `http://localhost/` or `http://localhost/stylesheets/common.css`.

#### Source Map, Minification and Autoprefix ####

By default, in the above example, a `common.css.map` file will be generated. This allows your browser to indicated you that line in `.styl`  file has generated the CSS property of the item you have selected in your debugger.

Disable this with `stylus.sourceMap` to `false`:

```json
	"stylus": {
		"sourceMap": false
	},
	"routes": {
		"/": "index.htm"
	}
```

You can also generate CSS files already minify with:

```json
	"stylus": {
		"compress": true
	},
	"routes": {
		"/": "index.htm"
	}
```

Finally, you can also automaticly add vendor prefix like `--webkit`, `--moz`, `--ms`, `--o` for generated file without care about it in your sources files!

```json
	"stylus": {
		"autoprefix": true
	},
	"routes": {
		"/": "index.htm"
	}
```

*Note:* More options on [Stylus documentation for module](https://www.npmjs.com/package/stylus).

#### Compile Stylus files with `--generate` ####

Because of Stylus are compilated on the fly, when a file is requested in HTTP(S), modification needed running websites for generating CSS output. Then you can use CSS. It's possible to skip running step and directly compilated Stylus before minifying CSS with `stylus.files`.

With the following `webconfig.json`:

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

or with the following `webconfig.json`:

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

with `stylus.json` containing :

```js
[
	"stylesheets/common.styl",
	"stylesheets/component-1.styl",
	"stylesheets/component-2.styl",
	"stylesheets/component-3.styl"
]
```

The `@import` used by Stylus will be capable to walk into subdirectories : `styles`, `stylesheets` or `css`. It's possible to change that with :

```json
{
	"stylus": {
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



### Optimize Images Files (Removed from v2.0.2+) ###

> This feature does not exist anymore from v2.0.2. The v2.0.1 is the same as this one but with this additional feature. The next versions will not include this dependencies that suffer of vulnerabilities and badly maintained. You can chose others tools to do greatly the job.

You can automatically generate optimized images files by creating Optimizations by referencing the file by input and output path. Of course, you can do as much as you want. The optimization files is executed every time you start NodeAtlas either as a server or via the `--generate` command if an Optimization exists in the webconfig.

#### Creating Optimizations ####

With the following configuration:

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

and the following set of file:

```txt
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

you will get the following new files:

```
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        ├─ example.svg
│        └─ optimized/       ⤆ new folder
│           ├─ example.png   ⤆ new file
│           ├─ example.jpg   ⤆ new file
│           ├─ example.gif   ⤆ new file
│           └─ example.svg   ⤆ new file
├─ views/
│  └─ index.htm
└─ webconfig.json
```

#### Create Optimizations by group of file ####

For example, not define file one by one, but in group:

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

#### Add more options to optimizations ####

It is possible to redefine default options used for optimizations via this 4 objects:

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

To know all options it is here:

- [Jpeg Options](https://www.npmjs.com/package/imagemin-jpegtran)
- [Gif Options](https://www.npmjs.com/package/imagemin-gifsicle)
- [Png Options](https://www.npmjs.com/package/imagemin-optipng)
- [Svg Options](https://www.npmjs.com/package/imagemin-svgo)

#### Optimizations in a shared file ####

In order to not re-write a long bundle configuration list in `webconfig.json` file to your development environment and `webconfig.prod.json` to your production environment, you can group files in a file of your choice. By convention, the name is `optimizations.json` file.

For example,

The following set of file:

```txt
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

with `webconfig.json`

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

and with `webconfig.prod.json`:

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

could be the following set of file:

```txt
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

with `webconfig.json`:

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

with `webconfig.prod.json`:

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

and `optimizations.json`:

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

*Note: it is possible to disable Optimizations by not including them in the `webconfig`.*

#### Disable Optimizations ####

It is also possible to not execute the optimization when running a website with NodeAtlas with `"imgOptimizationsEnable": false`.

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

*Note : if your optimizations is in shared file, you could desactivated it also without the `"optimizations": "optimizations.json"`. Just remove it.*

#### Re-generate Optimizations before each Page Response ####

You can ask files to be regenerated before each page response with `"cssBundlingBeforeResponse": false` et `"jsBundlingBeforeResponse": false` for each type of Bundle.

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

*Note : this is not recommanded for production environment because it's slowed responses pages.*



### CSS Inline Injection ###

When you create templates for sending email newsletters or even simple message, you can not attach stylesheet. The only way is to write the CSS instructions in the template within the `style` markup attribute.

#### Specific Injection ####

With `injectCss`, simply design your template as usual via a stylesheet and NodeAtlas inject each rendering styles in the attribute `style`. It will do more than generate templates.

With for example the following configuration:

```json
{
	"routes": {
		"/": {
			"view": "email.htm",
			"output": "welcome.html",
			"injectCss": "stylesheets/email.css"
		}
	}
}
```

and the following set of files:

```txt
├─ serverless/
├─ assets/
│  └─ stylesheets/
│     └─ email.css
├─ views/
│  └─ email.htm
└─ webconfig.json
```

whose contents are :

*stylesheets/common.css*

```css
body {
	color: #f00;
}
```

*views/email.htm*

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Email</title>
	</head>
	<body>
		<p>This is a template email.</p>
	</body>
</html>
```

output will be, with the command `node-atlas --generate`, all following file:

```
├─ serverless/
│  └─ bienvenue.html    <= template email generate !
├─ assets/
│  └─ stylesheets/
│     └─ email.css
├─ views/
│  └─ email.htm
└─ webconfig.json
```

with as content for `serverless/welcome.html`

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

This mechanism also works if you do not intend to generate anything but a site that is running. Convenient to change your live models before generating.

#### Global Injection ####

It is possible to use `injectCss` as global mechanism for all pages.

```json
{
	"injectCss": "stylesheets/email.css",
	"routes": {
		"/welcome/": {
			"view": "email-a.htm",
			"output": "welcome.html"
		},
		"/good-bye/": {
			"view": "email-b.htm",
			"output": "good-bye.html"
		}
	}
}
```

also the two pages `welcome` and `good-bye` will contain each `<body style="color: #f00;">`.

#### Multiple Injection ####

It's possible:

- to attach global and specific files in same time,
- to attach more one CSS file by `injectCss` property.

```json
{
	"injectCss": ["stylesheets/reset.css", "stylesheets/email.css"],
	"routes": {
		"/welcome/": {
			"view": "email-a.htm",
			"output": "welcome.html",
			"injectCss": "/stylesheets/welcome.css"
		},
		"/good-bye/": {
			"view": "email-b.htm",
			"output": "good-bye.html",
			"injectCss": ["stylesheets/good-bye.css", "/stylesheets/others.css"]
		}
	}
}
```





## Advanced Part ##

NodeAtlas offers also a large set of features for development or packaging with the configuration system. We will see that.




### Page Not Found ###

#### Listen all URLs, and also file provide by `assetsRelativePath` ####

To display a custom page when a resource is not found you must:

1. Prepare a 404 page.
2. Fill the parameter with `pageNotFound` with the following `value` : `key` of the prepared 404 page.

See the example below:

```json
{
	"pageNotFound": "/not-found-page/",
	"routes": {
		"/list-of-members/": {
			"view": "members.htm"
		},
		"/": {
			"view": "index.htm"
		},
		"/not-found-page/": {
			"view": "error.htm",
			"statusCode": 404
		}
	}
}
```

you can access to:

- *http://localhost/this-page-do-not-exist.html*
- *http://localhost/this/page/either/*
- *http://localhost/etc*

#### Localized Error Page ####

For this, just create a new route with `*` at the end in language you want.

See below :

```json
{
	"pageNotFound": "/not-found-page/",
	"languageCode": "en-gb",
	"routes": {
		"/list-of-members/": {
			"view": "members.htm",
			"variation": "members.json"
		},
		"/": {
			"view": "index.htm",
			"variation": "index.json"
		},
		"/not-found-page/": {
			"view": "error.htm",
			"variation": "error.json",
			"statusCode": 404
		},
		"/francais/liste-des-membres/": {
			"view": "members.htm",
			"languageCode": "fr-fr",
			"variation": "members.json"
		},
		"/francais/": {
			"view": "index.htm",
			"languageCode": "fr-fr",
			"variation": "index.json"
		},
		"/francais/*": {
			"view": "error.htm",
			"languageCode": "fr-fr",
			"variation": "error.json",
			"statusCode": 404
		}
	}
}
```



### Dynamic Routing ###

Although you can configure static URLs, you can also set of dynamic URLs!

#### Parameters ####

It is possible to get some parameters from URL to display a different content depending of slugs.

With the following configuration:

```json
{
	"routes": {
		"/list-of-members/:member/:action/": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/list-of-members/:member/:action": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/list-of-members/:member/": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/list-of-members/:member": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/list-of-members/": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/list-of-members": {
			"view": "members.htm",
			"controller": "members.js"
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

you can access to:

- *http://localhost/*
- *http://localhost/list-of-members*
- *http://localhost/list-of-members/*
- *http://localhost/list-of-members/toto/*
- *http://localhost/list-of-members/bob-eponge99*
- *http://localhost/list-of-members/node-atlas/show/*
- *http://localhost/list-of-members/etc/lolol*
- *http://localhost/list-of-members/?query=test*
- *http://localhost/list-of-members/etc?query=test* (in POST with `test=This+is+a+test`)

and retrieve the `:member`, `:action`, `query` and `test` value in `changeVariations` (common and specific).

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

#### Advanced Parameters ####

We can see which we use the same config for three routes in the previous example. You could also use regular expressions to define that is variable into your URL or define what are the valid parameters in your URL. This system is less complex than real RegExp because a lot of char does not exist in URL so, for example, this char `/` do not need to be escaped.

With the following configuration:

```json
{
	"routes": {
		"/list-of-members/?(:member([-a-zA-Z0-9]+)/?(:action(show|edit)/?)?)?": {
			"view": "members.htm"
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

you can access to:

- *http://localhost/*
- *http://localhost/list-of-members*
- *http://localhost/list-of-members/*
- *http://localhost/list-of-members/toto/*
- *http://localhost/list-of-members/bob-eponge99*
- *http://localhost/list-of-members/node-atlas/show/*
- *http://localhost/list-of-members/?example=test*
- *http://localhost/list-of-members/etc?example=test* (in POST with `test=This+is+a+test`)

and retrieve the `:member`, `:action`, `query` and `test` value in a view.

```html
<!DOCTYPE html>
<html lang="en-us">
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

you cannot access to:

- *http://localhost/list-of-members/etc/lolol*
- *http://localhost/liste-des-membres/`toto_16`/show/*
- *http://localhost/liste-des-membres/toto/`supprimer`/*

#### Regular Expressions ####

You can also enable regular expressions to a specific path with `regExp`. If it is `true`, the previous profile no longer works and you pass in Regular Expression mode. If `regExp` is a string, it acts as a flag (g, i, m or y).

See the following configuration:

```js
{
	"routes": {
		"/list-of-members/([-a-z0-9]+)/?": {
			"view": "members.htm",
			"regExp": "i"
		},
		"/list-of-members/?": {
			"view": "members.htm",
			"regExp": true
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

you can access:

- *http://localhost/*
- *http://localhost/list-of-members/* _(ou *https://localhost/list-of-members*)_
- *http://localhost/list-of-members/toto/* _(ou *https://localhost/list-of-members/toto*)_
- *http://localhost/list-of-members/bob-eponge99/* _(ou *https://localhost/list-of-members/bob-eponge99*)_
- *http://localhost/list-of-members/node-atlas/* _(ou *https://localhost/list-of-members/node-atlas*)_
- *http://localhost/list-of-members/etc/* _(ou *https://localhost/list-of-members/etc*)_

and retrieve the `([-a-z0-9] +) value in the` `changeVariations` (common and specific).

```js
exports.changeVariations = function (next, locals) {

	if (locals.params && locals.params[0]) { locals.params.member = locals.params[0]; }
	// locals.params[1] for second match, etc...

	console.log(locals.params.member);
	// $ 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

	next();
}
```

The rules for creating dynamic URL with `regExp` are those of [RegExpJavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScripts/Reference/Global_Objects/RegExp).



### Programmatic Routing ###

`setRoutes` allows us to dynamically inject routes. However, the route injection add a route at the end of `NA.webconfig.routes` because `NA.webconfig.routes` is an object. There are no possibility to order routes, but this is a problem because routes path are resolved in order of injection.

We will resolved that with new way to set routes from `routes: { <key>: { ... } }` to `routes: [{ "key": <key>, ... }]`.

This is all files for example:

```
├─ controllers/
│  └─ common.js
├─ views/
│  ├─ index.htm
│  ├─ content.htm
│  └─ error.htm
└─ webconfig.json
```

With the `webconfig.json` originaly like this `routes: <Object>`:

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

and transformed like this `routes: <Array>`:

```json
{
	"controller": "common.js",
	"routes": [{
		"url": "/doc/index.html",
		"view": "index.htm"
	}, {
		"url": "/doc/*",
		"view": "error.htm",
		"statusCode": 404
	}]
}
```

With the `common.js` file, it's now possible to inject routes at the position we want. We will see an example at the first position.

```js
// This code is executing while route are added.
// This code will be executed when NodeAtlas starting.
exports.setRoutes = function (next) {

	// We use instance of NodeAtlas.
	var NA = this,

		// And we keep routes from NodeAtlas webconfig...
		route = NA.webconfig.routes;

	// ...to add `/content.html` route in first place.
	route.unshift({
		"url": "/doc/content.html",
		"view": "content.htm"
	});

	// We update modification here.
	next();
};
```

In this way, address `http://localhost/doc/content.html` will return the `content.htm` view and not the `error.htm` view with 404.



### Redirects ###

To go to a different address (redirect 301 or 302) when you get to an URL you must use the `redirect` parameter.

*Note: if you don't set `statusCode`, no redirect will be executed. The `statusCode` is mandatory for redirection.*

#### Static ####

See the example below:

```json
{
	"routes": {
		"/list-of-members/": {
			"view": "members.htm"
		},
		"/list-of-members": {
			"redirect": "/list-of-members/",
			"statusCode": 301
		},
		"/go-to-node-atlas/": {
			"redirect": "https://node-atlas.js.org/",
			"statusCode": 302
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

You will be redirected:

- to `http://localhost/list-of-members/` when you access `http://localhost/list-of-members` with a header _permanent redirect_.
- to `https://node-atlas.js.org/` when you access `http://localhost/go-to-node-atlas/` with a header _temporary redirect_.

#### Dynamic ####

See the example below:

```json
{
	"routes": {
		"/list-of-members/:member/": {
			"view": "members.htm"
		},
		"/list-of-members/:member": {
			"redirect": "/list-of-members/:member/",
			"statusCode": 301
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

You will be redirected to `http://localhost/list-of-members/machinisteweb/` when you access to `http://localhost/list-of-members/machinisteweb` with a header _permanent redirect_.

#### With regular expressions ####

See the example below:

```js
{
	"routes": {
		"/membres/([-a-z0-9]+)/": {
			"view": "members.htm",
			"regExp": true
		},
		"/list-of-members/([-a-z0-9]+)/": {
			"redirect": "/membres/$0/",
			"statusCode": 301,
			"regExp": true
		},
		"/list-of-members/": {
			"view": "members.htm"
		},
		"/": {
			"view": "index.htm"
		}
	}
}
```

You will be redirected to `http://localhost/list-of-members/machinisteweb/` when you access to `http://localhost/list-of-members/machinisteweb` with a header _permanent redirect_.

For the second *match* use $1, the third $2, etc.



### HTTP Headers ###

By défault, sent headers by NodeAtlas are followings: `Content-Type:text/html; charset=utf-8` with a 200 `statusCode`.

It's possible to modify this values for a specific route (for local API for example).

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

It's also possible to modify all headers values, this erase all shortcuts before (except the `statusCode`). Set a value to false remove this header previously setted.

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



### Dynamic Configuration ###

In replacement of static `.json` config files, you can use dynamic `.js` config files. In this case, your `.js` file can provide in `module.exports` a valide JSON file.

And it is possible to replace this six following files:

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
	"statics": "statics.fr-fr.json",
	"routes": {
		"/": "index.htm"
	}
}
```

*webconfig.en-us.json*

```json
{
	"languageCode": "fr-fr",
	"statics": "statics.fr-fr.json",
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
	"statics": "statics.en-us.json",
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

by only this two following files:

*webconfig.js*

```js
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

*statics.js*

```js
module.export = (function () {
	var NA = this.NA,
		languageCode = NA.webconfig.languageCode

	return {
		"/variations/": "variations/" + languageCode + "/",
	};
}());
```

with the following supposed set of environment variables on the four following environments:

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



### HTTPs ###

It is very simple to run an instance of NodeAtlas with HTTPs protocol. You just have to create such a `security` folder in which to place your `server.key` and `server.crt` file to supply the protocol.

Just use the following configuration:

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

Alternatively , if your two `.key` and `.crt` files have the same name, use this configuration:

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

This is also possible to just set the `httpSecure` value to `true` to get a "https" like `urlBasePath` or `urlBase` in your paths variables. But the server will not run in HTTPs and you will validate certificate by your own way (with a server proxy for example).

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

*Note: in production, if you use a proxy for redirect request/response, don't forget use `urlPort: 443` instead of `urlPort: 80` for HTTPs.*



### GET / POST ###

You can also manager how the server will respond to requests GET/POST to a given page. For example, we will allow access to pages only GET for the whole site and allow a POST to one page only (and prohibited him GET).

```json
{
	"get": true,
	"post": false,
	"routes": {
		"/": {
			"view": "index.htm"
		},
		"/list-of-members/": {
			"view": "members.htm"
		},
		"/write-comment/": {
			"view": "write-com.htm"
		},
		"/save-comment/": {
			"view": "save-com.htm",
			"get": false,
			"post": true
		}
	}
}
```

*Note: if nothing is set,* `get` *and* `post` *are set to* `true` *in  global webconfig and by route.*



### PUT / DELETE ###

They work in the same way as `get` and `post`. This two HTTP actions PUT and DELETE are by default not activated. To active it use `put` and `delete`.

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

With the configuration below, only one HTTP action is possible by route, this is a great way to create APIs REST easily with NodeAtlas.



### CORS and OPTIONS ###

By default preflighted requests are not enable. You will need its, for example, to do CORS requests. Prefilghted requests are send with OPTIONS HTTP method.

To activate OPTIONS for a route, use the `options` property on a route of the webconfig. To activate OPTIONS on all routes, use in this case the property `options` in the webconfig in global.

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

#### Cross-Domain Request ####

If you want authorize a ressource on the NodeAtlas server requested by domain `www.domain-a.com` for a single page, you could do like this:

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

With that, you will be able to accept for example a request from `Origin`, `http://www.domain-a.com` which is a value in `Access-Control-Allow-Origin`:

```bash
GET /api/random-quote HTTP/1.1
Host: www.domain-a.com
...
Origin: http://www.domain-a.com
...
```

**Cross-Domain Request with Token**

If you want authorize resources from NodeAtlas server to the request from anywhere for the `/api/random-quote` page and the page `/api/protected/random-quote` that claims an authentification token, you could do that like this:

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

NodeAtlas will parse a token from the external domain if this token is sent by `Authorization` headers in the request. For allows NodeAtlas to accept this request, define it into `Access-Control-Allow-Headers` with the accepted value `Authorization`. Send a token need a preflight request so it's required to set `options` to `true` to authorize HTTP Request with OPTIONS method.

Now, you will be able to accept for example the following request which sends an authentification token to our server for the `/api/protected/random-quote` resource:

```bash
GET /api/protected/random-quote HTTP/1.1
Host: localhost:1337
...
Origin: http://localhost
Authorization: Bearer CODE_DU_JETON
...
```

**Other Cross-Domain requests**

All headers for CORS features are accepted by the headers adding mechanism of NodeAtlas.



### Settings of Sessions ###

#### Key and Secret ####

NodeAtlas itself manages sessions stored on the server as initial settings:

- Key : `nodeatlas.sid`
- Secret : `1234567890bépo`

that allows customers to stay connected through the pages to a single set of personal server-side variable.

It is possible to change the default settings (and even compulsory for productions sites) with the parameters of `webconfig.json` following:

```json
{
	"sessionKey": "personal key",
	"sessionSecret": "personal secret"
}
```

NodeAtlas also employs a memory storage object (MemoryStore) to stock the information in the RAM of the server.

#### Other Parameters ####

It is possible to change all the parameters of the sessions (except MemoryStore) using the configuration of next `webconfig.json`:

```json
{
	"session": {
		"key": "personal key",
		"secret": "personal secret",
		"cookie": {
			"path": "/",
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

The entirety of the possible configuration is located on the module documentation [express-session](https://github.com/expressjs/session).



### Storage Sessions ###

By default, this is NodeAtlas server that stores sessions in the RAM of the server application. This does not allow users to share sessions across multiple applications NodeAtlas (or other) and erases all current sessions for an application if you restart it.

To address this concern, it should support the recording sessions via a base No SQL such as `Redis` or `MongoBD`.

You just have to use the `setSessions` function in common `controller` file.

#### Session managed with Redis ####

Implement the following code in the common `controller` file to store your sessions in a local Redis.

```js
exports.setModules = function () {
	var NA = this;

	NA.modules.RedisStore = require("connect-redis");
};

exports.setSessions = function (next) {
	var NA = this,
		session = NA.modules.session,
		RedisStore = NA.modules.RedisStore(session);

	NA.sessionStore = new RedisStore();

	next();
};
```

More information to [connect-redis](https://www.npmjs.org/package/connect-redis) page.


#### Session managed with MongoDB ####

Implement the following code in `controllers/common.js` to store sessions in the database `sessions` of a local MongoDB.

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

More information to [connect-mongo](https://www.npmjs.org/package/connect-mongo) page.



### Listening URL ###

It is possible to generate a different URL listening other port with `urlHostname` and `urlPort`. For example, the local loop listens on port 80 for a script makes the Reverse Proxy from the port 7777 on the 80 with the "http-proxy" module as below:

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



### Dynamic URLs ###

#### Relative paths in absolute ####

It is possible that the paths created from your URL to be interpreted as subfolders that have actually no real existence. This has the effect the address `media/images/example.jpg` initially accessible from template displayed to address **http://localhost** impossible to reach when the template is displayed to address **http://localhost/sub-directory/** (because the path should be `../media/images/example.jpg`).

To no longer have to worry about access to resources regardless of the URL that is requested, simply turn on all the URLs such as:

```
<link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
<!-- ... -->
<img src="media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="javascripts/common.js"></script>
```

in absolute URLs with variable `urlBasePath` as below:

```
<link rel="stylesheet" type="text/css" href="<?= urlBasePath ?>stylesheets/common.css" />
<!-- ... -->
<img src="<?= urlBasePath ?>media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="<?= urlBasePath ?>javascripts/common.js"></script>
```

Note that in the case of the following configuration:

```json
{
	"routes": {
		"/": {
			"view": "index.htm"
		}
	}
}
```

`urlBasePath` return `http://localhost/` while in this configuration:

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

`urlBasePath` return `http://localhost:7777/sub/folder/`.

#### The paths of templates ####

Using the following webconfig:

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

and the corresponding template

```html
<!-- ... -->
<a href="http://localhost/index.html">Link to home</a>
<a href="http://localhost/contact.html">Link to contact</a>
<!-- ... -->
```

I'd have to change my link in the template if I change the listening port or if I change the path of the URL. The following configuration changes:

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

force me to modify the previous template like that:

```html
<!-- ... -->
<a href="http://localhost:7777/home.html">Link to home</a>
<a href="http://localhost:7777/contact-us.html">Link to contact</a>
<!-- ... -->
```

You can solve this problem by giving a key to a specific path and deporting are way in the `url` property.

With the followinh webconfig:

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

I can now write the link in the dynamic template:

1. as follows

	```html
<!-- ... -->
<a href="<?= urlBasePath ?><?= webconfig.routes.home.url.slice(1) ?>">Link to home</a>
<a href="<?= urlBasePath ?><?= webconfig.routes.contact.url.slice(1) ?>">Link to contact</a>
<!-- ... -->
```

	*Note: `.slice(1)` makes it easy to remove the dual `/` for standard URL.*

2. or as follows

	```html
<!-- ... -->
<a href="<?= urlBasePath ?>.<?= webconfig.routes.home.url ?>">Link to home</a>
<a href="<?= urlBasePath ?>.<?= webconfig.routes.contact.url ?>">Link to contact</a>
<!-- ... -->
```

	*Note: This would, for example `http://localhost/./home.html`, which is a standard URL.*

3. ou comme suit

	```html
<!-- ... -->
<a href="<?= urlBasePathSlice + webconfig.routes.home.url ?>">Link to home</a>
<a href="<?= urlBasePathSlice + webconfig.routes.contact.url ?>">Link to contact</a>
<!-- ... -->
```

	*Note : `urlBasePathSlice` return `http://localhost` in place of `http://localhost/` or `http://localhost:7777/sub/folder` in place of `http://localhost:7777/sub/folder/`.*

#### Utilisation de la clé pour mapper les pages ####

It's maybe useful to know the key used for the current page displayed for find the equivalent page in an other language.

With the following webconfig:

```json
{
	"languageCode": "en-us",
	"routes": {
		"index_en-us": {
			"url": "/",
			"view": "/index.htm"
		},
		"index_fr-fr": {
			"url": "/francais/",
			"view": "index.htm",
			"languageCode": "fr-fr"
		},
		"cv_en-us": {
			"url": "/resume/",
			"view": "cv.htm"
		},
		"cv_fr-fr": {
			"url": "/francais/cv/",
			"view": "index.htm",
			"languageCode": "fr-fr"
		}
	}
}
```

and the common variation following:

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

in `fr` :

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

we could create link between each page as following:

```html
<ul>
	<? for (var i = 0; i < common.language.length; i++) { ?>
	<li><a href="<?= urlBasePath + webconfig.routes[routeKey.split('_')[0] + '_' + common.language[i].code].url ?>"><?- common.language[i].name ?></a></li>
	<? } ?>
</ul>
```



### Custom Template Engine ###

It is possible to let the [Express Template Engine implementation](http://expressjs.com/en/guide/using-template-engines.html) to bypass the NodeAtlas Template Engine implementation for view render. To do this, use the `engine` parameter. See an example with the Handlebars engine:

First, add the Express Handlebars middleware amongs your modules:

```
npm install express-handlebars
```

then, use `engine` with the arbtrary `hbs` value

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

and explain to Express from NodeAtlas how to render views:

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

finaly, see what could be the content of `index.hbs`:

```html
<!DOCTYPE html>
<html lang="en-us">
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

The goal of `engine`, it is to not use the NodeAtlas Template Engine but use it from Express. Because Express need a `response` object to render view, it is not possible to use this feature with the `NA.view` function from NodeAtlas API. `NA.view` only support, EJS, Pug and NodeAtlas syntaxes.

#### Differences between `engine`, `templateEngineDelimiter` and `pug` ####

It's possible to render EJS and Pug view with the Express Template Engine. In this case, because `node-atlas` use already `ejs` and `pug` modules as dependencies, it is not mandatory to use a `controller` and a `npm` command to set them. You have just to set `engine: "ejs"` or `engine: "pug"`.

However, do this remove all additional feature added by NodeAtlas for this engines like for example the dynamic include of view for Pug in the common `view` file with `#{routeParameters.view}`.



### No view ###

It is possible to not using a view and only use a controller. In this case, the `changeVariations` hook is unused. You will fill the `locals.dom` value yourself with the `changeDom` hook.

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

So to the `http://localhost/huey/?query=dewey` URL requested in POST with `member=louie` body you will have the ouput:

```json
{
  "params": "huey",
  "query": "dewey",
  "body": "louie"
}
```

#### No routes ####

No webconfig example not use the `routes` parameter. But it is also optional than others. For example, with the following webconfig:

*webconfig.json*

```json
{
	"controller": "common.js"
}
```

and the following controller:

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

It is possible to have at the address `http://localhost/` a simple "Hello World" message.



### Cache ###

It's a good thing to not serve file with no modification in production. You could set the websconfig's `cache` option to `true` for this:

```json
{
	"cache": true,
	"route": {
		"/": "index.htm"
	}
}
```

You can also start `node-atlas` with `--cache` option :

> ```bash
node-atlas --cache
```

or set your environment variable `NODE_ENV` to `production` :

> if you are in Unix / MacOS

> ```bash
export NODE_ENV=production
```

> or if you are in Windows

> ```bash
SET NODE_ENV=production
```

> or you can run NodeAtlas like this:

> ```bash
NODE_ENV=production node-atlas
```

> or you can also set it in your JavaScript file:

> ```js
process.env.NODE_ENV = "production";
```



### SQL Database ###

We will see now how to use data from the database. We will use MySQL for this example. The `mysql` npm module will be useful. And first, [install a MySQL server](https://dev.mysql.com/downloads/installer/).

So, from your `webconfig.json` directory, use:

```bash
npm install mysql
```

#### MySQL Database ####

First, we will create a database `demo` on the server:

```sql
CREATE DATABASE demo;
```

and select it:

```sql
USE demo
```

and create a `user` table:

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

and fill it with this set of data:

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

#### NodeAtlas Files ####

See now what files we will create to present our example:

```txt
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

We will use the following `webconfig.json` with the custom `_mysqlConfig` variable which contains all information for database connection:

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

Then, we will be connected to the database with the common controller `controllers/common.js`:

```js
exports.setModules = function () {
	var NA = this;

	// Import of `mysql` module.
	NA.modules.mysql = require('mysql');

	// Create a model collection...
	NA.models = {};
	// ...and use the User model with MySQL connection capability.
	NA.models.User = require('../models/connectors/user.js');
};

exports.setConfigurations = function (next) {
	var NA = this,
		path = NA.modules.path,
		mysql = NA.modules.mysql;

	// Create a connection pool to MySQL.
	NA.mySql = mysql.createPool(NA.webconfig._mysqlConfig);

	next();
};
```

And display result via specific controller `controllers/index.js`:

```js
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

		// Read example.
		user
		.setConnection(connection)
		.lastname("Elric")
		.read(function (allUsers) {
			locals.user = user;
			locals.users = allUsers;

			// Create Example.
			user2
			.setConnection(connection)
			.firstname("Winry")
			.lastname("Rockbell")
			.email("winry.rockbell@fma.br")
			.gender(true)
			.create(function (infos) {
				locals.insertId = infos.insertId;
				locals.user2 = user2;

				// Update Example.
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

					// Delete Example.
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

with the `user` model via connecting file to database `models/connectors/user.js`:

```js
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

based on `user` class shared between client-side and server-side `models/objects/user.js`:

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

With following files to display the page:

*views/index.htm*

```html
<!DOCTYPE html>
<html lang="en-us">
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
	"titleWebsite": "Example MySql",
	"male": "Man",
	"female": "Woman"
}
```

*variations/index.json*

```json
{
	"titlePage": "User Table",
	"content": "<p>First entry details.</p>",
	"contents": "<p>All entries details.</p>",
	"contentInsert": "<p>Added and Updated user details.</p>"
}
```

You will get the following output:

```html
<!DOCTYPE html>
<html lang="en-us">
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



### NoSQL Database ###

We will see now how to use data from NoSQL database. We will use the `mongoose` npm module. And first, [install a MongoDB server](https://www.mongodb.com/).

So, from your `webconfig.json` directory, use:

```bash
npm install mongoose
```

#### MongoDB Database ####

First, we will create a database `demo` on the server and select it:

```bash
use demo
```

and create a `user` collection:

```js
db.createCollection("user")
```

and fill it with this document:

```js
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

#### NodeAtlas Files ####

With the following data set:

```txt
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

We will use the following `webconfig.json` with the custom `_mongodbConfig` variable which contain all informations for database connection:

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

With following files to display the page:

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
	"titleWebsite": "Example MongoDB",
	"male": "Man",
	"female": "Woman"
}
```

*variations/index.json*

```json
{
	"titlePage": "User Collection",
	"content": "<p>Document `{ \"identity.firstname\": \"John\" }` details.</p>"
}
```

And last, we will be connected to the database with the common controller `controllers/common.js`:

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

And display result via specific controller `controllers/index.js`:

```js
exports.changeVariations = function (next, locals) {
	var NA = this,
		mongoose = NA.modules.mongoose,
		User = mongoose.model('user');

	User
	.findOne({ "identity.firstname": "Bruno" })
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

based on `user` classe shared between client-side and server-side part `models/user.js`:

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

You will get the following output:

```html
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8" />
		<title>MongoDB Example</title>
	</head>
	<body>
		<div class="title">MongoDB Example</div>
		<div>
			<h1>User Collection</h1>
			<p>Collection `{ "identity.firstname": "Bruno" }` details.</p>
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



### Isomorphic App ###

An isomorphic app is an app which JavaScript source code is for a big part the same as client-side executed code and as server-side executed code. NodeAtlas provide an example of an isomorphic app in the template dedicated to [Vue.js](https://vuejs.org/).

For test this, just:

create a test folder:

```bash
mkdir hello-vue
cd hello-vue
```

then place it the `hello-vue` content

```bash
node-atlas --create hello-vue
```

then install dependencies

```bash
npm install
```

and finaly run the french version

```bash
node-atlas --browse
```

or the international version

```bash
node-atlas --browse --webconfig webconfig.en-us.json
```

You will find all you need about server-side code from `constrollers/common.js` and client-side code on https://ssr.vuejs.org/ and from `assets/javascripts/common.js` on https://vuejs.org/.





## Webconfig's Anatomy ##

The webconfig is that allows you to drive how NodeAtlas will work. If you want to use views or controllers, or if you need some variations if you want to enable PUT / DELETE HTTP request, etc. Without webconfig, NodeAtlas run in Simple Web Server. This is the complete list of parameters of a webconfig. Each is optional depends on your needs.

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
	"imgOptimizationsBeforeResponse[removedFromV2.0.2]": Boolean,
	"imgOptimizationsEnable[removedFromV2.0.2]": Boolean,
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
	"optimizations[removedFromV2.0.2]": (String<filepath-from-root> | Object{
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
	"variationsRelativePath": String<path-from-root>,
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





## CLI / Running commands ##

The easiest way to start is to position NodeAtlas in the directory hosting your site and run the command `node-atlas`. However there are options to launch more than launch the site.

Each of the commands that follow can be coupled with other like this:

```bash
$ node </path/to/>node-atlas/ --path hello-world --webconfig config.fr-fr.js --httpPort 80 --browse
```

or this

```bash
$ node-atlas --lang fr-fr --httpSecure security/server --browse hello-world
```



### --help ###

#### Usage ####

```bash
-h, --help
```

#### About ####

To have help (open MAN) on the following command for the CLI, use `--help` command.

```
$ node-atlas --help
```



### --version ###

#### Usage ####

```bash
-V, --version
```

#### About ####

To know the current NodeAtlas version which is used with the CLI, just use the command `--version` to `vX.X.X` format.

```
$ node-atlas --version
```



### --browse [subpath] ###

#### Usage ####

```bash
-b, --browse [subpath]
```

#### About ####

This command opens your browser to the address on which the site will run. Very handy when you do not remember the port for your development version. This command is useless if it is coupled with `--generate` (see below).

```
$ node-atlas --browse
```

You could also targeted a specific page with the end of url.

```
$ node-atlas --browse index.html
```



### --path ###

#### Usage ####

```bash
-p, --path <path>
```

#### About ####

It is possible to launch NodeAtlas from another location where the website folder is placed. The `--path` command will be very useful.

```bash
$ node-atlas --path </path/to/your/website/directory>/
```



### --webconfig ###

#### Usage ####

```bash
-w, --webconfig <webconfigName>
```

#### About ####

By default, NodeAtlas will read your `webconfig.json` file. It is possible that in addition to the file you created another `webconfig.prod.json` file whose domain name is different. Or a `webconfig.fr-fr.json` with URLs changes for another language. Instead of renaming your files in `webconfig.json` before launching the site, simply enter your other configuration name. In the following example, this file will be `webconfig.alternatif.json`.

```
$ node-atlas --webconfig webconfig.alternatif.json
```



### --httpHostname ###

#### Usage ####

```bash
-H, --httpHostname <httpHostname>
```

#### About ####

You will maybe want know your IP with `ipconfig` to change it in the url to access your website from others device connected to the current network so this command is for you.

```
$ node-atlas --httpHostname 192.168.1.1
```



### --httpPort ###

#### Usage ####

```bash
-P, --httpPort <httpPort>
```

#### About ####

You will not be bored to change your listening port on your projects and sometimes you'll have to work on two different websites simultaneously. With this command you will not need to cut your sites turn to release the listener, simply pick one at launch.

```
$ node-atlas --httpPort 7778
```



### --generate ###

#### Usage ####

```bash
-g, --generate
```

#### About ####

If you change an item in your common variation file or even your view components called in multiple pages, you will not reload each page to update your output files. If so, simply use `--generate`. This command will copy the entire contents of the folder `assetsRelativePath` into `serverlessRelativePath` if their path is different.

```
$ node-atlas --generate
```



### --cache ###

#### Usage ####

```bash
-n, --cache
```

#### About ####

You maybe want not use cached file during the development phase, the most easy way is to use this option. It's your only possibility for run a « Simple Web Server » with no cache.

```
$ node-atlas --cache
```



### --create ###

#### Usage ####

```bash
-c, --create [path]
```

#### About ####

NodeAtlas contain a directory `templates` with predefined website into. To install them in the current directory for NodeAtlas command, you can use `--create` with the name of the `templates` you want use. By default, it's the `hello-world` value that is used. *Possible values: `hello-world`.*

```
$ node-atlas --create hello-world
```



### --httpSecure ###

#### Usage ####

```bash
-S, --httpSecure [pathName]
```

#### About ####

If you use the `--httpSecure` option, all path will be reach in HTTPs. You must defined a `.crt` and `.key` files with `pathName` if you want the engine start in HTTPs. For exemple if you have `security/server.crt` and `security/server.key` from root of NodeAtlas website, you can use following command:

```
$ node-atlas --httpSecure security/server
```



### --lang ###

#### Usage ####

```bash
-l, --lang <cultureCode-countryCode>
```

#### About ####

With the `--lang` parameter you will change language used by NodeAtlas. This command set the content of `languages/default.json` by the content of `languages/fr-fr.json` if you use the "fr-fr" parameter for example like below. Start NodeAtlas later will conserve the last language used by engine.

```
$ node-atlas --lang fr-fr
```



## API / NodeAtlas as npm module ##

You could run NodeAtlas via JavaScript code.

All private functions, modules and namespacese are explained here [la documentation de l'API](https://node-atlas.js.org/doc/node-atlas/). For the [Hooks it's here](#lifecycle) and for server start fonctions it's below :



### &lt;NA>.start() ###

Execute a simple NodeAtlas running with `start()`. By default, it use `webconfig.json` from directory where file is executed. If no `webconfig.json` is set, a Simple Web Server will be launched.

*server.js*

```javascript
require("node-atlas")().start();
```

```
$ server server.js
``



### &lt;NA>.init(options) ###

You can also configure the launch with `init(options)`:

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

The `options` object is the following:

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

*Note : more détails for each option in [CLI part](#cli--running-commands).*



### &lt;NA>.run(options) ###

With `run(options)` you could configure and lanch NodeAtlas with one command.

You can for example run multiple websites in same time. Each webconfig must listen a different port.

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

With `started(callback)`, you could also execute other tasks after server ran:

*servers.js*

```javascript
require("node-atlas")().started(function() {
	console.log("Server started!");
}).run({
	browse: true
});
```



### &lt;NA>.stopped(callback) ###

With `stopped(callback)`, you could also execute other tasks after server stopped:

*servers.js*

```javascript
require("node-atlas")().stopped(function() {
	console.log("Server stopped!");
}).start();
```



### &lt;NA>.generated(callback) ###

With `generated(callback)`, you could also execute other tasks after assets generation:

*servers.js*

```javascript
require("node-atlas")().generated(function() {
	require('child_process').exec(__dirname + "/documentation.bat", function (err, stdout, stderr) {
		console.log("Documentation generation...");
		console.log(stdout);
		console.log("Documentation generation done !");
	});
}).run({
	generate: true
});
```



### &lt;NA>.created(callback) ###

With `created(callback)`, you could also execute other tasks after init the current directory with template website:

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





## NodeAtlas as a simple web server ##

If NodeAtlas can not find the "webconfig.json" or `--webconfig` you have specify, it will run in either "Simple Web Server" or "Public" mode.

**This mode is useful for testing very quickly that NodeAtlas is installed properly or to create small HTML examples that need to run a web server (AJAX returns, embedded iframe, etc.).**

To understand what this means: if there is any file in the directory where NodeAtlas was launched, it will be returned by HTTP request so have the demands via its path.

For example, by launching NodeAtlas in the `site-hello-world` folder

```
site-hello-world/
├─ views/
│  └─ index.htm
└─ webconfig.json
```

by running the command

```
$ node-atlas
```

or even the command

```
$ node-atlas --webconfig webconfig.not-exist.json
```

the server will run in "Simple Web Server" mode and file "http://localhost/webconfig.json" or "http://localhost/views/webconfig.htm" will be available as the browser could refer as a simple web server.

*Note : the command `--generate` not work in this mode.*





## Development Environment ##

NodeAtlas use Node.js which is developed on V8 Engine. The V8 Engine is also used by Google Chrome and Chromium which do NodeAtlas could be debug with this environment.

### Front-end Debug ###

You could debug your HTML render, your CSS files and your JavaScript front-end code in the same way that you'll do that with a simple HTML website or another technology. You have acces with F12 to the JavaScript console, to DOM editable elements, to the CSS property and animation editor and also to the JavaScript file débug system.

The new thing introduce with NodeAtlas is into the CSS editor. Instead of show you name and line of CSS file for rules of an element, if this CSS file was generated from a Stylus or Less, it's the Stylus or Less name and line that you'll see in the editor.

### Back-end Debug ###

From Node.js v6.6+, you could debug your Back-end code with Google Chrome. You have just to do that to use the `--inspect` option of node.

Create for example a starting point file like this :

```javascript
require("node-start")().start()
```

and run the following command :

```
node --inspect server.js
```

The engine will communicate you the url of a page to display in Chrome. Go to this page to see all messages from console into the `console` tab, to debug your code with all Back-end files used in `source` and tests the perfs with `profile`.

### Devices Tests ###

For test your app or website during the development phase on your mobile and pad you must connect your development machine and all devices on the same local network.

For example, connect all your devices on the same Wifi network. Then, find on this network the ip address of your development machine. On Windows, this could be done with the `ipconfig` for example.

When you obtain your ip, just set the hostname and the listening port for your NodeAtlas development instance:

```
node-atlas --httpPort 7777 --httpHostname 192.168.1.24 --browse
```

And that will open the website here : `http://192.168.1.24:7777/`.

You just now reach the url from your other devices to test the render of your app or website.

### Hot Reloading ###

You can use the [browserSync](https://browsersync.io/) npm module and the [Nodemon](https://nodemon.io/) npm module to reload files from your browser automaticly when it changes in your develpoment environment. You need npm module `gulp`, `browserSync` and `gulp-nodemon` to do hot reloading.

#### Dependencies Install ####

The most simple it to add into  `package.json` file the following lines:

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

and run the following command:

```bash
npm install
```

#### Create configuration ####

Create a `server.js` file (if you do not already have one) and place into the following code (for example):

*server.js*

```js
require("node-atlas")().start();
```

Create also a `gulpfile.js` file in which you will add the following line code:

```js
/* jshint node: true */

/* Load modules */
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	nodemon = require('gulp-nodemon');

/* My first task after default task will be the `browser-sync` task. */
gulp.task('default', ['browser-sync']);

/* My task after `browser-sync` will be the `nodemon` task. */
gulp.task('browser-sync', ['nodemon'], function() {

	/* For this task, will listening
		changing into front files */
	browserSync.init(null, {
		proxy: "http://localhost:7777", // The httpPort from NodeAtlas config.
		files: ["views/**", "assets/**", "variations/**"], // All files you want listening from root.
		port: 57776, // Hot reloading listening port.
	});
});

/* Dernière tâche `nodemon`. */
gulp.task('nodemon', function (next) {
	var started = false;

	/* For this task, will listening
		changing into back files */
	return nodemon({
		script: 'server.js', // The script will be start and watched.
		ext: 'js json', // This will be the back files will be listening.
		ignore: ['gulpfile.js', 'variations/**', 'views/**', 'assets/**'] // This are the ignored front files.
	}).on('restart', function() {

		/* When the server restart, restart current page. */
		setTimeout(function () {
			 browserSync.reload();
		}, 500);
	}).on('start', function () {

		/* Not run Nodemon more once. */
		if (!started) {
			next();
			started = true;
		}
	});
});
```

#### Starting ####

Now, all you need to do is run the following command:

```bash
gulp
```

or create an npm command into `package.json` by adding this lines:

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

and run the following command

```bash
npm run watch
```





## Production Environment ##

It's a good thing to develop, but it's time to run your website or apps on online production server. See this examples.

> IMPORTANT : you must use the `"cache": true` option in the production's webconfig to allows engine to be optimised or set your `NODE_ENV` environment variable to `production`.

-----

> NOTE : it's possible your proxy on production not capable to use websockets. In this case, the transport should be limited like this `"socketServerOptions": { transports: ['polling'] }` (in default without this value, transports are tested progressively like this `{ transports: ['polling', 'websocket'] }`.

### In a Windows Server environment with iisnode ###

In a Windows Server 2013 environment with IIS8 the requirements are:

1. Install [the node.exe executable](http://nodejs.org/download/) able to run JavaScript code.
2. Install [the IIS8 UrlRewrite module](http://www.iis.net/downloads/microsoft/url-rewrite) to map pages executed to an output URL.
3. Install [the IIS8 issnode module](https://github.com/tjanczuk/iisnode/downloads) to read web.config and to manage the website (IIS Application Pool Management, start/stop website, etc...).

#### Create application ####

In IIS8, create a web site and create an Application.

The content of your application will be the site mixed with that of NodeAtlas. So that means this:

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

becomes this:

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

You will add to this set of files, additional file named `web.config` whose content is:

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
						  <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true"/>
					 </conditions>
					 <action type="Rewrite" url="node-atlas.js"/>
				</rule>
			</rules>
		</rewrite>
	</system.webServer>
</configuration>
```

to obtain:

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

It will just have to click on "Browse <url-of-Site>" in your IIS8 action panel. You can now manage your website (start / stop / Pool Recycling) like any other IIS8 application.

#### webconfig example ####

An example for a production webconfig:

```json
{
	"urlPort": 80,
	"httpPort": 7777,
	"httpHostname": "www.example.com",
	"routes": {
		...
	}
}
```



### In a Unix environment with forever ###

This requires:

1. Install [the node.exe executable](http://nodejs.org/download/) able to run JavaScript code.
2. Install [the CLI tool forever](https://github.com/nodejitsu/forever) manager for your websites continuously (start, stop, restart, etc.).
3. Running in addition of your websites a reverse-proxy running on port 80 for all applications.


#### Some forever commands ####

To manage a new website in continues to be used the command:

```
$ forever start </path/to/>node-atlas/ --path </path/to/your/website/directory/>
```

To stop it, localise the **uid** with the `list` forever command

```
$ forever list
```

and then use the command:

```
$ forever stop <uid>
```

or `<uid>` is the **uid** of running website.


#### webconfig example ####

An example for a production webconfig:

```json
{
	"urlPort": 80,
	"httpPort": 7777,
	"httpHostname": "www.example.com",
	"routes": {
		...
	}
}

```

You will then use a reverse proxy to make your site accessible on port 80.



#### In a Unix environment with NGINX ####

This is an example of NGINX's configuration:

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

`Ip_backend` must be replaced by your private subnetwork IP. That can be `127.0.0.1` if node run in same server as NGINX.

`websocket` should be replaced by any word, it will be also moddify the `proxy_pass`. It must be unique to each node.



### Proxy ###

#### Bouncy ####

Bouncy is an example of reverse-proxy that you can use to run various NodeAtlas websites (with other types of websites) together on the same port (80).

You can for example:

- run 3 Node.js apps on ports 7777, 7778 and 7779 with forever,
- and besides launching a apache server on port 81

and make all your websites accessible behind domain names on port 80 with Bouncy example.

Here is a sample configuration with Bouncy:

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

and you can start with:

```
$ forever start </path/to/>global-server.js
```

[More information about Bouncy](https://github.com/substack/bouncy)





## More About NodeAtlas ##

NodeAtlas is made of such a way that the instanciate object contains all the functions allowing it to function. NodeAtlas delivers itself it's object into controllers via the methods used in the Back-end mode with Node.js for you to occasionally change his behavior.

### NodeAtlas vs. Others ###

|               | Type                               | Top Features                            | Suitable For                                  | Pure Node runtime | Front-end part | Main support language |
|---------------|------------------------------------|-----------------------------------------|-----------------------------------------------|-------------------|----------------|-----------------------|
| **NodeAtlas** | **MVC(2)** Web Framework           | Simplicity, **Evolutivity**, Modularity | **Web sites/apps**, REST APIs, **Templating** | Yes               | Free           | **French**            |
| Express       | HTTP Server Library                | HTTP routing, middleware                | Simple web apps                               | Yes               | No             | English               |
| Hapi          | HTTP Server Framework              | Modularity, security                    | Web apps, APIs                                | Yes               | Free           | English               |
| LoopBack      | API Framework                      | Enterprise connectivity                 | Web apps, APIs                                | Yes               | Free           | English               |
| Meteor        | Full-stack JavaScript App Platform | Front-end and Back-end Framework        | Web apps                                      | No                | Meteor         | English               |
| Next          | Renderer Server Framework          | React renderer ready to use             | Web apps                                      | Yes               | React          | English               |
| Nuxt          | Renderer Server Framework          | Vue renderer ready to use               | Web apps                                      | Yes               | Vue            | English               |
| Restify       | HTTP Library                       | Simplicity, REST routing                | Simple REST APIs                              | Yes               | No             | English               |
| Sails         | MVC Web Framework                  | Rails familiarity                       | Web apps, APIs                                | Yes               | Free           | English               |
| Total         | MVC Web Framework                  | Django familiarity                      | Web apps, APIs                                | Yes               | jComponent     | English               |