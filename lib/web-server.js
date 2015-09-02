/*------------------------------------*\
    $%WEB SERVER
\*------------------------------------*/

exports.simpleWebServer =  function (NA) {

    /**
     * Run NodeAtlas with targeted directory (without webconfig) as a « public » directory.
     * @public
     * @function simpleWebServer
     * @memberOf node-atlas~NA
     */
    NA.simpleWebServer = function () {
        var commander = NA.modules.commander,
            http = NA.modules.http,
            express = NA.modules.express,
            path = NA.modules.path,
            open = NA.modules.open,
            httpPort = commander.httpPort || NA.configuration.httpPort || 80;

        /* Configure the server and... */
        NA.httpServer = express();
        NA.httpServer.enable('strict routing');
        NA.server = http.createServer(NA.httpServer);

        /* ...listen HTTP request... */
        NA.server.listen(httpPort, function () {
            NA.log(NA.appLabels.publicMode);
        });

        /* Catch error. */
        NA.server.on('error', function () {
            var data = {};

            data.httpPort = httpPort;

            NA.log(NA.appLabels.portAlreadyListened.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));

            /* In case of error, kill current process. */
            process.kill(process.pid);
        });

        /* ...from « public » directory. */
        NA.httpServer.use(express.static(NA.websitePhysicalPath, { maxAge: 86400000 * 30 }));

        if (commander.browse) {
            NA.configuration.browse = commander.browse;
        }

        if (NA.configuration.browse) {
            open(path.normalize('http://localhost/' + ((typeof NA.configuration.browse === 'string') ? NA.configuration.browse : "")));
        }
    };

    return NA;
};

exports.atlasConfigurations =  function (NA) {

    /**
     * Allow you to configure your own modules configuration.
     * @public
     * @function atlasConfigurations
     * @memberOf node-atlas~NA
     * @param {Object} NA - The NodeAtlas object with new modifications.
     * @param {Object} session - Session Object.
     * @param {Object} optionSession - Property for Object Session.
     */
    NA.atlasConfigurations = function (NA, session, optionSession) {

        optionSession.store = NA.sessionStore;
        NA.webconfig.session = optionSession;

        /* Create a cookie Session. */
        NA.httpServer.use(session(optionSession));

        /* Use the `NA.websiteController[<commonController>].setConfigurations(...)` function if set... */
        if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
            typeof NA.websiteController[NA.webconfig.commonController].setConfigurations !== 'undefined') {

                /**
                 * Define this function for configure all modules of your application. Only for `common` controller file.
                 * @function setConfigurations
                 * @memberOf node-atlas~NA.websiteController[]
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
                    NA.atlasServer(NA);
                });
        /* ...else, just continue. */
        } else {
            NA.atlasServer(NA);
        }
    };

    return NA;
};

exports.atlasServer =  function (NA) {

    /**
     * Run the Server of NodeAtlas.
     * @public
     * @function atlasServer
     * @memberOf node-atlas~NA
     * @param {Object} NA - The NodeAtlas object with new modifications.
     */
    NA.atlasServer = function (NA) {
        var commander = NA.modules.commander,
            open = NA.modules.open,
            path = NA.modules.path,
            httpPort = ((NA.webconfig.httpSecure) ? 443 : 80);

        if (NA.webconfig.httpPort) {
            httpPort = NA.webconfig.httpPort;
        }

        if (NA.configuration.httpPort) {
            httpPort = NA.configuration.httpPort;
        }

        if (commander.httpPort) {
            httpPort = commander.httpPort;
        }

        /* Listen HTTP(s) request... */
        NA.server.listen(httpPort, function () {
            var data = {};

            data.httpPort = NA.webconfig.httpPort;

            NA.log(NA.appLabels.isRunning.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
        });

        /* Catch error. */
        NA.server.on('error', function () {
            var data = {};

            data.httpPort = httpPort;

            NA.log(NA.appLabels.portAlreadyListened.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));

            /* In case of error, kill current process. */
            process.kill(process.pid);
        });

        if (commander.browse) {
            NA.configuration.browse = commander.browse;
        }

        if (NA.configuration.browse) {
            open(path.join(NA.webconfig.urlWithoutFileName, NA.webconfig.urlRelativeSubPath, ((typeof NA.configuration.browse === 'string') ? NA.configuration.browse : "")));
        }
    };

    return NA;
};

