/*------------------------------------*\
    $%FRONT-END PART
\*------------------------------------*/
/* jslint node: true */

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
        if (err) {
            err.viewsPath = viewsPath;
            if (typeof routeParameters.view === 'undefined') {
                NA.log(NA.appLabels.viewNotSet);
            } else {
                NA.log(NA.appLabels.viewNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return err[matches]; }));
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
 * Open a variation file.
 * @private
 * @function openVariation
 * @memberOf NA#
 * @param {string} variationName Name of JSON file.
 * @param {string} languageCode  Current language for this variation.
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
    function explainError(err) {
        err.variationsPath = variationsPath;
        if (err.code === 'ENOENT' && !errorDisabled && !languageCode) {
            NA.log(NA.appLabels.variationNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return err[matches]; }));
        } else if (err.toString().indexOf('SyntaxError') !== -1) {
            err.syntaxError = err.toString();
            NA.log(NA.appLabels.variationSyntaxError.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return err[matches]; }));
        } else if (err.code !== 'ENOENT') {
            NA.log(err);
        }
        return false;
    }

    if (typeof variationName !== 'undefined') {
        try {
            /* Return the variations variable into an object. */
            return JSON.parse(fs.readFileSync(variationsPath, 'utf-8'));
        } catch (err) {
            /* Explain errors. */
            explainError(err);
        }
    }
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderLanguage
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} viewsPath              Path to the based view.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderLanguage = function (currentVariation, routeParameters, request, response, viewsPath, currentPath, path) {
    var NA = this;

    /**
     * Expose the current language code for the page if setted else expose the global if setted.
     * @public
     * @alias languageCode
     * @type {string}
     * @memberOf NA#currentVariation
     * @default undefined
     */
    currentVariation.languageCode =

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
    NA.prepareRenderPath(currentVariation, routeParameters, request, response, viewsPath, currentPath, path);
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderPath
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} viewsPath              Path to the based view.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderPath = function (currentVariation, routeParameters, request, response, viewsPath, currentPath, path) {
    var NA = this,
        query = (request  && request.originalUrl && request.originalUrl.split("?"));

    /**
     * Idem as `NA#webconfig.urlRoot`.
     * @public
     * @alias urlRootPath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example http://localhost:7777
     * https://www.example.here
     */
    currentVariation.urlRootPath = NA.webconfig.urlRoot;

    /**
     * Idem as `NA#webconfig.urlRelativeSubPath`.
     * @public
     * @alias urlSubPath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example /subpath
     * 
     */
    currentVariation.urlSubPath = NA.webconfig.urlRelativeSubPath;

    /**
     * Expose the current URL of page with `NA#webconfig.urlRoot` and `NA#webconfig.urlRelativeSubPath`.
     * @public
     * @alias urlBasePath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example http://localhost:7777/subpath
     * https://www.example.here
     */
    currentVariation.urlBasePath = NA.webconfig.urlRoot + NA.webconfig.urlRelativeSubPath;

    /**
     * Url from `url` value for current route.
     * @public
     * @alias urlFilePath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example /example.html
     * /example/this/
     */
    currentVariation.urlFilePath = currentPath;

    /**
     * Query from `url` value for current route.
     * @public
     * @alias urlQueryPath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example ?title=Haeresis&description=ok
     * ?title=Haeresis
     */
    currentVariation.urlQueryPath = query && query[1] ? "?" + query[1] : "";

    /**
     * Expose the current URL of page with `NA#webconfig.urlBasePath` and the current page route.
     * @public
     * @alias urlPath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example http://localhost:7777/subpath/example.html?title=Haeresis&description=ok
     * https://www.example.here/example/this/?title=Haeresis
     */
    currentVariation.urlPath = currentVariation.urlBasePath + currentPath + currentVariation.urlQueryPath;
    if (request) {
        currentVariation.urlPath = "http" + ((NA.webconfig.httpSecure) ? "s" : "") + '://' + request.get("host") + request.originalUrl;
    }

    /* Next preparation render for variation. */
    NA.prepareRenderVariation(currentVariation, routeParameters, request, response, viewsPath, currentPath, path);
};

