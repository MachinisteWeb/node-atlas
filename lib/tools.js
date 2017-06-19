/*------------------------------------*\
	TOOLS
\*------------------------------------*/
/* jslint node: true */

/**
 * Engine for compile preprocessor CSS files and minify CSS output.
 * @private
 * @function cssCompilation
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after preprocessor compilation.
 */
exports.cssCompilation = function (next) {
	var NA = this,
		async = NA.modules.async;

	if (NA.configuration.generate || NA.webconfig.cssBundlingBeforeResponse) {
		async.parallel([
			NA.lessCompilation.bind(NA),
			NA.stylusCompilation.bind(NA)
		], function () {
			NA.cssMinification(next);
		});
	} else {
		next();
	}
};

/**
 * Engine for compile Less files.
 * @private
 * @function lessCompilation
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after Less compilation.
 */
exports.lessCompilation = function (next) {
	var NA = this,
		enableLess = NA.webconfig.less,
		async = NA.modules.async,
		path = NA.modules.path,
		less = NA.modules.less,
		fs = NA.modules.fs,
		allLessCompiled,
		data = {},
		paths = [];

	if (enableLess && enableLess.files) {

		allLessCompiled = enableLess.files;

		if (enableLess.paths && paths.length === 0) {
			for (var i = 0; i < enableLess.paths.length; i++) {
				paths[i] = path.join(NA.webconfig.assetsRelativePath, enableLess.paths[i]);
			}
		} else if (paths.length === 0) {
			paths = [
				NA.webconfig.assetsRelativePath,
				path.join(NA.webconfig.assetsRelativePath, 'stylesheets'),
				path.join(NA.webconfig.assetsRelativePath, 'styles'),
				path.join(NA.webconfig.assetsRelativePath, 'css')
			];
		}

		async.each(allLessCompiled, function (compiledFile, next) {
			var currentFile = fs.readFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile), 'utf-8'),
				prefixLess = new NA.modules.prefixLess(),
				options = {
					paths: paths
				};

			if (enableLess.autoprefix) {
				options.plugins = [prefixLess];
			}

			less.render(currentFile, options, function (e, output) {
				if (e) {
					NA.log(e);
				}

				data.pathName = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.less$/g,'.css'));
				fs.writeFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.less$/g,'.css')), output.css);
				NA.log(NA.cliLabels.lessGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
				next();
			});
		}, function () {
			if (next) {
				next();
			}
		});
	} else {
		if (next) {
			next();
		}
	}

};

/**
 * Engine for compile Stylus files.
 * @private
 * @function stylusCompilation
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after Stylus compilation.
 */
exports.stylusCompilation = function (next) {
	var NA = this,
		enableStylus = NA.webconfig.stylus,
		async = NA.modules.async,
		path = NA.modules.path,
		stylus = NA.modules.stylus,
		fs = NA.modules.fs,
		allStylusCompiled,
		data = {},
		paths = [];

	if (enableStylus && enableStylus.files) {

		allStylusCompiled = enableStylus.files;

		if (enableStylus.paths && paths.length === 0) {
			for (var i = 0; i < enableStylus.paths.length; i++) {
				paths[i] = path.join(NA.webconfig.assetsRelativePath, enableStylus.paths[i]);
			}
		} else if (paths.length === 0) {
			paths = [
				NA.webconfig.assetsRelativePath,
				path.join(NA.webconfig.assetsRelativePath, 'stylesheets'),
				path.join(NA.webconfig.assetsRelativePath, 'styles'),
				path.join(NA.webconfig.assetsRelativePath, 'css')
			];
		}

		async.each(allStylusCompiled, function (compiledFile, next) {
			var currentFile = fs.readFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile), 'utf-8'),
				stylusFn = stylus(currentFile);

			if (enableStylus.autoprefix) {
				stylusFn = stylusFn.use(NA.modules.prefixStylus());
			}

			stylusFn
			.set('paths', paths)
			.render(function (e, output) {
				if (e) {
					NA.log(e);
				}

				data.pathName = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.styl$/g,'.css'));
				fs.writeFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.styl$/g,'.css')), output);
				NA.log(NA.cliLabels.stylusGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
				next();
			});
		}, function () {
			if (next) {
				next();
			}
		});
	} else {
		if (next) {
			next();
		}
	}

};