exports.enableLessProcess =  function (NA) {

    /**
     * Active Mechanism for generate Less files.
     * @public
     * @function enableLessProcess
     * @memberOf node-atlas~NA
     */
    NA.enableLessProcess = function () {
        var lessMiddleware = NA.modules.lessMiddleware,
            lessMiddlewareUtilities = NA.modules.lessMiddlewareUtilities,
            fs = NA.modules.fs,
            path = NA.modules.path,
            mkpath = NA.modules.mkpath,
            compressValue = false,
            sourceMapValue = true,
            regex = new RegExp(path.join(NA.webconfig.urlRelativeSubPath).replace(/(\\|\/)/g, '\\' + path.sep), 'g');

        if (

            /**
             * Enable Less preprocessor.
             * @public
             * @alias enableLess
             * @type {boolean|Object}
             * @memberOf node-atlas~NA.webconfig
             * @default false.
             * @property {boolean} compress  - Minify the Less file.
             * @property {boolean} sourceMap - Create a sourceMap file for development.
             */
            NA.webconfig.enableLess
        ) {

            /* Generate Less on the fly during the development phase. */
            NA.httpServer.use(lessMiddleware(path.join(NA.webconfig.assetsRelativePath), {
                dest: path.join(NA.webconfig.assetsRelativePath),
                pathRoot: path.join(NA.websitePhysicalPath),
                preprocess: {
                    path: function(pathname) {
                        if (NA.webconfig.urlRelativeSubPath) {
                            pathname = pathname.replace(regex, path.sep);
                        }
                        return pathname;
                    }
                },
                postprocess: {
                    css: function(css, req) {
                        return css + "/*# sourceMappingURL=" + req.url.replace(/\.css$/i, '.css.map') + " */";
                    }
                },
                storeSourcemap: function(pathname, sourcemap) {
                    if (NA.webconfig.urlRelativeSubPath) {
                        pathname = pathname.replace(regex, path.sep);
                    }

                    mkpath(path.dirname(pathname), function (error) {
                        if (error) {
                            lessMiddlewareUtilities.lessError(error);
                            return;
                        }

                        fs.writeFile(pathname, sourcemap, 'utf8');
                    });
                },
                storeCss: function(pathname, css, req, next) {
                    if (NA.webconfig.urlRelativeSubPath) {
                        pathname = pathname.replace(regex, path.sep);
                    }

                    mkpath(path.dirname(pathname), function(error) {
                        if (error) {
                            return next(error);
                        }

                        fs.writeFile(pathname, css, 'utf8', next);
                    });
                },
                render: {
                    compress: (NA.webconfig.enableLess && NA.webconfig.enableLess.compress) || compressValue,
                    sourceMap: (NA.webconfig.enableLess && NA.webconfig.enableLess.sourceMap) || sourceMapValue
                }
            }));
        }
    };

    return NA;
};