/**
 * Create some variable for manage variation into render.
 * @private
 * @function prepareRenderVariation
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} viewsPath              Path to the based view.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderVariation = function (currentVariation, routeParameters, request, response, viewsPath, currentPath, path) {
    var NA = this,
        extend = NA.modules.extend;

    if (request) {

        /**
         * Expose list of selector used into page.
         * @public
         * @alias params
         * @type {string}
         * @memberOf NA#currentVariation
         * @example If current route is '/example/:selector/'
         * At http://localhost/example/test/ the value of `NA.currentVariation#params` is
         * { "selector": "test" }
         */
        currentVariation.params = request.params;
    }

    /**
     * Name of file for `common` variation.
     * @public
     * @alias commonVariation
     * @type {string}
     * @memberOf NA#webconfig
     */
    currentVariation.common = NA.openVariation(NA.webconfig.commonVariation, currentVariation.languageCode);
    if (currentVariation.languageCode) {

        /**
         * Expose all JSON data from `commonVariation` file.
         * @public
         * @alias common
         * @type {Object}
         * @memberOf NA#currentVariation
         */
        currentVariation.common = extend(true, NA.openVariation(NA.webconfig.commonVariation, undefined, true), currentVariation.common);
    }

    /**
     * Name of file for `specific` variation.
     * @public
     * @alias variation
     * @type {string}
     * @memberOf NA#routeParameters
     */
    currentVariation.specific = NA.openVariation(routeParameters.variation, currentVariation.languageCode);
    if (currentVariation.languageCode) {

        /**
         * Expose all JSON data from `routes[<currentRoute>].variation` file.
         * @public
         * @alias specific
         * @type {Object}
         * @memberOf NA#currentVariation
         */
        currentVariation.specific = extend(true, NA.openVariation(routeParameters.variation, undefined, true), currentVariation.specific);
    }

    /* Nexts Step for render. */
    NA.prepareRenderParameters(currentVariation, routeParameters, request, response, viewsPath, currentPath, path);
};

/**
 * Create some variable for manage parameters into render.
 * @private
 * @function prepareRenderParameters
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} viewsPath              Path to the based view.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderParameters = function (currentVariation, routeParameters, request, response, viewsPath, currentPath, path) {
    var NA = this;

    /**
     * Expose all data from `routes[<currentRoute>]` object from webconfig.
     * @public
     * @alias routeParameters
     * @type {Object}
     * @memberOf NA#currentVariation
     */
    currentVariation.routeParameters = routeParameters;

    /**
     * Expose the key from `<currentRoute>` object from webconfig.
     * @public
     * @alias routePath
     * @type {Object}
     * @memberOf NA#currentVariation
     */
    if (currentVariation.routeParameters.url) {
        currentVariation.routePath = path;
    }

    /**
     * Expose route of current page from current webconfig `routes`.
     * @public
     * @alias route
     * @type {string}
     * @memberOf NA#currentVariation
     * @example /categories/:category/
     */
    currentVariation.route = currentPath;

    /**
     * Expose all webconfig values.
     * @public
     * @alias webconfig
     * @type {Object}
     * @memberOf NA#currentVariation
     */
    currentVariation.webconfig = NA.webconfig;

    /* Nexts Step for render. */
    NA.changeVariationCommon(currentVariation, routeParameters, request, response, viewsPath, currentPath, path);
};

/**
 * Intercept Variation from common file.
 * @private
 * @function changeVariationCommon
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} viewsPath              Path to the based view.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeVariationCommon = function (currentVariation, routeParameters, request, response, viewsPath, currentPath) {
    var NA = this;

    /* Use the `NA.controllers[<commonController>].changeVariation(...)` function if set... */
    if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.commonController].changeVariation !== 'undefined') {

            /**
             * Define this function for intercept Variation object and modify it. Both `common` and `specific` controller.
             * @function changeVariation
             * @memberOf NA#controllers[]
             * @param {Object}                   params           Collection of property.
             * @param {string}                   params.variation Variation object of current page.
             * @param {Object}                   params.request   Initial request.
             * @param {Object}                   params.response  Initial response.
             * @param {changeVariation~callback} callback         Next steps after configuration is done.
             */
            NA.controllers[NA.webconfig.commonController].changeVariation.call(NA, { variation: currentVariation, request: request, response: response },

            /**
             * Next steps after changeVariation is done.
             * @callback changeVariation~callback
             * @param {Object} [currentVariation] Variation object with new values.
             */
            function (tempVariation) {
                currentVariation = (tempVariation) ? tempVariation : currentVariation;
                NA.changeVariationSpecific(currentVariation, routeParameters, request, response, viewsPath, currentPath);
            });
    /* ...else, just continue. */
    } else {
        NA.changeVariationSpecific(currentVariation, routeParameters, request, response, viewsPath, currentPath);
    }
};

