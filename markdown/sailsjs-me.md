<img class="logo" src="media/images/min/battles/node-atlas.png" src="NodeAtlas CLI">

<h2>NodeAtlas API</h2>

<h3>API REST + Accès authentifié</h3>

<p><strong>Installer NodeAtlas</strong></p>

<pre><code class="lang-bash">npm install -g node-atlas</code></pre>

<p><strong>Créer un squelette</strong></p>

Créer les dossiers `controllers`, `controllers/modules` et `middlewares`.

<pre><code>api/
└─ controllers/
   └─ modules/</code></pre>

<p><strong>Créer un fichier de route</strong></p>

<p><em>routes.json</em></p>

<pre><code class="lang-js">{
    "/api/random-quote": { 
        "controller": "get-quote.js"
    },
    "/api/protected/random-quote": {
        "controller": "get-quote.js",
        "middlewares": "is-authenticated.js"
    }
}</code></pre>

<p><strong>Créer un fichier de contrôleur</strong></p>

<p><em>controllers/get-quote.js</em></p>

<pre><code class="lang-js">var quoter = require("./modules/quoter/service.js");

exports.changeDom = function (next, locals) {
    locals.dom = JSON.stringify({ quote: quoter.getRandomOne() });

    next();
};</code></pre>

<p><strong>Créer des fichiers de service</strong></p>

<p><em>controllers/modules/quoter/service.js</em></p>

<pre><code class="lang-js">var quotes = require("./data.json");

exports.getRandomOne = function() {
    var totalAmount = quotes.length,
        rand = Math.floor(Math.random() * totalAmount);

    return quotes[rand];
};</code></pre>

<p><em>controllers/modules/quoter/data.json</em></p>

<pre><code class="lang-json">["Chuck Norris doesn't call the wrong number. You answer the wrong phone.",
"Chuck Norris has already been to Mars; that's why there are no signs of life.",
"Chuck Norris and Superman once fought each other on a bet. The loser had to start wearing his underwear on the outside of his pants.",
"Some magicans can walk on water, Chuck Norris can swim through land.",
"Chuck Norris once urinated in a semi truck's gas tank as a joke....that truck is now known as Optimus Prime.",
"Chuck Norris doesn't flush the toilet, he scares the sh*t out of it",
"Chuck Norris counted to infinity - twice.",
"Chuck Norris can cut through a hot knife with butter"]</code></pre>

<p><strong>Créer des fichiers d'authentification</strong></p>

<pre><code class="lang-bash">npm install express-jwt</code></pre>

<p><em>middlewares/is-authenticated.js</em></p>

<pre><code class="lang-js">var jwt = require("express-jwt");

module.exports = function () {
    return [jwt({
        secret: "AUTH_CLIENT_SECRET",
        audience: "AUTH_CLIENT_ID"
    })];
};</code></pre>

<p><strong>Fichiers de configuration</strong></p>

<p><em>webconfig.json</em></p>

<pre><code class="lang-json">{
    "mimeType": "application/json",
    "routes": "routes.json"
}</code></pre>

<p><strong>Lancer le site et y accéder</strong></p>

<pre><code class="lang-bash">nodeatlas --browse</code></pre>