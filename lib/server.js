/*------------------------------------*\
	WEB SERVER
\*------------------------------------*/
/* jslint node: true */

/**
 * Inform CLI when the server is up.
 * @private
 * @function cliServerUp
 * @memberOf NA~
 * @param {NA}     NA        NodeAtlas instance.
 * @param {string} urlOutput URL default access for website.
 * @param {string} message   Details provide with URL.
 */
function cliServerUp(NA, urlOutput, message) {
	var limit = Math.max(message.length + 2, urlOutput.length + 7),
		separator = "",
		i;

	for (i = 0; i < limit; i++) {
		separator += "=";
	}

	NA.log("");
	NA.log("\u001B[32m", separator);
	NA.log(" " + message);
	NA.log("\u001B[32m", " URL: \u001B[31m" + urlOutput);
	NA.log("\u001B[32m", separator);
	NA.log("");
}

/**
 * Calculate the url output for simple web server.
 * @private
 * @function simpleServerUrlOutput
 * @memberOf NA~
 * @param {NA}     NA       NodeAtlas instance.
 * @param {number} httpPort Port used by application.
 * @returns The url Output.
 */
function simpleServerUrlOutput(NA, httpPort) {
	var url = NA.modules.url,
		hostname = NA.configuration.httpHostname || process.env.IP_ADDRESS || "localhost",
		http = (httpPort === 80 && !NA.configuration.httpSecure),
		https = (httpPort === 443 && NA.configuration.httpSecure),
		port = http || https ? "" : ":" + httpPort,
		s = (NA.configuration.httpSecure ? "s" : ""),
		path = (typeof NA.configuration.browse === "string") ? NA.configuration.browse : "";

	return url.resolve("http" + s + '://' + hostname + port + "/", path);
}

/**
 * Listen the port.
 * @private
 * @function serverListener
 * @memberOf NA~
 * @param {NA}     NA          NodeAtlas instance.
 * @param {number} httpPort    Port used by application.
 * @param {number} urlOutput   The url Output.
 * @param {number} messageCode For find the correct JSON message.
 * @param {NA~callback} next   After server listenning.
 */
function serverListener(NA, httpPort, urlOutput, messageCode, next) {
	var path = NA.modules.path;

	/* Listen HTTP(s) request. */
	NA.server.listen(httpPort, function () {
		var data = {
				httpPort: httpPort,
				path: path.join(NA.serverPath, NA.webconfigName)
			},
			message = NA.cliLabels.running[messageCode].replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; });

		/* Inform CLI the server is running. */
		cliServerUp(NA, urlOutput, message);

		/* Some action after server listening */
		if (next) {
			next();
		}

		/* After website was started. */
		if (NA.afterRunning) {
			NA.afterRunning.call(NA);
		}
	});
}

/**
 * Catch error from server.
 * @private
 * @function errorServer
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function serverError(NA) {

	/* Catch error. */
	NA.server.on("error", function (error) {
		if (error.syscall !== 'listen') {
			throw error;
		}

		/* In case of error. */
		switch (error.code) {
			case 'EACCES':
				NA.log(NA.cliLabels.running.portRequiresPrivileges.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return error[matches]; }));
				/* Kill current process. */
				process.exit(1);
				break;
			case 'EADDRINUSE':
				NA.log(NA.cliLabels.running.portAlreadyListened.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return error[matches]; }));
				/* Kill current process. */
				process.exit(1);
				break;
			default:
				throw error;
		}
	});
}

/**
 * Set information to avoid cache.
 * @private
 * @function noCache
 * @memberOf NA~
 * @param {NA}      NA            NodeAtlas instance.
 * @param {boolean} nocache       No cache if set to true.
 * @param {Object}  staticOptions All options for publics file cache.
 */
function noCache(NA, nocache, staticOptions) {
	/* No Cache */
	if (nocache) {
		NA.express.set("etag", false);
		NA.express.get("/*", function(request, response, next) {
			response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
			response.setHeader("Pragma", "no-cache");
			response.setHeader("Expires", 0);
			next();
		});
		if (staticOptions) {
			staticOptions.maxAge = 0;
			staticOptions.etag = false;
			staticOptions.lastModified = false;
		}
	}
	if (staticOptions) {
		return staticOptions;
	}
}

