#!/usr/bin/env node

/*------------------------------------*\
    SUMMARY
\*------------------------------------*/
/* jslint node: true */

/*
 * ABOUT..........................Informations about NodeAtlas.
 * ALIAS..........................Come from index.js into this file.
 * SUMMARY........................It's me !
 * NODE ATLAS FUNCTION............Creation of Main Function.
 *   CONFIGURATION................Global configuration variables, command tool and webconfig.
 *   GLOBAL FUNCTIONS.............Neutral functions used more once.
 *   NODE MODULES.................Functions used to load Node Modules.
 *   WEB SERVER...................Functions used to run pages on http(s) protocol and use middlewares.
 *   ROUTES.......................Functions used to add route to the server.
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
    modules = require("../lib/modules"),
    globals = require("../lib/globals"),
    server = require("../lib/server"),
    routes = require("../lib/routes"),
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
    this.initNodeModules = modules.initNodeModules;
    this.initNpmModules = modules.initNpmModules;

    /* GLOBAL FUNCTIONS */
    this.openConfiguration = globals.openConfiguration;
    this.log = globals.log;
    this.openController = globals.openController;

    this.extend = globals.extend;
    this.clone = globals.clone;
    this.forEach = globals.forEach;
    this.ifFileExist = globals.ifFileExist;
    this.common = globals.common;
    this.specific = globals.specific;
    this.view = globals.view;

    /* WEB SERVER */
    this.simpleWebServer = server.simpleWebServer;
    this.nodeAtlasWebServer = server.nodeAtlasWebServer;
    this.initMiddlewares = server.initMiddlewares;
    this.initLessProcess = server.initLessProcess;
    this.initStylusProcess = server.initStylusProcess;
    this.initSessions = server.initSessions;
    this.initSockets = server.initSockets;
    this.initConfigurations = server.initConfigurations;
    this.initServer = server.initServer;

    /* ROUTES */
    this.initStatics = routes.initStatics;
    this.initRoutes = routes.initRoutes;
    this.response = routes.response;
    this.redirect = routes.redirect;
    this.setSupport = routes.setSupport;
    this.executeRequest = routes.executeRequest;
    this.request = routes.request;
    this.requestRegex = routes.requestRegex;
    this.pageNotFound = routes.pageNotFound;

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
    this.indexPage = assetsGeneration.indexPage;

    this.urlGeneratingPages = assetsGeneration.urlGeneratingPages;
    this.urlGeneratingAssets = assetsGeneration.urlGeneratingAssets;
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