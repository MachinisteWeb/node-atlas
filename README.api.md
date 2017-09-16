# API NodeAtlas #

**Vous êtes français ? [Le document vous sera peut-être plus agréable plus bas](#version-francaise).**



### Overview ###

NodeAtlas is an npm module (`node-atlas`) which have dependencies for work. To understand how to use this module, this API documentation is available, and we will see how to use it below.

### The Module ###

NodeAtlas is an npm module (`node-atlas`) which have dependencies for work. [All dependencies used by it are listed here](./module-node-atlas.html/). For each module, an explanation is available. This is for example [Express](./NA_modules.external_express.html) module explanation, [Socket.IO](./NA_modules.external_socketio.html) module explanation or [EJS](./NA_modules.external_ejs.html) module explanation. You can see all modules in `Modules` and `Externals` section.

#### The Classe ####

The `node-atlas` module provides the `NA` object.

```bash
var NA = require("node-atlas")
```

The `NA` object is a class because it is instantiable.

```bash
var website = new NA(); // or `var website = NA();` // or `var website = require("node-atlas")();`
```

You will find [all available publics, privates and inners functions here](./NA.html).

You can see all classes in `Classes` section.

#### Namespaces ####

The `NA` instance have many namespaces whose `NA#weconfig` that contain all root features of `weconfig.json` or also `NA#modules` that contain all npm modules used by `NA` and already required. You can see all namespaces in `Namespaces` section.

#### Encapsulations ####

There are several levels of accessibility for NodeAtlas attributes and objects.

**Outer Public**

These are all functions avaiable as soon as `new NodeAtlas()` instance is create. These are the following:

- [start()](./NA.html#start)
- [init(options)](./NA.html#init)
- [run(options)](./NA.html#run)
- [started(callback)](./NA.html#started)
- [stopped(callback)](./NA.html#stopped)
- [generated(callback)](./NA.html#generated)
- [created(callback)](./NA.html#created)

**Inner Public**

These are all functions available in [NodeAtlas Controllers Hooks](./NA_controllers%255B%255D.html).

**Outer Private**

These are all functions which have not purpose to be used but which are re-writable if you want. The prefix used for them is `(private)` in the documentation.

**Inner Private**

These are all functions which are not accessible from outside but used in the `NA` class. The prefix used for them is `(private, inner)` in the documentation.

-----

<div id="version-francaise"></div>

## Version française ##

### Avant-propos ###

NodeAtlas est un module npm qui repose lui-même sur divers module npm. Afin de bien comprendre comment exploiter ce module, cette documentation de l'API est a disposition, et nous allons voir ci-après comment l'utiliser.

### Le module ###

NodeAtlas est un module npm (`node-atlas`) qui a des dépendances pour fonctionner. [L'intégralité des dépendances utilisées est listés ici](./module-node-atlas.html/). Pour chaque module, une explication est disponible. Voici par exemple celle des modules [Express](./NA_modules.external_express.html), [Socket.IO](./NA_modules.external_socketio.html) ou [EJS](./NA_modules.external_ejs.html). Vous pourrez consulter ces modules dans les sections `Modules` et `Externals`.

#### La classe ####

Le module `node-atlas` délivre l'objet `NA`.

```bash
var NA = require("node-atlas")
```

L'objet `NA` est une classe car il est fait pour être instancé.

```bash
var website = new NA(); // ou `var website = NA();` // ou `var website = require("node-atlas")();`
```

Vous trouverez l'[intégralité des fonctions disponible de manière publique, privés et interne et privés ici](./NA.html).

Vous pourrez consulter cette classe dans la section `Classes`.

#### Les espaces de nom ####

L'instance de `NA` possède plusieurs namespaces dont `NA#weconfig` contenant l'intégralité des fonctionalités racine du `weconfig.json` ou encore `NA#modules` contenant l'intégralité des modules npm dont `NA` dépend déjà inclus. Vous pourrez consulter ces namespaces dans la section `Namespaces`.

#### Les encapsulations ####

Il y a plusieurs niveaux de visibilité pour les attributs et objets de NodeAtlas.

**Publique externe**

Ce sont toutes les fonctions disponibles dès la création de `new NodeAtlas()`. Ce sont les suivantes :

- [start()](./NA.html#start)
- [init(options)](./NA.html#init)
- [run(options)](./NA.html#run)
- [started(callback)](./NA.html#started)
- [stopped(callback)](./NA.html#stopped)
- [generated(callback)](./NA.html#generated)
- [created(callback)](./NA.html#created)

**Publique interne**

Ce sont toutes les fonctions disponibles dans [les points d'encrage des contrôleurs de NodeAtlas](./NA_controllers%255B%255D.html).

**Privée externe**

Ce sont toutes les fonctions qui n'ont pas pour but d'être utilisée mais qui sont redéfinissable au besoin. Elles sont préfixées par `(private)` dans la documentation.

**Privée interne**

Ce sont toutes les fonctions qui sont inaccessibles à part dans le code source de NodeAtlas. Elles sont préfixées par `(private, inner)` dans la documentation.