/**
 * Run project folder with targeted directory (without webconfig) as a « public » directory.
 * @private
 * @function simpleWebServer
 * @memberOf NA#
 * @this NA
 */
exports.simpleWebServer = function () {
	var NA = this,
		fs = NA.modules.fs,
		path = NA.modules.path,
		http = NA.modules.http,
		https = NA.modules.https,
		express = NA.modules.express,
		compress = NA.modules.compress,
		staticOptions = { maxAge: 86400000 * 30 },
		opn = NA.modules.opn,
		httpPort = NA.configuration.httpPort || process.env.PORT || (NA.configuration.httpSecure ? 443 : 80),
		urlOutput = simpleServerUrlOutput(NA, httpPort);

	/* Configure the server. */
	NA.express = express();

	NA.express.set("strict routing", true);
	NA.express.set("x-powered-by", false);
	NA.express.set("port", httpPort);

	staticOptions = noCache(NA, !NA.configuration.cache, staticOptions);

	/* Use gzip and others client-server data compression. */
	NA.express.use(compress());

	/* Provide all files behind possible HTTP Response in the current directory. */
	NA.express.use(express.static(NA.serverPath, staticOptions));

	/* Create HTTPs server. */
	if (NA.configuration.httpSecure && typeof NA.configuration.httpSecure === "string") {
		NA.httpsServer = https.createServer({
			key: fs.readFileSync(path.join(NA.serverPath, NA.configuration.httpSecure + ".key"), "utf-8"),
			cert: fs.readFileSync(path.join(NA.serverPath, NA.configuration.httpSecure + ".crt"), "utf-8")
		}, NA.express);
	}

	NA.httpServer = http.createServer(NA.express);
	NA.server = NA.httpsServer || NA.httpServer;

	/* Listenning HTTP request. */
	serverListener(NA, httpPort, urlOutput, "publicMode", function () {

		/* Open url provided at the default page in a tab of default system browser. */
		if (NA.configuration.browse) {
			opn(urlOutput);
		}
	});

	/* Catche error from Server. */
	serverError(NA);

};

/**
 * Start a real NodeAtlas Server.
 * @public
 * @function nodeAtlasWebServer
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Passed to the next function.
 * @param {NA~fallback} fallback Called if you want generate mode.
 */
exports.nodeAtlasWebServer = function (next, fallback) {
	var NA = this,
		express = NA.modules.express,
		fs = NA.modules.fs,
		path = NA.modules.path,
		http = NA.modules.http,
		https = NA.modules.https;

	/**
	 * Instance of Express.js module.
	 * @public
	 * @function express
	 * @memberOf NA#
	 */
	NA.express = express();

	/* Configure the server. */
	NA.express.set("strict routing", true);
	NA.express.set("x-powered-by", false);

	/* Change Engine */
	if (NA.webconfig.engine) {
		NA.express.set("view engine", NA.webconfig.engine);
		NA.express.set("views", path.join(NA.serverPath, NA.webconfig.viewsRelativePath));
	}

	noCache(NA, !NA.webconfig.cache);

	if (typeof NA.webconfig.httpSecure !== "boolean" && NA.webconfig.httpSecureKeyRelativePath && NA.webconfig.httpSecureCertificateRelativePath) {

		/**
		 * The HTTPs server if exist.
		 * @public
		 * @function httpsServer
		 * @memberOf NA#
		 * @default undefined
		 */
		NA.httpsServer = https.createServer({
			key: fs.readFileSync(path.join(NA.serverPath, NA.webconfig.httpSecureKeyRelativePath), 'utf-8'),
			cert: fs.readFileSync(path.join(NA.serverPath, NA.webconfig.httpSecureCertificateRelativePath), 'utf-8')
		}, NA.express);
	}

	/**
	 * The HTTP server.
	 * @public
	 * @function httpServer
	 * @memberOf NA#
	 */
	NA.httpServer = http.createServer(NA.express);

	/**
	 * The Server used to listen.
	 * @public
	 * @function server
	 * @memberOf NA#
	 */
	NA.server = NA.httpsServer || NA.httpServer;

	/* Allow you to parse request and response. */
	NA.initMiddlewares();

	/* Allow you to parse the Less files. */
	NA.initLessProcess();

	/* Allow you to parse the Styl files. */
	NA.initStylusProcess();

	/* Allow you to use Session variables. */
	NA.initSessions(next, fallback);
};