exports.atlasSessions =  function (NA) {

    /**
     * Set the Sessions variables possibility.
     * @public
     * @function atlasSessions
     * @memberOf node-atlas~NA
     */
    NA.atlasSessions = function () {
        var optionSession = {},
            session = NA.modules.session;

        /**
         * Name for Session cookie of connected user.
         * @public
         * @alias sessionKey
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         * @default 'nodeatlas.sid'.
         */
        optionSession.key = NA.webconfig.sessionKey || 'nodeatlas.sid',

        /**
         * Secret for Session cookie of connected user.
         * @public
         * @alias sessionSecret
         * @type {string}
         * @memberOf node-atlas~NA.webconfig
         * @default '1234567890bépo'.
         */
        optionSession.secret = NA.webconfig.sessionSecret || '1234567890bépo',
        optionSession.saveUninitialized = true,
        optionSession.resave = true;

        if (NA.webconfig.session) {

            /**
             * Use a more complexe session cookie options.
             * Replace `NA.webconfig.sessionKey` and `NA.webconfig.sessionSecret` if set.
             * @public
             * @alias session
             * @type {Object}
             * @memberOf node-atlas~NA.webconfig
             * @see {@link https://github.com/expressjs/session Session Middleware}
             */
            optionSession = NA.webconfig.session;
        }

        /**
         * A default session loaded with `NA.webconfig.sessionKey` and `NA.webconfig.sessionSecret` or `NA.webconfig.sessionKey` and `NA.webconfig.session`.
         * @public
         * @alias sessionStore
         * @type {Object}
         * @memberOf node-atlas~NA
         * @see {@link https://github.com/expressjs/session Session Middleware}
         */
        NA.sessionStore = new session.MemoryStore();

        /* Use the `NA.websiteController[<commonController>].setSessions(...)` function if set... */
        if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
            typeof NA.websiteController[NA.webconfig.commonController].setSessions !== 'undefined') {

                /**
                 * Define this function for configure sessions of application. Only for `common` controller file.
                 * @function setSessions
                 * @memberOf node-atlas~NA.websiteController[]
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
                    NA.atlasConfigurations(NA, session, optionSession);
                });
        /* ...else, just continue. */
        } else {
            NA.atlasConfigurations(NA, session, optionSession);
        }
    };

    return NA;
};

exports.startingHttpServer =  function (NA) {

    /**
     * Start a real NodeAtlas Server.
     * @public
     * @function startingHttpServer
     * @memberOf node-atlas~NA
     */
    NA.startingHttpServer = function () {
        var express = NA.modules.express,
            commander = NA.modules.commander,
            fs = NA.modules.fs,
            http = NA.modules.http,
            https = NA.modules.https;

        /**
         * A simple HTTP server.
         * @public
         * @function httpServer
         * @memberOf node-atlas~NA
         */
        NA.httpServer = express();

        /** Server is case sensitive and slash sensitive. */
        NA.httpServer.enable('strict routing');

        if (!NA.webconfig.httpSecure) {

            /**
             * The global HTTP server.
             * @public
             * @function server
             * @memberOf node-atlas~NA
             */
            NA.server = http.createServer(NA.httpServer);
        } else {

            /* HTTPs version for a website. */
            NA.server = https.createServer({
                key: fs.readFileSync(NA.websitePhysicalPath + NA.webconfig.httpSecureRelativeKeyPath, 'utf-8'),
                cert: fs.readFileSync(NA.websitePhysicalPath + NA.webconfig.httpSecureRelativeCertificatePath, 'utf-8')
            }, NA.httpServer);
        }

        if (commander.generate) {
            NA.configuration.generate = commander.generate;
        }

        NA.httpServerPart();
    };

    return NA;
};

exports.httpServerPart =  function (NA) {

    /**
     * Start a real NodeAtlas Server.
     * @public
     * @function httpServerPart
     * @memberOf node-atlas~NA
     */
    NA.httpServerPart = function () {
        var compress = NA.modules.compress,
            bodyParser = NA.modules.bodyParser,
            cookieParser = NA.modules.cookieParser,
            forceDomain = NA.modules.forceDomain,

            /**
             * Force address and port if extra 'www' or 'port' is enter in browser url bar.
             * @public
             * @alias enableForceDomain
             * @type {boolean}
             * @memberOf node-atlas~NA.webconfig
             * @default false.
             */
            enableForceDomain = NA.webconfig.enableForceDomain,

            /**
             * Define is site is running with HTTP(S) protocol.
             * @public
             * @alias httpSecure
             * @type {boolean}
             * @memberOf node-atlas~NA.webconfig
             */
            httpSecure = NA.webconfig.httpSecure;

        /* NodeAtlas as Node.js Website. */
        if (!NA.configuration.generate) {

            /* Use gzip and others client-server data compression. */
            NA.httpServer.use(compress());

            /* Force utilisation of www and avoid using the original port in address. Necessary without reverse proxy. */
            if (enableForceDomain) {
                NA.httpServer.use(forceDomain({
                    hostname: NA.webconfig.urlHostname,
                    port: NA.webconfig.urlPort,
                    type: 'permanent',
                    protocol: 'http' + ((httpSecure) ? 's' : '')
                }));
            }

            /* Allow you to parse the GET/POST data format. */
            NA.httpServer.use(bodyParser.urlencoded({ extended: true }));

            /* Allow you to parse the JSON data format. */
            NA.httpServer.use(bodyParser.json());

            /* Allow you to parse the Cookie data format. */
            NA.httpServer.use(cookieParser());

            /* Allow you to parse the Less files. */
            NA.enableLessProcess();

            /* Allow you to use Session variables. */
            NA.atlasSessions();
        }
    };

    return NA;
};

