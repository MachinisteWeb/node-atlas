<img class="logo" src="media/images/min/battles/expressjs.png" src="Express API">

<h2>Express API</h2>

<h3>Créer un site Express en HTTPs</h3>

<p><strong>Information de Package</strong></p>

<pre><code class="lang-json">{
  "name": "myapp",
  "version": "0.0.0",
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.2",
    "cookie-parser": "~1.4.3"
  }
}</code></pre>

<p><strong>Installer Express</strong></p>

<pre><code class="lang-bash">npm install express --save</code></pre>

<p><strong>Liste des fichiers</strong></p>

<pre><code>├─ bin/
│  └─ www
├─ publics/
│  ├─ images/
│  ├─ javascripts/
│  └─ stylesheets/
│     └─ styles.css
├─ routes/
│  ├─ index.js
│  └─ users.js
├─ security/
│  ├─ server.crt
│  ├─ server.csr
│  └─ server.key
├─ views/
│  ├─ error.pug
│  ├─ index.pug
│  └─ layout.pug
├─ app.js
└─ package.json</code></pre>

<p><strong>Fichiers de vue</strong></p>

<p><em>views/layout.pug</em></p>

<pre><code class="lang-html">doctype html
html
  head
    title= title
    link(rel="stylesheet", href="/stylesheets/style.css")
  body
    block content</code></pre>

<p><em>views/index.pug</em></p>

<pre><code class="lang-html">extends layout

block content
  h1= title
  p Welcome to #{title}
  form(action="./users/riri/?member=fifi", method="post")
    input(type="text", name="member", value="loulou", readonly="true")
    button Valider</code></pre>

<p><em>views/error.pug</em></p>

<pre><code class="lang-html">extends layout

block content
  h1= message
  h2= status</code></pre>

<p><strong>Fichiers de contrôleur</strong></p>

<p><em>routes/index.js</em></p>

<pre><code class="lang-html">var express = require("express"),
  router = express.Router();

router.get("/", function(req, res) {
  res.render("index", { 
    title: "Express"
  });
});

module.exports = router;</code></pre>

<p><em>routes/users.js</em></p>

<pre><code class="lang-html">var express = require("express"),
    router = express.Router(),
    send = function (req) {
      return `{
        "params": "${req.params.member}",
        "query": "${req.query.member}"
        "body": "${req.body.member}"
      }`
    };

router.get("/(:member/)?", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(send(req));
});

router.post("/(:member/)?", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(send(req));
});

module.exports = router;</code></pre>

<p><strong>Fichier de l'application</strong></p>

<p><em>app.js</em></p>

<pre><code class="lang-html">var express = require("express"),
    path = require("path"),
    cookieParser = require("cookie-parser"),
    bodyParser = require("body-parser"),

    index = require("./routes/index"),
    users = require("./routes/users"),

    app = express();

app.set("strict routing", true);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/users", users);

app.use(function(req, res, next) {
    next(new Error());
});

app.use(function(err, req, res, next) {
    res.locals.message = "Not Found";
    res.locals.status = 404;

    res.status(res.locals.status);
    res.render("error");
});

module.exports = app;</code></pre>

<p><strong>Fichier de lancement serveur</strong></p>

<p><em>bin/www</em></p>

<pre><code class="lang-js">#!/usr/bin/env node

var app = require("../app"),
  https = require("https"),
  path = require("path"),
  fs = require("fs"),
  port = 8443,
  server = https.createServer({
        key: fs.readFileSync(path.join(__dirname, "..", "security/server.key"), "utf-8"),
        cert: fs.readFileSync(path.join(__dirname, "..","security/server.crt"), "utf-8")
    }, app);

app.set("port", port);

server.listen(port);

server.on("listening", function () {
  console.log("Listening on " + port);
});

server.on("error", function (error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  switch (error.code) {
    case "EACCES":
      console.error(port + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(port + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});</code></pre>

<p><strong>Lancer le site et y accéder</strong></p>

<pre><code class="lang-bash">npm install</code></pre>

<pre><code class="lang-bash">npm start</code></pre>

<p>Il faut à présent vous rendre à l'adresse <code>http://localhost/</code> en utilisant votre navigateur préféré.</p>