module.exports = {
    getQuote: function(req, res) {
        return res.json({ quote: quoter.getRandomOne() });
    },
    getProtectedQuote: function(req, res) {
        return res.json({ quote: quoter.getRandomOne() });
    }
};