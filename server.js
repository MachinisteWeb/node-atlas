/** Creation of Main Object */
var NA = {};

/** Function depending on application global var */
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

        try {
            if (typeof commander.directory !== 'string') {
                publics.websitePhysicalPath = process.cwd() + path.sep
            } else {
                publics.websitePhysicalPath = commander.directory.replace(regex, '') + path.sep
            }
            
            publics.webconfigName = 'webconfig.json';
            if (commander.webconfig) { NA.webconfigName = commander.webconfig; }
        } catch (exception) {
            console.log(exception);
        }
    };

    publics.lineCommandConfiguration = function () {
        var commander = NA.modules.commander;

        commander
            .version('0.0.1')
            .option(NA.appLabels.commander.run.command, NA.appLabels.commander.run.description)
            .option(NA.appLabels.commander.directory.command, NA.appLabels.commander.directory.description, String)
            .option(NA.appLabels.commander.webconfig.command, NA.appLabels.commander.webconfig.description, String)
            .option(NA.appLabels.commander.httpPort.command, NA.appLabels.commander.httpPort.description, String)
            .option(NA.appLabels.commander.generate.command, NA.appLabels.commander.generate.description, String)
            .parse(process.argv);
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
        NA.webconfig.httpHostname = process.env.IP_ADDRESS || NA.webconfig.httpHostname || 'localhost';

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
        if (typeof NA.webconfig.session !== 'undefined') {
            // Custom Session will be Here.
            NA.webconfig.session.sessionStore = new connect.session.MemoryStore();
            (NA.webconfig.session.secret) ? NA.webconfig.session.secret : '1234567890bépo'; 
            (NA.webconfig.session.key) ? NA.webconfig.session.key : 'nodeatlas.sid'; 
        } else {
            NA.webconfig.session = {};
            NA.webconfig.session.sessionStore = new connect.session.MemoryStore();
            NA.webconfig.session.secret = '1234567890bépo';
            NA.webconfig.session.key = 'nodeatlas.sid';
        }

        // Change listening port.
		NA.webconfig.httpPort = process.env.PORT || NA.webconfig.httpPort || 80;
		if (commander.port) { NA.webconfig.httpPort = commander.port; }

        // Change hostname and port into website url
        NA.webconfig.urlPort = NA.webconfig.urlPort || NA.webconfig.httpPort;
        NA.webconfig.urlHostname = NA.webconfig.urlHostname || NA.webconfig.httpHostname;

        // For use jQuery server-side.
        NA.webconfig.jQueryVersion = NA.webconfig.jQueryVersion || 'http://code.jquery.com/jquery.js';

		NA.webconfig.urlWithoutFileName = 'http' + ((NA.webconfig.httpSecure) ? 's' : '') + '://' + NA.webconfig.urlHostname + ((NA.webconfig.urlPort !== 80) ? ':' + NA.webconfig.urlPort : '') + '/';
    };

})(NA);

/** Function globals */
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

