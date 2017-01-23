var quotes = require("./data.json");

exports.getRandomOne = function() {
    var totalAmount = quotes.length,
        rand = Math.floor(Math.random() * totalAmount);

    return quotes[rand];
};