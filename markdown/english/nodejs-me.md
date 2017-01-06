<img class="logo" src="media/images/min/battles/node-atlas.png" src="NodeAtlas CLI">

<h2>NodeAtlas CLI</h2>

<h3>2 pages website + error page</h3>

<p><strong>Install NodeAtlas</strong></p>

<pre><code class="lang-bash">npm install -g node-atlas</code></pre>

<p><strong>Fileset</strong></p>

<pre><code>├─ views/
│  ├─ contact.htm
│  ├─ contact.htm
│  ├─ error.htm
│  └─ layout.htm
└─ webconfig.json</code></pre>

<p><strong>View Files</strong></p>

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

<p><strong>Configuration file</strong></p>

<p><em>webconfig.json</em></p>

<pre><code class="lang-json">{
  "commonView": "layout.htm",
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

<p><strong>Run and browse wesite</strong></p>

<pre><code class="lang-bash">nodeatlas --browse</code></pre>