

**Vous êtes français ? Le document [derrière ce lien](https://github.com/NodeAtlas/node-atlas) vous sera peut-être plus agréable.**

> *NodeAtlas* is an MVC(2) Server-side JavaScript Framework makes it easy to develop scalable websites with SEO and W3C compliance. It is designed to running indexable and localizable simple web pages or creates HTML mockups with only the view part activated. But you can activate controller part to build powerful data-oriented, component-oriented and/or service-based web apps with great real-time features and modern compliance!

[![Donate](https://img.shields.io/badge/don-%3C3-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://travis-ci.org/Haeresis/node-atlas.svg)](https://travis-ci.org/Haeresis/node-atlas/) [![Package npm](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-6.0%2C_last-brightgreen.svg)](https://nodejs.org/en/) [![Chat for Help](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/NodeAtlas/Help)



## NodeAtlas it's : ##

- The starting point for Front-end Developers into Node.js ecosystem.
- Pure JavaScript ; for beginners come from PHP (Laravel) / Ruby (Rails) / Python (Django) / .NET or Java or for JS experts.
- A progressive system with:
   - a view-only system without care of controller,
   - scalable control of controllers and hooks,
   - i18n (internationalization) and l10n (localizations) quickly.
   - Express.js (web server) and Socket.io (client-server real-time connection) already configured together, easy to use and extendable,
   - EJS, Pug, Less and Stylus preprocessors ready to use,
   - internal tools for HTML Mockups Serverless or bundles, minifications, obfuscations, optimizations of CSS and JS,
   - isomorphism and server-side rendering with tools of your choice like Vue or React,
   - and more like DOM server manipulation, back-end code debuggable into browsers, easy HTTPs to setup.
- Combinaison of severals NodeAtlas instances for service-oriented architecture like usage as API REST,
- All npm modules, Express.js/Socket.io middleware, plugins usable (sessions, SQL/NoSQL databases, load balancing, proxy, hot-reload).
- [A French and International Guide step by step](https://node-atlas.js.org/english/), with a community support on [Gitter](https://gitter.im/NodeAtlas) (Chat) [EN]https://gitter.im/NodeAtlas/Help)/[FR](https://gitter.im/NodeAtlas/Aide).
- Web and JavaScript &lt;3 enthusiasts!
- And maybe you soon?



## NodeAtlas Official Website ##

> **[For a complete documentation, you could refer to the NodeAtlas Official Website](https://node-atlas.js.org/english/)** ([Mirror README here](https://github.com/MachinisteWeb/NodeAtlas/blob/gh-pages/README.en.md)).

- [README for v1.x](https://github.com/MachinisteWeb/NodeAtlas/blob/gh-pages/v1.x/README.en.md).

- [v1.x -> v2.x see CHANGELOG](https://github.com/NodeAtlas/node-atlas/blob/master/CHANGELOG.md).

### Websites Example ##

- [All examples provided by NodeAtlas Github Communauty](https://github.com/MachinisteWeb/ResumeAtlas/).



## Quick Start ##

Installer

```js
npm install -g node-atlas
```

and try a standard NodeAtlas website with the `README.md` help

```js
node-atlas --create hello-world
```

or try a Vue + NodeAtlas + SSR website with the `README.md` help

```js
node-atlas --create hello-vue
```



## Usage Explaination ##

### Step 1 - Install ###

Install *NodeAtlas* with one of two existing way:

 - `npm install node-atlas` preferred for an API usage.
 - `npm install -g node-atlas` preferred for a CLI usage.



### Step 2 - Configure ###

Create a `webconfig.json` file and dependencies files for configured your website.

**website.json** example for development:

```js
{
    "languageCode": "en-gb",                /* Set the principal language. */
    "pageNotFound": "/page-404/",           /* Assign the 404 dedicated view. */
    "view": "common.htm",                   /* Assign the common layout file for view. */
    "variation": "common.json",             /* Assign the common variation file for localisation. */
    "controller": "common.js",              /* Assign the common controller file for all pages called. */
    "post": false,                          /* By default, avoid POST request on pages. */
    "bundles": "bundles.json",              /* Set CSS and JS files bundled together and minifies with an external file. */
    "htmlGenerationBeforeResponse": true,   /* Generate page currently displayed into `serverless` directory. */
    "cssBundlingBeforeResponse": true,      /* Minify CSS into `.min` files before response pages. */
    "jsBundlingBeforeResponse": true,       /* Obfuscate JS into `.min` files before response pages. */
    "enableLess": true,                     /* Use Less files with `.map` for development phase. */
    "routes": "route.json"                  /* Set all urls provided by website with an external file. */
}
```

**website.prod.json** example for production:

```js
{
    "httpPort": 7777,                       /* Set the real application HTTP port if port 80 is already listened. */
    "urlPort": 80,                          /* Set the frontal port for application on the world wide web (proxy). */
    "httpSecure": "security/server",        /* Set the directory for find `server.key` and `server.crt` file for HTTPs. */
    "urlHostname": "www.my-website.com",    /* Set the hostname for the application on the world wide web. */
    "urlRelativeSubPath": "example",        /* Set a subdirectory for the application url. i.e.: "https://www.my-website.com/example/". */
    "languageCode": "en-gb",
    "pageNotFound": "/page-404/",
    "view": "common.htm",
    "variation": "common.json",
    "controller": "common.js",
    "post": false,
    "routes": "route.json",
}
```

**routes.json** example:

```js
{
    "home": {                               /* Set a key to use parameters defined or from url into code. */
        "url": "/",                         /* Set the url to request for a page. */
        "output": "home.html",              /* Set the pathname for save an HTML file represent the output in static. */
        "view": "home.htm",                 /* Assign the view file used to render content information. */
        "variation": "home.json",           /* Assign the specific variation file used for localize page. */
        "controller": "home.js"             /* Assign the specific controller file used for the home page (get last articles, number of suscribers, etc.). */
    },
    "presentation": {
        "url": "/presentation/",
        "output": "presentation.html",
        "view": "default.htm",              /* A same view with... */
        "variation": "presentation.json"    /* ...different variation can generate different content page (see "error"). */
    },
    "members": {
        "url": "/members/",
        "output": "members.html",
        "view": "members.htm",
        "variation": "members.json",
        "controller": "members.js"
    },
    "memberV2": {                           /* A new version of `member` render for pages. */
        "url": "/members/:member/",         /* The `:member` part represent the current member requested... */
        "output": "members/bob.html",       /* ...and a fake user is used for a static render into generated files. */
        "view": "member.htm",
        "variation": "member.json",
        "controller": "member.js"
    },
    "member": {                             /* The old version of `memberV2` page... */
        "url": "/members-profile/:member/", /* ...with old route... */
        "redirect": "/members/:member/",    /* ...kept to redirect to the new page... */
        "statusCode": 301                   /* ...in permanent. */
    },
    "contact-us": {
        "url": "/contact-us/",
        "output": "contact-us.html",
        "view": "contact-us.htm",
        "variation": "contact-us.json",
        "controller": "contact-us.js",
        "post": true                        /* Allow POST support for send an email with custom form. */
    },
    "home-fr-fr": {
        "url": "/francais/",
        "output": "francais/bienvenue.html",
        "view": "home.htm",
        "variation": "home.json",
        "controller": "home.js",
        "languageCode": "fr-fr"             /* A language code specifc for this page. */
    },
    "presentation-fr-fr": {
        "url": "/francais/presentation/",
        "output": "francais/presentation.html",
        "view": "default.htm",
        "variation": "presentation.json",
        "languageCode": "fr-fr"
    },
    "members-fr-fr": {
        "url": "/francais/membres/",
        "output": "francais/members.html",
        "view": "members.htm",
        "variation": "members.json",
        "controller": "members.js",
        "languageCode": "fr-fr"
    },
    "memberV2-fr-fr": {
        "url": "/francais/membres/:member/",
        "output": "francais/members/bob.html",
        "view": "member.htm",
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
        "output": "francais/contactez-nous.html",
        "view": "contact-us.htm",
        "variation": "contact-us.json",
        "languageCode": "fr-fr",
        "controller": "contact-us.js",
        "post": true
    },
    "error-fr-fr": {
        "url": "/francais/*",               /* All pages begining with `/francais/` for french error page. */
        "output": "francais/page-404.html",
        "view": "default.htm",              /* Shared view into different routes (see `presentation`). */
        "variation": "page-404.json",
        "languageCode": "fr-fr",
        "statusCode": 404                   /* An appropriate 404 status code for error pages. */
    },
    "error": {
        "url": "/page-404/",                /* Default error page setted into `pageNotFound`. */
        "output": "page-404.html",
        "view": "default.htm",
        "variation": "page-404.json",
        "statusCode": 404
    }
}
```

other files...



### Step 3 - Create ###

Create files to develop your website!

*NodeAtlas* default file hierarchy:

```
my-website/
├─ node_modules/             ⤆ All Node.js module for your application.
│  └─ node-atlas/
│     ┊┉
│
├─ assets/                   ⤆ All public files could be accessed in HTTP(s) without a specific route set.
│  ├─ javascripts/
│  │  ┊┉
│  │
│  ├─ stylesheets/
│  │  ┊┉
│  │
│  ├─ media/
│  │  ┊┉
│  │
│  ┊┉
│
├─ views/                    ⤆ The View part with each type of view for render.
│  ├─ common.htm
│  ├─ home.htm
│  ├─ default.htm
│  ┊┉
│  └─ partials/              ⤆ All re-usable view.
│     ├─ header.htm
│     ├─ footer.htm
│     ┊┉
│
├─ variations/               ⤆ All files for content filling with `en-gb` in default...
│  ├─ common.json
│  ├─ home.json
│  ┊┉
│  │
│  └─ fr-fr/                 ⤆ …and `fr-fr` too.
│     ├─ common.json
│     ├─ home.json
│     ┊┉
│
├─ controllers/              ⤆ The controller part for manipulating view, variation and model with database and url parameters.
│  ├─ common.js
│  ├─ home.js
│  ┊┉
│  ├─ modules/               ⤆ All internal modules.
│     ├─ form-contact-us.js
│     ┊┉
│
├─ models/                   ⤆ The Model part with model files used into controllers for filled views.
│  ┊┉
│
├─ serverless/               ⤆ All HTML mockups generated and usable for Back-end not in Node.js.
│  ┊┉
│
├─ server.js                 ⤆ File used to run and configure NodeAtlas for API usage.
├─ webconfig.json            ⤆ File used to run the website on localhost for development.
├─ webconfig.prod.json       ⤆ File used to run the website on world wide web for production.
├─ routes.json               ⤆ File used by `webconfig.json` and "webconfig.prod.json" to address route.
┊┉
├─ webconfig.prod.en-gb.json ⤆ Example file used to run only `en-gb` part on a port…
├─ routes.en-gb.json         ⤆ …with english routes defined in this file…
├─ webconfig.prod.fr-fr.json ⤆ …and run only `fr-fr` part on an other port…
├─ routes.fr-fr.json         ⤆ …with french routes defined in this file.
┊┉
```

### Step 4 - Run! ###

Run *NodeAtlas* into the `my-website` folder in your development environment:

- with your `server.js` file:

```
node server.js
```

- with CLI:

```
node-atlas
```

- for generate mockups:

```
node-atlas --generate
```

Run *NodeAtlas* on your production server:

- in standard:

```
node-atlas --path /var/www/my-website/ --webconfig webconfig.prod.json
```

- with *Forever*:

```
forever start /usr/local/lib/node_modules/node-atlas/ --path /var/www/my-website/ --webconfig webconfig.prod.json
```





## Documentation ##

### About NodeAtlas ##

- [Complete and detailed Website](https://node-atlas.js.org/english/)
- [node-atlas.js documentation for maintainers](https://node-atlas.js.org/doc/node-atlas/)
- [discuss on chat and ask asistance for NodeAtlas](https://gitter.im/NodeAtlas/Help)





## NodeAtlas vs Others ##

|               | Type                               | Top Features                            | Suitable For                                       | Pure Node runtime | Extensions                                        | Data sources                                                                                                | Main support language |
|---------------|------------------------------------|-----------------------------------------|----------------------------------------------------|-------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------|
| **NodeAtlas** | Web **MVC(2)** framework           | Simplicity, **Evolutivity**, Modularity | **Websites**, Web apps, REST APIs, **Templating** | Yes               | **Atlas plugin**, npm module, Express middleware  | **Built-in**: In-memory /file (JSON), REST. With **external npm module**: NoSQL (MongoDB...), SQL (MySql...) | **French**            |
| Express       | HTTP server library                | HTTP routing, middleware                | Simple web apps                                    | Yes               | Express middleware                                |                                                                                                             | English               |
| Hapi          | HTTP server framework              | Modularity, security                    | Web apps, APIs                                     | Yes               | Hapi Plugins                                      |                                                                                                             | English               |
| Sails         | Web MVC framework                  | Rails familiarity, MVC                  | Web apps, APIs                                     | Yes               |                                                   | In-memory, File, PostgreSQL, MySQL, MongoDB                                                                 | English               |
| Restify       | REST HTTP library                  | Simplicity, REST routing                | Simple REST APIs                                   | Yes               |                                                   |                                                                                                             | English               |
| LoopBack      | API framework                      | Enterprise connectivity                 | Web apps, APIs                                     | Yes               |                                                   | In-memory/file, SQL NoSQL, ATG, Email, REST, SOAP                                                           | English               |
| Meteor        | Full-stack JavaScript app platform | Framework Front-end et Back-end         | Web apps                                           | No                | Meteor package and repository, npm module         | MongoDB, MySQL and PostgreSQL via 3rd-party Meteor packages                                                 | English               |