var nodeAtlas = require("node-atlas"),
	versionFrench = new nodeAtlas(),
	versionEnglish = new nodeAtlas(),
	versionTest = new nodeAtlas();

versionFrench.config({
	"generate": true,
	"webconfig": "webconfig.generate.json"
}).afterGeneration(function() {
	versionEnglish.config({
		"generate": true,
		"webconfig": "webconfig.generate.en-us.json"
	}).afterGeneration(function() {
		versionTest.config({
			"browse": "index.html",
			"directory": "../../"
		}).init();
	}).init();
}).init();