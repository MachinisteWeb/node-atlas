/*------------------------------------*\
    $%BACK-END PART
\*------------------------------------*/
/* jslint node: true */

/**
 * Set modules and NPM modules used by NodeAtlas project.
 * @private
 * @function initServerModules
 * @memberOf NA#
 * @this NA
 */
exports.initServerModules = function () {
    var NA = this;

    /* Open `common` controller. */
    NA.openController(

        /**
         * Name of file for `common` controller.
         * @public
         * @alias commonController
         * @type {string}
         * @memberOf NA#webconfig
         */
        NA.webconfig.commonController);

    /**
     * Folder which contain the `node-atlas` node modules.
     * @public
     * @alias nodeatlasModulesRelativePath
     * @type {string}
     * @memberOf NA#
     * @default "node_modules/"
     */
    NA.nodeatlasModulesRelativePath = "node_modules/";

    /**
     * Folder which contain the current website node modules.
     * @public
     * @alias serverModulesRelativePath
     * @type {string}
     * @memberOf NA#
     * @default "node_modules/"
     */
    NA.serverModulesRelativePath = "node_modules/";

    /* Use the `NA.controllers[<commonController>].setModules(...)` function if set... */
    if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.commonController].setModules !== 'undefined') {

        /**
         * Define this function for adding npm module into `NA.modules` of application. Only for `common` controller file.
         * @function setModules
         * @memberOf NA#controllers[]
         */
        NA.controllers[NA.webconfig.commonController].setModules.call(NA);
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
         * @memberOf NA#routeParameters
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

/**
 * Engine for compile Preprocessor language without call any CSS files.
 * @private
 * @function cssCompilation
 * @memberOf NA#
 * @param cssCompilation~callback callback Next step after Preprocessor compilation.
 */
exports.cssCompilation = function (callback) {
    var NA = this,
        async = NA.modules.async;

    if (NA.configuration.generate || NA.webconfig.stylesheetsBundlesBeforeResponse) {
        async.parallel([
            NA.lessCompilation.bind(NA),
            NA.stylusCompilation.bind(NA)
        ], function () {
            NA.cssMinification(callback);
        });
    } else {
        callback();
    }
};

/**
 * Engine for compile Less file without call any CSS files.
 * @private
 * @function lessCompilation
 * @memberOf NA#
 * @param lessCompilation~callback callback Next step after Less compilation.
 */
exports.lessCompilation = function (callback) {
    var NA = this,
        enableLess = NA.webconfig.enableLess,
        async = NA.modules.async,
        path = NA.modules.path,
        less = NA.modules.less,
        fs = NA.modules.fs,
        allLessCompiled,
        data = {},
        paths = [];

    if (enableLess && enableLess.less) {

        allLessCompiled = enableLess.less;

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
            var currentFile = fs.readFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile), 'utf-8');

            less.render(currentFile, {
                paths: paths
            }, function (e, output) {
                if (e) {
                    NA.log(e);
                }

                data.pathName = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.less$/g,'.css'));
                fs.writeFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile.replace(/\.less$/g,'.css')), output.css);
                NA.log(NA.cliLabels.lessGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                next();
            });
        }, function () {

            /**
             * Next steps after less compilation.
             * @callback lessCompilation~callback
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
 * Engine for compile Stylus file without call any CSS files.
 * @private
 * @function stylusCompilation
 * @memberOf NA#
 * @param stylusCompilation~callback callback Next step after Stylus compilation.
 */
exports.stylusCompilation = function (callback) {
    var NA = this,
        enableStylus = NA.webconfig.enableStylus,
        async = NA.modules.async,
        path = NA.modules.path,
        stylus = NA.modules.stylus,
        fs = NA.modules.fs,
        allStylusCompiled,
        data = {},
        paths = [];

    if (enableStylus && enableStylus.stylus) {

        allStylusCompiled = enableStylus.stylus;

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
            var currentFile = fs.readFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compiledFile), 'utf-8');

            stylus(currentFile)
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

            /**
             * Next steps after stylus compilation.
             * @callback stylusCompilation~callback
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
 * Engine for minification and concatenation of all files with a Bundle configuration.
 * @private
 * @function cssMinification
 * @memberOf NA#
 * @param cssMinification~callback callback Next step after minification and concatenation of all CSS.
 */
exports.cssMinification = function (callback) {
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
                try {
                    secondCallback(null, fs.readFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, sourceFile), 'utf-8'));
                } catch (e) {
                    secondCallback(e, "");
                }
            }, function(error, results) {
                for (var i = 0; i < results.length; i++) {
                    output += results[i];
                }
                
                output = (new cleanCss().minify(output)).styles;
                fs.writeFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile), output);
                data.pathName = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile);
                NA.log(NA.cliLabels.cssGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
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
 * @param imgOptimization~callback callback Next step after optimization of all Images.
 */
exports.imgOptimization = function (callback) {
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
 * @param jsObfuscation~callback callback Next step after obfuscation and concatenation of all CSS.
 */
exports.jsObfuscation = function (callback) {
    var NA = this,
        bundles = NA.webconfig.bundles,
        uglifyJs = NA.modules.uglifyJs,
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
                var code,
                    file;
                /* For the NA.socket and NA.io auto configuration. */ 
                if (path.join("/", NA.webconfig.urlSocketsFile) === path.join("/", sourceFile)) {
                    file = fs.readFileSync(path.join(NA.nodeatlasPath, "src", "socket.io.js"), "utf-8")
                        .replace(/%urlRelativeSubPath%/g, NA.webconfig.urlRelativeSubPath.slice(1))
                        .replace(/%urlRoot%/g, NA.webconfig.urlRoot);

                    code = uglifyJs.minify(file, {fromString: true}).code;
                /* And for others real files. */
                } else {
                    code = uglifyJs.minify(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, sourceFile)).code;
                }
                secondCallback(null, code);
            }, function(error, results) {
                for (var i = 0; i < results.length; i++) {
                    output += results[i];
                }

                fs.writeFileSync(path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile), output);
                data.pathName = path.join(NA.serverPath, NA.webconfig.assetsRelativePath, compressedFile);
                NA.log(NA.cliLabels.jsGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
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