/*------------------------------------*\
    RESPONSE
\*------------------------------------*/
/* jslint node: true */

/**
 * Get all information to prepare the response.
 * @private
 * @function prepareResponse
 * @memberOf NA#
 * @this NA
 * @param {string} path     The url listening.
 * @param {Object} options  Option associate to this url.
 * @param {Object} request  Initial request.
 * @param {Object} response Initial response.
 * @param {NA~callback} next       Next step after.
 */
exports.prepareResponse = function (path, options, request, response, next) {
    var NA = this,
        pathM = NA.modules.path,

        /**
         * All parameters from a specific page.
         * @namespace routeParameters
         * @public
         * @alias routeParameters
         * @type {Object}
         * @memberOf NA#
         */
        routeParameters,
        viewsPath,

        /**
         * All locals provided for Views Template Engine and Hooks.
         * @namespace locals
         * @public
         * @alias locals
         * @type {Object}
         * @memberOf NA#
         */
        locals = {},
        currentPath = path;

    /* Case of `path` is an object because `NA.webconfig.routes` is an array and not an object. */
    if (typeof path === "object") {
        routeParameters = path;
    } else {
        routeParameters = options[path];
    }

    /* Inject template shortcut to template. */
    if (typeof routeParameters === 'string') {
        /* viewsPath is just use like temp var in this if statement. */
        viewsPath = routeParameters;
        routeParameters = {};

        /**
         * This is the file name of view used for render of page behind the route.
         * @public
         * @alias view
         * @type {string}
         * @memberOf NA#routeParameters
         */
        routeParameters.view = viewsPath;
    }

    /* Generate the server path to the view file. */
    viewsPath = pathM.join(
        NA.serverPath,
        NA.webconfig.viewsRelativePath,
        (
            /**
             * Name of file for `common` view.
             * @public
             * @alias view
             * @type {string}
             * @memberOf NA#webconfig
             */
            NA.webconfig.view) ? NA.webconfig.view : (routeParameters.view || "")
    );

    /* Case of `routeParameters.url` replace `path` because `path` is used like a key. */
    if (routeParameters.url) {
        currentPath = routeParameters.url;
    }

    /* Loading the controller file if `routeParameters.controller` exist. */
    NA.openController(

        /**
         * This is the file name of specific controller used for back-end part of this page.
         * @public
         * @alias controller
         * @type {string}
         * @memberOf NA#routeParameters
         */
        routeParameters.controller);
    NA.prepareRenderLanguage(locals, routeParameters, request, response, viewsPath, currentPath, path, next);
};

/**
 * Open a temlpate file.
 * @private
 * @function openTemplate
 * @memberOf NA#
 * @param {Object} routeParameters  Parameters set into `routes[<currentRoute>]`.
 * @param {Object} viewsPath           Path to template file.
 * @param {openTemplate~callback} callback Next steps after opening file.
 */
exports.openTemplate = function (routeParameters, viewsPath, callback) {
    var NA = this,
        fs = NA.modules.fs;

    fs.readFile(viewsPath, 'utf-8', function (err, data) {
        if (NA.webconfig.view) {
            data = data.replace("#{routeParameters.view}", routeParameters.view);
        }
        if (err) {
            err.viewsPath = viewsPath;
            if (typeof routeParameters.view === 'undefined') {
                NA.log(NA.cliLabels.viewNotSet);
            } else {
                NA.log(NA.cliLabels.viewNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return err[matches]; }));
            }
        } else {

            /**
             * Next steps after opening file.
             * @callback openTemplate~callback
             * @param {string} data All HTML data from template.
             */
            callback(data);
        }
   });
};

/**
 * Intercept DOM from common file.
 * @private
 * @function changeDomCommon
 * @memberOf NA~
 * @param {NA}                NA            NodeAtlas instance.
 * @param {Object}            err           Error to explain.
 * @param {string}            variationName Name of JSON file.
 * @param {string}            languageCode  Current language for this variation.
 * @param {boolean|undefined} errorDisabled Force no error message.
 */
