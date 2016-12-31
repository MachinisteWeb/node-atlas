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
 * @example { 
 *     directory: <string>,
 *     webconfig: <string>,
 *     browse: <boolean|string>,
 *     httpHostname: <string>,
 *     httpPort: <number>,
 *     generate: <boolean>,
 *     cache: <boolean>,
 *     lang: <string>,
 *     create: <string>,
 *     httpSecure: <boolean|string>
 * }
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
 * @memberOf NA#
 * @this NA
 * @param {Object} options CLI Parameters as JSON object.
 * @example require('node-atlas')().init({
 *     webconfig: "webconfig.alternatif.json",
 *     httpPort: 7778,
 *     generate: true,
 *     browse: true
 * }).start();
 * @return {Object} The NA instance for chained functions.
 */
exports.init = function (options) {
    var NA = this,
        configuration = options || {};

    NA.configuration = configuration;

    return NA;
};

/**
 * Set private `NA#afterGeneration`.
 * @public
 * @function generated
 * @memberOf NA#
 * @this NA
 * @param {function} callback Instruction to execute after generation of generates.
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
 * @memberOf NA#
 * @this NA
 * @param {function} callback Instruction to execute after initialization of template project.
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
 * @memberOf NA#
 * @this NA
 * @param {function} callback Instruction to execute after started a webserver.
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
 * Change the default language used by NodeAtlas CLI and keep it.
 * @private
 * @function changeLanguage
 * @memberOf NA#
 * @this NA
 * @param {NA~callback} next Called in all cases.
 */
exports.changeLanguage = function (next) {
    var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path,
        source = path.join(__dirname, "..", "languages", NA.configuration.lang + ".json"),
        dest = path.join(__dirname, "..", "languages", NA.cliLanguage + ".json");

    if (NA.configuration.lang) {
        fs.readFile(source, "utf-8", function (error, file) {
            var errorMessages = {
                language: NA.configuration.lang
            };

            if (error) {
                NA.log(NA.cliLabels.languageNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return errorMessages[matches]; }));
                return next();
            }

            fs.writeFile(dest, file, function (error) {
                if (error) {
                    errorMessages.language = "default";
                    NA.log(NA.cliLabels.languageNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return errorMessages[matches]; }));
                    return next();
                }

                NA.cliLabels = JSON.parse(file);
                
                NA.log(NA.cliLabels.languageChanged);
                next();
            });
        });
    } else {

        /**
         * Continue after synchronous/asynchronous operations done.
         * @callback NA~callback
         */
        next();
    }
};

/**
 * Initialize a NA instance.
 * @public
 * @function start
 * @memberOf NA#
 * @this NA
 * @example require('node-atlas')().start();
 * @return {Object} The NA instance for chained functions.
 */
exports.start = function () {
    var NA = this;

    NA.initNodeModules();
    NA.initRequiredVars();
    NA.initNpmModules();
    NA.initCliConfiguration();
    NA.initRequiredNpmModulesVars();
    NA.changeLanguage(function () {    
        NA.createTemplateProject(function () {
            NA.initWebsite(function () {
                NA.initServerModules();
                NA.nodeAtlasWebServer(function () {               
                    NA.initStatics();
                    NA.initRoutes();
                }, function () {
                    NA.initOutputs();
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
 * @memberOf NA#
 * @this NA
 * @param {Object} options CLI Parameters as JSON object.
 * @example require('node-atlas').run({
 *        webconfig: "webconfig.alternatif.json",
 *        httpPort: 7778,
 *        generate: true
 * });
 * @return {Object} The NA instance for chained functions.
 */
exports.run = function (options) {
    var NA = this;

    NA.init(options);
    NA.start();

    return NA;
};