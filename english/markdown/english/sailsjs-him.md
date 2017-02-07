<img class="logo" src="media/images/min/battles/sailsjs.png" src="Sails API">

<h2>Sails API</h2>

<h3>Distant API + Authenticated Access</h3>

<p><strong>Install Sails</strong></p>

<pre><code class="lang-bash">npm install -g sails</code></pre>

<p><strong>Create a Skeleton</strong></p>

<pre><code class="lang-bash">sails new api</code></pre>

<p><strong>List of created files</strong></p>

<pre><code>api/
├─ api/
│  ├─ controllers/
│  │  └─ .gitkeep
│  ├─ models/
│  │  └─ .gitkeep
│  ├─ policies/
│  │  └─ sessionAuth.js
│  ├─ responses/
│  │  ├─ badRequest.js
│  │  ├─ created.js
│  │  ├─ forbidden.js
│  │  ├─ notFound.js
│  │  ├─ ok.js
│  │  └─ serverError.js
│  └─ services/
│     └─ .gitkeep
├─ assets/
│  ├─ images/
│  │  └─ .gitkeep
│  ├─ js/
│  │  └─ dependencies/
│  │     └─ sails.io.js
│  ├─ styles/
│  │  └─ importer.less
│  ├─ templates/
│  │  └─ .gitkeep
│  ├─ favicon.ico
│  └─ robots.txt
├─ config/
│  ├─ env/
│  │  ├─ development.js
│  │  └─ production.js
│  ├─ locales/
│  │  ├─ _README.md
│  │  ├─ de.json
│  │  ├─ en.json
│  │  ├─ es.json
│  │  └─ fr.json
│  ├─ blueprints.js
│  ├─ bootstrap.js
│  ├─ connections.js
│  ├─ cors.js
│  ├─ csrf.js
│  ├─ globals.js
│  ├─ http.js
│  ├─ i18n.js
│  ├─ local.js
│  ├─ log.js
│  ├─ models.js
│  ├─ policies.js
│  ├─ routes.js
│  ├─ session.js
│  ├─ sockets.js
│  └─ views.js
├─ tasks/
│  ├─ config/
│  │  ├─ clean.js
│  │  ├─ coffee.js
│  │  ├─ concat.js
│  │  ├─ copy.js
│  │  ├─ cssmin.js
│  │  ├─ jst.js
│  │  ├─ less.js
│  │  ├─ sails-linker.js
│  │  ├─ sync.js
│  │  ├─ test.txt
│  │  ├─ uglify.js
│  │  └─ watch.js
│  ├─ register/
│  │  ├─ build.js
│  │  ├─ buildProd.js
│  │  ├─ compileAssets.js
│  │  ├─ default.js
│  │  ├─ linkAssets.js
│  │  ├─ linkAssetsBuild.js
│  │  ├─ linkAssetsBuildProd.js
│  │  ├─ prod.js
│  │  └─ syncAssets.js
│  ├─ pipeline.js
│  └─ README.md
├─ views/
│  ├─ 403.ejs
│  ├─ 404.ejs
│  ├─ 500.ejs
│  ├─ homepage.ejs
│  └─ layout.ejs
├─ .editorconfig
├─ .gitignore
├─ .sailsrc
├─ app.js
├─ Gruntfile.js
├─ package.json
└─ README.md</code></pre>

<p><strong>Create a Controller file</strong></p>

<p><em>api/controllers/QuoteController.js</em></p>

<pre><code class="lang-js">module.exports = {
  getQuote: function(req, res) {
    return res.json({ quote: quoter.getRandomOne() });
  },
  getProtectedQuote: function(req, res) {
    return res.json({ quote: quoter.getRandomOne() });
  }
};</code></pre>

<p><strong>Create Service Files</strong></p>

<p><em>api/services/quoter.js</em></p>

<pre><code class="lang-js">var quotes = require('./quotes.json');

