/*jshint node: true */
var NA = require("../"),
	expect = require("chai").expect,
	na = new NA(),
	na2 = new NA(),
	naFile = new NA(),
	na2File = new NA();

Promise.all([new Promise(function (resolve) {
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

		after(function () {
			resolve();
		})
	});
}), new Promise(function (resolve) {
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
				'afterClosing',
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
				'stopped',
				'exit',
				'close',
				'start',
				'run'
			]);
		});

		after(function () {
			resolve();
		})
	});
}), new Promise(function (resolve) {
	na.started(function () {
		na2.started(function () {
			describe("Avoid instance pollution", function() {
				it("webconfig port different", function() {
					expect(na.webconfig.httpPort).to.not.equal(na2.webconfig.httpPort);
				});
				it("`/` is different", function() {
					expect(na.webconfig.routes['/']).to.not.equal(na2.webconfig.routes['/']);
				});
				na.webconfig.routes['/test'] = 'test.htm';
				it("`/test` do not exist", function() {
					expect(na2.webconfig.routes['/test']).to.equal(undefined);
				});

				after(function () {
					na.close();
					na2.close();
					resolve();
				})
			});
		}).run({
			"path": __dirname,
			"webconfig": "webconfig2.json"
		});
	}).run({
		"path": __dirname,
		"webconfig": "webconfig.json"
	});
}), new Promise(function (resolve) {
	naFile.started(function () {
		na2File.started(function () {
			describe("Avoid route pollution", function() {
				it("webconfig port different", function() {
					expect(naFile.webconfig.httpPort).to.not.equal(na2File.webconfig.httpPort);
				});
				it("`/` is same", function() {
					expect(naFile.webconfig.routes['/']).to.equal(na2File.webconfig.routes['/']);
				});
				naFile.webconfig.routes['/test'] = 'test.htm';
				it("`/test` do not exist", function() {
					expect(na2File.webconfig.routes['/test']).to.equal(undefined);
				});

				after(function () {
					naFile.close();
					na2File.close();
					resolve();
				});
			});
		}).run({
			"path": __dirname,
			"webconfig": "webconfig-f2.json"
		});
	}).run({
		"path": __dirname,
		"webconfig": "webconfig-f.json"
	});
})]).then(function () {
	process.exit(0);
});