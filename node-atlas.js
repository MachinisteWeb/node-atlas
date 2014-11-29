/*------------------------------------*\
    $%ABOUT
\*------------------------------------*/

/**
 * @fileOverview NodeAtlas allows you to create and manage HTML assets or create multilingual websites/webapps easily with Node.js.
 * @author {@link http://www.lesieur.name/ Bruno Lesieur}
 * @version 0.25.1
 * @license {@link https://github.com/Haeresis/ResumeAtlas/blob/master/LICENSE/ GNU GENERAL PUBLIC LICENSE Version 2}
 */





/*------------------------------------*\
    $%SUMMARY
\*------------------------------------*/

/**
 * ABOUT..........................Informations about NodeAtlas.
 * SUMMARY........................It's me !
 * NODE ATLAS OBJECT..............Creation of Main Object.
 * CONFIGURATION..................Global configuration variables, command tool and webconfig. 
 * GLOBAL FUNCTIONS...............Neutral functions used more once.
 * NODE MODULES...................Functions used to load Node Modules.
 * WEB SERVER.....................Functions used to run pages on http(s) protocol and use middlewares.
 * FRONT-END PART.................Functions used for manage Front-end part.
 * BACK-END PART..................Functions used for manage Back-end part.
 * ASSETS GENERATION..............Functions used for create HTML assets.
 * INIT...........................Run all JavaScript.
 * RUN............................Starting program.
 */





/*------------------------------------*\
    $%NODE ATLAS OBJECT
\*------------------------------------*/

/**
 * The main object that contains all API variables of NodeAtlas.
 * @namespace NA
 * @public
 * @alias NA
 * @type {Object}
 */
var NA = {};





/*------------------------------------*\
    $%CONFIGURATION
\*------------------------------------*/

