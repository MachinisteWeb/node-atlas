/*------------------------------------*\
    $%INIT
\*------------------------------------*/

exports.config =  function (NA) {

    /**
     * Object contain configuration.
     * @public
     * @alias configuration
     * @type {Object}
     * @memberOf node-atlas~NA
     */
    NA.configuration = {};

    /**
     * Allow you to set `NA.configuration` with chaining.
     * @public
     * @function config
     * @memberOf node-atlas~NA
     * @example require('node-atlas').config({
     *        webconfig: "webconfig.alternatif.json",
     *        httpPort: 7778,
     *        generate: true,
     *        browse: true
     * }).init();
     * @return {Object} - the NA object for chained functions.
     */
    NA.config = function (config) {
        var configuration = config || {};

        NA.configuration = configuration;

        return NA;
    };

    return NA;
};

exports.init =  function (NA) {

    /**
     * Main controller for Start NodeAtlas.
     * @public
     * @function init
     * @memberOf node-atlas~NA
     * @example require('node-atlas').init();
     * @return {Object} - the NA object for chained functions.
     */
    NA.init = function () {
        NA.loadListOfNativeModules();
        NA.initGlobalVar();
        NA.moduleRequired(function () {
            NA.lineCommandConfiguration();
            NA.initGlobalVarRequiredNpmModules();
            NA.initWebconfig(function () {
                NA.loadListOfExternalModules(function () {
                    NA.startingHttpServer();
                    NA.templateEngineConfiguration();
                    NA.routesPages();
                    NA.emulatedIndexPage();
                    NA.httpServerPublicFiles();
                    NA.pageNotFound();
                    NA.urlGeneratingPages();
                });
            });
        });

        return NA;
    };

    return NA;
};

exports.run =  function (NA) {

    /**
     * Execute both NA.config() and NA.init() functions.
     * @public
     * @function run
     * @memberOf node-atlas~NA
     * @example require('node-atlas').run({
     *        webconfig: "webconfig.alternatif.json",
     *        httpPort: 7778,
     *        generate: true
     * });
     * @return {Object} - the NA object for chained functions.

     */
    NA.run = function (config) {
        NA.config(config);
        NA.init();

        return NA;
    };

    return NA;
};