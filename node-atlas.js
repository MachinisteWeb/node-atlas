/*------------------------------------*\
    $%ABOUT
\*------------------------------------*/

/**
 * @fileOverview NodeAtlas allows you to create and manage HTML assets or create multilingual websites/webapps easily with Node.js.
 * @author {@link http://www.lesieur.name/ Bruno Lesieur}
 * @version 0.51.3
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

/**
 * The main object that contains all API variables of NodeAtlas.
 * @namespace node-atlas~NA
 * @public
 * @alias NA
 * @type {Object}
 */
var NA = {},
    configuration = require('./lib/configuration'),
    globalFunctions = require('./lib/global-functions'),
    nodeModules = require('./lib/node-modules'),
    webServer = require('./lib/web-server'),
    frontEndPart = require('./lib/front-end-part'),
    backEndPart = require('./lib/back-end-part'),
    assetsGeneration = require('./lib/assets-generation'),
    init = require('./lib/init');





/*------------------------------------*\
    $%CONFIGURATION
\*------------------------------------*/

NA = configuration.lineCommandConfiguration(NA);
NA = configuration.initGlobalVar(NA);
NA = configuration.initGlobalVarRequiredNpmModules(NA);
NA = configuration.templateEngineConfiguration(NA);
NA = configuration.initWebconfig(NA);
NA = configuration.setExternalRoutesAsWebconfigBase(NA);
NA = configuration.setExternalFilesAsWebconfigBase(NA);
NA = configuration.setDirectoriesAsWebconfigBase(NA);
NA = configuration.setHttpValueAsWebconfigBase(NA);
NA = configuration.improveWebconfigBase(NA);





/*------------------------------------*\
    $%GLOBAL FUNCTIONS
\*------------------------------------*/

NA = globalFunctions.clone(NA);
NA = globalFunctions.forEach(NA);
NA = globalFunctions.log(NA);
NA = globalFunctions.openConfiguration(NA);
NA = globalFunctions.ifFileExist(NA);
NA = globalFunctions.addCommonVariation(NA);
NA = globalFunctions.addSpecificVariation(NA);
NA = globalFunctions.newRender(NA);





/*------------------------------------*\
    $%NODE MODULES
\*------------------------------------*/

NA = nodeModules.loadListOfNativeModules(NA);
NA = nodeModules.loadServerModules(NA);
NA = nodeModules.loadTemplatingModules(NA);
NA = nodeModules.loadUtilsModules(NA);
NA = nodeModules.loadProcessModules(NA);
NA = nodeModules.loadListOfRequiredNpmModules(NA);
NA = nodeModules.downloadAllModule(NA);
NA = nodeModules.moduleRequired(NA);





/*------------------------------------*\
    $%WEB SERVER
\*------------------------------------*/

NA = webServer.simpleWebServer(NA);
NA = webServer.atlasConfigurations(NA);
NA = webServer.atlasServer(NA);
NA = webServer.enableLessProcess(NA);
NA = webServer.atlasSessions(NA);
NA = webServer.startingHttpServer(NA);
NA = webServer.httpServerPart(NA);
NA = webServer.httpServerPublicFiles(NA);
NA = webServer.response(NA);
NA = webServer.redirect(NA);
NA = webServer.setSupport(NA);
NA = webServer.executeRequest(NA);
NA = webServer.request(NA);
NA = webServer.requestRegex(NA);
NA = webServer.pageNotFound(NA);
NA = webServer.routesPages(NA);





/*------------------------------------*\
    $%FRONT-END PART
\*------------------------------------*/

NA = frontEndPart.openTemplate(NA);
NA = frontEndPart.openVariation(NA);
NA = frontEndPart.prepareRenderLanguage(NA);
NA = frontEndPart.prepareRenderPath(NA);
NA = frontEndPart.prepareRenderVariation(NA);
NA = frontEndPart.prepareRenderParameters(NA);
NA = frontEndPart.changeVariationCommon(NA);
NA = frontEndPart.changeVariationSpecific(NA);
NA = frontEndPart.changeDomCommon(NA);
NA = frontEndPart.changeDomSpecific(NA);
NA = frontEndPart.intoBrowserAndFiles(NA);
NA = frontEndPart.renderTemplate(NA);
NA = frontEndPart.render(NA);





/*------------------------------------*\
    $%BACK-END PART
\*------------------------------------*/

NA = backEndPart.cssAlreadyParse(NA);
NA = backEndPart.injectCssAuth(NA);
NA = backEndPart.prepareCssInjection(NA);
NA = backEndPart.injectCss(NA);
NA = backEndPart.lessCompilation(NA);
NA = backEndPart.cssMinification(NA);
NA = backEndPart.imgOptimization(NA);
NA = backEndPart.jsObfuscation(NA);
NA = backEndPart.loadListOfExternalModules(NA);
NA = backEndPart.loadController(NA);





/*------------------------------------*\
    $%ASSETS GENERATION
\*------------------------------------*/

NA = assetsGeneration.urlGeneratingPages(NA);
NA = assetsGeneration.emulatedIndexPage(NA);
NA = assetsGeneration.saveTemplateRender(NA);





/*------------------------------------*\
    $%INIT
\*------------------------------------*/

NA = init.config(NA);
NA = init.init(NA);
NA = init.run(NA);





/*------------------------------------*\
    $%RUN
\*------------------------------------*/

/* Run script with command tools. */
if (require.main === module) {
    NA.init();
}

/* Run script with require as a npm module. */
module.exports = NA;