/**
 * Closure group for define Configuration Functions.
 * @function
 * @param {Object} publics - Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Set line command options usable when NodeAtlas is executed in a command line tool.
     * @public
     * @function lineCommandConfiguration
     * @memberOf NA
     */
    publics.lineCommandConfiguration = function () {
        var commander = NA.modules.commander;

        commander
            /** Version of NodeAtlas currently in use with `--version` option. */
            .version('0.25.1')

            /** Automaticly run default browser with `--run` options. */
            .option(NA.appLabels.commander.run.command, NA.appLabels.commander.run.description)

            /** Target the directory in which website and NodeAtlas will be running. */
            .option(NA.appLabels.commander.directory.command, NA.appLabels.commander.directory.description, String)
            
            /** Change name of JSON file used as the webconfig file. */
            .option(NA.appLabels.commander.webconfig.command, NA.appLabels.commander.webconfig.description, String)

            /** Change the port that runs the NodeAtlas website. */
            .option(NA.appLabels.commander.httpPort.command, NA.appLabels.commander.httpPort.description, String)
            
            /** Minify all files and re-create all HTML assets into generates folder. */
            .option(NA.appLabels.commander.generate.command, NA.appLabels.commander.generate.description)
            .parse(process.argv);
    };

    /**
     * Set main variables for application and language error messages.
     * @public
     * @function initGlobalVar
     * @memberOf NA
     */
    publics.initGlobalVar = function () {
        try {
            /**
             * Name of file contains language error messages. Name of file is without extension.
             * @public
             * @alias appLanguage
             * @type {string}
             * @memberOf NA
             * @default "default"
             */
            publics.appLanguage = 'default';

            /**
             * OS absolute path which contains NodeAtlas folder.
             * @public
             * @alias serverPhysicalPath
             * @type {string}
             * @memberOf NA
             * @default Folder where NodeAtlas is running.
             */
            publics.serverPhysicalPath = process.argv[1].replace(/[-a-zA-Z0-9_]+(\.js)?$/g, "");

            /**
             * Contain all Labels finded into `NA.appLanguage` file.
             * @public
             * @alias appLabels
             * @type {string}
             * @memberOf NA
             */
            publics.appLabels = require('./languages/' + publics.appLanguage + '.json');

            /**
             * Contain all functions of controllers both common and specific.
             * @namespace websiteController[]
             * @public
             * @alias websiteController
             * @type {Array.<Object>}
             * @memberOf NA
             * @example // Functions for common controller if `commonController` value is "common.json".
             * NA.websiteController["common.json"].setConfigurations(...);
             * NA.websiteController["common.json"].loadModules(...);
             * NA.websiteController["common.json"].setSessions(...);
             * NA.websiteController["common.json"].preRender(...);
             * NA.websiteController["common.json"].render(...);
             * 
             * // Functions for specific controller if a route `controller` value is "index.json".
             * NA.websiteController["index.json"].preRender(...);
             * NA.websiteController["index.json"].render(...);
             */
            publics.websiteController = [];
        } catch (exception) {
            console.log(exception);
        }
    };

    /**
     * Set main variables for webconfig.
     * @public
     * @function initGlobalVarRequiredNpmModules
     * @memberOf NA
     */
    publics.initGlobalVarRequiredNpmModules = function () {
        var commander = NA.modules.commander,
    		path = NA.modules.path,
            regex = new RegExp(path.sep + path.sep + '?$', 'g');

        /** `websitePhysicalPath` Manually setted value with `NA.config`. */
        if (commander.directory) { NA.configuration.directory = commander.directory; }

        try {

            if (typeof NA.configuration.directory !== 'string') {

                /**
                 * OS absolute path which contains webconfig and website.
                 * @public
                 * @alias websitePhysicalPath
                 * @type {string}
                 * @memberOf NA
                 * @default Folder where NodeAtlas execute website or `--directory` value.
                 */
                publics.websitePhysicalPath = process.cwd() + path.sep
            } else {
                /** `NA.websitePhysicalPath` manually setted value with `--directory`. */
                publics.websitePhysicalPath = NA.configuration.directory.replace(regex, '') + path.sep
            }
           
            /**
             * Name of the webconfig used for run website.
             * @public
             * @alias webconfigName
             * @type {string}
             * @memberOf NA
             * @default "webconfig.json".
             */ 
            publics.webconfigName = 'webconfig.json';

            /** `webconfigName` manually setted value with `--webconfig`. */
            if (commander.webconfig) { NA.configuration.webconfig = commander.webconfig; }

            /** `webconfigName` manually setted value with `NA.config`. */
            if (NA.configuration.webconfig) { NA.webconfigName = NA.configuration.webconfig; }
        } catch (exception) {
            console.log(exception);
        }
    };

    /**
     * Set configuration of template engine (EJS module).
     * @public
     * @function templateEngineConfiguration
     * @memberOf NA
     */
    publics.templateEngineConfiguration = function () {
        var ejs = NA.modules.ejs;

        /**
         * Container for all variations usable into template engine.
         * @namespace variations
         * @public
         * @alias variations
         * @type {Object}
         * @memberOf NA
         */
        publics.variations = {};

        /**
         * OS absolute directory for template engine's file included with `include` statement.
         * @public
         * @alias pathname
         * @type {string}
         * @memberOf NA.variations
         * @default The `NA.websitePhysicalPath` value with webconfig `componentsRelativePath` after.
         */
        NA.variations.pathname = NA.websitePhysicalPath + NA.webconfig.componentsRelativePath;

        /**
         * Same as `NA.variations.pathname` with arbitrary value setted after. This value will be represent current page generated for all page generated with template engine.
         * @public
         * @alias filename
         * @type {string}
         * @memberOf NA.variations
         * @default Arbitrarily setted to "all-component.here".
         */
        NA.variations.filename = NA.variations.pathname + "all-component.here";

        /**
         * Set open bracket for use EJS.
         * @public
         * @alias templateEngineOpenPattern
         * @type {string}
         * @memberOf NA.webconfig
         * @default '<%'.
         */
        ejs.open = NA.webconfig.templateEngineOpenPattern || ejs.open;

        /**
         * Set close bracket for use EJS.
         * @public
         * @alias templateEngineClosePattern
         * @type {string}
         * @memberOf NA.webconfig
         * @default '%>'.
         */
        ejs.close = NA.webconfig.templateEngineClosePattern || ejs.close;
    };

    /**
     * Decide to run a « Simple Web Server » or a « With Weconfig Server » depending to webconfig opening success. 
     * If webconfig is correctly openned, the `NA.improveWebconfigBase` and `callback` function will be run, else, just `NA.simpleWebServer` will be run.
     * @public
     * @function initWebconfig
     * @memberOf NA
     * @param {initWebconfig~callback} callback - Calling next processus if webconfig opening is a success.
     */
    publics.initWebconfig = function (callback) {
        /** Webconfig based website... */
        NA.ifFileExist(NA.websitePhysicalPath, NA.webconfigName, function () {
        	NA.improveWebconfigBase();

            /**
             * Next step !
             * @callback initWebconfig~callback
             */
            callback();
        /** ... or static website. */
        }, function () {
            NA.simpleWebServer();
        });
    };

    /**
     * Set all default webconfig's value into `NA.webconfig`.
     * @public
     * @function improveWebconfigBase
     * @memberOf NA
     */
    publics.improveWebconfigBase = function () {
    	var commander = NA.modules.commander,
    		path = NA.modules.path,
            regex = new RegExp(path.sep + path.sep + '?$', 'g'),
            data = {};

        /**
         * Contain Webconfig file to JSON format.
         * @namespace NA.webconfig
         * @public
         * @alias webconfig
         * @type {Object}
         * @memberOf NA
         */
        publics.webconfig = NA.openConfiguration(NA.webconfigName);

        if (typeof publics.webconfig.routes === 'string') {

            /**
             * Contain all routes to JSON format.
             * @public
             * @alias routes
             * @type {Object}
             * @memberOf NA.webconfig
             * @default The webconfig's property `routes`.
             */
            publics.webconfig.routes = NA.openConfiguration(publics.webconfig.routes);
        }

        if (typeof publics.webconfig.bundles === 'string') {

            /**
             * Contain bundle configuration for CSS and JS minification to JSON format.
             * @public
             * @alias bundles
             * @type {Object}
             * @memberOf NA.webconfig
             * @property {Object} bundles                    - The Bundles object.
             * @property {Object} bundles.javascript         - The Bundles configuration for Javascript.
             * @property {Object} bundles.javascript.files   - Each object name represent an output file and each property of object represent an input file.
             * @property {boolean} bundles.javascript.enable  - No JavaScript minification if set to false.
             * @property {Object} bundles.stylesheets        - The Bundles configuration for CSS.
             * @property {Object} bundles.stylesheets.files  - Each object name represent an output file and each property of object represent an input file.
             * @property {boolean} bundles.stylesheets.enable - No CSS minification if set to false.
             * @example {
             *     "javascript": {
             *         "files": {
             *             "javascript/framework.min.js": [
             *                 "javascript/modernizr.js",
             *                 "javascript/jquery.js",
             *                 "javascript/prettify.js",
             *                 "javascript/prettify/run_prettify.js"
             *             ],
             *             "javascript/common.min.js": [
             *                 "javascript/components/extended-format-date.js",
             *                 "javascript/common.js"
             *             ]
             *         }
             *     },
             *     "stylesheets": {
             *         "files": {
             *             "stylesheets/common.min.css": [
             *                 "stylesheets/common.css",
             *                 "stylesheets/common-min780.css",
             *                 "stylesheets/common-min1160.css"
             *             ]
             *         }
             *     }
             * }
             */
            publics.webconfig.bundles = NA.openConfiguration(publics.webconfig.bundles);
        }

        if (typeof NA.webconfig.variationsRelativePath !== 'undefined') {

            /**
             * Language and variable variation folder depending of languages.
             * @public
             * @alias variationsRelativePath
             * @type {string}
             * @memberOf NA.webconfig
             * @default "variations/".
             */
            NA.webconfig.variationsRelativePath = NA.webconfig.variationsRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.variationsRelativePath = 'variations/';
        }

        if (typeof NA.webconfig.controllersRelativePath !== 'undefined') {

            /**
             * Controller folder for Back-end.
             * @public
             * @alias controllersRelativePath
             * @type {string}
             * @memberOf NA.webconfig
             * @default "controllers/".
             */
            NA.webconfig.controllersRelativePath = NA.webconfig.controllersRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.controllersRelativePath = 'controllers/';
        }

        // Path to template.
		if (typeof NA.webconfig.templatesRelativePath !== 'undefined') {

            /**
             * Template folder for template engine.
             * @public
             * @alias templatesRelativePath
             * @type {string}
             * @memberOf NA.webconfig
             * @default "templates/".
             */
            NA.webconfig.templatesRelativePath = NA.webconfig.templatesRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.templatesRelativePath = 'templates/';
        }

		if (typeof NA.webconfig.componentsRelativePath !== 'undefined') {

            /**
             * Default folder for template engine include file or controller components.
             * @public
             * @alias componentsRelativePath
             * @type {string}
             * @memberOf NA.webconfig
             * @default "components/".
             */
            NA.webconfig.componentsRelativePath = NA.webconfig.componentsRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.componentsRelativePath = 'components/';
        }

		if (typeof NA.webconfig.assetsRelativePath !== 'undefined') {

            /**
             * Folder for public file like image, CSS or JS.
             * @public
             * @alias assetsRelativePath
             * @type {string}
             * @memberOf NA.webconfig
             * @default "assets/".
             */
            NA.webconfig.assetsRelativePath = NA.webconfig.assetsRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.assetsRelativePath = 'assets/';
        }

        if (typeof NA.webconfig.generatesRelativePath !== 'undefined') {

            /**
             * HTML asset generation Folder.
             * @public
             * @alias generatesRelativePath
             * @type {string}
             * @memberOf NA.webconfig
             * @default "generates/".
             */
            NA.webconfig.generatesRelativePath = NA.webconfig.generatesRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.generatesRelativePath = 'generates/';
        }

        // Adding path to original url.
        if (typeof NA.webconfig.urlRelativeSubPath !== 'undefined') {

            /**
             * Adding subfolder to original url.
             * @public
             * @alias urlRelativeSubPath
             * @type {string}
             * @memberOf NA.webconfig
             * @default Empty.
             * @example
             * // If `NA.webconfig.urlRelativeSubPath` is setted to "example/"
             * // Website will run by default to « http://localhost/example/ »
             */     
            NA.webconfig.urlRelativeSubPath = NA.webconfig.urlRelativeSubPath.replace(/\/$/g, '');
        } else {
            NA.webconfig.urlRelativeSubPath = '';
        }

        /**
         * Server listening port.
         * @public
         * @alias httpPort
         * @type {string}
         * @memberOf NA.webconfig
         * @default 80, or `process.env.PORT` if setted, or the webconfig's property `httpPort`.
         */
		NA.webconfig.httpPort = NA.webconfig.httpPort || process.env.PORT || 80;

        /** `httpPort` manually setted value with `--httpPort`. */
		if (commander.httpPort) { NA.configuration.httpPort = commander.httpPort; }

        /** `httpPort` manually setted value with `NA.config`. */
		if (NA.configuration.httpPort) { NA.webconfig.httpPort = NA.configuration.httpPort; }

        /**
         * Url access port.
         * @public
         * @alias urlPort
         * @type {string}
         * @memberOf NA.webconfig
         * @default `NA.webconfig.httpPort`.
         */
        NA.webconfig.urlPort = NA.webconfig.urlPort || NA.webconfig.httpPort;

        /**
         * Server listening hostname by http (for reverse proxy).
         * @public
         * @alias httpHostname
         * @type {string}
         * @memberOf NA.webconfig
         * @default "localhost", or `process.env.IP_ADDRESS` if setted, or the webconfig's property `httpHostname`.
         */
        NA.webconfig.httpHostname = NA.webconfig.httpHostname || process.env.IP_ADDRESS || 'localhost';
   
        /**
         * Url access hostname by http (for reverse proxy).
         * @public
         * @alias urlHostname
         * @type {string}
         * @memberOf NA.webconfig
         * @default `NA.webconfig.httpHostname`.
         */     
        NA.webconfig.urlHostname = NA.webconfig.urlHostname || NA.webconfig.httpHostname;

        /**
         * Website http(s) url generate depending of `NA.webconfig.httpSecure`, `NA.webconfig.urlHostname` and `NA.webconfig.urlPort`.
         * This value does not contain `NA.webconfig.urlRelativeSubPath`.
         * @public
         * @alias urlWithoutFileName
         * @type {string}
         * @memberOf NA.webconfig
         */        
		NA.webconfig.urlWithoutFileName = 'http' + ((NA.webconfig.httpSecure) ? 's' : '') + '://' + NA.webconfig.urlHostname + ((NA.webconfig.urlPort !== 80) ? ':' + NA.webconfig.urlPort : '') + '/';
    };

})(NA);





/*------------------------------------*\
    $%GLOBAL FUNCTIONS
\*------------------------------------*/

