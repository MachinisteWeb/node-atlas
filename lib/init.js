/*------------------------------------*\
    $%INIT
\*------------------------------------*/
/* jslint node: true */

/**
 * Represent options passed through API.
 * @private
 * @alias configuration
 * @type {Object}
 * @memberOf NA#
 */
exports.configuration = {};

/**
 * Represent the function called after all assets generation.
 * @private
 * @alias afterGeneration
 * @type {Object}
 * @memberOf NA#
 */
exports.afterGeneration = null;

/**
 * Represent the function called after create a project.
 * @private
 * @alias afterNewProject
 * @type {Object}
 * @memberOf NA#
 */
exports.afterNewProject = null;

/**
 * Represent the function called after the server was started.
 * @private
 * @alias afterRunning
 * @type {Object}
 * @memberOf NA#
 */
exports.afterRunning = null;

/**
 * Set private `NA#configuration`.
 * @public
 * @function init
 * @memberOf module:node-atlas~NA#
 * @param {Object} config CLI Parameters as JSON object.
 * @example require('node-atlas')().init({
 *     webconfig: "webconfig.alternatif.json",
 *     httpPort: 7778,
 *     generate: true,
 *     browse: true
 * }).start();
 * @return {Object} The NA instance for chained functions.
 */
exports.init = function (config) {
    var NA = this,
        configuration = config || {};

    NA.configuration = configuration;

    return NA;
};

/**
 * Set private `NA#afterGeneration`.
 * @public
 * @function generated
 * @memberOf module:node-atlas~NA#
 * @param {function} Instruction to execute after generation of generates.
 * @example require('node-atlas')().generated(function () {
 *     // Update all files on a server...
 *     // or
 *     // Generate a documentation...
 *     // or
 *     // ...
 * }).run({
 *     generate: true
 * });
 * @return {Object} The NA instance for chained functions.
 */
exports.generated = function (callback) {
    var NA = this;

    NA.afterGeneration = callback;

    return NA;
};

/**
 * Set private `NA#afterNewProject`.
 * @public
 * @function created
 * @memberOf module:node-atlas~NA#
 * @param {function} Instruction to execute after initialization of template project.
 * @example require('node-atlas')().created(function () {
 *     // Run a server...
 *     // or
 *     // ...
 * }).run({
 *     generate: true
 * });
 * @return {Object} The NA instance for chained functions.
 */
exports.created = function (callback) {
    var NA = this;

    NA.afterNewProject = callback;

    return NA;
};

/**
 * Set private `NA#afterRunning`.
 * @public
 * @function started
 * @memberOf module:node-atlas~NA#
 * @param {function} Instruction to execute after started a webserver.
 * @example require('node-atlas')().started(function () {
 *     // Run another server...
 *     // or
 *     // ...
 * }).run({
 *     generate: true
 * });
 * @return {Object} The NA instance for chained functions.
 */
exports.started = function (callback) {
    var NA = this;

    NA.afterRunning = callback;

    return NA;
};

/**
 * Change the default language for this NodeAtlas package.
 * @private
 * @function changeLanguage
 * @memberOf NA#
 * @param {function} next step after changing language.
 */
exports.changeLanguage = function (callback) {
    var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path,
        source = path.join(__dirname, "..", "languages", NA.configuration.lang + ".json"),
        dest = path.join(__dirname, "..", "languages", NA.appLanguage + ".json");

    if (NA.configuration.lang) {
        fs.readFile(source, "utf-8", function (error, file) {
            var dataError = {
                language: NA.configuration.lang
            };
            if (error) {
                
                NA.log(NA.appLabels.languageNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                return callback();
            }
            fs.writeFile(dest, file, function (error) {
                if (error) {
                    dataError.language = "default";
                    NA.log(NA.appLabels.languageNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                    return callback();
                }
                NA.appLabels = JSON.parse(file);
                NA.log(NA.appLabels.languageChanged);
                callback();
            });
        });
    } else {
        callback();
    }
};

/**
 * Initialize a NA instance.
 * @public
 * @function start
 * @memberOf module:node-atlas~NA#
 * @example require('node-atlas')().start();
 * @return {Object} The NA instance for chained functions.
 */
exports.start = function () {
    var NA = this;

    NA.loadListOfNativeModules();
    NA.initGlobalVar();
    NA.loadListOfRequiredNpmModules();
    NA.lineCommandConfiguration();
    NA.changeLanguage(function () {    
        NA.initGlobalVarRequiredNpmModules();
        NA.generateStartingProject(function () {
            NA.initWebconfig(function () {
                NA.loadListOfExternalModules(function () {
                    NA.startingHttpServer();
                    NA.routesPages(function () {
                        NA.emulatedIndexPage();
                        NA.httpServerPublicFiles();
                        NA.pageNotFound();
                        NA.urlGeneratingPages();
                    });
                });
            });
        });
    });

    return NA;
};

/**
 * Execute both `NA#init()` and `NA#start()` functions.
 * @public
 * @function run
 * @memberOf module:node-atlas~NA#
 * @param {Object} config CLI Parameters as JSON object.
 * @example require('node-atlas').run({
 *        webconfig: "webconfig.alternatif.json",
 *        httpPort: 7778,
 *        generate: true
 * });
 * @return {Object} The NA instance for chained functions.
 */
exports.run = function (config) {
    var NA = this;

    NA.init(config);
    NA.start();

    return NA;
};