exports.httpServerPublicFiles =  function (NA) {

    /**
     * Set the public directory for asset like CSS/JS and media.
     * @public
     * @function httpServerPublicFiles
     * @memberOf node-atlas~NA
     */
    NA.httpServerPublicFiles = function () {
        var express = NA.modules.express,
            path = NA.modules.path,
            commander = NA.modules.commander;

        if (commander.generate) {
            NA.configuration.generate = commander.generate;
        }

        if (!NA.configuration.generate) {
            NA.httpServer.use(NA.webconfig.urlRelativeSubPath, express["static"](path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath), { maxAge: 86400000 * 30 }));
        }
    };

    return NA;
};

exports.response =  function (NA) {

    /**
     * Send HTML result to the client.
     * @public
     * @function response
     * @memberOf node-atlas~NA
     * @param {Object} request - Initial request.
     * @param {Object} response - Initial response.
     * @param {string} data - HTML DOM ready for sending.
     * @param {string} currentRouteParameters - Parameters set into `routes[<currentRoute>]`.
     * @param {string} currentVariation - Variations for the current page.
     */
    NA.response = function (request, response, data, currentRouteParameters, currentVariation) {

            /**
             * Charset use for render of this page.
             * @public
             * @alias charset
             * @type {string}
             * @memberOf node-atlas~NA#currentRouteParameters
             * @default 'utf-8'
             */
        var charset = currentVariation.currentRouteParameters.charset || currentRouteParameters.charset || 'utf-8',

            /**
             * Status Code use for respond with this page.
             * @public
             * @alias statusCode
             * @type {number}
             * @memberOf node-atlas~NA#currentRouteParameters
             * @default 200
             */
            statusCode = currentVariation.currentRouteParameters.statusCode || currentRouteParameters.statusCode || 200,

            /**
             * Content Type use for respond with this page.
             * @public
             * @alias mimeType
             * @type {string}
             * @memberOf node-atlas~NA#currentRouteParameters
             * @default 'text/html'
             */
            contentType = currentVariation.currentRouteParameters.mimeType || currentRouteParameters.mimeType || 'text/html',
            others = {
                /*'Content-Length': data.length,*/
                'Content-Type': contentType
            };

        /* Set/Send headers */
        response.charset = charset;
        response.writeHead(statusCode, others);

        /* Set/Send body */
        response.write(data);
        response.end();
    };

    return NA;
};

exports.redirect =  function (NA) {

    /**
     * Redirect a page to an other page if option page is set for that.
     * @public
     * @function redirect
     * @memberOf node-atlas~NA
     * @param {Object} currentRouteParameters - All information associate with the redirection.
     * @param {Object} request - Initial request.
     * @param {Object} response - Initial response.
     */
    NA.redirect = function (currentRouteParameters, request, response) {
        var location,
            path = NA.modules.path;

        /* Re-inject param into redirected url if is replaced by regex. */
        if (currentRouteParameters.regExp) {

            /**
             * Represent route to redirect if current route matched.
             * @public
             * @alias redirect
             * @type {string}
             * @memberOf node-atlas~NA#currentRouteParameters
             */
            location = currentRouteParameters.redirect.replace(/\$([0-9]+)\$/g, function (regex, matches) { return request.params[matches]; });
        /* Or by standard selector. */
        } else {
            location = currentRouteParameters.redirect.replace(/\:([a-z0-9]+)/g, function (regex, matches) { return request.params[matches]; });
        }

        /* Set status and new location. */
        response.writeHead(currentRouteParameters.statusCode, {
            Location: path.join(NA.webconfig.urlRelativeSubPath, location)
        });

        /* No more data. */
        response.end();
    };

    return NA;
};

