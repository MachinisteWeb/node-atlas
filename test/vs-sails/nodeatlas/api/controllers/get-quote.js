var quoter = require("./modules/quoter/service.js");

exports.changeDom = function (next, locals) {
    locals.dom = JSON.stringify({ quote: quoter.getRandomOne() }, undefined, "    ");

    next();
};