exports.getRandomOne = function() {
  var totalAmount = quotes.length,
      rand = Math.floor(Math.random() * totalAmount);

  return quotes[rand];
};</code></pre>

<p><em>api/services/quotes.json</em></p>

<pre><code class="lang-json">["Chuck Norris doesn't call the wrong number. You answer the wrong phone.",
"Chuck Norris has already been to Mars; that's why there are no signs of life.",
"Chuck Norris and Superman once fought each other on a bet. The loser had to start wearing his underwear on the outside of his pants.",
"Some magicans can walk on water, Chuck Norris can swim through land.",
"Chuck Norris once urinated in a semi truck's gas tank as a joke....that truck is now known as Optimus Prime.",
"Chuck Norris doesn't flush the toilet, he scares the sh*t out of it",
"Chuck Norris counted to infinity - twice.",
"Chuck Norris can cut through a hot knife with butter"]</code></pre>

<p><strong>Create and Update Authentication Files</strong></p>

<pre><code class="lang-bash">npm install express-jwt</code></pre>

<p><em>api/policies/isAuthenticated.js</em></p>

<pre><code class="lang-js">var jwt = require("express-jwt"),
    authCheck = jwt({
      secret: "AUTH_CLIENT_SECRET",
      audience: "AUTH_CLIENT_ID"
    });

module.exports = authCheck;</code></pre>

<p><em>config/policies.js</em></p>

<pre><code class="lang-js">/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

  '*': true,

  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/
  QuoteController: {
    getProtectedQuote: 'isAuthenticated'
  }
};</code></pre>

<p><strong>Update Route File</strong></p>

<p><em>config/routes.js</em></p>

<pre><code class="lang-js">/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  "get /api/random-quote": "QuoteController.getQuote",
  "get /api/protected/random-quote": "QuoteController.getProtectedQuote"

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};</code></pre>

<p><strong>Update a Configuration File</strong></p>

<p><em>config/cors.js</em></p>

<pre><code class="lang-js">/**
 * Cross-Origin Resource Sharing (CORS) Settings
 * (sails.config.cors)
 *
 * CORS is like a more modern version of JSONP-- it allows your server/API
 * to successfully respond to requests from client-side JavaScript code
 * running on some other domain (e.g. google.com)
 * Unlike JSONP, it works with POST, PUT, and DELETE requests
 *
 * For more information on CORS, check out:
 * http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
 *
 * Note that any of these settings (besides 'allRoutes') can be changed on a per-route basis
 * by adding a "cors" object to the route configuration:
 *
 * '/get foo': {
 *   controller: 'foo',
 *   action: 'bar',
 *   cors: {
 *     origin: 'http://foobar.com,https://owlhoot.com'
 *   }
 *  }
 *
 *  For more information on this configuration file, see:
 *  http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.cors.html
 *
 */

module.exports.cors = {

  /***************************************************************************
  *                                                                          *
  * Allow CORS on all routes by default? If not, you must enable CORS on a   *
  * per-route basis by either adding a "cors" configuration object to the    *
  * route config, or setting "cors:true" in the route config to use the      *
  * default settings below.                                                  *
  *                                                                          *
  ***************************************************************************/

  allRoutes: true,

  /***************************************************************************
  *                                                                          *
  * Which domains which are allowed CORS access? This can be a               *
  * comma-delimited list of hosts (beginning with http:// or https://) or    *
  * "*" to allow all domains CORS access.                                    *
  *                                                                          *
  ***************************************************************************/

  origin: '*',

  /***************************************************************************
  *                                                                          *
  * Allow cookies to be shared for CORS requests?                            *
  *                                                                          *
  ***************************************************************************/

  // credentials: true,

  /***************************************************************************
  *                                                                          *
  * Which methods should be allowed for CORS requests? This is only used in  *
  * response to preflight requests (see article linked above for more info)  *
  *                                                                          *
  ***************************************************************************/

  // methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

  /***************************************************************************
  *                                                                          *
  * Which headers should be allowed for CORS requests? This is only used in  *
  * response to preflight requests.                                          *
  *                                                                          *
  ***************************************************************************/

  headers: 'Authorization'

};</code></pre>

