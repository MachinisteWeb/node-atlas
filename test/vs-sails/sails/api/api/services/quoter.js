var quotes = require('./quotes.json');

exports.getRandomOne = function() {
	var totalAmount = quotes.length,
		rand = Math.floor(Math.random() * totalAmount);

	return quotes[rand];
};