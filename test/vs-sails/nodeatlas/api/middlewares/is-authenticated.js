var jwt = require("express-jwt");

module.exports = function () {
	return [jwt({
  		secret: "7CyDzecU_dwsNuKeNb1K7d2Ktf4RYWFqqXoeV61Cb_qfzaEU_HHY5vETMSH3nx85",
		audience: "NQ8SuASOanVk8LdLru3Syg3uTWUbBWvB"
	}), function (error, request, response, next) {
		if (error.name === "UnauthorizedError") {
    		return response.status(401).send("Invalid Token...");
  		}
	}];
};