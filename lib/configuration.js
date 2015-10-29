/*------------------------------------*\
    $%CONFIGURATION
\*------------------------------------*/
/* jslint node: true */

/**
 * Set line command options usable when NodeAtlas is executed as CLI.
 * @private
 * @function lineCommandConfiguration
 * @memberOf NA#
 */
exports.lineCommandConfiguration = function () {
    var NA = this,
        commander = NA.modules.commander;

    commander

        /* Version of NodeAtlas currently in use with `--version` option. */
        .version('1.0.1')

        /* Automaticly run default browser with `--browse` options. If a param is setted, the param is added to the and of url. */
        .option(NA.appLabels.commander.browse.command, NA.appLabels.commander.browse.description, String)

        /* Target the directory in which website and NodeAtlas will be running. */
        .option(NA.appLabels.commander.directory.command, NA.appLabels.commander.directory.description, String)

        /* Change name of JSON file used as the webconfig file. */
        .option(NA.appLabels.commander.webconfig.command, NA.appLabels.commander.webconfig.description, String)

        /* Change the port that runs the NodeAtlas website. */
        .option(NA.appLabels.commander.httpPort.command, NA.appLabels.commander.httpPort.description, String)

        /* Minify all files and re-create all HTML assets into generates folder. */
        .option(NA.appLabels.commander.generate.command, NA.appLabels.commander.generate.description)
        .parse(process.argv);

    /* `generate` manually setted value with `NA.config`. */
    if (commander.generate) {
        NA.configuration.generate = commander.generate;
    }

    /* `browse` manually setted value with `NA.config`. */
    if (commander.browse) {
        NA.configuration.browse = commander.browse;
    }
};

/**
 * Set main variables for application and language error messages.
 * @private
 * @function initGlobalVar
 * @memberOf NA#
 */
exports.initGlobalVar = function () {
    var NA = this;

    /**
     * Name of file which contains language error messages. The name of file is without extension.
     * @public
     * @alias appLanguage
     * @type {String}
     * @memberOf NA#
     * @default "default"
     */
    NA.appLanguage = 'default';

    /**
     * OS absolute path which contains NodeAtlas folders and files.
     * @public
     * @alias serverPhysicalPath
     * @type {string}
     * @memberOf NA#
     * @default « The path where `node-atlas.js` is. »
     */
    NA.serverPhysicalPath = process.argv[1].replace(/[\-a-zA-Z0-9_]+(\.js)?$/g, "");

    /**
     * All internationalize labels from `NA#appLanguage` file.
     * @public
     * @alias appLabels
     * @type {Object}
     * @memberOf NA#
     */
    NA.appLabels = require('../languages/' + NA.appLanguage + '.json');

    /**
     * Contain all functions of controllers both common and specific.
     * @namespace websiteController[]
     * @private
     * @alias websiteController
     * @type {Array.<Object>}
     * @memberOf NA#
     * @example // Functions for common controller if `commonController` value is "common.json".
     * NA.websiteController["common.json"].loadModules(...);
     * NA.websiteController["common.json"].setConfigurations(...);
     * NA.websiteController["common.json"].setSessions(...);
     * NA.websiteController["common.json"].changeVariation(...);
     * NA.websiteController["common.json"].changeDom(...);
     *
     * // Functions for specific controller if a route `controller` value is "index.json".
     * NA.websiteController["index.json"].changeVariation(...);
     * NA.websiteController["index.json"].changeDom(...);
     */
    NA.websiteController = [];
};

/**
 * Set main variables for webconfig.
 * @private
 * @function initGlobalVarRequiredNpmModules
 * @memberOf NA#
 */
exports.initGlobalVarRequiredNpmModules = function () {
    var NA = this,
        commander = NA.modules.commander,
        path = NA.modules.path,
        regex = new RegExp(path.sep + path.sep + '?$', 'g');

    /* `websitePhysicalPath` manually setted value with `NA#config`. */
    if (commander.directory) {
        NA.configuration.directory = commander.directory;
    }

    if (typeof NA.configuration.directory !== 'string') {

        /**
         * OS absolute path that contains webconfig and website.
         * @public
         * @alias websitePhysicalPath
         * @type {String}
         * @memberOf NA#
         * @default « `--directory` value » || « Path from NodeAtlas is called ».
         */
        NA.websitePhysicalPath = process.cwd() + path.sep;
    } else {

        /* `NA#websitePhysicalPath` manually setted value with `--directory`. */
        NA.websitePhysicalPath = NA.configuration.directory.replace(regex, '') + path.sep;
    }

    /**
     * Name of the webconfig used for run the website.
     * @public
     * @alias webconfigName
     * @type {string}
     * @memberOf NA#
     * @default "webconfig.json".
     */
    NA.webconfigName = 'webconfig.json';

    /* `webconfigName` manually setted value with `--webconfig`. */
    if (commander.webconfig) {
        NA.configuration.webconfig = commander.webconfig;
    }

    /* `webconfigName` manually setted value with `NA#config`. */
    if (NA.configuration.webconfig) {
        NA.webconfigName = NA.configuration.webconfig;
    }
};