/**
 * Closure group for define Global Functions.
 * @function
 * @param {Object} publics - Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Read a JSON file and return a literal Object else kill process.
     * @public
     * @function openConfiguration
     * @memberOf NA
     * @param {string} configName - File name (on file path + name in relative). Base folder is the folder where is `webconfig.json`.
     * @return {Object} - Literal object of JSON file.
     */  
    publics.openConfiguration = function (configName) {
        var fs = NA.modules.fs;

        try {
            /** If file is a correct JSON file, return a literal Object file's content. */
            return JSON.parse(fs.readFileSync(NA.websitePhysicalPath + configName, 'utf-8'));
        } catch (exception) {
            if (exception.toString().indexOf('SyntaxError') !== -1) {
                /** If the file is a JSON file, but contain a Syntax error. */
                data.syntaxError = exception.toString();
                data.fileName = configName;
                console.log(NA.appLabels.webconfigSyntaxError.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
            } else {
                /** Other errors. */
                console.log(exception);
            }
            /** In case of error, kill current process. */
            process.kill(process.pid);
        }
    };

    /**
     * Read a file and allow a success callback or fallback in case of failure.
     * @public
     * @function ifFileExist
     * @memberOf NA
     * @param {string} physicalPath - Absolute OS path to a filename.
     * @param {string} fileName - Name of file.
     * @param {ifFileExist~callback} callback - Executed if file was correctly opened.
     * @param {ifFileExist~fallback} fallback - Executed if something was wrong with file.
     */  
    publics.ifFileExist = function (physicalPath, fileName, callback, fallback) {
        var fs = NA.modules.fs;

        /** Check if file exist */
        fs.stat(physicalPath + fileName, function (error) {
            var data = {
                physicalPath: physicalPath,
                fileName: fileName
            }

            if (error && error.code === 'ENOENT') {
                console.log(NA.appLabels.ifFileExist.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));

                /**
                 * If file do not exist, bad next step...
                 * @callback ifFileExist~fallback
                 */
                fallback();
            } else {

                /**
                 * If file exist, good next step !
                 * @callback ifFileExist~callback
                 */
                callback();
            }
        });
    };

})(NA);





/*------------------------------------*\
    $%NODE MODULES
\*------------------------------------*/

/**
 * Closure group for define Node Modules Functions.
 * @function
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Add native node.js module to `NA.modules`.
     * @public
     * @function loadListOfNativeModules
     * @memberOf NA
     */ 
    publics.loadListOfNativeModules = function () {
        var modules = {};

        /**
         * Allow you to create children process.
         * @public
         * @alias child_process
         * @type {Object}
         * @memberOf NA.modules
         * @see {@link http://nodejs.org/api/child_process.html Child Process}
         */ 
        modules.child_process = require('child_process');

        /**
         * Allow you to manage files.
         * @public
         * @alias fs
         * @type {Object}
         * @memberOf NA.modules
         * @see {@link http://nodejs.org/api/fs.html File System}
         */ 
        modules.fs = require('fs');

        /**
         * Allow you to handle and to transform file paths.
         * @public
         * @alias path
         * @type {Object}
         * @memberOf NA.modules
         * @see {@link http://nodejs.org/api/path.html Path}
         */ 
        modules.path = require('path');

        /**
         * Allow you to use many features of the HTTP protocol.
         * @public
         * @alias http
         * @type {Object}
         * @memberOf NA.modules
         * @see {@link http://nodejs.org/api/http.html HTTP}
         */ 
        modules.http = require('http');

        /**
         * List of modules callable into NodeAtlas and website based on NodeAtlas.
         * @namespace NA.modules
         * @public
         * @type {Object}
         * @alias modules
         * @memberOf NA
         */ 
        publics.modules = modules;
    };

    /**
     * Add npm module to `NA.modules`.
     * @public
     * @function loadListOfRequiredNpmModules
     * @memberOf NA
     */
    publics.loadListOfRequiredNpmModules = function () {

        /**
         * An advanced web server.
         * @public
         * @function express
         * @memberOf NA.modules
         * @see {@link http://expressjs.com/ Express.js}
         */
        publics.modules.express = require('express');

        /**
         * Manage session with express.
         * @public
         * @function session
         * @memberOf NA.modules
         * @see {@link https://github.com/expressjs/session express-session}
         */
        publics.modules.session = require('express-session');

        /**
         * Parse HTML for POST methods.
         * @public
         * @function bodyParser
         * @memberOf NA.modules
         * @see {@link https://github.com/expressjs/body-parser body-parser}
         */
        publics.modules.bodyParser = require('body-parser');

        /**
         * Parse Cookies for keep connection.
         * @public
         * @function cookieParser
         * @memberOf NA.modules
         * @see {@link https://github.com/expressjs/cookie-parser cookie-parser}
         */
        publics.modules.cookieParser = require('cookie-parser');

        /**
         * An implementation of heritage.
         * @public
         * @function extend
         * @memberOf NA.modules
         * @see {@link https://www.npmjs.org/package/extend extend}
         */
        publics.modules.extend = require('extend');

        /**
         * A command tool for run NodeAtlas in command prompt.
         * @public
         * @alias commander
         * @type {Object}
         * @memberOf NA.modules
         * @see {@link https://github.com/tj/commander.js commander.js}
         */
        publics.modules.commander = require('commander');

        /**
         * Compress code before send it to the client.
         * @public
         * @function compress
         * @memberOf NA.modules
         * @see {@link https://github.com/expressjs/compression compression}
         */
        publics.modules.compress = require('compression');

        /**
         * Open a file or url in the user's preferred application.
         * @public
         * @function open
         * @memberOf NA.modules
         * @see {@link https://www.npmjs.org/package/open open}
         */
        publics.modules.open = require('open');

        /**
         * EJS cleans the HTML out of your JavaScript with client side templates.
         * @public
         * @alias ejs
         * @type {Object}
         * @memberOf NA.modules
         * @see {@link http://www.embeddedjs.com/ EJS}
         */
        publics.modules.ejs = require('ejs');

        /**
         * Make all directories in a path, like mkdir -p.
         * @public
         * @function mkpath
         * @memberOf NA.modules
         * @see {@link https://www.npmjs.org/package/mkpath mkpath}
         */
        publics.modules.mkpath = require('mkpath');

        /**
         * Tiny, fast, and elegant implementation of core jQuery designed specifically for the server.
         * @public
         * @function cheerio
         * @memberOf NA.modules
         * @see {@link https://www.npmjs.org/package/cheerio cheerio}
         */
        publics.modules.cheerio = require('cheerio');

        /**
         * UglifyJS is a JavaScript parser, minifier, compressor or beautifier toolkit.
         * @public
         * @alias uglifyJs
         * @type {Object}
         * @memberOf NA.modules
         * @see {@link https://github.com/mishoo/UglifyJS2 UglifyJS2}
         */
        publics.modules.uglifyJs = require('uglify-js');

        /**
         * A fast, efficient, and well tested CSS minifier for node.js.
         * @public
         * @function cleanCss
         * @memberOf NA.modules
         * @see {@link https://github.com/jakubpawlowicz/clean-css clean-css}
         */
        publics.modules.cleanCss = require('clean-css');

        /**
         * Is a middleware for Epxpress that redirects any requests to a default domain.
         * @public
         * @function forceDomain
         * @memberOf NA.modules
         * @see {@link https://www.npmjs.org/package/node-force-domain node-force-domain}
         */
        publics.modules.forceDomain = require('node-force-domain');
    };

    /**
     * Download all packet like `npm install` based on package.json if a module is not founded.
     * @public
     * @function downloadAllModule
     * @memberOf NA
     * @param {Object} exception - Allow to know if a module is not founded.
     */
    publics.downloadAllModule = function (exception) {
        var execute = NA.modules.child_process.exec;

        /** Test if package.json is present for obtain list of module and version. */
        NA.ifFileExist(NA.serverPhysicalPath, 'package.json', function () {
            console.log(NA.appLabels.downloadAllModule.moduleNotExist + " " + NA.appLabels.downloadAllModule.downloadStarting + "(" + exception + ")");

            /** Execute an npm command to install all modules not founded. */
            execute('npm --prefix ' + NA.serverPhysicalPath + ' install -l', function (error, stdout, stderr) {
                if (!error) {
                    console.log(NA.appLabels.downloadAllModule.installationDone + " " + NA.appLabels.downloadAllModule.restartRequired);
                    /** It's ok, killing process and restarting manually now. */
                    process.kill(process.pid);
                } else {
                    /** It's not ok explain the error. */
                    console.log(error);
                }
            });
        }, function () {
            /** No package.json ? We kill the process. */
            process.kill(process.pid);
        });
    };

    /**
     * Load modules or install modules.
     * @public
     * @function moduleRequired
     * @memberOf NA
     * @param {moduleRequired~callback} callback - Run next steps if all module are correctly loaded.
     */
    publics.moduleRequired = function (callback) {
        try {
            NA.loadListOfRequiredNpmModules();

            /** 
             * Next step after loading of module.
             * @callback moduleRequired~callback
             */
            callback();
        } catch (exception) {
            if (exception.code === 'MODULE_NOT_FOUND') {
                /** If a module is not found, download it */
                NA.downloadAllModule(exception);
            } else {
                console.log(exception);
            }
        }
    };

})(NA);





