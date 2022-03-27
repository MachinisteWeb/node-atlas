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
 * @param {string}      path     The url listening.
 * @param {Object}      options  Option associate to this url.
 * @param {Object}      request  Initial request.
 * @param {Object}      response Initial response.
 * @param {NA~callback} next     Next step after.
 */
exports.prepareResponse = function (path, options, request, response, next) {
	var NA = this,

		/**
		 * All parameters from a specific page.
		 * @namespace routeParameters
		 * @public
		 * @alias routeParameters
		 * @type {Object}
		 * @memberOf NA#locals
		 */
		routeParameters = options[path],

		/**
		 * All locals provided for Views Template Engine and Hooks.
		 * @namespace locals
		 * @public
		 * @alias locals
		 * @type {Object}
		 * @memberOf NA#
		 */
		locals = {

			/**
			 * Expose route of current page from current webconfig `routes`.
			 * @public
			 * @alias route
			 * @type {string}
			 * @memberOf NA#locals
			 * @example /categories/:category/
			 */
			route: path
		};

	/* path contain `{ view, controller, ... }` because `NA.webconfig.routes` is `[{ view, controller, ... }, ...]` */
	if (typeof path === "object") {
		routeParameters = path;
	}

	/* routeParameters contain `"index.htm"` because `NA.webconfig.routes["/"]` is `"index.htm"` not `{ view, controller, ... }` */
	if (typeof routeParameters === 'string') {
		routeParameters = {

			/**
			 * This is the file name of view used for render of page behind the route.
			 * @public
			 * @alias view
			 * @type {string}
			 * @memberOf NA#locals.routeParameters
			 */
			view: routeParameters
		};
	}

	/* Case of `routeParameters.url` replace `path` because `path` is used like a key. */
	if (routeParameters.url) {
		locals.route = routeParameters.url;
	}

	if (routeParameters.url && typeof path === "string") {

		/**
		 * Expose the key from `<currentRoute>` object from webconfig.
		 * @public
		 * @alias routeKey
		 * @type {Object}
		 * @memberOf NA#locals
		 */
		locals.routeKey = path;
	}
	if (routeParameters.key) {
		locals.routeKey = routeParameters.key;
	}

	/**
	 * Expose all data from `routes[<currentRoute>]` object from webconfig.
	 * @public
	 * @alias routeParameters
	 * @type {Object}
	 * @memberOf NA#locals
	 */
	locals.routeParameters = routeParameters;

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
	}

	NA.prepareRenderLanguage(locals, request, response, next);
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderLanguage
 * @memberOf NA#
 * @this NA
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.prepareRenderLanguage = function (locals, request, response, next) {
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
		 * @memberOf NA#locals.routeParameters
		 * @default undefined
		 */
		locals.routeParameters.languageCode ||

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
	NA.prepareRenderPath(locals, request, response, next);
};

/**
 * Create some variable for manage path for render.
 * @private
 * @function prepareRenderPath
 * @memberOf NA#
 * @this NA
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.prepareRenderPath = function (locals, request, response, next) {
	var NA = this,
		path = NA.modules.path,
		url = NA.modules.url,
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
	locals.urlFilePath = locals.routeParameters.output || locals.routeParameters.url;
	if (request) {
		locals.urlFilePath = url.format(path.join("/", request.url.replace(new RegExp("^/?" + locals.urlSubPath), "")));
	}

	/**
	 * Query from `url` value for current route.
	 * @public
	 * @alias urlQueryPath
	 * @type {string}
	 * @memberOf NA#locals
	 * @example ?title=MachinisteWeb&description=ok
	 * ?title=MachinisteWeb
	 */
	locals.urlQueryPath = query && query[1] ? "?" + query[1] : "";

	/**
	 * Expose the current URL of page with `NA#webconfig.urlBasePath` and the current page route.
	 * @public
	 * @alias urlPath
	 * @type {string}
	 * @memberOf NA#locals
	 * @example http://localhost:7777/subpath/example.html?title=MachinisteWeb&description=ok
	 * https://www.example.here/example/this/?title=MachinisteWeb
	 */
	locals.urlPath = locals.urlBasePath + locals.route + locals.urlQueryPath;
	if (request) {
		locals.urlPath = "http" + ((NA.webconfig.httpSecure) ? "s" : "") + '://' + request.get("host") + request.originalUrl;
	}

	/* Next preparation render for variation. */
	NA.prepareRenderVariation(locals, request, response, next);
};

