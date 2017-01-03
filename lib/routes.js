/*------------------------------------*\
    ROUTES
\*------------------------------------*/
/* jslint node: true */

/**
 * Add route to express.
 * @private
 * @function loadRoutes
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function loadRoutes(NA) {
    /* For each `webconfig.routes`. */
    NA.forEach(NA.webconfig.routes, function (currentUrl) {
        NA.request(currentUrl, NA.webconfig.routes);
    });
}

/**
 * Crawl all routes and execute each file with response requested by client after passed into `NA#controllers[].setRoutes` hook.
 * @private
 * @function initRoutes
 * @memberOf NA#
 * @this NA
 */
exports.initRoutes = function () {
    var NA = this;

    if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.commonController].setRoutes !== 'undefined') {

            /**
             * Set all routes before the enableIndex was started.
             * @function setRoutes
             * @memberOf NA#controllers[]
             * @this NA
             * @param {NA~callback} next Next steps after routes are setted.
             */
            NA.controllers[NA.webconfig.commonController].setRoutes.call(NA, function () {
                NA.indexPage();
                loadRoutes(NA);
                NA.pageNotFound();
            });

    /* ...else, just continue. */
    } else {
        NA.indexPage();
        loadRoutes(NA);
        NA.pageNotFound();
    }
};

/**
 * Create a « Overview » page to « / » url with all of page accessible via links.
 * @private
 * @function indexPage
 * @memberOf NA#
 * @this NA
 */