/*------------------------------------*\
    $%WEB SERVER
\*------------------------------------*/

/**
 * Closure group for define Web Server Functions.
 * @function
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Run NodeAtlas with targeted directory (without webconfig) as a « public » directory.
     * @public
     * @function simpleWebServer
     * @memberOf NA
     */
    publics.simpleWebServer = function () {
        var commander = NA.modules.commander,
            http = NA.modules.http,
            commander = NA.modules.commander,
            express = NA.modules.express,
            open = NA.modules.open;

        /** Configure the server and... */
        publics.httpServer = express();
        publics.httpServer.enable('strict routing');
        publics.server = http.createServer(NA.httpServer);

        /** ...listen HTTP request... */
        NA.server.listen(commander.httpPort || NA.configuration.httpPort || 80, function () {
            console.log(NA.appLabels.publicMode);
        });

        /** ...from « public » directory. */
        NA.httpServer.use(express["static"](NA.websitePhysicalPath, { maxAge: 86400000 * 30 }));

        commander.httpPort = commander.httpPort || 80;

        if (commander.run) { open('http://localhost' + ((commander.httpPort !== 80) ? ':' + commander.httpPort : '') + '/'); }
    };

    /**
     * Start a real NodeAtlas Server.
     * @public
     * @function startingHttpServer
     * @memberOf NA
     */
    publics.startingHttpServer = function () {
        var express = NA.modules.express,
            favicon = NA.modules.favicon,
            commander = NA.modules.commander,
            compress = NA.modules.compress,
            session = NA.modules.session,
            bodyParser = NA.modules.bodyParser,
            cookieParser = NA.modules.cookieParser,
            forceDomain = NA.modules.forceDomain,
            http = NA.modules.http,
            open = NA.modules.open,
            optionSession = {},

            /**
             * Define is site is running with HTTP(S) protocol.
             * @public
             * @alias httpSecure
             * @type {boolean}
             * @memberOf NA.webconfig
             */ 
            httpSecure = NA.webconfig.httpSecure;

        /**
         * Next step after session configuration.
         * @private
         * @function startingHttpServer~atlasSessions
         * @param {Object} NA - The NodeAtlas object with new modifications.
         */
        function atlasSessions(NA) {

            publics = NA;

            optionSession.store = NA.sessionStore;
            NA.webconfig.session = optionSession;

            /** Create a cookie Session. */
            NA.httpServer.use(session(optionSession));

            /** Use the `NA.websiteController[<commonController>].setConfigurations(...)` function if set... */
            if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                typeof NA.websiteController[NA.webconfig.commonController].setConfigurations !== 'undefined') {

                    /**
                     * Define this function for configure all modules of your application. Only for `common` controller file.
                     * @function setConfigurations
                     * @memberOf NA.websiteController[]
                     * @param {Object} NA - NodeAtlas object for used `NA.modules` object.
                     * @param {setConfigurations~callback} callback - Next steps after configuration is done.
                     */
                    NA.websiteController[NA.webconfig.commonController].setConfigurations(NA, 

                    /**
                     * Next steps after configuration is done.
                     * @callback setConfigurations~callback
                     * @param {Object} NA - Return NodeAtlas object with modification.
                     */
                    function (NA) {
                        atlasMiddlewares(NA);
                    });
            /** ...else, just continue. */
            } else {
                atlasMiddlewares(NA);
            }
        }

        /**
         * Next step after configuration of modules and middlewares.
         * @private
         * @function startingHttpServer~atlasMiddlewares
         * @param {Object} NA - The NodeAtlas object with new modifications.
         */  
        function atlasMiddlewares(NA) {

            publics = NA;

            /** Listen HTTP request... */
            NA.server.listen(NA.webconfig.httpPort, function () {
                var data = {};

                data.httpPort = NA.webconfig.httpPort;

                console.log(NA.appLabels.isRunning.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
            });

			if (commander.run) { NA.configuration.run = commander.run; }

            if (NA.configuration.run) { open(NA.webconfig.urlWithoutFileName + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "")); }
        
        }

        /**
         * A simple HTTP server.
         * @public
         * @function httpServer
         * @memberOf NA
         */
        publics.httpServer = express();

        /** Server is case sensitive and slash sensitive. */
        NA.httpServer.enable('strict routing');

        /**
         * The global HTTP server.
         * @public
         * @function server
         * @memberOf NA
         */
        publics.server = http.createServer(NA.httpServer);

        if (commander.generate) { NA.configuration.generate = commander.generate; }

        /** NodeAtlas as Node.js Website. */
        if (!NA.configuration.generate) {

            /** Use gzip and others client-server data compression. */
            NA.httpServer.use(compress());

            /** Force utilisation of www and avoid using the original port in address. */
            NA.httpServer.use(forceDomain({
                hostname: NA.webconfig.urlHostname,
                port: NA.webconfig.urlPort,
                type: 'permanent',
                protocol: 'http' + ((httpSecure) ? 's' : '')
            }));

            /** Allow you to parse the GET/POST data format. */
            NA.httpServer.use(bodyParser.urlencoded({ extended: true }));

            /** Allow you to parse the JSON data format. */
            NA.httpServer.use(bodyParser.json());

            /** Allow you to parse the Cookie data format. */
            NA.httpServer.use(cookieParser());

            /**
             * Name for Session cookie of connected user.
             * @public
             * @alias sessionKey
             * @type {string}
             * @memberOf NA.webconfig
             * @default 'nodeatlas.sid'.
             */
            optionSession.key = NA.webconfig.sessionKey || 'nodeatlas.sid',

            /**
             * Secret for Session cookie of connected user.
             * @public
             * @alias sessionSecret
             * @type {string}
             * @memberOf NA.webconfig
             * @default '1234567890bépo'.
             */
            optionSession.secret = NA.webconfig.sessionSecret || '1234567890bépo',
            optionSession.saveUninitialized = true,
            optionSession.resave = true

            if (NA.webconfig.session) {

                /**
                 * Use a more complexe session cookie options.
                 * Replace `NA.webconfig.sessionKey` and `NA.webconfig.sessionSecret` if set.
                 * @public
                 * @alias session
                 * @type {Object}
                 * @memberOf NA.webconfig
                 * @see {@link https://github.com/expressjs/session Session Middleware}
                 */        
                optionSession = NA.webconfig.session;
            }

            /**
             * A default session loaded with `NA.webconfig.sessionKey` and `NA.webconfig.sessionSecret` or `NA.webconfig.sessionKey` and `NA.webconfig.session`.
             * @public
             * @alias sessionStore
             * @type {Object}
             * @memberOf NA
             * @see {@link https://github.com/expressjs/session Session Middleware}
             */    
            publics.sessionStore = new session.MemoryStore();

            /** Use the `NA.websiteController[<commonController>].setSessions(...)` function if set... */
            if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                typeof NA.websiteController[NA.webconfig.commonController].setSessions !== 'undefined') {

                    /**
                     * Define this function for configure sessions of application. Only for `common` controller file.
                     * @function setSessions
                     * @memberOf NA.websiteController[]
                     * @param {Object} NA - NodeAtlas object for used `NA.session` object.
                     * @param {setSessions~callback} callback - Next steps after configuration is done.
                     */
                    NA.websiteController[NA.webconfig.commonController].setSessions(NA, 

                    /**
                     * Next steps after set session is done.
                     * @callback setSessions~callback
                     * @param {Object} NA - Return NodeAtlas object with modification.
                     */
                    function (NA) {
                        atlasSessions(NA);
                    });
            /** ...else, just continue. */
            } else {
                atlasSessions(NA);
            }
        }
    };

    /**
     * Set the public directory for asset like CSS/JS and media.
     * @public
     * @function httpServerPublicFiles
     * @memberOf NA
     */ 
    publics.httpServerPublicFiles = function () {
        var express = NA.modules.express,
            commander = NA.modules.commander;

        if (commander.generate) { NA.configuration.generate = commander.generate; }

        if (!NA.configuration.generate) {
            NA.httpServer.use(NA.webconfig.urlRelativeSubPath, express["static"](NA.websitePhysicalPath + NA.webconfig.assetsRelativePath, { maxAge: 86400000 * 30 }));
        }
    };

    /**
     * Send HTML result to the client.
     * @public
     * @function response
     * @memberOf NA
     * @param {Object} request - Initial request.
     * @param {Object} response - Initial response.
     * @param {string} data - HTML DOM ready for sending.
     * @param {string} currentRouteParameters - Parameters set into `routes[<currentRoute>]`.
     * @param {string} currentVariation - Variations for the current page.
     */ 
    publics.response = function (request, response, data, currentRouteParameters, currentVariation) {

            /**
             * Charset use for render of this page.
             * @public
             * @alias charset
             * @type {string}
             * @memberOf NA#currentRouteParameters
             * @default 'utf-8'
             */
        var charset = currentVariation.currentRouteParameters.charset || currentRouteParameters.charset || 'utf-8',

            /**
             * Status Code use for respond with this page.
             * @public
             * @alias statusCode
             * @type {number}
             * @memberOf NA#currentRouteParameters
             * @default 200
             */
            statusCode = currentVariation.currentRouteParameters.statusCode || currentRouteParameters.statusCode || 200,

            /**
             * Content Type use for respond with this page.
             * @public
             * @alias mimeType
             * @type {string}
             * @memberOf NA#currentRouteParameters
             * @default 'text/html'
             */
            contentType = currentVariation.currentRouteParameters.mimeType || currentRouteParameters.mimeType || 'text/html',
            others = {
                /*'Content-Length': data.length,*/
                'Content-Type': contentType
            };

        /** Set/Send headers */
        response.charset = charset;
        response.writeHead(statusCode, others);

        /** Set/Send body */
        response.write(data);
        response.end();
    };

    /**
     * Redirect a page to an other page if option page is set for that.
     * @public
     * @function redirect
     * @memberOf NA
     * @param {Object} currentRouteParameters - All information associate with the redirection.
     * @param {Object} request - Initial request.
     * @param {Object} response - Initial response.
     */ 
    publics.redirect = function (currentRouteParameters, request, response) {
        var location;

        /** Re-inject param into redirected url if is replaced by regex. */
        if (currentRouteParameters.regExp) {

            /**
             * Represent route to redirect if current route matched.
             * @public
             * @alias redirect
             * @type {string}
             * @memberOf NA#currentRouteParameters
             */    
            location = currentRouteParameters.redirect.replace(/\$([0-9]+)\$/g, function (regex, matches) { return request.params[matches]; });
        /** Or by standard selector. */
        } else {
            location = currentRouteParameters.redirect.replace(/\:([a-z0-9]+)/g, function (regex, matches) { return request.params[matches]; });
        }

        /** Set status and new location. */
        response.writeHead(currentRouteParameters.statusCode, {
            Location: NA.webconfig.urlRelativeSubPath + location
        });

        /** No more data. */
        response.end();
    };

    /**
     * Listen a specific request.
     * @public
     * @function routesPages
     * @memberOf NA
     * @param {string} path - The url listening.
     * @param {Object} options - Option associate to this url.
     */ 
    publics.request = function (path, options) {
        var currentRouteParameters = options[path],
            getSupport = true,
            postSupport = true,
            currentPath = path,
            objectPath;

        /** Case of `currentRouteParameters.url` replace `path` because `path` is used like a key. */
        if (currentRouteParameters.url) {

            /**
             * If setted, replace « The url listening ». « The url listening. » become a « key » value.
             * @public
             * @alias url
             * @type {string}
             * @memberOf NA#currentRouteParameters
             */
            currentPath = currentRouteParameters.url;
        }

        /** Adding of subfolder before url listening. */
        objectPath = NA.webconfig.urlRelativeSubPath + currentPath;

        /** Manage GET / POST support for an url. */

        if (
            /**
             * Allow you to avoid or authorize GET response for all page.
             * @public
             * @alias getSupport
             * @type {boolean}
             * @memberOf NA.webconfig
             * @default true
             */
            NA.webconfig.getSupport === false
        ) { getSupport = false; }

        if (
            /**
             * Allow you to avoid or authorize GET response for current page.
             * @public
             * @alias getSupport
             * @type {boolean}
             * @memberOf NA#currentRouteParameters
             * @default true
             */
            currentRouteParameters.getSupport === false
        ) { getSupport = false; }
        if (currentRouteParameters.getSupport === true) { getSupport = true; }

        if (
            /**
             * Allow you to avoid or authorize POST response for all page.
             * @public
             * @alias postSupport
             * @type {boolean}
             * @memberOf NA.webconfig
             * @default true
             */
            NA.webconfig.postSupport === false
        ) { postSupport = false; }

        if (
            /**
             * Allow you to avoid or authorize POST response for current page.
             * @public
             * @alias postSupport
             * @type {boolean}
             * @memberOf NA#currentRouteParameters
             * @default true
             */
            currentRouteParameters.postSupport === false
        ) { postSupport = false; }
        if (currentRouteParameters.postSupport === true) { postSupport = true; }

        /** Allow you to use regex into your url route... */
        if (
            /**
             * Use RegExp expression as selector for route url If setted to true.
             * Same if is a string but string represent option like "g".
             * @public
             * @alias regExp
             * @type {string|boolean}
             * @default false
             * @memberOf NA#currentRouteParameters 
             */
            currentRouteParameters.regExp
        ) {
            /** ...with options... */
            if (typeof currentRouteParameters.regExp === 'string') {
                objectPath = new RegExp(objectPath, currentRouteParameters.regExp);
            /** ...or not... */
            } else {
                objectPath = new RegExp(objectPath);
            }
        }

        /** Execute Get Request */
        if (getSupport) {
            NA.httpServer.get(objectPath, function (request, response) {
                /** Verify if route is a redirection... */
                if (options[path].redirect && options[path].statusCode) {
                    /** ...and if is it, redirect... */
                    NA.redirect(options[path], request, response);
                } else {
                    /** ...else execute render... */
                    NA.render(path, options, request, response);
                }
            });
        }

        /** Execute Post Request */
        if (postSupport) {
            NA.httpServer.post(objectPath, function (request, response) {
                /** Verify if route is a redirection... */
                if (options[path].redirect && options[path].statusCode) {
                     /** ...and if is it, redirect... */
                    NA.redirect(options[path], request, response);
                } else {
                    /** ...else execute render... */
                    NA.render(path, options, request, response);
                }
            });
        }
    };

    /**
     * Define a page to display when no url match in route or in `NA.httpServerPublicFiles` directory.
     * @public
     * @function pageNotFound
     * @memberOf NA
     */ 
    publics.pageNotFound = function () {
        if (NA.webconfig.pageNotFound && NA.webconfig.routes[NA.webconfig.pageNotFound]) {
            var pageNotFound = NA.webconfig.routes[NA.webconfig.pageNotFound],

                /**
                 * Represent route to use if no route match in all route.
                 * @public
                 * @alias pageNotFound
                 * @type {string}
                 * @memberOf NA.webconfig
                 */  
                pageNotFoundUrl = NA.webconfig.pageNotFound;

            /** Case of `currentRouteParameters.url` replace `path` because `path` is used like a key. */
            if (pageNotFound.url) {
                pageNotFoundUrl = pageNotFound.url;
            }

            /** Match all Get Request */
            NA.httpServer.get("*", function (request, response) {
                /** Verify if route for `pageNotFound` is a redirection... */
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    /** ...and if is it, redirect... */
                    NA.redirect(pageNotFound, request, response);
                } else {
                    /** ...else execute render... */
                    NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
                }
            })
            /** Match all Post Request */
            NA.httpServer.post("*", function (request, response) {
                /** Verify if route for `pageNotFound` is a redirection... */
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    /** ...and if is it, redirect... */
                    NA.redirect(pageNotFound, request, response);
                } else {
                    /** ...else execute render... */
                    NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
                }
            });
        }
    };

    /**
     * Crawl all route and execute each file with a request is emit by client.
     * @public
     * @function routesPages
     * @memberOf NA
     */ 
    publics.routesPages = function () {
        var commander = NA.modules.commander;

        if (commander.generate) { NA.configuration.generate = commander.generate; }
        
        if (!NA.configuration.generate) {   
            /** For each `webconfig.routes`. */    
            for (var currentUrl in NA.webconfig.routes) {
                /** Listen request */
                NA.request(currentUrl, NA.webconfig.routes);
            }
        }
    };

})(NA);





