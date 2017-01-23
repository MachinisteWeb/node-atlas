<img class="logo" src="media/images/min/battles/node-atlas.png" src="NodeAtlas API">

<h2>NodeAtlas API</h2>

<h3>Reproduce an Express website with HTTPs</h3>

<p><strong>Package's Information</strong></p>

<pre><code class="lang-json">{
  "name": "myapp",
  "version": "0.0.0",
  "scripts": {
    "start": "node ./bin/www"
  }
}</code></pre>

<p><strong>Install NodeAtlas</strong></p>

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

<p><strong>View files</strong></p>

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

<p><strong>Variation files</strong></p>

<p><em>variations/common.json</em></p>

<pre><code class="lang-json">{
  "title": "NodeAtlas"
}</code></pre>

<p><em>variations/error.json</em></p>

<pre><code class="lang-json">{
  "message": "Not found",
  "status": "404"
}</code></pre>

<p><strong>Controller files</strong></p>

<p><em>routes/users.js</em></p>

<pre><code class="lang-html">exports.changeDom = function (next, locals) {
  locals.dom = `{
    "params": "${locals.params.member}",
    "query": "${locals.query.member}"
    "body": "${locals.body.member}"
  }`;

  next();
};</code></pre>

<p><strong>Configuration file</strong></p>

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

<p><strong>Starting server file</strong></p>

<p><em>bin/www</em></p>

<pre><code class="lang-js">require("node-atlas")().run({
  "browse": true
});</code></pre>

<p><strong>Run and Browse Wesite</strong></p>

<pre><code class="lang-bash">npm start</code></pre>