## 2.0.0-beta ##

Features:

- Gitter Chat for both fr (Aide) and en (Help) language: `https://gitter.im/NodeAtlas/`.
- `NA#currentVariation.urlRootPath` is added (same as `NA#webconfig.urlRoot`).
- `NA#currentVariation.urlSubPath` is added (same as `NA#webconfig.urlRelativeSubPath`).
- `NA#currentVariation.urlFilePath` is added.
- `NA#currentVariation.urlPath` is added.
- `NA#webconfig.mimeType` is added.
- `NA#webconfig.charset` is added.
- `NA#webconfig.headers` is added.
- `NA#webconfig.cache` is added.
- `NA#configuration.cache` is added.
- `--cache` command is added.
- `NA#webconfig.enablePug` is added.
- `NA#currentRouteParameters.enablePug` is added.
- `NA#websiteController[].setSockets` is added.
- `NA#websiteController[].changeSockets` is added.

Updates:

- `NA#webconfig.urlWithoutFileName` become `NA#webconfig.urlRoot`.
- `NA#currentVariation.urlBasePathSlice` removed.
- `NA#currentVariation.urlBasePath` become `NA#webconfig.urlRoot + NA#webconfig.urlRelativeSubPath` (without ending "/").
- `NA#afterGenerates` become `NA#afterGeneration`.
- `NA#webconfig.generatesRelativePath` become `NA#webconfig.serverlessRelativePath`.
- `NA#webconfig.serverlessRelativePath` default value become `"serverless"`.
- `NA#currentRouteParameters.generate` become `NA#currentRouteParameters.output`.
- `NA#init` become `NA#start`.
- `NA#config` become `NA#init`.
- `NA#serverPhysicalPath` become `NA#nodeatlasPath`.
- `NA#websitePhysicalPath` become `NA#serverPath`.
- `NA#nodeAtlasModulePath` become `NA#nodeatlasModulesRelativePath` and become relatif to `NA#nodeatlasPath`.
- `NA#websiteModulesPath` become `NA#serverModulesRelativePath` and become relatif to `NA#serverPath`.
- `--init` command become `--create`.
- `NA#websiteController[].loadModules` become `NA#websiteController[].setModules`.
- `templatesPath` var become `viewsPath` var.
- `templateFile` var become `viewFile` var.
- `NA#webconfig.templatesRelativePath` become `NA#webconfig.viewsRelativePath`.
- `NA#webconfig.viewsRelativePath` default value become `"views"`.
- `NA#currentRouteParameters.template` become `NA#currentRouteParameters.view`.
- Language `templateNotFound` become `viewNotFound`.
- Language `templateNotSet` become `viewNotSet`.
- `NA#webconfig.htmlGeneratesBeforeResponse` become `NA#webconfig.htmlGenerationBeforeResponse`.
- EJS engine become ATLAS engine and `<% %>` become `<? ?>`.
- `NA#webconfig.componentsRelativePath` removed.
- `NA#webconfig.viewsRelativePath` replace removed `NA#webconfig.componentsRelativePath`.



## 1.8.0 ##

Features:

- Allows to do something after server was starded with callback `started` for API.
- Allows to start a Simple Web Server in HTTPs or overload webconfig.json to start it in HTTPs with `httpSecure` in CLI or API.
- Allows to start a Simple Web Server with other `httpHostname` in CLI or API.
- Allows to change NodeAtlas language used with `lang` in CLI or API.

Enhancement:

- Allows to start a Simple Web Server with other `httpPort` (support HTTPs) in CLI or API.

Updates:

- `afterInitProject` become `created` for API.
- `afterGeneration` become `generated` for API.



## 1.7.3 ##

Updates:

- New README with less informations. All informations are on official Website.



## 1.7.2 ##

Updates:

- Compatibility test and information checked and updated.



## 1.7.1 ##

Bugfix:

- Find the real place of `node-atlas` module used by CLI or by API.



## 1.7.0 ##

Enhancement:

- Use `NA.serverPhysicalPath` to find real location of NodeAtlas engine.
- Use `--init` command to copy « templates/hello-world » from NodeAtlas directory to current directory.



