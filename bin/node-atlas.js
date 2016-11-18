#!/usr/bin/env node

/*------------------------------------*\
    $%SUMMARY
\*------------------------------------*/
/* jslint node: true */

/*
 * ABOUT..........................Informations about NodeAtlas.
 * SUMMARY........................It's me !
 * NODE ATLAS FUNCTION............Creation of Main Function.
 *   CONFIGURATION................Global configuration variables, command tool and webconfig.
 *   GLOBAL FUNCTIONS.............Neutral functions used more once.
 *   NODE MODULES.................Functions used to load Node Modules.
 *   WEB SERVER...................Functions used to run pages on http(s) protocol and use middlewares.
 *   FRONT-END PART...............Functions used for manage Front-end part.
 *   BACK-END PART................Functions used for manage Back-end part.
 *   ASSETS GENERATION............Functions used for create HTML assets.
 *   INIT.........................Run all JavaScript.
 * RUN............................Starting program.
 */





/*------------------------------------*\
    $%NODE ATLAS FUNCTION
\*------------------------------------*/

var configuration = require('../lib/configuration'),
    globalFunctions = require('../lib/global-functions'),
    nodeModules = require('../lib/node-modules'),
    webServer = require('../lib/web-server'),
    frontEndPart = require('../lib/front-end-part'),
    backEndPart = require('../lib/back-end-part'),
    assetsGeneration = require('../lib/assets-generation'),
    init = require('../lib/init'),

/**
 * Creates a new instance of NodeAtlas Website.
 * @class NA
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
    this.setCompressionDirectiveAsWebconfigBase = configuration.setCompressionDirectiveAsWebconfigBase;
    this.setPreprocessorDirectiveAsWebconfigBase = configuration.setPreprocessorDirectiveAsWebconfigBase;
    this.setDirectoriesAsWebconfigBase = configuration.setDirectoriesAsWebconfigBase;
    this.setHttpValuesAsWebconfigBase = configuration.setHttpValuesAsWebconfigBase;
    this.improveWebconfigBase = configuration.improveWebconfigBase;
    /* $%GLOBAL FUNCTIONS */
    this.extend = globalFunctions.extend;
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
    this.downloadAllModules = nodeModules.downloadAllModules;
    this.moduleRequired = nodeModules.moduleRequired;
    /* WEB SERVER */
    this.simpleWebServer = webServer.simpleWebServer;
    this.atlasConfigurations = webServer.atlasConfigurations;
    this.atlasServer = webServer.atlasServer;
    this.atlasRoutes = webServer.atlasRoutes;
    this.enableLessProcess = webServer.enableLessProcess;
    this.enableStylusProcess = webServer.enableStylusProcess;
    this.atlasSessions = webServer.atlasSessions;
    this.startingHttpServer = webServer.startingHttpServer;
    this.httpServerParse = webServer.httpServerParse;
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
    this.stylusCompilation = backEndPart.stylusCompilation;
    this.cssCompilation = backEndPart.cssCompilation;
    this.cssMinification = backEndPart.cssMinification;
    this.imgOptimization = backEndPart.imgOptimization;
    this.jsObfuscation = backEndPart.jsObfuscation;
    this.loadListOfExternalModules = backEndPart.loadListOfExternalModules;
    this.loadController = backEndPart.loadController;
    /* $%ASSETS GENERATION */
    this.urlGeneratingPages = assetsGeneration.urlGeneratingPages;
    this.urlGeneratingAssets = assetsGeneration.urlGeneratingAssets;
    this.generateStartingProject = assetsGeneration.generateStartingProject;
    this.emulatedIndexPage = assetsGeneration.emulatedIndexPage;
    this.saveTemplateRender = assetsGeneration.saveTemplateRender;
    this.atta = assetsGeneration.atta;
    /* $%INIT */
    this.configuration = init.configuration;
    this.config = init.config;
    this.afterGeneration = init.afterGeneration;
    this.afterGenerates = init.afterGenerates;
    this.afterInitProject = init.afterInitProject;
    this.init = init.init;
    this.run = init.run;

};





/*------------------------------------*\
    $%RUN
\*------------------------------------*/

/* Run script with CLI. */
if (require.main === module) {
    (new NA()).init();
}

/* Run script with require as an API. */
module.exports = NA;