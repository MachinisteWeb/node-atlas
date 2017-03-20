# NodeAtlas Website and API #

- NodeAtlas Website : 2.0.0
- NodeAtlas API : 2.0.0

**For an international version of this README.md, [see below](#international-version).**



### Avant-propos ###

Ce dépôt contient :
- la documentation de l'API NodeAtlas. Elle est générée en executant le fichier `generate-doc.bat`.
- tous les fichiers nécéssaires à la génération du site officiel de NodeAtlas. Celui-ci fonctionne sans Node.js ou autre executable. N'importe quel serveur HTTP peut donc le faire tourner et en l'occurence, c'est Github qui s'en charge avec le sytème `gh-pages`.



### Faire tourner le site ###

Pour tester le site sur votre poste, il vous suffit de vous placer dans le dossier `src` et de lancer dans un invité de commande ceci :

```
$ cd </path/to/gh-pages-directory>/src/
```

et utilisez la commande :

```
$ node generate-website.na
```

Le site complet tournera à l'adresse :

- *http://localhost/*

__*Note :*__

*Si vous avez déjà un serveur web sur le port 80, utilisez plutôt :*

```
$ node-atlas --httpPort 7777
```

*La page sera à :*

- *http://localhost:7777/*



### Modifier le site ###

Pour modifier le site sur votre poste, il vous suffit de vous placer dans le dossier `src` et de lancer dans un invité de commande ceci :

```
$ cd </path/to/gh-pages-directory>/src/
```

et utilisez la commande :

```
$ node develop-website.na
```

Les sites tourneront aux adresses :

- *http://localhost:7777/*
- *http://localhost:7778/english/*


-----


## International Version ##

### Overview ###

This repository contains :
- API documentation of NodeAtlas. To generate it, execute the file `generate-doc.bat`.
- all required files to generate the NodeAtlas official website. This website run without Node.js or other executable. Any HTTP server can run NodeAtlas, and in our case, it's Github that do the job with `gh-pages` system.



### Run the Website ###

To test the website on your OS, just go to the `src` directory and run the CLI console like this:

```
$ cd </path/to/gh-pages-directory>/src/
```

and use the following command:

```
$ node generate-website.na
```

The full website will run here:

- *http://localhost/*

__*Note :*__

*If you already have a web server on port 80, consider using:*

```
$ node-atlas --httpPort 7777
```

*The page will be here:*

- *http://localhost:7777/*



### Update the website ###

To test the website on your OS, just go to the `src` directory and run the CLI console like this:

```
$ cd </path/to/gh-pages-directory>/src/
```

and use the following command:

```
$ node develop-website.na
```

*Pages will be here:*

- *http://localhost:7777/*
- *http://localhost:7778/english/*