/**
 * Add middleware for parse request and response.
 * @private
 * @function initMiddlewares
 * @memberOf NA#
 * @this NA
 */
exports.initMiddlewares = function () {
	var NA = this,
		path = NA.modules.path,
		compress = NA.modules.compress,
		bodyParser = NA.modules.bodyParser,
		cookieParser = NA.modules.cookieParser,
		middlewares,
		i,
		l;

	/* Use gzip and others client-server data compression. */
	NA.express.use(compress());

	/* Allow you to parse the x-www-form-urlencoded format. */
	NA.express.use(bodyParser.urlencoded({ extended: true }));

	/* Allow you to parse the JSON format. */
	NA.express.use(bodyParser.json());

	/* Allow you to parse the Cookie data format. */
	NA.express.use(cookieParser());

	function hasMiddlewaresFile(callback) {
		if (

		/**
		 * Allow you to set Express middleware for all routes.
		 * @public
		 * @alias middlewares
		 * @type {string}
		 * @memberOf NA#webconfig
		 */
		NA.webconfig.middlewares) {
			middlewares = [];
			if (NA.webconfig.middlewares instanceof Array) {
				NA.webconfig.middlewares.forEach(function (middleware) {
					callback(require(path.join(NA.serverPath, NA.webconfig.middlewaresRelativePath, middleware)).bind(NA));
				});
			} else {
				callback(require(path.join(NA.serverPath, NA.webconfig.middlewaresRelativePath, NA.webconfig.middlewares)).bind(NA));
			}
		}
	}

	hasMiddlewaresFile(function (file) {
		var content;
		try {
			content = file();
		} catch (e) {
			content = "";
		}

		if (content instanceof Array) {
			middlewares = middlewares.concat(content);
		} else {
			middlewares.push(file);
		}
	});

	if (middlewares) {
		for (i = 0, l = middlewares.length; i < l; i++) {
			NA.express.use(middlewares[i]);
		}
	}
};

/**
 * Source Map for Less files.
 * @private
 * @function lessStoreSourcemap
 * @memberOf NA~
 * @param {NA}     NA    NodeAtlas instance.
 * @param {RegExp} regex Used for change pathname.
 */
function lessStoreSourcemap(NA, regex) {
	var fs = NA.modules.fs,
		path = NA.modules.path,
		mkpath = NA.modules.mkpath,
		lessMiddlewareUtilities = NA.modules.lessMiddlewareUtilities;

	return function (pathname, sourcemap) {
		if (NA.webconfig.urlRelativeSubPath) {
			pathname = pathname.replace(regex, path.join(NA.serverPath, NA.webconfig.assetsRelativePath) + path.sep);
		}
		fs.exists(path.join(pathname.replace(/\.css\.map/g,".less")), function (exists) {
			if (exists) {
				mkpath(path.dirname(pathname), function (error) {
					if (error) {
						lessMiddlewareUtilities.lessError(error);
						return;
					}
					fs.writeFile(pathname, sourcemap, 'utf8', function () {});
				});
			}
		});
	};
}

/**
 * CSS generate from Less files.
 * @private
 * @function lessStoreCss
 * @memberOf NA~
 * @param {NA}     NA    NodeAtlas instance.
 * @param {RegExp} regex Used for change pathname.
 */
function lessStoreCss(NA, regex) {
	var fs = NA.modules.fs,
		path = NA.modules.path,
		mkpath = NA.modules.mkpath;

	return function (pathname, css, req, next) {
		if (NA.webconfig.urlRelativeSubPath) {
			pathname = pathname.replace(regex, path.join(NA.serverPath, NA.webconfig.assetsRelativePath) + path.sep);
		}

		mkpath(path.dirname(pathname), function (error) {
			if (error) {
				return next(error);
			}

			fs.writeFile(pathname, css, 'utf8', next);
		});
	};
}

