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
 * @alias afterGenerates
 * @type {Object}
 * @memberOf NA#
 */
exports.afterGenerates = null;

/**
 * Set private `NA#configuration`.
 * @public
 * @function config
 * @memberOf module:node-atlas~NA#
 * @param {Object} config CLI Parameters as JSON object.
 * @example require('node-atlas')().config({
 *     webconfig: "webconfig.alternatif.json",
 *     httpPort: 7778,
 *     generate: true,
 *     browse: true
 * }).init();
 * @return {Object} The NA instance for chained functions.
 */
exports.config = function (config) {
    var NA = this,
        configuration = config || {};

    NA.configuration = configuration;

    return NA;
};

/**
 * Set private `NA#afterGenerates`.
 * @public
 * @function afterGeneration
 * @memberOf module:node-atlas~NA#
 * @param {function} Instruction to execute after generation of generates.
 * @example require('node-atlas')().afterGeneration(function () {
 *     // Update all files on a server...
 *     // or
 *     // Generate a documentation...
 *     // or
 *     // ...
 * }).run({
 *     generates: true
 * });
 * @return {Object} The NA instance for chained functions.
 */
exports.afterGeneration = function (callback) {
    var NA = this;

    NA.afterGenerates = callback;

    return NA;
};

/**
 * Initialize a NA instance.
 * @public
 * @function init
 * @memberOf module:node-atlas~NA#
 * @example require('node-atlas')().init();
 * @return {Object} The NA instance for chained functions.
 */
exports.init = function () {
    var NA = this;

    NA.loadListOfNativeModules();
    NA.initGlobalVar();
    NA.moduleRequired(function () {
        NA.lineCommandConfiguration();
        NA.initGlobalVarRequiredNpmModules();
        NA.initWebconfig(function () {
            NA.loadListOfExternalModules(function () {
                NA.startingHttpServer();
                NA.templateEngineConfiguration();
                NA.routesPages(function () {
                    NA.emulatedIndexPage();
                    NA.httpServerPublicFiles();
                    NA.pageNotFound();
                    NA.urlGeneratingPages();
                });
            });
        });
    });

    return NA;
};

/**
 * Execute both `NA#config()` and `NA#init()` functions.
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

    NA.config(config);
    NA.init();

    return NA;
};