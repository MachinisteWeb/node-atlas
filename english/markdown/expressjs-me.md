<img class="logo" src="media/images/min/battles/node-atlas.png" src="NodeAtlas API">

<h2>NodeAtlas API</h2>

<h3>Mimer un site Express en HTTPs</h3>

<p><strong>Information de Package</strong></p>

<pre><code class="lang-json">{
  "name": "myapp",
  "version": "0.0.0",
  "scripts": {
    "start": "node ./bin/www"
  }
}</code></pre>

<p><strong>Installer NodeAtlas</strong></p>

<pre><code class="lang-bash">npm install node-atlas --save</code></pre>

<p><strong>Liste des fichiers</strong></p>

<pre><code>├─ bin/
│  └─ www
├─ publics/
│  ├─ images/
│  ├─ javascripts/
│  └─ stylesheets/
│     └─ styles.css
├─ routes/
│  └─ users.js
├─ security/
│  ├─ server.crt
│  ├─ server.csr
│  └─ server.key
├─ variations/
│  ├─ common.json
│  └─ error.json
├─ views/
│  ├─ error.pug
│  ├─ index.pug
│  └─ layout.pug
├─ package.json
└─ webconfig.json</code></pre>

<p><strong>Fichiers de vue</strong></p>

<p><em>views/layout.pug</em></p>

<pre><code class="lang-html">doctype html
html
  head
    title= common.title
    link(rel="stylesheet", href="./stylesheets/style.css")
  body
    block content</code></pre>

<p><em>views/index.pug</em></p>

<pre><code class="lang-html">extends layout

block content
  h1= common.title
  p Welcome to #{common.title}
  form(action="./users/riri/?member=fifi", method="post")
    input(type="text", name="member", value="loulou", readonly="true")
    button Valider</code></pre>

<p><em>views/error.pug</em></p>

<pre><code class="lang-html">extends layout

block content
  h1= specific.message
  h2= specific.status</code></pre>

<p><strong>Fichiers de variation</strong></p>

<p><em>variations/common.json</em></p>

<pre><code class="lang-json">{
  "title": "NodeAtlas"
}</code></pre>

<p><em>variations/error.json</em></p>

<pre><code class="lang-json">{
  "message": "Not found",
  "status": "404"
}</code></pre>

<p><strong>Fichiers de contrôleur</strong></p>

<p><em>routes/users.js</em></p>

<pre><code class="lang-html">exports.changeDom = function (next, locals) {
  locals.dom = `{
    "params": "${locals.params.member}",
    "query": "${locals.query.member}"
    "body": "${locals.body.member}"
  }`;

  next();
};</code></pre>

<p><strong>Fichier de configuration</strong></p>

<p><em>webconfig.json</em></p>

<pre><code class="lang-json">{
  "pug": true,
  "httpPort": 8443,
  "httpSecure": "security/server",
  "variation": "common.json",
  "urlRelativeSubPath": "subdomain",
  "assetsRelativePath": "public",
  "controllersRelativePath": "routes",
  "pageNotFound": "/error",
  "routes": {
    "/": "index.pug",
    "/users/(:member/)?": {
      "controller": "users.js",
      "mimeType": "application/json"
    },
    "/error": {
      "view": "error.pug",
      "variation": "error.json",
      "statusCode": 404
    }
  }
}</code></pre>

<p><strong>Fichier de lancement serveur</strong></p>

<p><em>bin/www</em></p>

<pre><code class="lang-js">require("node-atlas")().run({
  "browse": true
});</code></pre>

<p><strong>Lancer le site et y accéder</strong></p>

<pre><code class="lang-bash">npm start</code></pre>