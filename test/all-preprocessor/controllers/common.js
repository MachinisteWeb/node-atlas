exports.setModules = function () {
	var NA = this;

	NA.modules.exphbs = require("express-handlebars");
	NA.modules.expmtc = require('express-mustache');
};

exports.setConfigurations = function (next) {
	var NA = this,
		exphbs = NA.modules.exphbs;

	if (NA.webconfig.commonEngine === "hbs") {
		NA.express.engine("hbs", exphbs());
	}
	if (NA.webconfig.commonEngine === "mtc") {
		NA.express.engine("mtc", exphbs());
	}

	next();
};