/**
 * Set configuration of Template Engine.
 * @private
 * @function templateEngineConfiguration
 * @memberOf NA#
 */
exports.templateEngineConfiguration = function () {
    var NA = this,
        ejs = NA.modules.ejs,
        path = NA.modules.path;

    /**
     * Container for all variables usable from variation files.
     * @namespace variations
     * @public
     * @alias variations
     * @type {Object}
     * @memberOf NA#
     */
    NA.variations = {};

    /**
     * OS absolute directory for template engine's file included with `include` statement.
     * @public
     * @alias pathname
     * @type {string}
     * @memberOf NA#variations
     * @default « The `NA#websitePhysicalPath` value with webconfig's `componentsRelativePath` next ».
     */
    NA.variations.pathname = path.join(NA.websitePhysicalPath, NA.webconfig.componentsRelativePath);

    /**
     * Same as `NA#variations.pathname` with arbitrary value setted next.
     * This value will be represent current page generated for all page generated with template engine.
     * @public
     * @alias filename
     * @type {string}
     * @memberOf NA#variations
     * @default « Arbitrarily setted to "all-component.here". »
     */
    NA.variations.filename = path.join(NA.variations.pathname, "all-component.here");

    /**
     * Set open and close bracket used by Teplate Engine.
     * @public
     * @alias templateEngineDelimiter
     * @type {string}
     * @memberOf NA#webconfig
     * @default '%'.
     */
    ejs.delimiter = NA.webconfig.templateEngineDelimiter || ejs.delimiter;
};

/**
 * Decide to run a « Simple Web Server » or a « With Weconfig Server » depending to webconfig opening success.
 * If webconfig is correctly openned, the `NA#improveWebconfigBase` and `callback` function will be run, else, just `NA#simpleWebServer` will be run.
 * @private
 * @function initWebconfig
 * @memberOf NA#
 * @param {initWebconfig~callback} callback Calling next processus if webconfig opening is a success.
 */
exports.initWebconfig = function (callback) {
    var NA = this;

    /* Webconfig based website... */
    NA.ifFileExist(NA.websitePhysicalPath, NA.webconfigName, function (err) {
        if (err && err.code === 'ENOENT') {

            /* ... or static website. */
            return NA.simpleWebServer();
        }

        NA.improveWebconfigBase();

        /**
         * Next step !
         * @callback initWebconfig~callback
         */
        callback();
    });
};

/**
 * Set default webconfig's value from possibly external files.
 * @private
 * @function setExternalFilesAsWebconfigBase
 * @memberOf NA#
 */
exports.setExternalFilesAsWebconfigBase = function () {
    var NA = this;

    if (NA.webconfig.enableLess === true) {

        /**
         * Enable Less preprocessor.
         * @namespace enableLess
         * @public
         * @alias enableLess
         * @type {boolean|Object}
         * @memberOf NA#webconfig
         * @default false
         * @property {boolean} compress  - Minify the Less file.
         * @property {boolean} sourceMap - Create a sourceMap file for development.
         */
        NA.webconfig.enableLess = {
            compress: false,
            sourceMap: true
        };
    } else if (typeof NA.webconfig.enableLess === 'object' && typeof NA.webconfig.enableLess.less === 'string') {

        /**
         * Contain Less files required for compilation in JSON format.
         * @public
         * @alias less
         * @type {Object}
         * @memberOf NA#webconfig.enableLess
         * @property {Array.<String>} less The file for compilation in an Array.
         * @example {
         *     "less": [
         *         "stylesheets/common.less",
         *         "stylesheets/component-1.less",
         *         "stylesheets/component-2.less",
         *         "stylesheets/component-3.less"
         *     ]
         * }
         */
        NA.webconfig.enableLess.less = NA.openConfiguration(NA.webconfig.enableLess.less);
    }

    if (typeof NA.webconfig.bundles === 'string') {

        /**
         * Contain bundle configuration for CSS and JS minification in JSON format.
         * @public
         * @alias bundles
         * @type {Object}
         * @memberOf NA#webconfig
         * @property {Object} bundles             The Bundles object.
         * @property {Object} bundles.javascript  Each object name represent an output javascript file and each property of object represent an array of inputs files.
         * @property {Object} bundles.stylesheets Each object name represent an output stylesheets file and each property of object represent an array of inputs files.
         * @example {
         *     "javascript": {
         *         "javascript/framework.min.js": [
         *             "javascript/modernizr.js",
         *             "javascript/jquery.js",
         *             "javascript/prettify.js",
         *             "javascript/prettify/run_prettify.js"
         *         ],
         *         "javascript/common.min.js": [
         *             "javascript/components/extended-format-date.js",
         *             "javascript/common.js"
         *         ]
         *     },
         *     "stylesheets": {
         *         "stylesheets/common.min.css": [
         *             "stylesheets/common.css",
         *             "stylesheets/common-min780.css",
         *             "stylesheets/common-min1160.css"
         *         ]
         *     }
         * }
         */
        NA.webconfig.bundles = NA.openConfiguration(NA.webconfig.bundles);
    }

    if (typeof NA.webconfig.optimizations === 'string') {

        /**
         * Contain optimizations configuration for Images optimizations.
         * @public
         * @alias optimizations
         * @type {Object}
         * @memberOf NA#webconfig
         * @property {Object} optimizations        The Optimizations object.
         * @property {Object} optimizations.images Each object name represent an input image file and object value represent an output folder.
         * @example {
         *     "images": {
         *         "media/images/example.png": "media/images/optimized/",
         *         "media/images/example.jpg": "media/images/optimized/",
         *         "media/images/example.gif": "media/images/optimized/",
         *         "media/images/example.svg": "media/images/optimized/"
         *     }
         * }
         */
        NA.webconfig.optimizations = NA.openConfiguration(NA.webconfig.optimizations);
    }
};