function explainError(NA, err, variationsPath, languageCode, errorDisabled) {
    err.variationsPath = variationsPath;
    if (err.code === 'ENOENT' && !errorDisabled && !languageCode) {
        NA.log(NA.cliLabels.variationNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return err[matches]; }));
    } else if (err.toString().indexOf('SyntaxError') !== -1) {
        err.syntaxError = err.toString();
        NA.log(NA.cliLabels.variationSyntaxError.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return err[matches]; }));
    } else if (err.code !== 'ENOENT') {
        NA.log(err);
    }
    return false;
}

/**
 * Open a variation file.
 * @private
 * @function openVariation
 * @memberOf NA#
 * @param {string}            variationName Name of JSON file.
 * @param {string}            languageCode  Current language for this variation.
 * @param {boolean|undefined} errorDisabled Force no error message.
 * @returns {Object|boolean} Return all data from JSON or false if an error occured.
 */
exports.openVariation = function (variationName, languageCode, errorDisabled) {
    var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path,
        variationsPath;

        /* Find the correct path for variations. */
        variationsPath = path.join(
            NA.serverPath,
            NA.webconfig.variationsRelativePath,
            (languageCode) ? languageCode : '',
            (variationName) ? variationName : ''
        );

    /* Explain errors. */
    

    if (typeof variationName !== 'undefined') {
        try {
            /* Return the variations variable into an object. */
            return JSON.parse(fs.readFileSync(variationsPath, 'utf-8'));
        } catch (err) {
            /* Explain errors. */
            explainError(NA, err, variationsPath, languageCode, errorDisabled);
        }
    } else {
        return {};
    }
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderLanguage
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {string} path            Url path for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.prepareRenderLanguage = function (locals, routeParameters, request, response, viewsPath, currentPath, path, next) {
    var NA = this;

    /**
     * Expose the current language code for the page if setted else expose the global if setted.
     * @public
     * @alias languageCode
     * @type {string}
     * @memberOf NA#locals
     * @default undefined
     */
    locals.languageCode =

        /**
         * Represent the language code for this page.
         * @public
         * @alias languageCode
         * @type {string}
         * @memberOf NA#routeParameters
         * @default undefined
         */
        routeParameters.languageCode ||

        /**
         * Represent the global and main language code for website.
         * @public
         * @alias languageCode
         * @type {string}
         * @memberOf NA#webconfig
         * @default undefined.
         */
        NA.webconfig.languageCode;

    /* Next preparation render for variation. */
    NA.prepareRenderPath(locals, routeParameters, request, response, viewsPath, currentPath, path, next);
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderPath
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {string} path            Url path for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.prepareRenderPath = function (locals, routeParameters, request, response, viewsPath, currentPath, path, next) {
    var NA = this,
        query = (request  && request.originalUrl && request.originalUrl.split("?"));

    /**
     * Idem as `NA#webconfig.urlRoot`.
     * @public
     * @alias urlRootPath
     * @type {string}
     * @memberOf NA#locals
     * @example http://localhost:7777
     * https://www.example.here
     */
    locals.urlRootPath = NA.webconfig.urlRoot;

    /**
     * Idem as `NA#webconfig.urlRelativeSubPath`.
     * @public
     * @alias urlSubPath
     * @type {string}
     * @memberOf NA#locals
     * @example /subpath
     * 
     */
    locals.urlSubPath = NA.webconfig.urlRelativeSubPath;

    /**
     * Expose the current URL of page with `NA#webconfig.urlRoot` and `NA#webconfig.urlRelativeSubPath`.
     * @public
     * @alias urlBasePath
     * @type {string}
     * @memberOf NA#locals
     * @example http://localhost:7777/subpath
     * https://www.example.here
     */
    locals.urlBasePath = NA.webconfig.urlRoot + NA.webconfig.urlRelativeSubPath;

    /**
     * Url from `url` value for current route.
     * @public
     * @alias urlFilePath
     * @type {string}
     * @memberOf NA#locals
     * @example /example.html
     * /example/this/
     */
    locals.urlFilePath = currentPath;

    /**
     * Query from `url` value for current route.
     * @public
     * @alias urlQueryPath
     * @type {string}
     * @memberOf NA#locals
     * @example ?title=Haeresis&description=ok
     * ?title=Haeresis
     */
    locals.urlQueryPath = query && query[1] ? "?" + query[1] : "";

    /**
     * Expose the current URL of page with `NA#webconfig.urlBasePath` and the current page route.
     * @public
     * @alias urlPath
     * @type {string}
     * @memberOf NA#locals
     * @example http://localhost:7777/subpath/example.html?title=Haeresis&description=ok
     * https://www.example.here/example/this/?title=Haeresis
     */
    locals.urlPath = locals.urlBasePath + currentPath + locals.urlQueryPath;
    if (request) {
        locals.urlPath = "http" + ((NA.webconfig.httpSecure) ? "s" : "") + '://' + request.get("host") + request.originalUrl;
    }

    /* Next preparation render for variation. */
    NA.prepareRenderVariation(locals, routeParameters, request, response, viewsPath, currentPath, path, next);
};

/**
 * Create some variable for manage variation into render.
 * @private
 * @function prepareRenderVariation
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {string} path            Url path for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.prepareRenderVariation = function (locals, routeParameters, request, response, viewsPath, currentPath, path, next) {
    var NA = this,
        extend = NA.modules.extend;

    if (request) {

        /**
         * Expose list of slug parameters used into URL.
         * @public
         * @alias params
         * @type {string}
         * @memberOf NA#locals
         * @example If current route is '/example/:selector/'
         * At http://localhost/example/test/ the value of `NA.locals#params` is
         * { "selector": "test" }
         */
        locals.params = request.params || {};

        /**
         * Expose list of query parameters used into URL.
         * @public
         * @alias query
         * @type {string}
         * @memberOf NA#locals
         * @example At http://localhost/example/?param=test the value of `NA.locals#query` is
         * { "param": "test" }
         */
        locals.query = request.query || {};

        /**
         * Expose list of body parameters used into page.
         * @public
         * @alias body
         * @type {string}
         * @memberOf NA#locals
         * @example If the Response body is `test=This+is+a+test` the value of `NA.locals#body` is
         * { "test": "This is a test" }
         */
        locals.body = request.body || {};
    }

    /**
     * Name of file for `common` variation.
     * @public
     * @alias variation
     * @type {string}
     * @memberOf NA#webconfig
     */
    locals.common = NA.openVariation(NA.webconfig.variation, locals.languageCode);
    if (locals.languageCode) {

        /**
         * Expose all JSON data from `variation` file.
         * @public
         * @alias common
         * @type {Object}
         * @memberOf NA#locals
         */
        locals.common = extend(true, NA.openVariation(NA.webconfig.variation, undefined, true), locals.common);
    }

    /**
     * Name of file for `specific` variation.
     * @public
     * @alias variation
     * @type {string}
     * @memberOf NA#routeParameters
     */
    locals.specific = NA.openVariation(routeParameters.variation, locals.languageCode);
    if (locals.languageCode) {

        /**
         * Expose all JSON data from `routes[<currentRoute>].variation` file.
         * @public
         * @alias specific
         * @type {Object}
         * @memberOf NA#locals
         */
        locals.specific = extend(true, NA.openVariation(routeParameters.variation, undefined, true), locals.specific);
    }

    /* Nexts Step for render. */
    NA.prepareRenderParameters(locals, routeParameters, request, response, viewsPath, currentPath, path, next);
};