## 1.6.2 ##

Enhancement:

- Split a too long function into two.


Bugfix:

- Add `imagemin` submodule into `package.json`.



## 1.6.1 ##

Bugfix:

- Allows template of `enableIndex` to manage special char displaying.



## 1.6.0 ##

Feature:

-  Allows you to add dynamicly routes to webconfig with `setRoutes`.



## 1.5.1 ##

Updates:

-  `changeVariation` callback have no necessity to use `variation` anymore as first parameter.



## 1.5.0 ##

Updates:

-  change `htmlGenerateBeforeResponse` into `htmlGeneratesBeforeResponse`.



## 1.4.2 ##

Updates:

-  async 2.1.x update.



## 1.4.1 ##

Updates:

- cheerio 0.22.x update.



## 1.4.0 ##

Feature:

- Quick support for HTTP DELETE and PUT for create REST API easily.



## 1.3.4 ##

Feature:

- Possibility to change all Headers information by page.

Updates:

- async	1.5.x update.



## 1.3.3 ##

Updates:

- async	2.0.0 update.
- express-session 1.14.0 update.
- less-midleware 2.2.0 update.
- uglify-js 2.7.0 update.



## 1.3.2 ##

Enhancement:

- `--httpHostname` become a configurable value from CLI and API usage. This will help you to test website with others device on the same network without use some proxy or internet webserver.



## 1.3.1 ##

Enhancement:

- `httpSecure` not use https object if it only defined to `true` to support plateform that provide https certificate for you (e. i. Cloud9).



## 1.3.0 ##

Updates:

- Stylus support for generate CSS.



## 1.2.7 ##

Updates:

- Package New Description.



## 1.2.6 ##

Updates:

- New async version.
- Less informations on NodeAtlas index bootstrap page.



## 1.2.5 ##

Updates:

- See the link for starting page in the console.



## 1.2.4 ##

Bugfix:

- `--browse` command work as expected now !



## 1.2.3 ##

Updates:

- Less-Midleware 2.1.0 update.


## 1.2.2 ##

Updates:

- Body Parser Module update.



## 1.2.1 ##

Bugfix:

- Avoid Cheerio output use decodeEntities.



## 1.2.0 ##

Updates:

- Use a couple `index.js` and `bin/` directory to work.


## 1.1.9 ##

Updates:

- Bin directory used and lib/install.js removed.


## 1.1.4 ##

Updates:

- Update dependencies.


## 1.1.3 ##

Updates:

- Update dependencies.


## 1.1.2 ##

Updates:

- Update dependencies.


## 1.1.1 ##

Updates:

- Update dependencies.


## 1.1.0 ##

Features:

- To be able to execute code after assets generation with `--generate` via API.
- Allow you to pass image compression options for generation with `--generate`


## 1.0.0 ##

Updates:

- All functionality of Roadmap for v1.0.


## 0.99.x ##

Updates:

- Preparation for v1.0.


## 0.50.0 ##

Updates:

- Allow '/home/' path for example to generate 'home' path with good `urlBasePath`.


## 0.49.1 ##

Bugfixes:

- Bad name file in the console.log for multiple Less file.


## 0.49.0 ##

Updates:

- Compile Less with Generate feature.


## 0.48.0 ##

Updates:

- Use Less with `urlRelativeSubPath`.


## 0.47.0 ##

Updates:

- A nice looked Index page for webconfig.


## 0.46.0 ##

Updates:

- Expose `currentRouteName` value for know the key of route if a key is setted.


## 0.45.1 ##

Updates:

- Expose function for templating with variation for Back-end part.


## 0.44.0 ##

Updates:

- Allow all webconfig param to not set with '/' in end or start.


## 0.43.0 ##

Updates:

- Update image optimization mechanism.

Documentation:

- Documentation for feature below.


## 0.41.0 ##

Features:

- Allow you to not generate a route with `currentRouteParameters.generate` set to false.

Documentation:

- Documentation for feature below.


## 0.40.1 ##

Updates:

- Update of less-middleware.



## 0.40.0 ##

Features:

- EJS 2 as template engine.

Documentation:

- Change include part for templating.



## 0.38.11 ##