/**
 * Active Mechanism for generate Less files.
 * @private
 * @function initLessProcess
 * @memberOf NA#
 * @this NA
 */
exports.initLessProcess = function () {
	var NA = this,
		lessMiddleware = NA.modules.lessMiddleware,
		path = NA.modules.path,
		prefixLess = new NA.modules.prefixLess(),
		compressValue = false,
		sourceMapValue = true,
		regex = new RegExp(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, NA.webconfig.urlRelativeSubPath).replace(/(\\|\/)/g, '\\' + path.sep), 'g'),
		renderOptions = {
			compress: (NA.webconfig.less && NA.webconfig.less.compress) || compressValue,
			sourceMap: (NA.webconfig.less && NA.webconfig.less.sourceMap) || sourceMapValue
		};

	if (NA.webconfig.less && NA.webconfig.less.autoprefix) {
		renderOptions.plugins = [prefixLess];
	}

	if (NA.webconfig.less && !NA.webconfig.cssBundlingBeforeResponse) {

		/* Generate Less on the fly during the development phase. */
		NA.express.use(lessMiddleware(path.join(NA.webconfig.assetsRelativePath), {
			dest: path.join(NA.webconfig.assetsRelativePath),
			pathRoot: path.join(NA.serverPath),
			preprocess: {
				path: function (pathname) {
					if (NA.webconfig.urlRelativeSubPath) {
						pathname = pathname.replace(regex, path.join(NA.serverPath, NA.webconfig.assetsRelativePath) + path.sep);
					}
					return pathname;
				}
			},
			postprocess: {
				css: function (css, req) {
					return css + "/*# sourceMappingURL=" + req.url.replace(/\.css$/i, '.css.map') + " */";
				}
			},
			storeSourcemap: lessStoreSourcemap(NA, regex),
			storeCss: lessStoreCss(NA, regex),
			render: renderOptions
		}));
	}
};

/**
 * Active Mechanism for generate Stylus files.
 * @private
 * @function initStylusProcess
 * @memberOf NA#
 * @this NA
 */
exports.initStylusProcess = function () {
	var NA = this,
		path = NA.modules.path,
		stylusMiddleware,
		compressValue = false,
		sourceMapValue = {
			"inline": true
		},
		forceValue = false,
		firebugValue = false,
		linenosValue = false;

	if (NA.webconfig.stylus && !NA.webconfig.cssBundlingBeforeResponse) {
		stylusMiddleware = NA.modules.stylus.middleware({
			src: path.join(NA.serverPath, NA.webconfig.assetsRelativePath),
			compile: function (str, src) {
				var stylusFn = NA.modules.stylus(str);

				if (NA.webconfig.stylus.autoprefix) {
					stylusFn = stylusFn.use(NA.modules.prefixStylus());
				}

				stylusFn = stylusFn
					.set('filename', src)
					.set('src', path.join(NA.serverPath, NA.webconfig.assetsRelativePath))
					.set('dest', path.join(NA.serverPath, NA.webconfig.assetsRelativePath))
					.set('firebug', NA.webconfig.stylus.firebug || firebugValue)
					.set('force', NA.webconfig.stylus.force || forceValue)
					.set('linenos', NA.webconfig.stylus.linenos || linenosValue)
					.set('sourcemap', NA.webconfig.stylus.sourceMap || sourceMapValue)
					.set('compress', NA.webconfig.stylus.compress || compressValue);

				return stylusFn;
			}
		});

		/* Generate Stylus on the fly during the development phase. */
		NA.express.use(function (req, res, next) {
			var regex = new RegExp("^" + NA.webconfig.urlRelativeSubPath, 'g'),
				request = {
					url: req.url.replace(regex, ""),
					method: req.method
				};

			stylusMiddleware(request, res, next);
		});
	}
};

/**
 * Set the Sessions variables possibility.
 * @private
 * @function initSessions
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Passed to the next function.
 * @param {NA~fallback} fallback Called if you want generate mode.
 */