/**
 * Create some variable for manage parameters into render.
 * @private
 * @function prepareRenderParameters
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {string} path            Url path for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.prepareRenderParameters = function (locals, routeParameters, request, response, viewsPath, currentPath, path, next) {
    var NA = this;

    /**
     * Expose all data from `routes[<currentRoute>]` object from webconfig.
     * @public
     * @alias routeParameters
     * @type {Object}
     * @memberOf NA#locals
     */
    locals.routeParameters = routeParameters;

    /**
     * Expose the key from `<currentRoute>` object from webconfig.
     * @public
     * @alias routeKey
     * @type {Object}
     * @memberOf NA#locals
     */
    if (locals.routeParameters.url && typeof path === "string") {
        locals.routeKey = path;
    }
    if (locals.routeParameters.key) {
        locals.routeKey = locals.routeParameters.key;
    }

    /**
     * Expose route of current page from current webconfig `routes`.
     * @public
     * @alias route
     * @type {string}
     * @memberOf NA#locals
     * @example /categories/:category/
     */
    locals.route = currentPath;

    /**
     * Expose all webconfig values.
     * @public
     * @alias webconfig
     * @type {Object}
     * @memberOf NA#locals
     */
    locals.webconfig = NA.webconfig;

    /* Add preparation into response. */
    if (response) {
        response.locals = locals;
        response.routeParameters = routeParameters;
        response.viewsPath = viewsPath;
        response.currentPath = currentPath;
        response.path = path;
    }

    /* Nexts Step for render. */
    NA.prepareHeaders(locals, routeParameters, request, response, viewsPath, currentPath, path, next);
};