exports.indexPage = function () {
    var NA = this,
        url = NA.modules.url,
        path = NA.modules.path,
        open = NA.modules.open,
        urlOutput = url.resolve(NA.webconfig.urlRoot, path.join(NA.webconfig.urlRelativeSubPath, ((typeof NA.configuration.browse === 'string') ? NA.configuration.browse : "")));

    /* Only if server was started and `enableIndex` is set to « true ». */
    if (

        /**
         * Allow NodeAtlas to create a root page with a link for each routes if set to true.
         * @public
         * @alias enableIndex
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.enableIndex) {

        /* Create a new path to « / ». Erase the route to « / » defined into `routes`. */
        NA.express.get(url.format(path.join("/", NA.webconfig.urlRelativeSubPath, "/")), function (request, response) {
            var data = {},
                matches = function (regex, matches) { return data[matches]; };

            data.render = "";

            /* List all routes... */
            NA.forEach(NA.webconfig.routes, function (page) {
                var routeParameters;

                if (typeof page !== "string") {
                    routeParameters = page;
                } else {
                    routeParameters = NA.webconfig.routes[page];
                }

                data.page = page;
                if (routeParameters.url) {
                    data.page = routeParameters.url;
                } 

                if (routeParameters.output !== false) {
                    data.page = decodeURIComponent(data.page);
                    data.render += NA.cliLabels.indexPage.line.replace(/%([\-a-zA-Z0-9_]+)%/g, matches);
                }
            });

            /* ...and provide a page. */
            response.writeHead(200, NA.cliLabels.indexPage.charsetAndType);
            response.end(NA.cliLabels.indexPage.data.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
        });

        /* Display index after all routes are setted. */
        if (NA.configuration.browse) {
            open(urlOutput);
        }
    }
};

/**
 * Set the public directory for asset like CSS/JS and media.
 * @private
 * @function initStatics
 * @memberOf NA#
 * @this NA
 */
exports.initStatics = function () {
    var NA = this,
        express = NA.modules.express,
        path = NA.modules.path,
        url = NA.modules.url,
        staticOptions = { maxAge: 86400000 * 30 };

    /* No Cache */
    if (!NA.webconfig.cache) {
        staticOptions.etag = false;
        staticOptions.maxAge = 0;
        staticOptions.lastModified = false;
    }

    /**
     * Set information for static file from `assetsRelativePath`.
     * @public
     * @see http://expressjs.com/api.html#express.static for options.
     * @alias staticOptions
     * @type {string}
     * @memberOf NA#webconfig
     */
    staticOptions = NA.extend(staticOptions, NA.webconfig.staticOptions);

    NA.express.use(NA.webconfig.urlRelativeSubPath, express.static(path.join(NA.serverPath, NA.webconfig.assetsRelativePath), staticOptions));

    NA.forEach(NA.webconfig.statics, function (directory, directories) {
        var virtual = directory,
            real = directories[directory],
            options;

        if (NA.webconfig.statics instanceof Array) {
            virtual = directory.virtual;
            real = directory;
        }

        if (typeof real === "object") {
            options = real.staticOptions || staticOptions;
            real = real.path;
        }

        NA.express.use(url.format(path.join(NA.webconfig.urlRelativeSubPath, virtual)), express.static(path.join(NA.serverPath, real), options));
    });
};

/**
 * Affect support of GET/POST to a route.
 * @private
 * @function setSupport
 * @memberOf NA#
 * @param {boolean} support Type of support GET, POST, PUT or DELETE.
 * @param {boolean} path    Instruction support for all page.
 * @param {boolean} options Instruction support for current page.
 */
function setSupport(support, common, specific) {

    /* Manage GET / POST / PUT / DELETE support for an url. */
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
}

/**
 * Listen a specific request.
 * @private
 * @function request
 * @memberOf NA#
 * @this NA
 * @param {string} path    The url listening.
 * @param {Object} options Options associate to this url.
 */
exports.request = function (path, options) {
    var NA = this,
        routeParameters,
        getSupport = true,
        postSupport = true,
        putSupport = false,
        deleteSupport = false,
        currentPath = path,
        objectPath;

    /* Case of `path` is an object because `NA.webconfig.routes` is an array and not an object. */
    if (typeof path === "object") {
        routeParameters = path;
    } else {
        routeParameters = options[path];
    }

    /* Case of `routeParameters.url` replace `path` because `path` is used like a key. */
    if (routeParameters.url) {

        /**
         * If setted, replace « The url listening ». « The url listening. » become a « key » value.
         * @public
         * @alias url
         * @type {string}
         * @memberOf NA#routeParameters
         */
        currentPath = routeParameters.url;
    }

    /* Adding of subfolder before url listening. */
    objectPath = NA.webconfig.urlRelativeSubPath + currentPath;

    /* Manage GET / POST / PUT / DELETE support for an url. */
    getSupport = setSupport(getSupport,

        /**
         * Allow you to avoid or authorize GET response for all page.
         * @public
         * @alias get
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        NA.webconfig.get,

        /**
         * Allow you to avoid or authorize GET response for current page.
         * @public
         * @alias get
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default true
         */
        routeParameters.get
    );
    postSupport = setSupport(postSupport,

        /**
         * Allow you to avoid or authorize POST response for all page.
         * @public
         * @alias post
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        NA.webconfig.post,

        /**
         * Allow you to avoid or authorize POST response for current page.
         * @public
         * @alias post
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default true
         */
        routeParameters.post
    );
    putSupport = setSupport(putSupport,

        /**
         * Allow you to avoid or authorize PUT response for all page.
         * @public
         * @alias put
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.put,

        /**
         * Allow you to avoid or authorize PUT response for current page.
         * @public
         * @alias put
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default false
         */
        routeParameters.put
    );
    deleteSupport = setSupport(deleteSupport,

        /**
         * Allow you to avoid or authorize DELETE response for all page.
         * @public
         * @alias delete
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.delete,

        /**
         * Allow you to avoid or authorize DELETE response for current page.
         * @public
         * @alias delete
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default false
         */
        routeParameters.delete
    );

    /* Ask for a page in GET, POST, PUT or DELETE. */
    NA.requestRegex({ 
        getSupport: getSupport, 
        postSupport: postSupport, 
        putSupport: putSupport, 
        deleteSupport: deleteSupport
    }, objectPath, options, path, routeParameters);
};

/**
 * Listen a specific request (Regex Part).
 * @private
 * @function requestRegex
 * @memberOf NA#
 * @param {Object}  support               Contain all GET, POST, PUT and DELETE capability.
 * @param {boolean} support.getSupport    This page can be requested by GET ?
 * @param {boolean} support.postSupport   This page can be requested by POST ?
 * @param {boolean} support.putSupport    This page can be requested by PUT ?
 * @param {boolean} support.deleteSupport This page can be requested by DELETE ?
 * @param {string}  objectPath            The list of Url match for obtain response.
 * @param {Object}  options               Option associate to this url.
 * @param {string}  path                  The Url in routes' webconfig.
 * @param {Object}  routeParameters Parameters for this route.
 */
exports.requestRegex = function (support, objectPath, options, path, routeParameters) {
    var NA = this;

    /* Allow you to use regex into your url route... */
    if (
        /**
         * Use RegExp expression as selector for route url If setted to true.
         * Same if is a string but string represent option like "g".
         * @public
         * @alias regExp
         * @type {string|boolean}
         * @default false
         * @memberOf NA#routeParameters
         */
        routeParameters.regExp
    ) {

        /* ...with options... */
        if (typeof routeParameters.regExp === 'string') {
            objectPath = new RegExp(objectPath, routeParameters.regExp);
        /* ...or not... */
        } else {
            objectPath = new RegExp(objectPath);
        }
    }

    /* Ask for a page in GET and in POST. */
    NA.executeRequest(support, objectPath, options, path);
};

/**
 * Ask for a page in GET, POST, UPDATE or DELETE.
 * @private
 * @function executeRequest
 * @memberOf NA#
 * @param {Object}  support               Contain all GET, POST, PUT and DELETE capability.
 * @param {boolean} support.getSupport    This page can be requested by GET ?
 * @param {boolean} support.postSupport   This page can be requested by POST ?
 * @param {boolean} support.putSupport    This page can be requested by PUT ?
 * @param {boolean} support.deleteSupport This page can be requested by DELETE ?
 * @param {string}  objectPath            The list of Url match for obtain response.
 * @param {Object}  options               Option associate to this url.
 * @param {string}  path                  The Url in routes' webconfig.
 */
exports.executeRequest = function (support, objectPath, options, path) {
    var NA = this,
        routeParameters;

    /* Case of `path` is an object because `NA.webconfig.routes` is an array and not an object. */
    if (typeof path === "object") {
        routeParameters = path;
    } else {
        routeParameters = options[path];
    }

    /** Execute Get Request */
    if (support.getSupport) {
        NA.express.get(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.response(path, options, request, response);
            }
        });
    }

    /** Execute Post Request */
    if (support.postSupport) {
        NA.express.post(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                 /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.response(path, options, request, response);
            }
        });
    }

    /** Execute Put Request */
    if (support.putSupport) {
        NA.express.put(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.response(path, options, request, response);
            }
        });
    }

    /** Execute Delete Request */
    if (support.deleteSupport) {
        NA.express.delete(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                 /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.response(path, options, request, response);
            }
        });
    }
};