<p><strong>Start API and Browse It</strong></p>

<pre><code class="lang-bash">sails lift</code></pre>

<p>Now you can reach the <code>http://localhost:1337/</code> URL with the browser you like.</p>

<h3>Website using Distant API</h3>

<p><strong>Create a Skeleton</strong></p>

<pre><code class="lang-bash">sails new website</code></pre>

<p><strong>List of created files</strong></p>

<pre><code>website/
├─ api/
│  ├─ controllers/
│  │  └─ .gitkeep
│  ├─ models/
│  │  └─ .gitkeep
│  ├─ policies/
│  │  └─ sessionAuth.js
│  ├─ responses/
│  │  ├─ badRequest.js
│  │  ├─ created.js
│  │  ├─ forbidden.js
│  │  ├─ notFound.js
│  │  ├─ ok.js
│  │  └─ serverError.js
│  └─ services/
│     └─ .gitkeep
├─ assets/
│  ├─ images/
│  │  └─ .gitkeep
│  ├─ js/
│  │  └─ dependencies/
│  │     └─ sails.io.js
│  ├─ styles/
│  │  └─ importer.less
│  ├─ templates/
│  │  └─ .gitkeep
│  ├─ favicon.ico
│  └─ robots.txt
├─ config/
│  ├─ env/
│  │  ├─ development.js
│  │  └─ production.js
│  ├─ locales/
│  │  ├─ _README.md
│  │  ├─ de.json
│  │  ├─ en.json
│  │  ├─ es.json
│  │  └─ fr.json
│  ├─ blueprints.js
│  ├─ bootstrap.js
│  ├─ connections.js
│  ├─ cors.js
│  ├─ csrf.js
│  ├─ globals.js
│  ├─ http.js
│  ├─ i18n.js
│  ├─ local.js
│  ├─ log.js
│  ├─ models.js
│  ├─ policies.js
│  ├─ routes.js
│  ├─ session.js
│  ├─ sockets.js
│  └─ views.js
├─ tasks/
│  ├─ config/
│  │  ├─ clean.js
│  │  ├─ coffee.js
│  │  ├─ concat.js
│  │  ├─ copy.js
│  │  ├─ cssmin.js
│  │  ├─ jst.js
│  │  ├─ less.js
│  │  ├─ sails-linker.js
│  │  ├─ sync.js
│  │  ├─ test.txt
│  │  ├─ uglify.js
│  │  └─ watch.js
│  ├─ register/
│  │  ├─ build.js
│  │  ├─ buildProd.js
│  │  ├─ compileAssets.js
│  │  ├─ default.js
│  │  ├─ linkAssets.js
│  │  ├─ linkAssetsBuild.js
│  │  ├─ linkAssetsBuildProd.js
│  │  ├─ prod.js
│  │  └─ syncAssets.js
│  ├─ pipeline.js
│  └─ README.md
├─ views/
│  ├─ 403.ejs
│  ├─ 404.ejs
│  ├─ 500.ejs
│  ├─ homepage.ejs
│  └─ layout.ejs
├─ .editorconfig
├─ .gitignore
├─ .sailsrc
├─ app.js
├─ Gruntfile.js
├─ package.json
└─ README.md</code></pre>

<p><strong>Create and Update View Files</strong></p>

<p><em>views/layout.ejs</em></p>

<pre><code class="lang-html">&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;meta charset="utf-8">
    &lt;title>Authentification&lt;/title>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1">
    &lt;link rel="stylesheet" href="styles/app.css">
  &lt;/head>
  &lt;body>
    &lt;%- body %>
    &lt;script src="//cdn.auth0.com/js/lock/10.3.0/lock.min.js">&lt;/script>
    &lt;script src="js/app.js">&lt;/script>
  &lt;/body>
&lt;/html></code></pre>