exports.initSessions = function (next, fallback) {
	var NA = this,
		optionSession = {},
		session = NA.modules.session;

	/**
	 * Name for Session cookie of connected user.
	 * @public
	 * @alias sessionKey
	 * @type {string}
	 * @memberOf NA#webconfig
	 * @default "nodeatlas.sid"
	 */
	optionSession.key = NA.webconfig.sessionKey || "nodeatlas.sid";

	/**
	 * Secret for Session cookie of connected user.
	 * @public
	 * @alias sessionSecret
	 * @type {string}
	 * @memberOf NA#webconfig
	 * @default '1234567890bépo'.
	 */
	optionSession.secret = NA.webconfig.sessionSecret || "1234567890bépo";
	optionSession.saveUninitialized = true;
	optionSession.resave = true;

	if (NA.webconfig.session) {

		/**
		 * Use a more complexe session cookie options.
		 * Replace `NA#webconfig.sessionKey` and `NA#webconfig.sessionSecret` if set.
		 * @public
		 * @alias session
		 * @type {Object}
		 * @memberOf NA#webconfig
		 * @see {@link https://github.com/expressjs/session Session Middleware}
		 */
		optionSession = NA.webconfig.session;
	}

	/**
	 * A default session loaded with `NA#webconfig.sessionKey` and `NA#webconfig.sessionSecret` or `NA.webconfig#sessionKey` and `NA#webconfig.session`.
	 * @public
	 * @alias sessionStore
	 * @type {Object}
	 * @memberOf NA#
	 * @see {@link https://github.com/expressjs/session Session Middleware}
	 */
	NA.sessionStore = new session.MemoryStore();

	/* Use the `NA.controllers[<controller>].setSessions(...)` function if set... */
	if (typeof NA.controllers[NA.webconfig.controller] !== 'undefined' &&
		typeof NA.controllers[NA.webconfig.controller].setSessions !== 'undefined') {

			/**
			 * Define this function for configure sessions of application. Only for `common` controller file.
			 * @function setSessions
			 * @memberOf NA#controllers[]
			 * @param {NA~callback} next Next steps after session is setted.
			 */
			NA.controllers[NA.webconfig.controller].setSessions.call(NA, function () {
				NA.initSockets(session, optionSession, next, fallback);
			});
	/* ...else, just continue. */
	} else {
		NA.initSockets(session, optionSession, next, fallback);
	}
};

/**
 * Deliver NA.io to the client-side.
 * @private
 * @function addFrontSockets
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function addFrontSockets(NA) {
	var fs = NA.modules.fs,
		url = NA.modules.url,
		path = NA.modules.path;

	// Deliver the `NA.io` object to client-side.
	if (NA.webconfig.socketClientFile) {
		NA.express.get(url.format(path.join("/", NA.webconfig.urlRelativeSubPath, NA.webconfig.socketClientFile)), function (request, response) {
			response.setHeader("Content-type", "text/javascript; charset=utf-8");
			fs.readFile(path.join(NA.nodeatlasPath, "src", "socket.io.js"), "utf-8", function (err, content) {
				if (err) {
					throw err;
				}

				response.write(content
					.replace(/%urlRelativeSubPath%/g, NA.webconfig.urlRelativeSubPath.slice(1))
					.replace(/%urlRoot%/g, NA.webconfig.urlRoot));
				response.end();
			});
		});
	}
}

/**
 * Set the Hooks for Controllors.
 * @private
 * @function addBackSockets
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function addBackSockets(NA) {
	var path = NA.modules.path,
		controllers = {},
		controller;

	/* Use the `NA.controllers[<controller>].setSockets(...)` function if set... */
	if (typeof NA.controllers[NA.webconfig.controller] !== 'undefined' &&
		typeof NA.controllers[NA.webconfig.controller].setSockets !== 'undefined') {

			/**
			 * Define this function for set WebSockets from both `common` and `specific` controller.
			 * @function setSockets
			 * @memberOf NA#controllers[]
			 */
			NA.controllers[NA.webconfig.controller].setSockets.call(NA);
	}

	// Global sockets
	NA.forEach(NA.webconfig.routes, function (route) {
		if (typeof route === "string") {
			route = NA.webconfig.routes[route];
		}
		if (route.controller) {
			controllers[route.controller] = true;
		}
	});

	// Controler setSockets runned just one time.
	for (var item in controllers) {
		if (controllers.hasOwnProperty(item)) {
			/* Use the `NA.controllers[<controller>].setSockets(...)` function if set... */
			controller = require(path.join(NA.serverPath, NA.webconfig.controllersRelativePath, item));
			if (controller.setSockets) {
				controller.setSockets.call(NA);
			}
		}
	}
}

