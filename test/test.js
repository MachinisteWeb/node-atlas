var NA = require("../"),
    expect = require("chai").expect,
    na = new NA();

describe("Inheritance: NAP inherite from NA", function() {
    var NAP = function () {
        if (!(this instanceof NAP)) {
            return new NAP();
        }
        
        NA.call(this);
    };

    NAP.prototype = Object.create(NA.prototype);
    NAP.prototype.constructor = NA;

    it("(new NA()) instanceof NA", function() {
        expect(new NA() instanceof NA).to.equal(true);
    });
    it("NA() instanceof NA", function() {
        expect(NA() instanceof NA).to.equal(true);
    });
    it("(new NAP()) instanceof NAP", function() {
        expect(new NAP() instanceof NAP).to.equal(true);
    });
    it("NAP() instanceof NAP", function() {
        expect(NAP() instanceof NAP).to.equal(true);
    });
    it("(new NAP()) instanceof NA", function() {
        expect(new NAP() instanceof NA).to.equal(true);
    });
    it("NAP() instanceof NA", function() {
        expect(NAP() instanceof NA).to.equal(true);
    });
});

describe("All NodeAtlas property from NA instance and prototype chain", function() {
    var all = [];
    function logAllProperties(obj) {
        if (obj === null) {
            return;
        }
        all.push(Object.getOwnPropertyNames(obj));
        logAllProperties(Object.getPrototypeOf(obj));
    }
    logAllProperties(na);

    it("All properties of NA instance have not changed?", function() {
        expect(all[0]).to.deep.equal([
            'configuration',
            'afterGeneration',
            'afterRunning',
            'afterNewProject'
        ]);
    });
    it("All properties of NA prototype have not changed?", function() {
        expect(all[1]).to.deep.equal([
            'constructor',
            'initCliConfiguration',
            'initRequiredVars',
            'initRequiredNpmModulesVars',
            'initWebsite',
            'initServerModules',
            'createWebconfig',
            'initNodeModules',
            'initNpmModules',
            'openConfiguration',
            'log',
            'openController',
            "openView",
      		"openVariation",
            'extend',
            'clone',
            'forEach',
            'ifFileExist',
            'common',
            'specific',
            'view',
            'simpleWebServer',
            'nodeAtlasWebServer',
            'initMiddlewares',
            'initLessProcess',
            'initStylusProcess',
            'initSessions',
            'initSockets',
            'initConfigurations',
            'initServer',
            'initStatics',
            'initRoutes',
            'indexPage',
            'sendResponse',
            'redirect',
            'executeRequest',
            'request',
            'requestRegex',
            'pageNotFound',
            'prepareResponse',
            'prepareHeaders',
            'prepareRenderLanguage',
            'prepareRenderPath',
            'prepareRenderVariation',
            'changeVariationsCommon',
            'changeVariationsSpecific',
            'changeDomCommon',
            'changeDomSpecific',
            'intoBrowserAndFiles',
            'renderTemplate',
            'cssAlreadyParse',
            'injectCssAuth',
            'prepareCssInjection',
            'injectCss',
            'lessCompilation',
            'stylusCompilation',
            'cssCompilation',
            'cssMinification',
            'imgOptimization',
            'jsObfuscation',
            'createTemplateProject',
            'initOutputs',
            'publicsGeneration',
            'staticsGeneration',
            'generateAssets',
            'saveRender',
            'changeLanguage',
            'init',
            'generated',
            'started',
            'created',
            'start',
            'run'
        ]);
    });
});


/*var na = NA();

//console.log(na);

//Object.keys(na);
var allFunction = [];
function logAllProperties(obj) {
     if (obj === null) {
     	return;
     }
     allFunction.push(Object.getOwnPropertyNames(obj));
     logAllProperties(Object.getPrototypeOf(obj));
}
logAllProperties(na);
console.log(allFunction);*/