/** Function depending on Templating */
(function (publics) {
    "use strict";

    publics.emulatedIndexPage = function () {
        var commander = NA.modules.commander;

        if (!commander.generate) {
            if (NA.webconfig.indexPage) {
    	        NA.httpServer.get(NA.webconfig.urlRelativeSubPath + '/', function (request, response) {
    	            var data = {};

     					data.render = '';

    	            for (var page in NA.webconfig.urlRewriting) {
    		            data.page = page;

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

    publics.templateEngineConfiguration = function () {
    	var ejs = NA.modules.ejs;

    	publics.variations = {};

    	NA.variations.filename = NA.websitePhysicalPath + NA.webconfig.componentsRelativePath + "all-component.here";

    	// Set pattern for use EJS.
        ejs.open = NA.webconfig.templateEngineOpenPattern || ejs.open;
        ejs.close = NA.webconfig.templateEngineClosePattern || ejs.close;
    };

})(NA);

/** Function depending on Node modules */
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
        publics.modules.connect = require('connect');
        publics.modules.commander = require('commander');
        publics.modules.open = require('open');
        publics.modules.ejs = require('ejs');
        publics.modules.mkpath = require('mkpath');
        publics.modules.jsdom = require('jsdom');
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

/** Function depending on Back-end part */
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

/** Function depending on Http Server */
(function (publics) {
    "use strict";

	var privates = {};

    publics.startingHttpServer = function () {
        var express = NA.modules.express,
            commander = NA.modules.commander,
            forceDomain = NA.modules.forceDomain,
            http = NA.modules.http,
            open = NA.modules.open;

        function atlasMiddlewares(NA) {

            publics = NA;

            NA.server.listen(NA.webconfig.httpPort, NA.webconfig.httpHostname, function () {
                var data = {};

                data.httpPort = NA.webconfig.httpPort;

                console.log(NA.appLabels.isRunning.replace(/%([-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
            });

            if (commander.run) { open(NA.webconfig.urlWithoutFileName + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "")); }
        
        }

        publics.httpServer = express();
        publics.server = http.createServer(NA.httpServer);

        // Execute custom configuration
        if (!commander.generate) {

            publics.httpServer.use(forceDomain({
                hostname: NA.webconfig.urlHostname,
                port: NA.webconfig.urlPort,
                type: 'permanent',
                protocol: 'http' + ((NA.webconfig.httpSecure) ? 's' : '')
            }));

            publics.httpServer.use(express.bodyParser());

            publics.httpServer.use(express.cookieParser());

            publics.httpServer.use(express.session({
                store: NA.webconfig.session.sessionStore,
                secret: NA.webconfig.session.secret,
                key: NA.webconfig.session.key,
                cookie: {
                    'path': '/',
                    'httpOnly': true,
                    maxAge: 60 * 60 * 1000
                }
            }));

            if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
                typeof NA.websiteController[NA.webconfig.commonController].setConfigurations !== 'undefined') {
                    NA.websiteController[NA.webconfig.commonController].setConfigurations(NA, function (NA) {
                        atlasMiddlewares(NA);
                    });
            } else {
                atlasMiddlewares(NA);
            }
        }

    };

    publics.httpServerPublicFiles = function () {
    	var express = NA.modules.express,
            commander = NA.modules.commander;

        if (!commander.generate) {
            NA.httpServer.use(NA.webconfig.urlRelativeSubPath, express["static"](NA.websitePhysicalPath + NA.webconfig.assetsRelativePath));
        }
    };

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

	privates.openVariation = function (variationName, currentVariation) {
		var fs = NA.modules.fs,
			dataError = {},
			variationsPath,
			languagePath = '';

			if (typeof currentVariation.languageCode !== 'undefined') { languagePath = currentVariation.languageCode + '/'; }
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

    privates.saveTemplateRender = function (data, templateRenderName) {
        var fs = NA.modules.fs,
            jsdom = NA.modules.jsdom,
            mkpath = NA.modules.mkpath,
            path = NA.modules.path,
            pathToSaveFileComplete = NA.websitePhysicalPath + NA.webconfig.generatesRelativePath + templateRenderName,
            pathToSaveFile = path.dirname(pathToSaveFileComplete);

        jsdom.env(data, [NA.webconfig.jQueryVersion], function (error, window) {
            var $ = window.$,
                deeper = templateRenderName.split('/').length - 2,
                newBase = "";

            for (var i = 0; i < deeper; i++) {
                newBase += '../';
            }

            $("base").attr("href", newBase);

            // Create file render.
            mkpath(pathToSaveFile, function (error) {
                var dataError = {};

                dataError.templateRenderName = path.normalize(templateRenderName);
                dataError.pathToSaveFile = path.normalize(pathToSaveFile);

                if (error) throw error;

                fs.writeFile(pathToSaveFileComplete, window.document.doctype.toString() + window.document.innerHTML, function (error) {
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
        });
    };

    publics.render = function (path, options, request, response) {
    	var ejs = NA.modules.ejs,
    		pageParameters = options[path],
    		templatesPath = NA.websitePhysicalPath + NA.webconfig.templatesRelativePath + pageParameters.template,
    		currentVariation = {},
            templateRenderName;

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
            function renderSpecific(data) {                
                if (typeof NA.websiteController[pageParameters.controller] !== 'undefined' &&
                    typeof NA.websiteController[pageParameters.controller].render !== 'undefined') {
                        NA.websiteController[pageParameters.controller].render({ data: data, NA: NA, request: request, response: response }, function (data) {
                            renderTemplate(data);
                        });
                } else {
                    renderTemplate(data);      
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
		                        renderSpecific(data);
		                    });
		            } else {
		                renderSpecific(data);
		            }
               });
            }

        	// Write file or/and send response.
            function renderTemplate(data) {                

        		// Create file and CSS.
                if (typeof response === 'undefined' || NA.webconfig.autoGenerate) {
                    templateRenderName = pageParameters.generate || path;
                    privates.saveTemplateRender(data, templateRenderName);
                }

                // Run page into browser.
                if (typeof response !== 'undefined') {
                    privates.response(request, response, data, pageParameters);
                }
            }
            
            currentVariation.languageCode = pageParameters.languageCode || NA.webconfig.languageCode;
            currentVariation.urlBasePath = NA.webconfig.urlWithoutFileName + NA.webconfig.urlRelativeSubPath.replace(/^\//g, "") + ((NA.webconfig.urlRelativeSubPath !== '') ? '/' : '');
            currentVariation.urlPath = request.protocol + "://" + request.get('host') + request.url;
            currentVariation.filename = NA.variations.filename;

            // Opening variation file.
            currentVariation.params = request.params;
            currentVariation.common = privates.openVariation(NA.webconfig.commonVariation, currentVariation);
            currentVariation.specific = privates.openVariation(pageParameters.variation, currentVariation);

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

    privates.response = function (request, response, data, pageParameters) {
        response.writeHead(
            pageParameters.statusCode || 200, 
            pageParameters.mimeType || 'text/html'
        );

        response.write(data);
        response.end();
    };

    privates.request = function (path, options) {
		var pageParameters = options[path],
			getSupport = true,
			postSupport = true;

		// Manage GET / POST support for an url.
		if (NA.webconfig.getSupport === false) { getSupport = false; }
		if (pageParameters.getSupport === false) { getSupport = false; }
		if (pageParameters.getSupport === true) { getSupport = true; }
		if (NA.webconfig.postSupport === false) { postSupport = false; }
		if (pageParameters.postSupport === false) { postSupport = false; }
		if (pageParameters.postSupport === true) { postSupport = true; }

		// Execute Get
		if (getSupport) {
 			NA.httpServer.get(NA.webconfig.urlRelativeSubPath + path, function (request, response) {
 				publics.render(path, options, request, response);
 			});
		}

		// Execute Post
		if (postSupport) {
	 		NA.httpServer.post(NA.webconfig.urlRelativeSubPath + path, function (request, response) {
	 			publics.render(path, options, request, response);
	 		});
		} 		
	};

    publics.urlRewritingPages = function () {
        var commander = NA.modules.commander;
        
        if (!commander.generate) {       
        	for (var currentUrl in NA.webconfig.urlRewriting) {
                privates.request(currentUrl, NA.webconfig.urlRewriting);
            }
        }
    };

})(NA);

/** Function depending on Generating Html Asset */
(function (publics) {

    publics.urlGeneratingPages = function () {
        var commander = NA.modules.commander;

        if (commander.generate) {
            for (var currentUrl in NA.webconfig.urlRewriting) {
                publics.render(currentUrl, NA.webconfig.urlRewriting);
            }
        }     
    };

})(NA);

/** Starting Application */
NA.loadListOfNativeModules();
NA.initGlobalVar();
NA.moduleRequired(function () {
    NA.lineCommandConfiguration();
    NA.initGlobalVarRequiredNpmModules();
    NA.initWebconfig(function () {
        NA.loadListOfExternalModules(function () {        
        	NA.startingHttpServer();
        	NA.templateEngineConfiguration(); 
        	NA.urlRewritingPages();
        	NA.httpServerPublicFiles();
        	NA.emulatedIndexPage();
            NA.urlGeneratingPages();
        });
    });
});