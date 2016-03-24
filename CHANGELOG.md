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