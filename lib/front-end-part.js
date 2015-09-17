/*------------------------------------*\
    $%FRONT-END PART
\*------------------------------------*/
/* jslint node: true */

/**
 * Open a temlpate file.
 * @private
 * @function openTemplate
 * @memberOf NA#
 * @param {Object} currentRouteParameters  Parameters set into `routes[<currentRoute>]`.
 * @param {Object} templatesPath           Path to template file.
 * @param {openTemplate~callback} callback Next steps after opening file.
 */
exports.openTemplate = function (currentRouteParameters, templatesPath, callback) {
    var NA = this,
        fs = NA.modules.fs;

    fs.readFile(templatesPath, 'utf-8', function (error, data) {
        var dataError = {};

        if (error) {
            dataError.templatesPath = templatesPath;
            if (typeof currentRouteParameters.template === 'undefined') {
                NA.log(NA.appLabels.templateNotSet);
            } else {
                NA.log(NA.appLabels.templateNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
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
        dataError = {},
        variationsPath;

        /* Find the correct path for variations. */
        variationsPath = path.join(
            NA.websitePhysicalPath,
            NA.webconfig.variationsRelativePath,
            (languageCode) ? languageCode : '',
            (variationName) ? variationName : ''
        );

    /* Explain errors. */
    function explainError(exception) {
        dataError.variationsPath = variationsPath;
        if (exception.code === 'ENOENT' && !errorDisabled && !languageCode) {
            NA.log(NA.appLabels.variationNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
        } else if (exception.toString().indexOf('SyntaxError') !== -1 && !errorDisabled && !languageCode) {
            dataError.syntaxError = exception.toString();
            NA.log(NA.appLabels.variationSyntaxError.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
        } else {
            NA.log(exception);
        }
        return false;
    }

    if (typeof variationName !== 'undefined') {
        try {
            /* Return the variations variable into an object. */
            return JSON.parse(fs.readFileSync(variationsPath, 'utf-8'));
        } catch (exception) {
            /* Explain errors. */
            explainError(exception);
        }
    }
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderLanguage
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} templatesPath          Path to the based template.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderLanguage = function (currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path) {
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
         * @memberOf NA#currentRouteParameters
         * @default undefined
         */
        currentRouteParameters.languageCode ||

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
    NA.prepareRenderPath(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path);
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderPath
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} templatesPath          Path to the based template.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderPath = function (currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path) {
    var NA = this;

    /**
     * Idem as `NA#variation.urlBasePath` without "/" at the end.
     * @public
     * @alias urlBasePathSlice
     * @type {string}
     * @memberOf NA#currentVariation
     * @example http://localhost:7777/subpath
     * https://www.example.here
     */
    currentVariation.urlBasePathSlice = NA.webconfig.urlWithoutFileName.replace(/\/$/g, "") + NA.webconfig.urlRelativeSubPath;

    /**
     * Expose the current URL of page with `NA#webconfig.urlWithoutFileName` and `NA#webconfig.urlRelativeSubPath`.
     * @public
     * @alias urlBasePath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example http://localhost:7777/subpath/
     * https://www.example.here/
     */
    currentVariation.urlBasePath = currentVariation.urlBasePathSlice + '/';

    /**
     * Expose the current URL of page with `NA#webconfig.urlBasePath` and the current page route.
     * @public
     * @alias urlPath
     * @type {string}
     * @memberOf NA#currentVariation
     * @example http://localhost:7777/subpath/example.html (if current route is '/example.html')
     * https://www.example.here/example/this/ (if current route is '/example/this/')
     */
    currentVariation.urlPath = currentVariation.urlBasePath.replace(/\/$/g, "") + currentPath;

    /**
     * Same as `NA#variations.pathname`.
     * @public
     * @alias pathname
     * @type {string}
     * @memberOf NA#currentVariation
     */
    currentVariation.pathname = NA.variations.pathname;

    /**
     * Same as `NA#variations.filename`.
     * @public
     * @alias filename
     * @type {string}
     * @memberOf NA#currentVariation
     */
    currentVariation.filename = NA.variations.filename;

    /* Next preparation render for variation. */
    NA.prepareRenderVariation(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path);
};

/**
 * Create some variable for manage variation into render.
 * @private
 * @function prepareRenderVariation
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} templatesPath          Path to the based template.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderVariation = function (currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path) {
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
         * At http://localhost/example/test/ the value of `NA.variations#params` is
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
     * @memberOf NA#currentRouteParameters
     */
    currentVariation.specific = NA.openVariation(currentRouteParameters.variation, currentVariation.languageCode);
    if (currentVariation.languageCode) {

        /**
         * Expose all JSON data from `routes[<currentRoute>].variation` file.
         * @public
         * @alias specific
         * @type {Object}
         * @memberOf NA#currentVariation
         */
        currentVariation.specific = extend(true, NA.openVariation(currentRouteParameters.variation, undefined, true), currentVariation.specific);
    }

    /* Nexts Step for render. */
    NA.prepareRenderParameters(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path);
};

/**
 * Create some variable for manage parameters into render.
 * @private
 * @function prepareRenderParameters
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} templatesPath          Path to the based template.
 * @param {string} currentPath            Url from `url` value for this render.
 * @param {string} path                   Url path for this render.
 */
exports.prepareRenderParameters = function (currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path) {
    var NA = this;

    /**
     * Expose all data from `routes[<currentRoute>]` object from webconfig.
     * @public
     * @alias currentRouteParameters
     * @type {Object}
     * @memberOf NA#currentVariation
     */
    currentVariation.currentRouteParameters = currentRouteParameters;

    /**
     * Expose the key from `<currentRoute>` object from webconfig.
     * @public
     * @alias currentRouteName
     * @type {Object}
     * @memberOf NA#currentVariation
     */
    if (currentVariation.currentRouteParameters.url) {
        currentVariation.currentRouteName = path;
    }

    /**
     * Expose route of current page from current webconfig `routes`.
     * @public
     * @alias currentRoute
     * @type {string}
     * @memberOf NA#currentVariation
     * @example /categories/:category/
     */
    currentVariation.currentRoute = currentPath;

    /**
     * Expose all webconfig values.
     * @public
     * @alias webconfig
     * @type {Object}
     * @memberOf NA#currentVariation
     */
    currentVariation.webconfig = NA.webconfig;

    /* Nexts Step for render. */
    NA.changeVariationCommon(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path);
};

/**
 * Intercept Variation from common file.
 * @private
 * @function changeVariationCommon
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} templatesPath          Path to the based template.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeVariationCommon = function (currentVariation, currentRouteParameters, request, response, templatesPath, currentPath) {
    var NA = this;

    /* Use the `NA.websiteController[<commonController>].changeVariation(...)` function if set... */
    if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.websiteController[NA.webconfig.commonController].changeVariation !== 'undefined') {

            /**
             * Define this function for intercept Variation object and modify it. Both `common` and `specific` controller.
             * @function changeVariation
             * @memberOf NA#websiteController[]
             * @param {Object}                   params           Collection of property.
             * @param {string}                   params.variation Variation object of current page.
             * @param {Object}                   params.request   Initial request.
             * @param {Object}                   params.response  Initial response.
             * @param {changeVariation~callback} callback         Next steps after configuration is done.
             */
            NA.websiteController[NA.webconfig.commonController].changeVariation.call(NA, { variation: currentVariation, request: request, response: response },

            /**
             * Next steps after changeVariation is done.
             * @callback changeVariation~callback
             * @param {Object} currentVariation Variation object with new values.
             */
            function (currentVariation) {
                NA.changeVariationSpecific(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath);
            });
    /* ...else, just continue. */
    } else {
        NA.changeVariationSpecific(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath);
    }
};

/**
 * Intercept Variation from specific file.
 * @private
 * @function changeVariationSpecific
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} templatesPath          Path to the based template.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeVariationSpecific = function (currentVariation, currentRouteParameters, request, response, templatesPath, currentPath) {
    var NA = this;

    if (typeof NA.websiteController[currentRouteParameters.controller] !== 'undefined' &&
        typeof NA.websiteController[currentRouteParameters.controller].changeVariation !== 'undefined') {
            /* Use the `NA.websiteController[<controller>].changeVariation(...)` function if set... */
            NA.websiteController[currentRouteParameters.controller].changeVariation.call(NA, { variation: currentVariation, request: request, response: response }, function (currentVariation) {
                NA.changeDomCommon(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath);
            });
    } else {
        /* ...else, just continue. */
        NA.changeDomCommon(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath);
    }
};

/**
 * Intercept DOM from common file.
 * @private
 * @function changeDomCommon
 * @memberOf NA#
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} templatesPath          Path to the based template.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeDomCommon = function (currentVariation, currentRouteParameters, request, response, templatesPath, currentPath) {
    var NA = this,
        ejs = NA.modules.ejs,
        pathM = NA.modules.path;

    /* Open the template file */
    NA.openTemplate(currentRouteParameters, templatesPath, function (data) {

        /* Set the file currently in use. */
        currentVariation.filename = pathM.join(currentVariation.pathname, currentRouteParameters.template);

        try {
            /* Transform ejs data and inject incduded file. */
           data = ejs.render(data, currentVariation);
        } catch (exception) {
            /* Make error more readable. */
            data = exception.toString()
                .replace(/[\n]/g, "<br>")
                .replace(/    /g, "<span style='display:inline-block;width:32px'></span>")
                .replace(/ >> /g, "<span style='display:inline-block;width:32px'>&gt;&gt;</span>");
        }

        /* Use the `NA.websiteController[<commonController>].changeDom(...)` function if set... */
        if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
            typeof NA.websiteController[NA.webconfig.commonController].changeDom !== 'undefined') {

                /**
                 * Define this function for intercept DOM and modify it with jQuery for example. Both `common` and `specific` controller.
                 * @function changeDom
                 * @memberOf NA#websiteController[]
                 * @param {Object}             params          Collection of property.
                 * @param {string}             params.dom      DOM of current page.
                 * @param {Object}             params.request  Initial request.
                 * @param {Object}             params.response Initial response.
                 * @param {changeDom~callback} callback        Next steps after configuration is done.
                 */
                NA.websiteController[NA.webconfig.commonController].changeDom.call(NA, { dom: data, request: request, response: response },

                function (data) {

                    /**
                     * Next steps after changeDomSpecific is done.
                     * @callback changeDomSpecific~callback
                     * @param {string} data             DOM with modifications.
                     * @param {Object} currentVariation List of all variations for this page.
                     */
                    NA.changeDomSpecific(data, currentVariation, currentRouteParameters, request, response, currentPath);
                });
        /* ...else, just continue. */
        } else {
            NA.changeDomSpecific(data, currentVariation, currentRouteParameters, request, response, currentPath);
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
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.changeDomSpecific = function (data, currentVariation, currentRouteParameters, request, response, currentPath) {
    var NA = this;

    if (typeof NA.websiteController[currentRouteParameters.controller] !== 'undefined' &&
        typeof NA.websiteController[currentRouteParameters.controller].changeDom !== 'undefined') {
            /** Use the `NA.websiteController[<controller>].changeVariation(...)` function if set... */
            NA.websiteController[currentRouteParameters.controller].changeDom.call(NA, { dom: data, request: request, response: response }, function (data) {
                NA.intoBrowserAndFiles(data, currentVariation, currentRouteParameters, request, response, currentPath);
            });
    } else {
        /** ...else, just continue. */
        NA.intoBrowserAndFiles(data, currentVariation, currentRouteParameters, request, response, currentPath);
    }
};

/**
 * Inject CSS into DOM if needed.
 * @private
 * @function intoBrowserAndFiles
 * @memberOf NA#
 * @param {string} data                   DOM Generated.
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.intoBrowserAndFiles = function (data, currentVariation, currentRouteParameters, request, response, currentPath) {
    var NA = this;

    /* Inject CSS into DOM... */
    if (NA.webconfig.injectCss || currentRouteParameters.injectCss) {
        NA.injectCss(data, currentRouteParameters.injectCss, function (data) {
            NA.renderTemplate(data, currentVariation, currentRouteParameters, request, response, currentPath);
        });
    /* ...or do nothing. */
    } else {
        NA.renderTemplate(data, currentVariation, currentRouteParameters, request, response, currentPath);
    }
};

/**
 * Write file or/and send response.
 * @private
 * @function renderTemplate
 * @memberOf NA#
 * @param {string} data                   HTML DOM ready for sending.
 * @param {Object} currentVariation       Variations for the current page.
 * @param {Object} currentRouteParameters All parameters from current route.
 * @param {Object} request                Information from request.
 * @param {Object} response               Information from response.
 * @param {string} currentPath            Url from `url` value for this render.
 */
exports.renderTemplate = function (data, currentVariation, currentRouteParameters, request, response, currentPath) {
    var NA = this,
        async = NA.modules.async,

        /**
         * Allow NodeAtlas to generate real file into `NA#webconfig.generatesRelativePath` directory if set to true.
         * @public
         * @alias htmlGenerateBeforeResponse
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        htmlGenerateBeforeResponse = NA.webconfig.htmlGenerateBeforeResponse,
        htmlGenerateEnable = (typeof NA.webconfig.htmlGenerateEnable === 'boolean') ? NA.webconfig.htmlGenerateEnable : true,
        templateRenderName;

    /* Create the file for asset mode */
    if (typeof response === 'undefined' || (htmlGenerateBeforeResponse && htmlGenerateEnable)) {

        /**
         * Output name of file generate if `NA#webconfig.htmlGenerateBeforeResponse` is set to true or if `--generate` command is used.
         * If value is set to `false`, no generate page will be generated.
         * @public
         * @alias generate
         * @type {string|boolean}
         * @memberOf NA#currentRouteParameters
         */
        templateRenderName = currentPath;

        if (typeof currentRouteParameters.generate !== 'undefined') {
            templateRenderName = currentRouteParameters.generate;
        }

        NA.saveTemplateRender(data, templateRenderName);
    }

    /* Run page into browser. */
    if (typeof response !== 'undefined') {
        /* Compression of CSS, JS and Images if required. */
        async.parallel([
            ((NA.webconfig.stylesheetsBundlesBeforeResponse) ? NA.lessCompilation.bind(NA) : NA.cssMinification.bind(NA)),
            NA.jsObfuscation.bind(NA),
            NA.imgOptimization.bind(NA)
        ], function () {
            NA.response(request, response, data, currentRouteParameters, currentVariation);
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
         * @namespace currentRouteParameters
         * @public
         * @alias currentRouteParameters
         * @type {Object}
         * @memberOf NA#
         */
        currentRouteParameters = options[path],
        templatesPath,

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

    /* Inject template shortcut to template. */
    if (typeof currentRouteParameters === 'string') {
        /* templatesPath is just use like temp var in this if statement. */
        templatesPath = currentRouteParameters;
        currentRouteParameters = {};

        /**
         * This is the file name of template used for render of page behind the route.
         * @public
         * @alias template
         * @type {string}
         * @memberOf NA#currentRouteParameters
         */
        currentRouteParameters.template = templatesPath;
    }

    /* Generate the server path to the template file. */
    templatesPath = pathM.join(
        NA.websitePhysicalPath,
        NA.webconfig.templatesRelativePath,
        (currentRouteParameters.template) ? currentRouteParameters.template : ""
    );

    /* Case of `currentRouteParameters.url` replace `path` because `path` is used like a key. */
    if (currentRouteParameters.url) {
        currentPath = currentRouteParameters.url;
    }

    /* Loading the controller file if `currentRouteParameters.controller` exist. */
    NA.loadController(

        /**
         * This is the file name of specific controller used for back-end part of this page.
         * @public
         * @alias controller
         * @type {string}
         * @memberOf NA#currentRouteParameters
         */
        currentRouteParameters.controller,
        function () {
            /* Next preparation path render. */
            NA.prepareRenderLanguage(currentVariation, currentRouteParameters, request, response, templatesPath, currentPath, path);
        });
};