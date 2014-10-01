/*------------------------------------*\
    $%SUMMARY
\*------------------------------------*/
/**
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

var NA = {};





/*------------------------------------*\
    $%CONFIGURATION
\*------------------------------------*/

(function (publics) {
    "use strict";

	var privates = {};

    publics.initGlobalVar = function () {
        try {
            publics.appLanguage = 'default';
            publics.serverPhysicalPath = process.argv[1].replace(/[-a-zA-Z0-9_]+(\.js)?$/g, "");
            publics.appLabels = require('./languages/' + publics.appLanguage + '.json');
            publics.websiteController = [];
        } catch (exception) {
            console.log(exception);
        }
    };

    publics.initGlobalVarRequiredNpmModules = function () {
        var commander = NA.modules.commander,
    		path = NA.modules.path,
            regex = new RegExp(path.sep + '$', 'g');

        if (commander.directory) { NA.configuration.directory = commander.directory; }

        try {
            if (typeof NA.configuration.directory !== 'string') {
                publics.websitePhysicalPath = process.cwd() + path.sep
            } else {
                publics.websitePhysicalPath = NA.configuration.directory.replace(regex, '') + path.sep
            }
            
            publics.webconfigName = 'webconfig.json';

			if (commander.webconfig) { NA.configuration.webconfig = commander.webconfig; }

            if (NA.configuration.webconfig) { NA.webconfigName = NA.configuration.webconfig; }
        } catch (exception) {
            console.log(exception);
        }
    };

    publics.lineCommandConfiguration = function () {
        var commander = NA.modules.commander;

        commander
            .version('0.20.3')
            .option(NA.appLabels.commander.run.command, NA.appLabels.commander.run.description)
            .option(NA.appLabels.commander.directory.command, NA.appLabels.commander.directory.description, String)
            .option(NA.appLabels.commander.webconfig.command, NA.appLabels.commander.webconfig.description, String)
            .option(NA.appLabels.commander.httpPort.command, NA.appLabels.commander.httpPort.description, String)
            .option(NA.appLabels.commander.generate.command, NA.appLabels.commander.generate.description, String)
            .parse(process.argv);
    };

    publics.templateEngineConfiguration = function () {
        var ejs = NA.modules.ejs;

        publics.variations = {};

        NA.variations.filename = NA.websitePhysicalPath + NA.webconfig.componentsRelativePath + "all-component.here";

        // Set pattern for use EJS.
        ejs.open = NA.webconfig.templateEngineOpenPattern || ejs.open;
        ejs.close = NA.webconfig.templateEngineClosePattern || ejs.close;
    };

    publics.initWebconfig = function (callback) {
        NA.ifFileExist(NA.websitePhysicalPath, NA.webconfigName, function () {
        	privates.improveWebconfigBase();
            callback();
        });
    };

    privates.improveWebconfigBase = function () {
    	var fs = NA.modules.fs,
    		commander = NA.modules.commander,
            connect = NA.modules.connect,
    		path = NA.modules.path,
            regex = new RegExp(path.sep + '$', 'g'),
            data = {};

		try {
        	publics.webconfig = JSON.parse(fs.readFileSync(NA.websitePhysicalPath + NA.webconfigName, 'utf-8'));
		} catch (exception) {
			if (exception.toString().indexOf('SyntaxError') !== -1) {
				data.syntaxError = exception.toString();
				console.log(NA.appLabels.webconfigSyntaxError.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
			} else {
				console.log(exception);
			}
            process.kill(process.pid);
		}

        // Change listening hostname.
        NA.webconfig.httpHostname = NA.webconfig.httpHostname || process.env.IP_ADDRESS || 'localhost';

        // Language and variable variation folder in function of languages.
		if (typeof NA.webconfig.variationsRelativePath !== 'undefined') {
            NA.webconfig.variationsRelativePath = NA.webconfig.variationsRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.variationsRelativePath = 'variations/';
        }

        // Controller part for back-end.
        if (typeof NA.webconfig.controllersRelativePath !== 'undefined') {
            NA.webconfig.controllersRelativePath = NA.webconfig.controllersRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.controllersRelativePath = 'controllers/';
        }

        // Path to template.
		if (typeof NA.webconfig.templatesRelativePath !== 'undefined') {
            NA.webconfig.templatesRelativePath = NA.webconfig.templatesRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.templatesRelativePath = 'templates/';
        }

		// Path to components for include.
        if (typeof NA.webconfig.componentsRelativePath !== 'undefined') {
            NA.webconfig.componentsRelativePath = NA.webconfig.componentsRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.componentsRelativePath = 'components/';
        }

		// Path to public assets.
        if (typeof NA.webconfig.assetsRelativePath !== 'undefined') {
            NA.webconfig.assetsRelativePath = NA.webconfig.assetsRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.assetsRelativePath = 'assets/';
        }

        // Path to generate html assets.
        if (typeof NA.webconfig.generatesRelativePath !== 'undefined') {
            NA.webconfig.generatesRelativePath = NA.webconfig.generatesRelativePath.replace(regex, '') + path.sep;
        } else {
            NA.webconfig.generatesRelativePath = 'generates/';
        }

        // Adding path to original url.
        if (typeof NA.webconfig.urlRelativeSubPath !== 'undefined') {
            NA.webconfig.urlRelativeSubPath = NA.webconfig.urlRelativeSubPath.replace(/\/$/g, '');
        } else {
            NA.webconfig.urlRelativeSubPath = '';
        }

        // Session Initialisation.

        // Change listening port.
		NA.webconfig.httpPort = process.env.PORT || NA.webconfig.httpPort || 80;

		if (commander.httpPort) { NA.configuration.httpPort = commander.httpPort; }

		if (NA.configuration.httpPort) { NA.webconfig.httpPort = NA.configuration.httpPort; }

        // Change hostname and port into website url
        NA.webconfig.urlPort = NA.webconfig.urlPort || NA.webconfig.httpPort;
        NA.webconfig.urlHostname = NA.webconfig.urlHostname || NA.webconfig.httpHostname;

		NA.webconfig.urlWithoutFileName = 'http' + ((NA.webconfig.httpSecure) ? 's' : '') + '://' + NA.webconfig.urlHostname + ((NA.webconfig.urlPort !== 80) ? ':' + NA.webconfig.urlPort : '') + '/';
    };

})(NA);





/*------------------------------------*\
    $%GLOBAL FUNCTIONS
\*------------------------------------*/

(function (publics) {
    "use strict";

    publics.ifFileExist = function (physicalPath, fileName, callback) {
        var fs = NA.modules.fs;

        fs.stat(physicalPath + fileName, function (error) {
            var data = {
                physicalPath: physicalPath,
                fileName: fileName
            }

            if (error && error.code === 'ENOENT') {
                console.log(NA.appLabels.ifFileExist.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                process.kill(process.pid);
            }

            callback();
        });
    };

})(NA);





/*------------------------------------*\
    $%NODE MODULES
\*------------------------------------*/

(function (publics) {
    "use strict";

    var privates = {};

    publics.loadListOfNativeModules = function () {
        var modules = {};

        modules.child_process = require('child_process');
        modules.fs = require('fs');
        modules.path = require('path');
        modules.http = require('http');

        publics.modules = modules;
    };

    privates.loadListOfRequiredNpmModules = function () {
        publics.modules.express = require('express');
        publics.modules.session = require('express-session');
        publics.modules.bodyParser = require('body-parser');
        publics.modules.cookieParser = require('cookie-parser');
        publics.modules.extend = require('extend');
        publics.modules.connect = require('connect');
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

    privates.downloadAllModule = function (exception) {
        var execute = NA.modules.child_process.exec;

        NA.ifFileExist(NA.serverPhysicalPath, 'package.json', function () {
            console.log(NA.appLabels.downloadAllModule.moduleNotExist + " " + NA.appLabels.downloadAllModule.downloadStarting + "(" + exception + ")");

            execute('npm --prefix ' + NA.serverPhysicalPath + ' install -l', function (error, stdout, stderr) {
                if (!error) {
                    console.log(NA.appLabels.downloadAllModule.installationDone + " " + NA.appLabels.downloadAllModule.restartRequired);

                    // Kill current process
                    process.kill(process.pid);
                } else {
                    console.log(error);
                }
            });
        });
    };

    publics.moduleRequired = function (callback) {
        try {
            privates.loadListOfRequiredNpmModules();
            callback();
        } catch (exception) {
            if (exception.code === 'MODULE_NOT_FOUND') {
                privates.downloadAllModule(exception);
            }
        }
    };

})(NA);





/*------------------------------------*\
    $%WEB SERVER
\*------------------------------------*/

(function (publics) {
    "use strict";

    var privates = {};

    publics.startingHttpServer = function () {
        var express = NA.modules.express,
            favicon = NA.modules.favicon,
            commander = NA.modules.commander,
            compress = NA.modules.compress,
            connect = NA.modules.connect,
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

    privates.redirect = function (optionsPath, request, response) {
        var location;

        if (optionsPath.regExp) {
            location = optionsPath.redirect.replace(/\$([0-9]+)\$/g, function (regex, matches) { return request.params[matches]; });
        } else {
            location = optionsPath.redirect.replace(/\:([a-z0-9]+)/g, function (regex, matches) { return request.params[matches]; });
        }

        response.writeHead(optionsPath.statusCode, {
            Location: location
        });

        response.end();
    };

    privates.request = function (path, options) {
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
                    privates.redirect(options[path], request, response);
                } else {
                    NA.render(path, options, request, response);
                }
            });
        }

        // Execute Post
        if (postSupport) {
            NA.httpServer.post(objectPath, function (request, response) {
                if (options[path].redirect && options[path].statusCode) {
                    privates.redirect(options[path], request, response);
                } else {
                    NA.render(path, options, request, response);
                }
            });
        }
    };

    publics.pageNotFound = function () {
        if (NA.webconfig.pageNotFound && NA.webconfig.urlRewriting[NA.webconfig.pageNotFound]) {
            var pageNotFound = NA.webconfig.urlRewriting[NA.webconfig.pageNotFound],
                pageNotFoundUrl = NA.webconfig.pageNotFound;

            if (pageNotFound.url) {
                pageNotFoundUrl = pageNotFound.url;
            }

            NA.httpServer.get("*", function (request, response) {
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    privates.redirect(pageNotFound, request, response);
                } else {
                    NA.render(pageNotFoundUrl, NA.webconfig.urlRewriting, request, response);
                }
            })
            NA.httpServer.post("*", function (request, response) {
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    privates.redirect(pageNotFound, request, response);
                } else {
                    NA.render(pageNotFoundUrl, NA.webconfig.urlRewriting, request, response);
                }
            });
        }
    };

    publics.urlRewritingPages = function () {
        var commander = NA.modules.commander;

        if (commander.generate) { NA.configuration.generate = commander.generate; }
        
        if (!NA.configuration.generate) {       
            for (var currentUrl in NA.webconfig.urlRewriting) {
                privates.request(currentUrl, NA.webconfig.urlRewriting);
            }
        }
    };

})(NA);