/**
 * Engine for minification and concatenation of all files with a Bundle configuration.
 * @private
 * @function cssMinification
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after minification and concatenation of all CSS.
 */
exports.cssMinification = function (next) {
	var NA = this,
		bundles = NA.webconfig.bundles,
		cleanCss = NA.modules.cleanCss,
		async = NA.modules.async,
		path = NA.modules.path,
		fs = NA.modules.fs,
		enable,
		output = "",
		data = {},
		allCssMinified = [];

	/* Verify if bundle is okay and if engine must start. */
	enable = (NA.configuration.generate ||

		/**
		 * CSS minification before each HTML response.
		 * @public
		 * @alias cssBundlingBeforeResponse
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default false
		 */
		NA.webconfig.cssBundlingBeforeResponse);

	if (typeof NA.webconfig.cssBundlingEnable === "boolean") {

		/**
		 * No CSS minification if set to false.
		 * @public
		 * @alias cssBundlingEnable
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default true
		 */
		enable = NA.webconfig.cssBundlingEnable;
	}

	/* Star engine. */
	if (bundles && bundles.stylesheets && enable) {

		NA.forEach(bundles.stylesheets, function (compressedFile) {
			allCssMinified.push(compressedFile);
		});

		async.each(allCssMinified, function (compressedFile, firstCallback) {

			async.map(bundles.stylesheets[compressedFile], function (sourceFile, secondCallback) {
				try {
					secondCallback(null, fs.readFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, sourceFile), 'utf-8'));
				} catch (e) {
					secondCallback(e, "");
				}
			}, function(error, results) {
				if (error) {
					throw error;
				}
				for (var i = 0; i < results.length; i++) {
					output += results[i];
				}

				output = (new cleanCss().minify(output)).styles;
				compressedFile = compressedFile.replace(/{version}/g, NA.webconfig.version);
				fs.writeFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile), output);
				data.pathName = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile);
				NA.log(NA.cliLabels.cssGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
				output = "";

				firstCallback();
			});

		}, function () {
			if (next) {
				next();
			}
		});
	} else {
		if (next) {
			next();
		}
	}
};

/**
 * Engine for obfuscation and concatenation of all files with a Bundle configuration.
 * @private
 * @function jsObfuscation
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after obfuscation and concatenation of all CSS.
 */
exports.jsObfuscation = function (next) {
	var NA = this,
		bundles = NA.webconfig.bundles,
		uglifyEs = NA.modules.uglifyEs,
		async = NA.modules.async,
		path = NA.modules.path,
		fs = NA.modules.fs,
		enable,
		output = "",
		data = {},
		allJsMinified = [];

	/* Verify if bundle is okay and if engine must start. */
	enable = (NA.configuration.generate ||

		/**
		 * JavaScript obfuscation before each HTML response.
		 * @public
		 * @alias jsBundlingBeforeResponse
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default false
		 */
		NA.webconfig.jsBundlingBeforeResponse);

	if (typeof NA.webconfig.jsBundlingEnable === "boolean") {

		/**
		 * No JavaScript obfuscation if set to false.
		 * @public
		 * @alias jsBundlingEnable
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default true
		 */
		enable = NA.webconfig.jsBundlingEnable;
	}

	/* Star engine. */
	if (bundles && bundles.javascripts && enable) {

		NA.forEach(bundles.javascripts, function (compressedFile) {
			allJsMinified.push(compressedFile);
		});

		async.each(allJsMinified, function (compressedFile, firstCallback) {

			async.map(bundles.javascripts[compressedFile], function (sourceFile, secondCallback) {
				var code,
					result,
					file;

				/* For the NA.socket and NA.io auto configuration. */
				if (path.join("/", NA.webconfig.socketClientFile) === path.join("/", sourceFile)) {
					file = fs.readFileSync(path.join(NA.nodeatlasPath, "src", "socket.io.js"), "utf-8")
						.replace(/%urlRelativeSubPath%/g, NA.webconfig.urlRelativeSubPath.slice(1))
						.replace(/%urlRoot%/g, NA.webconfig.urlRoot);

					result = uglifyEs.minify(file);
				/* And for others real files. */
				} else {
					code = fs.readFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, sourceFile), "utf-8");
					result = uglifyEs.minify(code);
				}

				secondCallback(null, result.code);
			}, function(error, results) {
				if (error) {
					throw error;
				}

				for (var i = 0; i < results.length; i++) {
					output += results[i];
				}

				compressedFile = compressedFile.replace(/{version}/g, NA.webconfig.version);
				fs.writeFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile), output);
				data.pathName = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile);
				NA.log(NA.cliLabels.jsGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
				output = "";

				firstCallback();
			});

		}, function () {

			if (next) {
				next();
			}
		});
	} else {
		if (next) {
			next();
		}
	}
};