/**
 * Set all webconfig headers.
 * @private
 * @function prepareHeaders
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {string} path            Url path for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.prepareHeaders = function (locals, routeParameters, request, response, viewsPath, currentPath, path, next) {
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

    if (response) {
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
    }

    /* Nexts Step for render. */
    next(locals, routeParameters, request, response, viewsPath, currentPath, path);
};

/**
 * Intercept Variation from common file.
 * @private
 * @function changeVariationsCommon
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.changeVariationsCommon = function (locals, routeParameters, request, response, viewsPath, currentPath, next) {
    var NA = this;

    /* Use the `NA.controllers[<controller>].changeVariations(...)` function if set... */
    if (typeof NA.controllers[NA.webconfig.controller] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.controller].changeVariations !== 'undefined') {

            /**
             * Define this function for intercept Variation object and modify it. Both `common` and `specific` controller.
             * @function changeVariations
             * @memberOf NA#controllers[]
             * @param {changeVariations~callback} callback   Next steps after configuration is done.
             * @param {Object}                    locals     Local variables object of current page.
             * @param {Object}                    response   Initial response.
             * @param {Object}                    request    Initial request.
             */
            NA.controllers[NA.webconfig.controller].changeVariations.call(NA,

            /**
             * Next steps after changeVariations is done.
             * @callback changeVariations~callback
             */
            function () {
                NA.changeVariationsSpecific(locals, routeParameters, request, response, viewsPath, currentPath, next);
            }, locals, request, response);
    /* ...else, just continue. */
    } else {
        NA.changeVariationsSpecific(locals, routeParameters, request, response, viewsPath, currentPath, next);
    }
};

/**
 * Intercept Variation from specific file.
 * @private
 * @function changeVariationsSpecific
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.changeVariationsSpecific = function (locals, routeParameters, request, response, viewsPath, currentPath, next) {
    var NA = this;

    if (typeof NA.controllers[routeParameters.controller] !== 'undefined' &&
        typeof NA.controllers[routeParameters.controller].changeVariations !== 'undefined') {
            /* Use the `NA.controllers[<controller>].changeVariations(...)` function if set... */
            NA.controllers[routeParameters.controller].changeVariations.call(NA, function () {
                NA.changeDomCommon(locals, routeParameters, request, response, viewsPath, currentPath, next);
            }, locals, request, response);
    } else {
        /* ...else, just continue. */
        NA.changeDomCommon(locals, routeParameters, request, response, viewsPath, currentPath, next);
    }
};

