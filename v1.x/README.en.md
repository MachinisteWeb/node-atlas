# node-atlas #

[![Donate](https://img.shields.io/badge/donate-%3C3-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://travis-ci.org/Haeresis/NodeAtlas.svg)](https://travis-ci.org/Haeresis/NodeAtlas/) [![Version 1.8](https://img.shields.io/badge/version-1.8-brightgreen.svg)](https://github.com/Haeresis/NodeAtlas)

**Vous êtes français ? Le README [derrière ce lien](README.fr.md) vous sera peut-être plus agréable.**


![NodeAtlas](../media/images/ex-logo-node-atlas.png)


## Overview ##

NodeAtlas is a Server-side MVC(2) JavaScript Framework as an [npm module](https://www.npmjs.com/package/node-atlas) ([node-atlas](https://www.npmjs.com/package/node-atlas)) and designed to run with [Node.js](https://nodejs.org/) verision. NodeAtlas allows you to:

- Create, maintain and document a set of assets HTML / CSS / JavaScript as user interfaces to provide solid guidelines for the realization of website or webapp (i.e. for brands).

   Exemple : [Pages, Componants and Web Interface](https://www.lesieur.name/test-case-atlas/) or official NodeAtlas website.

- Create and maintain and run internationalized wesites without use a single JavaScript file. That's it's perfect for beginners or for develop presentational website with high performance quickly.
   
   Exemple : [Simple Web Page](http://bruno.lesieur.name/)

- Develop Node.js internationalized websites or scalable [Node.js](https://nodejs.org/en/) applications running of all sizes with server-based source code for high performance, indexability for SEO and W3C compliancy. Distant REST APIs are also easily to create.
   
   Exemple : [Blog](http://blog.lesieur.name/), [Portfolio](http://www.lesieur.name/) or [Distant API](http://www.lesieur.name/api/)



### Why NodeAtlas ###

NodeAtlas is designed to create scalable websites and to allow Front-end and Back-end developers to embrace [Node.js](https://nodejs.org/en/).

Starting with a single HTML page,

- then internationalize it,
- then create other pages,
- then minify/obfuscate/optimized your sources,
- then use Less or/and Stylus,
- then use files for drive back-end part with code,
- then connect you to [MySQL](https://www.mysql.fr/), [MongoDB](https://www.mongodb.org/), [ElasticSearch](https://www.elastic.co/)...,
- then use [Socket.io](http://socket.io/) for real time,
- then be component-based with [ComponentAtlas](https://github.com/Haeresis/ComponentAtlas)
- then let your customer edit website itself with [EditAtlas](https://github.com/Haeresis/EditAtlas)
- then create plugins,
- then...



### And what about others JavaScript Frameworks? ###

In opposition to others JavaScript Frameworks like Vue, Angular or React, NodeAtlas run server-side and provide some real urls by Response HTTP. Websites are indexale and W3C compliant that means each page are construct by HTTP response and after by AJAX or Websocket mechanisms. So, NodeAtlas is not an alternative to others Front-end JavaScript Frameworks that only use [Node.js](https://nodejs.org/en/) for use after [npm](https://www.npmjs.com/), [jspm](http://jspm.io/) or [gulp](http://gulpjs.com/). So, NodeAtlas is same as Sails or Meteor. And that means NodeAtlas is a substituant to PHP, JAVA or C# server-side. In the same way as [Meteor.js](https://www.meteor.com/), NodeAtlas allow you to set your working environment and you have not need of [gulp](http://gulpjs.com/) but to oposition of [Meteor.js](https://www.meteor.com/), the `NA` object is not provided client-side. It's your responsability to spread server-side mechanism to front.

To comparate NodeAtlas with others JavaScript Server-side Library/Framework/API, [you could check this grid](#nodeatlas-vs-others).



### Examples of websites with NodeAtlas ###

This is a list of repository you could analyse to understand NodeAtlas:

- [Generation and HTML template maintenance](https://github.com/Haeresis/ResumeAtlas/).
- [UI Test and UI Documentation](https://github.com/Haeresis/TestCaseAtlas/).
- [HTML website maintenance (no Back-end)](https://github.com/Haeresis/NodeAtlas/tree/gh-pages/).
- [Node.js website with Websocket and PopState](https://github.com/Haeresis/BookAtlas/).
- [Node.js website with MongoDB database and Redis](https://github.com/Haeresis/BlogAtlas/).
- [Node.js example of content filling in real time without Back-office](https://github.com/Haeresis/EditAtlas/).
- [Simple web server for a file](https://github.com/Haeresis/SimpleAtlas/).
- [API REST example](https://github.com/Haeresis/ApiAtlas/).
- [CSS-driven usage with Less preprocessor with CSS Framework](https://github.com/Haeresis/LessAtlas/).
- [Plugin to boost standard capabilities](https://github.com/Haeresis/ComponentAtlas/).



### Table of Contents ###

- [Overview](#overview)
 - [Why NodeAtlas](#why-nodeatlas)
 - [And what about others JavaScript Frameworks?](#and-what-about-others-javascript-frameworks)
 - [Examples of websites with NodeAtlas](#examples-of-websites-with-nodeatlas)
 - [Table of Contents](#table-of-contents)
 - [Documentation](#documentation)
 - [Contributing](#contributing)
- [Installing](#installing)
 - [Install NodeAtlas](#install-nodeatlas)
 - [Install Node.js](#install-nodejs)
- [Start with NodeAtlas](#start-with-nodeatlas)
 - [Fileset](#fileset)
 - [Minimum Requirements](#minimum-requirements)
 - [Run the site with NodeAtlas](#run-the-site-with-nodeatlas)
- [View and Template Part](#view-and-template-part)
 - [More one page](#more-one-page)
 - [Template shortcut](#template-shortcut)
 - [Host images, fonts, CSS, JS, etc.](#host-images-fonts-css-js-etc)
 - [Manage inclusions to avoid redundancy code](#manage-inclusions-to-avoid-redundancy-code)
 - [Manage variations within the same template](#manage-variations-within-the-same-template)
 - [Manage Multilingual](#manage-multilingual)
 - [Change the url parameters](#change-the-url-parameters)
 - [Create your own webconfig variables](#create-your-own-webconfig-variables)
 - [NodeAtlas use to generate HTML assets](#nodeatlas-use-to-generate-html-assets)
- [Controller and Model Part](#controller-and-model-part)
 - [Lifecycle and Hooks](#lifecycle-and-hooks)
 - [Use Websocket instead of AJAX](#use-websocket-instead-of-ajax)
 - [Use MySQL Database (SQL)](#use-mysql-database-sql)
 - [Use MongoDB Database (NoSQL)](#use-mongodb-database-nosql)
- [More features](#more-features)
 - [Manage routing (URL Rewriting)](#manage-routing-url-rewriting)
 - [Manage a page not found](#manage-a-page-not-found)
 - [Manage redirects](#manage-redirects)
 - [Manage Headers](#manage-headers)
 - [Run Website with HTTPs](#run-website-with-https)
 - [Minify CSS / JS](#minify-css--js)
 - [CSS generation with Less](#css-generation-with-less)
 - [CSS generation with Stylus](#css-generation-with-stylus)
 - [Optimize Images files](#optimize-images-files)
 - [CSS Inline Injection for Manage Email Assets](#css-inline-injection-for-manage-email-assets)
 - [Allow / Disallow GET / POST requests](#allow--disallow-get--post-requests)
 - [Allow / Disallow PUT / DELETE requests](#allow--disallow-put--delete-requests)
 - [Change settings of Sessions](#change-settings-of-sessions)
 - [External Storage Sessions](#external-storage-sessions)
 - [Changing the template engine brackets <% %>](#Changing-the-template-engine-brackets--)
 - [Change the url hostname and listening port](#change-the-url-hostname-and-listening-port)
 - [Generate urls dynamically](#generate-urls-dynamically)
- [CLI / Running commands](#cli--running-commands)
 - [--directory &lt;path>](#--directory-path)
 - [--webconfig &lt;webconfigName>](#--webconfig-webconfigname)
 - [--browse [subpath]](#--browse-subpath)
 - [--httpHostname &lt;httpHostname>](#--httphostname-httphostname)
 - [--httpPort &lt;httpPort>](#--httpport-httpport)
 - [--generate](#--generate)
 - [--lang &lt;culture-country>](#--lang-culture-country)
 - [--init [path]](#--init-path)  
 - [--httpSecure [pathName]](#--httpsecure-pathname)
- [API / NodeAtlas as npm module](#api--nodeatlas-as-npm-module)
 - [&lt;node-atlas-instance>.init()](#node-atlas-instanceinit)
 - [&lt;node-atlas-instance>.config(Object)](#node-atlas-instanceconfigobject)
 - [&lt;node-atlas-instance>.run(Object)](#node-atlas-instancerunobject)
 - [&lt;node-atlas-instance>.started(Function)](#node-atlas-instancestartedfunction)
 - [&lt;node-atlas-instance>.generated(Function)](#node-atlas-instancegeneratedfunction)
 - [&lt;node-atlas-instance>.created(Function)](#node-atlas-instancecreatedfunction)
- [NodeAtlas as a simple web server](#nodeatlas-as-a-simple-web-server)
- [Development Environment](#development-environment)
 - [Front-end Debug](#front-end-debug)
 - [Back-end Debug](#back-end-debug)
 - [Devices Tests](#devices-tests)
- [Production Environment](#production-environment)
 - [In a Windows Server environment with iisnode](#in-a-windows-server-environment-with-iisnode)
 - [In a Unix environment with forever](#in-a-unix-environment-with-forever)
 - [In a Unix environment with Nginx](#in-a-unix-environment-with-nginx)
 - [Proxy](#proxy)
- [More About NodeAtlas](#more-about-nodeatlas)
 - [NodeAtlas VS Others](#nodeatlas-vs-others)



### Documentation ###

In addition to this README, you also have access to,
- [tl;dr](https://www.npmjs.com/package/node-atlas),
- [details of functions in the NA object](https://node-atlas.js.org/v1.x/doc/index.html) and you could
- [discuss on chat and ask asistance for NodeAtlas](https://gitter.im/NodeAtlas/Help).



### Contributing ###

If you would like to contribute with:

 - Code enhancements and fixes,
 - French correct spelling mistake or
 - Decent english translation

Please do the following:

 1. Fork the NodeAtlas repository.
 2. Hack on a separate topic branch created from the latest master.
 3. Commit and push the topic branch.
 4. Make a pull request.
 5. Be patient. ;-)

Please note that modications should follow these coding guidelines:

- [Pass Sonarqube JS with rank A](http://www.sonarqube.org/) : Bugs, Vulnerabilities and Debt Ratio.

Thank you for helping out!





## Installing ##

Before install NodeAtlas, install [Node.js](https://nodejs.org/), we will see this in the section : [Install Node.js](#install-nodejs) bellow.

### Install NodeAtlas ###

*Note: With Linux, add `sudo` before all commands if you're not logged with root user.*

There are several ways to install NodeAtlas:

- `npm install node-atlas` (recommended for [use as a module](#api--nodeatlas-as-npm-module) in a project).

   *This will install* **NodeAtlas** *in the `node_modules/node-atlas` directory of the execution of the command.*

- `npm install -g node-atlas` (recommended for [use as a module](#api--nodeatlas-as-npm-module) in large amount of project or for [a command line utilisation](#cli--running-commands)).

   *This will install* **NodeAtlas** *in the global `node_modules/node-atlas`.*

- Clone the directory from [GitHub](https://github.com/Haeresis/NodeAtlas/) (recommended for participating to project).

   *This will install* **NodeAtlas** *in cloning home folder.*

   **Start at least once NodeAtlas the with the command line `\> node </path/to/>node-atlas/`, to install the _node_modules_.**

- Download NodeAtlas from the official repository [NodeAtlas](https://haeresis.github.com/NodeAtlas).

   *Once downloaded, unzip* **NodeAtlas** *in the folder that will suit you.*

   **Use `npm install` command from `</path/to/>node-atlas/` directory to install all dependencies.**



### Install Node.js ###

NodeAtlas is developed as a [Node.js Module Package](https://www.npmjs.com/) that means its require Node.js to work. Node.js allows us to quickly and efficiently run JavaScript code outside the browser, making it possible to use the same language on both the front-end and the back-end.

*Note: Python 2.6 or 2.7 is required to build from source tarballs.*

#### Install on Windows ####

Using a package:

- [Download Windows Installer](https://nodejs.org/en/download/).

Using [chocolatey](http://chocolatey.org/) to install Node:

```
cinst nodejs
```

or for full install with NPM:

```
cinst nodejs.install
```

#### Install on OSX ####

Using a package:

- [Download Macintosh Installer](https://nodejs.org/en/download/).

Using [homebrew](https://github.com/mxcl/homebrew):

```
brew install node
```

Using [macports](http://www.macports.org/):

```
port install nodejs
```

#### Install on Linux ####

Using a package:

- [Download Linux Binaries](https://nodejs.org/en/download/).

Example install with apt-get:

```
sudo apt-get install python-software-properties python g++ make
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

There is a naming conflict with the node package (Amateur Packet Radio Node Program), and the nodejs binary has been renamed from node to nodejs. You'll need to symlink /usr/bin/node to /usr/bin/nodejs or you could uninstall the Amateur Packet Radio Node Program to avoid that conflict.





## Start with NodeAtlas ##

We will start with a how to set minimal files to perform a `hello-world`.

### Fileset ###

After installing NodeAtlas somewhere on your machine, you create a set of files representing a site anywhere else like structure below.

```
site-hello-world/
├─ templates/
│  └─ index.htm
└─ webconfig.json
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
\> node </path/to/>node-atlas/
```

You will have access to your "Hello World" to the page: *http://localhost/* in a browser.


#### With an executable on your OS ####

**If you have installed NodeAtlas with `npm install -g node-atlas`** you can also use the `nodeatlas` command. `nodeatlas` is a shortcut for `node </path/to/>node-atlas/`.

Position yourself with the prompt console in the folder « /site-hello-world/ » and run the following command.

```
\> nodeatlas
```

*Note : *if the `nodeatlas` command do not work on unix OS after installation, it's probably because of right problem. If you are root, the command `chown -R root:root /usr/local/bin/` before re-execuse `npm install -g node-atlas` command will fix issue, else, use the command `sudo npm install -g node-atlas`.*


#### Via a JavaScript file ####

You can also use NodeAtlas as a npm module.

*server.js*

```javascript
var nodeAtlas = require("node-atlas");

nodeAtlas().run();
```

```
\> node server.js
```





## View and Template Part ##

NodeAtlas works with a configuration with usage of `webconfig.json` that allow its to scale and upgrade possibilities in a versatille way. For example, to create a website without JavaScript server-side (no controller), just add a `template` parameter to each route.

It's still possible to use JavaScript inline into templates with the capabilities offer by template engine [EJS2](http://ejs.co/) used by NodeAtlas.

We will see all possibilities with couples of templates files together.

### More one page ###

Below is a sample configuration.

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

To run this set of file:

```
├─ templates/
│  ├─ index.htm
│  ├─ member.htm
│  └─ error.htm
└─ webconfig.json
```

with the addresses:

- *http://localhost/* (responds to the root)
- *http://localhost/member.html* (will not respond if is POST requested)
- *http://localhost/member-without-extension/* (will not respond if is GET requested)
- *http://localhost/error.html* (return of the plain-text content (without markup) with a 404)

*Note : If* ***templatesRelativePath*** *is not present in "webconfig.json", template folder is* ***templates***. ***templatesRelativePath*** *is useful only to change the name/path of directory.*



### Template shortcut ###

The configuration below is equivalent to the configuration section just above

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
    "assetsRelativePath": "assets",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and this set of files:

```
├─ assets/
│  ├─ stylesheets/
│  │  └─ common.css
│  ├─ javascript/
│  │  └─ common.js
│  └─ media/
│     └─ images/
│        └─ logo.png
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/stylesheets/common.css*
- *http://localhost/javascript/common.js*
- *http://localhost/media/images/logo.png*

*Note : If* ***assetsRelativePath*** *is not present in "webconfig.json", default public folder is* ***assets***. ***assetsRelativePath*** *is useful only to change the name/path of directory.*

#### maxAge, Etag, etc. ####

It's possible to manage informations provided by NodeAtlas when a ressource is requested (like `maxAge`, `etag`, etc.) via the `staticOptions` property in webconfig. For more informations, see the [Express](http://expressjs.com/api.html#express.static) documentation about static files.

For exemple, for a devlopment webconfig, it's interresting to put the `maxAge` to 0 in order to always get the last modifications into a file and avoid frenetic browser reload.

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



### Manage inclusions to avoid redundancy code ###

You can segment your HTML codes to not repeat the redundant code such "head" part and "foot" part or any other code fragment:

```js
{
    "componentsRelativePath": "components",
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/list-of-members/": {
            "template": "members.htm"
        }
    }
}
```

with the following files:

```
├─ assets/
│  ├─ stylesheets/
│  │  └─ common.css
│  └─ javascript/
│     └─ common.js
├─ components/
│  ├─ head.htm
│  └─ foot.htm
├─ templates/
│  ├─ index.htm
│  └─ members.htm
└─ webconfig.json
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
        <h1>Welcome</h1>
        <p>This is the home page.</p>
    </div>

    <%- include('foot.htm') %>
```

*templates/members.htm*

```html
    <%- include('head.htm') %>

    <div>
        <h1>List of members</h1>
        <p>It is the Members page.</p>
    </div>

    <%- include('foot.htm') %>
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/list-of-members/*

*Note : If* ***componentsRelativePath*** *is not present in "webconfig.json", default include folder is* ***components***. ***componentsRelativePath*** *is useful only to change the name/path of directory.*



### Manage variations within the same template ###

It is possible with the same template and the same includes, generating pages with different content (useful in generation HTML assets mode). Activate the variations with the following configuration:

```js
{
    "commonVariation": "common.json",
    "variationsRelativePath": "variations",
    "routes": {
        "/": {
            "template": "template.htm",
            "variation": "index.json",
        },
        "/list-of-members/": {
            "template": "template.htm",
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
│  └─ javascript/
│     ├─ common.js
│     ├─ index.js
│     └─ members.js
├─ components/
│  ├─ head.htm
│  └─ foot.htm
├─ variations/
│  ├─ common.json
│  ├─ index.json
│  └─ members.json
├─ templates/
│  └─ template.htm
└─ webconfig.json
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
- *http://localhost/list-of-members/*

*Note : If* ***variationsRelativePath*** *is not present in "webconfig.json", default variations folder is* ***variations***. ***variationsRelativePath*** *is useful only to change the name/path of directory.*



### Manage Multilingual ###

#### All languages on the same site ####

On the same principle, the variations can be used to create the same page, but in different languages:

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

*Note : In this example I decided to do without a common variation file, because I did not specify* ***commonVariation***. *I also completely arbitrarily decided to rename my folder* ***variations*** *to* ***languages***.

with the following files:

```
├─ components/
│  ├─ head.htm
│  └─ foot.htm
├─ languages/
│  ├─ landing.json
│  ├─ en-gb
│  │  └─ home.json
│  └─ fr-fr
│     └─ home.json
├─ templates/
│  ├─ landing.htm
│  └─ home.htm
└─ webconfig.json
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
│
┊┉
├─ variations/
│  ├─ common.json
│  ├─ home.json
│  ├─ fr-fr
│  │  ├─ common.json
│  │  └─ home.json
┊┉
```

you can

- manage the version `en-gb` directly to the root of `variations/` (as NodeAtlas find nothing in` en-gb` then it uses the values of the root files) and
- manage the `fr-fr` release in the` fr-fr / `,

thus, if a sentence has not yet translated into a file `fr-fr`, instead of returning an error, NodeAtlas return the root version or the version` en-gb`.


#### Each language has its configuration ####

You can also choose to configure each language in a "webconfig.json" different. With the following set of file:

```
├─ components/
│  ├─ head.htm
│  └─ foot.htm
├─ variations/
│  ├─ landing.json
│  ├─ en-gb
│  │  ├─ home.json
│  │  └─ members.json
│  └─ fr-fr
│     ├─ home.json
│     └─ members.json
├─ templates/
│  ├─ landing.htm
│  ├─ home.htm
│  └─ members.htm
├─ webconfig.json
├─ webconfig.en-gb.json
└─ webconfig.fr-fr.json
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
        "/list-of-members/": {
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
- *http://localhost:82/francais/list-of-members/*

It is then possible to reverse proxy with [Bouncy](#proxy) (for example) to bring all urls on port 80 to obtain:

- *http://www.website.ext/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/members-list/*
- *http://www.website.ext/francais/*
- *http://www.website.ext/francais/list-of-members/*



### Change the url parameters ###

By default, if you use the following configuration:

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

This is the same to using it:

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

and you will be access to the url: *http://localhost/*.

Then change the configuration to this:

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

for access to : *https://127.0.0.1:7777/sub/folder/*



### Create your own webconfig variables ###

Imagine two webconfigs in which we create our own variables as follows:

1. "webconfig.json"

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

2. "webconfig.prod.json"

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

with this set of files

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  └─ common.min.css
│  └─ javascript/
│     ├─ common.js
│     └─ common.min.js
├─ templates/
│  └─ index.htm
├─ webconfig.json
└─ webconfig.prod.json
```

and "index.htm" containing:

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
        <link rel="stylesheet" type="text/css" href="stylesheets/common<%= webconfig._minified %>.css" />
    </head>
    <body>
        <div>This is a test to get a file minify/unminify.</div>
        <script type="text/javascript" src="javascript/common<%= webconfig._minified %>.js"></script>
    </body>
</html>
```

To run (since the site folder) the the command:

```
\> node </path/to/>node-atlas/
```

We will have to address "http://localhost/" the following output with non-minified files:

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
        <script type="text/javascript" src="javascript/common.js"></script>
    </body>
</html>
```

However, running the command:

```
\> node </path/to/>node-atlas/server.js --webconfig webconfig.prod.json
```

We will have to address "http://localhost/" the following output with minified files:

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
        <script type="text/javascript" src="javascript/common.min.js"></script>
    </body>
</html>
```

*Note : It is better to prefix his personal variables with "_" to avoid conflicts with existing or future configuration variables.*



### NodeAtlas use to generate HTML assets ###

#### Generate HTML assets ####

With the following configuration it is possible to generate HTML rendering assets of each page in a linked file. The file will be (re)created every display of page in your browser.

```js
{
    "htmlGeneratesBeforeResponse": true,
    "generatesRelativePath": "generates",
    "routes": {
        "/": {
            "template": "index.htm",
            "generate": "/index.html"
        },
        "/list-of-members/": {
            "template": "members.htm",
            "generate": "/members/list.html"
        },
        "/list-of-members/?foo=bar": {
            "template": "members.htm",
            "generate": false
        },
        "/no/generate/property/": {
            "template": "members.htm"
        }
    }
}
```

and the following set of files:

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  └─ javascript/
│     └─ common.js
├─ generates/
├─ templates/
│  ├─ index.htm
│  └─ members.htm
└─ webconfig.json
```

can physically create assets:

```
├─ assets/
│  ┊┉
├─ generates/
│  ├─ stylesheets/
│  │  ├─ common.css
│  ├─ javascript/
│  │  └─ common.js
│  ├─ index.html
│  ├─ members/
│  │  └─ list.html
│  └─ no/
│     └─ generate/
│        └─ property ⤆ Ceci est un fichier
├─ templates/
│  ┊┉
└─ webconfig.json
```

by going to the address:

- *http://localhost/*
- *http://localhost/list-of-members/*
- *http://localhost/no/generate/property/*

*Note : No generate page are generated for "/list-of-members/?foo=bar" because `generate` is set to `false`. Use this value to ignore a route generation.*

The generation starts when displaying the page if ***htmlGeneratesBeforeResponse*** exist and if it is ***true***. If it is passed ***false*** (or removed) the only way to generate all the pages of the website will be via the command `node </path/to/>node-atlas/server.js --generate` will generate all pages once if `generatesRelativePath` exist. Of course in all cases this command work and allow you to regenerate all pages after a change into all page (a change in a component called on all pages e.g.).

Also with `--generate` , the entire ` assetsRelativePath` folder (public folder files) will be copied in the `generatesRelativePath` if both folder does not have the same path, and if `generatesRelativePath` exist. It really allows you to get the stand-alone pages you want in output folder with all files which they call (CSS / JS / Images, etc.).

You could desactivate the HTML generation, even if a directory `generatesRelativePath` exist in the système file, with `htmlGenerateEnable` à `false`.

*Note : If* ***generatesRelativePath*** *is not present in "webconfig.json", default generates folder is* ***generates/***. ***generatesRelativePath*** *is useful only to change the name/path of directory.*


#### Generate website without server side ####

You can also manager a simple HTML website page with the following configuration:

```js
{
    "languageCode": "fr-fr",
    "enableIndex": true,
    "htmlGeneratesBeforeResponse": true,
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
├─ HTML/
│  ├─ stylesheets/
│  │  └─ common.css
│  └─ javascript/
│     └─ common.js
└─ engine/
   ├─ variations/
   │  ├─ fr-fr/
   │  │  └─ index.json
   │  └─ en/
   │     └─ index.json
   ├─ templates/
   │  └─ index.htm
   └─ webconfig.json
```

To address *http://localhost/* will show a list of pages your site components (with **enableIndex** set to **true**).

It will do more than, once your work is done, enjoy your HTML site in the folder:

```
└─ HTML/
   ├─ stylesheets/
   │  └─ common.css
   ├─ javascript/
   │  └─ common.js
   ├─ cv.html
   └─ en/
      └─ cv.html
```





## Controller and Model Part ##

NodeAtlas is useful for more than simply generate template web page easily based on your variation files. NodeAtlas allow you to dynamicly interact with variations var and with the DOM with;

- parameters in query part of url (GET),
- parameters in request body (POST),
- connection with database or,
- management of sessions or,
- do AJAX or Websocket request/response and
- do more !



### Lifecycle and Hooks ###

For that, you could hook to some point of life cycle of the page generation with common controller (`commonController`) and with specific controller for each page (`routes[<route>].controller`).

This is a `webconfig.json` allows you to manipulate each part of life cycle of a page.

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

*Note : If* ***controllersRelativePath*** *is not present in "webconfig.json", default controller folder is* ***controllers***. ***controllersRelativePath*** *is useful only to change the name/path of directory.*

and this is the detail of all hooks :

**Start NodeAtlas** 
> Init of Modules

> - *loadModules* --> into `commonController` file (`common.js` for example).

> Init of Sessions

> - *setSessions* --> into `commonController` file (`common.js` for example).

> Init of server configuration

> - *setConfigurations* --> into `commonController` file (`common.js` for example).

> Init of routes

> - *setRoutes* --> à manipuler depuis le fichier `commonController` (`common.js` dans l'exemple).

> Start Web Server

**HTTP Request/Response of NodeAtlas**
> Client Request Processing

> - *changeVariation* --> into `commonController` file (`common.js` for example).

> - *changeVariation* --> into `routes[<route>].controller` file (`index.js` for example).

> Templates and Variations Compilation => Complete DOM.

> - *changeDom* --> into `commonController` file (`common.js` for example).

> - *changeDom* --> into `routes[<route>].controller` file (`index.js` for example).

> Sending of Response to Client

#### changeVariation ####

In order to intercept variations, you could use common controller for all the website page and/or also a specific controller per page.

This is an example using the two hooks, the common in first and after the specific:

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

with this files :

```
├─ components/
│  ├─ head.htm
│  └─ foot.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

Do a POST request on `http://localhost/?title=Haeresis` with `example=This+is+a+test` variable in body will use the following files:

*variations/common.json*

```js
{
    "titleWebsite": "Site Title"
}
```

*variations/index.json*

```js
{
    "titlePage": "Welcome",
    "content": "<p>This is the Home Page.</p>"
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
// This code is executed before variation are injected into template engine.
// This code is executed for all HTTP request, for all pages.
exports.changeVariation = function (params, next) {
    var variation = params.variation,
        request = params.request,
        response = params.response;

    // Here we update variations variable.

    console.log(variation.common.titleWebsite); // "Site Title"
    console.log(variation.specific.titlePage); // "Welcome"
    console.log(variation.specific.content); // "This is the Home Page."

    if (request.query["title"]) {
        variation.specific.titlePage = variation.specific.titlePage + " " + request.query.title;
    }
    if (request.body["example"]) {
        variation.specific.content = request.body.example;
    }
    
    console.log(variation.common.titleWebsite); // "Site Title"
    console.log(variation.specific.titlePage); // "Welcome Haeresis"
    console.log(variation.specific.content); // "This is a test"

    // We update modification here.
    next(variation);
};
```

*controllers/index.js*

```js
// This code is executed before variation are injected into template engine.
// This code is executed only for the « / » page .
exports.changeVariation = function (params, next) {
    var variation = params.variation,
        request = params.request,
        response = params.response;

    // Here we update variations variable.

    console.log(variation.common.titleWebsite); // "Site Title"
    console.log(variation.specific.titlePage); // "Welcome Haeresis"
    console.log(variation.specific.content); // "This is a test"

    variation.common.titleWebsite = "It's Home, no way.";
    variation.specific.content = "It's Home, no way.";

    console.log(variation.common.titleWebsite); // "It's Home, no way."
    console.log(variation.specific.titlePage); // "Welcome Haeresis"
    console.log(variation.specific.content); // "It's Home, no way."

    // We update modification here.
    next(variation);
};
```

en this produce the following output :

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>It's Home, no way.</title>
    </head>
    <body>
        <div class="title">It's Home, no way.</div>
        <div>
            <h1>Welcome Haeresis</h1>
            It's Home, no way.
        </div>
    </body>
</html>
```

If you delete the variation entry of specific page from webconfig:

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

the output will be as following:

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Site Title</title>
    </head>
    <body>
        <div class="title">Site Title</div>
        <div>
            <h1>Welcome Haeresis</h1>
            This is a test
        </div>
    </body>
</html>
```

#### changeDom ####

In order to intercept DOM before it was sent, you could use common controller for all the website page and/or also a specific controller per page.

This is an example using the two hooks, the common in first and after the specific:

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

with this files :

```
├─ variations/
│  └─ index.json
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

Do a POST request on `http://localhost/` will use the following files:

*variations/common.json*

```js
{
    "titleWebsite": "Site Title"
}
```

*variations/index.json*

```js
{
    "titlePage": "Welcome",
    "content": "<p>This is Home Page.</p>"
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
// This code is executed before DOM was sent to Client.
// This code is executed for all HTTP request, for all pages.
exports.changeDom = function (params, next) {
    var NA = this,
        dom = params.dom,
        request = params.request,
        response = params.response,
        cheerio = NA.modules.cheerio, // jsdom for manipulate DOM with jQuery.
        $ = cheerio.load(dom, { decodeEntities: false }); // We load datas for manipulate it as a DOM.

    // Just after eath h1 from HTML DOM...
    $("h1").each(function () {
        var $this = $(this);

        // ...we create a div,
        $this.after(
            // ...we inject the content of h1 into the div,
            $("<div>").html($this.html())
        );
        // ...and we delete the h1.
        $this.remove();
    });

    // We create a new HTML output with updates.
    dom = $.html();

    // We update modification here.
    next(dom);
};
```

*controllers/index.js*

```js
// This code is executed before DOM was sent to Client.
// This code is executed only for the « / » page .
exports.changeDom = function (params, next) {
    var NA = this,
        dom = params.dom,
        request = params.request,
        response = params.response,
        cheerio = NA.modules.cheerio, // jsdom for manipulate DOM with jQuery.
        $ = cheerio.load(dom, { decodeEntities: false }); // We load datas for manipulate it as a DOM.

    // We update nodes contents with `.title` class.
    $(".title").text("Content Update");

    // We create a new HTML output with updates.
    dom = $.html();

    // We update modification here.
    next(dom);
};
```

the output will be as following:

```html
<!DOCTYPE html>
<html lang="fr-fr">
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

#### loadModules ####

To load others modules which not include into NodeAtlas, you can use the common controller for all the website in order to load it once and use modules anywhere in all controllers.

This is an exemple using an external module of NodeAtlas:

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

with this set of files:

```
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

Do a POST request on `http://localhost/` will use the following files:

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
// This code is executing during the modules loading phase.
// This code will be executed when NodeAtlas starting.
exports.loadModules = function () {
    // Use the « NodeAtlas » instance from engine.
    var NA = this;

    // Associate each modules to allow us to use them anywhare.
    NA.modules.marked = require('marked');
};
```

*controllers/index.js*

```js
// This code is executed before variation are injected into template engine.
// This code is executed only for the « / » page .
exports.changeVariation = function (params, next) {
    // Use the « NodeAtlas » instance from engine.
    var NA = this,
        variation = params.variation,
        marked = NA.modules.marked;

    variation.example = marked("I am using __markdown__.");

    // We update modification here.
    next(variation);
};
```

this will produce the following output:

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

To configure NodeAtlas web server others ([ExpressJs](http://expressjs.com/)), you can use the common controller for all the website in order to load it once and use modules anywhere in all controllers.

This is an exemple using a middleware for [ExpressJs](http://expressjs.com/):

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

with this set of files:

```
├─ controllers/
│  └─ common.js
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

Do a POST request on `http://localhost/` will use the following files:

*templates/index.htm*

```html
<%- content %>
```

*controllers/common.js*

```js
// This code is executing before starting of the web server.
// This code will be executed when NodeAtlas starting.
exports.setConfigurations = function (next) {
    // Use the « NodeAtlas » instance from engine.
    var NA = this;

    // Middleware utilisé lors de chaque requête.
    NA.httpServer.use(function (request, response, next) {
        response.setHeader("X-Frame-Options", "ALLOW-FROM https://www.lesieur.name/");
        next();
    });

    // We update modification here.
    next();
};
```

*controllers/index.js*

```js
// This code is executing before starting of the web server.
// This code is executed only for the « / » page .
exports.changeVariation = function (params, next) {
    var variation = params.variation;

    // We prepare file for JSON displaying.
    variation.currentRouteParameters.headers = {
        "Content-Type": "application/json; charset=utf-8"
    };
    variation.content = JSON.stringify(variation, null, "    ");

    // We update modification here.
    next(variation);
};
```

this will produce the following output:

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

To configure client-server Sessions of NodeAtlas, you can use the common controller for all the website in order to load it once and use modules anywhere in all controllers, this is an example with [Redis](http://redis.io/) sessions.

This is all files for example:

```
├─ controllers/
│  └─ common.js
├─ templates/
│  └─ index.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
└─ webconfig.json
```

With the `webconfig.json`:

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

And "common.js" file containing e.g.:

```js
// This code is executing during the modules loading phase.
// This code will be executed when NodeAtlas starting.
exports.loadModules = function () {
    // Find instance of « NodeAtlas » engine.
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

    // We update modification here.
    next();
};
```

#### setRoutes ####

To configure routes of NodeAtlas by programmation, you can use the common controller for all the website in order to load it once and use modules anywhere in all controllers.

This is all files for example:

```
├─ controllers/
│  └─ common.js
├─ templates/
│  ├─ content.htm
│  └─ index.htm
├─ variations/
│  └─ common.json
└─ webconfig.json
```

With the `webconfig.json`:

```js
{
    "commonController": "common.js",
    "commonVariation": "common.json",
    "routes": {
        "/index.html": {
            "template": "index.htm"
        }
    }
}
```

And "common.js" file containing e.g.:

```js
// This code is executing while route are added.
// This code will be executed when NodeAtlas starting.
exports.setConfigurations = function (next) {

    // We use instance of NodeAtlas.
    var NA = this,

        // And we keep routes from NodeAtlas webconfig...
        route = NA.webconfig.routes;

    // ...to add "/content.html" route amongs others routes.
    route["/content.html"] = {
        "template": "content.htm"
    };

    // We update modification here.
    next(); 
};
```



### Use Websocket instead of AJAX ###

To keep a link between Front and Back part of website, NodeAtlas can use [Socket.IO](http://socket.io/) (more details on official website).

Thanks to this, you could change in real time data on your page, but also change data from another tabs or browsers.

With this following files:

```
├─ assets/
│  └─ javascript/
│     ├─ common.js
│     └─ index.js
├─ components/
│  ├─ foot.htm
│  ├─ head.htm
│  └─ index.htm
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ variations/
│  ├─ common.json
│  └─ index.json
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

With this `webconfig.json`:

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

and with this templates files:

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

*Note : `data-hostname` and `data-subpath` will help us to set Socket.IO front configuration.*

**components/foot.htm**

```html
        <script type="text/javascript" src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
        <script src="javascript/common.js"></script>
    </body>
</html>
```

*Note : The Front file of Socket.IO is calling here.*

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

*Note : Each click on `button` will update content from `components/index.htm`.*

**templates/index.htm**

```html
    <%- include('head.htm') %>
    <div class="layout">
    <%- include('index.htm') %>
    </div>
    <script src="javascript/index.js"></script>
    <%- include('foot.htm') %>
```

*Note : We parse here the home page `/`.*

and the following variations files :

**variations/common.json**

```json
{
    "titleWebsite": "Socket.IO Example"
}
```

**variations/index.json**

```json
{
    "titlePage": "Date",
    "content": "<p>Current date is:</p>"
}
```

All work fine here, but see what we will do with controller part on Server-side and on Client-side. 

On server, we will use the following files:

**controllers/common.js**

```js
var privates = {};

// Load modules for this site in the NodeAtlas object.
exports.loadModules = function () {
    // Find instance of « NodeAtlas » engine.
    var NA = this;

    // Associations of each module to access it anywhere.
    NA.modules.socketio = require('socket.io');
    NA.modules.cookie = require('cookie');
};

// Example using Socket.IO.
privates.socketIoInitialisation = function (socketio, NA, next) {
    var optionIo = (NA.webconfig.urlRelativeSubPath) ? { path: NA.webconfig.urlRelativeSubPath + '/socket.io', secure: ((NA.webconfig.httpSecure) ? true : false) } : undefined,
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
    next(io);
};

// Adding listener for a specific controller "index.js" (see example in the next file).
privates.socketIoEvents = function (io, NA) {
    var params = {};

    params.io = io;

    // Event for the index page (see example in the next file).
    require('./index').asynchrone.call(NA, params);
};

// Configuration of all modules.
exports.setConfigurations = function (next) {
    var NA = this,
        socketio = NA.modules.socketio;

    // Initialize Socket IO.
    privates.socketIoInitialisation(socketio, NA, function (io) {

        // Socket IO listening.
        privates.socketIoEvents(io, NA);

        // Next steps of engine.
        next();
    });
};
```

*Note : This is Socket.IO server global configuration.*

**controllers/index.js**

```js
// All Websocket action possible for this template.
// Used not by "NodeAtlas" but with "common.js" (see previous file).
exports.asynchrone = function (params) {
    var NA = this,
        io = params.io;

    // Once we have a valid connection between the client and our back-end...
    io.sockets.on('connection', function (socket) {

        // ...stay tuned on the "create-item-button" demand...
        socket.on("server-render", function (data) {
            var sessionID = socket.request.sessionID,
                session = socket.request.session,
                variation = {};

            // Specific variations in the good language.
            variation = NA.addSpecificVariation("index.json", data.lang, variation);

            // Common variations in the good language.
            variation = NA.addCommonVariation(data.lang, variation);

            // HTML part from `componentsRelativePath` directory and render with variations.
            result = NA.newRender("index.htm", variation);

            // And responds to all customers with a set of data in data.
            io.sockets.emit('create-article-button', data);
        });
    });
};
```

And for client-side, we use the following files:

**assets/javascript/common.js**

```js
window.website = window.website || {};

(function (publics) {
    "use strict";

    var privates = {},
        optionsSocket,
        body = document.getElementsByTagName("body")[0];

    // We configure Socket.IO client-side.
    optionsSocket = (body.getAttribute("data-subpath") !== "") ? { path: "/" + body.getAttribute("data-subpath") + ((body.getAttribute("data-subpath")) ? "/" : "") + "socket.io" } : undefined;
    publics.socket = io.connect((body.getAttribute("data-subpath") !== "") ? body.getAttribute("data-hostname") : undefined, optionsSocket);
}(website));

// We execute specific JavaScript, here it's ["index"].
website[document.getElementsByTagName("body")[0].getAttribute("data-variation")].init();
```

*Note : This is the global Socket.IO configuration client-side with `data-subpath` and `data-hostname`.*

**assets/javascript/index.js**

```js
window.website = window.website || {};

(function (publics) {
    "use strict";

    var html = document.getElementsByTagName("html")[0],
        body = document.getElementsByTagName("body")[0],
        layout = document.getElementsByClassName("layout")[0];

    // We associate on the button the action to contact server.
    function setServerRender() {
        var button = document.getElementsByTagName("button")[0];
        button.addEventListener("click", function () {
            website.socket.emit("server-render", {
                lang: html.getAttribute("lang"),
                variation: body.getAttribute("data-variation")
            });
        });
    }

    // We create the code will be executed when page run.
    publics.init = function () {

        // We set action on button.
        setServerRender();

        // When server response come back...
        website.socket.on("server-render", function (data) {

            // ...we update data content...
            layout.innerHTML = data.render;

            // ...and we set again button action.
            setServerRender();
        });
    };
}(website.index = {}));
```

Run your project and go on `http://localhost/` across multiple tab and/or multiple browser. You will see when you click on « Update », the page (current date) will be updated on all tabs open.

Thanks to `NA.addSpecificVariation`, `NA.addCommonVariation` and `NA.newRender`, it's possible to generate a new template and variation compilation.

If `data.lang` in this example is type of `undefined`, files will be search in rood directory. If `currentVariation` is type of `undefined` an empty object will be created.



### Use MySQL Database (SQL) ###

We will see now how to use data from database. We will use the `mysql` npm module. And first, [install a MySQL server](https://dev.mysql.com/downloads/installer/).

#### MySQL Database ####

First, we will create a database `demo` on the server:

```
CREATE DATABASE demo;
```

and select it:

```
USE demo
```

and create a `user` table:

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

and fill it with this set of data:

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

#### NodeAtlas Files ####

With the following data set:

```
├─ assets/
│  └─ javascript/
│     └─ models/
│        └─ user.js
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ models/
│  └─ user.js
├─ templates/
│  └─ index.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
└─ webconfig.json
```

We will use the following `webconfig.json` with the custom `_mysqlConfig` variable which contain all informations for database connection:

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

With following files to display page:

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
    "titleWebsite": "Example MySql",
    "male": "Man",
    "female": "Woman"
}
```

**variations/index.json**

```js
{
    "titlePage": "User Table",
    "content": "<p>`bruno` entry details.</p>"
}
```

And last, we will be connect to the database with the common controller `controllers/common.js`:

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

And display result via specific controller `controllers/index.js`:

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

with the `user` model via connect file to database `models/user.js`:

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

based on `user` classe shared between Front and Back part `assets/javascript/models/user.js`:

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

You will get the following output:

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="utf-8" />
        <title>MySql Example</title>
    </head>
    <body>
        <div class="title">MySql Example</div>
        <div>
            <h1>User Table</h1>
            <p>`bruno` entry details.</p>
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



### Use MongoDB Database (NoSQL) ###

We will see now how to use data from nosql database. We will use the `mongoose` npm module. And first, [install a MongoDB server](https://www.mongodb.com/).

#### MongoDB Database ####

First, we will create a database `demo` on the server and select it:

```
use demo
```

and create a `user` collection:

```
db.createCollection("user")
```

and fill it with this document:

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

#### NodeAtlas Files ####

With the following data set:

```
├─ assets/
│  └─ javascript/
│     └─ models/
│        └─ user.js
├─ controllers/
│  ├─ common.js
│  └─ index.js
├─ templates/
│  └─ index.htm
├─ variations/
│  ├─ common.json
│  └─ index.json
└─ webconfig.json
```

We will use the following `webconfig.json` with the custom `_mongodbConfig` variable which contain all informations for database connection:

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

With following files to display page:

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
    "titleWebsite": "Example MongoDB",
    "male": "Man",
    "female": "Woman"
}
```

**variations/index.json**

```js
{
    "titlePage": "User Collection",
    "content": "<p>Document `{ \"identity.firstname\": \"Bruno\" }` details.</p>"
}
```

And last, we will be connect to the database with the common controller `controllers/common.js`:

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

And display result via specific controller `controllers/index.js`:

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

based on `user` classe shared between Front and Back part `assets/javascript/models/user.js`:

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
<html lang="">
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





## More Features ##

NodeAtlas offers also a large set of features for development or packaging with the configuration sytem. We will see that.

### Manage routing (URL Rewriting) ###

Although you can configure static urls, you can also set of dynamic url!

#### Standard ###

With the following configuration:

```js
{
    "routes": {
        "/list-of-members/:member/": {
            "template": "members.htm"
        },
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

you can access:

- *http://localhost/*
- *http://localhost/list-of-members/*
- *http://localhost/list-of-members/toto/*
- *http://localhost/list-of-members/bob-eponge99/*
- *http://localhost/list-of-members/node-atlas/*
- *http://localhost/list-of-members/etc/*

and retrieve the `:member` value in` changeVariation` (common and specific).

```js
exports.changeVariation = function (params, next) {
    var variation = params.variation;

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

    next(variation);
}
```

Dynamic url creation rules are those of [Express.js](http://expressjs.com/4x/api.html#req.params).

#### Regular Expressions ###

You can also enable regular expressions to a specific path with `regExp`. If it is `true`, the previous profile no longer works and you pass in Regular Expression mode. If `regExp` is a string, it acts as a flag (g, i, m or y).

See the following configuration:

```js
{
    "routes": {
        "/list-of-members/([-a-z0-9]+)/?": {
            "template": "members.htm",
            "regExp": "g"
        },
        "/list-of-members/?": {
            "template": "members.htm",
            "regExp": true
        },
        "/": {
            "template": "index.htm"
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

and retrieve the `([-a-z0-9] +) value in the` `changeVariation` (common and specific).

```js
exports.changeVariation = function (params, next) {
    var variation = params.variation;

    if (variation.params && variation.params[0]) { variation.params.member = variation.params[0]; }
    // variation.params[1] for second match, etc...

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

    next(variation);
}
```

The rules for creating dynamic url with `regExp` are those of [RegExpJavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

#### Routing in a shared file ####

In order to not rewrite a long route list in `webconfig.json` file to your development environment and` webconfig.prod.json` to your production environment, you can group route in a file of your choice. By convention, the name is `routes.json` file.

For example:

The following set of file

```
├─ templates/
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
            "template": "index.htm"
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
            "template": "index.htm"
        }
    }
}
```

could be the following set of file

```
templates/
— index.htm
routes.json
webconfig.json
webconfig.prod.json
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
        "template": "index.htm"
    }
}
```

*Note : You can create multiple route file as `routes.en.json` and `routes.fr.json` and associate each of them in a set of webconfig parameterize to run a website in various languages.*



### Manage a page not found ###

#### Listen all urls, and also file provide by `assetsRelativePath` ####

To display a custom page when a resource is not found you must:

1. Prepare a 404 page.
2. Fill the parameter with `pageNotFound` with the following `value` : `key` of the prepared 404 page.

See the example below:

```js
{
    "pageNotFound": "/not-found-page/",
    "routes": {
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        },
        "/not-found-page/": {
            "template": "error.htm",
            "statusCode": 404
        }
    }
}
```

you can access to:

- *http://localhost/this-page-do-not-exist.html*
- *http://localhost/this/page/either/*
- *http://localhost/etc*

#### Multilingual Error Page ####

For this, just create a new route with `*` at the end with the languageCode.

See below :

```js
{
    "pageNotFound": "/not-found-page/",
    "languageCode": "en-gb",
    "routes": {
        "/list-of-members/": {
            "template": "members.htm",
            "variation": "members.json"
        },
        "/": {
            "template": "index.htm",
            "variation": "index.json"
        },
        "/not-found-page/": {
            "template": "error.htm",
            "variation": "error.json",
            "statusCode": 404
        },
        "/francais/liste-des-membres/": {
            "template": "members.htm",
            "languageCode": "fr-fr",
            "variation": "members.json"
        },
        "/francais/": {
            "template": "index.htm",
            "languageCode": "fr-fr",
            "variation": "index.json"
        },
        "/francais/*": {
            "template": "error.htm",
            "languageCode": "fr-fr",
            "variation": "error.json",
            "statusCode": 404
        }
    }
}
```



### Manage redirects ###

To go to a different address (redirect 301 or 302) when you get to a url you must use the `redirect` parameter.

*Note : if you don't set `statusCode`, no redirect will be executed. The `statusCode` is mandatory for redirection.*

#### Static ####

See the example below:

```js
{
    "routes": {
        "/list-of-members/": {
            "template": "members.htm"
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
            "template": "index.htm"
        }
    }
}
```

You will be redirected:

- to `http://localhost/list-of-members/` when you access `http://localhost/list-of-members` with a header _permanent redirect_.
- to `https://node-atlas.js.org/` when you access `http://localhost/go-to-node-atlas/` with a header _temporary redirect_.

#### Dynamic ####

See the example below:

```js
{
    "routes": {
        "/list-of-members/:member/": {
            "template": "members.htm"
        },
        "/list-of-members/:member": {
            "redirect": "/membres/:member/",
            "statusCode": 301
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

You will be redirected to `http://localhost/list-of-members/haeresis/` when you access to `http://localhost/list-of-members/haeresis` with a header _permanent redirect_.

#### With regular expressions ####

See the example below:

```js
{
    "routes": {
        "/membres/([-a-z0-9]+)/": {
            "template": "members.htm",
            "regExp": true
        },
        "/list-of-members/([-a-z0-9]+)/": {
            "redirect": "/membres/$0/",
            "statusCode": 301,
            "regExp": true
        },
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

You will be redirected to `http://localhost/list-of-members/haeresis/` when you access to `http://localhost/list-of-members/haeresis` with a header _permanent redirect_.

For the second *match* use $1, the third $2, etc.



### Manage Headers ###

By défault, sent Headers by NodeAtlas are followings: `Content-Type:text/html; charset=utf-8` with a 200 `statusCode`.

It's possible to modify this values for a specific route (for local API for example).

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

It's also possible to modify all Headers values, this erase all shortcuts before, except the `statusCode`.

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



### Run Website with HTTPs ###

It is very simple to run an instance of NodeAtlas with HTTPs protocol. You just have to create such a `security` folder in which to place your `server.key` and `server.crt` file to supply the protocol.

Just use the following configuration:

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

Alternatively , if your two Key and Certificate files have the same name, use this configuration:

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

This is also possible to just set the `httpSecure` value to `true` for get a "https" like `urlBasePath` or `urlBase` in your paths variables. But the server will not running in HTTPs and you will validate certificate by your own other way (with a server proxy for example).

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

*Note : in production, if you use a proxy for redirect request/response, don't forget use `urlPort: 443` instead of `urlPort: 80` for HTTPs.*



### Minify CSS / JS ###

You can automatically generate CSS and JS files minified and obfuscated by creating Bundles by referencing the file by input and output path. Of course you can do as much as you want. The gereration files is execute every time you start NodeAtlas either as a server or via the `--generate` command if a Bundle exists in the Webconfig.

#### Creating Bundles ####

With the following configuration:

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

and the following set of file:

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  └─ common-min1160.css
│  └─ javascript/
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
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

you will get the following new files:

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  ├─ common-min1160.css
│  │  └─ common.min.css     ⤆ new file
│  └─ javascript/
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
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

#### Bundles in a shared file ####

In order to not re-write a long Bundles configuration list in `webconfig.json` file to your development environment and` webconfig.prod.json` to your production environment, you can group routes in a file of your choice. By convention, the name is `bundles.json` file.

For example:

The following set of file

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  └─ common-min1160.css
│  └─ javascript/
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
├─ templates/
│  └─ index.htm
├─ webconfig.json
└─ webconfig.prod.json
```

with `webconfig.json`

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

and with `webconfig.prod.json`

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

could be the following set of file

```
├─ assets/
│  ├─ stylesheets/
│  │  ├─ common.css
│  │  ├─ common-min780.css
│  │  └─ common-min1160.css
│  └─ javascript/
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
├─ templates/
│  └─ index.htm
├─ bundles.json              ⤆ new file
├─ webconfig.json
└─ webconfig.prod.json
```

with `webconfig.json`

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

with `webconfig.prod.json`

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

and `bundles.json`

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

*Note : it is possible to disable Bundles by not including them in the `webconfig`.*

#### Disable Bundles ####

It is also possible to not execute the minification when run a website with NodeAtlas with `"stylesheetsBundlesEnable": false` et `"javascriptBundlesEnable": false`` for each type of Bundle.

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

*Note : if your bundle is in shared file, you could desactivated it also without the `"bundles": "bundles.json"`. Just remove it.*

#### Re-generate Bundles before each Page Response ####

For test your page with minified files, you can ask it to be regenerated before each page response with `"stylesheetsBundlesBeforeResponse": false` et `"javascriptBundlesBeforeResponse": false`` for each type of Bundle.

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

*Note : this is not recommanded for production environment because it's slowed responses pages.*



### CSS generation with Less ###

You can use the preprocessor Less to create your CSS. The operation is as follows: whenever a CSS request is made, if a Less equivalent exists it is read and it generates the CSS. Once done, the new CSS is responded.

With the following structure:

```
├─ assets/
│  └─ stylesheets
│     └─ common.less
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

and the following webconfig:

```js
{
    "enableLess": true,
    "routes": {
        "/": "index.htm"
    }
}
```

and the following content in:

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

you will build the `assets/stylesheets/common.css` by calling the url `http://localhost/` or `http://localhost/stylesheets/common.css`.

#### Source Map and Minification ####

By default, in the above example, a `common.css.map` file will be generated. This allows your browser to indicated you that line in `.less`  file has generated the CSS property of the item you have selected in your debugger.

Disable this with `enableLess.sourceMap` to `false`:

```
    "enableLess": {
        "sourceMap": false
    },
    "routes": {
        "/": "index.htm"
    }
```

You can also generate CSS files already minify with:

```
    "enableLess": {
        "compress": true
    },
    "routes": {
        "/": "index.htm"
    }
```

#### Compile Less files with `--generate` ####

Because of Less are compilated on the fly, when a file is requested in http(s), modification needed running website for generate CSS output. Then you can use CSS. It's possible to skip running step and directly complated Less before minify CSS with `enableLess.less`.

With the following `webconfig.json`:

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

or with the following `webconfig.json`:

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

with `less.json` containing :

```js
[
    "stylesheets/common.less",
    "stylesheets/component-1.less",
    "stylesheets/component-2.less",
    "stylesheets/component-3.less"
]
```

The `@import` used by Less will be capable to walk into subdirectories : `styles`, `stylesheets` or `css`. It's possible to change that with :

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



### CSS generation with Stylus ###

You can use the preprocessor Stylus to create your CSS. The operation is as follows: whenever a CSS request is made, if a Stylus equivalent exists it is read and it generates the CSS. Once done, the new CSS is responded.

With the following structure:

```
├─ assets/
│  └─ stylesheets
│     └─ common.styl
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

and the following webconfig:

```js
{
    "enableStylus": true,
    "routes": {
        "/": "index.htm"
    }
}
```

and the following content in:

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

you will build the `assets/stylesheets/common.css` by calling the url `http://localhost/` or `http://localhost/stylesheets/common.css`.

#### Source Map and Minification ####

By default, in the above example, a `common.css.map` file will be generated. This allows your browser to indicated you that line in `.styl`  file has generated the CSS property of the item you have selected in your debugger.

Disable this with `enableLess.sourceMap` to `false`:

```
    "enableStylus": {
        "sourceMap": false
    },
    "routes": {
        "/": "index.htm"
    }
```

You can also generate CSS files already minify with:

```
    "enableStylus": {
        "compress": true
    },
    "routes": {
        "/": "index.htm"
    }
```

*Note:* More options on [stylus documentation for module](https://www.npmjs.com/package/stylus).

#### Compile Stylus files with `--generate` ####

Because of Stylus are compilated on the fly, when a file is requested in http(s), modification needed running website for generate CSS output. Then you can use CSS. It's possible to skip running step and directly complated Stylus before minify CSS with `enableLess.stylus`.

With the following `webconfig.json`:

```js
{
    "enableLess": {
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

or with the following `webconfig.json`:

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

with `stylus.json` containing :

```js
[
    "stylesheets/common.styl",
    "stylesheets/component-1.styl",
    "stylesheets/component-2.styl",
    "stylesheets/component-3.styl"
]
```

The `@import` used by Less will be capable to walk into subdirectories : `styles`, `stylesheets` or `css`. It's possible to change that with :

```js
{
    "enableLess": {
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



### Optimize Images files ###

You can automatically generate optimized images files by creating Optimizations by referencing the file by input and output path. Of course you can do as much as you want. The optimization files is execute every time you start NodeAtlas either as a server or via the `--generate` command if an Optimization exists in the Webconfig.

#### Creating Optimizations ####

With the following configuration:

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

and the following set of file:

```
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        └─ example.svg
├─ templates/
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
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

#### Create Optimizations by group of file ####

For example, not define file one by one, but in group:

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

#### Add more options to Optimizations ####

It is possible to redefine default options used for optimizations via this 4 objects:

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

To know all options it is here:
- [Jpeg Options](https://www.npmjs.com/package/imagemin-jpegtran)
- [Gif Options](https://www.npmjs.com/package/imagemin-gifsicle)
- [Png Options](https://www.npmjs.com/package/imagemin-optipng)
- [Svg Options](https://www.npmjs.com/package/imagemin-svgo)

#### Optimizations in a shared file ####

In order to not re-write a long Bundles configuration list in `webconfig.json` file to your development environment and` webconfig.prod.json` to your production environment, you can group files in a file of your choice. By convention, the name is `optimizations.json` file.

For example:

The following set of file

```
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        └─ example.svg
├─ templates/
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
            "template": "index.htm"
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

could be the following set of file

```
├─ assets/
│  └─ media/
│     └─ images/
│        ├─ example.png
│        ├─ example.jpg
│        ├─ example.gif
│        └─ example.svg
├─ templates/
│  └─ index.htm
├─ bundles.json
├─ webconfig.json
└─ webconfig.prod.json
```

with `webconfig.json`

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

with `webconfig.prod.json`

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

and `optimizations.json`

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

*Note : it is possible to disable Optimizations by not including them in the `webconfig`.*

#### Disable Optimizations ####

It is also possible to not execute the optimization when run a website with NodeAtlas with `"imagesOptimizationsEnable": false`.

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

*Note : if your optimizations is in shared file, you could desactivated it also without the `"optimizations": "optimizations.json"`. Just remove it.*

#### Re-generate Optimizations before each Page Response ####

You can ask files to be regenerated before each page response with `"stylesheetsBundlesBeforeResponse": false` et `"javascriptBundlesBeforeResponse": false`` for each type of Bundle.

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

*Note : this is not recommanded for production environment because it's slowed responses pages.*



### CSS Inline Injection for Manage Email Assets ###

When you create templates for sending email newsletters, or even simple message, you can not attach stylesheet. The only way is to write the CSS instructions in the template within the `style` markup attribute.

#### Specific Injection ####

With `injectCss`, simply design your template as usual via a stylesheet and NodeAtlas inject each rendering styles in the attribute `style`. It will do more than generate templates.

With for example the following configuration:

```json
{
    "routes": {
        "/": {
            "template": "email.htm",
            "generate": "welcome.html",
            "injectCss": "stylesheets/email.css"
        }
    }
}
```

and the following set of files:

```
├─ generates/
├─ assets/
│  └─ stylesheets/
│     └─ email.css
├─ templates/
│  └─ email.htm
└─ webconfig.json
```

whose contents are :

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

output will be, with the command `node </path/to/>node-atlas/ --generate`, all following file:

```
├─ generates/
│  └─ bienvenue.html    <= template email generate !
├─ assets/
│  └─ stylesheets/
│     └─ email.css
├─ templates/
│  └─ email.htm
└─ webconfig.json
```

with as content for `generates/welcome.html`

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

> Test : From `./tests/examples/css-injection` run `node "../../../" --generate`. Result are into `generates`.

#### Global Injection ####

It is possible to use `injectCss` as global mechanism for all pages.

```json
{
    "injectCss": "stylesheets/email.css",
    "routes": {
        "/welcome/": {
            "template": "email-a.htm",
            "generate": "welcome.html"
        },
        "/good-bye/": {
            "template": "email-b.htm",
            "generate": "good-bye.html"
        }
    }
}
```

ainsi les deux pages `welcome` et `good-bye` contiendront chacune `<body style="color: #f00;">`.

#### Multiple Injection ####

It's possible to :
- Attach global and specific files in same time.
- Attach more one CSS file by `injectCss` property.

```json
{
    "injectCss": ["stylesheets/reset.css", "stylesheets/email.css"],
    "routes": {
        "/welcome/": {
            "template": "email-a.htm",
            "generate": "welcome.html",
            "injectCss": "/stylesheets/welcome.css"
        },
        "/good-bye/": {
            "template": "email-b.htm",
            "generate": "good-bye.html",
            "injectCss": ["stylesheets/good-bye.css", "/stylesheets/others.css"]
        }
    }
}
```

> Test : From `./tests/examples/css-injection` run `node "../../../" --generate --webconfig webconfig.multiple.json`. Result are into `generates`.



### Allow / Disallow GET / POST requests ###

You can also manager how the server will respond to requests GET/POST to a given page. For example, we will allow access to pages only GET for the whole site and allow a POST to one page only (and prohibited him GET).

```js
{
    "getSupport": true,
    "postSupport": false,
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/write-comment/": {
            "template": "write-com.htm"
        },
        "/save-comment/": {
            "template": "save-com.htm",
            "getSupport": false,
            "postSupport": true
        }
    }
}
```

*Note : If nothing is set,* ***getSupport*** *and* ***postSupport*** *are set to* ***true*** *in  global webconfig and by route.*



### Allow / Disallow PUT / DELETE requests ###

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

With the configuration below, only one HTTP action is possible by route, this is a great way to create APIs REST easily with NodeAtlas.



### Change settings of Sessions ###

#### Key and Secret ####

NodeAtlas itself manages sessions stored on the server as initial settings:

- Key : `nodeatlas.sid`
- Secret : `1234567890bépo`

that allow customers to stay connected through the pages to a single set of personal server side variable.

It is possible to change the default settings (and even compulsory for productions sites) with the parameters of `webconfig.json` following:

```js
{
    sessionKey: "personal key",
    sessionSecret: "personal secret"
}
```

NodeAtlas also employs a memory storage object (MemoryStore) stoques that the information in the RAM of the server.

#### Other Parameters ####

It is possible to change all the parameters of the sessions (except MemoryStore) using the configuration of next `webconfig.json`:

```js
{
    "session": {
        "key": "personal key",
        "secret": "personal secret",
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

The entirety of the possible configuration is located on the module documentation [express-session](https://github.com/expressjs/session).



### External Storage Sessions ###

By default, this is NodeAtlas server that stores sessions in the RAM of the server application. This does not allow users to share sessions across multiple applications NodeAtlas (or other) and erases all current sessions for an application if you restart it.

To address this concern, it should support the recording sessions via a base No SQL such as `Redis` or `MongoBD`.

You just have to use the `setSessions` function in` controllers/common.js` of [Back-end part](#controller-and-model-part).

#### Session managed with Redis ####

Implement the following code in `controllers/common.js` to store your sessions in a local Redis.

```
var website = {};

(function (publics) {
    "use strict";

    publics.loadModules = function (NA) {
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

More information to [connect-redis](https://www.npmjs.org/package/connect-redis) page.


#### Session managed with MongoDB ####

Implement the following code in `controllers/common.js` to store sessions in the database `sessions` of a local MongoDB.

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

More information to [connect-redis](https://www.npmjs.org/package/connect-mongo) page.



### Changing the template engine brackets <% %> ###

For example, to include part of a file instruction is used ***<%- include('head.htm') %>***. It would be possible to do it with ***<?- include('head.htm') ?>*** with the configuration below:

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

See the exemple in files below:

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

Learn all about the possibilities of the template engine consult the documentation [ejs](https://github.com/mde/ejs)

*Note : If nothing is set,* ***templateEngineDelimiter*** *is set to* ***%***.



### Change the url hostname and listening port ###

It is possible to generate a different url listening other port with ***urlHostname*** *** and ***urlPort***. For example, the local loop listens on port 80 for a script makes the Reverse Proxy from the port 7777 on the 80 with the "http-proxy" module as below:

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

It's also possible to avoid other enter url. Also if `www.localhost` or `localhost:7777` are enter into url area, it's `localhost` for the user :

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



### Generate urls dynamically ###

#### Relative paths in absolute ####

It is possible that the paths created from your url to be interpreted as subfolders that have actually no real existence. This has the effect the address `media/images/example.jpg` initially accessible from template displayed to address **http://localhost** impossible to reach when the template is displayed to address **http://localhost/sub-directory/** (because the path should be `../media/images/example.jpg`).

To no longer have to worry about access to resources regardless of the URL that is requested, simply turn on all the urls such as:

```
<link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
<!-- ... -->
<img src="media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="javascript/common.js"></script>
```

in absolute urls with variable `urlBasePath` as below:

```
<link rel="stylesheet" type="text/css" href="<%= urlBasePath %>stylesheets/common.css" />
<!-- ... -->
<img src="<%= urlBasePath %>media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="<%= urlBasePath %>javascript/common.js"></script>
```

Note that in the case of the following configuration:

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

`urlBasePath` return `http://localhost/` while in this configuration:

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

`urlBasePath` return `http://localhost:7777/sub/folder/`.

#### The paths of templates ####

Using the following webconfig:

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

and the corresponding template

```html
<!-- ... -->
<a href="http://localhost/index.html">Link to home</a>
<a href="http://localhost/contact.html">Link to contact</a>
<!-- ... -->
```

I'd have to change my link in the template if I change the listening port or if I change the path of the url. The following configuration changes:

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
<a href="http://localhost:7777/home.html">Link to home</a>
<a href="http://localhost:7777/contact-us.html">Link to contact</a>
<!-- ... -->
```

You can solve this problem by giving a key to a specific path and deporting are way in the `url` property.

With the followinh webconfig:

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

I can now write the link in the dynamic template:

1. as follows

   ```html
<!-- ... -->
<a href="<%= urlBasePath %><%= webconfig.routes.home.url.slice(1) %>">Link to home</a>
<a href="<%= urlBasePath %><%= webconfig.routes.contact.url.slice(1) %>">Link to contact</a>
<!-- ... -->
```

   *Note : `.slice(1)` makes it easy to remove the dual `/` for standard url.*

2. or as follows

   ```html
<!-- ... -->
<a href="<%= urlBasePath %>.<%= webconfig.routes.home.url %>">Link to home</a>
<a href="<%= urlBasePath %>.<%= webconfig.routes.contact.url %>">Link to contact</a>
<!-- ... -->
```

   *Note : This would, for example `http://localhost/./home.html`, which is a standard url.*

3. ou comme suit

   ```html
<!-- ... -->
<a href="<%= urlBasePathSlice + webconfig.routes.home.url %>">Link to home</a>
<a href="<%= urlBasePathSlice + webconfig.routes.contact.url %>">Link to contact</a>
<!-- ... -->
```

   *Note : `urlBasePathSlice` return `http://localhost` in place of `http://localhost/` or `http://localhost:7777/sub/folder` in place of `http://localhost:7777/sub/folder/`.*

#### Utilisation de la clé pour mapper les pages ####

It's maybe useful to know the key used for the current page displayed for find the equivalent page in an other language.

With the following webconfig :

```js
{
    "languageCode": "en-us",
    "routes": {
        "index_en-us": {
            "url": "/",
            "template": "/index.htm"
        },
        "index_fr-fr": {
            "url": "/francais/",
            "template": "index.htm",
            "languageCode": "fr-fr"
        },
        "cv_en-us": {
            "url": "/resume/",
            "template": "cv.htm"
        },
        "cv_fr-fr": {
            "url": "/francais/cv/",
            "template": "index.htm",
            "languageCode": "fr-fr"
        }
    }
}
```

and the common variation following :

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

in fr :

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

we could create link between each page as following :

```html
<ul>
    <% for (var i = 0; i < common.language.length; i++) { %>
    <li><a href="<%= urlBasePathSlice + webconfig.routes[currentRouteName.split('_')[0] + '_' + common.language[i].code].url %>"><%- common.language[i].name %></a></li>
    <% } %>
</ul>
```



## CLI / Running commands ##

The easiest way to start is to position NodeAtlas in the directory hosting your site and run the command `\> node </path/to/>node-atlas/`. However there are options to launch more than launch the site.

Each of the commands that follow can be coupled with other like this:

```
\> node </path/to/>node-atlas/ --directory /hello-world/ --webconfig config.fr-fr.js --httpPort 80 --browse
```


### --directory &lt;path> ###

It is possible to launch NodeAtlas from another location where the website folder is placed. The `--directory` command will be very useful.

```
\> node </path/to/>node-atlas/ --directory </path/to/your/website/directory/>
```


### --webconfig &lt;webconfigName> ###

By default, NodeAtlas will read your `webconfig.json` file. It is possible that in addition to the file you created another `webconfig.prod.json` file whose domain name is different. Or a `webconfig.fr-fr.json` with urls changes for another language. Instead of renaming your files in `webconfig.json` before launching the site, simply enter your other configuration name. In the following example, this file will be `webconfig.alternatif.json`.

```
\> node </path/to/>node-atlas/ --webconfig webconfig.alternatif.json
```



### --browse [subpath] ###

This command opens your browser to the address on which the site will run. Very handy when you do not remember the port for your development version. This command is useless if it is coupled with `--generate` (see below).

```
\> node </path/to/>node-atlas/ --browse
```

You could also targeted a specific page with the end of url.


```
\> node </path/to/>node-atlas/ --browse index.html
```



### --httpHostname &lt;httpHostname> ###

You will maybe want know your IP with `ipconfig` to change it in the url to access your website from others device connected to the current network so this command is for you.

```
\> node </path/to/>node-atlas/ --httpHostname 192.168.1.1
```



### --httpPort &lt;httpPort> ###

You will not be bored to change your listening port on your projects and sometimes you'll have to work on two different websites simultaneously. With this command you will not need to cut your sites turn to release the listener, simply pick one at launch.

```
\> node </path/to/>node-atlas/ --httpPort 7778
```



### --generate ###

If you change an item in your common variation file or even your template components called in multiple pages, you will not reload each page to update your output files. If so, simply use `--generate`. This command will copy the entire contents of the folder `assetsRelativePath` into `generatesRelativePath` if their path is different.

```
\> node </path/to/>node-atlas/ --generate
```



### --lang &lt;culture-country> ###

With the `--lang` parameter you will change language used by NodeAtlas. This command set the content of `languages/default.json` by the content of `languages/fr-fr.json` if you use the "fr-fr" parameter for example like below. Start NodeAtlas later will conserve the last language used by engine.

```
\> node </path/to/>node-atlas/ --lang fr-fr
```



### --init [path] ###

NodeAtlas contain a directory `templates` with predefined website into. To install them in the current directory for NodeAtlas command, you can use `--init` with the name of the `templates` you want use. By default, it's the `hello-world` value that is used. *Possible values: `hello-world`.*

```
\> node </path/to/>node-atlas/ --init hello-world
```



### --httpSecure [pathName] ###

If you use the `--httpSecure` option, all path will be reach in HTTPs. You must defined a `.crt` and `.key` files with `pathName` if you want the engine start in HTTPs. For exemple if you have `security/server.crt` and `security/server.key` from root of NodeAtlas website, you can use following command:

```
\> node </path/to/>node-atlas/ --httpSecure security/server
```





## API / NodeAtlas as npm module ##

You could run NodeAtlas via JavaScript code.



### &lt;node-atlas-instance>.init() ###

Execute a simple NodeAtlas running with `init()`. By default, it use `webconfig.json` from directory where file is executed. If no `webconfig.json` is set, a Simple Web Server will be launched.

*server.js*

```javascript
require("node-atlas")().init();
```

```
\> server server.js
``



### &lt;node-atlas-instance>.config(Object) ###

You can also configure the launch with `config(Object)`:

*server.js*

```javascript
require("node-atlas")().config({
    directory: "/path/to/your/website/directory/",
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



### &lt;node-atlas-instance>.run(Object) ###

With `run(Object)` you could configure and lanch NodeAtlas with one command.

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



### &lt;node-atlas-instance>.started(Function) ###

With `started(Function)`, you could also execute other tasks after server ran:

*servers.js*

```javascript
require("node-atlas")().started(function() {
    console.log("Server started!");
}).run({
    browse: true
});
```



### &lt;node-atlas-instance>.generated(Function) ###

With `generated(Function)`, you could also execute other tasks after assets generation:

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



### &lt;node-atlas-instance>.created(Function) ###

With `created(Function)`, you could also execute other tasks after init the current directory with template website:

*servers.js*

```javascript
var nodeAtlas = require("node-atlas"),
    website = nodeAtlas();

website.config({
    "init": true
}).created(function() {
    website.run({
        "browse": true
    });
}).init();
```





## NodeAtlas as a simple web server ##

If NodeAtlas can not find the "webconfig.json" or `--webconfig` you have specify, it will run in either "Simple Web Server" or "Public" mode.

**This mode is useful for testing very quickly that NodeAtlas is installed properly or to create small HTML examples that need to run a web server (AJAX returns, embedded iframe, etc.).**

To understand what this means: if there is any file in the directory where NodeAtlas was launched, it will be returned by HTTP request so have the demands via its path.

For example, by launching NodeAtlas in the `site-hello-world` folder

```
site-hello-world/
├─ templates/
│  └─ index.htm
└─ webconfig.json
```

by running the command

```
\> node </path/to/>node-atlas/
```

or even the command

```
\> node </path/to/>node-atlas/ --webconfig webconfig.not-exist.json
```

the server will run in "Simple Web Server" mode and file "http://localhost/webconfig.json" or "http://localhost/templates/webconfig.htm" will be available as the browser could refer as a simple web server.

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
require("node")().init()
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
nodeatlas --httpPort 7777 --httpHostname 192.168.1.24 --browse
```

And that will open the website here : `http://192.168.1.24:7777/`.

You just now reach the url from your other devices to test the render of your app or website.





## Production Environment ##

It's a good thing to develop, but it's time to run your website or apps on online production server. See this examples.

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
├─ templates/
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
├─ templates/
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
├─ templates/
│  └─ index.htm
├─ index.js
├─ webconfig.json
└─ web.config
```

It will just have to click on "Browse <url-of-Site>" in your IIS8 action panel. You can now manage your website (start / stop / Pool Recycling) like any other IIS8 application.

#### webconfig example ####

An example for a production webconfig:

```js
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
\> forever start </path/to/>node-atlas/ --directory </path/to/your/website/directory/>
```

To stop it, localise the **uid** with the `list` forever command

```
\> forever list
```

and then use the command:

```
\> forever stop <uid>
```

or `<uid>` is the **uid** of running website.


#### webconfig example ####

An example for a production webconfig:

```js
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



#### In a Unix environment with Nginx ####

This is an example of Nginx's configuration:

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

`Ip_backend` must be replaced by your private subnetwork IP. That can be `127.0.0.1` if node run in same server as Nginx.

`websocket` should be replaced by any word, it will be also moddify the `proxy_pass`. It must be unique to each node.



### Proxy ###

#### Bouncy ####

Bouncy is an example of reverse-proxy that you can use to run various NodeAtlas websites (with other types of websites) together on the same port (80).

You can for example:

- run 3 Node.js apps on ports 7777, 7778 and 7779 with forever,
- and besides launching a apache server on port 81

and make all your websites accessible behind domain names on port 80 with Bouncy example.

Here is a sample configuration with Bouncy:

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

and you can start with:

```
\> forever start </path/to/>global-server.js
```

[More information about Bouncy](https://github.com/substack/bouncy)





## More About NodeAtlas ##

NodeAtlas is made of such a way that the instanciate object contains all the functions allowing it to function. NodeAtlas delivers itself it's object into controllers via the methods used in the Back-end mode with Node.js for you to occasionally change his behavior.

### NodeAtlas VS Others ###

|                       | **NodeAtlas**                                                                                               | Express                  | Hapi                  | Sails                                       | Restify                  | LoopBack                                          | Meteor                                                      |
|-----------------------|-------------------------------------------------------------------------------------------------------------|--------------------------|-----------------------|---------------------------------------------|--------------------------|---------------------------------------------------|-------------------------------------------------------------|
| Type                  | Web **MVC(2)** framework                                                                                    | HTTP server library      | HTTP server framework | Web MVC framework                           | REST HTTP library        | API framework                                     | Full-stack JavaScript app platform                          |
| Top Features          | Simplicity, **Evolutivity**, Modularity                                                                     | HTTP routing, middleware | Modularity, security  | Rails familiarity, MVC                      | Simplicity, REST routing | Enterprise connectivity                           | Framework Front-end et Back-end                             |
| Suitable For          | **Web sites**, Web apps, REST APIs, **Templating**                                                          | Simple web apps          | Web apps, APIs        | Web apps, APIs                              | Simple REST APIs         | Web apps, APIs                                    | Web apps                                                    |
| Pure Node runtime     | Yes                                                                                                         | Yes                      | Yes                   | Yes                                         | Yes                      | Yes                                               | No                                                          |
| Extensions            | **Atlas plugin**, Npm module, Express middleware                                                            | Express middleware       | Hapi Plugins          |                                             |                          |                                                   | Meteor package and repository, Npm module                   |
| Data sources          | **Builtin**: In-memory /file (JSON), REST. With **external npm module**: NoSQL (MongoDB...), SQL (MySql...) |                          |                       | In-memory, File, PostgreSQL, MySQL, MongoDB |                          | In-memory/file, SQL NoSQL, ATG, Email, REST, SOAP | MongoDB, MySQL and PostgreSQL via 3rd-party Meteor packages |
| Main support language | French                                                                                                      | English                  | English               | English                                     | English                  | English                                           | English                                                     |