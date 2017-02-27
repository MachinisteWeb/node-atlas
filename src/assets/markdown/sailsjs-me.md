<img class="logo" src="media/images/min/battles/node-atlas.png" src="NodeAtlas CLI">

<h2>NodeAtlas API</h2>

<h3>API distante + Accès authentifié</h3>

<p><strong>Installer NodeAtlas</strong></p>

<pre><code class="lang-bash">npm install -g node-atlas</code></pre>

<p><strong>Créer un squelette</strong></p>

Créer les dossiers `controllers`, `controllers/modules` et `middlewares`.

<pre><code>api/
├─ controllers/
│  └─ modules/
└─ middlewar/</code></pre>

<p><strong>Créer un fichier de contrôleur</strong></p>

<p><em>controllers/get-quote.js</em></p>

<pre><code class="lang-js">var quoter = require("./modules/quoter/service.js");

exports.changeDom = function (next, locals) {
  locals.dom = JSON.stringify({ quote: quoter.getRandomOne() }, undefined, "    ");

  next();
};</code></pre>

<p><strong>Créer des fichiers de service</strong></p>

<p><em>controllers/modules/quoter/service.js</em></p>

<pre><code class="lang-js">var quotes = require("./data.json");

exports.getRandomOne = function () {
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

<p><strong>Créer un fichier de configuration</strong></p>

<p><em>webconfig.json</em></p>

<pre><code class="lang-json">{
  "httpPort": 1337,
  "mimeType": "application/json",
  "options": true,
  "headers": { 
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization"
  },
  "routes": "routes.json"
}</code></pre>

<p><strong>Lancer les API et y accéder</strong></p>

<pre><code class="lang-bash">nodeatlas --browse</code></pre>

<h3>Site consommant les API distantes</h3>

<p><strong>Créer un squelette</strong></p>

Créer les dossiers `views`, `assets` `assets/javascripts` et `assets/stylesheets`.

<pre><code>api/
├─ assets/
│  ├─ javascripts/
│  └─ stylesheets/
└─ views/</code></pre>

<p><strong>Créer un fichier de vue</strong></p>

<p><em>views/index.htm</em></p>

<pre><code class="lang-html">&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;meta charset="utf-8">
    &lt;title>Authentification&lt;/title>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1">
    &lt;link rel="stylesheet" href="stylesheets/app.css">
  &lt;/head>
  &lt;body>
    &lt;div class="connected">
      &lt;p>Welcome &lt;span class="nickname">&lt;/span>&lt;/p>
      &lt;p>From /api/random-quote : &lt;button class="stantype="button">Ask !&lt;/button>&lt;/p>
      &lt;p>From /api/protected/random-quote : &lt;bclass="secret" type="button">Ask with Token&lt;/button>&lt;/p>
      &lt;p>&lt;button class="logout" type="submit">Sign Oubutton>&lt;/p>
    &lt;/div>
    &lt;div class="disconnected">
      &lt;button type="submit" class="login">Sign In&lt;/button>
    &lt;/div>
    &lt;script src="//cdn.auth0.com/js/lock/10.3.0/lock.min.js">&lt;/script>
    &lt;script src="javascripts/app.js">&lt;/script>
  &lt;/body>
&lt;/html></code></pre>

<p><strong>Créer des fichiers assets</strong></p>

<p><em>assets/stylesheets/app.less</em></p>

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

<p><em>assets/javascripts/app.js</em></p>

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
      xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("id-token"));
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

<p><strong>Créer un fichier de configuration</strong></p>

<p><em>webconfig.json</em></p>

<pre><code class="lang-json">{
  "less": true,
  "routes": {
    "/": "index.htm"
  }
}</code></pre>

<p><strong>Lancer le site et y accéder</strong></p>

<pre><code class="lang-bash">nodeatlas --browse</code></pre>