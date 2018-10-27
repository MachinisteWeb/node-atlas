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
 *   TOOLS........................Functions used for manage Back-end part.
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
	response = require("../lib/response"),
	tools = require("../lib/tools"),
	generation = require("../lib/generation"),
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

	/* INIT */
	this.configuration = init.configuration;
	this.afterGeneration = init.afterGeneration;
	this.afterClosing = init.afterClosing;
	this.afterRunning = init.afterRunning;
	this.afterNewProject = init.afterNewProject;
};

/* CONFIGURATION */
NA.prototype.initCliConfiguration = configuration.initCliConfiguration;
NA.prototype.initRequiredVars = configuration.initRequiredVars;
NA.prototype.initRequiredNpmModulesVars = configuration.initRequiredNpmModulesVars;
NA.prototype.initWebsite = configuration.initWebsite;
NA.prototype.initServerModules = configuration.initServerModules;
NA.prototype.createWebconfig = configuration.createWebconfig;

/* NODE MODULES */
NA.prototype.initNodeModules = modules.initNodeModules;
NA.prototype.initNpmModules = modules.initNpmModules;

/* GLOBAL FUNCTIONS */
NA.prototype.openConfiguration = globals.openConfiguration;
NA.prototype.log = globals.log;
NA.prototype.openController = globals.openController;
NA.prototype.openView = globals.openView;
NA.prototype.openVariation = globals.openVariation;
NA.prototype.extend = globals.extend;
NA.prototype.clone = globals.clone;
NA.prototype.forEach = globals.forEach;
NA.prototype.ifFileExist = globals.ifFileExist;
NA.prototype.common = globals.common;
NA.prototype.specific = globals.specific;
NA.prototype.view = globals.view;

/* WEB SERVER */
NA.prototype.simpleWebServer = server.simpleWebServer;
NA.prototype.nodeAtlasWebServer = server.nodeAtlasWebServer;
NA.prototype.initMiddlewares = server.initMiddlewares;
NA.prototype.initLessProcess = server.initLessProcess;
NA.prototype.initStylusProcess = server.initStylusProcess;
NA.prototype.initSessions = server.initSessions;
NA.prototype.initSockets = server.initSockets;
NA.prototype.initConfigurations = server.initConfigurations;
NA.prototype.initServer = server.initServer;

/* ROUTES */
NA.prototype.initStatics = routes.initStatics;
NA.prototype.initRoutes = routes.initRoutes;
NA.prototype.indexPage = routes.indexPage;

NA.prototype.sendResponse = routes.sendResponse;
NA.prototype.redirect = routes.redirect;
NA.prototype.executeRequest = routes.executeRequest;
NA.prototype.request = routes.request;
NA.prototype.requestRegex = routes.requestRegex;
NA.prototype.pageNotFound = routes.pageNotFound;

/* RESPONSE */
NA.prototype.prepareResponse = response.prepareResponse;
NA.prototype.prepareHeaders = response.prepareHeaders;

NA.prototype.prepareRenderLanguage = response.prepareRenderLanguage;
NA.prototype.prepareRenderPath = response.prepareRenderPath;
NA.prototype.prepareRenderVariation = response.prepareRenderVariation;
NA.prototype.changeVariationsCommon = response.changeVariationsCommon;
NA.prototype.changeVariationsSpecific = response.changeVariationsSpecific;
NA.prototype.changeDomCommon = response.changeDomCommon;
NA.prototype.changeDomSpecific = response.changeDomSpecific;
NA.prototype.intoBrowserAndFiles = response.intoBrowserAndFiles;
NA.prototype.renderTemplate = response.renderTemplate;

/* TOOLS */
NA.prototype.cssAlreadyParse = tools.cssAlreadyParse;
NA.prototype.injectCssAuth = tools.injectCssAuth;
NA.prototype.prepareCssInjection = tools.prepareCssInjection;
NA.prototype.injectCss = tools.injectCss;
NA.prototype.lessCompilation = tools.lessCompilation;
NA.prototype.stylusCompilation = tools.stylusCompilation;
NA.prototype.cssCompilation = tools.cssCompilation;
NA.prototype.cssMinification = tools.cssMinification;
NA.prototype.jsObfuscation = tools.jsObfuscation;

/* ASSETS GENERATION */
NA.prototype.createTemplateProject = generation.createTemplateProject;
NA.prototype.initOutputs = generation.initOutputs;
NA.prototype.publicsGeneration = generation.publicsGeneration;
NA.prototype.staticsGeneration = generation.staticsGeneration;
NA.prototype.generateAssets = generation.generateAssets;
NA.prototype.saveRender = generation.saveRender;

/* INIT */
NA.prototype.changeLanguage = init.changeLanguage;
NA.prototype.init = init.init;
NA.prototype.generated = init.generated;
NA.prototype.started = init.started;
NA.prototype.created = init.created;
NA.prototype.stopped = init.stopped;
NA.prototype.exit = init.exit;
NA.prototype.close = init.close;
NA.prototype.start = init.start;
NA.prototype.run = init.run;





/*------------------------------------*\
	RUN
\*------------------------------------*/

/* Run script with CLI. */
if (require.main === module) {
	/* Expose the NA object for isomorphism */
	global.NA = new NA();
	global.NA.start();
}

/* Run script with require as an API. */
module.exports = NA;