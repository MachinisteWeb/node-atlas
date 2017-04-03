/*------------------------------------*\
    ASSETS GENERATION
\*------------------------------------*/
/* jslint node: true */

/**
 * Copy content of a project from NodeAtlas `templates/` folder into current directory.
 * @private
 * @function createTemplateProject
 * @memberOf NA#
 * @this NA
 * @param {NA~fallback} next Fallback function.
 */
exports.createTemplateProject = function (next) {
     var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path,
        copyDir = NA.modules.copyDir,
        source = (typeof NA.configuration.create === "string") ? NA.configuration.create : "hello-world",
        sourcePath = path.join(NA.nodeatlasPath, "templates", source),
        destinationPath = path.join(NA.serverPath),
        data = {};

    if (NA.configuration.create) {

        /* Copy starting project from `templates/` directory. By default it is "hello-world". */
        if (sourcePath !== destinationPath && fs.existsSync(sourcePath)) {

            copyDir(sourcePath, destinationPath, function () {   
                data.pathName = sourcePath;
                NA.log(NA.cliLabels.initCopy.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                if (NA.afterNewProject) {
                    NA.afterNewProject.call(NA);
                }
            });
        } else {
            data.initPath = source;
            NA.log(NA.cliLabels.initNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
        }
    } else {

        /**
         * Continue with this alternative way if main operation not possible.
         * @callback NA~fallback
         */
        next();
    }
};

/**
 * Open all pages for generate HTML render into `serverlessRelativePath`.
 * @private
 * @function generateHTML
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function generateHTML(NA) {
    var output = false;

    /* Avoid copy of `assetsRelativePath` into `serverlessRelativePath` even if serverlessRelativePath directory exist. */
    if (typeof NA.webconfig.output === "boolean") {

        /**
         * Disable HTML generation mechanism.
         * @public
         * @alias output
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        output = NA.webconfig.output;
    }

    /* Generation only if is configured to « true » in `generate` or set co command line. */
    if (NA.configuration.generate) {

        /* Generate all HTML files. */
        if (output) {
            NA.forEach(NA.webconfig.routes, function (currentUrl) {
                NA.prepareResponse(currentUrl, NA.webconfig.routes, undefined, undefined, function (locals, request, response) {
                    NA.changeVariationsCommon(locals, request, response);
                });
            });
        }

        NA.generateAssets();
    }
}

/**
 * Crawl all routes and generate them after passed into `NA#controllers[].setRoutes` hook.
 * @private
 * @function initOutputs
 * @memberOf NA#
 * @this NA
 */
exports.initOutputs = function () {
    var NA = this;

    if (typeof NA.controllers[NA.webconfig.controller] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.controller].setRoutes !== 'undefined') {
            NA.controllers[NA.webconfig.controller].setRoutes.call(NA, function () {
                generateHTML(NA);
            });
    } else {
        generateHTML(NA);
    }
};

/**
 * Compress all assets for generate `assetsRelativePath` content into `serverlessRelativePath` and copy all `NA#statics` directories..
 * @private
 * @function generateAssets
 * @memberOf NA#
 * @this NA
 */
exports.generateAssets = function () {
    var NA = this,
        async = NA.modules.async;

    /* Generate all minified CSS, JS and Images files. */
    async.parallel([
        NA.cssCompilation.bind(NA),
        NA.jsObfuscation.bind(NA),
        NA.imgOptimization.bind(NA),
    ], function () {

        /* Copy all content of `assetsRelativePath` and `statics` into `serverlessRelativePath` */
        async.parallel([
            NA.publicsGeneration.bind(NA),
            NA.staticsGeneration.bind(NA),
        ], function () {

            if (NA.afterGeneration) {
                NA.afterGeneration.call(NA);
            } else {
                process.exit(0);
            }
        });
    });
};

/**
 * Copy all `public` file from `assetsRelativePath` to `serverlessRelativePath`.
 * @private
 * @function publicsGeneration
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after copy of all `assetsRelativePath` content.
 */
exports.publicsGeneration = function (next) {
    var NA = this,
        path = NA.modules.path,
        fs = NA.modules.fs,
        copyDir = NA.modules.copyDir,
        sourcePath = path.join(NA.serverPath, NA.webconfig.assetsRelativePath),
        destinationPath = path.join(NA.serverPath, NA.webconfig.serverlessRelativePath),
        assetsCopy = false;

    /* Avoid copy of `assetsRelativePath` into `serverlessRelativePath` even if serverlessRelativePath directory exist. */
    if (typeof NA.webconfig.assetsCopy === "boolean") {

        /**
         * Disable Assets generation mechanism.
         * @public
         * @alias assetsCopy
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        assetsCopy = NA.webconfig.assetsCopy;
    }

    if (assetsCopy && sourcePath !== destinationPath && fs.existsSync(sourcePath)) {
        copyDir(sourcePath, destinationPath, function () {        
            NA.log(NA.cliLabels.assetsCopy);
            next();
        });
    } else {
        next();
    }
};

/**
 * Copy mechanism for statics.
 * @private
 * @function traverse
 * @memberOf NA~
 * @this NA
 * @param {Object}      paths         Contain a `statics` content.
 * @param {string}      paths.real    The path of source directory.
 * @param {string}      paths.virtual The path of virtual url.
 * @param {boolean}     paths.output  Inform if copy is required
 * @param {NA~callback} next          Go to next steps.
 */
function traverse(paths, next) {
    var NA = this,
        copyDir = NA.modules.copyDir,
        path = NA.modules.path,
        sourcePath = path.join(NA.serverPath, paths.real),
        destinationPath = path.join(NA.serverPath, NA.webconfig.serverlessRelativePath, paths.virtual),
        data = {
            source: sourcePath,
            dest: destinationPath
        };

    if (paths.output) {
        copyDir(sourcePath, destinationPath, function () {
            NA.log(NA.cliLabels.staticsCopy.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));    
            next();
        });
    } else {
        next();
    }
}

/**
 * Copy all `statics` form real directory to `serverlessRelativePath`.
 * @private
 * @function staticsGeneration
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Next step after copy of all `assetsRelativePath` content.
 */
exports.staticsGeneration = function (next) {
    var NA = this,
        async = NA.modules.async,
        statics = [];

    if (NA.webconfig.statics) {
        
        NA.forEach(NA.webconfig.statics, function (directory, directories) {
            var virtual = directory,
                real = directories[directory],
                output = false;

            if (NA.webconfig.statics instanceof Array) {
                virtual = directory.virtual;
                output = directory.output;
                real = directory;
            }

            if (typeof real === "object") {
                output = (typeof real.output === "boolean" && !real.output) ? false : true;
                real = real.path;
            }

            statics.push({
                real: real,
                virtual: virtual,
                output: output
            });
        });

        async.map(statics, traverse.bind(NA), function() {
            next();
        });
    } else {
        next();
    }
};

/**
 * Save the render.
 * @private
 * @function save
 * @memberOf NA~
 * @param {NA}     NA           NodeAtlas instance.
 * @param {string} html         HTML result to save.
 * @param {string} data         Result if html is not a HTML content.
 * @param {string} templateName Name for register file.
 */
function save(NA, html, data, templateName) {
    var mkpath = NA.modules.mkpath,
        path = NA.modules.path,
        pathToSaveFileComplete = path.join(NA.serverPath, NA.webconfig.serverlessRelativePath, templateName),
        pathToSaveFile = path.dirname(pathToSaveFileComplete),
        fs = NA.modules.fs;

    if (templateName) {

        /* Create file render. */
        mkpath(pathToSaveFile, function () {
            var dataError = {};

            /* If source is not a HTML format, keep initial data format. */
            if (data.trim().match(/<\/html>$/g) === null) {
                html = data;
            }

            dataError.pathName = path.join(NA.serverPath, NA.webconfig.serverlessRelativePath, templateName);

            /* Write file */
            fs.writeFile(pathToSaveFileComplete, html, function (error) {
                if (error) {
                    if (error.code === 'EISDIR' || error.code === 'ENOENT') {
                        NA.log(NA.cliLabels.templateNotGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                    } else {
                        throw error;
                    }
                } else {
                    NA.log(NA.cliLabels.templateGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                }
            });

        });
    }
}

/**
 * Generate a template into an HTML file in folder `serverlessRelativePath`.
 * @private
 * @function saveRender
 * @memberOf NA#
 * @this NA
 * @param {string} data         Content of file generated.
 * @param {string} templateName The filename of file generated.
 */
exports.saveRender = function (data, templateName) {
    var NA = this,
        cheerio = NA.modules.cheerio,
        $ = cheerio.load(data, { decodeEntities: false }),
        deeper,
        newBase = "";

    /*
     * If false, no generate for this line.
     */
    if (templateName !== false) {

        /*
         * If templateName ending with "/", remove it.
         */
        templateName = templateName.replace(/\/$/g, "");

        /*
         * If a <base> markup exist, calculation of
         * relative placement of page under root folder...
         */
        deeper = templateName.split("/").length - 1;
        if (templateName[0] === "/") {
            deeper = templateName.split("/").length - 2;
        }

        /* ...and creation of path for all resources */
        for (var i = 0; i < deeper; i++) {
            newBase += "../";
        }

        /* ...and set new base */
        $("base").attr("href", newBase.replace(/\/$/, ""));

        /* Save the render. */
        save(NA, $.html(), data, (templateName) ? templateName : "");
    }
};