/**
 * Engine for optimization of all images with a configuration.
 * @private
 * @function imgOptimization
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after optimization of all Images.
 */
exports.imgOptimization = function (next) {
	var NA = this,
		optimizations = NA.webconfig.optimizations,
		imagemin = NA.modules.imagemin,
		jpegtran = NA.modules.jpegtran,
		optipng = NA.modules.optipng,
		gifsicle = NA.modules.gifsicle,
		svgo = NA.modules.svgo,
		async = NA.modules.async,
		path = NA.modules.path,
		enable,
		data = {},
		allImgMinified = [];

	/* Verify if bundle is okay and if engine must start. */
	enable = (NA.configuration.generate ||

		/**
		 * Images optimization before each HTML response.
		 * @public
		 * @alias imgOptimizationsBeforeResponse
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default false
		 */
		NA.webconfig.imgOptimizationsBeforeResponse);

	if (typeof NA.webconfig.imgOptimizationsEnable === 'boolean') {

		/**
		 * No images minification if set to false.
		 * @public
		 * @alias imgOptimizationsEnable
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default true
		 */
		enable = NA.webconfig.imgOptimizationsEnable;
	}

	/* Star engine. */
	if (optimizations && optimizations.images && enable) {

		NA.forEach(optimizations.images, function (compressedFile) {
			allImgMinified.push(compressedFile);
		});

		async.each(allImgMinified, function (compressedFile, firstCallback) {

			var source = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile),
				output = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, optimizations.images[compressedFile]);

				imagemin([source], output, { use: [
						jpegtran(NA.webconfig.optimizations && NA.webconfig.optimizations.jpg),
						optipng(NA.webconfig.optimizations && NA.webconfig.optimizations.png),
						gifsicle(NA.webconfig.optimizations && NA.webconfig.optimizations.gif),
						svgo(NA.webconfig.optimizations && NA.webconfig.optimizations.svg)
					] }).then(function () {
					data.pathName = path.normalize(source);

					NA.log(NA.cliLabels.imgGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));

					firstCallback();
				});
		}, function (error) {
			if (error) {
				throw error;
			}
			if (next) {
				next();
			}
		});
	} else {
		if (next) {
			next();
		}
	}
};

/**
 * Check if a file have been already parsed.
 * @private
 * @function cssAlreadyParse
 * @memberOf NA#
 * @param {string}         newPath     Current file tested.
 * @param {Array.<string>} allCssFiles Files already tested.
 * @param {string}         inject      State for know if injection will be authorized.
 */
exports.cssAlreadyParse = function (newPath, allCssFiles, inject) {
	var NA = this,
		path = NA.modules.path;

	for (var i = 0; i < allCssFiles.length; i++) {
		if (path.join(NA.serverPath, NA.webconfig.assetsRelativePath, newPath) === allCssFiles[i]) {
			inject = false;
		}
	}

	return inject;
};

/**
 * Inject Css if not already injected.
 * @private
 * @function injectCssAuth
 * @memberOf NA#
 * @param {string}         pathFile    Current file for injection.
 * @param {Array.<string>} allCssFiles Files already tested.
 * @param {string}         inject      State for know if injection will be authorized.
 */
exports.injectCssAuth = function (pathFile, allCssFiles, inject) {
	var NA = this,
		path = NA.modules.path;

	if (inject) {
		allCssFiles.push(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, pathFile));
	}
};