/*------------------------------------*\
    $%FRONT-END PART
\*------------------------------------*/


/**
 * Closure group for define Front-end Part Functions.
 * @function
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Open a temlpate file.
     * @public
     * @function openTemplate
     * @memberOf NA
     * @param {Object} currentRouteParameters - Parameters set into `routes[<currentRoute>]`.
     * @param {Object} templatesPath - Path to template file.
     * @param {openTemplate~callback} callback - Next steps after opening file.
     */ 
    publics.openTemplate = function (currentRouteParameters, templatesPath, callback) {
        var fs = NA.modules.fs;

        fs.readFile(templatesPath, 'utf-8', function (error, data) {
            var dataError = {};

            if (error) {
                dataError.templatesPath = templatesPath;
                if (typeof currentRouteParameters.template === 'undefined') {
                    console.log(NA.appLabels.templateNotSet);
                } else {
                    console.log(NA.appLabels.templateNotFound.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                }
            } else {

                /**
                 * Next steps after opening file.
                 * @callback openTemplate~callback
                 * @param {string} data - All HTML data from template.
                 */
                callback(data); 
            }
       });
    };

    /**
     * Open a variation file.
     * @public
     * @function openVariation
     * @memberOf NA
     * @param {string} variationName - Name of JSON file.
     * @param {string} languageCode - Current language for this variation.
     * @returns {Object|boolean} - Return all data from JSON or false if an error occured.
     */ 
    publics.openVariation = function (variationName, languageCode) {
        var fs = NA.modules.fs,
            dataError = {},
            variationsPath,
            languagePath;

            /** Know if variation must be open language subdirectory in first place or not. */
            if (languageCode) { languagePath = languageCode + '/'; }
            if (!languageCode) { languagePath = ''; }

            /** Find the correct path for variations. */
            variationsPath = NA.websitePhysicalPath + NA.webconfig.variationsRelativePath + languagePath + variationName;

        if (typeof variationName !== 'undefined') {
            dataError.variationsPath = variationsPath;
            try {
                /** Return the variations variable into an object. */
                return JSON.parse(fs.readFileSync(variationsPath, 'utf-8'));
            } catch (exception) {
                /** Explain errors. */
                if (!languageCode) {
                    if (exception.code === 'ENOENT') {
                        console.log(NA.appLabels.variationNotFound.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                    } else if (exception.toString().indexOf('SyntaxError') !== -1) {
                        dataError.syntaxError = exception.toString();
                        console.log(NA.appLabels.variationSyntaxError.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                    } else {
                        console.log(exception);
                    }
                    return false;
                }
            }
        }
    };

    /**
     * Engine for minification and concatenation of all files with a Bundle configuration.
     * @public
     * @function cssMinification
     * @memberOf NA
     */ 
    publics.cssMinification = function () {
        var bundles = NA.webconfig.bundles,
            cleanCss = NA.modules.cleanCss,
            fs = NA.modules.fs,
            enable = true,
            output = "";

        /** Verify if bundle is okay and if engine must start. */
        if (bundles && bundles.stylesheets && typeof bundles.stylesheets.enable === 'boolean') {
            enable = bundles.stylesheets.enable;
        }

        /** Star engine. */
        if (bundles && bundles.stylesheets && bundles.stylesheets.files && enable) {
            for (var compressedFile in bundles.stylesheets.files) {
                for (var i = 0; i < bundles.stylesheets.files[compressedFile].length; i++) {
                    output += fs.readFileSync(NA.websitePhysicalPath + NA.webconfig.assetsRelativePath + bundles.stylesheets.files[compressedFile][i], 'utf-8');
                }

                output = new cleanCss().minify(output);
                fs.writeFileSync(NA.websitePhysicalPath + NA.webconfig.assetsRelativePath + compressedFile, output);
                output = "";
            }
        }
    };

    /**
     * Engine for obfuscation and concatenation of all files with a Bundle configuration.
     * @public
     * @function jsObfuscation
     * @memberOf NA
     */ 
    publics.jsObfuscation = function () {
        var bundles = NA.webconfig.bundles,
            uglifyJs = NA.modules.uglifyJs,
            fs = NA.modules.fs,
            enable = true,
            output = "";

        /** Verify if bundle is okay and if engine must start. */
        if (bundles && bundles.javascript && typeof bundles.javascript.enable === 'boolean') {
            enable = bundles.javascript.enable;
        }

        /** Star engine. */
        if (bundles && bundles.javascript && bundles.javascript.files && enable) {
            for (var compressedFile in bundles.javascript.files) {
                for (var i = 0; i < bundles.javascript.files[compressedFile].length; i++) {
                    output += uglifyJs.minify(NA.websitePhysicalPath + NA.webconfig.assetsRelativePath + bundles.javascript.files[compressedFile][i], 'utf-8').code;
                }

                fs.writeFileSync(NA.websitePhysicalPath + NA.webconfig.assetsRelativePath + compressedFile, output);
                output = "";
            }
        }
    };

    /**
     * Generate the HTML output for send to client.
     * @public
     * @function render
     * @memberOf NA
     * @param {string} path - The url listening.
     * @param {Object} options - Option associate to this url.
     * @param {Object} request - Initial request.
     * @param {Object} response - Initial response.
     */ 
    publics.render = function (path, options, request, response) {
        var ejs = NA.modules.ejs,
            extend = NA.modules.extend,

            /**
             * All parameters from a specific page.
             * @namespace #currentRouteParameters
             * @memberOf NA
             */
            currentRouteParameters = options[path],
            templatesPath,

            /**
             * All variation for a specific page.
             * @namespace #currentVariation
             * @memberOf NA
             */
            currentVariation = {},
            templateRenderName,
            currentPath = path;

        /** Inject template shortcut to template. */
        if (typeof currentRouteParameters === 'string') {
            /** templatesPath is just use like temp var in this if statement. */
            templatesPath = currentRouteParameters;
            currentRouteParameters = {}

            /**
             * This is the file name of template used for render of page behind the route.
             * @public
             * @alias template
             * @type {string}
             * @memberOf NA#currentRouteParameters
             */
            currentRouteParameters.template = templatesPath;
        }

        /** Generate the server path to the template file. */
        templatesPath = NA.websitePhysicalPath + NA.webconfig.templatesRelativePath + currentRouteParameters.template;

        /** Case of `currentRouteParameters.url` replace `path` because `path` is used like a key. */
        if (currentRouteParameters.url) {
            currentPath = currentRouteParameters.url;
        }

        /** Loading the controller file if `currentRouteParameters.controller` exist. */
        NA.loadController(

            /**
             * This is the file name of specific controller used for back-end part of this page.
             * @public
             * @alias controller
             * @type {string}
             * @memberOf NA#currentRouteParameters
             */
            currentRouteParameters.controller, 
        function () {

            /**
             * Next step after PreRender part.
             * @private
             * @function NA.render~preRenderSpecific
             * @param {Object} currentVariation - Variations for the current page.
             */
            function preRenderSpecific(currentVariation) {                
                if (typeof NA.websiteController[currentRouteParameters.controller] !== 'undefined' &&
                    typeof NA.websiteController[currentRouteParameters.controller].preRender !== 'undefined') {
                        /** Use the `NA.websiteController[<controller>].preRender(...)` function if set... */
                        NA.websiteController[currentRouteParameters.controller].preRender({ variation: currentVariation, NA: NA, request: request, response: response }, function (currentVariation) {
                            openTemplate(currentVariation);
                        });
                } else {
                    /** ...else, just continue. */
                    openTemplate(currentVariation);      
                }
            }

            /**
             * Next step after Render part.
             * @private
             * @function NA.render~renderSpecific
             * @param {string} data - DOM Generated.
             * @param {Object} currentVariation - Variations for the current page.
             */
            function renderSpecific(data, currentVariation) {                
                if (typeof NA.websiteController[currentRouteParameters.controller] !== 'undefined' &&
                    typeof NA.websiteController[currentRouteParameters.controller].render !== 'undefined') {
                        /** Use the `NA.websiteController[<controller>].preRender(...)` function if set... */
                        NA.websiteController[currentRouteParameters.controller].render({ data: data, NA: NA, request: request, response: response }, function (data) {
                            renderTemplate(data, currentVariation);
                        });
                } else {
                    /** ...else, just continue. */
                    renderTemplate(data, currentVariation);      
                }
            }

            /**
             * Opening template file.
             * @private
             * @function NA.render~openTemplate
             * @param {Object} currentVariation - Variations for the current page.
             */
            function openTemplate(currentVariation) {  

                /** Open the template file */              
                NA.openTemplate(currentRouteParameters, templatesPath, function (data) {

                    /** Set the file currently in use. */
                    currentVariation.filename = currentVariation.pathname + currentRouteParameters.template;

                    try {
                        /** Transform ejs data and inject incduded file. */
                       data = ejs.render(data, currentVariation);
                    } catch (exception) {
                        /** Make error more readable. */
                        data = exception.toString()
                            .replace(/[\n]/g, "<br>")
                            .replace(/    /g, "<span style='display:inline-block;width:32px'></span>")
                            .replace(/ >> /g, "<span style='display:inline-block;width:32px'>&gt;&gt;</span>");
                    }

                    /** Use the `NA.websiteController[<commonController>].render(...)` function if set... */
                    if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                        typeof NA.websiteController[NA.webconfig.commonController].render !== 'undefined') {

                            /**
                             * Define this function for intercept DOM and modify it with jQuery for example. Both `common` and `specific` controller.
                             * @function render
                             * @memberOf NA.websiteController[]
                             * @param {Object} params            - Collection of property.
                             * @param {string} params.data       - DOM of current page.
                             * @param {Object} params.NA         - NodeAtlas object.
                             * @param {Object} params.request    - Initial request.
                             * @param {Object} params.response   - Initial response.
                             * @param {render~callback} callback - Next steps after configuration is done.
                             */
                            NA.websiteController[NA.webconfig.commonController].render({ data: data, NA: NA, request: request, response: response },

                            /**
                             * Next steps after render is done.
                             * @callback render~callback
                             * @param {string} data - DOM with modifications.
                             */
                            function (data) {
                                renderSpecific(data, currentVariation);
                            });
                    /** ...else, just continue. */
                    } else {
                        renderSpecific(data, currentVariation);
                    }
               });
            }

            /**
             * Write file or/and send response.
             * @private
             * @function NA.render~renderTemplate
             * @param {string} data - HTML DOM ready for sending.
             * @param {Object} currentVariation - Variations for the current page.
             */
            function renderTemplate(data, currentVariation) {
                /** Create the file for asset mode */
                if (
                    typeof response === 'undefined' || 

                    /**
                     * Allow NodeAtlas to generate real file into `NA.webconfig.generatesRelativePath` directory if set to true.
                     * @public
                     * @alias autoGenerate
                     * @type {boolean}
                     * @memberOf NA.webconfig
                     * @default false.
                     */
                    NA.webconfig.autoGenerate
                ) {

                    /**
                     * Output name of file generate if `NA.webconfig.autoGenerate` is set to true.
                     * @public
                     * @alias generate
                     * @type {string}
                     * @memberOf NA#currentRouteParameters
                     */
                    templateRenderName = currentRouteParameters.generate || currentPath;

                    NA.saveTemplateRender(data, templateRenderName);
                }

                /** Run page into browser. */
                if (typeof response !== 'undefined') {
                    NA.response(request, response, data, currentRouteParameters, currentVariation);
                }
            }
            
            /**
             * Expose the current language code for the page if setted else expose the global if setted.
             * @public
             * @alias languageCode
             * @type {string}
             * @memberOf NA#currentVariation
             * @default No language code if not setted.
             */
            currentVariation.languageCode = 

                /**
                 * Represent the language code for this page.
                 * @public
                 * @alias languageCode
                 * @type {string}
                 * @memberOf NA#currentRouteParameters
                 * @default No language code if not setted.
                 */
                currentRouteParameters.languageCode || 

                /**
                 * Represent the global and main language code for website.
                 * @public
                 * @alias languageCode
                 * @type {string}
                 * @memberOf NA.webconfig
                 * @default No language code if not setted.
                 */
                NA.webconfig.languageCode;

            /**
             * Idem as `NA.variation.urlBasePath` without "/" at the end.
             * @public
             * @alias urlBasePathSlice
             * @type {string}
             * @memberOf NA#currentVariation
             * @example http://localhost:7777/subpath
             * https://www.example.here
             */
            currentVariation.urlBasePathSlice = NA.webconfig.urlWithoutFileName.replace(/\/$/g, "") + ((NA.webconfig.urlRelativeSubPath !== '') ? '/' + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "").replace(/\/$/g, "") : '');

            /**
             * Expose the current URL of page with `NA.webconfig.urlWithoutFileName` and `NA.webconfig.urlRelativeSubPath`.
             * @public
             * @alias urlBasePath
             * @type {string}
             * @memberOf NA#currentVariation
             * @example http://localhost:7777/subpath/
             * https://www.example.here/
             */
            currentVariation.urlBasePath = currentVariation.urlBasePathSlice + '/';

            /**
             * Expose the current URL of page with `NA.webconfig.urlBasePath` and the current page route.
             * @public
             * @alias urlPath
             * @type {string}
             * @memberOf NA#currentVariation
             * @example http://localhost:7777/subpath/example.html  (if current route is '/example.html')
             * https://www.example.here/example/this/ (if current route is '/example/this/')
             */
            currentVariation.urlPath = currentVariation.urlBasePath.replace(/\/$/g, "") + currentPath;
            if (request) { currentVariation.urlPath = request.protocol + "://" + request.get('host') + request.url; }

            /**
             * Same as `NA.variations.pathname`.
             * @public
             * @alias pathname
             * @type {string}
             * @memberOf NA#currentVariation
             */
            currentVariation.pathname = NA.variations.pathname;

            /**
             * Same as `NA.variations.filename`.
             * @public
             * @alias filename
             * @type {string}
             * @memberOf NA#currentVariation
             */
            currentVariation.filename = NA.variations.filename;

            if (request) { 

                /**
                 * Expose list of selector used into page.
                 * @public
                 * @alias params
                 * @type {string}
                 * @memberOf NA#currentVariation
                 * @example If current route is '/example/:selector/'
                 * At http://localhost/example/test/ the value of `NA.variations#params` is
                 * { "selector": "test" }
                 */
                currentVariation.params = request.params; 
            }

            /**
             * Name of file for `common` variation.
             * @public
             * @alias commonVariation
             * @type {string}
             * @memberOf NA.webconfig
             */
            currentVariation.common = NA.openVariation(NA.webconfig.commonVariation, currentVariation.languageCode);
            if (currentVariation.languageCode) {

                /**
                 * Expose all JSON data from `commonVariation` file.
                 * @public
                 * @alias common
                 * @type {Object}
                 * @memberOf NA#currentVariation
                 */
                currentVariation.common = extend(true, NA.openVariation(NA.webconfig.commonVariation), currentVariation.common);
            }

            /**
             * Name of file for `specific` variation.
             * @public
             * @alias variation
             * @type {string}
             * @memberOf NA#currentRouteParameters
             */
            currentVariation.specific = NA.openVariation(currentRouteParameters.variation, currentVariation.languageCode);
            if (currentVariation.languageCode) {

                /**
                 * Expose all JSON data from `routes[<currentRoute>].variation` file.
                 * @public
                 * @alias specific
                 * @type {Object}
                 * @memberOf NA#currentVariation
                 */
                currentVariation.specific = extend(true, NA.openVariation(currentRouteParameters.variation), currentVariation.specific);
            }

            /**
             * Expose all data from `routes[<currentRoute>]` object from webconfig.
             * @public
             * @alias currentRouteParameters
             * @type {Object}
             * @memberOf NA#currentVariation
             */
            currentVariation.currentRouteParameters = currentRouteParameters;

            /**
             * Expose route of current page from current webconfig `routes`.
             * @public
             * @alias currentRoute
             * @type {string}
             * @memberOf NA#currentVariation
             * @example /categories/:category/
             */
            currentVariation.currentRoute = currentPath;

            /**
             * Expose all webconfig values.
             * @public
             * @alias webconfig
             * @type {Object}
             * @memberOf NA#currentVariation
             */
            currentVariation.webconfig = NA.webconfig;

            /** Use the `NA.websiteController[<commonController>].preRender(...)` function if set... */
            if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                typeof NA.websiteController[NA.webconfig.commonController].preRender !== 'undefined') {

                    /**
                     * Define this function for intercept Variation object and modify it. Both `common` and `specific` controller.
                     * @function preRender
                     * @memberOf NA.websiteController[]
                     * @param {Object} params               - Collection of property.
                     * @param {string} params.variation     - Variation object of current page.
                     * @param {Object} params.NA            - NodeAtlas object.
                     * @param {Object} params.request       - Initial request.
                     * @param {Object} params.response      - Initial response.
                     * @param {preRender~callback} callback - Next steps after configuration is done.
                     */
                    NA.websiteController[NA.webconfig.commonController].preRender({ variation: currentVariation, NA: NA, request: request, response: response }, 

                    /**
                     * Next steps after preRender is done.
                     * @callback preRender~callback
                     * @param {Object} currentVariation - Variation object with new values.
                     */
                    function (currentVariation) {
                        preRenderSpecific(currentVariation);
                    });
            /** ...else, just continue. */
            } else {
                preRenderSpecific(currentVariation);
            }
        });
    };

})(NA);





