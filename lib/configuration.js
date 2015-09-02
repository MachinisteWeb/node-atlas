/*------------------------------------*\
    $%CONFIGURATION
\*------------------------------------*/

exports.lineCommandConfiguration = function (NA) {

    /**
     * Set line command options usable when NodeAtlas is executed in a command line tool.
     * @public
     * @function lineCommandConfiguration
     * @memberOf node-atlas~NA
     */
    NA.lineCommandConfiguration = function () {
        var commander = NA.modules.commander;

        commander

            /* Version of NodeAtlas currently in use with `--version` option. */
            .version('0.51.3')

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
    };

    return NA;
};

exports.initGlobalVar = function (NA) {

    /**
     * Set main variables for application and language error messages.
     * @public
     * @function initGlobalVar
     * @memberOf node-atlas~NA
     */
    NA.initGlobalVar = function () {
        try {

            /**
             * Name of file contains language error messages. Name of file is without extension.
             * @public
             * @alias appLanguage
             * @type {string}
             * @memberOf node-atlas~NA
             * @default "default"
             */
            NA.appLanguage = 'default';

            /**
             * OS absolute path which contains NodeAtlas folder.
             * @public
             * @alias serverPhysicalPath
             * @type {string}
             * @memberOf node-atlas~NA
             * @default Folder where NodeAtlas is running.
             */
            NA.serverPhysicalPath = process.argv[1].replace(/[\-a-zA-Z0-9_]+(\.js)?$/g, "");

            /**
             * Contain all Labels finded into `NA.appLanguage` file.
             * @public
             * @alias appLabels
             * @type {string}
             * @memberOf node-atlas~NA
             */
            NA.appLabels = require('../languages/' + NA.appLanguage + '.json');

            /**
             * Contain all functions of controllers both common and specific.
             * @namespace websiteController[]
             * @public
             * @alias websiteController
             * @type {Array.<Object>}
             * @memberOf node-atlas~NA
             * @example // Functions for common controller if `commonController` value is "common.json".
             * NA.websiteController["common.json"].setConfigurations(...);
             * NA.websiteController["common.json"].loadModules(...);
             * NA.websiteController["common.json"].setSessions(...);
             * NA.websiteController["common.json"].changeVariation(...);
             * NA.websiteController["common.json"].changeDom(...);
             *
             * // Functions for specific controller if a route `controller` value is "index.json".
             * NA.websiteController["index.json"].changeVariation(...);
             * NA.websiteController["index.json"].changeDom(...);
             */
            NA.websiteController = [];
        } catch (exception) {
            NA.log(exception);
        }
    };

    return NA;
};

exports.initGlobalVarRequiredNpmModules = function (NA) {

    /**
     * Set main variables for webconfig.
     * @public
     * @function initGlobalVarRequiredNpmModules
     * @memberOf node-atlas~NA
     */
    NA.initGlobalVarRequiredNpmModules = function () {
        var commander = NA.modules.commander,
            path = NA.modules.path,
            regex = new RegExp(path.sep + path.sep + '?$', 'g');

        /* `websitePhysicalPath` Manually setted value with `NA.config`. */
        if (commander.directory) {
            NA.configuration.directory = commander.directory;
        }

        try {

            if (typeof NA.configuration.directory !== 'string') {

                /**
                 * OS absolute path which contains webconfig and website.
                 * @public
                 * @alias websitePhysicalPath
                 * @type {string}
                 * @memberOf node-atlas~NA
                 * @default Folder where NodeAtlas execute website or `--directory` value.
                 */
                NA.websitePhysicalPath = process.cwd() + path.sep;
            } else {
                /* `NA.websitePhysicalPath` manually setted value with `--directory`. */
                NA.websitePhysicalPath = NA.configuration.directory.replace(regex, '') + path.sep;
            }

            /**
             * Name of the webconfig used for run website.
             * @public
             * @alias webconfigName
             * @type {string}
             * @memberOf node-atlas~NA
             * @default "webconfig.json".
             */
            NA.webconfigName = 'webconfig.json';

            /* `webconfigName` manually setted value with `--webconfig`. */
            if (commander.webconfig) {
                NA.configuration.webconfig = commander.webconfig;
            }

            /* `webconfigName` manually setted value with `NA.config`. */
            if (NA.configuration.webconfig) {
                NA.webconfigName = NA.configuration.webconfig;
            }
        } catch (exception) {
            NA.log(exception);
        }
    };

    return NA;
};

