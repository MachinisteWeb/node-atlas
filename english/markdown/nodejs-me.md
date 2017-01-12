<img class="logo" src="media/images/min/battles/node-atlas.png" src="NodeAtlas CLI">

<h2>NodeAtlas CLI</h2>

<h3>Site de 2 pages + page d'erreur</h3>

<p><strong>Installer NodeAtlas</strong></p>

<pre><code class="lang-bash">npm install -g node-atlas</code></pre>

<p><strong>Liste des fichiers</strong></p>

<pre><code>├─ views/
│  ├─ contact.htm
│  ├─ contact.htm
│  ├─ error.htm
│  └─ layout.htm
└─ webconfig.json</code></pre>

<p><strong>Fichiers de vue</strong></p>

<p><em>layout.htm</em></p>

<pre><code class="lang-html">&lt;!DOCTYPE html>
&lt;html lang="en-us">
  &lt;head>
    &lt;meta charset="utf-8" />
    &lt;title>NodeAtlas CLI&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?- include(routeParameters.view) ?>
  &lt;/body>
&lt;/html></code></pre>

<p><em>index.htm</em></p>

<pre><code class="lang-html">Hello World! See our &lt;a href="contact">contact page&lt;/a></code></pre>

<p><em>contact.htm</em></p>

<pre><code class="lang-html">Contact us at &lt;a href="mailto:contact@js.org">contact@js.org&lt;/a></code></pre>

<p><em>error.htm</em></p>

<pre><code class="lang-html">This page is a 404.</code></pre>

<p><strong>Fichiers de configuration</strong></p>

<p><em>webconfig.json</em></p>

<pre><code class="lang-json">{
  "view": "layout.htm",
  "pageNotFound": "/error",
  "routes": {
    "/": "index.htm",
    "/contact": "contact.htm",
    "/error": {
      "view": "error.htm",
      "statusCode": 404
    }
  }
}</code></pre>

<p><strong>Lancer le site et y accéder</strong></p>

<pre><code class="lang-bash">nodeatlas --browse</code></pre>