/*------------------------------------*\
    $%BACK-END PART
\*------------------------------------*/

/**
 * Closure group for define Back-end Part Functions.
 * @function
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Load the modules adding by the website.
     * @public
     * @function loadListOfExternalModules
     * @memberOf NA.
     * @param {loadListOfExternalModules~callback} callback - Next steps after loading of additional modules.
     */
    publics.loadListOfExternalModules = function (callback) {
        NA.loadController(NA.webconfig.commonController, function () {
            publics.nodeAtlasModulesPath = NA.websitePhysicalPath + 'node_modules/';
            publics.websiteModulesPath = NA.serverPhysicalPath + 'node_modules/';

            /** Use the `NA.websiteController[<commonController>].loadModules(...)` function if set... */
            if (typeof NA.websiteController[NA.webconfig.commonController].loadModules !== 'undefined') {

                /**
                 * Define this function for adding npm module into `NA.modules` of application. Only for `common` controller file.
                 * @function loadModules
                 * @memberOf NA.websiteController[]
                 * @param {Object} NA - NodeAtlas object for used `NA.session` object.
                 * @return {Object} Return NodeAtlas object with modification.
                 */
                NA = NA.websiteController[NA.webconfig.commonController].loadModules(NA) || NA;
            }

            /**
             * Next step !
             * @callback loadListOfExternalModules~callback
             */
            callback();
        });
    };

    /**
     * Load a controller file.
     * @public
     * @function loadController
     * @memberOf NA.
     * @param {string} controller - The name of controller file we want to load.
     * @param {loadController~callback} callback - Next steps after controller loading.
     */
    publics.loadController = function (controller, callback) {
        var commonControllerPath = NA.websitePhysicalPath + NA.webconfig.controllersRelativePath + controller,
            dataError = {};

        /** If a controller is required. Loading of this controller... */
        if (typeof controller !== 'undefined') {
            /** Open controller and load it */
            try {
                NA.websiteController[controller] = require(commonControllerPath);

                /**
                 * Next step !
                 * @callback loadController~callback
                 */
                callback();
            /** In case of error. */
            } catch (exception) {
                dataError.moduleError = exception.toString();
                if (exception.code === 'MODULE_NOT_FOUND') {
                    console.log(NA.appLabels.moduleNotFound.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                } else {
                    throw exception;
                }
            }
        } else {
            /** ...else, continue without loading. */
            callback();
        }

    };

})(NA);





