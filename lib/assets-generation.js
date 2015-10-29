/*------------------------------------*\
    $%ASSETS GENERATION
\*------------------------------------*/
/* jslint node: true */

/**
 * Open all pages for generate render into `generatesRelativePath`.
 * @private
 * @function urlGeneratingPages
 * @memberOf NA#
 */
exports.urlGeneratingPages = function () {
    var NA = this,
        fs = NA.modules.fs,
        async = NA.modules.async,
        path = NA.modules.path,
        traverseDirectory = NA.modules.traverseDirectory,
        data = {},
        sourcePath = path.join(NA.websitePhysicalPath, NA.webconfig.assetsRelativePath),
        destinationPath = path.join(NA.websitePhysicalPath, NA.webconfig.generatesRelativePath),
        traverse,
        htmlGenerateEnable = true;

    /* Avoid copy of `assetsRelativePath` into `generatesRelativePath` even if generatesRelativePath directory exist. */
    if (typeof NA.webconfig.htmlGenerateEnable === 'boolean') {

        /**
         * Disable HTML generate mechanism.
         * @public
         * @alias htmlGenerateEnable
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false.
         */
        htmlGenerateEnable = NA.webconfig.htmlGenerateEnable;
    }

    /* Generation only if is configured to « true » in `generate` or set co command line. */
    if (NA.configuration.generate) {

        /* Generate all HTML files. */
        if (htmlGenerateEnable) {
            fs.exists(path.join(NA.websitePhysicalPath, NA.webconfig.generatesRelativePath), function (exists) {
                if (exists) {
                    NA.forEach(NA.webconfig.routes, function (currentUrl) {
                        NA.render(currentUrl, NA.webconfig.routes);
                    });
                } else {
                    data.templatePath = path.join(NA.websitePhysicalPath, NA.webconfig.generatesRelativePath);
                    NA.log(NA.appLabels.templateDirectoryNotExist.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                }
            });
        }

        /* Generate all minified CSS, JS and Images files. */
        async.parallel([
            NA.lessCompilation.bind(NA),
            NA.jsObfuscation.bind(NA),
            NA.imgOptimization.bind(NA)
        ], function () {

            /* Copy all content of `assetsRelativePath` into `generatesRelativePath` */
            if (sourcePath !== destinationPath && htmlGenerateEnable && fs.existsSync(destinationPath)) {
                traverse = new traverseDirectory(
                  sourcePath,
                  destinationPath
                );

                traverse.directory(function (source, target, next) {
                    next(traverseDirectory.copydir, source, target);
                });

                traverse.file(function (source, target, next) {
                    next(traverseDirectory.copyfile, source, target);
                });

                traverse.run(function () {
                    NA.log(NA.appLabels.assetsCopy);
                });
            }
        });
    }

};

/**
 * Create a « Overview » page to « / » url with all of page accessible via links.
 * @private
 * @function emulatedIndexPage
 * @memberOf NA#
 */
exports.emulatedIndexPage = function () {
    var NA = this;

    /* Only if server was started and `enableIndex` is set to « true ». */
    if (!NA.configuration.generate &&

        /**
         * Allow NodeAtlas to create a root page with link to all routes for development if set to true.
         * @public
         * @alias enableIndex
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.enableIndex
    ) {

        /* Create a new path to « / ». Erase the route to « / » defined into `routes`. */
        NA.httpServer.get(NA.webconfig.urlRelativeSubPath + '/', function (request, response) {
            var data = {},
                matches = function (regex, matches) { return data[matches]; };

                data.render = '';

            /* List all routes... */
            NA.forEach(NA.webconfig.routes, function (page) {
                data.page = page;

                if (NA.webconfig.routes[page].url) {
                    data.page = NA.webconfig.routes[page].url;
                }

                data.render += NA.appLabels.emulatedIndexPage.line.replace(/%([\-a-zA-Z0-9_]+)%/g, matches);
            });

            /* ...and provide a page. */
            response.writeHead(200, NA.appLabels.emulatedIndexPage.charsetAndType);
            response.write(NA.appLabels.emulatedIndexPage.data.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
            response.end();
        });
    }
};

/**
 * Generate a template into an HTML file in folder `generatesRelativePath`.
 * @private
 * @function saveTemplateRender
 * @memberOf NA#
 * @param {string} data               Content of file generated.
 * @param {string} templateRenderName The filename of file generated.
 */
exports.saveTemplateRender = function (data, templateRenderName) {
    var NA = this,
        fs = NA.modules.fs,
        cheerio = NA.modules.cheerio,
        mkpath = NA.modules.mkpath,
        path = NA.modules.path,
        pathToSaveFileComplete = path.join(
            NA.websitePhysicalPath,
            NA.webconfig.generatesRelativePath,
            (templateRenderName) ? templateRenderName : ''
        ),
        pathToSaveFile = path.dirname(pathToSaveFileComplete),
        $ = cheerio.load(data),
        deeper,
        newBase = "";

    /*
     * If false, no generate for this line.
     */
    if (templateRenderName !== false) {

        /*
         * If templateRenderName ending with '/', remove it.
         */
        templateRenderName = templateRenderName.replace(/\/$/g, '');

        /*
         * If a <base> markup exist, calculation of
         * relative placement of page under root folder...
         */
        deeper = templateRenderName.split('/').length - 1;
        if (templateRenderName[0] === '/') {
            deeper = templateRenderName.split('/').length - 2;
        }

        /* ...and creation of path for all resources */
        for (var i = 0; i < deeper; i++) {
            newBase += '../';
        }

        /* ...and set new base */
        $("base").attr("href", newBase);

        /* Create file render. */
        mkpath(pathToSaveFile, function () {
            var dataError = {},
                innerHTML = $.html();

            /* If source is not a HTML format, keep initial data format. */
            if (data.trim().match(/<\/html>$/g) === null) {
                innerHTML = data;
            }

            dataError.pathName = path.join(NA.websitePhysicalPath, NA.webconfig.generatesRelativePath, templateRenderName);

            /* Write file */
            fs.writeFile(pathToSaveFileComplete, innerHTML, function (error) {
                if (error) {
                    if (error.code === 'EISDIR' || error.code === 'ENOENT') {
                        NA.log(NA.appLabels.templateNotGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                    } else {
                        throw error;
                    }
                } else {
                    NA.log(NA.appLabels.templateGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                }
            });

        });
    }
};