/**
 * Intercept Variation from specific file.
 * @private
 * @function changeVariationSpecific
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} viewsPath              Path to the based view.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeVariationSpecific = function (currentVariation, routeParameters, request, response, viewsPath, currentPath) {
    var NA = this;

    if (typeof NA.controllers[routeParameters.controller] !== 'undefined' &&
        typeof NA.controllers[routeParameters.controller].changeVariation !== 'undefined') {
            /* Use the `NA.controllers[<controller>].changeVariation(...)` function if set... */
            NA.controllers[routeParameters.controller].changeVariation.call(NA, { variation: currentVariation, request: request, response: response }, function (tempVariation) {
                currentVariation = (tempVariation) ? tempVariation : currentVariation;
                NA.changeDomCommon(currentVariation, routeParameters, request, response, viewsPath, currentPath);
            });
    } else {
        /* ...else, just continue. */
        NA.changeDomCommon(currentVariation, routeParameters, request, response, viewsPath, currentPath);
    }
};

/**
 * Intercept DOM from common file.
 * @private
 * @function changeDomCommon
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} viewsPath              Path to the based view.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeDomCommon = function (currentVariation, routeParameters, request, response, viewsPath, currentPath) {
    var NA = this,
        ejs = NA.modules.ejs,
        pug = NA.modules.pug,
        pathM = NA.modules.path;

    /* Open the template file */
    NA.openTemplate(routeParameters, viewsPath, function (data) {
        var engine = NA.webconfig.enablePug ? pug : ejs;

        if (typeof routeParameters.enablePug === "boolean") {
            /**
             * Allow you to enable Pug only for a page.
             * @public
             * @alias enablePug
             * @type {boolean}
             * @memberOf NA#routeParameters
             * @default undefined
             */
            engine = routeParameters.enablePug ? pug : ejs;
        }

        /**
         * Allow template engine know which file is currently in use.
         * @public
         * @alias filename
         * @type {string}
         * @memberOf NA#currentVariation
         */
        currentVariation.filename = pathM.join(NA.serverPath, NA.webconfig.viewsRelativePath, routeParameters.view);

        try {
            /* Transform ejs/pug data and inject incduded file. */
            data = engine.render(data, currentVariation);
        } catch (err) {
            /* Make error more readable. */
            data = err.toString()
                .replace(/[\n]/g, "<br>")
                .replace(/    /g, "<span style='display:inline-block;width:32px'></span>")
                .replace(/ >> /g, "<span style='display:inline-block;width:32px'>&gt;&gt;</span>");
        }

        /* Use the `NA.controllers[<commonController>].changeDom(...)` function if set... */
        if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
            typeof NA.controllers[NA.webconfig.commonController].changeDom !== 'undefined') {

                /**
                 * Define this function for intercept DOM and modify it with jQuery for example. Both `common` and `specific` controller.
                 * @function changeDom
                 * @memberOf NA#controllers[]
                 * @param {Object}             params          Collection of property.
                 * @param {string}             params.dom      DOM of current page.
                 * @param {Object}             params.request  Initial request.
                 * @param {Object}             params.response Initial response.
                 * @param {changeDom~callback} callback        Next steps after configuration is done.
                 */
                NA.controllers[NA.webconfig.commonController].changeDom.call(NA, { dom: data, variation: currentVariation, request: request, response: response },

                /**
                 * Next steps after changeDomSpecific is done.
                 * @callback changeDomSpecific~callback
                 * @param {string} data DOM with modifications.
                 */
                function (data) {
                    NA.changeDomSpecific(data, currentVariation, routeParameters, request, response, currentPath);
                });
        /* ...else, just continue. */
        } else {
            NA.changeDomSpecific(data, currentVariation, routeParameters, request, response, currentPath);
        }
   });
};