/**
 * Intercept DOM from common file.
 * @private
 * @function changeDomCommon
 * @memberOf NA~
 * @param {Object} locals      Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 */
function engineProcess(NA, viewsPath, locals, routeParameters, response, next) {
    var ejs = NA.modules.ejs,
        pug = NA.modules.pug,
        pathM = NA.modules.path,
        engine = NA.webconfig.pug ? pug : ejs;

    if (typeof routeParameters.pug === "boolean") {
        /**
         * Allow you to enable Pug only for a page.
         * @public
         * @alias pug
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default undefined
         */
        engine = routeParameters.pug ? pug : ejs;
    }

    /* Without view, no data. */
    if (!routeParameters.view) {
        return next("");
    }

    /**
     * Allow template engine know which file is currently in use.
     * @public
     * @alias filename
     * @type {string}
     * @memberOf NA#locals
     */
    locals.filename = pathM.join(NA.serverPath, NA.webconfig.viewsRelativePath, NA.webconfig.view || routeParameters.view);


    if (NA.webconfig.engine) {

        /* Transform from any engine but globaly. */
        response.render(viewsPath, locals, function (err, data) {
            if (err) {
                data = err.toString();
            }
            
            next(data);
        });
    } else {
        /* Open the template file */
        NA.openTemplate(routeParameters, viewsPath, function (data) {

            /* Transform ejs/pug data and inject incduded file. */
            try {
                data = engine.render(data, locals);
            } catch (err) {
                /* Make error more readable. */
                data = err.toString()
                    .replace(/[\n]/g, "<br>")
                    .replace(/    /g, "<span style='display:inline-block;width:32px'></span>")
                    .replace(/ >> /g, "<span style='display:inline-block;width:32px'>&gt;&gt;</span>");
            }

            next(data);
        });
    }
}

/**
 * Intercept DOM from common file.
 * @private
 * @function changeDomCommon
 * @memberOf NA#
 * @param {Object} locals      Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} viewsPath       Path to the based view.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.changeDomCommon = function (locals, routeParameters, request, response, viewsPath, currentPath, next) {
    var NA = this;

        // Transform into HTML
        engineProcess(NA, viewsPath, locals, routeParameters, response, function (data) {

            /**
             * The compiled HTML of view + locals provided by response.
             * @public
             * @alias dom
             * @type {string}
             * @memberOf NA#locals
             */
            locals.dom = data;

            /* Use the `NA.controllers[<controller>].changeDom(...)` function if set... */
            if (typeof NA.controllers[NA.webconfig.controller] !== 'undefined' &&
                typeof NA.controllers[NA.webconfig.controller].changeDom !== 'undefined') {

                    /**
                     * Generate a virtual DOM to use jQuery on it.
                     * @function virtualDom
                     * @memberOf NA#locals
                     * @returns {Object} The $ object to manipulate the virtual DOM.
                     */
                    locals.virtualDom = function () {
                        return NA.modules.cheerio.load(data, { decodeEntities: false });
                    };

                    /**
                     * Define this function for intercept DOM and modify it with jQuery for example. Both `common` and `specific` controller.
                     * @function changeDom
                     * @memberOf NA#controllers[]
                     * @param {changeDom~callback} callback   Next steps after configuration is done.
                     * @param {Object}             locals     Local variables for the current page.
                     * @param {string}             locals.dom DOM of current page.
                     * @param {Object}             response   Initial response.
                     * @param {Object}             request    Initial request.
                     */
                    NA.controllers[NA.webconfig.controller].changeDom.call(NA,

                    /**
                     * Next steps after changeDomSpecific is done.
                     * @callback changeDomSpecific~callback
                     * @param {Object} dom DOM with modifications.
                     */
                    function ($) {
                        if (typeof $ === "function") {
                            locals.dom = $.html();
                        }
                        NA.changeDomSpecific(locals, routeParameters, request, response, currentPath, next);
                    }, locals, request, response);
            /* ...else, just continue. */
            } else {
                NA.changeDomSpecific(locals, routeParameters, request, response, currentPath, next);
            }
        });
};

