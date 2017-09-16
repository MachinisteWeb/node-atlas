# NodeAtlas Website and API #

**For an international version of this README.md, [see below](#international-version).**



### Avant-propos ###

Ce dépôt contient :
- la documentation de l'API NodeAtlas. Elle est générée en executant la commande `node generate-doc-index.na` depuis la racine,
- tous les fichiers nécéssaires à la génération du site officiel de NodeAtlas. Ils sont générés en exécutant la commande `node generate-website.na` depuis le dossier `src/`.

Le site et la documentation sont accessibles sans lancer d'instance Node.js ou autre executable une fois générés. N'importe quel serveur HTTP peut donc les faire tourner et en l'occurence, c'est GitHub qui s'en charge avec le sytème `gh-pages`.



### Faire tourner le site ###

Pour tester le site sur votre poste, il vous suffit de vous placer dans le dossier `src` et de lancer dans un invité de commande ceci :

```bash
$ cd </path/to/gh-pages-directory>/src/
```

et utilisez la commande :

```bash
$ node generate-website.na
```

Le site complet tournera à l'adresse :

- *http://localhost/*

__*Note :*__

*Si vous avez déjà un serveur web sur le port 80, utilisez plutôt :*

```bash
$ node-atlas --httpPort 7777
```

*La page sera à :*

- *http://localhost:7777/*



### Modifier le site ###

Pour modifier le site sur votre poste, il vous faudra au préalable mettre, au même niveau que le dossier contenant ce site, le projet `git clone https://github.com/NodeAtlas/node-atlas.git`.

```
<workspace>
├─ gh-pages/    <-- Ici ce trouve ce projet
│  └─ src/
└─ node-atlas/  <-- Ici clonez `git clone https://github.com/NodeAtlas/node-atlas.git`
```

Ensuite il vous suffit de vous placer dans le dossier `src/`

```bash
$ cd </path/to/gh-pages-directory>/src/
```

et de lancer dans un invité de commande ceci :

```bash
$ node develop-website.na
```

Les sites tourneront aux adresses :

- *http://localhost:7777/*
- *http://localhost:7778/english/*


-----


## International Version ##

### Overview ###

This repository contains:
- API documentation of NodeAtlas. To generate it, execute command `node generate-doc-index.na` from root,
- all required files to generate the NodeAtlas official website. To generate it, execute command `node generate-website.na` from `src/` folder.

This documentation and website run without Node.js instance or other executable. Any HTTP server can run it, and in our case, it's GitHub that do the job with `gh-pages` system.



### Run the Website ###

To test the website on your OS, just go to the `src` directory and run the CLI console like this:

```bash
$ cd </path/to/gh-pages-directory>/src/
```

and use the following command:

```bash
$ node generate-website.na
```

The full website will run here:

- *http://localhost/*

__*Note:*__

*If you already have a web server on port 80, consider using:*

```bash
$ node-atlas --httpPort 7777
```

*The page will be here:*

- *http://localhost:7777/*



### Update the website ###

To test the website on your OS, first put, in the same level of this project directory, a folder with the `git clone https://github.com/NodeAtlas/node-atlas.git` project.

```
<workspace>
├─ gh-pages/    <-- Here is the current project
│  └─ src/
└─ node-atlas/  <-- Here clone the `git clone https://github.com/NodeAtlas/node-atlas.git`
```

just go to the `src/` directory

```bash
$ cd </path/to/gh-pages-directory>/src/
```

and run the CLI console like this:

```bash
$ node develop-website.na
```

*Pages will be here:*

- *http://localhost:7777/*
- *http://localhost:7778/english/*