/*------------------------------------*\
    $%NODE MODULES
\*------------------------------------*/

exports.loadListOfNativeModules =  function (NA) {

    /**
     * Add native node.js module to `NA.modules`.
     * @public
     * @function loadListOfNativeModules
     * @memberOf node-atlas~NA
     */
    NA.loadListOfNativeModules = function () {
        var modules = {};

        /**
         * Allow you to create children process.
         * @public
         * @alias child_process
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link http://nodejs.org/api/child_process.html Child Process}
         */
        modules.child_process = require('child_process');

        /**
         * Allow you to manage files.
         * @public
         * @alias fs
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link http://nodejs.org/api/fs.html File System}
         */
        modules.fs = require('fs');

        /**
         * Allow you to handle and to transform file paths.
         * @public
         * @alias path
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link http://nodejs.org/api/path.html Path}
         */
        modules.path = require('path');

        /**
         * Allow you to use many features of the HTTP protocol.
         * @public
         * @alias http
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link http://nodejs.org/api/http.html HTTP}
         */
        modules.http = require('http');

        /**
         * Allow you to use many features of the HTTPs protocol.
         * @public
         * @alias http
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link http://nodejs.org/api/https.html HTTPs}
         */
        modules.https = require('https');

        /**
         * List of modules callable into NodeAtlas and website based on NodeAtlas.
         * @namespace node-atlas~NA.modules
         * @public
         * @type {Object}
         * @alias modules
         * @memberOf node-atlas~NA
         */
        NA.modules = modules;
    };

    return NA;
};

exports.loadServerModules =  function (NA) {

    /**
     * Add npm module to run a Server web.
     * @public
     * @function loadUtilsModules
     * @memberOf node-atlas~NA
     */
    NA.loadServerModules = function () {

        /**
         * An advanced web server.
         * @public
         * @function express
         * @memberOf node-atlas~NA.modules
         * @see {@link http://expressjs.com/ Express.js}
         */
        NA.modules.express = require('express');

        /**
         * Manage session with express.
         * @public
         * @function session
         * @memberOf node-atlas~NA.modules
         * @see {@link https://github.com/expressjs/session express-session}
         */
        NA.modules.session = require('express-session');

        /**
         * Parse HTML for POST methods.
         * @public
         * @function bodyParser
         * @memberOf node-atlas~NA.modules
         * @see {@link https://github.com/expressjs/body-parser body-parser}
         */
        NA.modules.bodyParser = require('body-parser');

        /**
         * Parse Cookies for keep connection.
         * @public
         * @function cookieParser
         * @memberOf node-atlas~NA.modules
         * @see {@link https://github.com/expressjs/cookie-parser cookie-parser}
         */
        NA.modules.cookieParser = require('cookie-parser');

        /**
         * A command tool for run NodeAtlas in command prompt.
         * @public
         * @alias commander
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link https://github.com/tj/commander.js commander.js}
         */
        NA.modules.commander = require('commander');

        /**
         * Is a middleware for Epxpress that redirects any requests to a default domain.
         * @public
         * @function forceDomain
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.org/package/forcedomain forcedomain}
         */
        NA.modules.forceDomain = require('forcedomain');
    };

    return NA;
};

exports.loadTemplatingModules =  function (NA) {

    /**
     * Add npm module to manipulate HTML render.
     * @public
     * @function loadUtilsModules
     * @memberOf node-atlas~NA
     */
    NA.loadTemplatingModules = function () {

        /**
         * EJS cleans the HTML out of your JavaScript with client side templates.
         * @public
         * @alias ejs
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link http://www.embeddedjs.com/ EJS}
         */
        NA.modules.ejs = require('ejs');

        /**
         * Tiny, fast, and elegant implementation of core jQuery designed specifically for the server.
         * @public
         * @function cheerio
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.org/package/cheerio cheerio}
         */
        NA.modules.cheerio = require('cheerio');
    };

    return NA;
};

exports.loadUtilsModules =  function (NA) {

    /**
     * Add npm module to enhance NodeAtlas.
     * @public
     * @function loadUtilsModules
     * @memberOf node-atlas~NA
     */
    NA.loadUtilsModules = function () {

        /**
         * Higher-order functions and common patterns for asynchronous code.
         * @public
         * @alias async
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.com/package/async async}
         */
        NA.modules.async = require('async');

        /**
         * An implementation of heritage.
         * @public
         * @function extend
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.org/package/extend extend}
         */
        NA.modules.extend = require('extend');

        /**
         * Open a file or url in the user's preferred application.
         * @public
         * @function open
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.org/package/open open}
         */
        NA.modules.open = require('open');

        /**
         * Make all directories in a path, like mkdir -p.
         * @public
         * @function mkpath
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.org/package/mkpath mkpath}
         */
        NA.modules.mkpath = require('mkpath');

        /**
         * Clone directories using copy/symlink.
         * @public
         * @function traverseDirectory
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.com/package/traverse-directory traverse-directory}
         */
        NA.modules.traverseDirectory = require('traverse-directory');
    };

    return NA;
};

