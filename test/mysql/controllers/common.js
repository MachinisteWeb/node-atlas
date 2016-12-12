
exports.setModules = function () {
    var NA = this;

    NA.modules.mysql = require('mysql');
    NA.models = {};
    NA.models.User = require('../models/connectors/user.js');
};

exports.setConfigurations = function (next) {
    var NA = this,
        path = NA.modules.path,
        mysql = NA.modules.mysql;

    NA.httpServer.use(
        NA.webconfig.urlRelativeSubPath + "/models", 
        NA.modules.express.static(path.join(NA.serverPath, "models/objects"), { maxAge: 86400000 * 30 })
    );

    NA.mySql = mysql.createPool(NA.webconfig._mysqlConfig);

    next();
};