exports.setSupport =  function (NA) {

    /**
     * sf.
     * @public
     * @function routesPages
     * @memberOf node-atlas~NA
     * @param {string} path - The url listening.
     * @param {Object} options - Option associate to this url.
     */
    NA.setSupport = function (support, common, specific) {

        /* Manage GET / POST support for an url. */
        if (common === false) {
            support = false;
        }

        if (specific === false) {
            support = false;
        }

        if (specific === true) {
            support = true;
        }

        return support;
    };

    return NA;
};

exports.executeRequest =  function (NA) {

    /**
     * Ask for a page in GET and in POST.
     * @public
     * @function executeRequest
     * @memberOf node-atlas~NA
     * @param {boolean} getSupport - This page can be requested by GET ?
     * @param {boolean} postSupport - This page can be requested by POST ?
     * @param {string} objectPath - The list of Url match for obtain response.
     * @param {Object} options - Option associate to this url.
     * @param {string} path - The Url in routes' webconfig.
     */
    NA.executeRequest = function (getSupport, postSupport, objectPath, options, path) {
        /** Execute Get Request */
        if (getSupport) {
            NA.httpServer.get(objectPath, function (request, response) {
                /* Verify if route is a redirection... */
                if (options[path].redirect && options[path].statusCode) {
                    /* ...and if is it, redirect... */
                    NA.redirect(options[path], request, response);
                } else {
                    /* ...else execute render... */
                    NA.render(path, options, request, response);
                }
            });
        }

        /** Execute Post Request */
        if (postSupport) {
            NA.httpServer.post(objectPath, function (request, response) {
                /* Verify if route is a redirection... */
                if (options[path].redirect && options[path].statusCode) {
                     /* ...and if is it, redirect... */
                    NA.redirect(options[path], request, response);
                } else {
                    /* ...else execute render... */
                    NA.render(path, options, request, response);
                }
            });
        }
    };

    return NA;
};

exports.request =  function (NA) {

    /**
     * Listen a specific request.
     * @public
     * @function request
     * @memberOf node-atlas~NA
     * @param {string} path - The url listening.
     * @param {Object} options - Option associate to this url.
     */
    NA.request = function (path, options) {
        var currentRouteParameters = options[path],
            getSupport = true,
            postSupport = true,
            currentPath = path,
            objectPath;

        /* Case of `currentRouteParameters.url` replace `path` because `path` is used like a key. */
        if (currentRouteParameters.url) {

            /**
             * If setted, replace « The url listening ». « The url listening. » become a « key » value.
             * @public
             * @alias url
             * @type {string}
             * @memberOf node-atlas~NA#currentRouteParameters
             */
            currentPath = currentRouteParameters.url;
        }

        /* Adding of subfolder before url listening. */
        objectPath = NA.webconfig.urlRelativeSubPath + currentPath;

        /* Manage GET / POST support for an url. */
        getSupport = NA.setSupport(getSupport,

            /**
             * Allow you to avoid or authorize GET response for all page.
             * @public
             * @alias getSupport
             * @type {boolean}
             * @memberOf node-atlas~NA.webconfig
             * @default true
             */
            NA.webconfig.getSupport,

            /**
             * Allow you to avoid or authorize GET response for current page.
             * @public
             * @alias getSupport
             * @type {boolean}
             * @memberOf node-atlas~NA#currentRouteParameters
             * @default true
             */
            currentRouteParameters.getSupport
        );
        postSupport = NA.setSupport(postSupport,

            /**
             * Allow you to avoid or authorize POST response for all page.
             * @public
             * @alias postSupport
             * @type {boolean}
             * @memberOf node-atlas~NA.webconfig
             * @default true
             */
            NA.webconfig.postSupport,

            /**
             * Allow you to avoid or authorize POST response for current page.
             * @public
             * @alias postSupport
             * @type {boolean}
             * @memberOf node-atlas~NA#currentRouteParameters
             * @default true
             */
            currentRouteParameters.postSupport
        );

        /* Ask for a page in GET and in POST. */
        NA.requestRegex(getSupport, postSupport, objectPath, options, path, currentRouteParameters);
    };

    return NA;
};