exports.templateEngineConfiguration = function (NA) {

    /**
     * Set configuration of template engine (EJS module).
     * @public
     * @function templateEngineConfiguration
     * @memberOf node-atlas~NA
     */
    NA.templateEngineConfiguration = function () {
        var ejs = NA.modules.ejs,
            path = NA.modules.path;

        /**
         * Container for all variations usable into template engine.
         * @namespace variations
         * @public
         * @alias variations
         * @type {Object}
         * @memberOf node-atlas~NA
         */
        NA.variations = {};

        /**
         * OS absolute directory for template engine's file included with `include` statement.
         * @public
         * @alias pathname
         * @type {string}
         * @memberOf node-atlas~NA.variations
         * @default The `NA.websitePhysicalPath` value with webconfig `componentsRelativePath` after.
         */
        NA.variations.pathname = path.join(NA.websitePhysicalPath, NA.webconfig.componentsRelativePath);

        /**
         * Same as `NA.variations.pathname` with arbitrary value setted after. This value will be represent current page generated for all page generated with template engine.
         * @public
         * @alias filename
         * @type {string}
         * @memberOf node-atlas~NA.variations
         * @default Arbitrarily setted to "all-component.here".
         */
        NA.variations.filename = path.join(NA.variations.pathname, "all-component.here");

        /**
         * Set open and close bracket for use EJS.
         * @public
         * @alias templateEngineDelimiter
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         * @default '%'.
         */
        ejs.delimiter = NA.webconfig.templateEngineDelimiter || ejs.delimiter;
    };

    return NA;
};

exports.initWebconfig = function (NA) {

    /**
     * Decide to run a « Simple Web Server » or a « With Weconfig Server » depending to webconfig opening success.
     * If webconfig is correctly openned, the `NA.improveWebconfigBase` and `callback` function will be run, else, just `NA.simpleWebServer` will be run.
     * @public
     * @function initWebconfig
     * @memberOf node-atlas~NA
     * @param {initWebconfig~callback} callback - Calling next processus if webconfig opening is a success.
     */
    NA.initWebconfig = function (callback) {
        /* Webconfig based website... */
        NA.ifFileExist(NA.websitePhysicalPath, NA.webconfigName, function () {
            NA.improveWebconfigBase();

            /**
             * Next step !
             * @callback initWebconfig~callback
             */
            callback();
        /* ... or static website. */
        }, function () {
            NA.simpleWebServer();
        });
    };

    return NA;
};

exports.setExternalFilesAsWebconfigBase = function (NA) {

    /**
     * Set default webconfig's value from possibly external files.
     * @public
     * @function setExternalFilesAsWebconfigBase
     * @memberOf node-atlas~NA
     */
    NA.setExternalFilesAsWebconfigBase = function () {

        if (typeof NA.webconfig.enableLess === 'object' && typeof NA.webconfig.enableLess.less === 'string') {

            /**
             * Contain Less files needed compilation to JSON format.
             * @public
             * @alias less
             * @type {Object}
             * @memberOf node-atlas~NA.webconfig
             * @property {Array} less              - The file for compilation in an Array.
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
             * Contain bundle configuration for CSS and JS minification to JSON format.
             * @public
             * @alias bundles
             * @type {Object}
             * @memberOf node-atlas~NA.webconfig
             * @property {Object} bundles              - The Bundles object.
             * @property {Object} bundles.javascript   - Each object name represent an output javascript file and each property of object represent an input file.
             * @property {Object} bundles.stylesheets  - Each object name represent an output stylesheets file and each property of object represent an input file.
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
             * @memberOf node-atlas~NA.webconfig
             * @property {Object} optimizations          - The Bundles object.
             * @property {Object} optimizations.images   - Each object name represent an output image file and object value represent an input file.
             * @example {
             *     "images": {
             *         "media/images/example.min.png": "media/images/example.png",
             *         "media/images/example.min.jpg": "media/images/example.jpg",
             *         "media/images/example.min.gif": "media/images/example.gif"
             *     }
             * }
             */
            NA.webconfig.optimizations = NA.openConfiguration(NA.webconfig.optimizations);
        }
    };

    return NA;
};