/**
 * Set default webconfig's value from possibly external routes.
 * @private
 * @function setExternalRoutesAsWebconfigBase
 * @memberOf NA#
 */
exports.setExternalRoutesAsWebconfigBase = function () {
    var NA = this;

    /* Adding path to original url. */
    if (typeof NA.webconfig.urlRelativeSubPath !== 'undefined') {

        /**
         * Adding subfolder to original url.
         * @public
         * @alias urlRelativeSubPath
         * @type {string}
         * @memberOf NA#webconfig
         * @default undefined.
         * @example
         * // If `NA#webconfig.urlRelativeSubPath` is setted to "example"
         * // Website will run by default to « http://localhost/example/ »
         */
        NA.webconfig.urlRelativeSubPath = '/' + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "").replace(/\/$/g, "");
    } else {
        NA.webconfig.urlRelativeSubPath = '';
    }

    if (typeof NA.webconfig.routes === 'string') {

        /**
         * Contain all routes on JSON format.
         * @public
         * @alias routes
         * @type {Object}
         * @memberOf NA#webconfig
         * @default The webconfig's object property `routes`.
         */
        NA.webconfig.routes = NA.openConfiguration(NA.webconfig.routes);
    }
};


/**
 * Set default webconfig's value possibly undefined from webconfig.
 * @private
 * @function setDirectoriesAsWebconfigBase
 * @memberOf NA#
 */
exports.setDirectoriesAsWebconfigBase = function () {
    var NA = this;

    if (typeof NA.webconfig.variationsRelativePath === 'undefined') {

        /**
         * Language and variable variation files folder depending of languages.
         * @public
         * @alias variationsRelativePath
         * @type {string}
         * @memberOf NA#webconfig
         * @default "variations".
         */
        NA.webconfig.variationsRelativePath = 'variations';
    }

    if (typeof NA.webconfig.controllersRelativePath === 'undefined') {

        /**
         * Controller folder for Back-end part.
         * @public
         * @alias controllersRelativePath
         * @type {string}
         * @memberOf NA#webconfig
         * @default "controllers".
         */
        NA.webconfig.controllersRelativePath = 'controllers';
    }

    /* Path to template. */
    if (typeof NA.webconfig.templatesRelativePath === 'undefined') {

        /**
         * Template folder for Template Engine files.
         * @public
         * @alias templatesRelativePath
         * @type {string}
         * @memberOf NA#webconfig
         * @default "templates".
         */
        NA.webconfig.templatesRelativePath = 'templates';
    }

    if (typeof NA.webconfig.componentsRelativePath === 'undefined') {

        /**
         * Default folder for template engine included files or controller components.
         * @public
         * @alias componentsRelativePath
         * @type {string}
         * @memberOf NA#webconfig
         * @default "components".
         */
        NA.webconfig.componentsRelativePath = 'components';
    }

    if (typeof NA.webconfig.assetsRelativePath === 'undefined') {

        /**
         * Folder for public file like images, CSS, JS...
         * @public
         * @alias assetsRelativePath
         * @type {string}
         * @memberOf NA#webconfig
         * @default "assets".
         */
        NA.webconfig.assetsRelativePath = 'assets';
    }

    if (typeof NA.webconfig.generatesRelativePath === 'undefined') {

        /**
         * HTML assets generation Folder.
         * @public
         * @alias generatesRelativePath
         * @type {string}
         * @memberOf NA#webconfig
         * @default "generates".
         */
        NA.webconfig.generatesRelativePath = 'generates';
    }
};