exports.requestRegex =  function (NA) {

    /**
     * Listen a specific request (Regex Part).
     * @public
     * @function requestRegex
     * @memberOf node-atlas~NA
     * @param {boolean} getSupport - This page can be requested by GET ?
     * @param {boolean} postSupport - This page can be requested by POST ?
     * @param {string} objectPath - The list of Url match for obtain response.
     * @param {Object} options - Option associate to this url.
     * @param {string} path - The Url in routes' webconfig.
     * @param {Object} currentRouteParameters - Parameters for this route.
     */
    NA.requestRegex = function (getSupport, postSupport, objectPath, options, path, currentRouteParameters) {

        /* Allow you to use regex into your url route... */
        if (
            /**
             * Use RegExp expression as selector for route url If setted to true.
             * Same if is a string but string represent option like "g".
             * @public
             * @alias regExp
             * @type {string|boolean}
             * @default false
             * @memberOf node-atlas~NA#currentRouteParameters
             */
            currentRouteParameters.regExp
        ) {
            /* ...with options... */
            if (typeof currentRouteParameters.regExp === 'string') {
                objectPath = new RegExp(objectPath, currentRouteParameters.regExp);
            /* ...or not... */
            } else {
                objectPath = new RegExp(objectPath);
            }
        }

        /* Ask for a page in GET and in POST. */
        NA.executeRequest(getSupport, postSupport, objectPath, options, path);
    };

    return NA;
};

exports.pageNotFound =  function (NA) {

    /**
     * Define a page to display when no url match in route or in `NA.httpServerPublicFiles` directory.
     * @public
     * @function pageNotFound
     * @memberOf node-atlas~NA
     */
    NA.pageNotFound = function () {
        if (NA.webconfig.pageNotFound && NA.webconfig.routes[NA.webconfig.pageNotFound]) {
            var pageNotFound = NA.webconfig.routes[NA.webconfig.pageNotFound],

                /**
                 * Represent route to use if no route match in all route.
                 * @public
                 * @alias pageNotFound
                 * @type {string}
                 * @memberOf node-atlas~NA.webconfig
                 */
                pageNotFoundUrl = NA.webconfig.pageNotFound;

            /* Match all Get Request */
            NA.httpServer.get("*", function (request, response) {
                /* Verify if route for `pageNotFound` is a redirection... */
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    /* ...and if is it, redirect... */
                    NA.redirect(pageNotFound, request, response);
                } else {
                    /* ...else execute render... */
                    NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
                }
            });
            /* Match all Post Request */
            NA.httpServer.post("*", function (request, response) {
                /* Verify if route for `pageNotFound` is a redirection... */
                if (pageNotFound.redirect && pageNotFound.statusCode) {
                    /* ...and if is it, redirect... */
                    NA.redirect(pageNotFound, request, response);
                } else {
                    /* ...else execute render... */
                    NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
                }
            });
        }
    };

    return NA;
};

exports.routesPages =  function (NA) {

    /**
     * Crawl all route and execute each file with a request is emit by client.
     * @public
     * @function routesPages
     * @memberOf node-atlas~NA
     */
    NA.routesPages = function () {
        var commander = NA.modules.commander;

        if (commander.generate) {
            NA.configuration.generate = commander.generate;
        }

        if (!NA.configuration.generate) {
            /* For each `webconfig.routes`. */
            NA.forEach(NA.webconfig.routes, function (currentUrl) {
                NA.request(currentUrl, NA.webconfig.routes);
            });
        }
    };

    return NA;
};