/**
 * Send HTML result to the client.
 * @private
 * @function sendResponse
 * @memberOf NA#
 * @param {Object} request         Initial request.
 * @param {Object} response        Initial response.
 * @param {string} data            HTML DOM ready for sending.
 * @param {Object} routeParameters Parameters set into `routes[<currentRoute>]`.
 * @param {Object} locals          Local variables for the current page.
 */
exports.sendResponse = function (request, response, data, routeParameters, locals) {
    var NA = this,
        header,

        /**
         * Charset used for render of this page.
         * @public
         * @alias charset
         * @type {string}
         * @memberOf NA#routeParameters
         * @default "utf-8"
         */
        charset = locals.routeParameters.charset || routeParameters.charset || NA.webconfig.charset,

        /**
         * Status Code used for respond with this page.
         * @public
         * @alias statusCode
         * @type {number}
         * @memberOf NA#routeParameters
         * @default 200
         */
        statusCode = locals.routeParameters.statusCode || routeParameters.statusCode || 200,

        /**
         * Content Type used for respond with this page.
         * @public
         * @alias mimeType
         * @type {string}
         * @memberOf NA#routeParameters
         * @default "text/html"
         */
        mimeType = locals.routeParameters.mimeType || routeParameters.mimeType || NA.webconfig.mimeType,

        /**
         * Headers value used for respond with this page.
         * @public
         * @alias mimeType
         * @type {string}
         * @memberOf NA#routeParameters
         * @default "text/html"
         */
        headers = locals.routeParameters.headers || routeParameters.headers || {};

    /* Set charset and  */
    response.statusCode = statusCode;

    /* Set headers into response */
    response.setHeader("Content-Type", mimeType + ";" + " charset=" + charset);
    for (header in NA.webconfig.headers) {
        if (!NA.webconfig.headers.hasOwnProperty(header)) {
            continue;
        }
        if (NA.webconfig.headers[header] === false) {
            response.removeHeader(header);
        } else {
            response.setHeader(header, NA.webconfig.headers[header]);
        }
    }
    for (header in headers) {
        if (!headers.hasOwnProperty(header)) {
            continue;
        }
        if (headers[header] === false) {
            response.removeHeader(header);
        } else {
            response.setHeader(header, headers[header]);
        }
    }

    /* Set/Send body */
    response.write(data);
    response.end();
};