exports.loadProcessModules =  function (NA) {

    /**
     * Add npm module for minification, obfuscation, compression, optimization and transformation.
     * @public
     * @function loadProcessModules
     * @memberOf node-atlas~NA
     */
    NA.loadProcessModules = function () {

        /**
         * Minify GIF, JPEG and PNG images.
         * @public
         * @function imagemin
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.com/package/imagemin imagemin}
         */
        NA.modules.imagemin = require('imagemin');

        /**
         * Compress code before send it to the client.
         * @public
         * @function compress
         * @memberOf node-atlas~NA.modules
         * @see {@link https://github.com/expressjs/compression compression}
         */
        NA.modules.compress = require('compression');

        /**
         * CSS parser.
         * @public
         * @function cssParse
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.com/package/css-parse css-parse}
         */
        NA.modules.cssParse = require('css-parse');

        /**
         * UglifyJS is a JavaScript parser, minifier, compressor or beautifier toolkit.
         * @public
         * @alias uglifyJs
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link https://github.com/mishoo/UglifyJS2 UglifyJS2}
         */
        NA.modules.uglifyJs = require('uglify-js');

        /**
         * A fast, efficient, and well tested CSS minifier for node.js.
         * @public
         * @function cleanCss
         * @memberOf node-atlas~NA.modules
         * @see {@link https://github.com/jakubpawlowicz/clean-css clean-css}
         */
        NA.modules.cleanCss = require('clean-css');

        /**
         * The dynamic stylesheet language. http://lesscss.org.
         * @public
         * @alias less
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.com/package/less less}
         */
        NA.modules.less = require('less');

        /**
         * LESS.js middleware for connect.
         * @public
         * @alias lessMiddleware
         * @type {Object}
         * @memberOf node-atlas~NA.modules
         * @see {@link https://www.npmjs.com/package/less-middleware less-middleware}
         */
        NA.modules.lessMiddleware = require('less-middleware');
        NA.modules.lessMiddlewareUtilities = require('less-middleware/lib/utilities');
    };

    return NA;
};

exports.loadListOfRequiredNpmModules =  function (NA) {

    /**
     * Add npm module to `NA.modules`.
     * @public
     * @function loadListOfRequiredNpmModules
     * @memberOf node-atlas~NA
     */
    NA.loadListOfRequiredNpmModules = function () {

        /* Load all modules. */
        NA.loadServerModules();
        NA.loadTemplatingModules();
        NA.loadUtilsModules();
        NA.loadProcessModules();
    };

    return NA;
};

exports.downloadAllModule =  function (NA) {

    /**
     * Download all packet like `npm install` based on package.json if a module is not founded.
     * @public
     * @function downloadAllModule
     * @memberOf node-atlas~NA
     * @param {Object} exception - Allow to know if a module is not founded.
     */
    NA.downloadAllModule = function (exception) {
        var execute = NA.modules.child_process.exec;

        /* Test if package.json is present for obtain list of module and version. */
        NA.ifFileExist(NA.serverPhysicalPath, 'package.json', function () {
            NA.log(NA.appLabels.downloadAllModule.moduleNotExist + " " + NA.appLabels.downloadAllModule.downloadStarting + "(" + exception + ")");

            /* Execute an npm command to install all modules not founded. */
            execute('npm --prefix ' + NA.serverPhysicalPath + ' install -l', function (error) {
                if (!error) {
                    NA.log(NA.appLabels.downloadAllModule.installationDone + " " + NA.appLabels.downloadAllModule.restartRequired);
                    /** It's ok, killing process and restarting manually now. */
                    process.kill(process.pid);
                } else {
                    /** It's not ok explain the error. */
                    NA.log(error);
                }
            });
        }, function () {
            /* No package.json ? We kill the process. */
            process.kill(process.pid);
        });
    };

    return NA;
};

exports.moduleRequired =  function (NA) {

    /**
     * Load modules or install modules.
     * @public
     * @function moduleRequired
     * @memberOf node-atlas~NA
     * @param {moduleRequired~callback} callback - Run next steps if all module are correctly loaded.
     */
    NA.moduleRequired = function (callback) {
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
                NA.log(exception);
            }
        }
    };

    return NA;
};