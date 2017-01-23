exports.getRandomOne = function () {
	var quotes = require("./quotes.json"),
		totalAmount = quotes.length,
		rand = Math.floor(Math.random() * totalAmount);

  	return quotes[rand];
};