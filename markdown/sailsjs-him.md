<img class="logo" src="media/images/min/battles/sailsjs.png" src="Sails API">

<h2>Sails API</h2>

<h3>API REST + Accès authentifié</h3>

<p><strong>Installer Sails</strong></p>

<pre><code class="lang-bash">npm install -g sails</code></pre>

<p><strong>Créer un squelette</strong></p>

<pre><code class="lang-bash">sails new api</code></pre>

<p><strong>Liste des fichiers créés</strong></p>

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

<p><strong>Modifier le fichier de route</strong></p>

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

<p><strong>Créer un fichier de contrôleur</strong></p>

<p><em>api/controllers/QuoteController.js</em></p>

<pre><code class="lang-js">module.exports = {
    getQuote: function (req, res) {
        return res.json({ quote: quoter.getRandomOne() });
    },
    getProtectedQuote: function (req, res) {
        return res.json({ quote: quoter.getRandomOne() });
    }
};</code></pre>

<p><strong>Créer des fichiers de service</strong></p>

<p><em>api/services/quoter.js</em></p>

<pre><code class="lang-js">var quotes = require("./quotes.json");

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

<p><strong>Créer et modifier des fichiers d'authentification</strong></p>

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
};
</code></pre>

<p><strong>Lancer les API et y accéder</strong></p>

<pre><code class="lang-bash">sails lift</code></pre>

<p>Il faut à présent vous rendre à l'adresse <code>http://localhost:1337/</code> en utilisant votre navigateur préféré.</p>