/*------------------------------------*\
    $%ASSETS GENERATION
\*------------------------------------*/

/**
 * Closure group for define Assets Generation Functions.
 * @function
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {

    /**
     * Open all pages for generate render into `generatesRelativePath`.
     * @public
     * @function urlGeneratingPages
     * @memberOf NA
     */
    publics.urlGeneratingPages = function () {
        var commander = NA.modules.commander;

        /** `generate` manually setted value with `NA.config`. */
        if (commander.generate) { NA.configuration.generate = commander.generate; }

        /** Generation only if is configured to « true » in `generate` */
        if (NA.configuration.generate) {
            for (var currentUrl in NA.webconfig.routes) {
                NA.render(currentUrl, NA.webconfig.routes);
            }
        }     
    };

    /**
     * Create a « Overview » page to « / » url with all of page accessible via links.
     * @public
     * @function emulatedIndexPage
     * @memberOf NA
     */
    publics.emulatedIndexPage = function () {
        var commander = NA.modules.commander;

        /** `generate` manually setted value with `NA.config`. */
        if (commander.generate) { NA.configuration.generate = commander.generate; }

        /** Only if server was started... */
        if (!NA.configuration.generate) {
            /** ...and `indexPage` is set to « true ». */
            if (

                /**
                 * Allow NodeAtlas to create a root page with link to all routes for development if set to true.
                 * @public
                 * @alias indexPage
                 * @type {boolean}
                 * @memberOf NA.webconfig
                 * @default false.
                 */
                NA.webconfig.indexPage
            ) {

                /** Create a new path to « / ». Erase the route to « / » defined into `routes`. */
                NA.httpServer.get(NA.webconfig.urlRelativeSubPath + '/', function (request, response) {
                    var data = {};

                        data.render = '';

                    /** List all routes... */
                    for (var page in NA.webconfig.routes) {

                        data.page = page;
                        if (NA.webconfig.routes[page].url) {
                            data.page = NA.webconfig.routes[page].url;
                        }

                        if (NA.webconfig.routes.hasOwnProperty(page)) {
                            data.render += NA.appLabels.emulatedIndexPage.line.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; });
                        }
                    }

                    /** ...and provide a page. */
                    response.writeHead(200, NA.appLabels.emulatedIndexPage.charsetAndType);
                    response.write(NA.appLabels.emulatedIndexPage.data.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                    response.end();
                });
            }
        }
    };

    /**
     * Generate a template into an HTML file in folder `generatesRelativePath`.
     * @public
     * @function saveTemplateRender
     * @memberOf NA
     */
    publics.saveTemplateRender = function (data, templateRenderName) {
        var fs = NA.modules.fs,
            cheerio = NA.modules.cheerio,
            mkpath = NA.modules.mkpath,
            path = NA.modules.path,
            pathToSaveFileComplete = NA.websitePhysicalPath + NA.webconfig.generatesRelativePath + templateRenderName,
            pathToSaveFile = path.dirname(pathToSaveFileComplete),
            $ = cheerio.load(data),
            deeper,
            newBase = "";

        /** 
         * If a <base> markup exist, calculation of
         * relative placement of page under root folder...
         */
        deeper = templateRenderName.split('/').length - 1;
        if (templateRenderName[0] === '/') {
            deeper = templateRenderName.split('/').length - 2;
        }

        /** ...and creation of path for all resources */
        for (var i = 0; i < deeper; i++) {
            newBase += '../';
        }

        /** ...and set new base */
        $("base").attr("href", newBase);

        /** Create file render. */
        mkpath(pathToSaveFile, function (error) {
            var dataError = {},
                innerHTML = $.html();

            /** If source is not a HTML format, keep initial data format. */
            if (data.trim().match(/<\/html>$/g) === null) { innerHTML = data; }

            dataError.templateRenderName = path.normalize(templateRenderName);
            dataError.pathToSaveFile = path.normalize(pathToSaveFile);

            if (error) throw error;

            /** Write file */
            fs.writeFile(pathToSaveFileComplete, innerHTML, function (error) {
                if (error) {
                    if (error.code === 'EISDIR') {
                        console.log(NA.appLabels.templateNotGenerate.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                    } else {
                        throw error;
                    }
                }

                console.log(NA.appLabels.templateGenerate.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
            });

        });
    };

})(NA);