/**
 * Intercept DOM from specific file.
 * @private
 * @function changeDomSpecific
 * @memberOf NA#
 * @param {string} dom                    DOM Generated.
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeDomSpecific = function (data, currentVariation, routeParameters, request, response, currentPath) {
    var NA = this;

    if (typeof NA.controllers[routeParameters.controller] !== 'undefined' &&
        typeof NA.controllers[routeParameters.controller].changeDom !== 'undefined') {
            /** Use the `NA.controllers[<controller>].changeVariation(...)` function if set... */
            NA.controllers[routeParameters.controller].changeDom.call(NA, { dom: data, variation: currentVariation, request: request, response: response }, function (data) {
                NA.intoBrowserAndFiles(data, currentVariation, routeParameters, request, response, currentPath);
            });
    } else {
        /** ...else, just continue. */
        NA.intoBrowserAndFiles(data, currentVariation, routeParameters, request, response, currentPath);
    }
};

/**
 * Inject CSS into DOM if needed.
 * @private
 * @function intoBrowserAndFiles
 * @memberOf NA#
 * @param {string} data                   DOM Generated.
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.intoBrowserAndFiles = function (data, currentVariation, routeParameters, request, response, currentPath) {
    var NA = this;

    /* Inject CSS into DOM... */
    if (NA.webconfig.injectCss || routeParameters.injectCss) {
        NA.injectCss(data, routeParameters.injectCss, function (data) {
            NA.renderTemplate(data, currentVariation, routeParameters, request, response, currentPath);
        });
    /* ...or do nothing. */
    } else {
        NA.renderTemplate(data, currentVariation, routeParameters, request, response, currentPath);
    }
};

/**
 * Write file or/and send response.
 * @private
 * @function renderTemplate
 * @memberOf NA#
 * @param {string} data                   HTML DOM ready for sending.
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} routeParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.renderTemplate = function (data, currentVariation, routeParameters, request, response, currentPath) {
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
    if (typeof response === 'undefined' || (htmlGenerationBeforeResponse && htmlGenerationEnable)) {

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

        NA.saveTemplateRender(data, templateRenderName);
    }

    /* Run page into browser. */
    if (typeof response !== 'undefined') {
        /* Compression of CSS, JS and Images if required. */
        async.parallel([
            NA.cssCompilation.bind(NA),
            NA.jsObfuscation.bind(NA),
            NA.imgOptimization.bind(NA)
        ], function () {
            NA.response(request, response, data, routeParameters, currentVariation);
        });
    }
};

/**
 * Generate the HTML output for send to client.
 * @private
 * @function render
 * @memberOf NA#
 * @param {string} path     The url listening.
 * @param {Object} options  Option associate to this url.
 * @param {Object} request  Initial request.
 * @param {Object} response Initial response.
 */
exports.render = function (path, options, request, response) {
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
         * All variation for a specific page.
         * @namespace currentVariation
         * @public
         * @alias currentVariation
         * @type {Object}
         * @memberOf NA#
         */
        currentVariation = {},
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
        (routeParameters.view) ? routeParameters.view : ""
    );

    /* Case of `routeParameters.url` replace `path` because `path` is used like a key. */
    if (routeParameters.url) {
        currentPath = routeParameters.url;
    }

    /* Loading the controller file if `routeParameters.controller` exist. */
    NA.loadController(

        /**
         * This is the file name of specific controller used for back-end part of this page.
         * @public
         * @alias controller
         * @type {string}
         * @memberOf NA#routeParameters
         */
        routeParameters.controller,
        function () {
            /* Next preparation path render. */
            NA.prepareRenderLanguage(currentVariation, routeParameters, request, response, viewsPath, currentPath, path);
        }
    );
};