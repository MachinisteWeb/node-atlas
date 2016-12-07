
exports.setModules = function () {
    var NA = this;

    NA.modules.mysql = require('mysql');
    NA.models = {};
    NA.models.User = require('../models/user.js');
};

exports.setConfigurations = function (next) {
    var NA = this,
        mysql = NA.modules.mysql;

    NA.mySql = mysql.createPool(NA.webconfig._mysqlConfig);

    next();
};