/*------------------------------------*\
    $%INIT
\*------------------------------------*/

/**
 * Closure group for define Init Functions.
 * @function
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Object contain configuration.
     * @public
     * @alias configuration
     * @type {Object}
     * @memberOf NA
     */
    publics.configuration = {};


    /**
     * Allow you to set `NA.configuration` with chaining.
     * @public
     * @function config
     * @memberOf NA
     * * @example nodeAtlas
     *    .config({
     *        webconfig: "webconfig.alternatif.json",
     *        httpPort: 7778,
     *        generate: true
     *    }).init();
     */
    publics.config = function (config) {
    	var config = config || {};

		NA.configuration = config;

    	return NA;
    };

    /**
     * Main controller for Start NodeAtlas.
     * @public
     * @function init
     * @memberOf NA
     */
    publics.init = function () {
		NA.loadListOfNativeModules();
		NA.initGlobalVar();
		NA.moduleRequired(function () {
		    NA.lineCommandConfiguration();
		    NA.initGlobalVarRequiredNpmModules();
		    NA.initWebconfig(function () {
		        NA.loadListOfExternalModules(function () {
                    NA.cssMinification();
                    NA.jsObfuscation();       
		        	NA.startingHttpServer();
		        	NA.templateEngineConfiguration(); 
		        	NA.routesPages();
		        	NA.emulatedIndexPage();
		            NA.httpServerPublicFiles();
		            NA.pageNotFound();
		            NA.urlGeneratingPages();
		        });
		    });
		});
    };

})(NA);





/*------------------------------------*\
    $%RUN
\*------------------------------------*/

/** Run script with command tools. */
if (require.main === module) {
	NA.init();
}

/** Run script with require as a npm module. */
module.exports = NA;