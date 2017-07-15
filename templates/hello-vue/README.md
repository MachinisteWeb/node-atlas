# How to run Hello Vue / Comment lancer ce Hello Vue #

- [International](#international)
- [Français](#français)





## International ##

Hello Vue is a template to set up quickly a [NodeAtlas](https://node-atlas.js.org/english/) base project using Vue as SSR template engine and MVVM client reactivity and router.

To try it you must:

- download it from here

or

- install it from [NodeAtlas](https://node-atlas.js.org/english/) CLI with `node-atlas --create hello-vue`

then

Open console and install dependencies:

```
npm install
```

### Run server on localhost ###

FR

```
node-atlas --browse
```

EN

```
node-atlas --browse --webconfig webconfig.en-us.json
```

### Generate production files ###

```
node-atlas --generate
```

### Run production version (on localhost) ###

FR

```
node-atlas --browse --webconfig webconfig.production.json
```

EN

```
node-atlas --browse --webconfig webconfig.production.en-us.json
```





## Français ##

Hello Vue est un template de démarrage pour créer une base de projet [NodeAtlas](https://node-atlas.js.org/) en utilisant Vue comme moteur de rendu côté serveur et de la réactivité et du routage MVVM côté client.

Pour l'essayer il faut :

- le télécharger de se dépôt

or

- l'installer depuis la CLI [NodeAtlas](https://node-atlas.js.org/) avec la commande `node-atlas --create hello-vue`

puis

Ouvrir une console et installer les dépendances :

```
npm install
```

### Lancer le serveur sur localhost ###

FR

```
node-atlas --browse
```

EN

```
node-atlas --browse --webconfig webconfig.en-us.json
```

### Générer les fichiers de production ###

```
node-atlas --generate
```

### Lancer le serveur pour la production (sur localhost) ###

FR

```
node-atlas --browse --webconfig webconfig.production.json
```

EN

```
node-atlas --browse --webconfig webconfig.production.en-us.json
```