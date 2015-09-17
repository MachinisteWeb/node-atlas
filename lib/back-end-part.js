/*------------------------------------*\
    $%BACK-END PART
\*------------------------------------*/
/* jslint node: true */

/**
 * Check if a file have been already parsed.
 * @private
 * @function alreadyParse
 * @memberOf NA#
 * @param {string}         newPath     Current file tested.
 * @param {Array.<string>} allCssFiles Files already tested.
 * @param {string}         inject      State for know if injection will be authorized.
 */
exports.cssAlreadyParse = function (newPath, allCssFiles, inject) {
    var NA = this,
        path = NA.modules.path;

    for (var i = 0; i < allCssFiles.length; i++) {
        if (path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, newPath) === allCssFiles[i]) {
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
        allCssFiles.push(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, pathFile));
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
         * @memberOf NA#currentRouteParameters
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
        allCssFiles.push(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, commonInjection));
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
        $ = cheerio.load(dom);

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

/**
 * Engine for compile Less file without call any CSS files.
 * @private
 * @function lessCompilation
 * @memberOf NA#
 * @callback lessCompilation~callback callback Next step after Less compilation.
 */
exports.lessCompilation = function (callback) {
    var NA = this,
        enableLess = NA.webconfig.enableLess,
        async = NA.modules.async,
        path = NA.modules.path,
        less = NA.modules.less,
        fs = NA.modules.fs,
        allLessCompiled,
        data = {};

    if (enableLess && enableLess.less) {

        allLessCompiled = enableLess.less;

        if (enableLess.paths) {
            for (var i = 0; i < enableLess.paths.length; i++) {
                enableLess.paths[i] = path.join(NA.webconfig.assetsRelativePath, enableLess.paths[i]);
            }
        } else {
            enableLess.paths = [
                NA.webconfig.assetsRelativePath,
                path.join(NA.webconfig.assetsRelativePath, 'stylesheets'),
                path.join(NA.webconfig.assetsRelativePath, 'styles'),
                path.join(NA.webconfig.assetsRelativePath, 'css')
            ];
        }

        async.each(allLessCompiled, function (compiledFile, next) {
            var currentFile = fs.readFileSync(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compiledFile), 'utf-8');

            less.render(currentFile, enableLess, function (e, output) {
                if (e) {
                    NA.log(e);
                }

                data.pathName = path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.less$/g,'.css'));
                fs.writeFileSync(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.less$/g,'.css')), output.css);
                NA.log(NA.appLabels.lessGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                next();
            });
        }, function () {

            /**
             * Next steps after less compilation.
             * @callback lessCompilation~callback
             */
            NA.cssMinification(callback);
        });
    } else {
        NA.cssMinification(callback);
    }

};

/**
 * Engine for minification and concatenation of all files with a Bundle configuration.
 * @private
 * @function cssMinification
 * @memberOf NA#
 * @callback cssMinification~callback callback Next step after minification and concatenation of all CSS.
 */
exports.cssMinification = function (callback) {
    var NA = this,
        bundles = NA.webconfig.bundles,
        cleanCss = NA.modules.cleanCss,
        async = NA.modules.async,
        path = NA.modules.path,
        fs = NA.modules.fs,
        enable = false,
        output = "",
        data = {},
        allCssMinified = [];

    /* Verify if bundle is okay and if engine must start. */
    enable = (NA.configuration.generate ||

        /**
         * CSS minification before each HTML response.
         * @public
         * @alias stylesheetsBundlesBeforeResponse
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.stylesheetsBundlesBeforeResponse);

    if (typeof NA.webconfig.stylesheetsBundlesEnable === 'boolean') {

        /**
         * No CSS minification if set to false.
         * @public
         * @alias stylesheetsBundlesEnable
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        enable = NA.webconfig.stylesheetsBundlesEnable;
    }

    /* Star engine. */
    if (bundles && bundles.stylesheets && enable) {

        NA.forEach(bundles.stylesheets, function (compressedFile) {
            allCssMinified.push(compressedFile);
        });

        async.each(allCssMinified, function (compressedFile, firstCallback) {

            async.map(bundles.stylesheets[compressedFile], function (sourceFile, secondCallback) {
                secondCallback(null, fs.readFileSync(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, sourceFile), 'utf-8'));
            }, function(error, results) {
                for (var i = 0; i < results.length; i++) {
                    output += results[i];
                }

                output = new cleanCss().minify(output);
                fs.writeFileSync(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compressedFile), output);
                data.pathName = path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compressedFile);
                NA.log(NA.appLabels.cssGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                output = "";

                firstCallback();
            });

        }, function () {

            /**
             * Next steps after minification and concatenation are done.
             * @callback cssMinification~callback
             */
            if (callback) {
                callback();
            }
        });
    } else {
        if (callback) {
            callback();
        }
    }
};

/**
 * Engine for optimization of all images with a Bundle configuration.
 * @private
 * @function imgOptimization
 * @memberOf NA#
 * @callback imgOptimization~callback callback Next step after optimization of all Images.
 */
