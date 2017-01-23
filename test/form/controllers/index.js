exports.changeVariations = function (next, locals) {
	
	if (locals.body) {	
		console.log(locals.body);	
		console.log(locals.body.firstname);	
		console.log(locals.body.lastname);
	}

    next();
};