Documentation:

- tl;dr Update.



## 0.38.10 ##

Documentation:

- Adding of tl;dr.



## 0.38.4 ##

Bugfixes:

- Avoid a stopping of generation of HTML pages when a directory was created.



## 0.38.3 ##

Bugfixes:

- Install `nodeatlas` command without problem on Unix system with `postinstall`. It's fixed.

Documentation:

- Add precision for `nodeatlas` command.



## 0.38.2 ##

Bugfixes:

- Install `nodeatlas` command without problem on Unix system with `postinstall`. Tests.




## 0.38.1 ##

Bugfixes:

- In SimpleWebServer, `browse` option with NA.run() do not start browser. It's fixed.




## 0.38.0 ##

Features:

- CSS could be injected inline by referencing some CSS file with `injectCss`. Useful for maintain HTML assets.

Documentation:

- Add precision for  `injectCss` feature.



## 0.37.0 ##

Features:

- forceDomain could be disabled or enabled with `enableForceDomain`. By default, it's disabled.

Documentation:

- Add precision for  `enableForceDomain` feature.



## 0.36.0 ##

Features:

- Allow you to desactivate HTML generation even if a `generatesRelativePath` directory exist.
- `indexPage` property become `enableIndex`.

Documentation:

- Add precision for `htmlGenerateEnable` feature.



## 0.35.2 ##

Bugfixes:

- Bad type for javascriptBundlesEnable, stylesheetsBundlesEnable, javascriptBundlesBeforeResponse, stylesheetsBundlesBeforeResponse and autoGenerate. Setted to boolean, not string.



## 0.35.1 ##

Bugfixes:

- Avoid copy of `assetsRelativePath` into `generatesRelativePath` if `generatesRelativePath` do not exist.

Documentation:

- Add precision for generation of HTML asset.



## 0.35.0 ##

Features:

- Optimization of images.
- `autoGenerate` become `htmlGenerateBeforeResponse`

Bugfixes:

- Conflict with "true" and true in the webconfig for javascriptBundlesEnable, stylesheetsBundlesEnable, javascriptBundlesBeforeResponse, stylesheetsBundlesBeforeResponse and autoGenerate.

Documentation:

- Explain how to activate Optimizations.



## 0.34.18 ##

Bugfixes:

- Allow utilisation of `nodeatlas` command on linux and MacOS. Tests.



## 0.34.5 ##

Bugfixes:

- Because of HTTPs implementation, Simple Server Mode return an error. It's fixed.



## 0.34.4 ##

Bugfixes:

- Because of HTTPs implementation, Simple Server Mode return an error. Tests.



## 0.34.3 ##

Bugfixes:

- Because of HTTPs implementation, Simple Server Mode return an error. Tests.



## 0.34.2 ##

Bugfixes:

- Insert commands directory.



## 0.34.1 ##

Bugfixes:

- npm debug for install.js.



## 0.34.0 ##

Features:

- Easilly support HTTPs protocol (and WSs prococol) with webconfig.

Documentation:

- Explain how to activate HTTPs.



## 0.33.3 ##

Documentation:

- Change a 404 external link.



## 0.33.2 ##

Documentation:

- New website example.
- Example for multilingual 404 page.



## 0.33.1 ##

Bugfixes:

- The error page of `pageNotFound` was never matched if the `url` property was used. It's fixed.



## 0.33.0 ##

Features:

- With `--generate` command, all `assetsRelativePath` content will be copied into `generatesRelativePath` if this two path are different.

Documentation:

- Update with new information.



## 0.32.0 ##

Features:

- The `preRender` hook become the `changeVariation` hook.
- The `render` hook become the `changeDom` hook.
 - The `params.data` of `render` become `params.dom` of `changeDom`.

Bugfixes:

- If a port is already in used, the error message said the port 80 is used even if the port used is 7777 for example.

Documentation:

- Update with new information.



## 0.31.0 ##

Features:

- The `--run` opition become the `--browse` option and `-r` become `-b`.
- Adding of `--browse [subpath]`.

Documentation:

- Update with new information.



## 0.30.0 ##

Information:

- Creation of CHANGELOG.md file.