exports.setExternalRoutesAsWebconfigBase = function (NA) {

    /**
     * Set default webconfig's value from possibly external routes.
     * @public
     * @function setExternalRoutesAsWebconfigBase
     * @memberOf node-atlas~NA
     */
    NA.setExternalRoutesAsWebconfigBase = function () {

        /* Adding path to original url. */
        if (typeof NA.webconfig.urlRelativeSubPath !== 'undefined') {

            /**
             * Adding subfolder to original url.
             * @public
             * @alias urlRelativeSubPath
             * @type {string}
             * @memberOf node-atlas~NA.webconfig
             * @default Empty.
             * @example
             * // If `NA.webconfig.urlRelativeSubPath` is setted to "example"
             * // Website will run by default to « http://localhost/example/ »
             */
            NA.webconfig.urlRelativeSubPath = '/' + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "").replace(/\/$/g, "");
        } else {
            NA.webconfig.urlRelativeSubPath = '';
        }

        if (typeof NA.webconfig.routes === 'string') {

            /**
             * Contain all routes to JSON format.
             * @public
             * @alias routes
             * @type {Object}
             * @memberOf node-atlas~NA.webconfig
             * @default The webconfig's property `routes`.
             */
            NA.webconfig.routes = NA.openConfiguration(NA.webconfig.routes);
        }
    };

    return NA;
};


exports.setDirectoriesAsWebconfigBase = function (NA) {

    /**
     * Set default webconfig's value possibly undefined from webconfig.
     * @public
     * @function setDirectoriesAsWebconfigBase
     * @memberOf node-atlas~NA
     */
    NA.setDirectoriesAsWebconfigBase = function () {
        if (typeof NA.webconfig.variationsRelativePath === 'undefined') {

            /**
             * Language and variable variation folder depending of languages.
             * @public
             * @alias variationsRelativePath
             * @type {string}
             * @memberOf node-atlas~NA.webconfig
             * @default "variations".
             */
            NA.webconfig.variationsRelativePath = 'variations';
        }

        if (typeof NA.webconfig.controllersRelativePath === 'undefined') {

            /**
             * Controller folder for Back-end.
             * @public
             * @alias controllersRelativePath
             * @type {string}
             * @memberOf node-atlas~NA.webconfig
             * @default "controllers".
             */
            NA.webconfig.controllersRelativePath = 'controllers';
        }

        /* Path to template. */
        if (typeof NA.webconfig.templatesRelativePath === 'undefined') {

            /**
             * Template folder for template engine.
             * @public
             * @alias templatesRelativePath
             * @type {string}
             * @memberOf node-atlas~NA.webconfig
             * @default "templates".
             */
            NA.webconfig.templatesRelativePath = 'templates';
        }

        if (typeof NA.webconfig.componentsRelativePath === 'undefined') {

            /**
             * Default folder for template engine include file or controller components.
             * @public
             * @alias componentsRelativePath
             * @type {string}
             * @memberOf node-atlas~NA.webconfig
             * @default "components".
             */
            NA.webconfig.componentsRelativePath = 'components';
        }

        if (typeof NA.webconfig.assetsRelativePath === 'undefined') {

            /**
             * Folder for public file like image, CSS or JS.
             * @public
             * @alias assetsRelativePath
             * @type {string}
             * @memberOf node-atlas~NA.webconfig
             * @default "assets".
             */
            NA.webconfig.assetsRelativePath = 'assets';
        }

        if (typeof NA.webconfig.generatesRelativePath === 'undefined') {

            /**
             * HTML asset generation Folder.
             * @public
             * @alias generatesRelativePath
             * @type {string}
             * @memberOf node-atlas~NA.webconfig
             * @default "generates".
             */
            NA.webconfig.generatesRelativePath = 'generates';
        }
    };

    return NA;
};

