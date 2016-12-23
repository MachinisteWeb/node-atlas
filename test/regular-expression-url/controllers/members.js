exports.changeVariations = function (params, next) {
    var variations = params.variations,
    	request = params.request;

    console.log("param request:", request.params.member);
    // \> undefined, 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.
    console.log("param variation:", variations.params.member);
    // \> undefined, 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

    console.log("param request", request.params.action);
    // \> undefined, 'show' or 'lolol'.
    console.log("param variation", variations.params.action);
    // \> undefined, 'show' or 'lolol'.

    console.log("query request", request.query.example);
    // \> undefined or 'test'
    console.log("query variation", variations.query.example);
    // \> undefined or 'test'

    console.log("body request", request.body.test);
    // \> undefined or 'This is a test'.
    console.log("body variation", variations.body.test);
    // \> undefined or 'This is a test'.

    next(variations);
};