> *NodeAtlas* is a MVC(2) JavaScript Framework allows you to create Scalable website with SEO and W3C compliance. This means it makes running indexable multilingual simple webpages and create HTML mockups with only the View part activated and real time modification OR create heavy Component-based websites in order to create great things with standards compliance!

**Vous êtes français ? Le document [derrière ce lien](https://github.com/Haeresis/NodeAtlas) vous sera peut-être plus agréable.**

[![Faites un don](https://img.shields.io/badge/don-%3C3-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://travis-ci.org/Haeresis/NodeAtlas.svg)](https://travis-ci.org/Haeresis/NodeAtlas/) [![Version 1.7](https://img.shields.io/badge/version-1.7-brightgreen.svg)](https://github.com/Haeresis/NodeAtlas) [![Package NPM](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-4.0%2C_7.1-brightgreen.svg)](https://nodejs.org/en/) [![Technical Debt Ratio](https://img.shields.io/badge/quality_code-A-brightgreen.svg)](http://docs.sonarqube.org/display/PLUG/JavaScript+Plugin) [![Dependency Status](https://gemnasium.com/Haeresis/NodeAtlas.svg)](https://gemnasium.com/Haeresis/NodeAtlas)



## NodeAtlas Official Website ##

**For a complete documentation, you could refer to [the NodeAtlas Official Website](https://haeresis.github.io/NodeAtlas/english/)** ([Mirror README here](https://github.com/Haeresis/NodeAtlas/blob/gh-pages/README.en.md)).



## Usage ##

### Step 1 - Install ###

Install *NodeAtlas* with one of two existing way:

 - `npm install node-atlas` prefered for an API usage.
 - `npm install -g node-atlas` prefered for a CLI usage.



### Step 2 - Configure ###

Create a `webconfig.json` file and dependencies files for configured your website.

**website.json** example for development:

```js
{
    "languageCode": "en-gb",                /* Set the principal language. */
    "pageNotFound": "/page-404/",           /* Assign the 404 dedicated view. */
    "commonVariation": "common.json",       /* Assign the common variation files for localisation. */
    "commonController": "common.js",        /* Assign the common controller files for all pages called. */
    "postSupport": false,                   /* By default, avoid POST request on pages. */
    "bundles": "bundles.json",              /* Set CSS and JS files bundled together and minifies with an external file. */
    "optimizations": "optimizations.json",  /* Set images to optimize for the web with an external file. */
    "htmlGeneratesBeforeResponse": true,     /* Generate page currently displayed into "generates" directory. */
    "stylesheetsBundlesEnable": true,       /* Minify CSS into ".min" files before response pages. */
    "javascriptBundlesEnable": true,        /* Obfuscate JS into ".min" files before response pages. */
    "enableLess": true,                     /* Use Less files with ".map" for development phase. */
    "routes": "route.json"                  /* Set all urls provided by website with an external file. */
}
```

**website.prod.json** example for production:

```js
{
    "httpPort": 7777,                       /* Set the real application HTTP port if port 80 is already listened. */
    "urlPort": 80,                          /* Set the frontal port for application on the world wide web (proxy). */
    "httpSecure": "security/server",        /* Set the directory for find "server.key" and "server.crt" file for HTTPs. */
    "urlHostname": "www.my-website.com",    /* Set the hostname for the application on the world wide web. */
    "urlRelativeSubPath": "example",       /* Set a subdirectory for the application url. i.e.: "https://www.my-website.com/example/". */
    "languageCode": "en-gb",
    "pageNotFound": "/page-404/",
    "commonVariation": "common.json",
    "commonController": "common.js",
    "postSupport": false,
    "routes": "route.json",
}
```

**routes.json** example:

```js
{
    "home": {                               /* Set a key to use parameters defined or from url into code. */
        "url": "/",                         /* Set the url to request for a page. */
        "generate": "home.html",            /* Set the pathname for save an HTML file represent the output in static. */
        "template": "home.htm",             /* Assign the view file used to render content information. */
        "variation": "home.json",           /* Assign the specific variation file used for localize page. */
        "controller": "home.js"             /* Assign the specific controller file used for the home page (get last articles, number of suscribers, etc.). */
    },
    "presentation": {
        "url": "/presentation/",
        "generate": "presentation.html",
        "template": "default.htm",          /* A same template with... */
        "variation": "presentation.json"    /* ...different variation can generate different content page (see "error"). */
    },
    "members": {
        "url": "/members/",
        "generate": "members.html",
        "template": "members.htm",
        "variation": "members.json",
        "controller": "members.js"
    },
    "memberV2": {                           /* A new version of "member" render for pages. */
        "url": "/members/:member/",         /* The ":member" part represent the current member requested... */
        "generate": "members/bob.html",     /* ...and a fake user is used for a static render into generated files. */
        "template": "member.htm",
        "variation": "member.json",
        "controller": "member.js"
    },
    "member": {                             /* The old version of "memberV2" page... */
        "url": "/members-profile/:member/", /* ...with old route... */
        "redirect": "/members/:member/",    /* ...kept to redirect to the new page... */
        "statusCode": 301                   /* ...in permanent. */
    },
    "contact-us": {
        "url": "/contact-us/",
        "generate": "contact-us.html",
        "template": "contact-us.htm",
        "variation": "contact-us.json",
        "controller": "contact-us.js",
        "postSupport": true                 /* Allow POST support for send an email with custom form. */
    },
    "home-fr-fr": {
        "url": "/francais/",
        "generate": "francais/bienvenue.html",
        "template": "home.htm",
        "variation": "home.json",
        "controller": "home.js",
        "languageCode": "fr-fr"             /* A language code specifc for this page. */
    },
    "presentation-fr-fr": {
        "url": "/francais/presentation/",
        "generate": "francais/presentation.html",
        "template": "default.htm",
        "variation": "presentation.json",
        "languageCode": "fr-fr"
    },
    "members-fr-fr": {
        "url": "/francais/membres/",
        "generate": "francais/members.html",
        "template": "members.htm",
        "variation": "members.json",
        "controller": "members.js",
        "languageCode": "fr-fr"
    },
    "memberV2-fr-fr": {
        "url": "/francais/membres/:member/",
        "generate": "francais/members/bob.html",
        "template": "member.htm",
        "variation": "member.json",
        "controller": "member.js",
        "languageCode": "fr-fr"
    },
    "member-fr-fr": {
        "url": "/profile-de-membres/:member/",
        "redirect": "/membres/:member/",
        "statusCode": 301
    },
    "contact-us-fr-fr": {
        "url": "/francais/contactez-nous/",
        "generate": "francais/contactez-nous.html",
        "template": "contact-us.htm",
        "variation": "contact-us.json",
        "languageCode": "fr-fr",
        "controller": "contact-us.js",
        "postSupport": true
    },
    "error-fr-fr": {
        "url": "/francais/*",               /* All pages begining with "/francais/" for french error page. */
        "generate": "francais/page-404.html",
        "template": "default.htm",          /* Shared template into different routes (see "presentation"). */
        "variation": "page-404.json",
        "languageCode": "fr-fr",
        "statusCode": 404                   /* An appropriate 404 status code for error pages. */
    },
    "error": {
        "url": "/page-404/",                /* Default error page setted into "pageNotFound". */
        "generate": "page-404.html",
        "template": "default.htm",
        "variation": "page-404.json",
        "statusCode": 404
    }
}
```

other files...



### Step 3 - Create ###

Create files to develop your website !

*NodeAtlas* default file hierarchy:

```
my-website/
    — node_modules/               <= All node.js module for your application.
        — node-atlas/
        — ...
    — assets/                     <= All public files could be acceded in HTTP(s) without a specific route setted.
        — javascript/
            ...
        — stylesheets/
            ...
        — media/
            ...
        — ...
    — templates/                  <= The View part with each type of template for render.
        home.htm
        default.htm
        ...
    — variations/                 <= All files for content filling with "en-gb" in default...
        common.json
        home.json
        ...
        — fr-fr/                  <= ...and "fr-fr" too.
            common.json
            home.json
            ...
    — controller/                 <= The Controller part for manipulate template, variation and models with database and url parameters.
        common.js
        home.js
        ...
    — components/                 <= All re-usable part for...
        — templates/              <= ...templates...
            head.htm
            foot.htm
            ...
        — controllers/            <= ...and controllers.
            form-contact-us.js
            ...
    — models/                     <= The Model part with model files used into controllers for filled templates.
        — ...
    — generates/                  <= All HTML mockups generated and usable for Back-end not in Node.js.
    ...
    server.js                     <= File used to run and configure NodeAtlas for API usage.
    webconfig.json                <= File used to run website on localhost for development.
    webconfig.prod.json           <= File used to run website on world wide web for production.
    routes.json                   <= File used by "webconfig.json" and "webconfig.prod.json" to address route.
    ...
    webconfig.prod.en-gb.json     <= Example file used to run only "en-gb" part on a port...
    routes.en-gb.json             <= ...with english routes defined in this file...
    webconfig.prod.fr-fr.json     <= ...and run only "fr-fr" part on an other port...
    routes.fr-fr.json             <= ...with french routes defined in this file.
    ...
```

### Step 4 - Run ! ###

Run *NodeAtlas* into the "my-website" folder in your development environment:

- with your `server.js` file:

```
node server.js
```

- with CLI:

```
nodeatlas
```

- for generate mockups:

```
nodeatlas --generate
```

Run *NodeAtlas* on your production server:

- in standard:

```
nodeatlas --directory /var/www/my-website/ --webconfig webconfig.prod.json
```

- with *Forever*:

```
forever start /usr/local/lib/node_modules/node-atlas/ --directory /var/www/my-website/ --webconfig webconfig.prod.json
```





## Documentation ##

### About NodeAtlas ##

- [Complete and detailed Website](https://haeresis.github.com/NodeAtlas/english/)
- [node-atlas.js documentation for maintainers](https://haeresis.github.io/NodeAtlas/doc/index.html)



### Websites Example ##

- [Generation and HTML template maintenance](https://github.com/Haeresis/ResumeAtlas/).
- [UI Test and UI Documentation](https://github.com/Haeresis/TestCaseAtlas/).
- [HTML website maintenance (no Back-end)](https://github.com/Haeresis/ResumeAtlas/).
- [Node.js website with Websocket and PopState](https://github.com/Haeresis/BookAtlas/).
- [Node.js website with MongoDB database and Redis](https://github.com/Haeresis/BlogAtlas/).
- [API REST example](https://github.com/Haeresis/ApiAtlas/).
- [Node.js example of content filling in real time without Back-office](https://github.com/Haeresis/EditAtlas/).
- [Simple Web Server to share directory](https://github.com/Haeresis/SimpleAtlas/).
- [CSS-driven usage with Less/Stylus preprocessor with CSS Framework](https://github.com/Haeresis/PreprocessorAtlas/).
- [Website Component Oriented SEO and W3C Compliant](https://github.com/Haeresis/ComponentAtlas/).





## NodeAtlas vs Others ##

|                       | **NodeAtlas**                                                                                               | Express                  | Hapi                  | Sails                                       | Restify                  | LoopBack                                          | Meteor                                                      |
|-----------------------|-------------------------------------------------------------------------------------------------------------|--------------------------|-----------------------|---------------------------------------------|--------------------------|---------------------------------------------------|-------------------------------------------------------------|
| Type                  | Web **MVC(2)** framework                                                                                    | HTTP server library      | HTTP server framework | Web MVC framework                           | REST HTTP library        | API framework                                     | Full-stack JavaScript app platform                          |
| Top Features          | Simplicity, **Evolutivity**, Modularity                                                                     | HTTP routing, middleware | Modularity, security  | Rails familiarity, MVC                      | Simplicity, REST routing | Enterprise connectivity                           | Framework Front-end et Back-end                             |
| Suitable For          | **Web sites**, Web apps, REST APIs, **Templating**                                                          | Simple web apps          | Web apps, APIs        | Web apps, APIs                              | Simple REST APIs         | Web apps, APIs                                    | Web apps                                                    |
| Pure Node runtime     | Yes                                                                                                         | Yes                      | Yes                   | Yes                                         | Yes                      | Yes                                               | No                                                          |
| Extensions            | **Atlas plugin**, Npm module, Express middleware                                                            | Express middleware       | Hapi Plugins          |                                             |                          |                                                   | Meteor package and repository, Npm module                   |
| Data sources          | **Builtin**: In-memory /file (JSON), REST. With **external npm module**: NoSQL (MongoDB...), SQL (MySql...) |                          |                       | In-memory, File, PostgreSQL, MySQL, MongoDB |                          | In-memory/file, SQL NoSQL, ATG, Email, REST, SOAP | MongoDB, MySQL and PostgreSQL via 3rd-party Meteor packages |
| Main support language | French                                                                                                      | English                  | English               | English                                     | English                  | English                                           | English                                                     |