exports.imgOptimization = function (callback) {
    var NA = this,
        optimizations = NA.webconfig.optimizations,
        imagemin = NA.modules.imagemin,
        async = NA.modules.async,
        path = NA.modules.path,
        enable = false,
        data = {},
        allImgMinified = [];

    /* Verify if bundle is okay and if engine must start. */
    enable = (NA.configuration.generate ||

        /**
         * Images optimization before each HTML response.
         * @public
         * @alias imagesOptimizationsBeforeResponse
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.imagesOptimizationsBeforeResponse);

    if (typeof NA.webconfig.imagesOptimizationsEnable === 'boolean') {

        /**
         * No images minification if set to false.
         * @public
         * @alias imagesOptimizationsEnable
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        enable = NA.webconfig.imagesOptimizationsEnable;
    }

    /* Star engine. */
    if (optimizations && optimizations.images && enable) {

        NA.forEach(optimizations.images, function (compressedFile) {
            allImgMinified.push(compressedFile);
        });

        async.each(allImgMinified, function (compressedFile, firstCallback) {

            var source = path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compressedFile),
                output = path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, optimizations.images[compressedFile]);

                (new imagemin())
                    .src(source)
                    .dest(output)
                    .use(imagemin.jpegtran({progressive: true}))
                    .use(imagemin.gifsicle({interlaced: true}))
                    .use(imagemin.optipng({optimizationLevel: 3}))
                    .use(imagemin.svgo())
                    .run(function () {
                        data.pathName = path.normalize(source);

                        NA.log(NA.appLabels.imgGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));

                        firstCallback();
                    });

        }, function () {

            /**
             * Next steps after minification and concatenation are done.
             * @callback cssMinification~callback
             */
            if (callback) {
                callback();
            }
        });
    } else {
        if (callback) {
            callback();
        }
    }
};

/**
 * Engine for obfuscation and concatenation of all files with a Bundle configuration.
 * @private
 * @function jsObfuscation
 * @memberOf NA#
 * @callback jsObfuscation~callback callback Next step after obfuscation and concatenation of all CSS.
 */
exports.jsObfuscation = function (callback) {
    var NA = this,
        bundles = NA.webconfig.bundles,
        uglifyJs = NA.modules.uglifyJs,
        async = NA.modules.async,
        path = NA.modules.path,
        fs = NA.modules.fs,
        enable = false,
        output = "",
        data = {},
        allJsMinified = [];

    /* Verify if bundle is okay and if engine must start. */
    enable = (NA.configuration.generate ||

        /**
         * JavaScript obfuscation before each HTML response.
         * @public
         * @alias javascriptBundlesBeforeResponse
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.javascriptBundlesBeforeResponse);

    if (typeof NA.webconfig.javascriptBundlesEnable === 'boolean') {

        /**
         * No JavaScript obfuscation if set to false.
         * @public
         * @alias javascriptBundlesEnable
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        enable = NA.webconfig.javascriptBundlesEnable;
    }

    /* Star engine. */
    if (bundles && bundles.javascript && enable) {

        NA.forEach(bundles.javascript, function (compressedFile) {
            allJsMinified.push(compressedFile);
        });

        async.each(allJsMinified, function (compressedFile, firstCallback) {

            async.map(bundles.javascript[compressedFile], function (sourceFile, secondCallback) {
                secondCallback(null, uglifyJs.minify(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, sourceFile)).code);
            }, function(error, results) {
                for (var i = 0; i < results.length; i++) {
                    output += results[i];
                }

                fs.writeFileSync(path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compressedFile), output);
                data.pathName = path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath, compressedFile);
                NA.log(NA.appLabels.jsGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                output = "";

                firstCallback();
            });

        }, function () {

            /**
             * Next steps after obfuscation and concatenation are done.
             * @callback jsObfuscation~callback
             */
            if (callback) {
                callback();
            }
        });
    } else {
        if (callback) {
            callback();
        }
    }
};

/**
 * Load the modules adding by the website.
 * @private
 * @function loadListOfExternalModules
 * @memberOf NA#
 * @param {loadListOfExternalModules~callback} callback Next steps after loading of additional modules.
 */
exports.loadListOfExternalModules = function (callback) {
    var NA = this;

    NA.loadController(NA.webconfig.commonController, function () {
        NA.nodeAtlasModulesPath = NA.websitePhysicalPath + 'node_modules/';
        NA.websiteModulesPath = NA.serverPhysicalPath + 'node_modules/';

        /* Use the `NA.websiteController[<commonController>].loadModules(...)` function if set... */
        if (typeof NA.websiteController[NA.webconfig.commonController] !== 'undefined' &&
            typeof NA.websiteController[NA.webconfig.commonController].loadModules !== 'undefined') {

            /**
             * Define this function for adding npm module into `NA.modules` of application. Only for `common` controller file.
             * @function loadModules
             * @memberOf NA#websiteController[]
             */
            NA.websiteController[NA.webconfig.commonController].loadModules.call(NA);
        }

        /**
         * Next step !
         * @callback loadListOfExternalModules~callback
         */
        callback();
    });
};

/**
 * Load a controller file.
 * @private
 * @function loadController
 * @memberOf NA#
 * @param {string}                  controller The name of controller file we want to load.
 * @param {loadController~callback} callback   Next steps after controller loading.
 */
exports.loadController = function (controller, callback) {
    var NA = this,
        path = NA.modules.path,
        commonControllerPath = path.join(
            NA.websitePhysicalPath,
            NA.webconfig.controllersRelativePath,
            (controller) ? controller : ''
        ),
        dataError = {};

    /* If a controller is required. Loading of this controller... */
    if (typeof controller !== 'undefined') {
        /* Open controller and load it */
        try {
            NA.websiteController[controller] = require(commonControllerPath);

            /**
             * Next step !
             * @callback loadController~callback
             */
            callback();
        /* In case of error. */
        } catch (exception) {
            dataError.moduleError = exception.toString();
            if (exception.code === 'MODULE_NOT_FOUND') {
                NA.log(NA.appLabels.moduleNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
            } else {
                throw exception;
            }
        }
    } else {
        /* ...else, continue without loading. */
        callback();
    }
};