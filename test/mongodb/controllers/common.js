exports.setModules = function () {
	var NA = this,
		path = NA.modules.path;

	NA.modules.mongoose = require('mongoose');
    NA.models = {};
    NA.models.User = require('../assets/javascript/models/user.js');
};

exports.setConfigurations = function (next) {
    var NA = this,
        mongoose = NA.modules.mongoose,
        config = NA.webconfig._mongodbConfig;

    mongoose.Promise = global.Promise;
	mongoose.model("user", NA.models.User, "user");
    mongoose.connect("mongodb://" + config.host + ":" + config.port + "/" + config.database, function (error) {
        next();
    });
};