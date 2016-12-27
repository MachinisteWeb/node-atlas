#!/usr/bin/env node

/*------------------------------------*\
    SUMMARY
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
    NODE ATLAS FUNCTION
\*------------------------------------*/

var configuration = require("../lib/configuration"),
    nodeModules = require("../lib/node-modules"),
    globalFunctions = require("../lib/global-functions"),
    webServer = require("../lib/web-server"),
    frontEndPart = require("../lib/front-end-part"),
    backEndPart = require("../lib/back-end-part"),
    assetsGeneration = require("../lib/assets-generation"),
    init = require("../lib/init"),

/**
 * Creates a new instance of NodeAtlas Website.
 * @class NA
 */
NA = function () {

    /* Shortcut for use NA without `new` keyword. */
    if (!(this instanceof NA)) {
        return new NA();
    }

    /* CONFIGURATION */
    this.initCliConfiguration = configuration.initCliConfiguration;
    this.initRequiredVars = configuration.initRequiredVars;
    this.initRequiredNpmModulesVars = configuration.initRequiredNpmModulesVars;
    this.initWebsite = configuration.initWebsite;
    this.createWebconfig = configuration.createWebconfig;
    
    /* NODE MODULES */
    this.initNodeModules = nodeModules.initNodeModules;
    this.initNpmModules = nodeModules.initNpmModules;

    /* GLOBAL FUNCTIONS */
    this.openConfiguration = globalFunctions.openConfiguration;
    this.log = globalFunctions.log;
    this.openController = globalFunctions.openController;

    this.extend = globalFunctions.extend;
    this.clone = globalFunctions.clone;
    this.forEach = globalFunctions.forEach;
    this.ifFileExist = globalFunctions.ifFileExist;
    this.common = globalFunctions.common;
    this.specific = globalFunctions.specific;
    this.view = globalFunctions.view;

    /* WEB SERVER */
    this.simpleWebServer = webServer.simpleWebServer;
    this.nodeAtlasWebServer = webServer.nodeAtlasWebServer;
    this.initMiddlewares = webServer.initMiddlewares;
    this.initSessions = webServer.initSessions;
    this.initConfigurations = webServer.initConfigurations;

    this.atlasServer = webServer.atlasServer;
    this.atlasRoutes = webServer.atlasRoutes;
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
    this.changeVariationsCommon = frontEndPart.changeVariationsCommon;
    this.changeVariationsSpecific = frontEndPart.changeVariationsSpecific;
    this.changeDomCommon = frontEndPart.changeDomCommon;
    this.changeDomSpecific = frontEndPart.changeDomSpecific;
    this.intoBrowserAndFiles = frontEndPart.intoBrowserAndFiles;
    this.renderTemplate = frontEndPart.renderTemplate;
    this.render = frontEndPart.render;

    /* BACK-END PART */
    this.initServerModules = backEndPart.initServerModules;
    this.enableLessProcess = backEndPart.enableLessProcess;
    this.enableStylusProcess = backEndPart.enableStylusProcess;

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

    /* ASSETS GENERATION */
    this.createTemplateProject = assetsGeneration.createTemplateProject;

    this.urlGeneratingPages = assetsGeneration.urlGeneratingPages;
    this.urlGeneratingAssets = assetsGeneration.urlGeneratingAssets;
    this.emulatedIndexPage = assetsGeneration.emulatedIndexPage;
    this.saveTemplateRender = assetsGeneration.saveTemplateRender;
    /* INIT */
    this.changeLanguage = init.changeLanguage;
    
    this.configuration = init.configuration;
    this.init = init.init;
    this.generated = init.generated;
    this.afterGeneration = init.afterGeneration;
    this.afterRunning = init.afterRunning;
    this.started = init.started;
    this.afterNewProject = init.afterNewProject;
    this.created = init.created;
    this.start = init.start;
    this.run = init.run;
};





/*------------------------------------*\
    RUN
\*------------------------------------*/

/* Run script with CLI. */
if (require.main === module) {
    (new NA()).start();
}

/* Run script with require as an API. */
module.exports = NA;