/**
 * Allow you to set your websocket back-end behavior.
 * @private
 * @function initSockets
 * @memberOf NA#
 * @this NA
 * @param {Object} session       Session Object.
 * @param {Object} optionSession Property for Object Session.
 * @param {NA~callback} next Passed to the next function.
 * @param {NA~fallback} fallback Called if you want generate mode.
 */
exports.initSockets = function (session, optionSession, next, fallback) {
	var NA = this,
		server = NA.httpsServer || NA.httpServer,
		socketio = NA.modules.socketio,
		secure = NA.webconfig.httpSecure ? true : false,
		optionIo = (NA.webconfig.urlRelativeSubPath) ? {
			path: NA.webconfig.urlRelativeSubPath + "/socket.io",
			secure: secure
		} : {
			secure: secure
		},
		fullOptionIo = {};

		Object.assign(fullOptionIo, optionIo,

			/**
			 * Allow you to extend Socket.IO options object.
			 * @public
			 * @alias socketServerOptions
			 * @type {Object}
			 * @memberOf NA#webconfig
			 */
			NA.webconfig.socketServerOptions);

	/**
	 * Instance of Socket.io module.
	 * @public
	 * @function express
	 * @memberOf NA#
	 */
	NA.io = socketio(server, fullOptionIo);

	optionSession.store = NA.sessionStore;
	NA.webconfig.session = optionSession;

	/* Create a cookie Session. */
	NA.express.use(session(optionSession));

	/* Sync cookie Session with socket.io. */
	NA.io.use(function (socket, next) {
		session(optionSession)(socket.request, socket.request.res, next);
	});

	/* Deliver io to the client-side. */
	addFrontSockets(NA);

	/* Set Hooks for controllers. */
	addBackSockets(NA);

	/* Allow you to set configurations. */
	NA.initConfigurations(next, fallback);
};

/**
 * Allow you to configure your own modules configuration.
 * @private
 * @function initConfigurations
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Passed to the next function.
 * @param {NA~fallback} fallback Called if you want generate mode.
 */
exports.initConfigurations = function (next, fallback) {
	var NA = this;

	/* Use the `NA.controllers[<controller>].setConfigurations(...)` function if set... */
	if (typeof NA.controllers[NA.webconfig.controller] !== 'undefined' &&
		typeof NA.controllers[NA.webconfig.controller].setConfigurations !== 'undefined') {

			/**
			 * Define this function for configure all modules of your application. Only for `common` controller file.
			 * @function setConfigurations
			 * @memberOf NA#controllers[]
			 * @param {NA~callback} next Next steps after configuration is done.
			 */
			NA.controllers[NA.webconfig.controller].setConfigurations.call(NA, function () {
				NA.initServer(next, fallback);
			});
	/* ...else, just continue. */
	} else {
		NA.initServer(next, fallback);
	}
};

/**
 * Run the Server of NodeAtlas.
 * @private
 * @function initServer
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Called after running of server.
 * @param {NA~fallback} fallback Called if you want generate mode.
 */
exports.initServer = function (next, fallback) {
	var NA = this,
		opn = NA.modules.opn,
		path = NA.modules.path,
		url = NA.modules.url,
		urlOutput = url.resolve(NA.webconfig.urlRoot, path.join(NA.webconfig.urlRelativeSubPath, ((typeof NA.configuration.browse === 'string') ? NA.configuration.browse : "")));

	NA.express.set("port", NA.webconfig.httpPort);

	if (!NA.configuration.generate) {
		serverListener(NA, NA.webconfig.httpPort, urlOutput, "isRunning", function () {

			/* If index index exist, we go to url later. */
			if (NA.configuration.browse && !NA.webconfig.index) {
				opn(urlOutput);
			}

			next();
		});
	} else {
		fallback();
	}

	/* Catche error from Server. */
	serverError(NA);
};