<img class="logo" src="media/images/min/battles/nodejs.png" src="Node.js HTTP API">

<h2>Node.js HTTP API</h2>

<h3>Site de 2 pages + page d'erreur</h3>

<p><strong>Liste des fichiers</strong></p>

<pre><code>├─ contact.htm
├─ error.htm
├─ index.htm
└─ webconfig.json</code></pre>

<p><strong>Fichiers de vue</strong></p>

<p><em>index.htm</em></p>

<pre><code class="lang-html">&lt;!DOCTYPE html>
&lt;html lang="en-us">
  &lt;head>
    &lt;meta charset="utf-8" />
    &lt;title>Node.js http API&lt;/title>
  &lt;/head>
  &lt;body>
    Hello World! See our &lt;a href="contact">contact page&lt;/a>
  &lt;/body>
&lt;/html></code></pre>

<p><em>contact.htm</em></p>

<pre><code class="lang-html">&lt;!DOCTYPE html>
&lt;html lang="en-us">
  &lt;head>
    &lt;meta charset="utf-8" />
    &lt;title>Node.js http API&lt;/title>
  &lt;/head>
  &lt;body>
    Contact us at &lt;a href="mailto:contact@js.org">contact@js.org&lt;/a>
  &lt;/body>
&lt;/html></code></pre>

<p><em>error.htm</em></p>

<pre><code class="lang-html">&lt;!DOCTYPE html>
&lt;html lang="en-us">
  &lt;head>
    &lt;meta charset="utf-8" />
    &lt;title>Node.js http API&lt;/title>
  &lt;/head>
  &lt;body>
    This page is a 404.
  &lt;/body>
&lt;/html></code></pre>

<p><strong>Fichier de contrôleur</strong></p>

<p><em>server.js</em></p>

<pre><code class="lang-js">var http = require("http"),
  fs = require("fs"),
  httpPort = 80,
  httpServer;

httpServer = http.createServer(function (request, response) {
  var router = {
      "/": "index.htm",
      "/contact": "contact.htm"
    },
    file = router[request.url] || "error.htm",
    statusCode = (router[request.url]) ? 200 : 404;

  fs.readFile(file, "utf-8", function (err, content) {
    if (err) { 
      console.log("We cannot open " + file + " view file.");
    }
    response.writeHead(statusCode, {
      "Content-Type": "text/html; charset=utf-8"
    });

    response.end(content);
  });
});

httpServer.listen(httpPort, function () {
  console.log("Server listening on: http://localhost:%s", httpPort);
});</code></pre>

<p><strong>Lancer le site et y accéder</strong></p>

<pre><code class="lang-bash">node app.js</code></pre>

<p>Il faut à présent vous rendre à l'adresse <code>http://localhost/</code> en utilisant votre navigateur préféré.</p>