<p><em>views/homepage.ejs</em></p>

<pre><code class="lang-html">&lt;div class="connected">
  &lt;p>Welcome &lt;span class="nickname">&lt;/span>&lt;/p>
  &lt;p>From /api/random-quote : &lt;button class="standard" type="button">Ask !&lt;/button>&lt;/p>
  &lt;p>From /api/protected/random-quote : &lt;button class="secret" type="button">Ask with Token&lt;/button>&lt;/p>
  &lt;p>&lt;button class="logout" type="submit">Sign Out&lt;/button>&lt;/p>
&lt;/div>
&lt;div class="disconnected">
  &lt;button type="submit" class="login">Sign In&lt;/button>
&lt;/div></code></pre>

<p><strong>Create and Update Asset Files</strong></p>

<p><em>assets/styles/app.less</em></p>

<pre><code class="lang-css">.disconnected {
  display: block;
}
.connected {
  display: none;
}
.authenticated {
  .disconnected {
    display: none;
  }
  .connected {
    display: block;
  }
}</code></pre>

<p><em>assets/js/app.js</em></p>

<pre><code class="lang-js">var lock = new Auth0Lock("NQ8SuASOanVk8LdLru3Syg3uTWUbBWvB", "haeresis.eu.auth0.com"),
    login = document.getElementsByClassName("login")[0],
    logout = document.getElementsByClassName("logout")[0],
    standard = document.getElementsByClassName("standard")[0],
    secret = document.getElementsByClassName("secret")[0],
    nickname = document.getElementsByClassName("nickname")[0],
    initProfile = function () {
      var idToken = localStorage.getItem("id-token");
      if (idToken) {
        lock.getProfile(idToken, function (error, profile) {
          infoProfile(profile);
        });
      }
    },
    infoProfile = function (profile) {
      nickname.textContent = profile.nickname;
      document.body.classList.add("authenticated");
    },
    closeProfile = function() {
      localStorage.removeItem("id-token");
      window.location.href = "/";
    },
    sendStandard = function () {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:1337/api/random-quote");
      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4) {
          alert(JSON.parse(xhr.response).quote);
        }
      });
      xhr.send();
    },
    sendSecret = function () {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:1337/api/protected/random-quote");
      xhr.setRequestHeader("Authorization", "Bearer " +   localStorage.getItem("id-token"));
      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4) {
          alert(JSON.parse(xhr.response).quote);
        }
      });
      xhr.send();
    };

login.addEventListener("click", function () {
  lock.show();
});

logout.addEventListener("click", function () {
  closeProfile();
});

standard.addEventListener("click", function () {
  sendStandard();
});

secret.addEventListener("click", function () {
  sendSecret();
});

lock.on("authenticated", function (authResult) {
  lock.getProfile(authResult.idToken, function (error, profile) {
    localStorage.setItem("id-token", authResult.idToken);
    infoProfile(profile);
  });
});

initProfile();</code></pre>

<p><strong>Update Configuration Files</strong></p>

<p><em>tasks/config/less.js</em></p>

<pre><code class="lang-js">/**
 * `less`
 *
 * ---------------------------------------------------------------
 *
 * Compile your LESS files into a CSS stylesheet.
 *
 * By default, only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-less
 *
 */
module.exports = function(grunt) {

  grunt.config.set('less', {
  dev: {
    files: [{
    expand: true,
    cwd: 'assets/styles/',
    src: ['importer.less', 'app.less'],
    dest: '.tmp/public/styles/',
    ext: '.css'
    }]
  }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};</code></pre>

<p><em>config/env/development.js</em></p>

<pre><code class="lang-js">/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  port: 80

  // models: {
  //   connection: 'someMongodbServer'
  // }

};</code></pre>

<p><strong>Run and Browse Website</strong></p>

<pre><code class="lang-bash">sails lift</code></pre>

<p>Now you can reach the <code>http://localhost:1337/</code> URL with the browser you like.</p>