/**
 * Create some variable for manage variation into render.
 * @private
 * @function prepareRenderVariation
 * @memberOf NA#
 * @this NA
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.prepareRenderVariation = function (locals, request, response, next) {
	var NA = this,
		extend = NA.modules.extend,
		async = NA.modules.async;

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

	async.parallel([
		function (callback) {

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

			callback();
		},
		function (callback) {

			/**
			 * Name of file for `specific` variation.
			 * @public
			 * @alias variation
			 * @type {string}
			 * @memberOf NA#locals.routeParameters
			 */
			locals.specific = NA.openVariation(locals.routeParameters.variation, locals.languageCode);
			if (locals.languageCode) {

				/**
				 * Expose all JSON data from `routes[<currentRoute>].variation` file.
				 * @public
				 * @alias specific
				 * @type {Object}
				 * @memberOf NA#locals
				 */
				locals.specific = extend(true, NA.openVariation(locals.routeParameters.variation, undefined, true), locals.specific);
			}

			callback();
		}
	], function () {

		/* Nexts Step for render. */
		NA.prepareHeaders(locals, request, response, next);
	});
};

/**
 * Add and Remove headers from Webconfig.
 * @private
 * @function manageHeaders
 * @memberOf NA~
 * @param {NA}     NA       NodeAtlas instance.
 * @param {Object} headers  All headers from webconfig.
 * @param {Object} response All stuff for HTTP response.
 */
function manageHeaders(NA, headers, response) {
	var header;

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

/**
 * Set all webconfig headers.
 * @private
 * @function prepareHeaders
 * @memberOf NA#
 * @this NA
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.prepareHeaders = function (locals, request, response, next) {
	var NA = this,

		/**
		 * Charset used for render of this page.
		 * @public
		 * @alias charset
		 * @type {string}
		 * @memberOf NA#locals.routeParameters
		 * @default "utf-8"
		 */
		charset = locals.routeParameters.charset || NA.webconfig.charset,

		/**
		 * Content Type used for respond with this page.
		 * @public
		 * @alias mimeType
		 * @type {string}
		 * @memberOf NA#locals.routeParameters
		 * @default "text/html"
		 */
		mimeType = locals.routeParameters.mimeType || NA.webconfig.mimeType,

		/**
		 * Status Code used for respond with this page.
		 * @public
		 * @alias statusCode
		 * @type {number}
		 * @memberOf NA#locals.routeParameters
		 * @default 200
		 */
		statusCode = locals.routeParameters.statusCode || 200,

		/**
		 * Headers value used for respond with this page.
		 * @public
		 * @alias mimeType
		 * @type {string}
		 * @memberOf NA#locals.routeParameters
		 * @default "text/html"
		 */
		headers = locals.routeParameters.headers || {};

	if (response) {
		/* Set charset and  */
		response.statusCode = statusCode;

		/* Set headers into response */
		response.setHeader("Content-Type", mimeType + ";" + " charset=" + charset);
		manageHeaders(NA, headers, response);
	}

	/* Nexts Step for render. */
	next(locals, request, response);
};

/**
 * Intercept Variation from common file.
 * @private
 * @function changeVariationsCommon
 * @memberOf NA#
 * @this NA
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.changeVariationsCommon = function (locals, request, response, next) {
	var NA = this;

	/* Loading the controller file if `routeParameters.controller` exist. */
	NA.openController(

		/**
		 * This is the file name of specific controller used for back-end part of this page.
		 * @public
		 * @alias controller
		 * @type {string}
		 * @memberOf NA#locals.routeParameters
		 */
		locals.routeParameters.controller);

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
				NA.changeVariationsSpecific(locals, request, response, next);
			}, locals, request, response);
	/* ...else, just continue. */
	} else {
		NA.changeVariationsSpecific(locals, request, response, next);
	}
};