/**
 * Intercept DOM from specific file.
 * @private
 * @function changeDomSpecific
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.changeDomSpecific = function (locals, routeParameters, request, response, currentPath, next) {
    var NA = this;

    if (typeof NA.controllers[routeParameters.controller] !== 'undefined' &&
        typeof NA.controllers[routeParameters.controller].changeDom !== 'undefined') {

            locals.virtualDom = function () {
                return NA.modules.cheerio.load(locals.dom, { decodeEntities: false });
            };

            /** Use the `NA.controllers[<controller>].changeVariations(...)` function if set... */
            NA.controllers[routeParameters.controller].changeDom.call(NA, function ($) {
                if (typeof $ === "function") {
                    locals.dom = $.html();
                }
                NA.intoBrowserAndFiles(locals, routeParameters, request, response, currentPath, next);
            }, locals, request, response);
    } else {
        /** ...else, just continue. */
        NA.intoBrowserAndFiles(locals, routeParameters, request, response, currentPath, next);
    }
};

/**
 * Inject CSS into DOM if needed.
 * @private
 * @function intoBrowserAndFiles
 * @memberOf NA#
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.intoBrowserAndFiles = function (locals, routeParameters, request, response, currentPath, next) {
    var NA = this;

    /* Inject CSS into DOM... */
    if (NA.webconfig.injectCss || routeParameters.injectCss) {
        NA.injectCss(locals.dom, routeParameters.injectCss, function (dom) {
            NA.renderTemplate(dom, locals, routeParameters, request, response, currentPath, next);
        });
    /* ...or do nothing. */
    } else {
        NA.renderTemplate(locals.dom, locals, routeParameters, request, response, currentPath, next);
    }
};

/**
 * Write file or/and send response.
 * @private
 * @function renderTemplate
 * @memberOf NA#
 * @param {string} data            HTML DOM ready for sending.
 * @param {Object} locals          Local variables for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request         Information from request.
 * @param {Object} response        Information from response.
 * @param {string} currentPath     Url from `url` value for this render.
 * @param {NA~callback} next       Next step after.
 */
exports.renderTemplate = function (data, locals, routeParameters, request, response, currentPath, next) {
    var NA = this,
        async = NA.modules.async,

        /**
         * Allow NodeAtlas to generate real file into `NA#webconfig.serverlessRelativePath` directory if set to true.
         * @public
         * @alias htmlGenerationBeforeResponse
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        htmlGenerationBeforeResponse = NA.webconfig.htmlGenerationBeforeResponse,
        htmlGenerationEnable = (typeof NA.webconfig.htmlGenerationEnable === 'boolean') ? NA.webconfig.htmlGenerationEnable : true,
        templateRenderName;

    /* Create the file for asset mode */
    if (typeof response === "undefined" || (htmlGenerationBeforeResponse && htmlGenerationEnable)) {

        /**
         * Output name of file generate if `NA#webconfig.htmlGenerationBeforeResponse` is set to true or if `--generate` command is used.
         * If value is set to `false`, no generate page will be generated.
         * @public
         * @alias output
         * @type {string|boolean}
         * @memberOf NA#routeParameters
         */
        templateRenderName = currentPath;

        if (typeof routeParameters.output !== 'undefined') {
            templateRenderName = routeParameters.output;
        }

        NA.saveRender(data, templateRenderName);
    }

    /* Run page into browser. */
    if (typeof response !== "undefined") {
        /* Compression of CSS, JS and Images if required. */
        async.parallel([
            NA.cssCompilation.bind(NA),
            NA.jsObfuscation.bind(NA),
            NA.imgOptimization.bind(NA)
        ], function () {
            NA.sendResponse(request, response, data, next);
        });
    }
};