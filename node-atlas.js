/*------------------------------------*\
    $%ABOUT
\*------------------------------------*/

/**
 * @fileOverview NodeAtlas allows you to create and manage HTML assets or create multilingual websites/webapps easily with Node.js.
 * @author {@link http://www.lesieur.name/ Bruno Lesieur}
 * @version 0.99.7
 * @license {@link https://github.com/Haeresis/ResumeAtlas/blob/master/LICENSE/ GNU GENERAL PUBLIC LICENSE Version 2}
 * @module node-atlas
 * @requires async
 * @requires body-parser
 * @requires cheerio
 * @requires clean-css
 * @requires commander
 * @requires compression
 * @requires cookie-parser
 * @requires css-parse
 * @requires ejs
 * @requires express
 * @requires express-session
 * @requires extend
 * @requires forcedomain
 * @requires imagemin
 * @requires less-middleware
 * @requires mkpath
 * @requires open
 * @requires traverse-directory
 * @requires uglify-js
 */
/* jslint node: true */


/*------------------------------------*\
    $%SUMMARY
\*------------------------------------*/

/**
 * ABOUT..........................Informations about NodeAtlas.
 * SUMMARY........................It's me !
 * NODE ATLAS OBJECT..............Creation of Main Object.
 * CONFIGURATION..................Global configuration variables, command tool and webconfig.
 * GLOBAL FUNCTIONS...............Neutral functions used more once.
 * NODE MODULES...................Functions used to load Node Modules.
 * WEB SERVER.....................Functions used to run pages on http(s) protocol and use middlewares.
 * FRONT-END PART.................Functions used for manage Front-end part.
 * BACK-END PART..................Functions used for manage Back-end part.
 * ASSETS GENERATION..............Functions used for create HTML assets.
 * INIT...........................Run all JavaScript.
 * RUN............................Starting program.
 */


/*------------------------------------*\
    $%NODE ATLAS OBJECT
\*------------------------------------*/

var configuration = require('./lib/configuration'),
    globalFunctions = require('./lib/global-functions'),
    nodeModules = require('./lib/node-modules'),
    webServer = require('./lib/web-server'),
    frontEndPart = require('./lib/front-end-part'),
    backEndPart = require('./lib/back-end-part'),
    assetsGeneration = require('./lib/assets-generation'),
    init = require('./lib/init'),

/**
 * Creates a new instance of NodeAtlas Website.
 * @class
 * @public
 * @alias NA
 */
NA = function () {

    /* Shortcut for use NA without `new` keyword. */
    if (!(this instanceof NA)) {
        return new NA();
    }

    /* $%CONFIGURATION */
    this.lineCommandConfiguration = configuration.lineCommandConfiguration;
    this.initGlobalVar = configuration.initGlobalVar;
    this.initGlobalVarRequiredNpmModules = configuration.initGlobalVarRequiredNpmModules;
    this.templateEngineConfiguration = configuration.templateEngineConfiguration;
    this.initWebconfig = configuration.initWebconfig;
    this.setExternalRoutesAsWebconfigBase = configuration.setExternalRoutesAsWebconfigBase;
    this.setExternalFilesAsWebconfigBase = configuration.setExternalFilesAsWebconfigBase;
    this.setDirectoriesAsWebconfigBase = configuration.setDirectoriesAsWebconfigBase;
    this.setHttpValuesAsWebconfigBase = configuration.setHttpValuesAsWebconfigBase;
    this.improveWebconfigBase = configuration.improveWebconfigBase;

    /* $%GLOBAL FUNCTIONS */
    this.clone = globalFunctions.clone;
    this.forEach = globalFunctions.forEach;
    this.log = globalFunctions.log;
    this.openConfiguration = globalFunctions.openConfiguration;
    this.ifFileExist = globalFunctions.ifFileExist;
    this.addCommonVariation = globalFunctions.addCommonVariation;
    this.addSpecificVariation = globalFunctions.addSpecificVariation;
    this.newRender = globalFunctions.newRender;

    /* $%NODE MODULES */
    this.loadListOfNativeModules = nodeModules.loadListOfNativeModules;
    this.loadServerModules = nodeModules.loadServerModules;
    this.loadTemplatingModules = nodeModules.loadTemplatingModules;
    this.loadUtilsModules = nodeModules.loadUtilsModules;
    this.loadProcessModules = nodeModules.loadProcessModules;
    this.loadListOfRequiredNpmModules = nodeModules.loadListOfRequiredNpmModules;
    this.downloadAllModule = nodeModules.downloadAllModule;
    this.moduleRequired = nodeModules.moduleRequired;

    /* WEB SERVER */
    this.simpleWebServer = webServer.simpleWebServer;
    this.atlasConfigurations = webServer.atlasConfigurations;
    this.atlasServer = webServer.atlasServer;
    this.enableLessProcess = webServer.enableLessProcess;
    this.atlasSessions = webServer.atlasSessions;
    this.startingHttpServer = webServer.startingHttpServer;
    this.httpServerPart = webServer.httpServerPart;
    this.httpServerPublicFiles = webServer.httpServerPublicFiles;
    this.response = webServer.response;
    this.redirect = webServer.redirect;
    this.setSupport = webServer.setSupport;
    this.executeRequest = webServer.executeRequest;
    this.request = webServer.request;
    this.requestRegex = webServer.requestRegex;
    this.pageNotFound = webServer.pageNotFound;
    this.routesPages = webServer.routesPages;

    /* FRONT-END PART */
    this.openTemplate = frontEndPart.openTemplate;
    this.openVariation = frontEndPart.openVariation;
    this.prepareRenderLanguage = frontEndPart.prepareRenderLanguage;
    this.prepareRenderPath = frontEndPart.prepareRenderPath;
    this.prepareRenderVariation = frontEndPart.prepareRenderVariation;
    this.prepareRenderParameters = frontEndPart.prepareRenderParameters;
    this.changeVariationCommon = frontEndPart.changeVariationCommon;
    this.changeVariationSpecific = frontEndPart.changeVariationSpecific;
    this.changeDomCommon = frontEndPart.changeDomCommon;
    this.changeDomSpecific = frontEndPart.changeDomSpecific;
    this.intoBrowserAndFiles = frontEndPart.intoBrowserAndFiles;
    this.renderTemplate = frontEndPart.renderTemplate;
    this.render = frontEndPart.render;

    /* $%BACK-END PART */
    this.cssAlreadyParse = backEndPart.cssAlreadyParse;
    this.injectCssAuth = backEndPart.injectCssAuth;
    this.prepareCssInjection = backEndPart.prepareCssInjection;
    this.injectCss = backEndPart.injectCss;
    this.lessCompilation = backEndPart.lessCompilation;
    this.cssMinification = backEndPart.cssMinification;
    this.imgOptimization = backEndPart.imgOptimization;
    this.jsObfuscation = backEndPart.jsObfuscation;
    this.loadListOfExternalModules = backEndPart.loadListOfExternalModules;
    this.loadController = backEndPart.loadController;

    /* $%ASSETS GENERATION */
    this.urlGeneratingPages = assetsGeneration.urlGeneratingPages;
    this.emulatedIndexPage = assetsGeneration.emulatedIndexPage;
    this.saveTemplateRender = assetsGeneration.saveTemplateRender;

    /* $%INIT */
    this.configuration = init.configuration;
    this.config = init.config;
    this.init = init.init;
    this.run = init.run;

};


/*------------------------------------*\
    $%RUN
\*------------------------------------*/

/* Run script with command tools. */
if (require.main === module) {
    (new NA()).init();
}

/* Run script with require as a npm module. */
module.exports = NA;