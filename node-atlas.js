/*------------------------------------*\
    $%ABOUT
\*------------------------------------*/

/**
 * @fileOverview Node Atlas allows you to create and manage HTML assets or create multilingual websites/webapps easily with Node.js.
 * @author <a href="mailto:bruno.lesieur@gmail.com">Bruno Lesieur</a>
 * @version 0.24.1
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
 * @type {Function}
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {
    "use strict";

    /**
     * Set line command options usable when NodeAtlas is executed in a command line tool.
     * @public
     * @alias lineCommandConfiguration
     * @memberOf NA
     * @type {Function}
     */
    publics.lineCommandConfiguration = function () {
        var commander = NA.modules.commander;

        commander
            /** Version of NodeAtlas currently in use with `--version` option. */
            .version('0.24.1')

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
     * @alias initGlobalVar
     * @memberOf NA
     * @type {Function}
     */
    publics.initGlobalVar = function () {
        try {
            /**
             * Name of file contains language error messages. Name of file is without extension.
             * @public
             * @alias appLanguage
             * @memberOf NA
             * @type {String}
             * @default "default"
             */
            publics.appLanguage = 'default';

            /**
             * OS absolute path which contains NodeAtlas folder.
             * @public
             * @alias serverPhysicalPath
             * @memberOf NA
             * @type {String}
             * @default Folder where NodeAtlas is running.
             */
            publics.serverPhysicalPath = process.argv[1].replace(/[-a-zA-Z0-9_]+(\.js)?$/g, "");

            /**
             * Contain all Labels finded into `NA.appLanguage` file.
             * @public
             * @alias appLabels
             * @memberOf NA
             * @type {String}
             */
            publics.appLabels = require('./languages/' + publics.appLanguage + '.json');

            /**
             * Contain all functions of controllers both common and specific.
             * @public
             * @alias websiteController
             * @memberOf NA
             * @type {Object[]}
             * @example // Functions for common controller if `commonController` value is "common.json".
             * NA.websiteController["common.json"].setConfigurations(...);
             * NA.websiteController["common.json"].loadModules(...);
             * NA.websiteController["common.json"].setSessions(...);
             * NA.websiteController["common.json"].preRender(...);
             * NA.websiteController["common.json"].render(...);
             * ...
             */
            publics.websiteController = [];
        } catch (exception) {
            console.log(exception);
        }
    };

    /**
     * Set main variables for webconfig.
     * @public
     * @alias initGlobalVarRequiredNpmModules
     * @memberOf NA
     * @type {Function}
     */
    publics.initGlobalVarRequiredNpmModules = function () {
        var commander = NA.modules.commander,
    		path = NA.modules.path,
            regex = new RegExp(path.sep + '$', 'g');

        /** `websitePhysicalPath` Manually setted value with `NA.config`. */
        if (commander.directory) { NA.configuration.directory = commander.directory; }

        try {

            if (typeof NA.configuration.directory !== 'string') {

                /**
                 * OS absolute path which contains webconfig and website.
                 * @public
                 * @alias websitePhysicalPath
                 * @memberOf NA
                 * @type {String}
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
             * @memberOf NA
             * @type {String}
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
     * @alias templateEngineConfiguration
     * @memberOf NA
     * @type {Function}
     */
    publics.templateEngineConfiguration = function () {
        var ejs = NA.modules.ejs;

        /**
         * Container for all variations usable into template engine.
         * @namespace NA.variations
         * @public
         * @alias variations
         * @memberOf NA
         * @type {Object}
         */
        publics.variations = {};

        /**
         * OS absolute directory for template engine's file included with `include` statement.
         * @public
         * @alias pathname
         * @memberOf NA.variations
         * @type {String}
         * @default The `NA.websitePhysicalPath` value with webconfig `componentsRelativePath` after.
         */
        NA.variations.pathname = NA.websitePhysicalPath + NA.webconfig.componentsRelativePath;

        /**
         * Same as `NA.variations.pathname` with arbitrary value setted after. This value will be represent current page generated for all page generated with template engine.
         * @public
         * @alias filename
         * @memberOf NA.variations
         * @type {String}
         * @default Arbitrarily setted to "all-component.here".
         */
        NA.variations.filename = NA.variations.pathname + "all-component.here";

        /** Set brackets for use EJS. */
        ejs.open = NA.webconfig.templateEngineOpenPattern || ejs.open;
        ejs.close = NA.webconfig.templateEngineClosePattern || ejs.close;
    };

    /**
     * Decide to run a « Simple Web Server » or a « With Weconfig Server » depending to webconfig opening success. 
     * If webconfig is correctly openned, the `NA.improveWebconfigBase` and `callback` function will be run, else, just `NA.simpleWebServer` will be run.
     * @public
     * @alias initWebconfig
     * @memberOf NA
     * @type {Function}
     * @param {Function} callback Calling next processus if webconfig opening is a success.
     */
    publics.initWebconfig = function (callback) {
        /** Webconfig based website... */
        NA.ifFileExist(NA.websitePhysicalPath, NA.webconfigName, function () {
        	NA.improveWebconfigBase();
            callback();
        /** ... or static website. */
        }, function () {
            NA.simpleWebServer();
        });
    };

    /**
     * Set all default webconfig's value into `NA.webconfig`.
     * @public
     * @alias improveWebconfigBase
     * @memberOf NA
     * @type {Function}
     */
    publics.improveWebconfigBase = function () {
    	var commander = NA.modules.commander,
    		path = NA.modules.path,
            regex = new RegExp(path.sep + '$', 'g'),
            data = {};

        /**
         * Contain Webconfig file to JSON format.
         * @namespace NA.webconfig
         * @public
         * @alias webconfig
         * @memberOf NA
         * @type {Object}
         */
        publics.webconfig = NA.openConfiguration(NA.webconfigName);

        if (typeof publics.webconfig.routes === 'string') {

            /**
             * Contain all routes to JSON format.
             * @public
             * @alias routes
             * @memberOf NA.webconfig
             * @type {Object}
             * @default The webconfig's property `routes`.
             */
            publics.webconfig.routes = NA.openConfiguration(publics.webconfig.routes);
        }

        if (typeof publics.webconfig.bundles === 'string') {

            /**
             * Contain bundle configuration for CSS and JS minification to JSON format.
             * @public
             * @alias bundles
             * @memberOf NA.webconfig
             * @type {Object}
             * @default The webconfig's property `bundles`.
             */
            publics.webconfig.bundles = NA.openConfiguration(publics.webconfig.bundles);
        }

        if (typeof NA.webconfig.variationsRelativePath !== 'undefined') {

            /**
             * Language and variable variation folder depending of languages.
             * @public
             * @alias variationsRelativePath
             * @memberOf NA.webconfig
             * @type {String}
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
             * @memberOf NA.webconfig
             * @type {String}
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
             * @memberOf NA.webconfig
             * @type {String}
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
             * @memberOf NA.webconfig
             * @type {String}
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
             * @memberOf NA.webconfig
             * @type {String}
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
             * @memberOf NA.webconfig
             * @type {String}
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
             * @memberOf NA.webconfig
             * @type {String}
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
         * @memberOf NA.webconfig
         * @type {String}
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
         * @memberOf NA.webconfig
         * @type {String}
         * @default `NA.webconfig.httpPort`.
         */
        NA.webconfig.urlPort = NA.webconfig.urlPort || NA.webconfig.httpPort;

        /**
         * Server listening hostname by http (for reverse proxy).
         * @public
         * @alias httpHostname
         * @memberOf NA.webconfig
         * @type {String}
         * @default "localhost", or `process.env.IP_ADDRESS` if setted, or the webconfig's property `httpHostname`.
         */
        NA.webconfig.httpHostname = NA.webconfig.httpHostname || process.env.IP_ADDRESS || 'localhost';
   
        /**
         * Url access hostname by http (for reverse proxy).
         * @public
         * @alias urlHostname
         * @memberOf NA.webconfig
         * @type {String}
         * @default `NA.webconfig.httpHostname`.
         */     
        NA.webconfig.urlHostname = NA.webconfig.urlHostname || NA.webconfig.httpHostname;

        /**
         * Website http(s) url generate depending of `NA.webconfig.httpSecure`, `NA.webconfig.urlHostname` and `NA.webconfig.urlPort`.
         * This value does not contain `NA.webconfig.urlRelativeSubPath`.
         * @public
         * @alias urlWithoutFileName
         * @memberOf NA.webconfig
         * @type {String}
         */        
		NA.webconfig.urlWithoutFileName = 'http' + ((NA.webconfig.httpSecure) ? 's' : '') + '://' + NA.webconfig.urlHostname + ((NA.webconfig.urlPort !== 80) ? ':' + NA.webconfig.urlPort : '') + '/';
    };

})(NA);





/*------------------------------------*\
    $%GLOBAL FUNCTIONS
\*------------------------------------*/

(function (publics) {
    "use strict";

    publics.openConfiguration = function (configName) {
        var fs = NA.modules.fs;

        try {
            return JSON.parse(fs.readFileSync(NA.websitePhysicalPath + configName, 'utf-8'));
        } catch (exception) {
            if (exception.toString().indexOf('SyntaxError') !== -1) {
                data.syntaxError = exception.toString();
                data.fileName = configName;
                console.log(NA.appLabels.webconfigSyntaxError.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
            } else {
                console.log(exception);
            }
            process.kill(process.pid);
        }
    };

    publics.ifFileExist = function (physicalPath, fileName, callback, fallback) {
        var fs = NA.modules.fs;

        fs.stat(physicalPath + fileName, function (error) {
            var data = {
                physicalPath: physicalPath,
                fileName: fileName
            }

            if (error && error.code === 'ENOENT') {
                console.log(NA.appLabels.ifFileExist.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                fallback();
            } else {
                callback();
            }
        });
    };

})(NA);





/*------------------------------------*\
    $%NODE MODULES
\*------------------------------------*/

(function (publics) {
    "use strict";

    publics.loadListOfNativeModules = function () {
        var modules = {};

        modules.child_process = require('child_process');
        modules.fs = require('fs');
        modules.path = require('path');
        modules.http = require('http');

        publics.modules = modules;
    };

    publics.loadListOfRequiredNpmModules = function () {
        publics.modules.express = require('express');
        publics.modules.session = require('express-session');
        publics.modules.bodyParser = require('body-parser');
        publics.modules.cookieParser = require('cookie-parser');
        publics.modules.extend = require('extend');
        publics.modules.commander = require('commander');
        publics.modules.compress = require('compression');
        publics.modules.open = require('open');
        publics.modules.ejs = require('ejs');
        publics.modules.mkpath = require('mkpath');
        publics.modules.cheerio = require('cheerio');
        publics.modules.uglifyJs = require('uglify-js');
        publics.modules.cleanCss = require('clean-css');
        publics.modules.forceDomain = require('node-force-domain');
    };

    publics.downloadAllModule = function (exception) {
        var execute = NA.modules.child_process.exec;

        NA.ifFileExist(NA.serverPhysicalPath, 'package.json', function () {
            console.log(NA.appLabels.downloadAllModule.moduleNotExist + " " + NA.appLabels.downloadAllModule.downloadStarting + "(" + exception + ")");

            execute('npm --prefix ' + NA.serverPhysicalPath + ' install -l', function (error, stdout, stderr) {
                if (!error) {
                    console.log(NA.appLabels.downloadAllModule.installationDone + " " + NA.appLabels.downloadAllModule.restartRequired);
                    process.kill(process.pid);
                } else {
                    console.log(error);
                }
            });
        }, function () {
            process.kill(process.pid);
        });
    };

    publics.moduleRequired = function (callback) {
        try {
            NA.loadListOfRequiredNpmModules();
            callback();
        } catch (exception) {
            if (exception.code === 'MODULE_NOT_FOUND') {
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

(function (publics) {
    "use strict";

    publics.simpleWebServer = function () {
        var commander = NA.modules.commander,
            http = NA.modules.http,
            commander = NA.modules.commander,
            express = NA.modules.express,
            open = NA.modules.open;

        NA.httpServer = express();
        NA.httpServer.enable('strict routing');
        NA.server = http.createServer(NA.httpServer);
        NA.server.listen(commander.httpPort || NA.configuration.httpPort || 80, function () {
            console.log(NA.appLabels.publicMode);
        });
        NA.httpServer.use(express["static"](NA.websitePhysicalPath, { maxAge: 86400000 * 30 }));

        commander.httpPort = commander.httpPort || 80;

        if (commander.run) { open('http://localhost' + ((commander.httpPort !== 80) ? ':' + commander.httpPort : '') + '/'); }
    };

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
            optionSession = {};

        function atlasSessions(NA) {

            publics = NA;

            optionSession.store = NA.sessionStore;
            NA.webconfig.session = optionSession;
            NA.httpServer.use(session(optionSession));

            if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                typeof NA.websiteController[NA.webconfig.commonController].setConfigurations !== 'undefined') {
                    NA.websiteController[NA.webconfig.commonController].setConfigurations(NA, function (NA) {
                        atlasMiddlewares(NA);
                    });
            } else {
                atlasMiddlewares(NA);
            }
        }

        function atlasMiddlewares(NA) {

            publics = NA;

            NA.server.listen(NA.webconfig.httpPort, function () {
                var data = {};

                data.httpPort = NA.webconfig.httpPort;

                console.log(NA.appLabels.isRunning.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
            });

			if (commander.run) { NA.configuration.run = commander.run; }

            if (NA.configuration.run) { open(NA.webconfig.urlWithoutFileName + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "")); }
        
        }

        NA.httpServer = express();
        NA.httpServer.enable('strict routing');
        NA.server = http.createServer(NA.httpServer);

        if (commander.generate) { NA.configuration.generate = commander.generate; }

        if (!NA.configuration.generate) {

            NA.httpServer.use(compress());

            NA.httpServer.use(forceDomain({
                hostname: NA.webconfig.urlHostname,
                port: NA.webconfig.urlPort,
                type: 'permanent',
                protocol: 'http' + ((NA.webconfig.httpSecure) ? 's' : '')
            }));

            NA.httpServer.use(bodyParser.urlencoded({ extended: true }));
            NA.httpServer.use(bodyParser.json());
            NA.httpServer.use(cookieParser());

            optionSession.key = NA.webconfig.sessionKey || 'nodeatlas.sid',
            optionSession.secret = NA.webconfig.sessionSecret || '1234567890bépo',
            optionSession.saveUninitialized = true,
            optionSession.resave = true
            if (NA.webconfig.session) {
                optionSession = NA.webconfig.session;
            }

            NA.sessionStore = new session.MemoryStore();

            if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                typeof NA.websiteController[NA.webconfig.commonController].setSessions !== 'undefined') {
                    NA.websiteController[NA.webconfig.commonController].setSessions(NA, function (NA) {
                        atlasSessions(NA);
                    });
            } else {
                atlasSessions(NA);
            }
        }
    };

    publics.httpServerPublicFiles = function () {
        var express = NA.modules.express,
            commander = NA.modules.commander;

        if (commander.generate) { NA.configuration.generate = commander.generate; }

        if (!NA.configuration.generate) {
            NA.httpServer.use(NA.webconfig.urlRelativeSubPath, express["static"](NA.websitePhysicalPath + NA.webconfig.assetsRelativePath, { maxAge: 86400000 * 30 }));
        }
    };

    publics.response = function (request, response, data, pageParameters, currentVariation) {
        var charset = currentVariation.pageParameters.charset || pageParameters.charset || 'utf-8',
            statusCode = currentVariation.pageParameters.statusCode || pageParameters.statusCode || 200,
            contentType = currentVariation.pageParameters.mimeType || pageParameters.mimeType || 'text/html',
            others = {
                /*'Content-Length': data.length,*/
                'Content-Type': contentType
            };

        response.charset = charset;
        response.writeHead(statusCode, others);

        response.write(data);
        response.end();
    };

    publics.redirect = function (optionsPath, request, response) {
        var location;

        if (optionsPath.regExp) {
            location = optionsPath.redirect.replace(/\$([0-9]+)\$/g, function (regex, matches) { return request.params[matches]; });
        } else {
            location = optionsPath.redirect.replace(/\:([a-z0-9]+)/g, function (regex, matches) { return request.params[matches]; });
        }

        response.writeHead(optionsPath.statusCode, {
            Location: NA.webconfig.urlRelativeSubPath + location
        });

        response.end();
    };

    publics.request = function (path, options) {
        var pageParameters = options[path],
            getSupport = true,
            postSupport = true,
            currentPath = path,
            objectPath;

        if (pageParameters.url) {
            currentPath = pageParameters.url;
        }

        objectPath = NA.webconfig.urlRelativeSubPath + currentPath;

        // Manage GET / POST support for an url.
        if (NA.webconfig.getSupport === false) { getSupport = false; }
        if (pageParameters.getSupport === false) { getSupport = false; }
        if (pageParameters.getSupport === true) { getSupport = true; }
        if (NA.webconfig.postSupport === false) { postSupport = false; }
        if (pageParameters.postSupport === false) { postSupport = false; }
        if (pageParameters.postSupport === true) { postSupport = true; }

        if (pageParameters.regExp) {
            if (typeof pageParameters.regExp === 'string') {
                objectPath = new RegExp(objectPath, pageParameters.regExp);
                console.log(objectPath);
            } else {
                objectPath = new RegExp(objectPath);
                console.log(objectPath);
            }
        }

        // Execute Get
        if (getSupport) {
            NA.httpServer.get(objectPath, function (request, response) {
                if (options[path].redirect && options[path].statusCode) {
                    NA.redirect(options[path], request, response);
                } else {
                    NA.render(path, options, request, response);
                }
            });
        }

        // Execute Post
        if (postSupport) {
            NA.httpServer.post(objectPath, function (request, response) {
                if (options[path].redirect && options[path].statusCode) {
                    NA.redirect(options[path], request, response);
                } else {
                    NA.render(path, options, request, response);
                }
            });
        }
    };

    publics.pageNotFound = function () {
        if (NA.webconfig.pageNotFound && NA.webconfig.routes[NA.webconfig.pageNotFound]) {
            var pageNotFound = NA.webconfig.routes[NA.webconfig.pageNotFound],
                pageNotFoundUrl = NA.webconfig.pageNotFound;

            if (pageNotFound.url) {
                pageNotFoundUrl = pageNotFound.url;
            }

            NA.httpServer.get("*", function (request, response) {
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    NA.redirect(pageNotFound, request, response);
                } else {
                    NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
                }
            })
            NA.httpServer.post("*", function (request, response) {
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    NA.redirect(pageNotFound, request, response);
                } else {
                    NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
                }
            });
        }
    };

    publics.routesPages = function () {
        var commander = NA.modules.commander;

        if (commander.generate) { NA.configuration.generate = commander.generate; }
        
        if (!NA.configuration.generate) {       
            for (var currentUrl in NA.webconfig.routes) {
                NA.request(currentUrl, NA.webconfig.routes);
            }
        }
    };

})(NA);





/*------------------------------------*\
    $%FRONT-END PART
\*------------------------------------*/

(function (publics) {
    "use strict";

    publics.openTemplate = function (pageParameters, templatesPath, callback) {
        var fs = NA.modules.fs;

        fs.readFile(templatesPath, 'utf-8', function (error, data) {
            var dataError = {};

            if (error) {
                dataError.templatesPath = templatesPath;
                if (typeof pageParameters.template === 'undefined') {
                    console.log(NA.appLabels.templateNotSet);
                } else {
                    console.log(NA.appLabels.templateNotFound.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                }
            } else {
                callback(data); 
            }
       });
    };

    publics.openVariation = function (variationName, languageCode) {
        var fs = NA.modules.fs,
            dataError = {},
            variationsPath,
            languagePath;

            if (languageCode) { languagePath = languageCode + '/'; }
            if (!languageCode) { languagePath = ''; }

            variationsPath = NA.websitePhysicalPath + NA.webconfig.variationsRelativePath + languagePath + variationName;

        if (typeof variationName !== 'undefined') {
            dataError.variationsPath = variationsPath;
            try {
                return JSON.parse(fs.readFileSync(variationsPath, 'utf-8'));
            } catch (exception) {
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

    publics.cssMinification = function () {
        var bundles = NA.webconfig.bundles,
            cleanCss = NA.modules.cleanCss,
            fs = NA.modules.fs,
            enable = true,
            output = "";

        if (bundles && bundles.stylesheets && typeof bundles.stylesheets.enable === 'boolean') {
            enable = bundles.stylesheets.enable;
        }

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

    publics.jsObfuscation = function () {
        var bundles = NA.webconfig.bundles,
            uglifyJs = NA.modules.uglifyJs,
            fs = NA.modules.fs,
            enable = true,
            output = "";

        if (bundles && bundles.javascript && typeof bundles.javascript.enable === 'boolean') {
            enable = bundles.javascript.enable;
        }

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

    publics.render = function (path, options, request, response) {
        var ejs = NA.modules.ejs,
            extend = NA.modules.extend,
            pageParameters = options[path],
            templatesPath,
            currentVariation = {},
            templateRenderName,
            currentPath = path;

        // Inject template shortcut to template.
        if (typeof pageParameters === 'string') {
            // templatesPath is just use like temp var in this if statement.
            templatesPath = pageParameters;
            pageParameters = {}
            pageParameters.template = templatesPath;
        }

        templatesPath = NA.websitePhysicalPath + NA.webconfig.templatesRelativePath + pageParameters.template;

        // Deport url extension to currentPath.
        if (pageParameters.url) {
            currentPath = pageParameters.url;
        }

        NA.loadController(pageParameters.controller, function () {

            // Execute custom PreRender part.
            // Specific
            function preRenderSpecific(currentVariation) {                
                if (typeof NA.websiteController[pageParameters.controller] !== 'undefined' &&
                    typeof NA.websiteController[pageParameters.controller].preRender !== 'undefined') {
                        NA.websiteController[pageParameters.controller].preRender({ variation: currentVariation, NA: NA, request: request, response: response }, function (currentVariation) {
                            openTemplate(currentVariation);
                        });
                } else {
                    openTemplate(currentVariation);      
                }
            }

            // Execute custom Render part.
            // Specific
            function renderSpecific(data, currentVariation) {                
                if (typeof NA.websiteController[pageParameters.controller] !== 'undefined' &&
                    typeof NA.websiteController[pageParameters.controller].render !== 'undefined') {
                        NA.websiteController[pageParameters.controller].render({ data: data, NA: NA, request: request, response: response }, function (data) {
                            renderTemplate(data, currentVariation);
                        });
                } else {
                    renderTemplate(data, currentVariation);      
                }
            }

            // Opening template file.
            function openTemplate(currentVariation) {                
                NA.openTemplate(pageParameters, templatesPath, function (data) {

                    // Generate final string Render.
                    currentVariation.filename = currentVariation.pathname + pageParameters.template;
                    try {
                       data = ejs.render(data, currentVariation);
                    } catch (exception) {
                        data = exception.toString()
                            .replace(/[\n]/g, "<br>")
                            .replace(/    /g, "<span style='display:inline-block;width:32px'></span>")
                            .replace(/ >> /g, "<span style='display:inline-block;width:32px'>&gt;&gt;</span>");
                    }

                    // Execute custom Render part.
                    // Common
                    if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                        typeof NA.websiteController[NA.webconfig.commonController].render !== 'undefined') {
                            NA.websiteController[NA.webconfig.commonController].render({ data: data, NA: NA, request: request, response: response }, function (data) {
                                renderSpecific(data, currentVariation);
                            });
                    } else {
                        renderSpecific(data, currentVariation);
                    }
               });
            }

            // Write file or/and send response.
            function renderTemplate(data, currentVariation) {
                // Create file and CSS.
                if (typeof response === 'undefined' || NA.webconfig.autoGenerate) {
                    templateRenderName = pageParameters.generate || currentPath;

                    NA.saveTemplateRender(data, templateRenderName);
                }

                // Run page into browser.
                if (typeof response !== 'undefined') {
                    NA.response(request, response, data, pageParameters, currentVariation);
                }
            }
            
            currentVariation.languageCode = pageParameters.languageCode || NA.webconfig.languageCode;
            currentVariation.urlBasePathSlice = NA.webconfig.urlWithoutFileName + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "");
            currentVariation.urlBasePath = currentVariation.urlBasePathSlice + ((NA.webconfig.urlRelativeSubPath !== '') ? '/' : '');

            currentVariation.urlPath = currentVariation.urlBasePath.replace(/\/$/g, "") + currentPath;
            if (request) { currentVariation.urlPath = request.protocol + "://" + request.get('host') + request.url; }

            currentVariation.pathname = NA.variations.pathname;
            currentVariation.filename = NA.variations.filename;

            // Opening variation file.
            if (request) { currentVariation.params = request.params; }

            currentVariation.common = NA.openVariation(NA.webconfig.commonVariation, currentVariation.languageCode);
            if (currentVariation.languageCode) {
                currentVariation.common = extend(true, NA.openVariation(NA.webconfig.commonVariation), currentVariation.common);
            }

            currentVariation.specific = NA.openVariation(pageParameters.variation, currentVariation.languageCode);
            if (currentVariation.languageCode) {
                currentVariation.specific = extend(true, NA.openVariation(pageParameters.variation), currentVariation.specific);
            }

            currentVariation.pageParameters = pageParameters;
            currentVariation.pageUrlRewriting = currentPath;
            currentVariation.webconfig = NA.webconfig;

            // Execute custom PreRender part.
            // Common
            if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                typeof NA.websiteController[NA.webconfig.commonController].preRender !== 'undefined') {
                    NA.websiteController[NA.webconfig.commonController].preRender({ variation: currentVariation, NA: NA, request: request, response: response }, function (currentVariation) {
                        preRenderSpecific(currentVariation);
                    });
            } else {
                preRenderSpecific(currentVariation);
            }
        });
    };

})(NA);





/*------------------------------------*\
    $%BACK-END PART
\*------------------------------------*/

(function (publics) {
    "use strict";

    publics.openController = function () {
        NA.nodeModulesPath = NA.websitePhysicalPath + 'node_modules/';
        if (typeof NA.websiteController[NA.webconfig.commonController].loadModules !== 'undefined') {
            NA = NA.websiteController[NA.webconfig.commonController].loadModules(NA) || NA;
        }
    };

    publics.loadListOfExternalModules = function (callback) {
        NA.loadController(NA.webconfig.commonController, function () {
            callback();
        });
    };

    publics.loadController = function (controller, callback) {
        var commonControllerPath = NA.websitePhysicalPath + NA.webconfig.controllersRelativePath + controller,
            dataError = {};

        if (typeof controller !== 'undefined') {
            try {
                NA.websiteController[controller] = require(commonControllerPath);
                NA.openController();
                callback();
            } catch (exception) {
                dataError.moduleError = exception.toString();
                if (exception.code === 'MODULE_NOT_FOUND') {
                    console.log(NA.appLabels.moduleNotFound.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                } else {
                    throw exception;
                }
            }
        } else {
            callback();
        }

    };

})(NA);





/*------------------------------------*\
    $%ASSETS GENERATION
\*------------------------------------*/

/**
 * Closure group for define Assets Generation Functions.
 * @type {Function}
 * @param {Object} publics Allow you to add publics methods to NA object.
 */
(function (publics) {

    /**
     * Open all pages for generate render into `generatesRelativePath`.
     * @public
     * @alias urlGeneratingPages
     * @memberOf NA
     * @type {Function}
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
     * @alias emulatedIndexPage
     * @memberOf NA
     * @type {Function}
     */
    publics.emulatedIndexPage = function () {
        var commander = NA.modules.commander;

        /** `generate` manually setted value with `NA.config`. */
        if (commander.generate) { NA.configuration.generate = commander.generate; }

        /** Only if server was started... */
        if (!NA.configuration.generate) {
            /** ...and `indexPage` is set to « true ». */
            if (NA.webconfig.indexPage) {

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
     * @alias saveTemplateRender
     * @memberOf NA
     * @type {Function}
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

(function (publics) {
    "use strict";

    publics.configuration = {};

    publics.config = function (config) {
    	var config = config || {};

		NA.configuration = config;

    	return NA;
    };

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

/** With command tools. */
if (require.main === module) {
	NA.init();
}

/** With require. */
module.exports = NA;