exports.setHttpValueAsWebconfigBase = function (NA) {

    /**
     * Set default Http Port value possibly undefined from webconfig.
     * @public
     * @function setHttpValueAsWebconfigBase
     * @memberOf node-atlas~NA
     */
    NA.setHttpValueAsWebconfigBase = function () {
        var commander = NA.modules.commander;

        /**
         * Server listening port.
         * @public
         * @alias httpPort
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         * @default 80, or `process.env.PORT` if setted, or the webconfig's property `httpPort`.
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
         * Url access port.
         * @public
         * @alias urlPort
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         * @default `NA.webconfig.httpPort`.
         */
        NA.webconfig.urlPort = NA.webconfig.urlPort || NA.webconfig.httpPort;

        /**
         * Server listening hostname by http (for reverse proxy).
         * @public
         * @alias httpHostname
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         * @default "localhost", or `process.env.IP_ADDRESS` if setted, or the webconfig's property `httpHostname`.
         */
        NA.webconfig.httpHostname = NA.webconfig.httpHostname || process.env.IP_ADDRESS || 'localhost';

        /**
         * Url access hostname by http (for reverse proxy).
         * @public
         * @alias urlHostname
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         * @default `NA.webconfig.httpHostname`.
         */
        NA.webconfig.urlHostname = NA.webconfig.urlHostname || NA.webconfig.httpHostname;
    };

    return NA;
};

exports.improveWebconfigBase = function (NA) {

    /**
     * Set all default webconfig's value into `NA.webconfig`.
     * @public
     * @function improveWebconfigBase
     * @memberOf node-atlas~NA
     */
    NA.improveWebconfigBase = function () {

        /**
         * Contain Webconfig file to JSON format.
         * @namespace node-atlas~NA.webconfig
         * @public
         * @alias webconfig
         * @type {Object}
         * @memberOf node-atlas~NA
         */
        NA.webconfig = NA.openConfiguration(NA.webconfigName);

        /* Set external routes as a part of default webconfig. */
        NA.setExternalRoutesAsWebconfigBase();

        /* Set external files as a part of default webconfig. */
        NA.setExternalFilesAsWebconfigBase();

        /* Set value possibly undefined from default webconfig. */
        NA.setDirectoriesAsWebconfigBase();

        /* Set the httpPort, httpHost, urlPort and urlHost for default webconfig. */
        NA.setHttpValueAsWebconfigBase();

        /**
         * Define the path to the Private Key for HTTPs.
         * @public
         * @alias httpSecureRelativeKeyPath
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         */
        NA.webconfig.httpSecureRelativeKeyPath = NA.webconfig.httpSecureRelativeKeyPath || (typeof NA.webconfig.httpSecure === 'string') ? NA.webconfig.httpSecure + '.key' : undefined;

        /**
         * Define the path to the Certificate for HTTPs.
         * @public
         * @alias httpSecureRelativeCertificatePath
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         */
        NA.webconfig.httpSecureRelativeCertificatePath = NA.webconfig.httpSecureRelativeCertificatePath || (typeof NA.webconfig.httpSecure === 'string') ? NA.webconfig.httpSecure + '.crt' : undefined;

        /**
         * Website http(s) url generate depending of `NA.webconfig.httpSecure`, `NA.webconfig.urlHostname` and `NA.webconfig.urlPort`.
         * This value does not contain `NA.webconfig.urlRelativeSubPath`.
         * @public
         * @alias urlWithoutFileName
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         */
        NA.webconfig.urlWithoutFileName = 'http' + ((NA.webconfig.httpSecure) ? 's' : '') + '://' + NA.webconfig.urlHostname + ((NA.webconfig.urlPort !== ((NA.webconfig.httpSecure) ? 443 : 80)) ? ':' + NA.webconfig.urlPort : '') + '/';
    };

    return NA;
};