/**
 * Verify if common or specif file without double are ready for injection CSS.
 * @private
 * @function prepareCssInjection
 * @memberOf NA#
 * @param {Array.<string>} allCssFiles      Files already tested.
 * @param {string|Array.<string>} injection Represent the injectCss property injection to the template.
 */
exports.prepareCssInjection = function (allCssFiles, injection) {
	var NA = this,
		path = NA.modules.path,
		inject = true,

		/**
		 * CSS files for specific injection of CSS.
		 * @public
		 * @alias injectCss
		 * @type {string|Array.<string>}
		 * @memberOf NA#locals.routeParameters
		 */
		specificInjection = injection,

		/**
		 * CSS files for common injection of CSS.
		 * @public
		 * @alias injectCss
		 * @type {string|Array.<string>}
		 * @memberOf NA#webconfig
		 */
		commonInjection = NA.webconfig.injectCss;

	/* Add common injections. */
	if (typeof commonInjection === 'string') {
		allCssFiles.push(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, commonInjection));
	} else if (commonInjection) {
		for (var i = 0; i < commonInjection.length; i++) {
			/* Inject Css. */
			NA.injectCssAuth(NA.webconfig.injectCss[i], allCssFiles, inject);
		}
	}

	/* Add specific injections. */
	if (specificInjection) {
		if (typeof specificInjection === 'string') {
			/* Check if a file have been already parsed. */
			inject = NA.cssAlreadyParse(specificInjection, allCssFiles, inject);
			/* Inject Css. */
			NA.injectCssAuth(specificInjection, allCssFiles, inject);
		} else {
			for (var j = 0; j < specificInjection.length; j++) {
				/* Check if a file have been already parsed. */
				inject = NA.cssAlreadyParse(specificInjection[j], allCssFiles, inject);
				/* Inject Css. */
				NA.injectCssAuth(specificInjection[j], allCssFiles, inject);
				inject = true;
			}
		}
	}

	return allCssFiles;
};

/**
 * Inject the content of a stylesheets file into a DOM.
 * @private
 * @function injectCss
 * @memberOf NA#
 * @param {string}                 dom          The ouptput HTML.
 * @param {string|Array.<string>}  injection    Represent the injectCss property injection to the template.
 * @param {injectCss~mainCallback} mainCallback The next steps after injection.
 */
exports.injectCss = function (dom, injection, mainCallback) {
	var NA = this,
		cheerio = NA.modules.cheerio,
		cssParse = NA.modules.cssParse,
		async = NA.modules.async,
		fs = NA.modules.fs,
		allCssFiles = [],
		$ = cheerio.load(dom, { decodeEntities: false });

	/* Prepare Injection */
	allCssFiles = NA.prepareCssInjection(allCssFiles, injection);

	/* Injection */
	async.map(allCssFiles, function (sourceFile, callback) {
		/* Concatain all CSS. */
		callback(null, fs.readFileSync(sourceFile, 'utf-8'));
	}, function(error, results) {
		var output = "",
			css;

		for (var i = 0; i < results.length; i++) {
			output += results[i];
		}

		/* Parse CSS in JavaScript. */
		css = cssParse(output);

		/* Parse all rules Css. */
		function parseCssRules(callback) {
			for (var i = 0; i < css.stylesheet.rules.length; i++) {
				if (typeof css.stylesheet.rules[i].selectors !== 'undefined') {
					callback(i);
				}
			}
		}

		/* Parse all selector Css. */
		function parseCssSelector(i, callback) {
			for (var j = 0; j < css.stylesheet.rules[i].selectors.length; j++) {
				callback(j);
			}
		}

		/* Parse all declaration Css. */
		function parseCssDeclaration(i, j) {
			for (var k = 0; k < css.stylesheet.rules[i].declarations.length; k++) {
				$(css.stylesheet.rules[i].selectors[j]).css(css.stylesheet.rules[i].declarations[k].property, css.stylesheet.rules[i].declarations[k].value);
			}
		}

		/* Apply property on the DOM. */
		parseCssRules(function (i) {
			parseCssSelector(i, function (j) {
				parseCssDeclaration(i, j);
			});
		});

		/**
		 * Next steps after injection of CSS.
		 * @callback injectCss~mainCallback
		 * @param {string} dom DOM with modifications.
		 */
		mainCallback($.html());
	});
};