/**
 * Redirect a page to an other page if option page is set for that.
 * @private
 * @function redirect
 * @memberOf NA#
 * @param {Object} routeParameters All information associate with the redirection.
 * @param {Object} request                Initial request.
 * @param {Object} response               Initial response.
 */
exports.redirect = function (routeParameters, request, response) {
    var NA = this,
        location,
        path = NA.modules.path;

    /* Re-inject param into redirected url if is replaced by regex. */
    if (routeParameters.regExp) {

        /**
         * Represent route to redirect if current route matched.
         * @public
         * @alias redirect
         * @type {string}
         * @memberOf NA#routeParameters
         */
        location = routeParameters.redirect.replace(/\$([0-9]+)/g, function (regex, matches) { return request.params[matches]; });
    /* Or by standard selector. */
    } else {
        location = routeParameters.redirect.replace(/\:([a-z0-9]+)/g, function (regex, matches) { return request.params[matches]; });
    }

    /* Set status and new location. */
    response.writeHead(routeParameters.statusCode, {
        Location: path.join(NA.webconfig.urlRelativeSubPath, location)
    });

    /* No more data. */
    response.end();
};

/**
 * Define a page to display when no url match in route or in directories provided by `NA#initStatics`.
 * @private
 * @function pageNotFound
 * @memberOf NA#
 * @this NA
 */
exports.pageNotFound = function () {
    var NA = this,
        pageNotFound,
        key,
        i,

        /**
         * Represent route to use if no route match in all route.
         * @public
         * @alias pageNotFound
         * @type {string}
         * @memberOf NA#webconfig
         */
        pageNotFoundUrl = NA.webconfig.pageNotFound;

    if (NA.webconfig.routes instanceof Array) {
        for (i = 0; i < NA.webconfig.routes.length; i++) {
            key = NA.webconfig.routes[i].key || NA.webconfig.routes[i].url;
            if (NA.webconfig.pageNotFound && key === NA.webconfig.pageNotFound) {
                pageNotFound = NA.webconfig.routes[i];
                pageNotFoundUrl = NA.webconfig.routes[i];
            }
        }
    } else if (NA.webconfig.pageNotFound && NA.webconfig.routes[NA.webconfig.pageNotFound]) {
        pageNotFound = NA.webconfig.routes[NA.webconfig.pageNotFound];
    }

    if (pageNotFound) {
        /* Match all Get Request */
        NA.express.all("*", function (request, response) {
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