/**
 * Intercept Variation from specific file.
 * @private
 * @function changeVariationsSpecific
 * @memberOf NA#
 * @this NA
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.changeVariationsSpecific = function (locals, request, response, next) {
	var NA = this;

	if (typeof NA.controllers[locals.routeParameters.controller] !== 'undefined' &&
		typeof NA.controllers[locals.routeParameters.controller].changeVariations !== 'undefined') {
			/* Use the `NA.controllers[<controller>].changeVariations(...)` function if set... */
			NA.controllers[locals.routeParameters.controller].changeVariations.call(NA, function () {
				NA.changeDomCommon(locals, request, response, next);
			}, locals, request, response);
	} else {
		/* ...else, just continue. */
		NA.changeDomCommon(locals, request, response, next);
	}
};

/**
 * Prepare the choosen engine to parse view.
 * @private
 * @function prepareEngineProcess
 * @memberOf NA~
 * @param {NA}          NA       NodeAtlas instance.
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
function prepareEngineProcess(NA, locals, response, next) {
  var ejs = NA.modules.ejs,
		pug = NA.modules.pug,
		pathM = NA.modules.path,
		engine = NA.webconfig.pug ? pug : ejs,
		path = NA.modules.path,
		view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, (

			/**
			 * Name of file for `common` view.
			 * @public
			 * @alias view
			 * @type {string}
			 * @memberOf NA#webconfig
			 */
			NA.webconfig.view) ? NA.webconfig.view : (locals.routeParameters.view || ""));

	if (typeof locals.routeParameters.pug === "boolean") {

		/**
		 * Allow you to enable Pug only for a page.
		 * @public
		 * @alias pug
		 * @type {boolean}
		 * @memberOf NA#locals.routeParameters
		 * @default undefined
		 */
		engine = locals.routeParameters.pug ? pug : ejs;
	}

	/* Without view, no data. */
	if (!locals.routeParameters.view) {
		return next("");
	}

	/**
	 * Allow template engine know which file is currently in use.
	 * @public
	 * @alias filename
	 * @type {string}
	 * @memberOf NA#locals
	 */
	locals.filename = pathM.join(NA.serverPath, NA.webconfig.viewsRelativePath, NA.webconfig.view || locals.routeParameters.view);

	engineProcess(NA, view, engine, locals, response, next);
}