/*------------------------------------*\
    $%FRONT-END PART
\*------------------------------------*/

(function (publics) {
    "use strict";

    var privates = {};

    privates.openTemplate = function (pageParameters, templatesPath, callback) {
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

    privates.openVariation = function (variationName, languageCode) {
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
            templatesPath = NA.websitePhysicalPath + NA.webconfig.templatesRelativePath + pageParameters.template,
            currentVariation = {},
            templateRenderName,
            currentPath = path;

        if (pageParameters.url) {
            currentPath = pageParameters.url;
        }

        publics.loadController(pageParameters.controller, function () {

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
                privates.openTemplate(pageParameters, templatesPath, function (data) {

                    // Generate final string Render.
                    try {
                       data = ejs.render(data, currentVariation);
                    } catch (exception) {
                        data = exception.toString();
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

            currentVariation.filename = NA.variations.filename;

            // Opening variation file.
            if (request) { currentVariation.params = request.params; }



            currentVariation.common = privates.openVariation(NA.webconfig.commonVariation, currentVariation.languageCode);
            if (currentVariation.languageCode) {
                currentVariation.common = extend(true, privates.openVariation(NA.webconfig.commonVariation), currentVariation.common);
            }

            currentVariation.specific = privates.openVariation(pageParameters.variation, currentVariation.languageCode);
            if (currentVariation.languageCode) {
                currentVariation.specific = extend(true, privates.openVariation(pageParameters.variation), currentVariation.specific);
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

    var privates = {};

    privates.openController = function () {
        NA.nodeModulesPath = NA.websitePhysicalPath + 'node_modules/';
        if (typeof NA.websiteController[NA.webconfig.commonController].loadModules !== 'undefined') {
            NA = NA.websiteController[NA.webconfig.commonController].loadModules(NA) || NA;
        }
    };

    publics.loadListOfExternalModules = function (callback) {
        publics.loadController(NA.webconfig.commonController, function () {
            callback();
        });
    };

    publics.loadController = function (controller, callback) {
        var commonControllerPath = NA.websitePhysicalPath + NA.webconfig.controllersRelativePath + controller,
            dataError = {};

        if (typeof controller !== 'undefined') {
            try {
                NA.websiteController[controller] = require(commonControllerPath);
                privates.openController();
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

(function (publics) {

    publics.urlGeneratingPages = function () {
        var commander = NA.modules.commander;

        if (commander.generate) { NA.configuration.generate = commander.generate; }

        if (NA.configuration.generate) {
            for (var currentUrl in NA.webconfig.urlRewriting) {
                NA.render(currentUrl, NA.webconfig.urlRewriting);
            }
        }     
    };

    publics.emulatedIndexPage = function () {
        var commander = NA.modules.commander;

        if (commander.generate) { NA.configuration.generate = commander.generate; }

        if (!NA.configuration.generate) {
            if (NA.webconfig.indexPage) {

                NA.httpServer.get(NA.webconfig.urlRelativeSubPath + '/', function (request, response) {
                    var data = {};

                        data.render = '';

                    for (var page in NA.webconfig.urlRewriting) {

                        data.page = page;
                        if (NA.webconfig.urlRewriting[page].url) {
                            data.page = NA.webconfig.urlRewriting[page].url;
                        }

                        if (NA.webconfig.urlRewriting.hasOwnProperty(page)) {
                            data.render += NA.appLabels.emulatedIndexPage.line.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; });
                        }
                    }

                    response.writeHead(200, NA.appLabels.emulatedIndexPage.charsetAndType);
                    response.write(NA.appLabels.emulatedIndexPage.data.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                    response.end();
                });
            }
        }
    };

    NA.saveTemplateRender = function (data, templateRenderName) {
        var fs = NA.modules.fs,
            cheerio = NA.modules.cheerio,
            mkpath = NA.modules.mkpath,
            path = NA.modules.path,
            pathToSaveFileComplete = NA.websitePhysicalPath + NA.webconfig.generatesRelativePath + templateRenderName,
            pathToSaveFile = path.dirname(pathToSaveFileComplete),
            $ = cheerio.load(data),
            deeper,
            newBase = "";

        deeper = templateRenderName.split('/').length - 1;
        if (templateRenderName[0] === '/') {
            deeper = templateRenderName.split('/').length - 2;
        }

        for (var i = 0; i < deeper; i++) {
            newBase += '../';
        }

        $("base").attr("href", newBase);

        // Create file render.
        mkpath(pathToSaveFile, function (error) {
            var dataError = {},
                innerHTML = $.html();

            // If source is initialment not a HTML content, keep initial data content.
            if (data.trim().match(/<\/html>$/g) === null) { innerHTML = data; }

            dataError.templateRenderName = path.normalize(templateRenderName);
            dataError.pathToSaveFile = path.normalize(pathToSaveFile);

            if (error) throw error;

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
		        	NA.urlRewritingPages();
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

// With command tools.

if (require.main === module) {
	NA.init();
}

// With require.

module.exports = NA;