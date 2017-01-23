var jwt = require("express-jwt"),
	authCheck = jwt({
  		secret: "7CyDzecU_dwsNuKeNb1K7d2Ktf4RYWFqqXoeV61Cb_qfzaEU_HHY5vETMSH3nx85",
		audience: "NQ8SuASOanVk8LdLru3Syg3uTWUbBWvB"
	});

module.exports = authCheck;