/**
 * Set default Http Port value possibly undefined from webconfig.
 * @private
 * @function setHttpValuesAsWebconfigBase
 * @memberOf NA#
 */
exports.setHttpValuesAsWebconfigBase = function () {
    var NA = this,
        commander = NA.modules.commander;

    /**
     * Server listening port.
     * @public
     * @alias httpPort
     * @type {string}
     * @memberOf NA#webconfig
     * @default « The webconfig's property `httpPort` » || « The `process.env.PORT` if setted » || 80
     */
    NA.webconfig.httpPort = NA.webconfig.httpPort || process.env.PORT || ((NA.webconfig.httpSecure) ? 443 : 80);

    /* `httpPort` manually setted value with `--httpPort`. */
    if (commander.httpPort) {
        NA.configuration.httpPort = commander.httpPort;
    }

    /* `httpPort` manually setted value with `NA.config`. */
    if (NA.configuration.httpPort) {
        NA.webconfig.httpPort = NA.configuration.httpPort;
    }

    /**
     * Url access port (for reverse proxy).
     * @public
     * @alias urlPort
     * @type {string}
     * @memberOf NA#webconfig
     * @default undefined
     */
    NA.webconfig.urlPort = NA.webconfig.urlPort || NA.webconfig.httpPort;

    /**
     * Server listening hostname by http.
     * @public
     * @alias httpHostname
     * @type {string}
     * @memberOf NA#webconfig
     * @default « The webconfig's property `httpHostname` » || « The `process.env.IP_ADDRESS` if setted » || "localhost";
     */
    NA.webconfig.httpHostname = NA.webconfig.httpHostname || process.env.IP_ADDRESS || 'localhost';

    /**
     * Url access hostname by http (for reverse proxy).
     * @public
     * @alias urlHostname
     * @type {string}
     * @memberOf NA#webconfig
     * @default undefined.
     */
    NA.webconfig.urlHostname = NA.webconfig.urlHostname || NA.webconfig.httpHostname;
};

/**
 * Set all default webconfig's value into `NA#webconfig`.
 * @private
 * @function improveWebconfigBase
 * @memberOf NA#
 */
exports.improveWebconfigBase = function () {
    var NA = this;

    /**
     * Contain Webconfig file on JSON format.
     * @namespace webconfig
     * @public
     * @alias webconfig
     * @type {Object}
     * @memberOf NA#
     */
    NA.webconfig = NA.openConfiguration(NA.webconfigName);

    /* Set external routes as a part of default webconfig. */
    NA.setExternalRoutesAsWebconfigBase();

    /* Set external files as a part of default webconfig. */
    NA.setExternalFilesAsWebconfigBase();

    /* Set value possibly undefined from default webconfig. */
    NA.setDirectoriesAsWebconfigBase();

    /* Set the httpPort, httpHost, urlPort and urlHost for default webconfig. */
    NA.setHttpValuesAsWebconfigBase();

    /**
     * Define the path to the Private Key for HTTPs.
     * @public
     * @alias httpSecureRelativeKeyPath
     * @type {string}
     * @memberOf NA#webconfig
     */
    NA.webconfig.httpSecureRelativeKeyPath = NA.webconfig.httpSecureRelativeKeyPath || (typeof NA.webconfig.httpSecure === 'string') ? NA.webconfig.httpSecure + '.key' : undefined;

    /**
     * Define the path to the Certificate for HTTPs.
     * @public
     * @alias httpSecureRelativeCertificatePath
     * @type {string}
     * @memberOf NA#webconfig
     */
    NA.webconfig.httpSecureRelativeCertificatePath = NA.webconfig.httpSecureRelativeCertificatePath || (typeof NA.webconfig.httpSecure === 'string') ? NA.webconfig.httpSecure + '.crt' : undefined;

    /**
     * Website http(s) absolute url based from `NA#webconfig.httpSecure`, `NA#webconfig.urlHostname` and `NA#webconfig.urlPort`.
     * This value does not contain `NA#webconfig.urlRelativeSubPath`.
     * @public
     * @alias urlWithoutFileName
     * @type {string}
     * @memberOf NA#webconfig
     */
    NA.webconfig.urlWithoutFileName = 'http' + ((NA.webconfig.httpSecure) ? 's' : '') + '://' + NA.webconfig.urlHostname + ((NA.webconfig.urlPort !== ((NA.webconfig.httpSecure) ? 443 : 80)) ? ':' + NA.webconfig.urlPort : '') + '/';
};