/**
 * Choose an engine to parse view.
 * @private
 * @function engineProcess
 * @memberOf NA~
 * @param {NA}          NA       NodeAtlas instance.
 * @param {string}      view     View to parse.
 * @param {string}      engine   Engine to parse.
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
function engineProcess(NA, view, engine, locals, response, next) {
	if (NA.webconfig.engine) {

		/* Transform from any engine but globaly. */
		response.render(view, locals, function (err, data) {
			if (err) {
				data = err.toString();
			}

			next(data);
		});
	} else {
		/* Open the template file */
		NA.openView(locals.routeParameters, view, function (data) {

			/* Transform ejs/pug data and inject incduded file. */
			try {
				data = engine.render(data, locals);
			} catch (err) {
				/* Make error more readable. */
				data = err.toString()
					.replace(/</g, "&lt;")
					.replace(/[\n]/g, "<br>")
					.replace(/\t/g, "<span style='display:inline-block;width:32px'></span>")
					.replace(/    /g, "<span style='display:inline-block;width:32px'></span>")
					.replace(/   /g, "<span style='display:inline-block;width:32px'></span>")
					.replace(/  /g, "<span style='display:inline-block;width:32px'></span>")
					.replace(/ >> /g, "<span style='display:inline-block;width:32px'>&gt;&gt;</span>")
					.replace(/> ([0-9])+\|/g, "<span style='display:inline-block;margin-left:-13px'>> $1|</span>")
					.replace(/^([a-zA-Z]+):/g, "$1:<br><br>");
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
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.changeDomCommon = function (locals, request, response, next) {
	var NA = this;

		// Transform into HTML
		prepareEngineProcess(NA, locals, response, function (data) {

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
						var jsdom = NA.modules.jsdom;
						return new jsdom.JSDOM(data);
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
					function (dom) {
						if (typeof dom === "object") {
							locals.dom = dom.serialize();
						}
						NA.changeDomSpecific(locals, request, response, next);
					}, locals, request, response);
			/* ...else, just continue. */
			} else {
				NA.changeDomSpecific(locals, request, response, next);
			}
		});
};

/**
 * Intercept DOM from specific file.
 * @private
 * @function changeDomSpecific
 * @memberOf NA#
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.changeDomSpecific = function (locals, request, response, next) {
	var NA = this;

	if (typeof NA.controllers[locals.routeParameters.controller] !== 'undefined' &&
		typeof NA.controllers[locals.routeParameters.controller].changeDom !== 'undefined') {

			locals.virtualDom = function () {
				var jsdom = NA.modules.jsdom;
				return new jsdom.JSDOM(data);
			};

			/** Use the `NA.controllers[<controller>].changeVariations(...)` function if set... */
			NA.controllers[locals.routeParameters.controller].changeDom.call(NA, function (dom) {
				if (typeof dom === "object") {
					locals.dom = dom.serialize();
				}
				NA.intoBrowserAndFiles(locals, request, response, next);
			}, locals, request, response);
	} else {
		/** ...else, just continue. */
		NA.intoBrowserAndFiles(locals, request, response, next);
	}
};

/**
 * Inject CSS into DOM if needed.
 * @private
 * @function intoBrowserAndFiles
 * @memberOf NA#
 * @param {Object}      locals   Local variables for the current page.
 * @param {Object}      request  Information from request.
 * @param {Object}      response Information from response.
 * @param {NA~callback} next     Next step after.
 */
exports.intoBrowserAndFiles = function (locals, request, response, next) {
	var NA = this;

	/* Inject CSS into DOM... */
	if (NA.webconfig.injectCss || locals.routeParameters.injectCss) {
		NA.injectCss(locals.dom, locals.routeParameters.injectCss, function (dom) {
			NA.renderTemplate(dom, locals, request, response, next);
		});
	/* ...or do nothing. */
	} else {
		NA.renderTemplate(locals.dom, locals, request, response, next);
	}
};

/**
 * Write file or/and send response.
 * @private
 * @function renderTemplate
 * @memberOf NA#
 * @param {string}      data            HTML DOM ready for sending.
 * @param {Object}      locals          Local variables for the current page.
 * @param {Object}      request         Information from request.
 * @param {Object}      response        Information from response.
 * @param {NA~callback} next            Next step after.
 */
exports.renderTemplate = function (data, locals, request, response, next) {
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
		output = (typeof NA.webconfig.output === 'boolean') ? NA.webconfig.output : true,
		templateRenderName;

	/* Create the file for asset mode */
	if (typeof response === "undefined" || (htmlGenerationBeforeResponse && output)) {

		/**
		 * Output name of file generate if `NA#webconfig.htmlGenerationBeforeResponse` is set to true or if `--generate` command is used.
		 * If value is set to `false`, no generate page will be generated.
		 * @public
		 * @alias output
		 * @type {string|boolean}
		 * @memberOf NA#locals.routeParameters
		 */
		templateRenderName = locals.route;

		if (typeof locals.routeParameters.output !== 'undefined') {
			templateRenderName = locals.routeParameters.output;
		}

		NA.saveRender(data, templateRenderName);
	}

	/* Run page into browser. */
	if (typeof response !== "undefined") {
		/* Compression of CSS, JS and Images if required. */
		async.parallel([
			NA.cssCompilation.bind(NA),
			NA.jsObfuscation.bind(NA)
		], function () {
			NA.sendResponse(request, response, data, next);
		});
	}
};